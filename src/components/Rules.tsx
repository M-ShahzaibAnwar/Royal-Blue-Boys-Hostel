import { motion } from 'motion/react';
import { hostelData } from '../data';
import { AlertCircle } from 'lucide-react';

export default function Rules() {
  return (
    <section className="py-12 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="bg-red-50 border border-red-100 rounded-3xl p-8 lg:p-12 relative overflow-hidden">
          <div className="absolute -top-10 -right-10 text-red-100">
            <AlertCircle className="w-64 h-64 opacity-50" />
          </div>
          
          <div className="relative z-10">
            <span className="text-red-600 font-bold tracking-wider text-sm uppercase mb-3 block">Terms & Guidelines</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Rules & Policies</h2>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {hostelData.rules.map((rule, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center shrink-0 mt-1">
                    <span className="text-red-600 font-bold text-sm">{idx + 1}</span>
                  </div>
                  <p className="text-gray-700 font-medium leading-relaxed mt-1">
                    {rule}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
