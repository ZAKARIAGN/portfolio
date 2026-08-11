import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import batisFoot from "../assets/BatisFoot.png"
import github from "../assets/github.png"

gsap.registerPlugin(ScrollTrigger);

const MyProjects = () => {
  const projects = [
    {
      img: batisFoot,
      name: "BatisFoot",
      description: "Smart football field booking and management platform",
      skills: ["React.js", "Node.js", "Express.js", "MySql", "Tailwind"],
      github: "https://github.com/ZAKARIAGN/BatisFoot.git",
      live: "https://batisfut.vercel.app/"
    }
  ]

  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const cardsRef = useRef([]); 

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from([titleRef.current, subtitleRef.current], {
        y: -60,
        opacity: 0,
        duration: 0.9,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });

      cardsRef.current.forEach((card, index) => {
        if (!card) return;
        gsap.from(card, {
          y: 80,
          opacity: 0,
          scale: 0.95,
          duration: 0.8,
          ease: 'power3.out',
          delay: index * 0.15,
          scrollTrigger: {
            trigger: card,
            start: 'top 88%',
            toggleActions: 'play none none none',
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" className='bg-gray-50 flex flex-col gap-8 py-20 px-4 md:px-8' ref={sectionRef}>
      <div className='max-w-7xl mx-auto w-full'>
        <h1 className='text-center text-5xl md:text-6xl font-extrabold text-gray-900 mb-6' ref={titleRef}>
          My <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500'>Projects</span>
        </h1>
        <p className='text-center mx-auto max-w-2xl text-gray-600 text-lg md:text-xl leading-relaxed mb-16' ref={subtitleRef}>
          A selection of projects that showcase my experience in building modern, responsive, and user-focused web applications.
        </p>

        <div className='flex flex-wrap justify-center gap-10 w-full'>
          {projects.map((project, index) => (
            <div
              key={index}
              ref={el => cardsRef.current[index] = el}
              className='bg-black text-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 w-[30%] md:w-[48%] lg:w-[500px] flex flex-col'
            >
              <div className='relative overflow-hidden group'>
                <img src={project.img} className="w-full h-[250px] object-cover group-hover:scale-105 transition-transform duration-500" alt={project.name} />
                <div className='absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
              </div>

              <div className='p-8 flex flex-col flex-grow'>
                <h3 className='text-2xl font-bold mb-2 text-white'>{project.name}</h3>
                <p className='text-white-600 text-base mb-4 flex-grow'>{project.description}</p>

                <div className='flex flex-wrap gap-2 mb-6'>
                  {project.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-medium border border-blue-100">
                      {skill}
                    </span>
                  ))}
                </div>

                <div className='flex justify-between gap-4 pt-6 border-t border-gray-100 mt-auto'>
                  <a href={project.github} target="_blank" rel="noreferrer" className="flex-1 py-3 rounded-xl bg-gray-900 text-white text-center flex justify-center items-center gap-2 hover:bg-gray-800 transition-colors font-semibold">
                    <img src={github} className="w-5 h-5 filter invert" alt="github" />
                    Code
                  </a>
                  <a href={project.live} target="_blank" rel="noreferrer" className="flex-1 py-3 rounded-xl bg-blue-600 text-white text-center flex justify-center items-center gap-2 hover:bg-blue-700 transition-colors font-semibold">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Live Demo
                  </a>
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