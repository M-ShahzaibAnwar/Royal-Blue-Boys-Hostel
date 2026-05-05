import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          onClick={scrollToTop}
          className="fixed bottom-4 left-4 md:bottom-6 md:left-6 z-50 p-2 md:p-2.5 bg-[#0A3D62] dark:bg-[#D4AF37] text-white dark:text-gray-900 rounded-full shadow-lg hover:bg-[#08314e] dark:hover:bg-[#c4a133] transition-colors focus:outline-none border-2 border-white/20 dark:border-gray-900/20"
          aria-label="Back to top"
        >
          <ArrowUp className="w-4 h-4 md:w-5 md:h-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
