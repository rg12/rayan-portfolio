import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi'

const jobs = [
  {
    title: 'Engineer — QA',
    company: 'Businessnext',
    location: 'Mumbai, India',
    period: 'Feb 2025 — Present',
    duration: 'Current',
    color: 'neon-green',
    current: true,
    bullets: [
      'Testing client relationship management systems for Axis Bank and HDFC — covering CRM, credit card journeys, assets, and liabilities from end to end.',
      'Automated web test suites for HDFC using Selenium WebDriver and Playwright with Java and Python in Eclipse IDE.',
      'Led cross-functional engineering teams to deliver projects on time and within budget, maintaining rigorous documentation standards.',
      'Designed and executed end-to-end test plans covering functional, regression, UI/UX, and integration testing across multiple banking environments.',
    ],
    tags: ['Selenium', 'Playwright', 'Java', 'Python', 'Banking Domain', 'CRM Testing'],
  },
  {
    title: 'Engineer Tester',
    company: 'Graphene Health Tech Pvt Ltd',
    location: 'Mumbai, India',
    period: 'Jan 2021 — Sep 2024',
    duration: '3 yrs 9 mos',
    color: 'neon-blue',
    current: false,
    bullets: [
      'Executed manual testing across 40+ projects — analyzing requirements and designing test case scenarios for web desktop dashboards.',
      'Covered the full spectrum of testing methodologies: sanity, regression, smoke, system, and integration testing.',
      'Ensured product compliance with functional requirements, delivering each testing environment with minimal deviations from client specs.',
      'Built and maintained dashboards in Power BI, QlikView, and Tableau to visualize testing results and defect metrics for stakeholders.',
      'Collaborated within Agile teams — sprint planning, daily stand-ups, and retrospectives — ensuring continuous delivery of quality products.',
    ],
    tags: ['Manual Testing', 'Power BI', 'QlikView', 'Tableau', 'Agile/Scrum', 'Health Tech'],
  },
]

function TimelineCard({ job, index, inView }) {
  const isLeft = index % 2 === 0
  const borderClass = job.color === 'neon-green'
    ? 'border-neon-green/20 hover:border-neon-green/40'
    : 'border-neon-blue/20 hover:border-neon-blue/40'
  const dotClass = job.color === 'neon-green'
    ? 'bg-neon-green shadow-[0_0_12px_rgba(0,255,136,0.6)]'
    : 'bg-neon-blue shadow-[0_0_12px_rgba(0,212,255,0.6)]'
  const tagClass = job.color === 'neon-green'
    ? 'skill-pill'
    : 'skill-pill skill-pill-blue'

  return (
    <div className="relative flex flex-col md:flex-row items-start md:items-center gap-0 mb-12 last:mb-0">
      {/* Dot on timeline */}
      <div className={`absolute left-4 md:left-1/2 top-6 w-3.5 h-3.5 rounded-full ${dotClass} -translate-x-1/2 z-10 hidden md:block`} />
      <div className={`absolute left-4 top-6 w-3.5 h-3.5 rounded-full ${dotClass} -translate-x-1/2 z-10 md:hidden`} />

      {/* Card positioning */}
      <div className={`w-full md:w-1/2 pl-10 md:pl-0 ${isLeft ? 'md:pr-12' : 'md:pl-12 md:ml-auto'}`}>
        <motion.div
          initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: index * 0.15 }}
          className={`glass rounded-2xl p-6 border ${borderClass} transition-all duration-300`}
        >
          {/* Header */}
          <div className="flex items-start justify-between gap-3 mb-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                {job.current && (
                  <span className="px-2 py-0.5 rounded-full bg-neon-green/15 text-neon-green text-xs font-semibold border border-neon-green/30">
                    Current
                  </span>
                )}
              </div>
              <h3 className="text-lg font-bold text-white">{job.title}</h3>
              <div className="flex items-center gap-1.5 mt-1">
                <FiBriefcase size={13} className="text-slate-500" />
                <span className="text-slate-300 font-semibold text-sm">{job.company}</span>
              </div>
            </div>
            <div className="text-right shrink-0">
              <div className="flex items-center gap-1 justify-end text-slate-500 text-xs mb-1">
                <FiCalendar size={11} />
                <span className="font-mono">{job.period}</span>
              </div>
              <div className="flex items-center gap-1 justify-end text-slate-500 text-xs">
                <FiMapPin size={11} />
                <span>{job.location}</span>
              </div>
            </div>
          </div>

          {/* Bullets */}
          <ul className="space-y-2.5 mb-5">
            {job.bullets.map((b, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <span className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${job.color === 'neon-green' ? 'bg-neon-green' : 'bg-neon-blue'}`} />
                <span className="text-slate-400 text-sm leading-relaxed">{b}</span>
              </li>
            ))}
          </ul>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {job.tags.map(tag => (
              <span key={tag} className={tagClass}>{tag}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default function Experience() {
  const [ref, inView] = useInView()

  return (
    <section id="experience" ref={ref} className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="section-tag mb-3">Where I've worked</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Work Experience</h2>
          <p className="text-slate-500 mt-3">
            4+ years shipping quality software across banking and health tech domains.
          </p>
        </motion.div>

        {/* Timeline container */}
        <div className="relative">
          {/* Vertical line */}
          <div className="hidden md:block timeline-line" />

          {jobs.map((job, i) => (
            <TimelineCard key={job.company} job={job} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}
