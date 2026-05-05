import { motion } from 'motion/react';
import { hostelData } from '../data';
import { ShieldCheck, MapPin, Wifi, BookOpen } from 'lucide-react';

export default function About() {
  const features = [
    {
      title: "Prime Location",
      description: "Located at I-11/2, near Metro Islamabad Store with easy access to public transport.",
      icon: MapPin
    },
    {
      title: "High-Speed WiFi",
      description: "Uninterrupted and fast internet access for your assignments and classes.",
      icon: Wifi
    },
    {
      title: "Secure Environment",
      description: "24/7 CCTV surveillance and warden availability for absolute safety.",
      icon: ShieldCheck
    },
    {
      title: "Peaceful Study",
      description: "A calm, student-focused atmosphere ideal for exam preparation.",
      icon: BookOpen
    }
  ];

  return (
    <section id="about" className="py-12 lg:py-20 bg-[#F3F4F6] relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[#D4AF37] font-bold tracking-wider text-sm uppercase mb-3 block">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0A3D62] mb-6 leading-tight">
              A Home Away <br/>From Home
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              {hostelData.about.description}
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * idx, duration: 0.5 }}
                    className="flex gap-4"
                  >
                    <div className="w-12 h-12 rounded-xl bg-white shadow-sm border border-gray-100 flex items-center justify-center shrink-0 text-[#0A3D62]">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{feature.title}</h4>
                      <p className="text-sm text-gray-500">{feature.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Image Content */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative block bg-gray-200">
               <img 
                 src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000" 
                 alt="Hostel environment"
                 className="object-cover w-full h-full"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
               <div className="absolute bottom-8 left-8 right-8">
                 <div className="bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl">
                   <div className="flex items-center gap-4">
                     <div className="w-12 h-12 bg-[#0A3D62] rounded-full flex items-center justify-center text-white">
                        <span className="font-bold text-xl">5+</span>
                     </div>
                     <div>
                       <p className="font-bold text-gray-900">Years of Excellence</p>
                       <p className="text-sm text-gray-500">Trusted by hundreds of students.</p>
                     </div>
                   </div>
                 </div>
               </div>
            </div>
            
            <div className="absolute -z-10 -top-8 -right-8 w-64 h-64 bg-[#D4AF37]/20 rounded-full blur-3xl"></div>
            <div className="absolute -z-10 -bottom-8 -left-8 w-64 h-64 bg-[#0A3D62]/20 rounded-full blur-3xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
