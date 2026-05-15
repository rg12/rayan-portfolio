import { useEffect, useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 })
  const [active, setActive] = useState('home')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { threshold: 0.4 }
    )
    sections.forEach(s => {
      const el = document.getElementById(s.id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      {/* Top scroll progress bar */}
      <motion.div
        style={{ scaleX, transformOrigin: '0%' }}
        className="fixed top-0 left-0 right-0 h-[2px] z-[100] bg-gradient-to-r from-neon-green via-neon-blue to-neon-purple"
      />

      {/* Right-side section dots */}
      <nav className="fixed right-5 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-4">
        {sections.map(s => (
          <button
            key={s.id}
            onClick={() => scrollTo(s.id)}
            aria-label={s.label}
            className="group flex items-center gap-2 justify-end"
          >
            {/* Label tooltip */}
            <span className={`text-xs font-mono opacity-0 group-hover:opacity-100 transition-all duration-200 pr-1 ${
              active === s.id ? 'text-neon-green opacity-100' : 'text-slate-400'
            }`}>
              {s.label}
            </span>

            {/* Dot */}
            <span
              className={`block rounded-full transition-all duration-300 ${
                active === s.id
                  ? 'w-2.5 h-2.5 bg-neon-green shadow-[0_0_8px_rgba(0,255,136,0.8)]'
                  : 'w-1.5 h-1.5 bg-slate-600 group-hover:bg-slate-400'
              }`}
            />
          </button>
        ))}
      </nav>
    </>
  )
}
