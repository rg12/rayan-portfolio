import { useMemo } from 'react'

export default function Meteors({ count = 18 }) {
  const meteors = useMemo(() =>
    Array.from({ length: count }, (_, i) => ({
      id: i,
      // spread along top + right edges
      top: `${Math.random() * 60}%`,
      left: `${Math.random() * 100}%`,
      delay: `${(Math.random() * 6).toFixed(2)}s`,
      duration: `${(Math.random() * 3 + 3).toFixed(2)}s`,
      width: `${Math.floor(Math.random() * 120 + 80)}px`,
      color: Math.random() > 0.45 ? 'rgba(0,255,136,0.85)' : 'rgba(0,212,255,0.75)',
      glow: Math.random() > 0.45 ? 'rgba(0,255,136,0.35)' : 'rgba(0,212,255,0.35)',
    })),
  [count])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      {meteors.map(m => (
        <span
          key={m.id}
          className="meteor-streak"
          style={{
            top: m.top,
            left: m.left,
            width: m.width,
            animationDelay: m.delay,
            animationDuration: m.duration,
            '--meteor-color': m.color,
            '--meteor-glow': m.glow,
          }}
        />
      ))}
    </div>
  )
}
