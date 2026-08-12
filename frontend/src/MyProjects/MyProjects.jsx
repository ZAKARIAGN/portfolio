import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import github from "../assets/github.png"
import { projects } from "./projectsObject"
import { Star } from 'lucide-react'

// Import skill icons
import reactIcon from '../assets/react.png'
import nodeIcon from '../assets/node.png'
import expressIcon from '../assets/Express.png'
import mysqlIcon from '../assets/mysql.png'
import tailwindIcon from '../assets/tailwind.png'
import htmlIcon from '../assets/html.png'
import cssIcon from '../assets/css.png'
import laravelIcon from '../assets/laravel.png'

const skillIcons = {
  "React.js": reactIcon,
  "Node.js": nodeIcon,
  "Express.js": expressIcon,
  "MySql": mysqlIcon,
  "Tailwind": tailwindIcon,
  "Tailwind CSS": tailwindIcon,
  "HTML": htmlIcon,
  "CSS": cssIcon,
  "Laravel": laravelIcon
}

gsap.registerPlugin(ScrollTrigger);

const MyProjects = () => {

  const sectionRef = useRef(null);
  const badgeRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from([badgeRef.current, titleRef.current, subtitleRef.current], {
        y: -40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });

      cardsRef.current.forEach((card, index) => {
        if (!card) return;
        gsap.from(card, {
          y: 60,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" className='relative bg-white flex flex-col gap-8 py-24 px-4 md:px-8 overflow-hidden' ref={sectionRef}>
      
      <div className='absolute top-10 right-20 w-[450px] h-[450px] bg-blue-100/40 rounded-full blur-3xl pointer-events-none' />
      <div className='absolute bottom-20 left-10 w-[400px] h-[400px] bg-blue-50 rounded-full blur-3xl pointer-events-none' />
      <div
          className='absolute top-40 left-10 w-48 h-48 opacity-20 pointer-events-none'
          style={{ backgroundImage: 'radial-gradient(circle, #3b82f6 2.5px, transparent 2.5px)', backgroundSize: '24px 24px' }}
      />
      
      <div className='max-w-6xl mx-auto w-full z-10'>
        <div className="flex justify-center mb-6" ref={badgeRef}>
           <span className="px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs sm:text-sm font-bold tracking-widest uppercase shadow-sm flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-600"></span>
              MY PROJECTS
           </span>
        </div>

        <h1 className='text-center text-5xl md:text-6xl lg:text-[70px] font-bold text-gray-900 mb-6' ref={titleRef}>
          My <span className='text-blue-500'>Projects</span>
        </h1>
        <p className='text-center mx-auto max-w-2xl text-gray-500 text-lg md:text-xl leading-relaxed mb-20' ref={subtitleRef}>
          A selection of projects that showcase my experience in building modern, responsive, and user-focused web applications.
        </p>

        <div className={`grid grid-cols-1 ${projects.length === 1 ? 'max-w-2xl mx-auto' : 'lg:grid-cols-2'} gap-10 w-full`}>
          {projects.map((project, index) => (
             <div 
               key={index} 
               ref={el => cardsRef.current[index] = el} 
               className="flex flex-col w-full bg-[#0b1120] rounded-[2rem] sm:rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] overflow-hidden group"
             >
                <div className="w-full h-[240px] sm:h-[300px] bg-white flex items-center justify-center relative overflow-hidden p-4 sm:p-6">
                    <img 
                      src={project.img} 
                      className="w-full h-full object-cover rounded-xl shadow-xl transition-transform duration-500 group-hover:scale-[1.03] relative z-10" 
                      alt={project.name} 
                    />
                    <div className="absolute left-0 bottom-0 w-full h-1/2 bg-gradient-to-t from-gray-50 to-transparent pointer-events-none z-20"></div>
                </div>
                
                <div className="w-full bg-[#0b1120] text-white p-6 sm:p-10 flex flex-col flex-grow relative overflow-hidden">
                   
                   <div className="absolute -bottom-20 -right-20 w-96 h-96 border-[1px] border-blue-500/10 rounded-full"></div>
                   <div className="absolute -bottom-16 -right-16 w-96 h-96 border-[1px] border-blue-500/10 rounded-full"></div>
                   <div className="absolute -bottom-12 -right-12 w-96 h-96 border-[1px] border-blue-500/10 rounded-full"></div>
                   <div className="absolute -bottom-8 -right-8 w-96 h-96 border-[1px] border-blue-500/10 rounded-full"></div>
                   <div className="absolute -bottom-4 -right-4 w-96 h-96 border-[1px] border-blue-500/10 rounded-full"></div>

                   <div className="relative z-10 h-full flex flex-col">
                       <div className="inline-flex items-center gap-2 px-3 py-1 sm:py-1.5 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm font-medium mb-4 sm:mb-6 w-fit text-gray-300">
                           <Star size={14} className="text-white" />
                           Featured Project
                       </div>
                       
                       <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 tracking-tight">{project.name}</h3>
                       <p className="text-gray-400 text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed border-b border-white/10 pb-6 sm:pb-8">{project.description}</p>
                       
                       <div className="flex flex-wrap gap-2 sm:gap-3 mb-8 sm:mb-10">
                          {project.skills.map((skill, skillIndex) => (
                              <div key={skillIndex} className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-white rounded-full text-gray-800 font-semibold shadow-sm text-xs sm:text-sm">
                                  {skillIcons[skill] && <img src={skillIcons[skill]} className="w-3.5 h-3.5 sm:w-4 sm:h-4 object-contain" alt={skill} />}
                                  <span>{skill}</span>
                              </div>
                          ))}
                       </div>
                       
                       <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-auto">
                           <a href={project.github} target="_blank" rel="noreferrer" className="flex-1 py-3 sm:py-3.5 rounded-xl border border-white/20 text-white text-center flex justify-center items-center gap-2 hover:bg-white/10 transition-colors font-semibold text-sm sm:text-base">
                               <img src={github} className="w-5 h-5 filter invert" alt="github" />
                               Code
                           </a>
                           <a href={project.live} target="_blank" rel="noreferrer" className="flex-1 py-3 sm:py-3.5 rounded-xl bg-blue-600 text-white text-center flex justify-center items-center gap-2 hover:bg-blue-700 transition-colors font-semibold shadow-lg shadow-blue-600/20 text-sm sm:text-base">
                               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                               </svg>
                               Live Demo
                           </a>
                       </div>
                   </div>
                </div>
             </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MyProjects