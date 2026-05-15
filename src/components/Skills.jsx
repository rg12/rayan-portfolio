import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import {
  SiSelenium, SiPython, SiMysql, SiTableau, SiJava,
  SiJira, SiPostman, SiGit,
} from 'react-icons/si'
import { FiCheckSquare, FiTool, FiDatabase, FiBarChart2 } from 'react-icons/fi'

const categories = [
  {
    icon: FiCheckSquare,
    title: 'Testing Types',
    color: 'neon-green',
    variant: '',
    pills: [
      'Manual Testing', 'Automation Testing', 'Regression Testing',
      'Smoke Testing', 'Sanity Testing', 'UI/UX Testing',
      'Integration Testing', 'System Testing', 'Functional Testing',
      'End-to-End Testing', 'Bug Reporting', 'Test Case Design',
    ],
  },
  {
    icon: FiTool,
    title: 'Tools & Frameworks',
    color: 'neon-blue',
    variant: 'blue',
    pills: [
      'Selenium WebDriver', 'Playwright', 'Eclipse IDE',
      'Java', 'Python', 'Appium',
      'TestNG', 'Git', 'JIRA', 'Postman',
    ],
    icons: [
      { Icon: SiSelenium, label: 'Selenium' },
      { Icon: SiJava, label: 'Java' },
      { Icon: SiPython, label: 'Python' },
      { Icon: SiGit, label: 'Git' },
      { Icon: SiJira, label: 'JIRA' },
      { Icon: SiPostman, label: 'Postman' },
    ],
  },
  {
    icon: FiDatabase,
    title: 'Data & Databases',
    color: 'neon-purple',
    variant: 'purple',
    pills: [
      'MySQL', 'SQL Queries', 'Database Testing',
      'Data Validation', 'Test Data Management',
    ],
    icons: [
      { Icon: SiMysql, label: 'MySQL' },
    ],
  },
  {
    icon: FiBarChart2,
    title: 'Analytics & Reporting',
    color: 'neon-blue',
    variant: 'blue',
    pills: [
      'Power BI', 'QlikView', 'Tableau',
      'Test Reporting', 'Defect Metrics', 'Agile / Scrum',
      'Sprint Planning', 'Test Strategy', 'Documentation',
    ],
    icons: [
      { Icon: SiTableau, label: 'Tableau' },
    ],
  },
]

function SkillCard({ cat, index, inView }) {
  const { icon: Icon, title, color, variant, pills, icons } = cat
  const pillClass = variant === 'blue'
    ? 'skill-pill skill-pill-blue'
    : variant === 'purple'
    ? 'skill-pill skill-pill-purple'
    : 'skill-pill'

  const borderColor = variant === 'blue'
    ? 'border-neon-blue/20 hover:border-neon-blue/40'
    : variant === 'purple'
    ? 'border-neon-purple/20 hover:border-neon-purple/40'
    : 'border-neon-green/20 hover:border-neon-green/40'

  const iconColor = variant === 'blue'
    ? 'text-neon-blue bg-neon-blue/10'
    : variant === 'purple'
    ? 'text-neon-purple bg-neon-purple/10'
    : 'text-neon-green bg-neon-green/10'

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`glass rounded-2xl p-6 border ${borderColor} transition-all duration-300 hover:shadow-lg`}
    >
      <div className="flex items-center gap-3 mb-5">
        <div className={`p-2.5 rounded-xl ${iconColor}`}>
          <Icon size={18} />
        </div>
        <h3 className="font-semibold text-white text-base">{title}</h3>
      </div>

      {/* Tech icons row */}
      {icons && icons.length > 0 && (
        <div className="flex items-center gap-3 mb-4 flex-wrap">
          {icons.map(({ Icon: TechIcon, label }) => (
            <div key={label} title={label} className="flex items-center gap-1.5 text-slate-400 text-xs">
              <TechIcon size={16} />
              <span>{label}</span>
            </div>
          ))}
        </div>
      )}

      {/* Pills */}
      <div className="flex flex-wrap gap-2">
        {pills.map(skill => (
          <span key={skill} className={pillClass}>{skill}</span>
        ))}
      </div>
    </motion.div>
  )
}

export default function Skills() {
  const [ref, inView] = useInView()

  return (
    <section id="skills" ref={ref} className="py-24 bg-dark-900/30">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="section-tag mb-3">What I work with</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Skills & Toolkit</h2>
          <p className="text-slate-500 mt-3 max-w-xl">
            A comprehensive toolkit built across 4 years of QA engineering — from exploratory testing to full automation suites.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {categories.map((cat, i) => (
            <SkillCard key={cat.title} cat={cat} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}
