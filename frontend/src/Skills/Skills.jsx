import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Code2, Server, Wrench } from 'lucide-react'
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

const categoryIcons = {
    Frontend: <Code2 size={28} className="text-blue-600" />,
    Backend: <Server size={28} className="text-green-600" />,
    Tools: <Wrench size={28} className="text-purple-600" />,
};

const categoryColors = {
    Frontend: 'bg-blue-50 border-blue-100',
    Backend: 'bg-green-50 border-green-100',
    Tools: 'bg-purple-50 border-purple-100',
};

const Skills = () => {
    const tools = [
        [{ title: "Frontend", description: "Building beautiful and responsive user interfaces." }, { name: 'HTML5', img: html }, { name: 'CSS3', img: css }, { name: 'React JS', img: react }, { name: 'Tailwind CSS', img: tailwind }],
        [{ title: "Backend", description: "Powerful backend technologies and databases." }, { name: 'Node.js', img: node }, { name: 'Express', img: express }, { name: 'Laravel', img: laravel }, { name: 'MySQL', img: mysql }],
        [{ title: "Tools & Others", description: "Tools that improve productivity and development flow." }, { name: 'Git', img: git }, { name: 'GitHub', img: github }, { name: 'Docker', img: docker }, { name: 'Postman', img: postman }],
    ]

    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const rowRefs = useRef([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
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
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <div id="skills" className='relative bg-gray-100 py-16 flex flex-col gap-8 overflow-hidden' ref={sectionRef}>

            <div className='absolute top-0 left-0 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2' />
            <div className='absolute top-1/3 right-0 w-96 h-96 bg-cyan-200/25 rounded-full blur-3xl translate-x-1/3' />
            <div className='absolute bottom-0 left-1/4 w-80 h-80 bg-indigo-200/20 rounded-full blur-3xl translate-y-1/3' />

            <div
                className='absolute top-10 right-10 w-40 h-40 opacity-[0.07]'
                style={{ backgroundImage: 'radial-gradient(circle, #3b82f6 1.5px, transparent 1.5px)', backgroundSize: '20px 20px' }}
            />
            <div
                className='absolute bottom-16 left-8 w-32 h-32 opacity-[0.07]'
                style={{ backgroundImage: 'radial-gradient(circle, #6366f1 1.5px, transparent 1.5px)', backgroundSize: '18px 18px' }}
            />

            <div
                className='absolute inset-0 opacity-[0.03]'
                style={{ backgroundImage: 'linear-gradient(to right, #6366f1 1px, transparent 1px), linear-gradient(to bottom, #6366f1 1px, transparent 1px)', backgroundSize: '60px 60px' }}
            />

            <h1 className='text-center text-5xl md:text-6xl font-bold text-gray-900 relative z-10' ref={titleRef}>
                My work <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500'>skills</span>
            </h1>
            <p className='text-center mx-auto w-11/12 md:w-[50%] text-gray-600 text-base md:text-lg leading-relaxed relative z-10 mb-4' ref={subtitleRef}>
                I believe that great web applications combine clean code, thoughtful design, and seamless user experiences.
                Every project is an opportunity to learn, improve, and create something meaningful.
            </p>

            <div className='flex flex-col gap-6 w-full max-w-5xl mx-auto px-4 sm:px-6 relative z-10'>
                {tools.map((line, index) => {
                    const category = line[0];
                    const skills = line.slice(1);
                    const iconKey = category.title.includes('Tools') ? 'Tools' : category.title;

                    return (
                        <div
                            key={index}
                            ref={el => rowRefs.current[index] = el}
                            className='bg-white/80 backdrop-blur-sm rounded-2xl flex flex-col md:flex-row items-stretch p-5 shadow-sm border border-gray-100 gap-6'
                        >
                            <div className='flex items-center gap-4 md:w-[240px] md:min-w-[240px] md:border-r md:border-gray-100 md:pr-6'>
                                <div className={`w-14 h-14 rounded-xl flex items-center justify-center shrink-0 border ${categoryColors[iconKey]}`}>
                                    {categoryIcons[iconKey]}
                                </div>
                                <div>
                                    <h3 className='text-lg font-bold text-gray-900'>{category.title}</h3>
                                    <p className='text-sm text-gray-500 leading-snug'>{category.description}</p>
                                </div>
                            </div>
                            <div className='flex-1 grid grid-cols-2 sm:grid-cols-4 gap-4'>
                                {skills.map((tool) => (
                                    <div
                                        key={tool.name}
                                        data-skill-card
                                        className='flex flex-col items-center justify-center gap-3 p-4 rounded-xl bg-gray-50/80 hover:bg-white hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-default'
                                    >
                                        <div className='h-16 w-16 flex items-center justify-center'>
                                            <img src={tool.img} alt={tool.name} className='max-h-full max-w-full object-contain drop-shadow-sm' />
                                        </div>
                                        <p className='font-medium text-gray-700 tracking-wide text-sm text-center'>{tool.name}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default Skills