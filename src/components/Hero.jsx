import { motion } from 'framer-motion'
import { FiArrowDown, FiLinkedin, FiMail } from 'react-icons/fi'
import { useTypewriter } from '../hooks/useTypewriter'
import ParticleCanvas from './ParticleCanvas'

const roles = [
  'QA Engineer',
  'Test Automation Expert',
  'ISTQB Certified Tester',
  'Bug Hunter',
  'Manual Testing Pro',
]

export default function Hero() {
  const typed = useTypewriter(roles)

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden dot-grid">
      {/* Particle canvas */}
      <ParticleCanvas />

      {/* Animated gradient orbs underneath particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-green/6 rounded-full blur-[130px] animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-blue/6 rounded-full blur-[130px] animate-float" style={{ animationDelay: '3s' }} />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-neon-purple/5 rounded-full blur-[100px] animate-float" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-20">
        <div className="max-w-4xl">
          {/* Tag */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse" />
            <span className="section-tag">Available for opportunities</span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-white mb-4 leading-none"
          >
            Rayan
            <br />
            <span className="gradient-text">Ghate</span>
          </motion.h1>

          {/* Typewriter */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="flex items-center gap-2 mb-6"
          >
            <span className="font-mono text-xl sm:text-2xl text-slate-400">
              &gt;{' '}
              <span className="text-neon-green font-semibold">{typed}</span>
              <span className="animate-blink text-neon-green">|</span>
            </span>
          </motion.div>

          {/* Description — layered layout */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="max-w-2xl mb-10 space-y-5"
          >
            {/* Hook line */}
            <p className="text-2xl sm:text-3xl font-light text-white/90 leading-snug tracking-tight">
              I find bugs before your{' '}
              <span className="italic font-normal text-neon-green">users</span> do.
            </p>

            {/* Descriptor */}
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed font-light">
              4+ years of precision QA across banking, pharma &amp; health tech —
              from exploratory manual testing to full{' '}
              <span className="text-slate-300 font-medium">Selenium &amp; Playwright</span> automation suites.
            </p>

            {/* Client badges */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-slate-600 text-xs font-mono uppercase tracking-widest shrink-0">
                Clients
              </span>
              <div className="w-px h-3 bg-slate-700" />
              {['Axis Bank', 'HDFC', 'Cipla'].map((client, i) => (
                <motion.span
                  key={client}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.55 + i * 0.08 }}
                  className="px-3 py-1 rounded-full text-xs font-semibold border border-white/10 bg-white/5 text-slate-300 hover:border-neon-green/40 hover:bg-neon-green/8 hover:text-neon-green transition-all duration-200 cursor-default"
                >
                  {client}
                </motion.span>
              ))}
            </div>

            {/* Cert badge */}
            <div className="flex items-center gap-2.5">
              <span className="text-base">🏅</span>
              <span className="text-sm font-semibold text-neon-green tracking-wide">
                ISTQB Foundation Level v4.0
              </span>
              <span className="text-slate-600 text-xs font-mono">· Certified</span>
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="flex flex-wrap gap-4 mb-14"
          >
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-7 py-3.5 rounded-xl bg-neon-green text-dark-950 font-bold text-sm hover:shadow-[0_0_30px_rgba(0,255,136,0.4)] hover:scale-105 active:scale-95 transition-all duration-200"
            >
              Get In Touch
            </button>
            <button
              onClick={() => document.querySelector('#experience')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-7 py-3.5 rounded-xl border border-white/15 text-white font-semibold text-sm hover:border-neon-green/50 hover:bg-neon-green/5 hover:text-neon-green transition-all duration-200"
            >
              View My Work
            </button>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.65 }}
            className="flex items-center gap-5"
          >
            <span className="text-slate-600 text-xs font-mono uppercase tracking-widest">Find me on</span>
            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/in/rayan-ghate-3253"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-lg text-slate-400 hover:text-neon-blue hover:bg-neon-blue/10 border border-white/5 hover:border-neon-blue/30 transition-all duration-200"
                aria-label="LinkedIn"
              >
                <FiLinkedin size={18} />
              </a>
              <a
                href="mailto:Rayan2ghate@gmail.com"
                className="p-2.5 rounded-lg text-slate-400 hover:text-neon-green hover:bg-neon-green/10 border border-white/5 hover:border-neon-green/30 transition-all duration-200"
                aria-label="Email"
              >
                <FiMail size={18} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-slate-600 text-xs font-mono">scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        >
          <FiArrowDown className="text-slate-600" size={16} />
        </motion.div>
      </motion.div>
    </section>
  )
}
