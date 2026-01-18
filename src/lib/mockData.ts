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
    title: 'Trim Castle Medieval Festival 2026',
    description: 'Step back in time at Ireland\'s largest Anglo-Norman castle. Experience jousting, medieval crafts, and historical reenactments at this iconic Meath landmark.',
    date: '2026-07-18',
    endDate: '2026-07-20',
    location: 'Trim Castle, Trim',
    category: 'Events',
    source: 'facebook',
    sourceUrl: 'https://facebook.com/events/trimcastle',
    sourceName: 'Meath Tourism',
    imageUrl: 'https://images.unsplash.com/photo-1533154683836-84ea7a0bc310?w=800',
    status: 'pending',
    extractedAt: '2026-01-11T08:30:00Z',
    confidence: 0.94,
    tags: ['history', 'family-friendly', 'outdoor'],
  },
  {
    id: '2',
    title: 'Navan Farmers Market',
    description: 'Weekly market in the heart of Navan featuring local Meath producers, artisan cheeses, organic vegetables, and traditional Irish baked goods.',
    date: '2026-01-18',
    location: 'Market Square, Navan',
    category: 'Food & Drink',
    source: 'website',
    sourceUrl: 'https://navanmarket.ie/events',
    sourceName: 'Navan Town Council',
    imageUrl: 'https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=800',
    status: 'approved',
    extractedAt: '2026-01-10T14:20:00Z',
    confidence: 0.98,
    tags: ['food', 'local', 'weekly'],
  },
  {
    id: '3',
    title: 'Hill of Tara Guided Heritage Walk',
    description: 'Discover the ancient seat of the High Kings of Ireland with expert guides. Learn about 5,000 years of history at this sacred ceremonial site.',
    date: '2026-01-20',
    location: 'Hill of Tara, Navan',
    category: 'Tours & Experiences',
    source: 'website',
    sourceUrl: 'https://heritageireland.ie/tara',
    sourceName: 'Heritage Ireland',
    imageUrl: 'https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?w=800',
    status: 'approved',
    extractedAt: '2026-01-09T11:00:00Z',
    confidence: 0.96,
    tags: ['history', 'walking', 'guided', 'ancient'],
  },
  {
    id: '4',
    title: 'Slane Whiskey Tasting Experience',
    description: 'Sample award-winning whiskeys at Slane Distillery on the grounds of Slane Castle. Includes guided tour and whiskey-paired Irish cheese selection.',
    date: '2026-02-14',
    location: 'Slane Distillery, Slane',
    category: 'Food & Drink',
    source: 'instagram',
    sourceUrl: 'https://instagram.com/p/slanewhiskey',
    sourceName: '@slanewhiskey',
    imageUrl: 'https://images.unsplash.com/photo-1527281400683-1aae777175f8?w=800',
    status: 'pending',
    extractedAt: '2026-01-11T06:45:00Z',
    confidence: 0.87,
    tags: ['whiskey', 'romantic', 'evening', 'tours'],
  },
  {
    id: '5',
    title: 'Tayto Park Family Adventure Day',
    description: 'A fun-filled day at Ireland\'s only theme park and zoo. Special winter rates for Meath residents. Includes access to all rides and animal exhibits.',
    date: '2026-02-22',
    location: 'Tayto Park, Ashbourne',
    category: 'Family',
    source: 'facebook',
    sourceUrl: 'https://facebook.com/events/taytopark',
    sourceName: 'Tayto Park Official',
    imageUrl: 'https://images.unsplash.com/photo-1513889961551-628c1e5e2ee9?w=800',
    status: 'pending',
    extractedAt: '2026-01-11T09:15:00Z',
    confidence: 0.91,
    tags: ['kids', 'theme-park', 'adventure'],
  },
  {
    id: '6',
    title: 'Boyne Valley Yoga Retreat',
    description: 'Weekend wellness retreat in the peaceful Boyne Valley. Includes yoga sessions, meditation, organic meals, and nature walks along the river.',
    date: '2026-01-25',
    endDate: '2026-01-26',
    location: 'Boyne Valley, Drogheda',
    category: 'Wellness',
    source: 'instagram',
    sourceUrl: 'https://instagram.com/p/boynevalleywellness',
    sourceName: '@boynevalleywellness',
    imageUrl: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800',
    status: 'approved',
    extractedAt: '2026-01-08T16:30:00Z',
    confidence: 0.93,
    tags: ['wellness', 'retreat', 'nature'],
  },
  {
    id: '7',
    title: 'Newgrange Winter Solstice Lottery',
    description: 'Enter the annual lottery for a chance to witness the famous winter solstice sunrise illumination inside the 5,000-year-old Newgrange passage tomb.',
    date: '2026-12-21',
    location: 'Brú na Bóinne, Donore',
    category: 'Events',
    source: 'website',
    sourceUrl: 'https://worldheritageireland.ie/newgrange',
    sourceName: 'World Heritage Ireland',
    imageUrl: 'https://images.unsplash.com/photo-1548777123-e216912df7d8?w=800',
    status: 'approved',
    extractedAt: '2026-01-07T10:00:00Z',
    confidence: 0.99,
    tags: ['heritage', 'unesco', 'unique'],
  },
  {
    id: '8',
    title: 'Kells Manuscript Photography Workshop',
    description: 'Learn photography techniques at the historic town of Kells, home of the famous Book of Kells origins. Capture medieval architecture and Celtic crosses.',
    date: '2026-03-21',
    location: 'Kells Heritage Centre',
    category: 'Workshops',
    source: 'twitter',
    sourceUrl: 'https://twitter.com/meathheritage/status/123',
    sourceName: '@meathheritage',
    imageUrl: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=800',
    status: 'pending',
    extractedAt: '2026-01-11T07:00:00Z',
    confidence: 0.89,
    tags: ['photography', 'workshop', 'heritage'],
  },
  {
    id: '9',
    title: 'Slane Castle Concert Series',
    description: 'World-famous outdoor concert venue announces summer lineup. Previous acts include U2, Oasis, and Foo Fighters at this iconic Meath location.',
    date: '2026-06-15',
    location: 'Slane Castle, Slane',
    category: 'Music & Entertainment',
    source: 'website',
    sourceUrl: 'https://slanecastle.ie/concerts',
    sourceName: 'Slane Castle',
    imageUrl: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800',
    status: 'pending',
    extractedAt: '2026-01-11T10:00:00Z',
    confidence: 0.85,
    tags: ['music', 'outdoor', 'concert'],
  },
  {
    id: '10',
    title: 'Battle of the Boyne Heritage Walk',
    description: 'Guided walk through the historic battlefield where the famous 1690 battle took place. Learn about this pivotal moment in Irish and European history.',
    date: '2026-04-12',
    location: 'Oldbridge Estate, Drogheda',
    category: 'Tours & Experiences',
    source: 'facebook',
    sourceUrl: 'https://facebook.com/battleoftheboyne',
    sourceName: 'Battle of the Boyne Visitor Centre',
    imageUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
    status: 'approved',
    extractedAt: '2026-01-10T08:00:00Z',
    confidence: 0.97,
    tags: ['history', 'walking', 'heritage'],
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
