import Navbar from '@/src/shared/components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

const HomeScreen = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Gallery />
      <About />
      <Services />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
};

export default HomeScreen;
