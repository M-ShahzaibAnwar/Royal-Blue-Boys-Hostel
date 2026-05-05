import { motion } from 'motion/react';
import { ShieldCheck, Video, UserCheck } from 'lucide-react';

export default function Security() {
  return (
    <section className="py-12 lg:py-20 bg-[#0A3D62] relative overflow-hidden text-white">
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2 text-center lg:text-left"
          >
            <span className="text-[#D4AF37] font-bold tracking-wider text-sm uppercase mb-3 block">Your Safety First</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">24/7 Security & Peace of Mind</h2>
            <p className="text-blue-100 text-lg leading-relaxed mb-8">
              We prioritize the safety of our residents above all. Our premises are fully equipped with modern security systems and dedicated staff to ensure a completely safe environment.
            </p>
            <a 
              href="#contact" 
              className="inline-block px-8 py-3.5 bg-[#D4AF37] text-gray-900 font-bold rounded-lg shadow-lg hover:bg-[#c4a133] transition-colors"
            >
              Contact Us
            </a>
          </motion.div>
          
          <div className="lg:w-1/2 grid sm:grid-cols-2 gap-6 w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white/10 backdrop-blur-sm border border-white/10 p-6 rounded-2xl flex flex-col items-center lg:items-start text-center lg:text-left"
            >
              <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center text-[#D4AF37] mb-4">
                <Video className="w-7 h-7" />
              </div>
              <h4 className="font-bold text-xl mb-2">CCTV Surveillance</h4>
              <p className="text-blue-100 text-sm">Round-the-clock camera monitoring covering all common areas and entrances.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white/10 backdrop-blur-sm border border-white/10 p-6 rounded-2xl flex flex-col items-center lg:items-start text-center lg:text-left sm:translate-y-8"
            >
              <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center text-[#D4AF37] mb-4">
                <UserCheck className="w-7 h-7" />
              </div>
              <h4 className="font-bold text-xl mb-2">Warden Available</h4>
              <p className="text-blue-100 text-sm">Experienced on-site warden available 24/7 to assist and ensure discipline.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white/10 backdrop-blur-sm border border-white/10 p-6 rounded-2xl flex flex-col items-center lg:items-start text-center lg:text-left"
            >
              <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center text-[#D4AF37] mb-4">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <h4 className="font-bold text-xl mb-2">Safe Environment</h4>
              <p className="text-blue-100 text-sm">Secure entry protocols and a gated facility to protect your personal belongings.</p>
            </motion.div>
            
            <div className="hidden sm:block"></div> {/* Spacer for grid layout */}
          </div>
        </div>
      </div>
    </section>
  );
}
