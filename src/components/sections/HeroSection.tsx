'use client'
import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { HERO_SLIDES, STATS } from '@/data'
import { scrollToSection } from '@/lib/utils'
import { useInView } from 'react-intersection-observer'
import CountUp from 'react-countup'

const overlays = [
  'linear-gradient(135deg,rgba(8,15,30,0.82) 0%,rgba(0,52,153,0.52) 55%,rgba(0,212,232,0.22) 100%)',
  'linear-gradient(135deg,rgba(0,60,40,0.82) 0%,rgba(0,130,150,0.5) 55%,rgba(255,208,0,0.2) 100%)',
  'linear-gradient(135deg,rgba(8,15,30,0.85) 0%,rgba(0,82,150,0.55) 55%,rgba(0,200,110,0.2) 100%)',
  'linear-gradient(135deg,rgba(8,15,30,0.88) 0%,rgba(80,0,120,0.4) 55%,rgba(0,212,232,0.25) 100%)',
]

export function HeroSection() {
  const [current, setCurrent] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const goTo = useCallback((index: number) => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrent(((index % HERO_SLIDES.length) + HERO_SLIDES.length) % HERO_SLIDES.length)
    setTimeout(() => setIsAnimating(false), 800)
  }, [isAnimating])

  useEffect(() => {
    const timer = setInterval(() => goTo(current + 1), 5500)
    return () => clearInterval(timer)
  }, [current, goTo])

  const { ref: tickerRef, inView: tickerInView } = useInView({ triggerOnce: true })

  const slide = HERO_SLIDES[current]

  return (
    <section id="hero" className="relative overflow-hidden bg-ink min-h-screen">
      {/* Particle canvas overlay */}
      <canvas id="hero-canvas" className="absolute inset-0 z-[1] pointer-events-none" />

      {/* Background images */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.id}
          initial={{ scale: 1.08, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 1.04, opacity: 0 }}
          transition={{ duration: 1.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="absolute inset-0 z-[2]"
        >
          <Image
            src={slide.image}
            alt={slide.tag}
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div
            className="absolute inset-0"
            style={{ background: overlays[current] }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Grid texture */}
      <div className="absolute inset-0 z-[3] bg-grid opacity-40 pointer-events-none" />

      {/* Content */}
      <div className="relative z-[4] min-h-[calc(100vh-96px)] flex items-center justify-center px-5">
        <div className="text-center max-w-[900px] w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={`content-${slide.id}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Eyebrow */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-lg border border-white/22 px-5 py-2 rounded-full mb-7"
              >
                <span className="w-2 h-2 rounded-full bg-yellow animate-pulse-dot" />
                <span className="text-[0.72rem] font-semibold text-white/90 tracking-[0.14em] uppercase">
                  {slide.tag}
                </span>
              </motion.div>

              {/* Title */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.25 }}
                className="font-display font-bold text-[clamp(2.8rem,6.5vw,6rem)] leading-[1.0] text-white mb-5 tracking-[-0.025em]"
              >
                {slide.title}
                <br />
                <span className="bg-gradient-to-r from-yellow to-cyan bg-clip-text text-transparent">
                  {slide.titleEm}
                </span>
                <br />
                <span className="text-white/60 text-[0.72em]">{slide.titleSub}</span>
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.42 }}
                className="text-[1.08rem] text-white/75 leading-[1.75] max-w-[640px] mx-auto mb-9"
              >
                {slide.desc}
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.58 }}
                className="flex gap-4 justify-center flex-wrap"
              >
                <motion.button
                  whileHover={{ y: -3, boxShadow: '0 12px 40px rgba(0,212,232,0.45)' }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-2 bg-gradient-to-r from-yellow to-cyan text-ink font-extrabold text-[0.9rem] px-9 py-4 rounded-full shadow-[0_6px_28px_rgba(0,212,232,0.3)] transition-all"
                >
                  ▶ {slide.cta}
                </motion.button>
                <motion.button
                  whileHover={{ y: -3, background: 'rgba(255,255,255,0.2)' }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => scrollToSection('services')}
                  className="flex items-center gap-2 bg-white/10 backdrop-blur-[10px] text-white font-bold text-[0.9rem] px-9 py-4 rounded-full border border-white/40 transition-all"
                >
                  ↓ {slide.ctaSecondary}
                </motion.button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.7 }}
                className="mt-5 flex justify-center flex-wrap gap-2"
              >
                {['Friendly onboarding', 'Clear ROI planning', '24/7 support'].map((chip) => (
                  <span
                    key={chip}
                    className="text-[0.72rem] text-white/85 bg-white/12 border border-white/28 rounded-full px-3 py-1.5"
                  >
                    {chip}
                  </span>
                ))}
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Pagination */}
          <div className="flex justify-center gap-[10px] mt-12">
            {HERO_SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`h-[9px] rounded-full transition-all duration-300 ${i === current ? 'bg-yellow w-[26px]' : 'bg-white/35 w-[9px] hover:bg-white/70'}`}
              />
            ))}
          </div>
        </div>

        {/* Arrows */}
        <button
          onClick={() => goTo(current - 1)}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-[52px] h-[52px] rounded-full bg-white/10 backdrop-blur-[8px] border border-white/25 text-white flex items-center justify-center hover:bg-white/22 transition-all"
        >
          ‹
        </button>
        <button
          onClick={() => goTo(current + 1)}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-[52px] h-[52px] rounded-full bg-white/10 backdrop-blur-[8px] border border-white/25 text-white flex items-center justify-center hover:bg-white/22 transition-all"
        >
          ›
        </button>
      </div>

      {/* Ticker strip */}
      <div className="absolute bottom-0 left-0 right-0 z-10 bg-white/97 backdrop-blur-[24px] border-t border-border">
        <div ref={tickerRef} className="max-w-[1320px] mx-auto flex divide-x divide-border">
          {STATS.map((stat) => (
            <div key={stat.id} className="flex-1 flex items-center justify-center gap-4 py-5 px-3">
              <div className="w-[40px] h-[40px] rounded-[10px] bg-cool flex items-center justify-center text-[0.9rem] text-blue flex-shrink-0">
                {stat.icon}
              </div>
              <div>
                <div className="font-display font-bold text-[1.7rem] leading-none bg-gradient-primary bg-clip-text text-transparent">
                  {tickerInView ? (
                    <CountUp end={stat.num} duration={2.5} suffix={stat.sfx} />
                  ) : (
                    `0${stat.sfx}`
                  )}
                </div>
                <div className="text-[0.67rem] font-semibold text-mist uppercase tracking-[0.06em] mt-1">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
