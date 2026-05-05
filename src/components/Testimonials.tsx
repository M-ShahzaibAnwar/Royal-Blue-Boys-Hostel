import { motion } from 'motion/react';
import { hostelData } from '../data';
import { Quote } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="py-12 lg:py-20 bg-[#0A3D62] relative overflow-hidden text-white">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#D4AF37]/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#D4AF37] font-bold tracking-wider text-sm uppercase mb-3 block">Testimonials</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">What Students Say</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {hostelData.testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="bg-white/10 backdrop-blur-md border border-white/10 p-8 rounded-3xl relative"
            >
              <Quote className="w-10 h-10 text-[#D4AF37]/40 absolute top-6 right-6" />
              <div className="mb-6">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-[#D4AF37] text-lg">★</span>
                ))}
              </div>
              <p className="text-blue-50 text-lg italic leading-relaxed mb-8">"{testimonial.review}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center font-bold text-lg text-white">
                  {testimonial.name[0]}
                </div>
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <span className="text-sm text-blue-200">Resident</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
