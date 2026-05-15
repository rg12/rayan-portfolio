import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { FiBook, FiAward } from 'react-icons/fi'

const education = [
  {
    degree: 'BSC, Computer Science',
    school: 'Seth L.U.J. and Sir M.V. College of Science',
    period: '2018 — 2021',
    gpa: '8.0 GPA',
    note: 'Published research paper on Advertisement Relevancy using machine learning algorithms.',
    color: 'neon-green',
  },
  {
    degree: 'HSC (Science)',
    school: 'Acharya Ambalal V. Patel Jr. College',
    period: '2016 — 2018',
    gpa: '6.0 GPA',
    note: 'Physics · Chemistry · Mathematics · Biology',
    color: 'neon-blue',
  },
  {
    degree: 'SSC',
    school: 'Chaturbhuj Narsee Memorial School',
    period: '2001 — 2016',
    gpa: null,
    note: 'Foundational education',
    color: 'neon-purple',
  },
]

const certifications = [
  {
    name: 'ISTQB Foundation Level v4.0',
    issuer: 'International Software Testing Qualifications Board',
    icon: '🏅',
    color: 'neon-green',
  },
]

export default function Education() {
  const [ref, inView] = useInView()

  return (
    <section id="education" ref={ref} className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="section-tag mb-3">Academic background</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Education & Certifications</h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 mb-10">
          {education.map((edu, i) => {
            const border = edu.color === 'neon-green'
              ? 'border-neon-green/20 hover:border-neon-green/40'
              : edu.color === 'neon-blue'
              ? 'border-neon-blue/20 hover:border-neon-blue/40'
              : 'border-neon-purple/20 hover:border-neon-purple/40'
            const gpaColor = edu.color === 'neon-green'
              ? 'text-neon-green'
              : edu.color === 'neon-blue'
              ? 'text-neon-blue'
              : 'text-neon-purple'

            return (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className={`glass rounded-2xl p-6 border ${border} transition-all duration-300`}
              >
                <div className="flex items-start justify-between gap-2 mb-3">
                  <FiBook className={gpaColor} size={18} />
                  {edu.gpa && (
                    <span className={`font-mono text-sm font-bold ${gpaColor}`}>{edu.gpa}</span>
                  )}
                </div>
                <h3 className="text-white font-bold text-base mb-1">{edu.degree}</h3>
                <p className="text-slate-400 text-sm mb-1 font-medium">{edu.school}</p>
                <p className="text-slate-600 font-mono text-xs mb-3">{edu.period}</p>
                {edu.note && (
                  <p className="text-slate-500 text-xs leading-relaxed border-t border-white/5 pt-3">
                    {edu.note}
                  </p>
                )}
              </motion.div>
            )
          })}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="text-slate-400 text-sm font-semibold uppercase tracking-wider mb-5 flex items-center gap-2">
            <FiAward className="text-neon-green" />
            Certifications
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map(cert => (
              <div
                key={cert.name}
                className="glass rounded-xl p-5 border border-neon-green/20 hover:border-neon-green/40 hover:bg-neon-green/5 transition-all duration-300 flex items-start gap-4"
              >
                <span className="text-2xl">{cert.icon}</span>
                <div>
                  <p className="text-white font-semibold text-sm">{cert.name}</p>
                  <p className="text-slate-500 text-xs mt-1">{cert.issuer}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
