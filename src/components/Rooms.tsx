import { motion } from 'motion/react';
import { hostelData } from '../data';
import { Check, MessageCircle, ArrowRight } from 'lucide-react';

export default function Rooms() {
  return (
    <section id="rooms" className="py-12 lg:py-20 bg-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#D4AF37] font-bold tracking-wider text-sm uppercase mb-3 block">Accommodation</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0A3D62] mb-6">Our Rooms</h2>
          <p className="text-gray-600 text-lg">
            Choose the perfect room that fits your budget and lifestyle. All rooms are carefully designed & fully furnished for students.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {hostelData.rooms.map((room, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 flex flex-col"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img 
                  src={room.image} 
                  alt={room.type} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full shadow-sm text-sm font-semibold text-[#0A3D62]">
                  {room.price}
                </div>
              </div>
              
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{room.type}</h3>
                <p className="text-gray-600 mb-6 flex-1">{room.description}</p>
                
                <div className="space-y-3 mb-8">
                  {room.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-3 text-gray-700">
                      <div className="w-6 h-6 rounded-full bg-[#0A3D62]/10 flex items-center justify-center shrink-0">
                        <Check className="w-3.5 h-3.5 text-[#0A3D62]"/>
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                  <a 
                    href="#contact" 
                    className="flex-1 px-6 py-3 border border-gray-200 text-gray-800 font-semibold rounded-xl hover:bg-gray-50 flex items-center justify-center gap-2 transition-colors"
                  >
                    Contact Details
                  </a>
                  <a 
                    target="_blank" 
                    rel="noreferrer" 
                    href={`${hostelData.whatsappLink}?text=Hi, I am interested in booking a ${room.type}.`}
                    className="flex-1 px-6 py-3 bg-[#25D366] text-white font-semibold rounded-xl hover:bg-[#20bd5a] flex items-center justify-center gap-2 transition-colors shadow-lg shadow-[#25D366]/20"
                  >
                    <MessageCircle className="w-5 h-5" /> Book Now
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
