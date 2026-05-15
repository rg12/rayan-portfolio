import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

const methods = [
  {
    icon: '🔍',
    title: 'Manual Testing',
    desc: 'Exploratory and scripted testing to catch what automated tests miss. Deep domain knowledge of user journeys.',
  },
  {
    icon: '🤖',
    title: 'Automation Testing',
    desc: 'Selenium WebDriver and Playwright test suites in Java & Python for repeatable, scalable regression coverage.',
  },
  {
    icon: '🔄',
    title: 'Regression Testing',
    desc: 'Structured regression suites ensuring new code never breaks existing functionality across build cycles.',
  },
  {
    icon: '💨',
    title: 'Smoke Testing',
    desc: 'Fast, critical-path validation after each build to confirm the application is stable enough for deeper testing.',
  },
  {
    icon: '🧠',
    title: 'Sanity Testing',
    desc: 'Targeted testing after bug fixes to verify the specific defect is resolved without regression side-effects.',
  },
  {
    icon: '🔗',
    title: 'Integration Testing',
    desc: 'Verifying that modules, APIs, and third-party services interact correctly in combined workflows.',
  },
  {
    icon: '🖥️',
    title: 'UI / UX Testing',
    desc: 'Pixel-perfect UI validation and usability testing across browsers and devices for flawless user experience.',
  },
  {
    icon: '⚙️',
    title: 'System Testing',
    desc: 'Full end-to-end system evaluation against requirements — ensuring the complete solution meets business goals.',
  },
]

export default function TestingMethods() {
  const [ref, inView] = useInView()

  return (
    <section ref={ref} className="py-24 bg-dark-900/30">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="section-tag mb-3">My approach</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Testing Methodology</h2>
          <p className="text-slate-500 mt-3 max-w-xl">
            A systematic, multi-layered approach to quality assurance that leaves no bug behind.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {methods.map((m, i) => (
            <motion.div
              key={m.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="glass rounded-xl p-5 border border-white/5 hover:border-neon-green/20 hover:bg-neon-green/3 group transition-all duration-300 cursor-default"
            >
              <div className="text-2xl mb-3">{m.icon}</div>
              <h3 className="font-semibold text-white text-sm mb-2 group-hover:text-neon-green transition-colors">
                {m.title}
              </h3>
              <p className="text-slate-500 text-xs leading-relaxed">{m.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
