import { HeroSection } from '@/components/sections/HeroSection'
import { MarqueeStrip } from '@/components/sections/MarqueeStrip'
import { ExpertiseSection } from '@/components/sections/ExpertiseSection'
import { StatsSection } from '@/components/sections/StatsSection'
import { MacgridSection } from '@/components/sections/MacgridSection'
import { CTASection } from '@/components/sections/CTASection'

export default function Home() {
  return (
    <>
      <HeroSection />
      <MarqueeStrip />
      <ExpertiseSection />
      <StatsSection />
      <MacgridSection />
      <CTASection />
    </>
  )
}
