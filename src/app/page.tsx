import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import Stats from '@/components/Stats';
import Testimonials from '@/components/Testimonials';
import CtaSection from '@/components/CtaSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Stats />
      <Testimonials />
      <CtaSection />
      <Footer />
    </main>
  );
}
