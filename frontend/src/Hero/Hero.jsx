import React from 'react';
import { motion } from 'framer-motion';
import { Hexagon, Menu, ArrowUpRight, MousePointer2, ArrowDown } from 'lucide-react';
import logo from "../assets/logo.png";

const Hero = () => {
    return (
        <div id="hero" className="relative w-full h-screen bg-[#07070a] overflow-hidden font-sans text-white select-none">
            <div 
                className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
                style={{ 
                    backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', 
                    backgroundSize: '40px 40px' 
                }}
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center z-0 pointer-events-none w-full h-full">
                <h1 className="text-[25vw] md:text-[22vw] lg:text-[20vw] font-black leading-[0.75] tracking-tighter text-[#f4f4f5] z-0">
                    ZAKARIA
                </h1>
                <h1 
                    className="text-[25vw] md:text-[22vw] lg:text-[20vw] font-black leading-[0.75] tracking-tighter text-transparent z-20" 
                    style={{ WebkitTextStroke: '2px rgba(255,255,255,0.15)' }}
                >
                    GNAOUI
                </h1>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[900px] aspect-square flex items-center justify-center z-10 pointer-events-none">
                <motion.div 
                    animate={{ rotate: 360 }} 
                    transition={{ duration: 25, repeat: Infinity, ease: 'linear' }} 
                    className="absolute w-[90%] h-[35%] rounded-[100%] border border-blue-500/30" 
                />
                <motion.div 
                    animate={{ rotate: -360 }} 
                    transition={{ duration: 35, repeat: Infinity, ease: 'linear' }} 
                    className="absolute w-[80%] h-[25%] rounded-[100%] border border-indigo-500/20" 
                />
                <motion.div 
                    animate={{ rotate: 360 }} 
                    transition={{ duration: 45, repeat: Infinity, ease: 'linear' }} 
                    className="absolute w-[70%] h-[40%] rounded-[100%] border border-purple-500/10" 
                />
            </div>

            <div className="absolute top-6 left-6 md:top-10 md:left-12 z-30 flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-950/50 rounded-full flex items-center justify-center border border-blue-900/50 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                    <img src={logo} alt="ZG Logo" />
                </div>
                <span className="text-xs font-bold tracking-[0.2em] text-gray-300">ZG / 01</span>
            </div>
            <div className="absolute top-[30%] left-6 md:left-12 z-30 hidden lg:block">
                <div className="flex items-center gap-4">
                    <span className="text-[10px] text-blue-600 font-mono font-bold tracking-widest">01</span>
                    <span className="text-[10px] font-semibold tracking-[0.2em] text-gray-400">SOFTWARE ENGINEER</span>
                </div>
            </div>
            <div className="absolute bottom-6 left-6 md:bottom-10 md:left-12 z-30 flex flex-col gap-8">
                <p className="text-sm md:text-base text-gray-400 leading-relaxed max-w-xs font-light">
                    Digital experiences with a pulse.<br/>
                    Design, code, and a little bit of magic.
                </p>
                <div className="flex items-center gap-2 text-gray-500 text-[10px] font-semibold tracking-[0.2em] cursor-pointer hover:text-white transition-colors group">
                    <span>SCROLL TO EXPLORE</span>
                    <ArrowDown size={14} className="group-hover:translate-y-1 transition-transform" />
                </div>
            </div>
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 md:bottom-10 z-30 flex flex-col items-center gap-2 text-[10px] tracking-[0.25em] font-semibold text-gray-500">
                <span>BASED IN MOROCCO</span>
                <span className="text-gray-600">WORKING EVERYWHERE</span>
            </div>
            <div className="absolute bottom-6 right-6 md:bottom-10 md:right-12 z-30">
                <a href="#contact" className="flex items-center gap-2 text-[10px] font-semibold tracking-[0.2em] text-blue-500 hover:text-blue-400 transition-colors group">
                    <span>LET'S TALK</span>
                    <ArrowUpRight size={14} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                </a>
            </div>
            <div className="absolute bottom-32 right-12 z-30 hidden lg:flex items-center justify-center" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
                <div className="flex items-center gap-3 text-[10px] font-semibold tracking-[0.25em] text-blue-700/80">
                    <MousePointer2 size={12} className="rotate-180" />
                    <span>MOVE YOUR CURSOR</span>
                </div>
            </div>

        </div>
    );
};

export default Hero;