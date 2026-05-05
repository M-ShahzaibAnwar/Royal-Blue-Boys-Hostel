import React, { useEffect } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Facilities from './components/Facilities';
import Rooms from './components/Rooms';
import Gallery from './components/Gallery';
import Universities from './components/Universities';
import Security from './components/Security';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Rules from './components/Rules';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import BackToTop from './components/BackToTop';

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Handle anchor links smoothly
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const id = this.getAttribute('href');
        if (!id || id === '#') return;
        const target = document.querySelector(id) as HTMLElement;
        if (target) {
          lenis.scrollTo(target, { offset: -80 }); // Adjust for navbar height
        }
      });
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen font-sans bg-[#F3F4F6] text-slate-800 dark:bg-gray-900 dark:text-gray-100 flex flex-col transition-colors duration-300">
      <Navbar />

      <main className="flex-1 w-full bg-white dark:bg-gray-900 transition-colors duration-300">
        <Hero />
        <About />
        <Facilities />
        <Rooms />
        <Gallery />
        <Universities />
        <Security />
        <Testimonials />
        <FAQ />
        <Rules />
        <Contact />
      </main>
      
      <Footer />
      <FloatingWhatsApp />
      <BackToTop />
    </div>
  );
}
