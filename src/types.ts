export interface ServiceItem {
  id: string;
  name: string;
  price: number;
  duration: string;
  description: string;
  highlights: string[];
  image: string;
  badge?: string;
  popular?: boolean;
}

export interface BarberExpert {
  id: string;
  name: string;
  role: string;
  experience: string;
  specialty: string;
  image: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Corte' | 'Barba' | 'Ambiente';
  image: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  rating: number;
  comment: string;
  date: string;
}

export interface BookingFormData {
  serviceId: string;
  barberId: string;
  date: string;
  time: string;
  fullName: string;
  phone: string;
  notes?: string;
}
