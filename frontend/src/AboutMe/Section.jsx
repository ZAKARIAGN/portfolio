import React, { useState, useCallback } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import ShowCard from './ShowCard';

const SKILLS = [
    { title: 'React.js', color: '#60a5fa' },
    { title: 'Node.js', color: '#4ade80' },
    { title: 'Express.js', color: '#fb923c' },
    { title: 'MySql', color: '#38bdf8' },
];

const Section = ({ onAboutMe }) => {
    const reduceMotion = useReducedMotion();
    const [cardOpen, setCardOpen] = useState(false);

    const toggleCard = useCallback(() => setCardOpen((open) => !open), []);
    const closeCard = useCallback(() => setCardOpen(false), []);

    const container = {
        hidden: {},
        show: {
            transition: { staggerChildren: reduceMotion ? 0 : 0.12, delayChildren: 0.1 },
        },
    };

    const item = {
        hidden: { opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 24 },
        show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
    };

    return (
        <section
            id="section"
            className="relative w-full min-h-screen bg-[#07070a] flex flex-col justify-center items-start px-6 sm:px-10 py-24 overflow-hidden"
        >
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 z-0 opacity-[0.03]"
                style={{
                    backgroundImage:
                        'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)',
                    backgroundSize: '40px 40px',
                }}
            />

            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="relative z-10 w-full max-w-3xl"
            >
                <motion.h1
                    variants={item}
                    className="font-black tracking-tight leading-[0.95] text-[clamp(3.5rem,11vw,7.5rem)]"
                    style={{ fontFamily: "'Segoe UI', 'Inter', system-ui, Arial, sans-serif" }}
                >
                    <span className="block bg-gradient-to-b from-white to-blue-600 bg-clip-text text-transparent">Full Stack</span>
                    <span className="block text-neutral-400">Developer</span>
                </motion.h1>

                <motion.p
                    variants={item}
                    className="mt-8 max-w-[19rem] sm:max-w-sm font-serif text-sm leading-7 text-neutral-400"
                >
                    Building modern, scalable web applications from frontend to backend.
                    I turn ideas into complete digital experiences using clean interfaces,
                    robust APIs, and reliable database architectures.
                </motion.p>

                <motion.ul variants={item} className="mt-8 flex flex-wrap gap-3">
                    {SKILLS.map((skill) => (
                        <li
                            key={skill.title}
                            style={{ '--skill-color': skill.color }}
                            className="px-4 py-2 rounded-full bg-[#111113] border border-white/[0.06] text-[11px] font-semibold text-white cursor-default transition-all duration-300 hover:border-[color:var(--skill-color)] hover:text-[color:var(--skill-color)] hover:shadow-[0_0_16px_-2px_var(--skill-color)] hover:[text-shadow:0_0_8px_var(--skill-color)]"
                        >
                            {skill.title}
                        </li>
                    ))}
                </motion.ul>

                <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-4 sm:gap-10">
                    <button
                        type="button"
                        onClick={toggleCard}
                        aria-expanded={cardOpen}
                        aria-controls="business-card"
                        className="px-6 py-2.5 rounded-full border border-blue-500/70 text-blue-400 text-[10px] font-semibold uppercase tracking-[0.25em] transition-colors duration-300 hover:bg-blue-500/10 hover:text-blue-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
                    >
                        {cardOpen ? 'Hide Card' : 'Show Card'}
                    </button>

                    <button
                        type="button"
                        onClick={onAboutMe}
                        className="px-6 py-2.5 rounded-full border border-neutral-800 text-white text-[10px] font-bold uppercase tracking-wide transition-colors duration-300 hover:border-neutral-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    >
                        About Me
                    </button>
                </motion.div>
            </motion.div>

            <div className="relative z-10 w-full lg:w-auto lg:absolute lg:right-10 xl:right-24 2xl:right-40 lg:top-1/2 lg:-translate-y-1/2">
                <ShowCard isOpen={cardOpen} onClose={closeCard} />
            </div>
        </section>
    );
};

export default Section;