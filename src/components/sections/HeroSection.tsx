'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import logo from '@/assets/logo.png'
import emsDashboard from '@/assets/ems/ems-dashboard.jpg'
import ParticlesComponent from '@/components/ui/particles-bg'
import { SiteIcon } from '@/components/ui/SiteIcon'

const words = [
  'Future of EMS',
  'Smart Energy Monitoring',
  'Industrial IoT Automation',
  'Real-Time Power Intelligence',
]

export function HeroSection() {
  const [wordIndex, setWordIndex] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setWordIndex((current) => (current + 1) % words.length)
    }, 2800)

    return () => window.clearInterval(timer)
  }, [])

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden bg-white">
      <div className="absolute inset-0 z-[1] pointer-events-none">
        <ParticlesComponent />
      </div>

      <div className="absolute inset-0 z-[2] bg-[linear-gradient(90deg,rgba(255,255,255,0.84)_0%,rgba(255,255,255,0.58)_48%,rgba(255,255,255,0.05)_100%)] pointer-events-none" />
      <div className="absolute inset-0 z-[3] bg-grid opacity-40 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 z-[3] h-28 bg-gradient-to-t from-white to-transparent pointer-events-none" />

      <div className="relative z-[4] min-h-screen px-5 pt-5 pb-10 md:pt-12 md:pb-16">
        <div className="mx-auto grid min-h-[calc(100vh-11rem)] w-full max-w-[1220px] items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(360px,0.78fr)]">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <motion.div
              layoutId="atreya-logo"
              initial={{ opacity: 0, scale: 0.82, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="mb-8"
            >
              <Image
                src={logo}
                alt="Atreya IoT"
                priority
                className="h-[124px] w-auto drop-shadow-[0_20px_44px_rgba(0,82,204,0.22)] md:h-[266px]"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.16 }}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan/25 bg-white/80 px-4 py-2 text-[0.72rem] font-bold uppercase tracking-[0.16em] text-cyan-dark shadow-brand-sm backdrop-blur"
            >
              <span className="h-2 w-2 rounded-full bg-cyan shadow-[0_0_16px_rgba(0,212,232,0.9)]" />
              EMS + Industrial IoT
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.78, delay: 0.24 }}
              className="max-w-[760px] font-display text-[clamp(2.8rem,6.4vw,6.8rem)] leading-[0.93] text-ink"
            >
              Power data,
              <span className="block bg-gradient-to-r from-blue-deep via-blue to-cyan bg-clip-text text-transparent">
                made visible.
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.72, delay: 0.36 }}
              className="mt-7 h-[44px] overflow-hidden md:h-[58px]"
            >
              <motion.div
                key={words[wordIndex]}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <TypeLine text={words[wordIndex]} />
              </motion.div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.72, delay: 0.48 }}
              className="mt-6 max-w-[620px] text-[1rem] leading-8 text-slate md:text-[1.08rem]"
            >
              Real-time monitoring, alerts,utomation for cleaner energy decisions across plants, machines, and facilities.
            </motion.p>

            {/* <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.72, delay: 0.58 }}
              className="mt-9 flex w-full max-w-[460px] flex-col gap-3 sm:flex-row lg:max-w-none"
            >
              <Link
                href="/contact"
                className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full bg-gradient-primary px-7 text-[0.92rem] font-bold text-white shadow-[0_14px_36px_rgba(0,82,204,0.28)] transition-transform duration-200 hover:-translate-y-0.5"
              >
                Get a Demo
                <SiteIcon token="arrow-right" className="h-4 w-4" />
              </Link>

              <Link
                href="/services"
                className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full border border-blue/15 bg-white/80 px-7 text-[0.92rem] font-bold text-blue-deep shadow-brand-sm backdrop-blur transition-transform duration-200 hover:-translate-y-0.5 hover:border-cyan/40"
              >
                Explore Solutions
                <SiteIcon token="arrow-right" className="h-4 w-4" />
              </Link>
            </motion.div> */}
          </div>

          <HeroVisual />
        </div>
      </div>
    </section>
  )
}

function TypeLine({ text }: { text: string }) {
  return (
    <div className="flex h-[44px] items-center justify-center md:h-[58px] lg:justify-start">
      <motion.span
        initial={{ width: 0 }}
        animate={{ width: '100%' }}
        transition={{
          duration: 1.6,
          repeat: Infinity,
          repeatDelay: 1.2,
          ease: 'linear',
        }}
        className="inline-block overflow-hidden whitespace-nowrap border-r-2 border-cyan pr-2 font-display text-[clamp(1.15rem,3vw,2.3rem)] font-bold bg-gradient-to-r from-blue-deep via-blue to-cyan bg-clip-text text-transparent"
      >
        {text}
      </motion.span>
    </div>
  )
}

function HeroVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 36, scale: 0.96 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ duration: 0.85, delay: 0.38, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="relative mx-auto hidden w-full max-w-[460px] lg:block"
    >
      <div className="absolute -left-8 top-12 h-[72%] w-px bg-gradient-to-b from-transparent via-cyan/70 to-transparent" />
      <div className="absolute -right-5 bottom-16 h-28 w-px bg-gradient-to-b from-transparent via-blue-deep/60 to-transparent" />

      <div className="relative overflow-hidden rounded-[8px] border border-blue/12 bg-white/88 shadow-[0_28px_90px_rgba(0,32,74,0.18)] backdrop-blur-xl">
        <div className="flex items-center justify-between border-b border-border/80 px-5 py-4">
          <div>
            <div className="text-[0.72rem] font-bold uppercase tracking-[0.16em] text-cyan-dark">
              Smart AI EMS
            </div>
            <div className="mt-1 text-[1.05rem] font-bold text-ink">Actual platform dashboard</div>
          </div>
          <div className="flex h-10 w-10 items-center justify-center rounded-[8px] bg-blue-deep text-white shadow-[0_10px_26px_rgba(0,32,74,0.24)]">
            <SiteIcon token="zap" className="h-5 w-5" />
          </div>
        </div>

        <div className="p-3">
          <div className="relative overflow-hidden rounded-[6px] border border-border bg-snow">
            <Image
              src={emsDashboard}
              alt="Atreya Smart AI EMS dashboard showing consumption, cost, and energy charts"
              priority
              className="h-auto w-full"
              sizes="460px"
            />
          </div>
          <div className="grid grid-cols-3 gap-2 pt-3">
            {['kWh', 'Cost', 'Load'].map((label) => (
              <div key={label} className="rounded-[6px] border border-border bg-white px-3 py-2 text-center">
                <div className="font-mono text-[0.64rem] font-bold uppercase tracking-[0.12em] text-mist">{label}</div>
                <div className="mt-1 h-1 rounded-full bg-gradient-to-r from-blue-deep to-cyan" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
