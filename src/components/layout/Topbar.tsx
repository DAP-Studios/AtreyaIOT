'use client'
import Link from 'next/link'

export function Topbar() {
  return (
    <div className="bg-ink-2 relative z-30">
      <div className="max-w-[1320px] mx-auto px-5 py-2 flex items-center justify-between gap-4 flex-wrap">
        <div className="flex items-center gap-5 flex-wrap">
          <a href="mailto:info@atreyaiot.com" className="flex items-center gap-2 text-white/55 text-xs hover:text-yellow transition-colors duration-200">
            <span className="text-cyan text-[10px]">✉</span> info@atreyaiot.com
          </a>
          <a href="tel:+917900000000" className="flex items-center gap-2 text-white/55 text-xs hover:text-yellow transition-colors duration-200">
            <span className="text-cyan text-[10px]">📞</span> +91 79 XXXX XXXX
          </a>
          <span className="flex items-center gap-2 text-white/55 text-xs">
            <span className="text-cyan text-[10px]">📍</span> Ahmedabad, Gujarat
          </span>
          <span className="flex items-center gap-2 bg-green/15 text-green px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase">
            <span className="w-[6px] h-[6px] rounded-full bg-green animate-pulse-dot inline-block" />
            All Systems Online
          </span>
        </div>
        <div className="flex gap-2">
          {['linkedin-in','twitter','youtube','instagram'].map((icon) => (
            <a
              key={icon}
              href="#"
              className="w-7 h-7 rounded-lg bg-white/[0.06] border border-white/[0.07] flex items-center justify-center text-white/40 text-xs hover:bg-cyan hover:text-white hover:border-cyan transition-all duration-200"
              aria-label={icon}
            >
              {icon === 'linkedin-in' ? 'in' : icon === 'twitter' ? '𝕏' : icon === 'youtube' ? '▶' : '📷'}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
