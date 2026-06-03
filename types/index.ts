export interface Center {
  id: string;
  name: string;
  examType: string;
  city: string;
  state: string;
  address: string;
  mapsLink?: string;
  photos: string[];
  parentFacilities: string[];
  washrooms: boolean;
  nearbyFood: string[];
  nearbyHotels: string[];
  safetyRating: number;
  description: string;
  createdAt: number;
  updatedAt: number;
}

export interface City {
  id: string;
  name: string;
  state: string;
  description: string;
  image: string;
  createdAt: number;
}

export interface Review {
  id: string;
  name: string;
  type: 'student' | 'parent';
  exam: string;
  content: string;
  rating: number;
  approved: boolean;
  createdAt: number;
}

export interface Vendor {
  id: string;
  name: string;
  category: 'hotel' | 'restaurant' | 'pg' | 'dharamshala' | 'food';
  contact: string;
  address: string;
  images: string[];
  status: 'active' | 'inactive';
  createdAt: number;
}

export interface Blog {
  id: string;
  title: string;
  slug: string;
  content: string;
  image: string;
  metaTitle: string;
  metaDescription: string;
  createdAt: number;
  updatedAt: number;
}

export interface News {
  id: string;
  title: string;
  description: string;
  image: string;
  publishDate: number;
  category: string;
  createdAt: number;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  order: number;
  createdAt: number;
}

export interface Announcement {
  id: string;
  title: string;
  content: string;
  active: boolean;
  createdAt: number;
}

export interface Contact {
  id: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  resolved: boolean;
  createdAt: number;
}

export interface HomepageData {
  heroTitle: string;
  heroSubtitle: string;
  stats: { value: string; label: string }[];
  features: { icon: string; title: string; description: string }[];
  ctaText: string;
}

export interface User {
  id: string;
  email: string;
  role: 'super_admin' | 'admin' | 'editor';
  createdAt: number;
}