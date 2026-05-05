import { MessageCircle } from 'lucide-react';
import { hostelData } from '../data';

export default function FloatingWhatsApp() {
  return (
    <a
      href={hostelData.whatsappLink}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 p-2.5 md:p-3 bg-[#25D366] text-white rounded-full shadow-2xl hover:bg-[#20bd5a] hover:scale-110 transition-all duration-300 flex items-center justify-center border-[3px] border-white dark:border-gray-800"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="w-6 h-6 md:w-7 md:h-7" />
    </a>
  );
}
