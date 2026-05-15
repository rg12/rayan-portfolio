import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

const stats = [
  { value: 4, suffix: '+', label: 'Years Experience', color: 'text-neon-green' },
  { value: 40, suffix: '+', label: 'Projects Delivered', color: 'text-neon-blue' },
  { value: 2, suffix: '', label: 'Major Banks Served', color: 'text-neon-purple' },
]

function Counter({ end, suffix, color, inView }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    let start = 0
    const duration = 1800
    const increment = end / (duration / 16)
    const timer = setInterval(() => {
      start += increment
      if (start >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [inView, end])

  return (
    <span className={`text-4xl sm:text-5xl font-black tabular-nums ${color}`}>
      {count}{suffix}
    </span>
  )
}

export default function Stats() {
  const [ref, inView] = useInView()

  return (
    <section ref={ref} className="py-16 border-y border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="mb-2">
                <Counter end={stat.value} suffix={stat.suffix} color={stat.color} inView={inView} />
              </div>
              <p className="text-slate-500 text-sm font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
