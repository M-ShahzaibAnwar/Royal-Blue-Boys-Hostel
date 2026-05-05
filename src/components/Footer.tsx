import { hostelData } from '../data';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0A3D62] pt-16 pb-8 text-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 border-2 border-[#D4AF37] rounded-full flex items-center justify-center shrink-0">
                  <span className="font-bold text-xl text-[#D4AF37]">R</span>
              </div>
              <h3 className="font-bold text-lg leading-tight uppercase tracking-widest">Royal Blue<br/>Boys Hostel</h3>
            </div>
            <p className="text-blue-100/70 text-sm mb-6 leading-relaxed">
              Premium, secure, and student-focused living near Top Universities in Islamabad. Your home away from home.
            </p>
            <div className="flex gap-3">
              <a 
                href="https://www.facebook.com/royal.blue.boys.hostel.islamabad" 
                target="_blank" 
                rel="noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-white/10 text-[#D4AF37] rounded-full hover:bg-[#D4AF37] hover:text-[#0A3D62] transition-colors"
                aria-label="Visit our Facebook page"
              >
                <Facebook className="w-5 h-5" fill="currentColor" />
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-white/10 text-[#D4AF37] rounded-full hover:bg-[#D4AF37] hover:text-[#0A3D62] transition-colors"
                aria-label="Visit our Instagram page"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-white/10 text-[#D4AF37] rounded-full hover:bg-[#D4AF37] hover:text-[#0A3D62] transition-colors"
                aria-label="Visit our Twitter page"
              >
                <Twitter className="w-5 h-5" fill="currentColor" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-[#D4AF37] mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#home" className="text-blue-100 hover:text-white transition-colors text-sm">Home</a></li>
              <li><a href="#about" className="text-blue-100 hover:text-white transition-colors text-sm">About Us</a></li>
              <li><a href="#facilities" className="text-blue-100 hover:text-white transition-colors text-sm">Facilities</a></li>
              <li><a href="#rooms" className="text-blue-100 hover:text-white transition-colors text-sm">Rooms</a></li>
              <li><a href="#gallery" className="text-blue-100 hover:text-white transition-colors text-sm">Gallery</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-[#D4AF37] mb-6 uppercase tracking-wider text-sm">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                <span className="text-blue-100 text-sm leading-relaxed">I-11/2 Street No 21, House 57,<br/>Near Metro Store, Islamabad</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#D4AF37] shrink-0" />
                <span className="text-blue-100 text-sm">{hostelData.phone}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#D4AF37] shrink-0" />
                <span className="text-blue-100 text-sm">info@royalbluehostel.com.pk</span>
              </li>
            </ul>
          </div>

          {/* Location Map (Small inline map or CTA) */}
          <div>
             <h4 className="font-semibold text-[#D4AF37] mb-6 uppercase tracking-wider text-sm">Location</h4>
             <div className="rounded-xl overflow-hidden h-32 relative border border-white/10">
               <iframe 
                 src={hostelData.mapIframe}
                 className="absolute inset-0 w-full h-full border-0"
                 allowFullScreen
                 loading="lazy" 
                 referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
             </div>
             <a href="#contact" className="inline-block mt-4 text-sm text-blue-200 hover:text-[#D4AF37] transition-colors">
               Get Directions &rarr;
             </a>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-blue-200/50 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} {hostelData.name}. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm text-blue-200/50">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
