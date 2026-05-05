import { motion } from 'motion/react';
import { hostelData } from '../data';
import { MapPin, ShieldCheck, DollarSign, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&q=80&w=2000")',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-[#0A3D62]/85 bg-gradient-to-t from-[#0A3D62] via-[#0A3D62]/80 to-transparent"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-[#D4AF37]/20 text-[#D4AF37] font-semibold tracking-wider text-sm mb-6 border border-[#D4AF37]/30 backdrop-blur-sm">
            Premium Student Living
          </span>
          
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
            Royal Blue Boys Hostel <br className="hidden md:block" />
            <span className="text-[#D4AF37]">Islamabad</span>
          </h1>
          
          <p className="text-lg md:text-xl text-blue-100/90 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            Comfortable & Secure Living for Students Near Top Universities
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a 
              href="#rooms" 
              className="w-full sm:w-auto px-8 py-3.5 bg-[#f8f9fa] text-[#0A3D62] hover:bg-gray-200 font-semibold rounded-lg shadow-xl shadow-black/10 transition-all flex items-center justify-center gap-2 group"
            >
              View Rooms
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href={hostelData.whatsappLink} 
              target="_blank" 
              rel="noreferrer" 
              className="w-full sm:w-auto px-8 py-3.5 bg-[#D4AF37] hover:bg-[#c4a133] text-gray-900 font-bold rounded-lg shadow-xl shadow-[#D4AF37]/20 transition-all flex items-center justify-center gap-2 border border-[#D4AF37]/50"
            >
              Contact on WhatsApp
            </a>
          </div>
          
          {/* Trust Badges */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto border-t border-white/10 pt-10">
            <div className="flex items-center justify-center gap-3 text-white/90">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 backdrop-blur-sm">
                 <MapPin className="w-5 h-5 text-[#D4AF37]" />
              </div>
              <span className="font-medium">Near Universities</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-white/90">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 backdrop-blur-sm">
                 <DollarSign className="w-5 h-5 text-[#D4AF37]" />
              </div>
              <span className="font-medium">Affordable Pricing</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-white/90">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 backdrop-blur-sm">
                 <ShieldCheck className="w-5 h-5 text-[#D4AF37]" />
              </div>
              <span className="font-medium">Secure & Safe</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
