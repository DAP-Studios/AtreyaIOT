'use client'
import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { INDUSTRIES, BENEFITS, TESTIMONIALS } from '@/data'
import { SectionHeader } from '@/components/ui/index'
import { scrollToSection } from '@/lib/utils'

const CONTACT_OFFICES = [
  {
    title: 'Global HQ / UAE Office',
    address: [
      'Warehouse-7, Al Qaseer Warehouse,',
      'Ras Al Khor Industrial Area-2,',
      'Dubai, UAE',
    ],
    phones: ['+971 4 234 8480', '+971 4 234 9525'],
  },
  {
    title: 'Regional Offices - India (Bengaluru)',
    address: [
      'No: 208, Double Road, BTM Layout 2nd Stage,',
      'Bengaluru, Karnataka, India - 560076',
    ],
    phones: ['+91 90713 90177'],
  },
  {
    title: 'Kosamba (Surat), Gujarat',
    address: [
      '11993, Avadhoot Prasad, Dutt Mandir, Tarsadi Road,',
      'Kosamba - 394120, Ta- Mangrol, Dist-Surat, Gujarat, India',
    ],
    phones: ['+91 9825507588'],
  },
  {
    title: 'Bharuch Branch Office',
    address: ['G-22, Aditya Complex, Near Kasak Circle, Bharuch'],
    phones: ['Ashutosh Vyas: +91 9428723485'],
  },
  {
    title: 'Vapi Office',
    address: ['GIDC Char Rasta, Vapi'],
    phones: ['+91 8469741415'],
  },
]

