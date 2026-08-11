import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import html from '../assets/html.png'
import css from '../assets/css.png'
import react from '../assets/react.png'
import tailwind from '../assets/tailwind.png'
import node from '../assets/node.png'
import laravel from '../assets/laravel.png'
import express from '../assets/express.png'
import mysql from '../assets/mysql.png'
import git from '../assets/git.png'
import github from '../assets/github.png'
import docker from '../assets/docker.png'
import postman from '../assets/postman.png'

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
    const tools = [
        [{ name: 'HTML5', img: html }, { name: 'CSS3', img: css }, { name: 'React JS', img: react }, { name: 'Tailwind CSS', img: tailwind }],
        [{ name: 'Node.js', img: node }, { name: 'Express', img: express }, { name: 'Laravel', img: laravel }, { name: 'MySQL', img: mysql }],
        [{ name: 'Git', img: git }, { name: 'GitHub', img: github }, { name: 'Docker', img: docker }, { name: 'Postman', img: postman }],
    ]

    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const rowRefs = useRef([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Title + subtitle animate in together
            gsap.from([titleRef.current, subtitleRef.current], {
                y: -50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: titleRef.current,
                    start: 'top 85%',
                    toggleActions: 'play none none none',
                },
            });

            // Each skill row slides in from alternating sides
            rowRefs.current.forEach((row, index) => {
                if (!row) return;
                const fromX = index % 2 === 0 ? -80 : 80;

                gsap.from(row, {
                    x: fromX,
                    opacity: 0,
                    duration: 0.8,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: row,
                        start: 'top 88%',
                        toggleActions: 'play none none none',
                    },
                });

                // Stagger each skill card inside the row
                gsap.from(row.children, {
                    scale: 0.6,
                    opacity: 0,
                    duration: 0.5,
                    stagger: 0.1,
                    ease: 'back.out(1.7)',
                    scrollTrigger: {
                        trigger: row,
                        start: 'top 88%',
                        toggleActions: 'play none none none',
                    },
                    delay: 0.2,
                });
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <div id="skills" className='bg-gray-100 py-16 flex flex-col gap-8' ref={sectionRef}>
            <h1 className='text-center text-5xl md:text-6xl font-bold text-gray-900' ref={titleRef}>
                My work <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500'>skills</span>
            </h1>
            <p className='text-center mx-auto w-11/12 md:w-[50%] text-gray-600 text-lg leading-relaxed' ref={subtitleRef}>
                I believe that great web applications combine clean code, thoughtful design, and seamless user experiences.
                Every project is an opportunity to learn, improve, and create something meaningful.
            </p>

            <div className='flex flex-col gap-6 mx-4 max-w-5xl md:mx-auto w-full px-4 md:px-0'>
                {tools.map((line, index) => (
                    <div
                        key={index}
                        ref={el => rowRefs.current[index] = el}
                        className='bg-white rounded-xl grid grid-cols-2 md:grid-cols-4 gap-6 p-6 shadow-sm border border-gray-100'
                    >
                        {line.map((tool) => (
                            <div key={tool.name} className='flex flex-col items-center justify-center gap-4 hover:-translate-y-1 transition-transform duration-300'>
                                <div className='h-25 w-25 flex items-center justify-center'>
                                    {tool.img ? (
                                        <img src={tool.img} alt={tool.name} className='max-h-full max-w-full object-contain drop-shadow-sm' />
                                    ) : (
                                        <div className='h-full w-full flex items-center justify-center bg-gray-50 rounded-full border-2 border-gray-100'>
                                            <span className='text-2xl font-bold text-gray-300'>{tool.name.charAt(0)}</span>
                                        </div>
                                    )}
                                </div>
                                <p className='font-medium text-gray-700 tracking-wide text-sm md:text-base text-center'>{tool.name}</p>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Skills