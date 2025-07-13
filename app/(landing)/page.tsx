import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { SolutionsSection } from "@/components/solutions-section"
import { StatsSection } from "@/components/stats-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CTASection } from "@/components/cta-section"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <SolutionsSection />
      <StatsSection />
      <TestimonialsSection />
      <CTASection />
    </main>
  )
}
