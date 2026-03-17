'use client'
import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { cn, scrollToSection } from '@/lib/utils'
import { NAV_ITEMS } from '@/data'
import logo from '@/assets/icon.png'
import { SiteIcon } from '@/components/ui/SiteIcon'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10)
      const sections = document.querySelectorAll<HTMLElement>('section[id]')
      sections.forEach((sec) => {
        if (window.scrollY >= sec.offsetTop - 130) setActiveSection(sec.id)
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'sticky top-0 z-[800] glass border-b border-border/60 transition-shadow duration-300',
        scrolled ? 'shadow-brand-md' : 'shadow-brand-sm'
      )}
    >
      <div className="max-w-[1320px] mx-auto px-5 h-[72px] flex items-center justify-between gap-6">
        {/* Brand */}
        <button onClick={() => scrollToSection('hero')} className="flex items-center gap-3 group flex-shrink-0">
          <div className="w-[42px] h-[42px] rounded-[11px]  flex items-center justify-center ">
            <Image src={logo} alt="Atreya IoT" width={34} height={34} className="object-contain" priority />
          </div>
          <div className="leading-tight">
            <div className="font-arial font-bold text-[1.25rem] text-ink tracking-narrow">
              Atreya<span className="text-cyan-dark">IoT</span>
            </div>
            <div className="text-[10px] text-black tracking-[0.12em] uppercase">& Automation</div>
          </div>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1 flex-1 justify-center">
          {NAV_ITEMS.map((item) =>
            item.children ? (
              <DropdownItem key={item.label} item={item} activeSection={activeSection} />
            ) : (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className={cn(
                  'px-[14px] py-[9px] rounded-[10px] text-[0.84rem] font-semibold transition-all duration-200',
                  activeSection === item.href.replace('#', '')
                    ? 'bg-cool text-blue'
                    : 'text-slate hover:bg-cool hover:text-blue'
                )}
              >
                {item.label}
              </button>
            )
          )}
        </nav>

        {/* Actions */}
        <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
          <a href="tel:+917900000000" className="flex items-center gap-2 px-[14px] py-[9px] rounded-[10px] text-[0.8rem] font-semibold text-slate hover:bg-cool hover:text-blue transition-all duration-200">
            <SiteIcon token="phone" className="w-4 h-4" /> <span>Call Us</span>
          </a>
          <motion.button
            whileHover={{ y: -2, boxShadow: '0 8px 32px rgba(0,82,204,0.4)' }}
            whileTap={{ scale: 0.97 }}
            onClick={() => scrollToSection('cta')}
            className="flex items-center gap-2 bg-gradient-primary text-white font-bold text-[0.82rem] px-6 py-[11px] rounded-full shadow-[0_4px_18px_rgba(0,82,204,0.28)] transition-all duration-200"
          >
            <span>Get a Demo</span>
            <SiteIcon token="arrow-right" className="w-3.5 h-3.5" />
          </motion.button>
        </div>

        {/* Hamburger */}
        <button
          className="lg:hidden flex flex-col gap-[5px] p-[5px] cursor-pointer"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          <span className={cn('w-[22px] h-[2px] bg-ink rounded-full transition-transform duration-300', mobileOpen && 'rotate-45 translate-y-[7px]')} />
          <span className={cn('w-[22px] h-[2px] bg-ink rounded-full transition-opacity duration-300', mobileOpen && 'opacity-0')} />
          <span className={cn('w-[22px] h-[2px] bg-ink rounded-full transition-transform duration-300', mobileOpen && '-rotate-45 -translate-y-[7px]')} />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22 }}
            className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-border shadow-brand-lg z-50 max-h-[calc(100vh-72px)] overflow-y-auto"
          >
            <div className="max-w-[1320px] mx-auto px-5 py-4 flex flex-col gap-1">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.label}
                  onClick={() => { scrollToSection(item.href); setMobileOpen(false) }}
                  className="text-left px-4 py-3 rounded-xl text-[0.92rem] font-semibold text-slate hover:bg-cool hover:text-blue transition-all duration-200"
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-3 mt-2 border-t border-border flex gap-3">
                <button
                  onClick={() => { scrollToSection('cta'); setMobileOpen(false) }}
                  className="flex-1 bg-gradient-primary text-white font-bold text-sm py-3 rounded-full text-center inline-flex items-center justify-center gap-2"
                >
                  Get a Demo <SiteIcon token="arrow-right" className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

function DropdownItem({ item, activeSection }: { item: typeof NAV_ITEMS[0]; activeSection: string }) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  return (
    <div ref={ref} className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button
        className={cn(
          'flex items-center gap-1 px-[14px] py-[9px] rounded-[10px] text-[0.84rem] font-semibold transition-all duration-200',
          activeSection === item.href.replace('#','') ? 'bg-cool text-blue' : 'text-slate hover:bg-cool hover:text-blue'
        )}
      >
        {item.label}
        <span className={cn('text-[9px] transition-transform duration-200', open && 'rotate-180')}>▼</span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.97 }}
            transition={{ duration: 0.18 }}
            className="absolute top-[calc(100%+10px)] left-[-16px] bg-white rounded-3xl shadow-brand-xl border border-border min-w-[260px] p-3 z-50"
          >
            {item.children?.map((child) => (
              <button
                key={child.label}
                onClick={() => { scrollToSection(child.href); setOpen(false) }}
                className="w-full flex items-center gap-3 px-[13px] py-[11px] rounded-[10px] hover:bg-cool transition-colors duration-150 text-left"
              >
                <span className="w-[38px] h-[38px] rounded-[9px] flex items-center justify-center text-[0.9rem] flex-shrink-0" style={{ background: child.bg }}>
                  <SiteIcon token={child.icon} className="w-[18px] h-[18px]" />
                </span>
                <span>
                  <strong className="block text-[0.82rem] font-bold text-ink">{child.label}</strong>
                  <span className="text-[0.71rem] text-mist">{child.sub}</span>
                </span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
