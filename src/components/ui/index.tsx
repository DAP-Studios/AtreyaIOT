'use client'
import { useEffect, useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import logo from '@/assets/logo.png'

// ── Progress Bar ──────────────────────
export function ProgressBar() {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement
      setWidth((el.scrollTop / (el.scrollHeight - el.clientHeight)) * 100)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      id="progress-bar"
      style={{ width: `${width}%` }}
      className="fixed top-0 left-0 h-[3px] z-[9999] pointer-events-none bg-gradient-to-r from-blue via-cyan to-yellow animate-progress bg-[length:300%_100%]"
    />
  )
}

// ── Back to Top ───────────────────────
export function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          whileHover={{ y: -4, boxShadow: '0 12px 32px rgba(0,82,204,0.35)' }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 z-[600] w-12 h-12 rounded-full bg-gradient-primary text-white flex items-center justify-center shadow-brand-md"
          aria-label="Back to top"
        >
          ↑
        </motion.button>
      )}
    </AnimatePresence>
  )
}

// ── Page Loader ───────────────────────
export function PageLoader() {
  const [done, setDone] = useState(false)
  const [status, setStatus] = useState('Initializing systems...')

  useEffect(() => {
    const msgs = ['Initializing systems...', 'Loading IoT modules...', 'Connecting cloud...', 'Ready.']
    let i = 0
    const iv = setInterval(() => { i = (i + 1) % msgs.length; setStatus(msgs[i]) }, 500)
    const timer = setTimeout(() => { setDone(true); clearInterval(iv) }, 2000)
    return () => { clearTimeout(timer); clearInterval(iv) }
  }, [])

  if (done) return null

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={done ? { opacity: 0 } : { opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[99999] bg-white flex items-center justify-center"
    >
      <div className="text-center w-[260px]">
        <div className="flex items-center justify-center mb-8">
          <Image src={logo} alt="Atreya IoT" width={200} height={200} className="object-contain drop-shadow-sm" priority />
        </div>
        <div className="h-[3px] bg-ink/10 rounded-full overflow-hidden mb-4">
          <div className="loader-bar-progress h-full bg-gradient-to-r from-blue via-cyan to-yellow rounded-full" />
        </div>
        <p className="font-mono text-[11px] text-ink/60 tracking-widest">{status}</p>
      </div>
    </motion.div>
  )
}

// ── Section Header ────────────────────
interface SectionHeaderProps {
  eyebrow: string
  title: string
  titleEm?: string
  desc?: string
  center?: boolean
  light?: boolean
  className?: string
}

export function SectionHeader({ eyebrow, title, titleEm, desc, center, light, className }: SectionHeaderProps) {
  return (
    <div className={cn('mb-16', center && 'text-center', className)}>
      <div className={cn(
        'inline-flex items-center gap-2 px-[18px] py-[7px] rounded-full border mb-4 text-[0.7rem] font-bold tracking-[0.16em] uppercase',
        light
          ? 'bg-white/12 border-white/22 text-white/85'
          : 'bg-gradient-to-r from-blue/[0.08] to-cyan/[0.08] border-cyan/20 text-cyan-dark'
      )}>
        {eyebrow}
      </div>
      <h2 className={cn(
        'font-display text-[clamp(2rem,3.4vw,3rem)] tracking-[-0.02em] leading-[1.1]',
        light ? 'text-white' : 'text-ink'
      )}>
        {title}
        {titleEm && (
          <em className={cn('not-italic', light ? 'text-yellow' : 'italic text-blue')}> {titleEm}</em>
        )}
      </h2>
      <div className={cn(
        'w-[52px] h-1 rounded-full mt-4',
        center && 'mx-auto',
        light ? 'bg-gradient-to-r from-white/50 to-white/20' : 'bg-gradient-to-r from-blue via-cyan to-yellow'
      )} />
      {desc && (
        <p className={cn(
          'mt-4 text-[0.96rem] leading-[1.8] max-w-[560px]',
          center && 'mx-auto',
          light ? 'text-white/72' : 'text-slate'
        )}>
          {desc}
        </p>
      )}
    </div>
  )
}
