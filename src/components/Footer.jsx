import { FiLinkedin, FiMail, FiHeart } from 'react-icons/fi'

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-md bg-neon-green/10 border border-neon-green/30 flex items-center justify-center font-mono font-bold text-neon-green text-xs">
            RG
          </div>
          <span className="text-slate-500 text-sm">
            Rayan Ghate · QA Engineer
          </span>
        </div>

        <p className="text-slate-600 text-xs flex items-center gap-1">
          Built with <FiHeart size={11} className="text-neon-green mx-0.5" /> in Mumbai · {new Date().getFullYear()}
        </p>

        <div className="flex items-center gap-3">
          <a
            href="https://www.linkedin.com/in/rayan-ghate-3253"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-lg text-slate-500 hover:text-neon-blue hover:bg-neon-blue/10 transition-all"
            aria-label="LinkedIn"
          >
            <FiLinkedin size={16} />
          </a>
          <a
            href="mailto:Rayan2ghate@gmail.com"
            className="p-2 rounded-lg text-slate-500 hover:text-neon-green hover:bg-neon-green/10 transition-all"
            aria-label="Email"
          >
            <FiMail size={16} />
          </a>
        </div>
      </div>
    </footer>
  )
}
