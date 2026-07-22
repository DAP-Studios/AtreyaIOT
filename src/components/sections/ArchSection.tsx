'use client'
import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer'
import CountUp from 'react-countup'
import { ARCH_STEPS, STATS, MACGRID_MODULES } from '@/data'
import { SectionHeader } from '@/components/ui/index'
import { scrollToSection } from '@/lib/utils'
import { SiteIcon } from '@/components/ui/SiteIcon'
import emsDashboard from '@/assets/ems/ems-dashboard.jpg'
import emsNodeHistory from '@/assets/ems/ems-node-history.jpg'
import emsAerialMap from '@/assets/ems/ems-aerial-map.jpg'
import emsLcdView from '@/assets/ems/ems-lcd-view.jpg'
import emsAnalytics from '@/assets/ems/ems-analytics.jpg'

// ── ARCHITECTURE ─────────────────────
export function ArchitectureSection() {
  const commItems = [
    { icon: 'link-2', label: 'Data Cable' },
    { icon: 'lightbulb', label: 'Fiber Optic' },
    { icon: 'globe', label: 'Ethernet LAN' },
    { icon: 'wifi', label: 'WiFi Wireless' },
    { icon: 'smartphone', label: 'GSM Modem' },
    { icon: 'radio', label: 'GPRS' },
    { icon: 'mail', label: 'Auto Email' },
    { icon: 'message-square', label: 'Auto SMS' },
  ]

  return (
    <section id="architecture" className="py-24 bg-white">
      <div className="max-w-[1320px] mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65 }}
        >
          <SectionHeader
            eyebrow="System Design"
            title="IoT Solution"
            titleEm="Architecture"
            desc="Complete end-to-end pipeline from field sensors to cloud analytics over secure, redundant wireless channels."
            center
          />
        </motion.div>

        {/* Pipeline */}
        <div className="relative mt-4">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-[36px] left-[10%] right-[10%] h-[3px] bg-gradient-to-r from-blue via-cyan via-green via-yellow to-cyan z-0" />

          <div className="grid grid-cols-2 lg:grid-cols-5 gap-5">
            {ARCH_STEPS.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 48 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.7, delay: i * 0.12, ease: [0.34, 1.56, 0.64, 1] }}
                className="flex flex-col items-center relative z-10"
              >
                <motion.div
                  whileHover={{ scale: 1.15, y: -4 }}
                  className="w-[72px] h-[72px] rounded-full flex items-center justify-center text-[1.4rem] text-white border-4 border-white shadow-brand-md mb-5"
                  style={{ background: `linear-gradient(135deg, ${step.color}, ${step.color2})` }}
                >
                  <SiteIcon token={step.icon} className="w-7 h-7" />
                </motion.div>
                <motion.div
                  whileHover={{ y: -4, borderColor: '#00D4E8', boxShadow: '0 12px 48px rgba(0,82,204,0.12)' }}
                  className="bg-white rounded-2xl p-5 border border-border shadow-brand-sm text-center w-full transition-all duration-300"
                >
                  <div className="font-mono text-[10px] text-mist tracking-[0.15em] mb-2">{step.step}</div>
                  <h4 className="font-bold text-[0.9rem] text-ink mb-2">{step.title}</h4>
                  <p className="text-[0.78rem] text-slate leading-[1.6] mb-3">{step.desc}</p>
                  <div className="flex gap-1 justify-center flex-wrap">
                    {step.tags.map((tag) => (
                      <span key={tag} className="bg-cool text-blue text-[10px] font-bold px-2 py-[2px] rounded-full">{tag}</span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Communication methods */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-4 lg:grid-cols-8 gap-3 mt-10"
        >
          {commItems.map((item) => (
            <motion.div
              key={item.label}
              whileHover={{ y: -3, borderColor: '#00D4E8', color: '#0052CC' }}
              className="bg-white border border-border rounded-[12px] py-4 px-2 text-center text-[0.73rem] font-bold text-slate flex flex-col items-center gap-2 cursor-default transition-all duration-200"
            >
              <SiteIcon token={item.icon} className="w-[18px] h-[18px]" />
              <span className="leading-tight">{item.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// ── STATS ────────────────────────────
function StatItem({ stat, index }: { stat: (typeof STATS)[number]; index: number }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.4 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ background: 'rgba(255,255,255,0.06)' }}
      className="flex-1 px-5 py-14 text-center transition-colors duration-300"
    >
      <span className="block mb-4">
        <SiteIcon token={stat.icon} className="w-8 h-8 text-white mx-auto" />
      </span>
      <div className="flex items-baseline justify-center gap-1 mb-2">
        <span className="font-display text-[clamp(2.5rem,5vw,4.6rem)] font-bold leading-none text-white">
          {inView ? <CountUp end={stat.num} duration={2.8} /> : 0}
        </span>
        <span className="text-cyan font-bold text-[2rem]">{stat.sfx}</span>
      </div>
      <div className="text-[0.72rem] font-black uppercase tracking-widest text-white/55">{stat.label}</div>
    </motion.div>
  )
}

export function StatsSection() {
  return (
    <section id="stats" className="relative overflow-hidden bg-blue-deep">
      <div className="absolute inset-0 bg-grid opacity-20" />

      <div className="relative z-10 max-w-[1320px] mx-auto flex divide-x divide-white/10">
        {STATS.map((stat, i) => (
          <StatItem key={stat.id} stat={stat} index={i} />
        ))}
      </div>
    </section>
  )
}

// ── MACGRID ──────────────────────────
function AnimatedBar({ label, value, unit, pct, color }: { label: string; value: number|string; unit: string; pct: number; color: string }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 })
  return (
    <div ref={ref} className="flex items-center gap-3 mb-3">
      <span className="font-mono text-[10px] font-medium w-[72px]" style={{ color }}>{label}</span>
      <div className="flex-1 h-[10px] rounded-full bg-white/[0.07] overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${pct}%` } : { width: 0 }}
          transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1], delay: 0.2 }}
          className="h-full rounded-full relative overflow-hidden"
          style={{ background: `linear-gradient(90deg, ${color}88, ${color})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/25 animate-shimmer" />
        </motion.div>
      </div>
      <span className="font-mono text-[0.72rem] font-semibold w-[52px] text-right" style={{ color }}>{value}{unit}</span>
    </div>
  )
}

export function MacgridSection() {
  const bars = [
    { label:'PHASE A', value:78, unit:' kW', pct:78, color:'#4488ff' },
    { label:'PHASE B', value:62, unit:' kW', pct:62, color:'#00D4E8' },
    { label:'PHASE C', value:85, unit:' kW', pct:85, color:'#00C96E' },
    { label:'P.FACTOR', value:'0.97', unit:'', pct:97, color:'#FFD000' },
  ]
  const productScreens = [
    { title: 'Node History', image: emsNodeHistory },
    { title: 'Aerial Map', image: emsAerialMap },
    { title: 'LCD View', image: emsLcdView },
    { title: 'Analytics', image: emsAnalytics },
  ]
  const { ref: mgRef, inView: mgInView } = useInView({ triggerOnce: true, threshold: 0.3 })

  return (
    <section id="macgrid" className="py-24 bg-white">
      <div className="max-w-[1320px] mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65 }}
        >
          <SectionHeader
            eyebrow="Flagship Software"
            title="Smart AI"
            titleEm="EMS Platform"
            desc="All-in-one energy management — real-time monitoring, historical data, billing, alerts, and SLD diagrams."
            center
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Dashboard mockup */}
          <motion.div
            ref={mgRef}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.75 }}
            className="overflow-hidden rounded-[8px] border border-white/[0.08] bg-ink-2 shadow-brand-xl"
          >
            {/* Titlebar */}
            <div className="bg-white/[0.04] border-b border-white/[0.07] px-5 py-[14px] flex items-center gap-3">
              <div className="flex gap-[6px]">
                <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                <div className="w-3 h-3 rounded-full bg-[#28c840]" />
              </div>
              <span className="font-mono text-[10px] text-white/25 tracking-[1.2px] ml-2">SMART AI EMS · LIVE DASHBOARD</span>
              <div className="ml-auto flex items-center gap-2 text-green font-mono text-[10px]">
                <span className="w-[6px] h-[6px] rounded-full bg-green animate-pulse-dot" />
                ONLINE
              </div>
            </div>

            <div className="p-6">
              <Image
                src={emsDashboard}
                alt="Atreya EMS dashboard with consumption, cost, bar chart, and pie chart widgets"
                className="mb-5 h-auto w-full rounded-[6px] border border-white/[0.08]"
                sizes="(max-width: 1024px) 100vw, 620px"
              />
              <div className="font-mono text-[10px] text-white/30 tracking-[1.8px] uppercase mb-4">Real-Time Power Consumption</div>
              {bars.map((b) => <AnimatedBar key={b.label} {...b} />)}

              {/* KPIs */}
              <div className="grid grid-cols-3 gap-3 mt-5">
                {[
                  { v:'1,842', l:'kWh Today', c:'#4488ff' },
                  { v:'₹2.4K',  l:'Cost Saved', c:'#00C96E' },
                  { v:'98.2%', l:'Uptime',     c:'#FFD000' },
                ].map((k) => (
                  <motion.div
                    key={k.l}
                    initial={{ opacity: 0, y: 14 }}
                    animate={mgInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.6 }}
                    whileHover={{ background: 'rgba(255,255,255,0.1)' }}
                    className="cursor-default rounded-[8px] border border-white/[0.08] bg-white/[0.06] px-3 py-4 text-center transition-colors"
                  >
                    <div className="font-display font-bold text-[1.3rem]" style={{ color: k.c }}>{k.v}</div>
                    <div className="text-[10px] text-white/35 mt-[3px]">{k.l}</div>
                  </motion.div>
                ))}
              </div>

              {/* Mini chart */}
              <div className="flex items-end gap-[5px] h-[68px] mt-5 pt-[14px] border-t border-white/[0.07]">
                {[
                  { h:40, c:'#0052CC' },{ h:60, c:'#00D4E8' },{ h:75, c:'#0052CC' },
                  { h:88, c:'#FFD000' },{ h:65, c:'#00C96E' },{ h:79, c:'#00D4E8' },
                  { h:92, c:'#0052CC' },{ h:56, c:'#FFD000' },{ h:48, c:'#00C96E' },{ h:70, c:'#0052CC' },
                ].map((bar, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    animate={mgInView ? { height: `${bar.h}%` } : { height: 0 }}
                    transition={{ duration: 0.9, delay: 0.4 + i * 0.07, ease: [0.4,0,0.2,1] }}
                    className="flex-1 rounded-t-[3px]"
                    style={{ backgroundColor: bar.c }}
                  />
                ))}
              </div>

              <div className="flex items-center gap-2 mt-4 font-mono text-[10px] text-green">
                <SiteIcon token="check" className="w-3 h-3" />
                <span>All systems nominal · No active alarms · DB sync 2 min ago</span>
              </div>
            </div>
          </motion.div>

          {/* Info + Modules */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.75 }}
          >
            <div className="inline-flex items-center gap-2 px-[18px] py-[7px] rounded-full bg-blue/[0.08] border border-cyan/20 text-[0.7rem] font-bold text-cyan-dark tracking-[0.16em] uppercase mb-4">
              <SiteIcon token="blocks" className="w-3.5 h-3.5" /> 8 Smart Modules
            </div>
            <h3 className="font-display font-bold text-[2rem] text-ink tracking-[-0.02em] mb-4 leading-[1.2]">
              All-in-One EMS for Complete Energy Intelligence
            </h3>
            <p className="text-[0.91rem] text-slate leading-[1.8] mb-8">
              Smart AI EMS brings together real-time monitoring, historical data, billing, alerts, and SLD diagrams into a unified, user-friendly platform.
            </p>

            <div className="mb-8 grid grid-cols-2 gap-3">
              {productScreens.map((screen) => (
                <div key={screen.title} className="overflow-hidden rounded-[8px] border border-border bg-white shadow-brand-sm">
                  <Image
                    src={screen.image}
                    alt={`Atreya EMS ${screen.title} software screen`}
                    className="h-24 w-full object-cover object-top"
                    sizes="(max-width: 1024px) 50vw, 240px"
                  />
                  <div className="px-3 py-2 text-[0.72rem] font-bold text-blue-deep">{screen.title}</div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-3 mb-8">
              {MACGRID_MODULES.map((m, i) => (
                <motion.div
                  key={m.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  whileHover={{ x: 4, borderColor: '#00D4E8', boxShadow: '0 4px 20px rgba(0,82,204,0.08)' }}
              className="flex cursor-default items-center gap-3 rounded-[8px] border border-border bg-white p-4 transition-all duration-200"
                >
                  <div className="w-[36px] h-[36px] rounded-[8px] flex items-center justify-center text-[0.88rem] flex-shrink-0" style={{ background: m.bg, color: m.color }}>
                    <SiteIcon token={m.icon} className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-[0.8rem] text-ink">{m.name}</div>
                    <div className="text-[0.68rem] text-mist mt-[1px]">{m.sub}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.button
              whileHover={{ y: -3, boxShadow: '0 10px 32px rgba(0,82,204,0.38)' }}
              whileTap={{ scale: 0.97 }}
              onClick={() => scrollToSection('cta')}
            className="flex w-full items-center justify-center gap-2 rounded-[8px] bg-blue-deep py-4 text-[0.86rem] font-bold text-white shadow-[0_4px_18px_rgba(0,32,74,0.22)]"
            >
              Request Smart AI EMS Demo <SiteIcon token="arrow-right" className="w-4 h-4" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
