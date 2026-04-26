import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import ScopeSection from '@/components/ScopeSection'
import MilestonesSection from '@/components/MilestonesSection'
import DownloadsSection from '@/components/DownloadsSection'
import AboutSection from '@/components/AboutSection'
import AchievementsSection from '@/components/AchievementsSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <ScrollReveal>
          <HeroSection />
        </ScrollReveal>
        
        {/* ScopeSection handles its own GSAP animations as it uses pinning */}
        <ScopeSection />
        
        <ScrollReveal>
          <MilestonesSection />
        </ScrollReveal>
        
        <ScrollReveal>
          <DownloadsSection />
        </ScrollReveal>
        
        <ScrollReveal>
          <AboutSection />
        </ScrollReveal>
        
        <ScrollReveal>
          <AchievementsSection />
        </ScrollReveal>
        
        <ScrollReveal>
          <ContactSection />
        </ScrollReveal>
      </main>
      <Footer />
    </>
  )
}