// ── INDUSTRIES ───────────────────────
export function IndustriesSection() {
  return (
    <section id="industries" className="py-24 bg-snow">
      <div className="max-w-[1320px] mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65 }}
        >
          <SectionHeader
            eyebrow="Industries Served"
            title="Industry"
            titleEm="Applications"
            desc="Deployed across the most demanding industrial environments worldwide — every sector, every scale."
            center
          />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {INDUSTRIES.map((ind, i) => (
            <motion.div
              key={ind.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: i * 0.07, ease: [0.34, 1.56, 0.64, 1] }}
              whileHover={{ y: -8 }}
              className="rounded-3xl overflow-hidden relative cursor-default group shadow-brand-sm hover:shadow-brand-xl transition-shadow duration-300"
            >
              <div className="relative h-[240px]">
                <Image
                  src={ind.image}
                  alt={ind.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.08]"
                  sizes="(max-width:768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 to-transparent group-hover:from-blue-dark/90 transition-all duration-300" />
              </div>
              <div className="absolute inset-0 flex flex-col justify-end p-5">
                <span className="inline-block self-start bg-white/15 border border-white/25 backdrop-blur-sm text-white text-[9px] font-bold uppercase tracking-widest px-[10px] py-[3px] rounded-full mb-2">
                  {ind.cat}
                </span>
                <h4 className="font-display font-bold text-[1rem] text-white leading-[1.2]">{ind.name}</h4>
                <p className="text-[0.73rem] text-white/62 mt-1">{ind.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── BENEFITS ─────────────────────────
export function BenefitsSection() {
  return (
    <section id="benefits" className="py-24 bg-white">
      <div className="max-w-[1320px] mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65 }}
        >
          <SectionHeader
            eyebrow="Why Choose Atreya"
            title="Key"
            titleEm="Benefits"
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.75 }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-brand-xl">
              <Image
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
                alt="Benefits"
                width={800}
                height={500}
                className="w-full h-[500px] object-cover"
              />
            </div>

            {/* Floating metrics card */}
            <motion.div
              initial={{ opacity: 0, x: 30, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="absolute -bottom-7 -right-7 bg-white rounded-2xl p-6 shadow-brand-xl border border-border min-w-[220px]"
            >
              <div className="flex items-center gap-2 text-[0.85rem] font-bold text-ink mb-4">
                📊 Live Performance
              </div>
              {[
                { label: 'Power Factor', val: '0.97', pct: 97, color: '#0052CC' },
                { label: 'kWh Savings',  val: '28%',  pct: 72, color: '#00C96E' },
                { label: 'Uptime',       val: '98%',  pct: 98, color: '#00D4E8' },
              ].map((m) => (
                <div key={m.label} className="mb-3">
                  <div className="flex justify-between text-[0.74rem] mb-1">
                    <span className="text-mist">{m.label}</span>
                    <span className="font-bold font-mono" style={{ color: m.color }}>{m.val}</span>
                  </div>
                  <div className="h-[6px] bg-cool rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${m.pct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: 0.5 }}
                      className="h-full rounded-full"
                      style={{ backgroundColor: m.color }}
                    />
                  </div>
                </div>
              ))}
              <div className="flex items-center gap-2 pt-3 border-t border-border font-mono text-[10px] text-green">
                <span className="w-[6px] h-[6px] rounded-full bg-green animate-pulse-dot" />
                All systems nominal
              </div>
            </motion.div>
          </motion.div>

          {/* List */}
          <div className="flex flex-col gap-4">
            {BENEFITS.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ x: 7, borderColor: '#00D4E8', boxShadow: '0 4px 20px rgba(0,82,204,0.08)' }}
                className="flex items-start gap-4 p-5 bg-snow rounded-[14px] border border-border transition-all duration-250"
              >
                <div
                  className="w-[46px] h-[46px] rounded-[12px] flex items-center justify-center text-[1.1rem] flex-shrink-0"
                  style={{ background: b.bg }}
                >
                  {b.icon}
                </div>
                <div>
                  <h4 className="font-bold text-[0.9rem] text-ink mb-[5px]">{b.title}</h4>
                  <p className="text-[0.82rem] text-slate leading-[1.65]">{b.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ── ABOUT (Vision/Mission) ────────────
export function AboutSection() {
  const points = [
    'Build world-class energy management solutions',
    'Foster energetic, dynamic, focused professionals',
    'Drive continual improvement through intelligent data',
    'Influence energy requirements across the value chain',
  ]

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-vm" />
      <div
        className="absolute inset-0 opacity-10"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1600&q=80')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      />

      <div className="relative z-10 max-w-[1320px] mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65 }}
        >
          <SectionHeader eyebrow="Our Purpose" title="Vision &" titleEm="Mission" center light />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: -36 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.75 }}
            whileHover={{ y: -6, background: 'rgba(255,255,255,0.16)' }}
            className="glass-dark border border-white/18 rounded-3xl p-10 transition-all duration-300"
          >
            <div className="w-[58px] h-[58px] rounded-[14px] bg-white/12 border border-white/18 flex items-center justify-center text-[1.5rem] mb-6">🌍</div>
            <h3 className="font-display font-bold text-[1.65rem] text-yellow mb-4">Our Vision</h3>
            <p className="text-[0.9rem] text-white/80 leading-[1.78]">
              To be among the global leaders in the management and conservation of Energy and the Environment — delivering intelligent systems that power a sustainable future for all.
            </p>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: 36 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.75 }}
            whileHover={{ y: -6, background: 'rgba(255,255,255,0.16)' }}
            className="glass-dark border border-white/18 rounded-3xl p-10 transition-all duration-300"
          >
            <div className="w-[58px] h-[58px] rounded-[14px] bg-white/12 border border-white/18 flex items-center justify-center text-[1.5rem] mb-6">⚡</div>
            <h3 className="font-display font-bold text-[1.65rem] text-yellow mb-4">Our Mission</h3>
            <p className="text-[0.9rem] text-white/80 leading-[1.78] mb-5">
              To help customers save energy and the environment through expertise and innovation in consulting and products.
            </p>
            <ul className="flex flex-col gap-2">
              {points.map((pt, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.3 }}
                  className="flex items-start gap-3 py-2 border-b border-white/[0.08] text-[0.85rem] text-white/72"
                >
                  <span className="text-yellow text-[11px] mt-[3px] flex-shrink-0">✦</span>
                  {pt}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ── TESTIMONIALS ─────────────────────
export function TestimonialsSection() {
  const [active, setActive] = useState(0)

  return (
    <section id="testimonials" className="py-24 bg-snow">
      <div className="max-w-[1320px] mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65 }}
        >
          <SectionHeader eyebrow="Client Feedback" title="What Our" titleEm="Clients Say" center />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.65, delay: i * 0.12 }}
              whileHover={{ y: -8, boxShadow: '0 24px 80px rgba(0,82,204,0.18)', borderColor: 'transparent' }}
              className="bg-white rounded-3xl p-8 border border-border shadow-brand-sm transition-all duration-300"
            >
              <div className="flex gap-1 mb-5 text-yellow text-[0.82rem]">
                {Array(t.stars).fill(0).map((_, j) => <span key={j}>★</span>)}
              </div>
              <p className="text-[0.88rem] text-slate leading-[1.8] italic mb-6">{t.quote}</p>
              <div className="flex items-center gap-3">
                <div
                  className="w-[46px] h-[46px] rounded-full flex items-center justify-center font-display font-bold text-white text-[0.9rem] flex-shrink-0"
                  style={{ background: `linear-gradient(135deg, ${t.gradFrom}, ${t.gradTo})` }}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="font-bold text-[0.86rem] text-ink">{t.name}</div>
                  <div className="text-[0.72rem] text-mist mt-[2px]">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── CTA ──────────────────────────────
export function CTASection() {
  return (
    <section id="cta" className="relative overflow-hidden py-24">
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(90deg, #E6B800, #FFD000, #00D4E8, #0052CC, #00D4E8, #FFD000)',
          backgroundSize: '400% 100%',
          animation: 'ctaShift 6s ease-in-out infinite',
        }}
      />
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&q=80')] bg-cover bg-center opacity-10" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.75 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/30 px-5 py-2 rounded-full mb-6 text-[0.7rem] font-bold text-white uppercase tracking-[0.15em]">
            🚀 Get Started Today
          </div>
          <h2 className="font-display font-bold text-[clamp(2rem,3.8vw,3.2rem)] text-white tracking-[-0.02em] leading-[1.1] mb-5">
            Ready to <em className="not-italic text-ink">Transform</em> Your Energy Operations?
          </h2>
          <p className="text-[0.96rem] text-white/85 leading-[1.75] mb-9">
            Let Atreya deploy the Way2Save program, Smart AI EMS, or a complete IoT solution — start reducing energy costs from day one.
          </p>

          <div className="flex gap-4 justify-center flex-wrap mb-8">
            <motion.button
              whileHover={{ y: -3, boxShadow: '0 12px 32px rgba(0,0,0,0.22)' }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 bg-white text-blue font-extrabold text-[0.9rem] px-9 py-4 rounded-full shadow-[0_6px_24px_rgba(0,0,0,0.15)]"
            >
              ▶ Request a Demo
            </motion.button>
            <motion.button
              whileHover={{ y: -3, background: 'rgba(255,255,255,0.22)' }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 bg-white/12 backdrop-blur-sm text-white font-bold text-[0.9rem] px-9 py-4 rounded-full border border-white/55"
            >
              ⬇ Download Brochure
            </motion.button>
          </div>

          <div className="flex gap-5 justify-center flex-wrap">
            {['No upfront cost consultation', 'Free energy audit report', 'ROI guaranteed analysis'].map((chip) => (
              <span key={chip} className="flex items-center gap-2 text-[0.78rem] text-white/85 font-semibold">
                <span className="text-yellow">✓</span>{chip}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.75, delay: 0.12 }}
          className="mt-14 rounded-3xl bg-ink/45 backdrop-blur-sm border border-white/25 p-6 md:p-8"
        >
          <div className="flex items-center justify-center gap-2 mb-6 text-white font-bold uppercase tracking-[0.12em] text-[0.76rem]">
            <span className="w-[18px] h-[2px] bg-yellow rounded" />
            Contact Section
            <span className="w-[18px] h-[2px] bg-yellow rounded" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 text-left">
            {CONTACT_OFFICES.map((office) => (
              <div key={office.title} className="rounded-2xl border border-white/20 bg-white/10 p-4">
                <p className="text-[0.82rem] text-white font-bold mb-2">{office.title}</p>
                {office.address.map((line) => (
                  <p key={line} className="text-[0.78rem] text-white/80 leading-[1.5]">{line}</p>
                ))}
                <div className="mt-2.5 flex flex-col gap-1">
                  {office.phones.map((phone) => (
                    <p key={phone} className="text-[0.78rem] text-yellow">☎ {phone}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-[0.82rem] text-white/90 mt-6">✉ info@atreyaiot.com</p>
        </motion.div>
      </div>
    </section>
  )
}
