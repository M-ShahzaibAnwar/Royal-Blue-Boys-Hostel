import { motion } from 'motion/react';
import { hostelData } from '../data';
import { GraduationCap, MapPin } from 'lucide-react';

export default function Universities() {
  return (
    <section className="py-12 lg:py-20 bg-[#F3F4F6] relative border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#D4AF37] font-bold tracking-wider text-sm uppercase mb-3 block">Location</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0A3D62] mb-6">Nearby Universities</h2>
          <p className="text-gray-600 text-lg">
            Save time on daily commute. We are located near top educational institutions in Islamabad.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
          {hostelData.universities.map((uni, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center group hover:border-[#D4AF37]/40 hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              <div className="w-12 h-12 rounded-full bg-[#0A3D62]/5 flex items-center justify-center mb-4 text-[#0A3D62] group-hover:scale-110 group-hover:text-[#D4AF37] transition-all">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">{uni.name}</h4>
              <div className="flex items-center gap-1.5 text-sm text-[#D4AF37] font-medium bg-[#D4AF37]/10 px-3 py-1 rounded-full text-center">
                <MapPin className="w-3.5 h-3.5" />
                {uni.distance}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
