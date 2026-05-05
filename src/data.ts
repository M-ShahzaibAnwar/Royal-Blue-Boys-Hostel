import {
  MapPin,
  Wifi,
  Coffee,
  ThermometerSun,
  Refrigerator,
  Car,
  GraduationCap,
  BedDouble,
  ShieldCheck,
  Droplets,
  LucideIcon
} from 'lucide-react';

export interface Facility {
  name: string;
  icon: string | LucideIcon;
}

export interface Room {
  type: string;
  description: string;
  price: string;
  image: string;
  features: string[];
}

export interface Testimonial {
  name: string;
  review: string;
}

export const hostelData = {
  name: "Royal Blue Boys Hostel",
  location: "Islamabad",
  phone: "+92 303 2829640",
  whatsappNumber: "923032829640",
  whatsappLink: "https://wa.me/923032829640",
  hero: {
    title: "Royal Blue Boys Hostel Islamabad",
    subtitle: "Affordable, Comfortable & Secure Living for Students",
    cta1: "View Rooms",
    cta2: "Contact on WhatsApp"
  },
  about: {
    title: "Why Choose Us?",
    description: "Experience a peaceful and student-focused environment right in the heart of Islamabad. Located conveniently near major universities, our hostel offers the perfect blend of comfort, security, and affordability to make your academic journey smooth.",
  },
  facilities: [
    { name: "Nearest to University Campuses", icon: MapPin },
    { name: "Near Metro Islamabad Store", icon: MapPin },
    { name: "Fully Furnished Rooms with Attached Washrooms", icon: BedDouble },
    { name: "High-Speed WiFi & Laundry", icon: Wifi },
    { name: "Hygienic Food & Mineral Water", icon: Coffee },
    { name: "Geyser Facility", icon: ThermometerSun },
    { name: "Refrigerator Available", icon: Refrigerator },
    { name: "Affordable Pricing", icon: ShieldCheck },
    { name: "Parking Facility", icon: Car },
    { name: "Nearby FAST, TMUC, Bahria, IIUI, IQRA & NUML", icon: GraduationCap },
  ],
  rooms: [
    {
      type: "3-Seater Room",
      description: "Spacious shared room perfect for students looking for a balance of privacy and budget.",
      price: "Contact for pricing",
      image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=800&q=80",
      features: ["Fully furnished", "Ventilated", "Study desk"]
    },
    {
      type: "4-Seater Room",
      description: "Economical and vibrant shared living space for students.",
      price: "Contact for pricing",
      image: "https://images.unsplash.com/photo-1522771731470-36946a658a52?auto=format&fit=crop&w=800&q=80",
      features: ["Attached washroom", "High-speed WiFi", "Study area space"]
    }
  ],
  gallery: [
    {
      url: "https://images.unsplash.com/photo-1522771731470-36946a658a52?auto=format&fit=crop&w=800&q=80",
      title: "Rooms",
      category: "Rooms"
    },
    {
      url: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=800&q=80",
      title: "Rooms",
      category: "Rooms"
    },
    {
      url: "https://images.unsplash.com/photo-1623625434462-e5e42318ae49?auto=format&fit=crop&w=800&q=80",
      title: "Dining & Common Room",
      category: "Rooms"
    },
    {
      url: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
      title: "Attached Bath",
      category: "Washrooms"
    },
    {
      url: "https://images.unsplash.com/photo-1604709177595-ee9c25061d47?auto=format&fit=crop&w=800&q=80",
      title: "Bathroom",
      category: "Washrooms"
    },
    {
      url: "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=800&q=80",
      title: "Exterior",
      category: "Exterior"
    }
  ],
  testimonials: [
    { name: "Ali Khan", review: "Clean rooms and peaceful environment near FAST. Great environment for studies!" },
    { name: "Ahmed Raza", review: "The food is hygienic and the wifi is super fast. Highly recommended for students in Islamabad." },
    { name: "Bilal", review: "Very cooperative management and secure place. Best hostel out here."}
  ],
  universities: [
    { name: "FAST-NUCES", distance: "2 mins" },
    { name: "Bahria University", distance: "10 mins" },
    { name: "NUML", distance: "12 mins" },
    { name: "IIUI", distance: "15 mins" },
    { name: "IQRA University", distance: "5 mins" },
    { name: "TMUC", distance: "8 mins" }
  ],
  faq: [
    { question: "Is WiFi available?", answer: "Yes, we provide high-speed WiFi 24/7 for all students." },
    { question: "Are rooms furnished?", answer: "Yes, all rooms are fully furnished with beds, mattresses, and cupboards." },
    { question: "Is parking available?", answer: "Yes, secure parking is available for bikes and cars." },
    { question: "What is the location?", answer: "We are located at I-11/2 Street No 21, House No 57, near Metro Islamabad Store, close to major universities." }
  ],
  rules: [
    "No smoking inside the premises.",
    "Maintain cleanliness in rooms and common areas.",
    "Follow hostel timing rules strictly.",
    "No loud music after 10 PM.",
    "Any damage to property will be fined."
  ],
  // Royal Blue Boys Hostel Islamabad Location
  mapIframe: "https://maps.google.com/maps?q=Royal%20Blue%20Boys%20Hostel%20Islamabad&t=&z=16&ie=UTF8&iwloc=&output=embed"
};
