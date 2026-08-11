import React, { useEffect, useRef } from 'react'
import logo from '../assets/logo.png'
import gsap from "gsap";
import { ScrollToPlugin } from 'gsap/all';

gsap.registerPlugin(ScrollToPlugin);


const Navbar = () => {
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


    const handleScrollTo = (href) => {
        gsap.to(window, {
            scrollTo: href,
            duration: 1.2,
            ease: "power2.inOut",
        });
    }

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
        <nav className='fixed top-0 left-0 w-full z-50 bg-white backdrop-blur-md' ref={navRef}>
            <div className='max-w-7xl mx-auto px-6 py-4 flex justify-center items-center gap-12'>
                <img className='w-[50px] h-[50px] object-contain cursor-pointer transition-transform duration-300 hover:scale-110' src={logo} alt="logo" ref={logoRef} />
                <ul className='hidden md:flex gap-8 text-lg font-medium text-gray-700 justify-center align-center' ref={linksRef}>
                    {links.map((link) => (
                        <li key={link.label}>
                            <a
                                className='relative px-2 py-1 overflow-hidden transition-colors duration-300 hover:text-blue-600 group'
                                onClick={() => handleScrollTo(link.href)}
                            >
                                {link.label}
                                <span className='absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 bg-blue-600 transition-transform duration-500 group-hover:scale-x-100' />
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar