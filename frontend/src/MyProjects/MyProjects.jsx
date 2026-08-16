import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import github from "../assets/github.png"
import { projects } from "./projectsObject"
import { Star } from 'lucide-react'
import { CardStack } from '../components/ui/card-stack'

// Import skill icons
import reactIcon from '../assets/react.png'
import nodeIcon from '../assets/node.png'
import expressIcon from '../assets/express.png'
import mysqlIcon from '../assets/mysql.png'
import tailwindIcon from '../assets/tailwind.png'
import htmlIcon from '../assets/html.png'
import cssIcon from '../assets/css.png'
import laravelIcon from '../assets/laravel-seeklogo.png'

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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" className='relative bg-white dark:bg-transparent transition-colors duration-300 flex flex-col gap-8 py-24 px-4 md:px-8 overflow-hidden' ref={sectionRef}>

      <div className='absolute top-10 right-20 w-[450px] h-[450px] bg-blue-100/40 dark:bg-blue-900/20 rounded-full blur-3xl pointer-events-none' />
      <div className='absolute bottom-20 left-10 w-[400px] h-[400px] bg-blue-50 dark:bg-blue-900/10 rounded-full blur-3xl pointer-events-none' />
      <div
        className='absolute top-40 left-10 w-48 h-48 opacity-20 dark:opacity-10 pointer-events-none'
        style={{ backgroundImage: 'radial-gradient(circle, #3b82f6 2.5px, transparent 2.5px)', backgroundSize: '24px 24px' }}
      />

      <div className='max-w-6xl mx-auto w-full z-10'>
        <div className="flex justify-center mb-6" ref={badgeRef}>
          <span className="px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800/50 text-blue-600 dark:text-blue-400 text-xs sm:text-sm font-bold tracking-widest uppercase shadow-sm flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-500"></span>
            MY PROJECTS
          </span>
        </div>

        <h1 className='text-center  text-5xl md:text-6xl lg:text-[70px] font-bold text-gray-900 mb-6' ref={titleRef}>
          My <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500'>Projects</span>
        </h1>
        <p className='text-center mx-auto max-w-2xl text-gray-500 dark:text-gray-400 text-lg md:text-xl leading-relaxed mb-20' ref={subtitleRef}>
          A selection of projects that showcase my experience in building modern, responsive, and user-focused web applications.
        </p>

        <div className="w-full flex justify-center items-center py-10">
          <CardStack
            items={projects.map((project, index) => ({
              id: index,
              title: project.name,
              description: project.description,
              imageSrc: project.img,
              href: project.live,
              github: project.github,
              skills: project.skills
            }))}
            cardWidth={500}
            cardHeight={320}
            autoAdvance
            intervalMs={3000}
            showDots
          />
        </div>
      </div>
    </section>
  )
}

export default MyProjects