import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { FiMapPin, FiAward, FiBookOpen, FiGlobe } from 'react-icons/fi'

const highlights = [
  { icon: FiMapPin, label: 'Location', value: 'Mumbai, MH 400053', color: 'text-neon-green' },
  { icon: FiAward, label: 'Certification', value: 'ISTQB Foundation Level v4.0', color: 'text-neon-blue' },
  { icon: FiBookOpen, label: 'Education', value: 'BSC Computer Science — 8.0 GPA', color: 'text-neon-purple' },
  { icon: FiGlobe, label: 'Languages', value: 'English · Hindi · Marathi', color: 'text-neon-green' },
]

export default function About() {
  const [ref, inView] = useInView()

  return (
    <section id="about" ref={ref} className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="section-tag mb-3">Get to know me</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">About Me</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-5 text-slate-400 leading-relaxed"
          >
            <p>
              I'm a <span className="text-white font-semibold">QA Engineer</span> with{' '}
              <span className="text-neon-green font-semibold">4+ years of experience</span> in the IT
              industry, specializing in manual and automation testing for web and mobile applications.
            </p>
            <p>
              Currently at <span className="text-white font-semibold">Businessnext</span>, I work
              directly with <span className="text-white font-medium">Axis Bank</span> and{' '}
              <span className="text-white font-medium">HDFC</span> — testing their client relationship
              management systems and end-to-end journeys for credit cards, assets, and liabilities.
            </p>
            <p>
              Previously at <span className="text-white font-semibold">Graphene Health Tech</span>, I
              led QA on <span className="text-neon-blue font-semibold">40+ projects</span>, covering
              every testing methodology from sanity to integration. I also built dashboards in{' '}
              <span className="text-white font-medium">Power BI, QlikView, and Tableau</span> to give
              stakeholders real-time visibility into testing progress.
            </p>
            <p>
              I hold an <span className="text-neon-green font-semibold">ISTQB Foundation Level v4.0</span>{' '}
              certification and a BSC in Computer Science where I graduated with an 8 GPA and published
              a research paper on Advertisement Relevancy using machine learning.
            </p>
            <p>
              I thrive in <span className="text-white font-medium">Agile/Scrum</span> environments —
              sprint planning, daily stand-ups, retrospectives — ensuring every release is quality-locked
              before it ships.
            </p>
          </motion.div>

          {/* Right: info card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass rounded-2xl p-6 space-y-4 neon-border">
              <h3 className="font-mono text-sm text-slate-500 uppercase tracking-wider mb-5">
                Quick Info
              </h3>
              {highlights.map(({ icon: Icon, label, value, color }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className={`mt-0.5 ${color}`}>
                    <Icon size={17} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium uppercase tracking-wide mb-0.5">{label}</p>
                    <p className="text-slate-200 text-sm font-medium">{value}</p>
                  </div>
                </div>
              ))}

              {/* Status badge */}
              <div className="mt-6 pt-5 border-t border-white/5">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse" />
                    <span className="text-neon-green text-sm font-semibold">Open to opportunities</span>
                  </span>
                </div>
                <p className="text-slate-500 text-xs mt-1 ml-3.5">
                  Full-time · Contract · Remote-friendly
                </p>
              </div>
            </div>

            {/* Research highlight */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-4 glass rounded-xl p-4 border border-neon-purple/20 bg-neon-purple/5"
            >
              <p className="text-xs text-neon-purple font-mono uppercase tracking-wider mb-1">Research</p>
              <p className="text-slate-300 text-sm leading-relaxed">
                Published a research paper on{' '}
                <span className="text-white font-medium">Advertisement Relevancy</span> using
                machine learning algorithms — achieving an 8.0 GPA during BSC.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
