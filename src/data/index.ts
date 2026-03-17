import type {
  HeroSlide, Stat, ExpertiseItem, Service, ArchStep,
  MacgridModule, Industry, Benefit, Testimonial, NavItem,
} from '@/types'

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#hero' },
  {
    label: 'Solutions', href: '#services',
    children: [
      { label: 'EMS Platform',   sub: 'Real-time SCADA monitoring', href: '#services', icon: '🖥️', color: '#0052CC', bg: 'rgba(0,82,204,0.1)',   tab: 'ems' },
      { label: 'IoT Cloud',      sub: 'Wireless connectivity',       href: '#services', icon: '📡', color: '#00A8BB', bg: 'rgba(0,212,232,0.1)',  tab: 'iot' },
      { label: 'Energy Audit',   sub: 'Way2Save program',            href: '#services', icon: '🌿', color: '#009950', bg: 'rgba(0,201,110,0.1)', tab: 'audit' },
      { label: 'Smart Metering', sub: 'Energy meters & hardware',    href: '#services', icon: '⚡', color: '#E6B800', bg: 'rgba(255,208,0,0.12)', tab: 'meter' },
      { label: 'Control Apps',   sub: 'PF & demand control',         href: '#services', icon: '🎚️', color: '#7c3aed', bg: 'rgba(124,58,237,0.08)', tab: 'ctrl' },
    ],
  },
  { label: 'Architecture', href: '#architecture' },
  { label: 'Smart AI EMS', href: '#macgrid' },
  { label: 'Industries',   href: '#industries' },
  { label: 'About',        href: '#about' },
]

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 1,
    tag: 'Server-Based EMS Platform',
    title: 'Intelligent',
    titleEm: 'Energy Management',
    titleSub: 'for Industry 4.0',
    desc: 'Monitor, control, and optimize your entire energy ecosystem with Atreya\'s SCADA-based EMS — real-time data, smart alarms, zero downtime.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&q=85',
    cta: 'Watch Demo',
    ctaSecondary: 'Explore Solutions',
  },
  {
    id: 2,
    tag: 'Industrial IoT Solutions',
    title: 'Smart',
    titleEm: 'IoT Architecture',
    titleSub: 'Field to Cloud',
    desc: 'Completely wireless via WiFi & GPRS — zero wiring costs, minute-to-minute tracking, cloud-hosted infrastructure with no on-site servers.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&q=85',
    cta: 'IoT Platform',
    ctaSecondary: 'Download Brochure',
  },
  {
    id: 3,
    tag: 'Way2Save Energy Program',
    title: 'Cut Energy Costs',
    titleEm: 'by up to 30%',
    titleSub: 'with Our Audit',
    desc: 'Outsourced energy management, online audits, power quality analysis, and periodic reports delivered to your CFO dashboard.',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1920&q=85',
    cta: 'Start Saving',
    ctaSecondary: 'Talk to Expert',
  },
  {
    id: 4,
    tag: 'Smart AI EMS Software',
    title: 'Smart AI EMS —',
    titleEm: 'Real-Time SCADA',
    titleSub: '& Smart Monitoring',
    desc: '8 powerful modules — Real-Time, Historian, Billing, SMS/Email alerts, SLD diagrams — all in one unified platform.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=85',
    cta: 'Smart AI EMS',
    ctaSecondary: 'Case Studies',
  },
]

export const STATS: Stat[] = [
  { id: 1, icon: '⚡', num: 30,  sfx: '%',  label: 'Energy Savings' },
  { id: 2, icon: '📡', num: 24,  sfx: '/7', label: 'Live Monitoring' },
  { id: 3, icon: '🏭', num: 100, sfx: '+',  label: 'Installations' },
  { id: 4, icon: '🧩', num: 8,   sfx: '',   label: 'Smart Modules' },
  { id: 5, icon: '🌍', num: 15,  sfx: '+',  label: 'Industries' },
]

export const EXPERTISE: ExpertiseItem[] = [
  {
    id: 1,
    tag: 'Industrial IoT',
    title: 'Industrial IoT',
    desc: 'Machine-to-machine communication enabling real-time device connectivity with full transparency and minimal inefficiencies across your plant floor.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80',
    icon: '🔌',
    color: '#0052CC',
    colorBg: 'rgba(0,82,204,0.1)',
    link: '#services',
  },
  {
    id: 2,
    tag: 'Smart Automation',
    title: 'Smart Automation',
    desc: 'Digitally connected and centrally controlled infrastructure — wireless, scalable, zero human intervention for faster and timely operational outputs.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80',
    icon: '⚙️',
    color: '#00A8BB',
    colorBg: 'rgba(0,212,232,0.1)',
    link: '#services',
  },
  {
    id: 3,
    tag: 'Smart Instrumentation',
    title: 'Smart Instrumentation',
    desc: 'Advanced energy meters, power meters, and networking components providing granular data for better decisions and power quality management.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
    icon: '📊',
    color: '#009950',
    colorBg: 'rgba(0,201,110,0.1)',
    link: '#services',
  },
]

