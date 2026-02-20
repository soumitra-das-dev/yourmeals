import HeroSection from '@/components/HeroSection'
import { About } from '@/components/sections/About'
import MenuSection from '@/components/MenuSection'
import PlansSection from '@/components/PlansSection'
import { HowToOrder } from '@/components/sections/HowToOrder'
import TestimonialsSection from '@/components/TestimonialsSection'
import { Contact } from '@/components/sections/Contact'
import Footer from '@/components/Footer'
import { Navbar } from '@/components/Navbar'
import { BackToTop } from '@/components/BackToTop'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <About />
      <MenuSection />
      <PlansSection />
      <HowToOrder />
      <TestimonialsSection />
      <Contact />
      <Footer />
      <BackToTop />
    </main>
  )
}
