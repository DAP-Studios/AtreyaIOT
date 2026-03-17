import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Atreya IoT & Automation | Smart Energy Management',
  description: 'Server-based Energy Management System (EMS), Industrial IoT solutions, Smart Metering, SCADA monitoring, and the Smart AI EMS platform for Industry 4.0.',
  keywords: ['IoT', 'Energy Management', 'EMS', 'SCADA', 'Smart AI EMS', 'Industrial Automation', 'Smart Metering', 'Way2Save', 'Power Quality Audit'],
  authors: [{ name: 'Atreya IoT and Automation' }],
  openGraph: {
    title: 'Atreya IoT & Automation',
    description: 'Intelligent Energy Management for Industry 4.0',
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Atreya IoT & Automation',
    description: 'Intelligent Energy Management for Industry 4.0',
  },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0052CC',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Outfit:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-white text-ink antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}
