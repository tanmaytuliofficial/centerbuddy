export interface Exam {
  id: string;
  name: string;
  date: string;
  time: string;
  primaryCenter: string;
  backupCenter: string;
  city: string;
  admitCardAvailable: boolean;
}

export interface FoodPlace {
  id: string;
  name: string;
  type: 'veg' | 'nonveg' | 'both';
  distance: string;
  rating: number;
  cuisines: string[];
  priceRange: 'budget' | 'moderate' | 'premium';
  image: string;
}

export const exams: Exam[] = [
  {
    id: 'exam-001',
    name: 'JEE Main 2026',
    date: '2026-04-15',
    time: '09:00 AM - 12:00 PM',
    primaryCenter: 'ctr-001',
    backupCenter: 'ctr-003',
    city: 'Delhi NCR',
    admitCardAvailable: true,
  },
  {
    id: 'exam-002',
    name: 'NEET 2026',
    date: '2026-05-05',
    time: '02:00 PM - 05:00 PM',
    primaryCenter: 'ctr-002',
    backupCenter: 'ctr-004',
    city: 'Kota',
    admitCardAvailable: true,
  },
  {
    id: 'exam-003',
    name: 'CUET UG 2026',
    date: '2026-06-20',
    time: '09:00 AM - 06:00 PM',
    primaryCenter: 'ctr-016',
    backupCenter: 'ctr-017',
    city: 'Delhi NCR',
    admitCardAvailable: false,
  },
  {
    id: 'exam-004',
    name: 'UPSC CSE Prelims 2026',
    date: '2026-06-28',
    time: '09:30 AM - 11:30 AM',
    primaryCenter: 'ctr-017',
    backupCenter: 'ctr-016',
    city: 'Delhi NCR',
    admitCardAvailable: true,
  },
  {
    id: 'exam-005',
    name: 'SSC CGL 2026',
    date: '2026-07-12',
    time: '10:00 AM - 12:00 PM',
    primaryCenter: 'ctr-018',
    backupCenter: 'ctr-009',
    city: 'Mumbai',
    admitCardAvailable: false,
  },
];

export const foodPlaces: FoodPlace[] = [
  {
    id: 'food-001',
    name: 'Madhuram South Indian',
    type: 'veg',
    distance: '0.3 km',
    rating: 4.5,
    cuisines: ['South Indian', 'Breakfast', 'Dosa'],
    priceRange: 'budget',
    image: 'https://picsum.photos/seed/dosa/800/600',
  },
  {
    id: 'food-002',
    name: 'Punjabi Dhaba Express',
    type: 'veg',
    distance: '0.5 km',
    rating: 4.2,
    cuisines: ['Punjabi', 'North Indian', 'Dal'],
    priceRange: 'budget',
    image: 'https://picsum.photos/seed/punjabi/800/600',
  },
  {
    id: 'food-003',
    name: 'Biryani Blues',
    type: 'nonveg',
    distance: '0.7 km',
    rating: 4.7,
    cuisines: ['Biryani', 'Mughlai', 'Tandoor'],
    priceRange: 'moderate',
    image: 'https://picsum.photos/seed/biryani/800/600',
  },
  {
    id: 'food-004',
    name: 'Fresh Juice Corner',
    type: 'both',
    distance: '0.2 km',
    rating: 4.3,
    cuisines: ['Juices', 'Smoothies', 'Snacks'],
    priceRange: 'budget',
    image: 'https://picsum.photos/seed/juice/800/600',
  },
  {
    id: 'food-005',
    name: 'The Royal Kitchen',
    type: 'both',
    distance: '1.0 km',
    rating: 4.6,
    cuisines: ['Multi-cuisine', 'Chinese', 'Continental'],
    priceRange: 'premium',
    image: 'https://picsum.photos/seed/royal/800/600',
  },
];