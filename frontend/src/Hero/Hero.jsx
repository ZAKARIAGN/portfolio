import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import cercle from '../assets/cercle.png'
import man from '../assets/man.png'
import editor from '../assets/editor.png'
import earth from '../assets/earth.png'
import CV from '../assets/CV.pdf'


const Hero = () => {

    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const descRef = useRef(null);
    const buttonsRef = useRef(null);
    const circleRef = useRef(null);
    const manRef = useRef(null);
    const editorRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline();

            tl.from(titleRef.current, {
                y: -80,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
            })
                .from(subtitleRef.current, {
                    x: -80,
                    opacity: 0,
                    duration: 0.8,
                }, "-=0.5")
                .from(descRef.current, {
                    y: 40,
                    opacity: 0,
                    duration: 0.8,
                }, "-=0.4")
                .from(buttonsRef.current.children, {
                    y: 30,
                    opacity: 0,
                    stagger: 0.2,
                    duration: 0.6,
                }, "-=0.3")
                .from(circleRef.current, {
                    scale: 0,
                    rotation: -180,
                    duration: 1,
                    ease: "back.out(1.7)",
                }, "-=1")
                .from(manRef.current, {
                    y: 100,
                    opacity: 0,
                    duration: 1,
                }, "-=0.7")
                .from(editorRef.current, {
                    x: 100,
                    opacity: 0,
                    duration: 1,
                }, "-=0.8");
        });

        return () => ctx.revert();
    }, []);
    return (
        <div id="hero" className='flex py-20 mx-10' style={{ backgroundImage: `url(${earth})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className='flex flex-col justify-center gap-6 py-20 w-full lg:w-1/2 z-10'>
                <p className='text-xl md:text-2xl font-medium text-blue-600 tracking-wide uppercase'>Hello, I'm</p>
                <h1 className='text-5xl md:text-7xl lg:text-[80px] font-extrabold leading-tight text-gray-900' ref={titleRef}>
                    ZAKARIA <br /><span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500'>GNAOUI</span>
                </h1>
                <p className='text-2xl md:text-3xl font-semibold text-gray-700' ref={subtitleRef}>Full Stack Developer</p>
                <p className='text-lg md:text-xl text-gray-500 max-w-xl leading-relaxed' ref={descRef}>
                    I build digital experiences through web development, creating responsive and functional applications for the modern web.
                </p>
                <div className='flex flex-wrap gap-4 mt-6' ref={buttonsRef}>
                    <a href={CV} download className='bg-blue-600 text-white font-semibold px-8 py-4 rounded-full shadow-lg shadow-blue-500/30 hover:bg-blue-700 hover:-translate-y-1 transition-all duration-300'>
                        Download CV
                    </a>
                    <a href="" className='bg-white text-gray-800 font-semibold px-8 py-4 rounded-full border-2 border-gray-200 hover:border-gray-800 hover:bg-gray-800 hover:text-white hover:-translate-y-1 transition-all duration-300'>
                        Contact Me
                    </a>
                </div>
            </div>
            <div className='relative flex'>
                <img src={cercle} alt="cercle" ref={circleRef} />
                <img src={man} alt="man" className='absolute bottom-0 h-[700px]' ref={manRef} />
                <img src={editor} alt="editor" className='absolute bottom-0 right-2 w-1/2 h-1/2 object-contain' ref={editorRef} />
            </div>



        </div>
    )
}

export default Hero