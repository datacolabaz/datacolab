import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/sections/Hero';
import TrustedBar from '@/components/sections/TrustedBar';
import CaseStudies from '@/components/sections/CaseStudies';
import Services from '@/components/sections/Services';
import Process from '@/components/sections/Process';
import ROICalculator from '@/components/sections/ROICalculator';
import Blog from '@/components/sections/Blog';
import Testimonials from '@/components/sections/Testimonials';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TrustedBar />
      <CaseStudies />
      <Services />
      <Process />
      <ROICalculator />
      <Blog />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
