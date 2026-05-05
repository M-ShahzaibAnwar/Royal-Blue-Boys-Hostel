import { MapPin, Phone, MessageCircle, Mail } from 'lucide-react';
import { hostelData } from '../data';
import { motion } from 'motion/react';

export default function Contact() {
  return (
    <section id="contact" className="py-12 lg:py-20 bg-[#F3F4F6]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#D4AF37] font-bold tracking-wider text-sm uppercase mb-3 block">Get In Touch</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0A3D62] mb-6">Contact & Location</h2>
          <p className="text-gray-600 text-lg">
            Have questions? Feel free to reach out to us directly or visit our hostel.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact Info & Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 flex flex-col gap-8"
          >
            {/* Cards for Info */}
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center bg-[#0A3D62]/5 rounded-xl text-[#0A3D62]"><Phone className="w-6 h-6"/></div>
                <div>
                  <p className="text-sm text-gray-500 font-medium mb-1">Call Us</p>
                  <p className="text-lg font-bold text-gray-900">{hostelData.phone}</p>
                </div>
              </div>
              <a 
                href={hostelData.whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4 group hover:border-[#25D366]/40 transition-colors"
                >
                <div className="w-12 h-12 flex items-center justify-center bg-[#25D366]/10 rounded-xl text-[#25D366] group-hover:bg-[#25D366] group-hover:text-white transition-all"><MessageCircle className="w-6 h-6"/></div>
                <div>
                  <p className="text-sm text-gray-500 font-medium mb-1">WhatsApp</p>
                  <p className="text-lg font-bold text-gray-900">Message Us Now</p>
                </div>
              </a>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center bg-[#0A3D62]/5 rounded-xl text-[#0A3D62]"><MapPin className="w-6 h-6"/></div>
                <div>
                  <p className="text-sm text-gray-500 font-medium mb-1">Address</p>
                  <p className="text-base font-bold text-gray-900 leading-tight">I-11/2 Street No 21, House 57 <br/>Near Metro Store, Islamabad</p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Send us a message</h3>
              <form 
                className="space-y-4" 
                onSubmit={(e) => { 
                   e.preventDefault(); 
                   window.open(`${hostelData.whatsappLink}?text=Hi, I have a query from the website.`); 
                }}
              >
                <div>
                  <input type="text" placeholder="Your Name" className="w-full px-5 py-3.5 bg-gray-50 text-gray-900 rounded-xl border border-gray-200 focus:outline-none focus:border-[#0A3D62] focus:ring-1 focus:ring-[#0A3D62] transition-all" required />
                </div>
                <div>
                  <input type="tel" placeholder="Phone Number" className="w-full px-5 py-3.5 bg-gray-50 text-gray-900 rounded-xl border border-gray-200 focus:outline-none focus:border-[#0A3D62] focus:ring-1 focus:ring-[#0A3D62] transition-all" required />
                </div>
                <div>
                  <textarea rows={4} placeholder="Your Message" className="w-full px-5 py-3.5 bg-gray-50 text-gray-900 rounded-xl border border-gray-200 focus:outline-none focus:border-[#0A3D62] focus:ring-1 focus:ring-[#0A3D62] transition-all resize-none" required></textarea>
                </div>
                <button type="submit" className="w-full py-4 bg-[#0A3D62] text-white font-bold rounded-xl hover:bg-[#08314e] transition-colors shadow-lg shadow-[#0A3D62]/20 flex items-center justify-center gap-2">
                  Send via WhatsApp <MessageCircle className="w-5 h-5"/>
                </button>
              </form>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-3 rounded-3xl overflow-hidden border border-gray-100 shadow-xl relative min-h-[400px] h-full"
          >
            <iframe 
               src={hostelData.mapIframe}
               className="absolute inset-0 w-full h-full border-0"
               allowFullScreen
               loading="lazy" 
               referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