export const SERVICES: Service[] = [
  {
    id: 'ems',
    label: 'EMS Platform',
    icon: '🖥️',
    title: 'Energy Management System',
    desc: 'A comprehensive suite of tools to monitor, control, and optimize generation and transmission using real-time SCADA data — frequency, actual generation, tie-line flows, and plant unit controller status.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    badgeTitle: 'Smart AI EMS — LIVE',
    badgeSub: 'Real-time SCADA monitoring active',
    badgeIcon: '🖥️',
    badgeColor: '#0052CC',
    features: [
      { icon: '📈', color: '#0052CC', bg: 'rgba(0,82,204,0.1)',   title: 'Real-Time SCADA',        desc: 'Live monitoring of all electrical parameters across your plant' },
      { icon: '🔔', color: '#00A8BB', bg: 'rgba(0,212,232,0.1)', title: 'Smart Alarms',            desc: 'Configurable alerts for all parameters via SMS and Email' },
      { icon: '📄', color: '#009950', bg: 'rgba(0,201,110,0.1)', title: 'Comprehensive Reports',   desc: 'Daily, weekly, monthly energy reports delivered automatically' },
      { icon: '🔒', color: '#E6B800', bg: 'rgba(255,208,0,0.12)',title: 'User Security Control',   desc: 'Multi-level access permissions for CEO, CFO, managers' },
    ],
  },
  {
    id: 'iot',
    label: 'IoT Cloud',
    icon: '📡',
    title: 'Cloud-Based IoT Platform',
    desc: 'Completely wireless installations using WiFi and GPRS with cloud-hosted infrastructure. No on-premise servers needed — track everything from any internet-enabled device.',
    image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=800&q=80',
    badgeTitle: 'Cloud IoT — Active',
    badgeSub: 'Wireless GPRS/WiFi connected',
    badgeIcon: '☁️',
    badgeColor: '#00A8BB',
    features: [
      { icon: '📡', color: '#00A8BB', bg: 'rgba(0,212,232,0.1)', title: 'Completely Wireless',     desc: 'Advanced, low-cost WiFi and GPRS communication' },
      { icon: '📱', color: '#0052CC', bg: 'rgba(0,82,204,0.1)',  title: 'Any Device Access',       desc: 'Smartphones, tablets, desktops — monitor from anywhere' },
      { icon: '⏱️', color: '#009950', bg: 'rgba(0,201,110,0.1)', title: 'Minute-to-Minute',        desc: 'Real-time tracking of power, utility, sensor data' },
      { icon: '✉️', color: '#E6B800', bg: 'rgba(255,208,0,0.12)',title: 'Auto Email & SMS',        desc: 'Daily reports and critical alerts automatically' },
    ],
  },
  {
    id: 'audit',
    label: 'Energy Audit',
    icon: '🌿',
    title: 'Way2Save Energy Program',
    desc: 'Outsourced energy management — online energy audits, power quality audits, and periodic reports with detailed savings recommendations and payback calculations.',
    image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&q=80',
    badgeTitle: 'Way2Save Program',
    badgeSub: 'Energy audit & optimization',
    badgeIcon: '🌿',
    badgeColor: '#009950',
    features: [
      { icon: '🔍', color: '#009950', bg: 'rgba(0,201,110,0.1)', title: 'Online Energy Audits',    desc: 'Comprehensive analysis of your energy consumption' },
      { icon: '⚡', color: '#0052CC', bg: 'rgba(0,82,204,0.1)',  title: 'Power Quality Audit',     desc: 'Harmonic analysis, PF assessment, voltage quality' },
      { icon: '🥧', color: '#00A8BB', bg: 'rgba(0,212,232,0.1)', title: 'Savings Report',          desc: 'Opportunities identified, investments, payback period' },
      { icon: '💰', color: '#E6B800', bg: 'rgba(255,208,0,0.12)',title: 'ROI Calculation',         desc: 'Detailed financial analysis for every recommendation' },
    ],
  },
  {
    id: 'meter',
    label: 'Metering',
    icon: '⚡',
    title: 'Standalone Metering Solutions',
    desc: 'From basic to advanced energy and power meters — application-based and industry-specific packages with complete hardware accessories and networking components.',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80',
    badgeTitle: 'Smart Metering',
    badgeSub: 'Energy and power meters',
    badgeIcon: '⚡',
    badgeColor: '#E6B800',
    features: [
      { icon: '🎚️', color: '#E6B800', bg: 'rgba(255,208,0,0.12)',title: 'Basic & Power Meters',    desc: 'Wide range of meters for every application' },
      { icon: '🔗', color: '#0052CC', bg: 'rgba(0,82,204,0.1)',  title: 'Networking Components',   desc: 'Complete connectivity hardware and accessories' },
      { icon: '🏭', color: '#00A8BB', bg: 'rgba(0,212,232,0.1)', title: 'Industry-Specific',       desc: 'Application-based packages per sector' },
      { icon: '🔌', color: '#009950', bg: 'rgba(0,201,110,0.1)', title: 'Easy Integration',        desc: 'Seamless integration with existing systems' },
    ],
  },
  {
    id: 'ctrl',
    label: 'Control Apps',
    icon: '🎚️',
    title: 'Control Applications',
    desc: 'Intelligent power factor controllers, demand controllers, lighting energy savers, harmonic filters, and power factor improvement panels.',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80',
    badgeTitle: 'Control Applications',
    badgeSub: 'PF & demand control active',
    badgeIcon: '🎚️',
    badgeColor: '#0052CC',
    features: [
      { icon: '🎚️', color: '#0052CC', bg: 'rgba(0,82,204,0.1)',  title: 'Intelligent PF Controller', desc: 'Automatic power factor correction and optimization' },
      { icon: '🌊', color: '#00A8BB', bg: 'rgba(0,212,232,0.1)', title: 'Harmonic Filters',          desc: 'Active and passive harmonic mitigation systems' },
      { icon: '💡', color: '#E6B800', bg: 'rgba(255,208,0,0.12)',title: 'Lighting Energy Saver',     desc: 'Intelligent lighting control and dimming systems' },
      { icon: '📊', color: '#009950', bg: 'rgba(0,201,110,0.1)', title: 'Demand Controller',         desc: 'Peak demand management to avoid tariff penalties' },
    ],
  },
]

