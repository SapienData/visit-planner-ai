import { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { EventCard } from '@/components/events/EventCard';
import { EventFilters } from '@/components/events/EventFilters';
import { mockEvents, TourismEvent, EventStatus, EventSource } from '@/lib/mockData';
import { useToast } from '@/hooks/use-toast';

export function EventsView() {
  const [events, setEvents] = useState<TourismEvent[]>(mockEvents);
  const [selectedStatus, setSelectedStatus] = useState<EventStatus | 'all'>('all');
  const [selectedSource, setSelectedSource] = useState<EventSource | 'all'>('all');
  const [selectedCategory, setSelectedCategory] = useState<string | 'all'>('all');
  const [isRefreshing, setIsRefreshing] = useState(false);
  const { toast } = useToast();

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
      toast({
        title: 'Scan Complete',
        description: '214 sources scanned. 3 new events found.',
      });
    }, 2000);
  };

  const filteredEvents = events.filter((event) => {
    if (selectedStatus !== 'all' && event.status !== selectedStatus) return false;
    if (selectedSource !== 'all' && event.source !== selectedSource) return false;
    if (selectedCategory !== 'all' && event.category !== selectedCategory) return false;
    return true;
  });

  return (
    <div className="flex flex-col h-full">
      <Header
        title="Events Pipeline"
        subtitle={`${filteredEvents.length} events matching filters`}
        onRefresh={handleRefresh}
        isRefreshing={isRefreshing}
      />

      <div className="flex-1 p-6 overflow-auto">
        <EventFilters
          selectedStatus={selectedStatus}
          selectedSource={selectedSource}
          selectedCategory={selectedCategory}
          onStatusChange={setSelectedStatus}
          onSourceChange={setSelectedSource}
          onCategoryChange={setSelectedCategory}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mt-6">
          {filteredEvents.map((event, index) => (
            <div key={event.id} style={{ animationDelay: `${index * 50}ms` }}>
              <EventCard event={event} />
            </div>
          ))}
        </div>

        {filteredEvents.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No events match your filters</p>
          </div>
        )}
      </div>
    </div>
  );
}
