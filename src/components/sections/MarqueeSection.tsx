'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { EXPERTISE, SERVICES } from '@/data'
import { SectionHeader } from '@/components/ui/index'
import { scrollToSection } from '@/lib/utils'

// ── MARQUEE ─────────────────────────
const MARQUEE_ITEMS = [
  { icon: '⚡', label: 'Smart Energy Management' },
  { icon: '📡', label: 'Industrial IoT' },
  { icon: '☁️', label: 'Cloud Platform' },
  { icon: '🎚️', label: 'Smart Metering' },
  { icon: '🌿', label: 'Way2Save Program' },
  { icon: '🖥️', label: 'Smart AI EMS' },
  { icon: '📊', label: 'SCADA Monitoring' },
  { icon: '🛡️', label: 'Power Quality Audit' },
]

export function MarqueeStrip() {
  const doubled = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS]
  return (
    <div
      className="overflow-hidden py-[14px]"
      style={{
        background: 'linear-gradient(90deg,#003A99,#0052CC,#00A8BB,#00D4E8,#009950,#00C96E,#E6B800,#FFD000,#003A99)',
        backgroundSize: '400% 100%',
        animation: 'marqueeShift 10s linear infinite',
      }}
    >
      <div className="flex w-max animate-marquee gap-0">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-2 text-[0.74rem] font-bold text-white/88 uppercase tracking-[0.1em] px-7 border-r border-white/18"
          >
            <span className="text-yellow">{item.icon}</span>
            {item.label}
          </span>
        ))}
      </div>
    </div>
  )
}

// ── EXPERTISE ───────────────────────
export function ExpertiseSection() {
  return (
    <section id="expertise" className="py-24 bg-white">
      <div className="max-w-[1320px] mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65 }}
        >
          <SectionHeader
            eyebrow="Core Competency"
            title="Our Three-Pillar"
            titleEm="Expertise"
            desc="Industrial IoT, Smart Automation, and Smart Instrumentation — converging to deliver complete energy intelligence."
            center
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {EXPERTISE.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 48 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: i * 0.14 }}
              whileHover={{ y: -12 }}
              className="bg-white rounded-3xl overflow-hidden shadow-brand-sm border border-border group transition-shadow duration-300 hover:shadow-brand-lg"
            >
              <div className="overflow-hidden h-[220px] relative">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.08]"
                  sizes="(max-width:768px) 100vw, 33vw"
                />
                <span
                  className="absolute top-4 left-4 px-3 py-[5px] rounded-full text-[10px] font-extrabold tracking-[0.08em] uppercase backdrop-blur-sm"
                  style={{ color: item.color, background: item.colorBg, border: `1px solid ${item.color}33` }}
                >
                  {item.tag}
                </span>
              </div>
              <div className="p-7">
                <div
                  className="w-[52px] h-[52px] rounded-[12px] flex items-center justify-center text-[1.3rem] mb-4"
                  style={{ background: item.colorBg }}
                >
                  {item.icon}
                </div>
                <h3 className="font-display font-bold text-[1.1rem] text-ink mb-3">{item.title}</h3>
                <p className="text-[0.86rem] text-slate leading-[1.72] mb-5">{item.desc}</p>
                <button
                  onClick={() => scrollToSection(item.link)}
                  className="text-[0.82rem] font-bold transition-[gap] duration-200 flex items-center gap-2 hover:gap-4"
                  style={{ color: item.color }}
                >
                  Learn More <span>→</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── SERVICES TABS ────────────────────
export function ServicesSection() {
  const [activeId, setActiveId] = useState('ems')
  const active = SERVICES.find((s) => s.id === activeId)!

  return (
    <section id="services" className="py-24 bg-snow">
      <div className="max-w-[1320px] mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65 }}
        >
          <SectionHeader
            eyebrow="What We Offer"
            title="Smart Solutions"
            titleEm="Portfolio"
            desc="From standalone metering to full cloud EMS — comprehensive consulting, products, and control applications."
            center
          />
        </motion.div>

        {/* Tab nav */}
        <div className="flex gap-2 justify-center flex-wrap mb-12">
          {SERVICES.map((s) => (
            <motion.button
              key={s.id}
              whileTap={{ scale: 0.97 }}
              onClick={() => setActiveId(s.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full border-2 text-[0.82rem] font-bold transition-all duration-200 ${
                activeId === s.id
                  ? 'bg-gradient-primary text-white border-transparent shadow-[0_6px_22px_rgba(0,82,204,0.25)] -translate-y-[2px]'
                  : 'border-border bg-white text-slate hover:-translate-y-[2px] hover:border-blue/30 hover:text-blue'
              }`}
            >
              <span>{s.icon}</span>{s.label}
            </motion.button>
          ))}
        </div>

        {/* Tab pane */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeId}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center"
          >
            {/* Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-brand-xl group">
              <Image
                src={active.image}
                alt={active.title}
                width={800}
                height={420}
                className="w-full h-[420px] object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/50 to-transparent" />
              {/* Badge */}
              <div className="absolute bottom-5 left-5 right-5 bg-white/94 backdrop-blur-[12px] rounded-[14px] p-4 flex items-center gap-4 shadow-[0_4px_24px_rgba(0,0,0,0.1)]">
                <div
                  className="w-[40px] h-[40px] rounded-[10px] flex items-center justify-center text-[1.1rem] flex-shrink-0"
                  style={{ background: `${active.badgeColor}1A` }}
                >
                  {active.badgeIcon}
                </div>
                <div>
                  <strong className="block text-[0.84rem] font-bold text-ink">{active.badgeTitle}</strong>
                  <span className="text-[0.71rem] text-mist">{active.badgeSub}</span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div>
              <h3 className="font-display font-bold text-[2rem] text-ink tracking-[-0.02em] mb-4 leading-[1.15]">{active.title}</h3>
              <p className="text-[0.92rem] text-slate leading-[1.8] mb-7">{active.desc}</p>

              <div className="flex flex-col gap-3 mb-8">
                {active.features.map((f, fi) => (
                  <motion.div
                    key={f.title}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: fi * 0.08 }}
                    whileHover={{ x: 6, borderColor: '#00D4E8' }}
                    className="flex items-start gap-4 p-4 bg-white rounded-[12px] border border-border shadow-brand-sm transition-all duration-200"
                  >
                    <div className="w-[38px] h-[38px] rounded-[9px] flex items-center justify-center text-[0.9rem] flex-shrink-0" style={{ background: f.bg }}>
                      {f.icon}
                    </div>
                    <div>
                      <strong className="block text-[0.84rem] font-bold text-ink mb-[2px]">{f.title}</strong>
                      <span className="text-[0.75rem] text-mist leading-[1.5]">{f.desc}</span>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="flex gap-3 flex-wrap">
                <motion.button
                  whileHover={{ y: -3, boxShadow: '0 10px 32px rgba(0,82,204,0.38)' }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-2 bg-gradient-primary text-white font-bold text-[0.84rem] px-7 py-[13px] rounded-full shadow-[0_4px_18px_rgba(0,82,204,0.25)]"
                >
                  → Learn More
                </motion.button>
                <motion.button
                  whileHover={{ y: -3, background: '#EBF2FF' }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => scrollToSection('cta')}
                  className="flex items-center gap-2 text-blue font-bold text-[0.84rem] px-7 py-[12px] rounded-full border-2 border-blue"
                >
                  📞 Contact Us
                </motion.button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
