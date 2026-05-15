import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiSend, FiCheck } from 'react-icons/fi'

const contactInfo = [
  { icon: FiMail, label: 'Email', value: 'Rayan2ghate@gmail.com', href: 'mailto:Rayan2ghate@gmail.com' },
  { icon: FiPhone, label: 'Phone', value: '+91 81085 45466', href: 'tel:+918108545466' },
  { icon: FiMapPin, label: 'Location', value: 'Mumbai, MH 400053', href: null },
  { icon: FiLinkedin, label: 'LinkedIn', value: 'rayan-ghate-3253', href: 'https://www.linkedin.com/in/rayan-ghate-3253' },
]

export default function Contact() {
  const [ref, inView] = useInView()
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    const mailtoBody = `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    window.location.href = `mailto:Rayan2ghate@gmail.com?subject=${encodeURIComponent(form.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(mailtoBody)}`
    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section id="contact" ref={ref} className="py-24 bg-dark-900/30">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="section-tag mb-3">Let's connect</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Get In Touch</h2>
          <p className="text-slate-500 mt-3 max-w-xl">
            Looking for a meticulous QA engineer? I'd love to discuss how I can help ship bug-free software at your company.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="space-y-4 mb-8">
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-neon-green/10 border border-neon-green/20 flex items-center justify-center text-neon-green shrink-0">
                    <Icon size={16} />
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs uppercase tracking-wide mb-0.5">{label}</p>
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith('http') ? '_blank' : undefined}
                        rel="noreferrer"
                        className="text-slate-200 text-sm font-medium hover:text-neon-green transition-colors"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-slate-200 text-sm font-medium">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Availability */}
            <div className="glass rounded-2xl p-5 border border-neon-green/15 neon-border">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse" />
                <span className="text-neon-green font-semibold text-sm">Open to Opportunities</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                I'm actively looking for QA Engineer roles — full-time or contract. Remote-friendly.
                Response within 24 hours guaranteed.
              </p>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-6 border border-white/5 space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-slate-500 uppercase tracking-wide mb-2">Name</label>
                  <input
                    className="form-input"
                    name="name"
                    placeholder="Your name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs text-slate-500 uppercase tracking-wide mb-2">Email</label>
                  <input
                    className="form-input"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs text-slate-500 uppercase tracking-wide mb-2">Subject</label>
                <input
                  className="form-input"
                  name="subject"
                  placeholder="What's this about?"
                  value={form.subject}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block text-xs text-slate-500 uppercase tracking-wide mb-2">Message</label>
                <textarea
                  className="form-input resize-none"
                  name="message"
                  rows={5}
                  placeholder="Tell me about the role or project..."
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <button
                type="submit"
                className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-sm transition-all duration-200 ${
                  sent
                    ? 'bg-neon-blue/20 text-neon-blue border border-neon-blue/30'
                    : 'bg-neon-green text-dark-950 hover:shadow-[0_0_30px_rgba(0,255,136,0.35)] hover:scale-[1.02] active:scale-[0.98]'
                }`}
              >
                {sent ? (
                  <>
                    <FiCheck size={16} />
                    Message sent!
                  </>
                ) : (
                  <>
                    <FiSend size={16} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