export const ARCH_STEPS: ArchStep[] = [
  { step: '01', icon: '🔌', color: '#0052CC', color2: '#00D4E8', title: 'Field Devices',    desc: 'Energy meters, sensors, DG sets, UPS, AHU, chillers', tags: ['Meters', 'Sensors', 'DG Sets'] },
  { step: '02', icon: '🖥️', color: '#00A8BB', color2: '#00C96E', title: 'BMS Gateway',      desc: 'Hyperthings Gateway and BMS integration',              tags: ['Gateway', 'BMS', 'Protocol'] },
  { step: '03', icon: '📡', color: '#00C96E', color2: '#FFD000', title: 'Connectivity',     desc: 'GPRS / LAN / WiFi / GSM / RF / Fiber',                tags: ['WiFi', 'GPRS', 'GSM'] },
  { step: '04', icon: '☁️', color: '#FFD000', color2: '#00D4E8', title: 'Cloud Platform',   desc: 'SQL Server database with static IP and SMART software', tags: ['SQL', 'Cloud', 'Static IP'] },
  { step: '05', icon: '📊', color: '#00D4E8', color2: '#0052CC', title: 'Analytics & Apps', desc: 'Web app, mobile, dashboards, SMS/Email alerts',          tags: ['Web App', 'Mobile', 'Reports'] },
]

export const MACGRID_MODULES: MacgridModule[] = [
  { icon: '⚙️', color: '#0052CC', bg: 'rgba(0,82,204,0.1)',   name: 'Settings',   sub: 'System config' },
  { icon: '⚡', color: '#00A8BB', bg: 'rgba(0,212,232,0.1)', name: 'Real-Time',  sub: 'Live data view' },
  { icon: '🗄️', color: '#009950', bg: 'rgba(0,201,110,0.1)', name: 'Historian',  sub: 'Historical data' },
  { icon: '💰', color: '#E6B800', bg: 'rgba(255,208,0,0.12)',name: 'Billing',    sub: 'Energy billing' },
  { icon: '💬', color: '#0052CC', bg: 'rgba(0,82,204,0.1)',   name: 'SMS',        sub: 'Alert notifications' },
  { icon: '✉️', color: '#00A8BB', bg: 'rgba(0,212,232,0.1)', name: 'Email',      sub: 'Scheduled reports' },
  { icon: '🔗', color: '#009950', bg: 'rgba(0,201,110,0.1)', name: 'SLD',        sub: 'Single line diagram' },
  { icon: '💾', color: '#E6B800', bg: 'rgba(255,208,0,0.12)',name: 'DCU',        sub: 'Data collection' },
]

