import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { projects } from "../MyProjects/projectsObject"
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Img1 from '../assets/AboutMe_Img.jpeg'
import { Rocket } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const AboutMe = () => {
    const sectionRef = useRef(null)
    const badgeRef = useRef(null)
    const titleRef = useRef(null)
    const subtitleRef = useRef(null)
    const textRef = useRef(null)
    const statsRef = useRef(null)
    const imgColRef = useRef(null)

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

                        <div ref={statsRef} className="flex flex-wrap sm:flex-nowrap justify-between w-full gap-4 sm:gap-6">
                            <div className="flex flex-col items-center px-4 sm:px-6 py-4 rounded-2xl border border-indigo-200/60 bg-white/70 backdrop-blur-md flex-1 min-w-[120px]">
                                <span className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-br from-indigo-500 to-blue-500 bg-clip-text text-transparent">3+</span>
                                <span className="text-[10px] sm:text-xs text-slate-500 font-medium mt-1 tracking-wide">Years Exp.</span>
                            </div>
                            <div className="flex flex-col items-center px-4 sm:px-6 py-4 rounded-2xl border border-indigo-200/60 bg-white/70 backdrop-blur-md flex-1 min-w-[120px]">
                                <span className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-br from-blue-500 to-cyan-400 bg-clip-text text-transparent">{projects.length}</span>
                                <span className="text-[10px] sm:text-xs text-slate-500 font-medium mt-1 tracking-wide">Projects</span>
                            </div>
                            <div className="flex flex-col items-center px-4 sm:px-6 py-4 rounded-2xl border border-indigo-200/60 bg-white/70 backdrop-blur-md flex-1 min-w-[120px]">
                                <span className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-br from-cyan-400 to-indigo-500 bg-clip-text text-transparent">100%</span>
                                <span className="text-[10px] sm:text-xs text-slate-500 font-medium mt-1 tracking-wide">Satisfaction</span>
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

                        <div ref={imgColRef} className="relative w-full max-w-[500px] mx-auto lg:mx-0 lg:ml-auto">
                            <div
                                className="absolute w-[115%] aspect-square rounded-full -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" 
                                style={{ background: "linear-gradient(135deg, rgba(219,234,254,0.8), rgba(224,231,255,0.5))" }}
                            />

                            <div className="absolute -inset-8 rounded-[3rem] blur-3xl -z-20" 
                            style={{ background: "linear-gradient(135deg, rgba(99,102,241,0.25), rgba(59,130,246,0.18))" }}
                            />
                            <div
                                className="absolute -top-8 -right-8 w-28 h-28 opacity-50 z-0"
                                style={{ backgroundImage: "radial-gradient(circle, #6366f1 1.5px, transparent 1.5px)", backgroundSize: "14px 14px" }}
                            />
                            <div
                                className="absolute -bottom-8 -left-8 w-28 h-28 opacity-40 z-0"
                                style={{ backgroundImage: "radial-gradient(circle, #3b82f6 1.5px, transparent 1.5px)", backgroundSize: "14px 14px" }}
                            />

                            <div className="relative z-[2] overflow-hidden rounded-[2rem] border-[3px] border-white bg-white shadow-[0_30px_80px_rgba(79,70,229,0.22)]">
                                <img
                                    src={Img1}
                                    alt="Zakaria Gnaoui — Full Stack Developer"
                                    className="w-full h-[380px] sm:h-[480px] lg:h-[610px] object-cover object-center transition-transform duration-700 hover:scale-[1.03]"
                                />

                                <div className="absolute bottom-0 left-0 right-0 h-32"
                                    style={{ background: "linear-gradient(to top, rgba(30,41,59,0.18), transparent)" }}
                                />
                            </div>

                            <div className="absolute z-[5] left-2 sm:left-[-35px] top-[40%] w-[130px] sm:w-[150px] p-3 sm:p-4 rounded-2xl bg-gradient-to-br from-indigo-600 to-blue-600 border border-white/50 shadow-[0_20px_45px_rgba(37,99,235,0.30)] text-white">
                                <div className="flex justify-center mb-2 sm:mb-3">
                                    <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/15 border border-white/20 flex items-center justify-center"><Rocket size={20} className="sm:w-6 sm:h-6" strokeWidth={1.8} />
                                    </div>
                                </div>

                                <div className="text-center space-y-1">
                                    <p className="text-xs font-semibold">
                                        Clean Code
                                    </p>

                                    <p className="text-xs font-semibold">
                                        Modern Design
                                    </p>

                                    <p className="text-xs font-semibold">
                                        Great Experience
                                    </p>
                                </div>
                            </div>

                            <div className="absolute z-[4] left-[-55px] top-[58%] hidden md:block">
                                <svg width="80" height="70" viewBox="0 0 80 70" fill="none">
                                    <path d="M5 55C25 65 45 50 38 35C31 20 17 33 29 42C42 51 60 30 73 10" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" />
                                    <path d="M67 13L73 10L70 17" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default AboutMe