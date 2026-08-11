import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'
import {projects} from "../MyProjects/projectsObject"
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Img1 from '../assets/AboutMe_Img.jpeg'

gsap.registerPlugin(ScrollTrigger)

const AboutMe = () => {
    const sectionRef  = useRef(null)
    const badgeRef    = useRef(null)
    const titleRef    = useRef(null)
    const subtitleRef = useRef(null)
    const textRef     = useRef(null)
    const statsRef    = useRef(null)
    const imgColRef   = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 75%',
                    toggleActions: 'play none none none',
                }
            })

            tl.from(badgeRef.current, {
                x: -60, opacity: 0, duration: 0.7, ease: 'power3.out',
            })
            .from(titleRef.current, {
                y: 80, opacity: 0, duration: 0.9, ease: 'power3.out',
            }, '-=0.3')
            .from(subtitleRef.current, {
                y: 40, opacity: 0, duration: 0.7, ease: 'power3.out',
            }, '-=0.5')
            .from(textRef.current.children, {
                y: 30, opacity: 0, stagger: 0.18, duration: 0.7,
            }, '-=0.4')
            .from(statsRef.current.children, {
                y: 30, opacity: 0, stagger: 0.15, duration: 0.6,
            }, '-=0.3')
            .from(imgColRef.current, {
                x: 80, opacity: 0, duration: 1, ease: 'power3.out',
            }, '<0.2')

        }, sectionRef)

        return () => ctx.revert()
    }, [])

    return (
        <section
            id="about"
            ref={sectionRef}
            className="relative overflow-hidden py-24 px-4 md:px-10"
            style={{ background: 'linear-gradient(135deg, #f0f4ff 0%, #fafbff 50%, #eef2ff 100%)' }}
        >
            <div className="pointer-events-none absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full"
                style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)' }} />
            <div className="pointer-events-none absolute -bottom-20 -left-20 w-[350px] h-[350px] rounded-full"
                style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.10) 0%, transparent 70%)' }} />

            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-16 lg:gap-20 items-center">
                    <div>
                        <span
                            ref={badgeRef}
                            className="inline-flex items-center gap-2 text-indigo-500 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-7 border border-indigo-300/60"
                            style={{ background: 'rgba(99,102,241,0.08)' }}
                        >
                            <span className="text-[0.55rem]">●</span>
                            About Me
                        </span>
                        <h2
                            ref={titleRef}
                            className="font-extrabold leading-[1.1] tracking-tight text-slate-900 mb-5"
                            style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)' }}
                        >
                            I am a{' '}
                            <span className="bg-gradient-to-br from-indigo-500 to-blue-500 bg-clip-text text-transparent">
                                Full Stack
                            </span>
                            <br />
                            <span className="bg-gradient-to-br from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                                Web Developer
                            </span>
                        </h2>
                        <p
                            ref={subtitleRef}
                            className="text-lg text-slate-500 font-medium leading-relaxed mb-7 max-w-xl"
                        >
                            Passionate about crafting modern, responsive web applications
                            with clean code and thoughtful user experiences.
                        </p>

                        <div ref={textRef} className="flex flex-col gap-4 mb-12">
                            <p className="text-base text-slate-500 leading-[1.8] px-5 py-4 rounded-xl border border-slate-200/80 bg-white/70 backdrop-blur-md">
                                I transform ideas into digital solutions by building simple,
                                functional, and user-friendly experiences that make an impact.
                            </p>
                            <p className="text-base text-slate-500 leading-[1.8] px-5 py-4 rounded-xl border border-slate-200/80 bg-white/70 backdrop-blur-md">
                                I enjoy designing and developing projects that solve real
                                problems and bring genuine value to users.
                            </p>
                        </div>

                        <div ref={statsRef} className="flex flex-wrap gap-6">
                            <div className="flex flex-col items-center px-6 py-4 rounded-2xl border border-indigo-200/60 bg-white/70 backdrop-blur-md min-w-[100px]">
                                <span className="text-3xl font-extrabold bg-gradient-to-br from-indigo-500 to-blue-500 bg-clip-text text-transparent">3+</span>
                                <span className="text-xs text-slate-500 font-medium mt-1 tracking-wide">Years Exp.</span>
                            </div>
                            <div className="flex flex-col items-center px-6 py-4 rounded-2xl border border-indigo-200/60 bg-white/70 backdrop-blur-md min-w-[100px]">
                                <span className="text-3xl font-extrabold bg-gradient-to-br from-blue-500 to-cyan-400 bg-clip-text text-transparent">{projects.length}</span>
                                <span className="text-xs text-slate-500 font-medium mt-1 tracking-wide">Projects</span>
                            </div>
                            <div className="flex flex-col items-center px-6 py-4 rounded-2xl border border-indigo-200/60 bg-white/70 backdrop-blur-md min-w-[100px]">
                                <span className="text-3xl font-extrabold bg-gradient-to-br from-cyan-400 to-indigo-500 bg-clip-text text-transparent">100%</span>
                                <span className="text-xs text-slate-500 font-medium mt-1 tracking-wide">Satisfaction</span>
                            </div>
                        </div>
                    </div>

                    <div ref={imgColRef} className="relative">

                        <div className="absolute -inset-5 rounded-3xl blur-3xl z-0"
                            style={{ background: 'linear-gradient(135deg, rgba(99,102,241,0.25), rgba(59,130,246,0.2))' }} />

                        <div
                            className="absolute -top-6 -right-6 w-24 h-24 z-[1] opacity-35"
                            style={{ backgroundImage: 'radial-gradient(circle, #6366f1 1.5px, transparent 1.5px)', backgroundSize: '14px 14px' }}
                        />
                        <div
                            className="absolute -bottom-6 -left-6 w-24 h-24 z-[1] opacity-35"
                            style={{ backgroundImage: 'radial-gradient(circle, #3b82f6 1.5px, transparent 1.5px)', backgroundSize: '14px 14px' }}
                        />

                        <div className="relative z-[2] rounded-3xl overflow-hidden border-[3px] border-white/90 shadow-[0_30px_80px_rgba(99,102,241,0.2),0_10px_30px_rgba(0,0,0,0.1)]">
                            <img
                                src={Img1}
                                alt="Zakaria Gnaoui — Full Stack Developer"
                                className="w-full object-cover block"
                                style={{ height: '520px' }}
                            />
                            <div className="absolute bottom-0 left-0 right-0 h-28"
                                style={{ background: 'linear-gradient(to top, rgba(99,102,241,0.5), transparent)' }} />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default AboutMe