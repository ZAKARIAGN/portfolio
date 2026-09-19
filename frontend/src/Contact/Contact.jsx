import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Mail, User, FileText, PenLine, Send, ArrowUp } from 'lucide-react'
import { FaGithub, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa'
import sendEmail from './SendEmail'

gsap.registerPlugin(ScrollTrigger)


const AVAILABLE_FOR_WORK = true



const CONTACTS = [
  {
    label: 'Email',
    value: 'zakariagnaoui06@gmail.com',
    href: 'mailto:zakariagnaoui06@gmail.com',
    Icon: Mail,
    color: '#ea4335',
    wide: true,
  },
  {
    label: 'WhatsApp',
    value: '+212 649 961 829',
    href: 'https://wa.me/212649961829', 
    Icon: FaWhatsapp,
    color: '#25d366',
    wide: true,
    external: true,
  },
  {
    label: 'LinkedIn',
    value: 'Zakaria Gnaoui',
    href: 'https://www.linkedin.com/in/zakaria-gnaoui-749146398/',
    Icon: FaLinkedinIn,
    color: '#378fe9',
    external: true,
  },
  {
    label: 'GitHub',
    value: 'ZAKARIAGN',
    href: 'https://github.com/ZAKARIAGN',
    Icon: FaGithub,
    color: '#ffffff',
    external: true,
  },
]

const ContactTile = ({ label, value, href, Icon, color, wide, external }) => (
  <a
    href={href}
    {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
    style={{ '--c': color }}
    className={`group flex items-center gap-4 rounded-2xl border border-white/[0.06] bg-[#0c0c0f] p-4 transition-all duration-300 hover:border-[color:var(--c)] hover:shadow-[0_0_28px_-8px_var(--c)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/70 ${
      wide ? 'sm:col-span-2' : ''
    }`}
  >
    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/[0.04] text-neutral-400 transition-all duration-300 group-hover:text-[color:var(--c)] group-hover:[filter:drop-shadow(0_0_8px_var(--c))]">
      <Icon size={20} aria-hidden="true" />
    </span>
    <span className="min-w-0">
      <span className="block text-xs font-medium text-neutral-500">{label}</span>
      <span className="block truncate text-sm font-semibold text-gray-200 transition-colors duration-300 group-hover:text-white">
        {value}
      </span>
    </span>
  </a>
)

const FIELD_BASE =
  'w-full rounded-xl border py-3.5 pl-11 pr-4 text-white caret-blue-400 placeholder-gray-600 transition-colors duration-200 focus:outline-none [&:-webkit-autofill]:[-webkit-text-fill-color:#fff] [&:-webkit-autofill]:shadow-[inset_0_0_0_1000px_#0a0a0f]'

const Field = ({ id, name, label, type = 'text', placeholder, Icon, autoComplete, textarea = false }) => {
  
  const inputId = `contact-${id}`
  const controlRef = useRef(null)
  const [focused, setFocused] = useState(false)

  
  const focusControl = (e) => {
    if (e.target !== controlRef.current) {
      e.preventDefault()
      controlRef.current?.focus()
    }
  }

  
  const controlProps = {
    id: inputId,
    name,
    placeholder,
    required: true,
    ref: controlRef,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    className: `${FIELD_BASE} ${
      focused ? 'border-blue-500 bg-[#0d0d14]' : 'border-gray-800 bg-[#0a0a0f]'
    }`,
  }

  return (
    <div>
      <label htmlFor={inputId} className="mb-2 block text-xs font-medium text-gray-400">
        {label}
      </label>

      <div
        onMouseDown={focusControl}
        className={`relative rounded-xl transition-shadow duration-200 ${
          focused ? 'shadow-[0_0_0_3px_rgba(59,130,246,0.25),0_0_24px_-6px_rgba(59,130,246,0.6)]' : ''
        }`}
      >
        <span
          className={`pointer-events-none absolute left-0 z-10 flex pl-4 ${
            textarea ? 'top-[15px] items-start' : 'inset-y-0 items-center'
          }`}
        >
          <Icon
            size={18}
            className={`transition-colors duration-200 ${focused ? 'text-blue-300' : 'text-blue-500'}`}
            aria-hidden="true"
          />
        </span>

        {textarea ? (
          <textarea {...controlProps} rows={4} className={`${controlProps.className} resize-none`} />
        ) : (
          <input {...controlProps} type={type} autoComplete={autoComplete} />
        )}
      </div>
    </div>
  )
}



const stopBubbling = (e) => e.stopPropagation()

const Contact = () => {
  const sectionRef = useRef(null)
  const badgeRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const tilesRef = useRef(null)
  const formRef = useRef(null)

  useEffect(() => {
    
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const ctx = gsap.context(() => {
      
      gsap.from([badgeRef.current, titleRef.current, subtitleRef.current].filter(Boolean), {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      })

      
      gsap.from(tilesRef.current.children, {
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power3.out',
        clearProps: 'transform,opacity',
        scrollTrigger: {
          trigger: tilesRef.current,
          start: 'top 90%',
          toggleActions: 'play none none none',
        },
      })

      
      gsap.from(formRef.current, {
        x: 60,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: formRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#07070a] px-4 py-24 md:px-8"
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

      <div className="pointer-events-none absolute left-0 top-20 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-blue-900/10 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-1/4 h-[500px] w-[500px] translate-x-1/4 rounded-full bg-indigo-900/10 blur-3xl" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-start gap-16 lg:flex-row lg:items-center lg:gap-20">
        <div className="flex w-full flex-col lg:w-1/2">
          {AVAILABLE_FOR_WORK && (
            <div
              ref={badgeRef}
              className="mb-6 inline-flex items-center gap-2.5 self-start rounded-full border border-gray-800 bg-[#111115] px-4 py-1.5 text-xs font-medium text-gray-300"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Available for work
            </div>
          )}

          <div ref={titleRef}>
            <h1 className="mb-2 text-4xl font-black leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[3.5rem]">
              Let's connect and <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                build something <br className="hidden sm:block" /> great together
              </span>
            </h1>
            <div className="mb-8 mt-6 h-1.5 w-12 rounded-full bg-blue-600" />
          </div>

          <p
            className="mb-10 max-w-md text-lg font-light leading-relaxed text-gray-400"
            ref={subtitleRef}
          >
            Whether you have a question, a project idea, or just want to say hi, feel free to drop a
            message!
          </p>

          <div ref={tilesRef} className="grid gap-4 sm:grid-cols-2">
            {CONTACTS.map((contact) => (
              <ContactTile key={contact.label} {...contact} />
            ))}
          </div>
        </div>

        <div className="relative w-full lg:w-1/2" ref={formRef}>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-6 rounded-[2rem] bg-blue-600 opacity-20 blur-3xl"
          />

          <div
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0c0c0f]"
            style={{ boxShadow: '0 30px 60px -20px rgba(0,0,0,0.8), 0 0 40px -18px #2563eb' }}
          >
            <div className="flex items-center gap-2 border-b border-white/[0.06] bg-[#111115] px-4 py-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
              <div className="mx-3 min-w-0 flex-1 truncate rounded-md bg-black/40 px-3 py-1 text-center text-[11px] text-gray-500">
                New message
              </div>
              <span className="w-[42px] shrink-0" aria-hidden="true" />
            </div>

            <form
              className="flex flex-col gap-5 p-6 sm:p-8"
              onSubmit={sendEmail}
              onKeyDown={stopBubbling}
              onKeyUp={stopBubbling}
              onMouseDown={stopBubbling}
              onPointerDown={stopBubbling}
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <Field
                  id="name"
                  name="name"
                  label="Full name"
                  placeholder="Full name"
                  Icon={User}
                  autoComplete="name"
                />
                <Field
                  id="email"
                  name="email"
                  type="email"
                  label="Email address"
                  placeholder="john@example.com"
                  Icon={Mail}
                  autoComplete="email"
                />
              </div>

              <Field
                id="subject"
                name="title"
                label="Subject"
                placeholder="Project inquiry"
                Icon={FileText}
              />

              <Field
                id="message"
                name="message"
                label="Message"
                placeholder="Tell me about your project..."
                Icon={PenLine}
                textarea
              />

              <button
                type="submit"
                className="mt-2 flex w-full items-center justify-center gap-3 rounded-xl bg-blue-600 py-4 text-sm font-bold text-white shadow-[0_0_20px_rgba(37,99,235,0.3)] transition-all duration-300 hover:-translate-y-1 hover:bg-blue-500 hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/70"
              >
                <Send size={16} aria-hidden="true" />
                Send message
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="relative z-10 mx-auto mt-24 flex max-w-7xl items-center justify-between border-t border-white/[0.06] pt-8 text-sm text-gray-500">
        <p>© {new Date().getFullYear()} Zakaria Gnaoui</p>
        <a
          href="#home"
          className="inline-flex items-center gap-2 transition-colors duration-300 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white/70"
        >
          <ArrowUp size={16} aria-hidden="true" />
          Back to top
        </a>
      </div>
    </section>
  )
}

export default Contact