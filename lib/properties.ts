export interface Property {
  id: number;
  title: string;
  price: string;
  priceValue: number;
  beds: number;
  baths: number;
  sqft: string;
  location: string;
  type: string;
  img: string;
  description: string;
  features: string[];
}

export const properties: Property[] = [
  { 
    id: 1, 
    title: 'Beverly Hills Mansion', 
    price: '$4,500,000', 
    priceValue: 4500000, 
    beds: 5, 
    baths: 6, 
    sqft: '7,200', 
    location: 'Los Angeles', 
    type: 'Houses', 
    img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2053&q=80',
    description: 'An architectural masterpiece located in the prestigious Beverly Hills. This magnificent estate offers unparalleled luxury with panoramic city views, a state-of-the-art home theater, and an infinity pool that blends seamlessly with the horizon.',
    features: ['Infinity Pool', 'Home Theater', 'Smart Home System', 'Wine Cellar', 'Guest House']
  },
  { 
    id: 2, 
    title: 'Malibu Coastal Villa', 
    price: '$8,250,000', 
    priceValue: 8250000, 
    beds: 4, 
    baths: 5, 
    sqft: '5,500', 
    location: 'Los Angeles', 
    type: 'Villas', 
    img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    description: 'Experience the ultimate coastal lifestyle in this stunning Malibu villa. Featuring private beach access, expansive ocean-facing terraces, and floor-to-ceiling glass walls that flood the home with natural California sunlight.',
    features: ['Private Beach Access', 'Ocean Views', 'Outdoor Kitchen', 'Spa/Hot Tub', 'Gated Entry']
  },
  { 
    id: 3, 
    title: 'Modern Alpine Estate', 
    price: '$12,900,000', 
    priceValue: 12900000, 
    beds: 6, 
    baths: 8, 
    sqft: '10,000', 
    location: 'Miami', 
    type: 'Houses', 
    img: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    description: 'A striking modern estate that redefines luxury living. This property boasts vast open-concept living spaces, imported Italian marble, and a secluded private driveway lined with mature oak trees.',
    features: ['Motor Court', 'Indoor Pool', 'Gym', 'Staff Quarters', 'Elevator']
  },
  { 
    id: 4, 
    title: 'Downtown Penthouse', 
    price: '$3,100,000', 
    priceValue: 3100000, 
    beds: 3, 
    baths: 3, 
    sqft: '3,200', 
    location: 'New York', 
    type: 'Apartments', 
    img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    description: 'Hovering above the vibrant city streets, this penthouse offers 360-degree skyline views. The interior is a masterclass in modern minimalism, featuring bespoke oak cabinetry and a massive private rooftop terrace.',
    features: ['Rooftop Terrace', 'Skyline Views', 'Concierge Service', 'Private Elevator', 'Floor-to-ceiling Windows']
  },
  { 
    id: 5, 
    title: 'Lakefront Retreat', 
    price: '$5,400,000', 
    priceValue: 5400000, 
    beds: 5, 
    baths: 4, 
    sqft: '6,100', 
    location: 'Miami', 
    type: 'Houses', 
    img: 'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    description: 'A serene escape nestled directly on the water. This retreat is designed for relaxation, featuring a private deep-water dock, wrap-around verandas, and lush, tropical landscaping that provides complete privacy.',
    features: ['Private Dock', 'Waterfront', 'Outdoor Fireplace', 'Boat House', 'Lush Gardens']
  },
  { 
    id: 6, 
    title: 'Historic Townhouse', 
    price: '$2,850,000', 
    priceValue: 2850000, 
    beds: 4, 
    baths: 3, 
    sqft: '4,000', 
    location: 'New York', 
    type: 'Houses', 
    img: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-4.0.3&auto=format&fit=crop&w=1984&q=80',
    description: 'A meticulously restored historic townhouse that perfectly blends 19th-century charm with 21st-century amenities. Features include original crown molding, working fireplaces, and a charming hidden courtyard garden.',
    features: ['Original Details', 'Hidden Courtyard', 'Working Fireplaces', 'Chef Kitchen', 'Library']
  },
];
