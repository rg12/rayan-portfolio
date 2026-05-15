import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenu, HiX } from 'react-icons/hi'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const handleLink = (href) => {
    setOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass border-b border-white/5 shadow-lg shadow-black/20' : ''
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2 group"
        >
          <div className="w-9 h-9 rounded-lg bg-neon-green/10 border border-neon-green/30 flex items-center justify-center font-mono font-bold text-neon-green text-sm group-hover:bg-neon-green/20 group-hover:shadow-[0_0_16px_rgba(0,255,136,0.3)] transition-all duration-200">
            RG
          </div>
          <span className="font-semibold text-white hidden sm:block">
            Rayan<span className="text-neon-green">.</span>
          </span>
        </button>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1">
          {links.map(link => (
            <li key={link.label}>
              <button
                onClick={() => handleLink(link.href)}
                className="px-4 py-2 text-sm text-slate-400 hover:text-neon-green font-medium transition-colors duration-200 rounded-lg hover:bg-neon-green/5"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="mailto:Rayan2ghate@gmail.com"
            className="px-4 py-2 rounded-lg border border-neon-green/40 text-neon-green text-sm font-medium hover:bg-neon-green/10 hover:border-neon-green hover:shadow-[0_0_16px_rgba(0,255,136,0.2)] transition-all duration-200"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-slate-400 hover:text-neon-green transition-colors"
          onClick={() => setOpen(v => !v)}
          aria-label="Toggle menu"
        >
          {open ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden glass border-t border-white/5"
          >
            <ul className="px-6 py-4 flex flex-col gap-1">
              {links.map(link => (
                <li key={link.label}>
                  <button
                    onClick={() => handleLink(link.href)}
                    className="w-full text-left px-3 py-2.5 text-sm text-slate-300 hover:text-neon-green font-medium transition-colors rounded-lg hover:bg-neon-green/5"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="mailto:Rayan2ghate@gmail.com"
                  className="block text-center px-4 py-2.5 rounded-lg border border-neon-green/40 text-neon-green text-sm font-medium hover:bg-neon-green/10 transition-all"
                  onClick={() => setOpen(false)}
                >
                  Hire Me
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
