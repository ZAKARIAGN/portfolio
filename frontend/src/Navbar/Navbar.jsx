import React, { useEffect, useRef, useState } from 'react'
import logo from '../assets/logo.png'
import gsap from "gsap";
import { ScrollToPlugin } from 'gsap/all';

gsap.registerPlugin(ScrollToPlugin);


const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const links = [
        { label: "Home", href: "#hero" },
        { label: "About", href: "#about" },
        { label: "Skills", href: "#skills" },
        { label: "Projects", href: "#projects" },
        { label: "Contact", href: "#contact" },
    ]
    const navRef = useRef(null);
    const logoRef = useRef(null);
    const linksRef = useRef(null);
    const mobileMenuRef = useRef(null);

    const handleScrollTo = (href) => {
        setIsMobileMenuOpen(false);
        gsap.to(window, {
            scrollTo: href,
            duration: 1.2,
            ease: "power2.inOut",
        });
    }

    useEffect(() => {
        if (isMobileMenuOpen) {
            gsap.to(mobileMenuRef.current, {
                height: "auto",
                opacity: 1,
                duration: 0.4,
                ease: "power2.out",
                display: "block"
            });
        } else {
            gsap.to(mobileMenuRef.current, {
                height: 0,
                opacity: 0,
                duration: 0.3,
                ease: "power2.in",
                display: "none"
            });
        }
    }, [isMobileMenuOpen]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline();

            tl.from(navRef.current, {
                y: -100,
                opacity: 0,
                duration: 0.8,
                ease: "power3.out",
            })
                .from(logoRef.current, {
                    scale: 0,
                    rotation: -180,
                    duration: 0.6,
                    ease: "back.out(1.7)",
                    clearProps: "transform",
                }, "-=0.4")
                .from(
                    linksRef.current.children,
                    {
                        y: -30,
                        opacity: 0,
                        stagger: 0.15,
                        duration: 0.5,
                    },
                    "-=0.3"
                );
        });

        return () => ctx.revert();
    }, [])
    return (
        <nav className='fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md shadow-sm' ref={navRef}>
            <div className='max-w-7xl mx-auto px-6 py-4 flex justify-between md:justify-center items-center gap-12'>
                <img className='w-[50px] h-[50px] object-contain cursor-pointer transition-transform duration-300 hover:scale-110' src={logo} alt="logo" ref={logoRef} />
                
                {/* Desktop Menu */}
                <ul className='hidden md:flex gap-8 text-lg font-medium text-gray-700 justify-center items-center' ref={linksRef}>
                    {links.map((link) => (
                        <li key={link.label}>
                            <a
                                className='relative px-2 py-1 overflow-hidden transition-colors duration-300 hover:text-blue-600 group cursor-pointer'
                                onClick={() => handleScrollTo(link.href)}
                            >
                                {link.label}
                                <span className='absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 bg-blue-600 transition-transform duration-500 group-hover:scale-x-100' />
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Toggle Button */}
                <div className='md:hidden flex items-center'>
                    <button 
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className='text-gray-700 hover:text-blue-600 focus:outline-none'
                        aria-label="Toggle mobile menu"
                    >
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            {isMobileMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            <div 
                ref={mobileMenuRef} 
                className='md:hidden bg-white border-t border-gray-100 overflow-hidden hidden shadow-md'
                style={{ height: 0, opacity: 0 }}
            >
                <ul className='flex flex-col px-6 py-4 gap-4 text-center'>
                    {links.map((link) => (
                        <li key={link.label}>
                            <a
                                className='block text-lg font-medium text-gray-700 hover:text-blue-600 cursor-pointer py-2'
                                onClick={() => handleScrollTo(link.href)}
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar