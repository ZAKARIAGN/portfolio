import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import man from '../assets/man.png'
import editor from '../assets/editor.png'
import earth from '../assets/bgHero.png'
import react from "../assets/react.png";
import node from "../assets/node.png";
import express from "../assets/Express.png";
import mysql from '../assets/mysql.png'
import CV from '../assets/CV.pdf'


const Hero = () => {

    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const descRef = useRef(null);
    const buttonsRef = useRef(null);
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
                    stagger: 0.2,
                    duration: 0.6,
                }, "-=0.1")
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
        <div id="hero" className='relative flex flex-col lg:flex-row px-4 md:px-10 items-center overflow-hidden min-h-screen pt-24 lg:pt-0' style={{ backgroundImage: `url(${earth})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className='flex flex-col justify-center gap-4 py-6 lg:py-20 w-full lg:w-1/2 z-10'>
                <p className='text-lg md:text-2xl font-medium text-blue-600 tracking-wide uppercase'>Hello, I'm</p>
                <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-[70px] font-extrabold leading-tight text-gray-900' ref={titleRef}>
                    ZAKARIA <br className="hidden sm:block"/><span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500'>GNAOUI</span>
                </h1>
                <p className='text-lg md:text-xl font-semibold text-gray-700' ref={subtitleRef}>Full Stack Developer</p>
                <p className='text-base md:text-lg text-gray-500 max-w-xl leading-relaxed' ref={descRef}>
                    I build digital experiences through web development, creating responsive and functional applications for the modern web.
                </p>
                <div className='flex flex-col sm:flex-row flex-wrap gap-4 mt-2' ref={buttonsRef}>
                    <a href="#projects" className='w-full sm:w-auto text-center bg-blue-600 text-white font-semibold px-8 sm:px-14 py-3.5 sm:py-4 rounded-[3px] shadow-lg shadow-blue-500/30 hover:bg-blue-700 hover:-translate-y-1 transition-all duration-300'>
                        View My Projects
                    </a>
                    <a href={CV} download className='w-full sm:w-auto text-center bg-white text-gray-800 font-semibold px-8 sm:px-10 py-3.5 sm:py-4 rounded-[3px] border-2 border-gray-200 hover:border-gray-800 hover:bg-gray-800 hover:text-white hover:-translate-y-1 transition-all duration-300'>
                        Download CV
                    </a>
                </div>

                <div className='flex flex-wrap items-center gap-3 sm:gap-4 pt-8 lg:pt-10'>
                    <div className='flex items-center gap-1 sm:gap-2 p-1 transition-all duration-300'>
                        <img src={react} alt="react" className='w-10 h-10 sm:w-16 sm:h-16 object-contain' />
                        <p className="hidden sm:block text-xl font-medium text-gray-700">React</p>
                    </div>
                    <div className='flex items-center gap-1 sm:gap-2 p-1 transition-all duration-300'>
                        <img src={node} alt="node" className='w-10 h-10 sm:w-16 sm:h-16 object-contain' />
                        <p className="hidden sm:block text-xl font-medium text-gray-700">Node</p>
                    </div>
                    <div className='flex items-center gap-1 sm:gap-2 p-1 transition-all duration-300'>
                        <img src={express} alt="express" className='w-10 h-10 sm:w-16 sm:h-16 object-contain' />
                        <p className="hidden sm:block text-xl font-medium text-gray-700">Express</p>
                    </div>
                    <div className='flex items-center gap-1 sm:gap-2 p-1 transition-all duration-300'>
                        <img src={mysql} alt="mysql" className='w-10 h-10 sm:w-16 sm:h-16 object-contain' />
                        <p className="hidden sm:block text-xl font-medium text-gray-700">MySQL</p>
                    </div>
                </div>
            </div>
            
            <div className='relative flex justify-center items-end w-full h-[350px] sm:h-[450px] md:h-[550px] lg:h-screen lg:w-1/2 mt-8 lg:mt-0'>
                <img src={man} alt="man" className='absolute bottom-0 h-[300px] sm:h-[400px] md:h-[500px] lg:h-[700px] object-contain' ref={manRef} />
                <img src={editor} alt="editor" className='absolute bottom-4 sm:bottom-10 right-0 sm:right-10 lg:right-0 w-[45%] h-[45%] object-contain drop-shadow-2xl' ref={editorRef} />
            </div>

        </div>
    )
}

export default Hero