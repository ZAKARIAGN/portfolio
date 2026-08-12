import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import sendEmail from "./SendEmail";
import { Phone, Mail, User, FileText, PenLine, Send } from 'lucide-react'
import github from '../assets/github.png'
import linkedin from '../assets/linkdin.png'

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const contactInfoRef = useRef(null);
  const socialsRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        x: -80,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });


      gsap.from(subtitleRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.7,
        ease: 'power3.out',
        delay: 0.2,
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });


      gsap.from(contactInfoRef.current.children, {
        x: -60,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: contactInfoRef.current,
          start: 'top 88%',
          toggleActions: 'play none none none',
        },
      });


      // Removed socialsRef animation to ensure buttons are always visible


      gsap.from(formRef.current, {
        x: 80,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: formRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });


      gsap.from(formRef.current.children, {
        y: 30,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: 'power2.out',
        delay: 0.3,
        scrollTrigger: {
          trigger: formRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="contact" className="relative bg-[#fafbfe] py-24 px-4 md:px-8 overflow-hidden" ref={sectionRef}>

      {/* Background decorations */}
      <div className='absolute top-20 left-0 w-[400px] h-[400px] bg-blue-100/40 rounded-full blur-3xl -translate-x-1/2 pointer-events-none' />
      <div className='absolute top-1/4 right-0 w-[500px] h-[500px] bg-indigo-50/60 rounded-full blur-3xl translate-x-1/4 pointer-events-none' />

      <div
        className='absolute top-32 left-10 w-32 h-32 opacity-20 pointer-events-none'
        style={{ backgroundImage: 'radial-gradient(circle, #3b82f6 2px, transparent 2px)', backgroundSize: '24px 24px' }}
      />
      <div
        className='absolute bottom-40 right-20 w-40 h-40 opacity-20 pointer-events-none'
        style={{ backgroundImage: 'radial-gradient(circle, #3b82f6 2px, transparent 2px)', backgroundSize: '24px 24px' }}
      />

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-start relative z-10">

        {/* Left Column: Text & Info */}
        <div className="lg:w-1/2 flex flex-col pt-4">
          <div ref={titleRef}>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold text-[#0a1128] leading-[1.1] mb-2 tracking-tight">
              Let's connect and <br className="hidden sm:block" />
              <span className="text-blue-600">build something <br className="hidden sm:block" /> great together</span>
            </h1>
            <div className="w-12 h-1.5 bg-blue-600 mt-6 mb-8 rounded-full"></div>
          </div>

          <p className="text-gray-500 text-lg leading-relaxed mb-12 max-w-md" ref={subtitleRef}>
            Whether you have a question, a project idea, or just want to say hi, feel free to drop a message!
          </p>

          <div className="flex flex-col gap-8 mb-16" ref={contactInfoRef}>
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shadow-sm border border-blue-100/50">
                <Phone size={22} className="fill-blue-600/10" />
              </div>
              <div>
                <h3 className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-1">Call Number</h3>
                <p className="text-[#0a1128] font-bold text-lg">+212 649 961 829</p>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shadow-sm border border-blue-100/50">
                <Mail size={22} className="fill-blue-600/10" />
              </div>
              <div>
                <h3 className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-1">Email</h3>
                <p className="text-[#0a1128] font-bold text-lg">zakariagnaoui06@gmail.com</p>
              </div>
            </div>

            <div>
              <h3 className="text-[#0a1128] font-bold text-xl mb-5">Social Network</h3>
              <div className="flex gap-4" ref={socialsRef}>
                <a href="https://www.linkedin.com/in/zakaria-gnaoui-749146398/" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-gray-100 flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
                  <img src={linkedin} className="w-5 h-5 transition-all duration-300 group-hover:invert group-hover:brightness-0" alt="linkedin" />
                </a>
                <a href="https://github.com/ZAKARIAGN" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-gray-100 flex items-center justify-center text-[#0a1128] hover:bg-[#0a1128] hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
                  <img src={github} className="w-5 h-5 transition-all duration-300 group-hover:invert" alt="github" />
                </a>
              </div>
            </div>
          </div>


        </div>

        {/* Right Column: Form */}
        <div className="lg:w-1/2 w-full" ref={formRef}>
          <div className="bg-white rounded-[2rem] shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-gray-100 p-6 sm:p-12">
            <form className="flex flex-col gap-5 sm:gap-6" onSubmit={sendEmail}>

              <div>
                <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2.5">Full Name</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <User size={18} className="text-blue-400" />
                  </div>
                  <input type="text" id="name" name="name" className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-white border border-gray-100 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all text-gray-700 placeholder-gray-400" placeholder="John Doe" required />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2.5">Email Address</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Mail size={18} className="text-blue-400" />
                  </div>
                  <input type="email" id="email" name="email" className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-white border border-gray-100 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all text-gray-700 placeholder-gray-400" placeholder="john@example.com" required />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-bold text-gray-700 mb-2.5">Subject</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <FileText size={18} className="text-blue-400" />
                  </div>
                  <input type="text" id="subject" name="title" className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-white border border-gray-100 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all text-gray-700 placeholder-gray-400" placeholder="Project Inquiry" required />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2.5">Message</label>
                <div className="relative">
                  <div className="absolute top-4 left-0 pl-4 flex items-start pointer-events-none">
                    <PenLine size={18} className="text-blue-400" />
                  </div>
                  <textarea id="message" name="message" rows="4" className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-white border border-gray-100 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all text-gray-700 placeholder-gray-400 resize-none" placeholder="Tell me about your project..." required></textarea>
                </div>
              </div>

              <button type="submit" className="w-full py-4 mt-2 bg-[#0084ff] text-white font-bold rounded-xl shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2">
                <Send size={18} />
                Send Message
              </button>

            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact