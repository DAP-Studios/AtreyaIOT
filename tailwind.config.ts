import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        yellow:  { DEFAULT: '#FFD000', dark: '#E6B800' },
        cyan:    { DEFAULT: '#00D4E8', dark: '#00A8BB' },
        blue:    { DEFAULT: '#0052CC', dark: '#003A99', deep: '#00204A' },
        green:   { DEFAULT: '#00C96E', dark: '#009950' },
        ink:     { DEFAULT: '#080F1E', 2: '#14213D', 3: '#1E3050' },
        snow:    { DEFAULT: '#F5F9FF' },
        cool:    { DEFAULT: '#EBF2FF' },
        slate:   { DEFAULT: '#4A5E7A' },
        mist:    { DEFAULT: '#8FA4BF' },
        border:  { DEFAULT: '#D5E5F5' },
      },
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        body:    ['var(--font-body)', 'sans-serif'],
        mono:    ['var(--font-mono)', 'monospace'],
      },
      backgroundImage: {
        'gradient-primary':  'linear-gradient(135deg, #0052CC, #00D4E8)',
        'gradient-hero':     'linear-gradient(135deg, #FFD000, #00D4E8)',
        'gradient-green':    'linear-gradient(135deg, #009950, #00C96E)',
        'gradient-dark':     'linear-gradient(135deg, #080F1E, #14213D)',
        'gradient-vm':       'linear-gradient(135deg, #003A99, #0052CC 35%, #00A8BB 65%, #009950)',
        'gradient-cta':      'linear-gradient(90deg, #E6B800, #FFD000, #00D4E8, #0052CC)',
        'grid-pattern':      "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='rgba(0,82,204,0.06)' stroke-width='1'%3E%3Cpath d='M60 0L0 0 0 60'/%3E%3C/g%3E%3C/svg%3E\")",
      },
      animation: {
        'marquee':    'marquee 28s linear infinite',
        'float':      'float 6s ease-in-out infinite',
        'pulse-dot':  'pulseDot 1.6s ease-in-out infinite',
        'bar-fill':   'barFill 1.2s ease-out forwards',
        'shimmer':    'shimmer 2s ease-in-out infinite',
        'spin-slow':  'spin 8s linear infinite',
        'cta-shift':  'ctaShift 6s ease-in-out infinite',
        'progress':   'progressFlow 3s linear infinite',
      },
      keyframes: {
        marquee:      { from:{ transform:'translateX(0)' }, to:{ transform:'translateX(-50%)' } },
        float:        { '0%,100%':{ transform:'translateY(0)' }, '50%':{ transform:'translateY(-12px)' } },
        pulseDot:     { '0%,100%':{ opacity:'1', transform:'scale(1)' }, '50%':{ opacity:'0.3', transform:'scale(0.4)' } },
        barFill:      { from:{ width:'0%' }, to:{ width:'var(--bar-width, 80%)' } },
        shimmer:      { '0%,100%':{ opacity:'0' }, '50%':{ opacity:'1' } },
        ctaShift:     { '0%,100%':{ backgroundPosition:'0% 50%' }, '50%':{ backgroundPosition:'100% 50%' } },
        progressFlow: { '0%':{ backgroundPosition:'0% 0%' }, '100%':{ backgroundPosition:'300% 0%' } },
      },
      boxShadow: {
        'brand-sm': '0 4px 20px rgba(0,82,204,0.08)',
        'brand-md': '0 12px 48px rgba(0,82,204,0.13)',
        'brand-lg': '0 24px 80px rgba(0,82,204,0.18)',
        'brand-xl': '0 40px 120px rgba(0,82,204,0.22)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
}

export default config
