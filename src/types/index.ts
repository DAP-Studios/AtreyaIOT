// ═══════════════════════════════════════
// ATREYA IoT — TYPE DEFINITIONS
// ═══════════════════════════════════════

export interface HeroSlide {
  id: number
  tag: string
  title: string
  titleEm: string
  titleSub: string
  desc: string
  image: string
  cta: string
  ctaSecondary: string
}

export interface Stat {
  id: number
  icon: string
  num: number
  sfx: string
  label: string
}

export interface ExpertiseItem {
  id: number
  tag: string
  title: string
  desc: string
  image: string
  icon: string
  color: string
  colorBg: string
  link: string
}

export interface ServiceFeature {
  icon: string
  color: string
  bg: string
  title: string
  desc: string
}

import type { StaticImageData } from 'next/image'

export interface Service {
  id: string
  label: string
  icon: string
  title: string
  desc: string
  image: string | StaticImageData
  badgeTitle: string
  badgeSub: string
  badgeIcon: string
  badgeColor: string
  applications: string[]
  features: ServiceFeature[]
}

export interface ArchStep {
  step: string
  icon: string
  color: string
  color2: string
  title: string
  desc: string
  tags: string[]
}

export interface MacgridModule {
  icon: string
  color: string
  bg: string
  name: string
  sub: string
}

export interface Industry {
  id: number
  name: string
  cat: string
  desc: string
  image: string
}

export interface Benefit {
  icon: string
  color: string
  bg: string
  title: string
  desc: string
}

export interface Testimonial {
  id: number
  name: string
  role: string
  initials: string
  gradFrom: string
  gradTo: string
  stars: number
  quote: string
}

export interface NavItem {
  label: string
  href: string
  children?: NavDropdownItem[]
}

export interface NavDropdownItem {
  label: string
  sub: string
  href: string
  icon: string
  color: string
  bg: string
  tab?: string
}

export type SectionId =
  | 'hero'
  | 'expertise'
  | 'services'
  | 'architecture'
  | 'macgrid'
  | 'industries'
  | 'benefits'
  | 'about'
  | 'testimonials'
  | 'cta'
