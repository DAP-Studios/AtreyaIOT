import { Navbar } from '@/components/layout/Navbar'
import { HeroSection } from '@/components/sections/HeroSection'
import { MarqueeStrip } from '@/components/sections/MarqueeStrip'
import { ExpertiseSection } from '@/components/sections/ExpertiseSection'
import { ServicesSection } from '@/components/sections/ServicesSection'
import { ArchitectureSection } from '@/components/sections/ArchitectureSection'
import { StatsSection } from '@/components/sections/StatsSection'
import { MacgridSection } from '@/components/sections/MacgridSection'
import { IndustriesSection } from '@/components/sections/IndustriesSection'
import { BenefitsSection } from '@/components/sections/BenefitsSection'
import { AboutSection } from '@/components/sections/AboutSection'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { CTASection } from '@/components/sections/CTASection'
import { Footer } from '@/components/layout/Footer'
import { ProgressBar } from '@/components/ui/ProgressBar'
import { BackToTop } from '@/components/ui/BackToTop'
import { PageLoader } from '@/components/ui/PageLoader'

export default function Home() {
  return (
    <>
      <PageLoader />
      <ProgressBar />
      <Navbar />
      <main>
        <HeroSection />
        <MarqueeStrip />
        <ExpertiseSection />
        <ServicesSection />
        <ArchitectureSection />
        <StatsSection />
        <MacgridSection />
        <IndustriesSection />
        <BenefitsSection />
        <AboutSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
