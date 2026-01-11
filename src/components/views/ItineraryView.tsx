import { Header } from '@/components/layout/Header';
import { ItineraryBuilder } from '@/components/itinerary/ItineraryBuilder';

export function ItineraryView() {
  return (
    <div className="flex flex-col h-full">
      <Header
        title="AI Itinerary Builder"
        subtitle="Create personalized travel plans using approved events"
      />

      <div className="flex-1 p-6 overflow-hidden">
        <ItineraryBuilder />
      </div>
    </div>
  );
}
