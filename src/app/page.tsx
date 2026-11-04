import {
  Navbar,
  FooterSection,
  BackToTop,
  HeroSection,
  About,
  MenuSection,
  PlansSection,
  HowToOrder,
  TestimonialsSection,
  Contact,
} from '@/components';

export default function Home() {
  return (
    <main className="min-h-dvh">
      <Navbar />
      <HeroSection />
      <About />
      <MenuSection />
      <PlansSection />
      <HowToOrder />
      <TestimonialsSection />
      <Contact />
      <FooterSection />
      <BackToTop />
    </main>
  );
}
