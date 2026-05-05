import { motion } from 'motion/react';
import { hostelData } from '../data';

export default function Facilities() {
  return (
    <section id="facilities" className="py-12 lg:py-20 bg-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#D4AF37] font-bold tracking-wider text-sm uppercase mb-3 block">Premium Facilities</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0A3D62] mb-6">Built For Comfort</h2>
          <p className="text-gray-600 text-lg">
            We offer all-inclusive facilities to ensure a hassle-free living experience so you can focus entirely on your studies.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
          {hostelData.facilities.map((fac, index) => {
            const Icon = fac.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="p-6 border border-gray-100 rounded-2xl bg-gray-50 flex flex-col items-center text-center gap-4 group hover:bg-white hover:border-[#D4AF37]/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-full flex items-center justify-center text-[#0A3D62] bg-white shadow-sm border border-gray-100 group-hover:text-[#D4AF37] group-hover:bg-[#D4AF37]/10 transition-all duration-300">
                  <Icon className="w-6 h-6" />
                </div>
                <h4 className="font-semibold text-sm md:text-base text-gray-800 group-hover:text-[#0A3D62] transition-colors duration-300">
                  {fac.name}
                </h4>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
}
