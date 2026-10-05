import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, X } from 'lucide-react';
import CV from '../assets/CV.pdf';


const ACCENT = '#60a5fa';

const AboutMe = ({ isOpen, onClose }) => {
    const fullText = 'About Me';
    const [typedText, setTypedText] = useState('');
    const closeRef = useRef(null);
    useEffect(() => {
        if (!isOpen) {
            setTypedText('');
            return;
        }
        let index = 0;
        const interval = setInterval(() => {
            index += 1;
            setTypedText(fullText.slice(0, index));
            if (index >= fullText.length) clearInterval(interval);
        }, 120);
        return () => clearInterval(interval);
    }, [isOpen]);

    
    useEffect(() => {
        if (!isOpen) return;

        const onKeyDown = (e) => {
            if (e.key === 'Escape') onClose();
        };
        const previousOverflow = document.body.style.overflow;

        window.addEventListener('keydown', onKeyDown);
        document.body.style.overflow = 'hidden';
        closeRef.current?.focus();

        return () => {
            window.removeEventListener('keydown', onKeyDown);
            document.body.style.overflow = previousOverflow;
        };
    }, [isOpen, onClose]);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 z-50 flex flex-col items-center justify-center px-4 sm:px-6 bg-black/85 backdrop-blur-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    onClick={onClose}
                >
                    <motion.div
                        role="dialog"
                        aria-modal="true"
                        aria-label="About me"
                        onClick={(e) => e.stopPropagation()}
                        initial={{ opacity: 0, y: 40, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.98 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="relative w-full max-w-3xl h-[70vh] max-h-[600px] bg-[#0a0a0a] rounded-[2rem] border border-neutral-800 shadow-[0_0_60px_rgba(0,0,0,0.9)] overflow-hidden flex flex-col"
                    >
                        <div className="relative pt-9 pb-6 px-8 flex justify-center items-center border-b border-neutral-800/70 bg-[#0a0a0a]/90 backdrop-blur-md z-20">
                            <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-white/[0.04] to-transparent pointer-events-none" />

                            <button
                                ref={closeRef}
                                onClick={onClose}
                                aria-label="Close"
                                className="absolute top-5 right-5 p-2 rounded-full text-neutral-500 hover:text-white hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 transition-colors"
                                style={{ outlineColor: ACCENT }}
                            >
                                <X size={18} />
                            </button>

                            <h2 className="text-4xl md:text-5xl font-black tracking-tight flex items-center min-h-[3rem] md:min-h-[3.5rem]">
                                <span className="bg-gradient-to-b from-white to-neutral-400 bg-clip-text text-transparent">
                                    {typedText}
                                </span>
                                <motion.span
                                    animate={{ opacity: [1, 0] }}
                                    transition={{ repeat: Infinity, duration: 0.8, ease: 'linear' }}
                                    className="inline-block w-[4px] h-9 md:h-11 ml-1.5 rounded-full"
                                    style={{ backgroundColor: ACCENT }}
                                />
                            </h2>
                        </div>

                        <div className="about-scroll flex-1 overflow-y-auto px-6 sm:px-12 py-10 relative z-10">
                            <div className="max-w-2xl mx-auto space-y-6 pb-10">
                                <p className="text-neutral-400 text-sm md:text-base leading-relaxed">
                                    I'm a passionate Software Engineer based in Morocco, dedicated to crafting modern, responsive, and highly functional digital experiences. My journey into tech started with an endless curiosity for how things work behind the scenes, leading me down the path of programming, cybersecurity, and system architecture.
                                </p>

                                <p className="text-neutral-400 text-sm md:text-base leading-relaxed">
                                    Over the past 3+ years, I've developed a strong foundation in both frontend and backend technologies. I transform complex ideas into simple, elegant, and user-friendly solutions that bring genuine value to users.
                                </p>

                                <p className="text-neutral-400 text-sm md:text-base leading-relaxed">
                                    What drives me the most is the challenge of problem-solving. Whether it's designing a seamless user interface with React and Tailwind CSS, or architecting a robust backend API with Node.js and Express, I always strive for clean code, optimal performance, and modern design principles.
                                </p>

                                <p className="text-neutral-400 text-sm md:text-base leading-relaxed">
                                    Out of everything in tech, building scalable web applications and exploring the cutting-edge possibilities of AI tools interest me the most. I'm constantly learning new languages, frameworks, and tools to stay ahead of the curve and make technology work smarter and easier for everyone.
                                </p>
                            </div>
                        </div>

                        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#0a0a0a] to-transparent pointer-events-none z-20" />
                    </motion.div>

                    <motion.a
                        href={CV}
                        download
                        onClick={(e) => e.stopPropagation()}
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ delay: 0.25, duration: 0.5 }}
                        className="mt-8 px-8 py-4 rounded-2xl flex items-center gap-3 bg-black border transition-colors duration-300 text-neutral-300 hover:text-white hover:bg-white/[0.04]"
                        style={{ borderColor: `${ACCENT}99` }}
                    >
                        <Download size={18} style={{ color: ACCENT }} />
                        <span className="font-semibold tracking-wide text-sm">Download Resume</span>
                    </motion.a>

                    <style>{`
                        .about-scroll::-webkit-scrollbar { width: 6px; }
                        .about-scroll::-webkit-scrollbar-track { background: transparent; }
                        .about-scroll::-webkit-scrollbar-thumb { background: #262626; border-radius: 10px; }
                        .about-scroll::-webkit-scrollbar-thumb:hover { background: ${ACCENT}; }
                    `}</style>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default AboutMe;