export const INDUSTRIES: Industry[] = [
  { id: 1, name: 'Manufacturing & Steel', cat: 'Heavy Industry', desc: 'Energy optimization for heavy industry',    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=500&q=80' },
  { id: 2, name: 'Petro Chemical',        cat: 'Chemical',       desc: 'Process monitoring & safety compliance',    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&q=80' },
  { id: 3, name: 'Agricultural',          cat: 'Agriculture',    desc: 'Smart irrigation & energy management',      image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=500&q=80' },
  { id: 4, name: 'Nuclear & Power',       cat: 'Power',          desc: 'Grid management & SCADA control',           image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=500&q=80' },
  { id: 5, name: 'Oil & Gas',             cat: 'Energy',         desc: 'Remote field asset monitoring',             image: 'https://images.unsplash.com/photo-1569025690938-a00729c9e1f9?w=500&q=80' },
  { id: 6, name: 'Power & Utilities',     cat: 'Utilities',      desc: 'Smart grid & transmission systems',         image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=500&q=80' },
  { id: 7, name: 'Forestry & Paper',      cat: 'Forestry',       desc: 'Process efficiency & sustainability',        image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&q=80' },
  { id: 8, name: 'Smart Cities',          cat: 'Smart City',     desc: 'Urban energy & IoT infrastructure',          image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=500&q=80' },
]

export const BENEFITS: Benefit[] = [
  { icon: '💰', color: '#0052CC', bg: 'rgba(0,82,204,0.1)',   title: 'Reduces Energy Costs',   desc: 'Automatic optimization, dynamic dispatch — cutting costs year on year.' },
  { icon: '📈', color: '#00A8BB', bg: 'rgba(0,212,232,0.1)', title: 'Improves Performance',   desc: 'Minimizes MW & MVAr losses, maximizes voltage security index.' },
  { icon: '✅', color: '#009950', bg: 'rgba(0,201,110,0.1)', title: 'Ensures Compliance',     desc: 'Comply with energy-efficiency and emission-reduction obligations.' },
  { icon: '🔔', color: '#E6B800', bg: 'rgba(255,208,0,0.12)',title: 'Real-Time Alerts',       desc: 'SMS and email alerts for sudden peaks, PF drops, motor overloads.' },
  { icon: '🌿', color: '#0052CC', bg: 'rgba(0,82,204,0.1)',   title: 'Carbon Abatement',       desc: 'Influences energy requirements across the value chain long-term.' },
  { icon: '📉', color: '#009950', bg: 'rgba(0,201,110,0.1)', title: 'Reduces Downtime',       desc: 'Track and alert on bottlenecks before they impact revenue.' },
]

export const TESTIMONIALS: Testimonial[] = [
  { id: 1, name: 'Rajesh Kumar',  role: 'Plant Manager, Steel Industry, Gujarat',          initials: 'RK', gradFrom: '#0052CC', gradTo: '#00D4E8', stars: 5, quote: '"Atreya\'s Smart AI EMS helped us reduce our monthly energy bill by 28%. The real-time dashboard and automatic SMS alerts have completely transformed how we manage our plant\'s energy."' },
  { id: 2, name: 'Anita Mehta',   role: 'CFO, Chemical Plant, Vadodara',                   initials: 'AM', gradFrom: '#00A8BB', gradTo: '#009950', stars: 5, quote: '"The Way2Save audit identified savings worth ₹18 lakhs annually. Implementation was seamless with zero downtime and the ROI was achieved in just 8 months."' },
  { id: 3, name: 'Suresh Patel',  role: 'Operations Head, Pharmaceutical, Ahmedabad',     initials: 'SP', gradFrom: '#009950', gradTo: '#E6B800', stars: 5, quote: '"Wireless installation meant no disruption to operations. The cloud platform gives our team live data from anywhere — exactly what modern industrial IoT should look like."' },
  { id: 4, name: 'Manoj Joshi',   role: 'Electrical Engineer, Power Plant, Surat',         initials: 'MJ', gradFrom: '#E6B800', gradTo: '#00A8BB', stars: 5, quote: '"The SLD diagram module and power quality audit helped us identify a critical harmonic issue costing us heavily. Excellent technical team and outstanding ongoing support."' },
]
