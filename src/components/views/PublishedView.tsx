import { useState } from 'react';
import { mockEvents } from '@/lib/mockData';
import { format } from 'date-fns';
import { Search, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export function PublishedView() {
  const [publishedEvents] = useState(
    mockEvents.filter(event => event.status === 'approved')
  );
  const [townFilter, setTownFilter] = useState('all');
  const [categoryFilter, setCategoryFilter] = useState('all');

  // Get unique locations and categories
  const locations = [...new Set(publishedEvents.map(e => e.location.split(',')[0].trim()))];
  const categories = [...new Set(publishedEvents.map(e => e.category))];

  // Filter events
  const filteredEvents = publishedEvents.filter(event => {
    const matchesTown = townFilter === 'all' || event.location.includes(townFilter);
    const matchesCategory = categoryFilter === 'all' || event.category === categoryFilter;
    return matchesTown && matchesCategory;
  });

  // Featured categories for hero section
  const featuredCategories = [
    {
      title: 'Boyne Valley Festivals',
      image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800',
      size: 'large'
    },
    {
      title: 'Boyne Valley Culture',
      image: 'https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?w=800',
      size: 'small'
    },
    {
      title: 'Unique to the Boyne Valley',
      image: 'https://images.unsplash.com/photo-1527281400683-1aae777175f8?w=800',
      size: 'small'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header Bar */}
      <div className="bg-[#1a3a5c] text-white">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-2xl font-bold tracking-tight">Discover Boyne Valley</span>
          </div>
          <Button 
            variant="ghost" 
            size="sm" 
            className="text-white hover:bg-white/10 gap-2"
            asChild
          >
            <a href="https://www.discoverboynevalley.ie/whats-on" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4" />
              View Live Site
            </a>
          </Button>
        </div>
      </div>

      {/* Page Title */}
      <div className="bg-[#f5f5f5] border-b">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <h1 className="text-3xl font-bold text-[#1a3a5c]">What's On</h1>
        </div>
      </div>

      {/* Featured Section */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Large Featured Image */}
          <div className="lg:col-span-2 relative rounded-lg overflow-hidden h-[320px] group cursor-pointer">
            <img 
              src={featuredCategories[0].image}
              alt={featuredCategories[0].title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6">
              <span className="bg-white/95 text-[#1a3a5c] px-4 py-2 font-semibold text-lg rounded shadow-lg">
                {featuredCategories[0].title}
              </span>
            </div>
          </div>
          
          {/* Stacked Smaller Images */}
          <div className="flex flex-col gap-4">
            {featuredCategories.slice(1).map((cat, idx) => (
              <div key={idx} className="relative rounded-lg overflow-hidden h-[152px] group cursor-pointer">
                <img 
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="bg-white/95 text-[#1a3a5c] px-3 py-1.5 font-semibold text-sm rounded shadow-lg">
                    {cat.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="max-w-7xl mx-auto px-6 pb-8">
        <div className="bg-[#f5f5f5] rounded-lg p-4 flex flex-wrap items-center gap-4">
          <div className="flex-1 min-w-[200px]">
            <label className="text-sm font-medium text-[#1a3a5c] mb-1 block">Town</label>
            <Select value={townFilter} onValueChange={setTownFilter}>
              <SelectTrigger className="bg-white border-gray-300">
                <SelectValue placeholder="All Towns" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Towns</SelectItem>
                {locations.map(loc => (
                  <SelectItem key={loc} value={loc}>{loc}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div className="flex-1 min-w-[200px]">
            <label className="text-sm font-medium text-[#1a3a5c] mb-1 block">Category</label>
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger className="bg-white border-gray-300">
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {categories.map(cat => (
                  <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div className="flex-1 min-w-[150px]">
            <label className="text-sm font-medium text-[#1a3a5c] mb-1 block">Date From</label>
            <Input type="date" className="bg-white border-gray-300" />
          </div>
          
          <div className="flex-1 min-w-[150px]">
            <label className="text-sm font-medium text-[#1a3a5c] mb-1 block">Date To</label>
            <Input type="date" className="bg-white border-gray-300" />
          </div>
          
          <div className="pt-6">
            <Button className="bg-[#8cc63f] hover:bg-[#7ab82f] text-white font-semibold px-8">
              <Search className="w-4 h-4 mr-2" />
              Search
            </Button>
          </div>
        </div>
      </div>

      {/* Events Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event) => (
            <div 
              key={event.id} 
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group cursor-pointer"
            >
              {/* Event Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={event.imageUrl}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              
              {/* Event Content */}
              <div className="p-4">
                {/* Date */}
                <p className="text-sm text-gray-600 mb-2">
                  {format(new Date(event.date), 'MMM d yyyy')}
                  {event.endDate && ` - ${format(new Date(event.endDate), 'MMM d yyyy')}`}
                </p>
                
                {/* Title */}
                <h3 className="text-lg font-bold text-[#1a3a5c] hover:text-[#2a5a8c] transition-colors line-clamp-2">
                  {event.title}
                </h3>
                
                {/* Location */}
                <p className="text-sm text-gray-500 mt-1">{event.location}</p>
              </div>
            </div>
          ))}
        </div>

        {filteredEvents.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">No events found matching your criteria.</p>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="bg-[#1a3a5c] text-white py-6">
        <div className="max-w-7xl mx-auto px-6 text-center text-sm opacity-80">
          Preview of content published to discoverboynevalley.ie
        </div>
      </div>
    </div>
  );
}
