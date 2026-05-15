import { useEffect, useState } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'


const sections = [
  { id: 'home',       label: 'Home' },
  { id: 'about',      label: 'About' },
  { id: 'skills',     label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'education',  label: 'Education' },
  { id: 'contact',    label: 'Contact' },
]

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()

  // Glow moves from 10vh at top → 80vh at bottom
  const rawY = useTransform(scrollYProgress, [0, 1], ['10vh', '78vh'])
  const glowY = useSpring(rawY, { stiffness: 60, damping: 20 })


  const [active, setActive] = useState('home')

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id) }),
      { threshold: 0.35 }
    )
    sections.forEach(s => {
      const el = document.getElementById(s.id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const scrollTo = id => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <>
      {/* Scroll-reactive ambient glow orb — drifts down the page as you scroll */}
      <motion.div
        style={{ top: glowY }}
        className="fixed left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0"
        aria-hidden
      >
        <div
          className="w-[560px] h-[280px] rounded-full"
          style={{
            background: 'radial-gradient(ellipse, #00ff88 0%, #00d4ff 55%, transparent 100%)',
            filter: 'blur(80px)',
            opacity: 0.07,
          }}
        />
      </motion.div>

      {/* Right-side section dot navigator */}
      <nav className="fixed right-5 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-4">
        {sections.map(s => (
          <button
            key={s.id}
            onClick={() => scrollTo(s.id)}
            aria-label={s.label}
            className="group flex items-center gap-2 justify-end"
          >
            <span className={`text-xs font-mono transition-all duration-200 pr-1 ${
              active === s.id
                ? 'opacity-100 text-neon-green'
                : 'opacity-0 group-hover:opacity-100 text-slate-400'
            }`}>
              {s.label}
            </span>
            <span className={`block rounded-full transition-all duration-300 ${
              active === s.id
                ? 'w-2.5 h-2.5 bg-neon-green shadow-[0_0_10px_rgba(0,255,136,0.9)]'
                : 'w-1.5 h-1.5 bg-slate-600 group-hover:bg-slate-400'
            }`} />
          </button>
        ))}
      </nav>
    </>
  )
}
