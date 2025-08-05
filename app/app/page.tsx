
import Header from '@/components/header'
import HeroSection from '@/components/hero-section'
import HowItWorksSection from '@/components/how-it-works-section'
import FeaturesSection from '@/components/features-section'
import BenefitsSection from '@/components/benefits-section'
import AppDownloadSection from '@/components/app-download-section'
import FAQSection from '@/components/faq-section'
import Footer from '@/components/footer'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <HowItWorksSection />
      <FeaturesSection />
      <BenefitsSection />
      <AppDownloadSection />
      <FAQSection />
      <Footer />
    </main>
  )
}
