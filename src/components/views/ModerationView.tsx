import { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { EventCard } from '@/components/events/EventCard';
import { mockEvents, TourismEvent } from '@/lib/mockData';
import { useToast } from '@/hooks/use-toast';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CheckCircle, XCircle, Clock } from 'lucide-react';

export function ModerationView() {
  const [events, setEvents] = useState<TourismEvent[]>(mockEvents);
  const { toast } = useToast();

  const pendingEvents = events.filter((e) => e.status === 'pending');
  const recentlyModerated = events.filter((e) => e.status !== 'pending').slice(0, 4);

  const handleApprove = (id: string) => {
    setEvents((prev) =>
      prev.map((e) => (e.id === id ? { ...e, status: 'approved' as const } : e))
    );
    toast({
      title: 'Event Approved',
      description: 'The event is now visible on the tourism website.',
    });
  };

  const handleReject = (id: string) => {
    setEvents((prev) =>
      prev.map((e) => (e.id === id ? { ...e, status: 'rejected' as const } : e))
    );
    toast({
      title: 'Event Rejected',
      description: 'The event has been removed from the queue.',
      variant: 'destructive',
    });
  };

  const handleBulkApprove = () => {
    const highConfidence = pendingEvents.filter((e) => e.confidence >= 0.9);
    setEvents((prev) =>
      prev.map((e) =>
        highConfidence.some((hc) => hc.id === e.id) ? { ...e, status: 'approved' as const } : e
      )
    );
    toast({
      title: 'Bulk Approved',
      description: `${highConfidence.length} high-confidence events approved.`,
    });
  };

  return (
    <div className="flex flex-col h-full">
      <Header title="Moderation Queue" subtitle="Review and approve extracted events" />

      <div className="flex-1 p-6 overflow-auto">
        {/* Quick stats */}
        <div className="flex gap-4 mb-6 animate-fade-in">
          <div className="flex items-center gap-2 px-4 py-2 bg-warning/10 border border-warning/20 rounded-lg">
            <Clock className="w-4 h-4 text-warning" />
            <span className="font-medium text-foreground">{pendingEvents.length}</span>
            <span className="text-muted-foreground">pending</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-success/10 border border-success/20 rounded-lg">
            <CheckCircle className="w-4 h-4 text-success" />
            <span className="font-medium text-foreground">
              {events.filter((e) => e.status === 'approved').length}
            </span>
            <span className="text-muted-foreground">approved today</span>
          </div>
          <Button
            variant="outline"
            onClick={handleBulkApprove}
            disabled={!pendingEvents.some((e) => e.confidence >= 0.9)}
            className="ml-auto"
          >
            Bulk Approve High Confidence ({pendingEvents.filter((e) => e.confidence >= 0.9).length})
          </Button>
        </div>

        {/* Pending Events */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-foreground mb-4">Pending Review</h2>
          {pendingEvents.length === 0 ? (
            <div className="bg-card rounded-xl border p-8 text-center animate-fade-in">
              <CheckCircle className="w-12 h-12 text-success mx-auto mb-4" />
              <p className="text-lg font-medium text-foreground">All caught up!</p>
              <p className="text-muted-foreground">No events pending review</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
              {pendingEvents.map((event, index) => (
                <div key={event.id} style={{ animationDelay: `${index * 50}ms` }}>
                  <EventCard
                    event={event}
                    showActions
                    onApprove={handleApprove}
                    onReject={handleReject}
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Recently Moderated */}
        <div>
          <h2 className="text-lg font-semibold text-foreground mb-4">Recently Moderated</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            {recentlyModerated.map((event, index) => (
              <div key={event.id} style={{ animationDelay: `${index * 50}ms` }}>
                <EventCard event={event} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
