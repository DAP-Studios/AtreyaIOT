# Atreya IoT & Automation — Next.js TypeScript Site

A production-ready **Next.js 14 + TypeScript** website for Atreya IoT & Automation — Smart Energy Management, Industrial IoT Solutions, and Macgrid EMS Platform.

---

## Tech Stack

| Technology | Purpose |
|------------|---------|
| **Next.js 14** (App Router) | React framework with SSR/SSG |
| **TypeScript** (strict) | Full type safety across all files |
| **Tailwind CSS v3** | Utility-first styling with custom design tokens |
| **Framer Motion v11** | Page animations, scroll reveals, hover effects |
| **react-countup** | Animated number counters |
| **react-intersection-observer** | Trigger animations on scroll |
| **Radix UI** | Accessible tab and accordion primitives |
| **Lucide React** | Icon system |
| **next/image** | Optimised image loading |

---

## Project Structure

```
atreya-ts/
├── next.config.ts           ← Image CDN + bundle optimization
├── tailwind.config.ts       ← Full design token system
├── tsconfig.json            ← Strict TypeScript + path aliases (@/*)
│
└── src/
    ├── app/
    │   ├── layout.tsx       ← Root layout with full SEO metadata
    │   ├── page.tsx         ← Main page composing all sections
    │   └── globals.css      ← Tailwind base + custom utilities
    │
    ├── types/index.ts       ← TypeScript interfaces for all data
    ├── data/index.ts        ← All content (slides, services, industries…)
    ├── lib/utils.ts         ← cn() helper + scrollToSection
    │
    └── components/
        ├── layout/
        │   ├── Topbar.tsx   ← Contact bar with social links
        │   ├── Navbar.tsx   ← Sticky nav with dropdown + mobile menu
        │   └── Footer.tsx   ← 4-column footer
        │
        ├── ui/
        │   ├── index.tsx    ← ProgressBar, BackToTop, PageLoader, SectionHeader
        │   └── *.tsx        ← Re-export shims
        │
        └── sections/
            ├── HeroSection.tsx         ← Framer Motion carousel + ticker
            ├── MarqueeSection.tsx      ← Animated marquee + Expertise + Services tabs
            ├── ArchSection.tsx         ← Architecture timeline + Stats + Macgrid
            ├── IndustriesSection.tsx   ← Industries + Benefits + About + Testimonials + CTA
            └── *.tsx                   ← Re-export shims per section
```

---

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev
# → http://localhost:3000

# 3. Build for production
npm run build

# 4. Type-check
npm run type-check
```

---

## Design Tokens (Tailwind)

```ts
// Colors
yellow:  #FFD000   // Primary accent
cyan:    #00D4E8   // Secondary accent
blue:    #0052CC   // Brand blue
green:   #00C96E   // Success/live
ink:     #080F1E   // Dark background
snow:    #F5F9FF   // Light background

// Shadows
shadow-brand-sm / md / lg / xl

// Gradients
bg-gradient-primary   → blue → cyan
bg-gradient-hero      → yellow → cyan
bg-gradient-vm        → blue-dark → cyan → green
bg-gradient-cta       → yellow → cyan → blue (animated)
```

---

## Key Components

### `SectionHeader`
```tsx
<SectionHeader
  eyebrow="What We Offer"
  title="Smart Solutions"
  titleEm="Portfolio"
  desc="Optional description text..."
  center     // centres alignment
  light      // white text for dark backgrounds
/>
```

### `PageLoader`
Auto-dismisses after 2 seconds with a custom SVG logo animation and progress bar.

### Framer Motion Patterns
- **Scroll reveals**: `whileInView` with `viewport={{ once: true }}`
- **Stagger children**: `transition={{ delay: i * 0.12 }}`
- **Hover lift**: `whileHover={{ y: -8 }}`
- **Spring press**: `whileTap={{ scale: 0.97 }}`

---

## Deploy

### Vercel (recommended — zero config)
```bash
npm install -g vercel
vercel
```

### Self-host
```bash
npm run build
npm start
# Runs on port 3000
```

### Docker
```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY . .
RUN npm ci && npm run build
CMD ["npm", "start"]
EXPOSE 3000
```

---

## Contact

**Atreya IoT & Automation**
Ahmedabad, Gujarat, India
info@atreyaiot.com

---

*Built with Next.js 14 · TypeScript · Tailwind CSS · Framer Motion*
