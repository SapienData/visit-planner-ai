export type EventStatus = 'pending' | 'approved' | 'rejected';
export type EventSource = 'website' | 'facebook' | 'instagram' | 'twitter' | 'manual';

export interface TourismEvent {
  id: string;
  title: string;
  description: string;
  date: string;
  endDate?: string;
  location: string;
  category: string;
  source: EventSource;
  sourceUrl: string;
  sourceName: string;
  imageUrl?: string;
  status: EventStatus;
  extractedAt: string;
  confidence: number;
  tags: string[];
}

export interface DashboardStats {
  totalEvents: number;
  pendingReview: number;
  approved: number;
  rejected: number;
  sourcesScanned: number;
  lastScanTime: string;
  eventsThisWeek: number;
  expiredRemoved: number;
}

export const mockEvents: TourismEvent[] = [
  {
    id: '1',
    title: 'Summer Jazz Festival 2026',
    description: 'Experience world-class jazz performances at our annual outdoor festival featuring local and international artists.',
    date: '2026-07-15',
    endDate: '2026-07-17',
    location: 'Riverside Amphitheatre',
    category: 'Music & Entertainment',
    source: 'facebook',
    sourceUrl: 'https://facebook.com/events/123',
    sourceName: 'City Events Page',
    imageUrl: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800',
    status: 'pending',
    extractedAt: '2026-01-11T08:30:00Z',
    confidence: 0.94,
    tags: ['music', 'outdoor', 'family-friendly'],
  },
  {
    id: '2',
    title: 'Artisan Food Market',
    description: 'Weekly market featuring local producers, fresh produce, artisan cheeses, and street food from around the region.',
    date: '2026-01-18',
    location: 'Old Town Square',
    category: 'Food & Drink',
    source: 'website',
    sourceUrl: 'https://localmarket.com/events',
    sourceName: 'Local Market Co.',
    imageUrl: 'https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=800',
    status: 'approved',
    extractedAt: '2026-01-10T14:20:00Z',
    confidence: 0.98,
    tags: ['food', 'local', 'weekly'],
  },
  {
    id: '3',
    title: 'Guided Heritage Walking Tour',
    description: 'Discover the rich history of our town with expert guides. Tours run daily and cover all major historical landmarks.',
    date: '2026-01-20',
    location: 'Heritage Centre',
    category: 'Tours & Experiences',
    source: 'website',
    sourceUrl: 'https://heritagetours.com',
    sourceName: 'Heritage Tours Ltd',
    imageUrl: 'https://images.unsplash.com/photo-1569880153113-76e33fc52d5f?w=800',
    status: 'approved',
    extractedAt: '2026-01-09T11:00:00Z',
    confidence: 0.96,
    tags: ['history', 'walking', 'guided'],
  },
  {
    id: '4',
    title: 'Wine Tasting Evening',
    description: 'Sample premium wines from local vineyards paired with artisan cheeses. Limited spaces available.',
    date: '2026-02-14',
    location: 'Valley Vineyard Estate',
    category: 'Food & Drink',
    source: 'instagram',
    sourceUrl: 'https://instagram.com/p/abc123',
    sourceName: '@valleyvineyard',
    imageUrl: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800',
    status: 'pending',
    extractedAt: '2026-01-11T06:45:00Z',
    confidence: 0.87,
    tags: ['wine', 'romantic', 'evening'],
  },
  {
    id: '5',
    title: 'Kids Adventure Day',
    description: 'A fun-filled day of outdoor activities for children aged 5-12. Includes nature trails, crafts, and team games.',
    date: '2026-02-22',
    location: 'Adventure Park',
    category: 'Family',
    source: 'facebook',
    sourceUrl: 'https://facebook.com/events/456',
    sourceName: 'Adventure Park Official',
    imageUrl: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800',
    status: 'pending',
    extractedAt: '2026-01-11T09:15:00Z',
    confidence: 0.91,
    tags: ['kids', 'outdoor', 'adventure'],
  },
  {
    id: '6',
    title: 'Sunset Yoga on the Beach',
    description: 'Join us for a relaxing yoga session as the sun sets over the ocean. All levels welcome. Mats provided.',
    date: '2026-01-25',
    location: 'Sandy Bay Beach',
    category: 'Wellness',
    source: 'instagram',
    sourceUrl: 'https://instagram.com/p/xyz789',
    sourceName: '@beachyoga_official',
    imageUrl: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800',
    status: 'approved',
    extractedAt: '2026-01-08T16:30:00Z',
    confidence: 0.93,
    tags: ['wellness', 'beach', 'sunset'],
  },
  {
    id: '7',
    title: 'Vintage Car Rally',
    description: 'Annual showcase of classic automobiles from the 1920s to 1970s. Free entry for spectators.',
    date: '2026-03-08',
    location: 'Showgrounds',
    category: 'Events',
    source: 'website',
    sourceUrl: 'https://vintagecarclub.com/rally2026',
    sourceName: 'Vintage Car Club',
    imageUrl: 'https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=800',
    status: 'rejected',
    extractedAt: '2026-01-07T10:00:00Z',
    confidence: 0.72,
    tags: ['cars', 'vintage', 'free'],
  },
  {
    id: '8',
    title: 'Spring Photography Workshop',
    description: 'Learn landscape photography techniques in stunning natural settings. Professional equipment provided.',
    date: '2026-03-21',
    location: 'National Park Visitor Centre',
    category: 'Workshops',
    source: 'twitter',
    sourceUrl: 'https://twitter.com/photoacademy/status/123',
    sourceName: '@photoacademy',
    imageUrl: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=800',
    status: 'pending',
    extractedAt: '2026-01-11T07:00:00Z',
    confidence: 0.89,
    tags: ['photography', 'workshop', 'nature'],
  },
];

export const mockStats: DashboardStats = {
  totalEvents: 847,
  pendingReview: 23,
  approved: 798,
  rejected: 26,
  sourcesScanned: 214,
  lastScanTime: '2026-01-11T10:30:00Z',
  eventsThisWeek: 156,
  expiredRemoved: 43,
};

export const categories = [
  'Music & Entertainment',
  'Food & Drink',
  'Tours & Experiences',
  'Family',
  'Wellness',
  'Events',
  'Workshops',
  'Sports',
  'Arts & Culture',
  'Nightlife',
];

export const sourceIcons: Record<EventSource, string> = {
  website: '🌐',
  facebook: '📘',
  instagram: '📷',
  twitter: '🐦',
  manual: '✏️',
};
