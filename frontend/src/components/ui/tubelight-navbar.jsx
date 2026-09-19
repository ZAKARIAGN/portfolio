import React, { useEffect, useRef, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { cn } from '@/lib/utils'

export function NavBar({ items, className }) {
  const reduceMotion = useReducedMotion()
  const [activeTab, setActiveTab] = useState(items[0].name)

  
  
  const lockRef = useRef(false)
  const lockTimer = useRef(null)

  
  const itemsKey = items.map((item) => item.url).join('|')
  useEffect(() => {
    const targets = items
      .map((item) => ({ name: item.name, el: document.querySelector(item.url) }))
      .filter((t) => t.el)
    if (!targets.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (lockRef.current) return
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const match = targets.find((t) => t.el === entry.target)
          if (match) setActiveTab(match.name)
        })
      },
      { rootMargin: '-45% 0px -54% 0px' },
    )

    targets.forEach((t) => observer.observe(t.el))
    return () => observer.disconnect()
    
  }, [itemsKey])

  useEffect(() => () => clearTimeout(lockTimer.current), [])

  const handleClick = (e, item) => {
    e.preventDefault()
    const target = document.querySelector(item.url)
    if (!target) return

    setActiveTab(item.name)
    lockRef.current = true
    clearTimeout(lockTimer.current)
    lockTimer.current = setTimeout(() => {
      lockRef.current = false
    }, 1000)

    target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' })
  }

  return (
    <nav
      aria-label="Primary"
      className={cn(
        
        
        'pointer-events-none fixed bottom-6 left-1/2 z-50 -translate-x-1/2 sm:bottom-auto sm:top-6',
        className,
      )}
    >
      <div className="pointer-events-auto isolate flex items-center gap-1 rounded-full border border-white/10 bg-[#0c0c0f]/80 p-1 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.8)] backdrop-blur-lg">
        {items.map((item) => {
          const Icon = item.icon
          const isActive = activeTab === item.name

          return (
            <a
              key={item.name}
              href={item.url}
              onClick={(e) => handleClick(e, item)}
              aria-label={item.name}
              aria-current={isActive ? 'location' : undefined}
              className={cn(
                'relative cursor-pointer rounded-full px-5 py-2.5 text-sm font-semibold transition-colors duration-300',
                'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/70',
                isActive ? 'text-blue-400' : 'text-neutral-400 hover:text-white',
              )}
            >
              <span className="hidden md:inline">{item.name}</span>
              <span className="md:hidden">
                <Icon size={18} strokeWidth={2.5} aria-hidden="true" />
              </span>

              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 -z-10 w-full rounded-full bg-blue-500/15"
                  initial={false}
                  transition={
                    reduceMotion
                      ? { duration: 0 }
                      : { type: 'spring', stiffness: 300, damping: 30 }
                  }
                >
                  <div className="absolute -top-2 left-1/2 h-1 w-8 -translate-x-1/2 rounded-t-full bg-blue-500">
                    <div className="absolute -left-2 -top-2 h-6 w-12 rounded-full bg-blue-400/30 blur-md" />
                    <div className="absolute -top-1 h-6 w-8 rounded-full bg-blue-400/30 blur-md" />
                    <div className="absolute left-2 top-0 h-4 w-4 rounded-full bg-blue-400/30 blur-sm" />
                  </div>
                </motion.div>
              )}
            </a>
          )
        })}
      </div>
    </nav>
  )
}