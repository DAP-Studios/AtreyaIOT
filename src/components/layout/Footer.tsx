"use client"

import Image from 'next/image'
import Link from 'next/link'
import { Facebook, Linkedin, Twitter, Youtube } from 'lucide-react'
import { scrollToSection } from '@/lib/utils'
import { SERVICES } from '@/data'
import logo from '@/assets/logo white.png'

const INDUSTRIES_LIST = ['Manufacturing & Steel', 'Petro Chemical', 'Power & Utilities', 'Oil & Gas', 'Smart Cities']

export function Footer() {
  return (
    <footer className="bg-ink text-white/65">
      <div className="max-w-[1320px] mx-auto px-5 pt-16 pb-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[1.7fr_1fr_1fr] gap-11">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-[42px] h-[42px] rounded-[11px] flex items-center justify-center flex-shrink-0 overflow-hidden">
              <Image src={logo} alt="Atreya IoT" width={34} height={34} className="object-contain" />
            </div>
            <div className="leading-tight">
              <div className="font-arial font-bold text-[1.25rem] text-white tracking-narrow">
                Atreya<span className="text-cyan">IoT</span>
              </div>
              <div className="text-[10px] text-mist tracking-[0.12em] uppercase">& Automation</div>
            </div>
          </div>
          <p className="text-[0.82rem] leading-[1.75] max-w-[260px] text-white/40 mb-5">
            Intelligent Energy Management, Industrial IoT, and Smart Instrumentation — engineered to reduce costs and drive operational excellence.
          </p>
          <div className="flex gap-2">
            {[Linkedin, Twitter, Facebook, Youtube].map((Icon, i) => (
              <a key={i} href="#" className="w-9 h-9 rounded-[9px] bg-white/[0.06] border border-white/[0.07] flex items-center justify-center text-[0.8rem] text-white/35 hover:bg-cyan hover:text-white hover:border-cyan transition-all duration-200 hover:-translate-y-[2px]">
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Solutions */}
        <div>
          <h4 className="flex items-center gap-2 font-bold text-[0.78rem] text-white uppercase tracking-widest mb-4">
            <span className="w-[18px] h-[2px] bg-cyan rounded" />
            Solutions
          </h4>
          <ul className="flex flex-col gap-[9px]">
            {SERVICES.map((service) => (
              <li key={service.id}>
                <Link href={`/services/${service.id}`} className="text-[0.8rem] text-white/40 hover:text-cyan flex items-center gap-2 transition-colors duration-200">
                  <span className="text-[9px] text-cyan">›</span>{service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Industries */}
        <div>
          <h4 className="flex items-center gap-2 font-bold text-[0.78rem] text-white uppercase tracking-widest mb-4">
            <span className="w-[18px] h-[2px] bg-cyan rounded" />
            Industries
          </h4>
          <ul className="flex flex-col gap-[9px]">
            {INDUSTRIES_LIST.map((s) => (
              <li key={s}>
                <button onClick={() => scrollToSection('industries')} className="text-[0.8rem] text-white/40 hover:text-cyan flex items-center gap-2 transition-colors duration-200">
                  <span className="text-[9px] text-cyan">›</span>{s}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/[0.06] max-w-[1320px] mx-auto px-5 py-5 flex items-center justify-between flex-wrap gap-3">
        <span className="text-[0.71rem] text-white/25">
          © 2025 Atreya IoT and Automation. All Rights Reserved.
        </span>

        <div className="flex items-center gap-3 text-[0.8rem]">
          <a
            href="https://thedap.live"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-white/70 transition-colors duration-300"
          >
            Designed & Developed by <span className='text-red-400 font-bold'>DAP Tech Solutions</span>
          </a>
        </div>
      </div>
    </footer>
  )
}
