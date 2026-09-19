import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FaGithub } from 'react-icons/fa'
import { FiExternalLink } from 'react-icons/fi'
import { projects } from './projectsObject'

gsap.registerPlugin(ScrollTrigger)

const GITHUB_PROFILE = ''

const ACCENTS = ['#3b82f6', '#a855f7', '#06b6d4', '#f97316']

const isVideo = (src) => typeof src === 'string' && /\.(mp4|webm)$/i.test(src)

const getHost = (url) => {
  if (!url) return 'localhost:3000'
  try {
    return new URL(url).host
  } catch {
    return url
  }
}

const normalizeSkill = (s) => (typeof s === 'string' ? { name: s } : s)

const ProjectShowcase = ({ project, index }) => {
  const tiltRef = useRef(null)
  const [tipOpen, setTipOpen] = useState(false)
  const accent = project.color || ACCENTS[index % ACCENTS.length]
  const reversed = index % 2 === 1
  const { name, description, img, live, github, skills = [] } = project

  const handleMove = (e) => {
    const el = tiltRef.current
    if (!el) return
    if (!window.matchMedia('(hover: hover) and (prefers-reduced-motion: no-preference)').matches) return

    const rect = el.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width
    const py = (e.clientY - rect.top) / rect.height

    el.style.setProperty('--mx', `${px * 100}%`)
    el.style.setProperty('--my', `${py * 100}%`)

    gsap.to(el, {
      rotateY: (px - 0.5) * 10,
      rotateX: -(py - 0.5) * 10,
      transformPerspective: 900,
      duration: 0.4,
      ease: 'power2.out',
      overwrite: 'auto',
    })
  }

  const handleLeave = () => {
    const el = tiltRef.current
    if (!el) return
    gsap.to(el, { rotateX: 0, rotateY: 0, duration: 0.6, ease: 'power3.out', overwrite: 'auto' })
  }

  const frame = (
    <div
      ref={tiltRef}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="group relative will-change-transform"
      style={{ '--c': accent, '--mx': '50%', '--my': '50%' }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-6 rounded-[2rem] opacity-30 blur-3xl transition-opacity duration-500 group-hover:opacity-50"
        style={{ background: 'var(--c)' }}
      />

      <div
        className="relative overflow-hidden rounded-xl border border-white/10 bg-[#0c0c0f] transition-shadow duration-500 group-hover:border-[color:var(--c)]"
        style={{ boxShadow: '0 30px 60px -20px rgba(0,0,0,0.8), 0 0 40px -18px var(--c)' }}
      >
        
        <div className="flex items-center gap-2 border-b border-white/[0.06] bg-[#111115] px-4 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          <div className="mx-3 min-w-0 flex-1 truncate rounded-md bg-black/40 px-3 py-1 text-center text-[11px] text-gray-500">
            {getHost(live)}
          </div>
          <span className="w-[42px] shrink-0" aria-hidden="true" />
        </div>

        
        <div className="relative aspect-[16/10] overflow-hidden bg-[#08080b]">
          {isVideo(img) ? (
            <video
              src={img}
              autoPlay
              loop
              muted
              playsInline
              className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
            />
          ) : (
            <img
              src={img}
              alt={`${name} screenshot`}
              loading="lazy"
              className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
            />
          )}

          
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{
              background:
                'radial-gradient(420px circle at var(--mx) var(--my), color-mix(in srgb, var(--c) 22%, transparent), transparent 60%)',
            }}
          />
        </div>
      </div>
    </div>
  )

  return (
    <article
      className={`project-row flex flex-col items-center gap-10 lg:gap-16 ${
        reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'
      }`}
    >
      
      <div className="project-frame w-full lg:w-[58%]">
        {live ? (
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${name} live demo`}
            className="block rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white/70"
          >
            {frame}
          </a>
        ) : (
          frame
        )}
      </div>

      
      <div className="project-info w-full lg:w-[42%]" style={{ '--c': accent }}>
        <div className="mb-5 h-1 w-12 rounded-full" style={{ background: 'var(--c)' }} />

        <h3 className="text-3xl font-bold tracking-tight text-white md:text-4xl">{name}</h3>

        <p className="mt-4 max-w-md text-base leading-7 text-gray-400">{description}</p>

        {skills.length > 0 && (
          <ul className="mt-6 flex flex-wrap gap-2" aria-label={`${name} tech stack`}>
            {skills.map((raw, i) => {
              const skill = normalizeSkill(raw)
              const Icon = skill.Icon
              return (
                <li
                  key={`${skill.name}-${i}`}
                  className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-gray-300"
                >
                  {Icon && <Icon size={13} aria-hidden="true" style={{ color: skill.color }} />}
                  {skill.name}
                </li>
              )
            })}
          </ul>
        )}

        <div className="mt-8 flex flex-wrap gap-3">
          {live ? (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-black transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/70"
              style={{ background: 'var(--c)' }}
            >
              <FiExternalLink aria-hidden="true" />
              Live Demo
            </a>
          ) : (
            <span
              className="relative inline-flex"
              onMouseEnter={() => setTipOpen(true)}
              onMouseLeave={() => setTipOpen(false)}
            >
              <button
                type="button"
                aria-disabled="true"
                aria-describedby={`live-tip-${index}`}
                onFocus={() => setTipOpen(true)}
                onBlur={() => setTipOpen(false)}
                
                onClick={() => {
                  setTipOpen(true)
                  setTimeout(() => setTipOpen(false), 2000)
                }}
                className="inline-flex cursor-not-allowed items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-5 py-2.5 text-sm font-semibold text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/70"
              >
                <FiExternalLink aria-hidden="true" />
                Live Demo
              </button>

              <span
                id={`live-tip-${index}`}
                role="tooltip"
                className="pointer-events-none absolute bottom-full left-1/2 z-20 -translate-x-1/2 pb-5"
              >
                <span
                  className={`relative block origin-bottom transition duration-200 ease-out motion-reduce:transition-none ${
                    tipOpen ? 'translate-y-0 scale-100 opacity-100' : 'translate-y-2 scale-90 opacity-0'
                  }`}
                  style={{ filter: 'drop-shadow(0 8px 14px rgba(0,0,0,0.55))' }}
                >
                  <span className="absolute -top-1.5 left-3 h-4 w-4 rounded-full bg-white" />
                  <span className="absolute -top-2 left-1/2 h-5 w-5 -translate-x-1/2 rounded-full bg-white" />
                  <span className="absolute -top-1.5 right-3 h-4 w-4 rounded-full bg-white" />

                  <span className="relative block whitespace-nowrap rounded-full bg-white px-4 py-2 text-xs font-semibold text-gray-900">
                    Not hosted yet
                  </span>

                  <span
                    className="absolute h-3 w-3 rounded-full bg-white"
                    style={{ top: 'calc(100% + 1px)', left: 'calc(50% - 4px)' }}
                  />
                  <span
                    className="absolute h-1.5 w-1.5 rounded-full bg-white"
                    style={{ top: 'calc(100% + 13px)', left: 'calc(50% - 9px)' }}
                  />
                </span>
              </span>
            </span>
          )}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold text-gray-200 transition hover:border-white/40 hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/70"
            >
              <FaGithub aria-hidden="true" />
              GitHub
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

const MyProjects = () => {
  const sectionRef = useRef(null)
  const badgeRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)

  useEffect(() => {
    
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

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
      })

      
      gsap.utils.toArray('.project-row').forEach((row, i) => {
        const dir = i % 2 === 0 ? -1 : 1
        const scrollTrigger = {
          trigger: row,
          start: 'top 80%',
          toggleActions: 'play none none none',
        }

        gsap.from(row.querySelector('.project-frame'), {
          x: 70 * dir,
          opacity: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger,
        })
        gsap.from(row.querySelector('.project-info'), {
          x: -70 * dir,
          opacity: 0,
          duration: 0.9,
          delay: 0.1,
          ease: 'power3.out',
          scrollTrigger,
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="projects"
      className="relative flex flex-col gap-8 overflow-hidden bg-[#07070a] px-4 py-24 md:px-8"
      ref={sectionRef}
    >
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="pointer-events-none absolute right-20 top-10 h-[450px] w-[450px] rounded-full bg-blue-900/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-20 left-10 h-[400px] w-[400px] rounded-full bg-indigo-900/10 blur-3xl" />

      <div className="z-10 mx-auto w-full max-w-6xl">
        <div className="mb-6 flex justify-center" ref={badgeRef}>
          <span className="flex items-center gap-3 rounded-full border border-gray-800 bg-[#111115] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-blue-400 shadow-sm sm:text-sm">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-blue-500"></span>
            MY PROJECTS
          </span>
        </div>

        <h1
          className="mb-6 text-center text-5xl font-black tracking-tight text-white md:text-6xl lg:text-[70px]"
          ref={titleRef}
        >
          My{' '}
          <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Projects
          </span>
        </h1>
        <p
          className="mx-auto mb-20 max-w-2xl text-center text-lg font-light leading-relaxed text-gray-400 md:text-xl"
          ref={subtitleRef}
        >
          A selection of projects that showcase my experience in building modern, responsive, and
          user-focused web applications.
        </p>

        <div className="space-y-24 md:space-y-32">
          {projects.map((project, index) => (
            <ProjectShowcase key={project.name ?? index} project={project} index={index} />
          ))}
        </div>

        {GITHUB_PROFILE && (
          <div className="mt-24 flex justify-center">
            <a
              href={GITHUB_PROFILE}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-gray-200 transition hover:border-white/40 hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/70"
            >
              <FaGithub aria-hidden="true" />
              See more on GitHub
            </a>
          </div>
        )}
      </div>
    </section>
  )
}

export default MyProjects