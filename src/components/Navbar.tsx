import { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { hostelData } from '../data';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Check system preference or local storage on load
    if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  // Prevent scroll when sidebar is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '#home', emoji: '🏠' },
    { name: 'About', href: '#about', emoji: 'ℹ️' },
    { name: 'Facilities', href: '#facilities', emoji: '✨' },
    { name: 'Rooms', href: '#rooms', emoji: '🛏️' },
    { name: 'Gallery', href: '#gallery', emoji: '🖼️' },
    { name: 'Contact', href: '#contact', emoji: '📞' }
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    
    if (href.startsWith('#')) {
      const targetId = href.substring(1);
      // Slight delay to allow the mobile menu close animation to start and body overflow to reset
      setTimeout(() => {
        const elem = document.getElementById(targetId);
        if (elem) {
          const navbarHeight = 70; // offset for fixed navbar
          const elementPosition = elem.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.scrollY - navbarHeight;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 50);
    }
  };

  return (
    <>
      <nav className={`fixed w-full z-40 transition-all duration-300 ${isScrolled ? 'bg-[#0A3D62] shadow-lg py-3' : 'bg-[#0A3D62] lg:bg-transparent lg:bg-gradient-to-b lg:from-black/60 lg:to-transparent py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center">
            <div className="flex-shrink-0 flex items-center gap-3 cursor-pointer" onClick={(e) => handleNavClick(e, '#home')}>
               <div className="w-8 h-8 sm:w-10 sm:h-10 border-2 border-[#D4AF37] rounded-full flex items-center justify-center shrink-0 bg-[#0A3D62]">
                  <span className="font-bold text-base sm:text-xl text-[#D4AF37]">R</span>
               </div>
               <span className="font-bold text-base sm:text-lg text-white tracking-tight leading-tight">
                Royal Blue<br className="hidden sm:block lg:hidden"/> <span className="sm:hidden lg:inline">Boys Hostel</span>
              </span>
            </div>
            
            <div className="hidden lg:flex items-center space-x-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-white/90 hover:text-[#D4AF37] transition-colors font-medium text-sm drop-shadow-md"
                >
                  {link.name}
                </a>
              ))}
              <div className="flex items-center pl-4 border-l border-white/20 gap-4">
                <button
                  onClick={toggleDarkMode}
                  className="text-white/90 hover:text-[#D4AF37] transition-colors focus:outline-hidden"
                  aria-label="Toggle Dark Mode"
                >
                  {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </button>
                <a 
                  href={hostelData.whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-[#D4AF37] hover:bg-[#c4a133] text-gray-900 font-semibold px-5 py-2.5 rounded-lg transition-colors shadow-lg shadow-[#D4AF37]/20 border border-[#D4AF37]/50 text-sm"
                >
                  Book Now
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3 lg:hidden">
              <button 
                onClick={() => setMobileMenuOpen(true)}
                className="text-white hover:text-[#D4AF37] focus:outline-hidden p-1"
                aria-label="Open menu"
              >
                <Menu className="h-6 w-6 sm:h-7 sm:w-7" />
              </button>
              <button
                onClick={toggleDarkMode}
                className="text-white hover:text-[#D4AF37] focus:outline-hidden p-1"
                aria-label="Toggle Dark Mode"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={isDark ? 'dark' : 'light'}
                    initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                    exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {isDark ? <Sun className="h-5 w-5 sm:h-6 sm:w-6" /> : <Moon className="h-5 w-5 sm:h-6 sm:w-6" />}
                  </motion.div>
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Slide-in Sidebar Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 lg:hidden"
              aria-hidden="true"
            />
            
            {/* Sidebar Content */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 bottom-0 w-[280px] sm:w-[320px] bg-[#0A3D62] shadow-2xl z-50 flex flex-col lg:hidden"
            >
              <div className="p-5 flex justify-between items-center border-b border-white/10">
                <div className="flex items-center gap-2">
                   <div className="w-8 h-8 border-2 border-[#D4AF37] rounded-full flex items-center justify-center shrink-0">
                      <span className="font-bold text-sm text-[#D4AF37]">R</span>
                   </div>
                   <span className="font-bold text-white tracking-tight">Royal Blue</span>
                </div>
                <button 
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-white/70 hover:text-white bg-white/5 hover:bg-white/10 rounded-full p-2 transition-colors focus:outline-hidden"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto py-6 px-4 flex flex-col gap-2">
                {navLinks.map((link, index) => (
                  <motion.a 
                    key={link.name} 
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.05 }}
                    className="flex items-center gap-3 text-white/80 hover:text-white hover:bg-white/10 px-4 py-3 rounded-xl transition-all font-medium text-sm"
                  >
                    <span className="text-lg opacity-80">{link.emoji}</span>
                    {link.name}
                  </motion.a>
                ))}
              </div>

              <div className="p-6 border-t border-white/10 bg-white/5">
                <a 
                  href={hostelData.whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center w-full bg-[#D4AF37] hover:bg-[#c19e32] text-slate-900 font-bold py-3.5 px-6 rounded-xl transition-colors shadow-lg shadow-[#D4AF37]/20 text-sm"
                >
                  Book via WhatsApp
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
