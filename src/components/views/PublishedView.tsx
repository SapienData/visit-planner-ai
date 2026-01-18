import { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { EventCard } from '@/components/events/EventCard';
import { mockEvents } from '@/lib/mockData';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Globe, Calendar, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function PublishedView() {
  const [publishedEvents] = useState(
    mockEvents.filter(event => event.status === 'approved')
  );

  const publishedCount = publishedEvents.length;
  const lastPublished = new Date().toLocaleDateString('en-IE', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });

  return (
    <div className="min-h-screen">
      <Header title="Published to meath.ie" />
      
      <div className="p-6">
        {/* Stats Banner */}
        <div className="mb-6 p-4 rounded-xl bg-primary/10 border border-primary/20">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Globe className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">Live on meath.ie</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                <span className="text-sm">{publishedCount} events published</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Calendar className="w-4 h-4" />
                <span className="text-sm">Last sync: {lastPublished}</span>
              </div>
            </div>
            <Button variant="outline" size="sm" className="gap-2" asChild>
              <a href="https://www.meath.ie/" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4" />
                View on meath.ie
              </a>
            </Button>
          </div>
        </div>

        {/* Section Header */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-lg font-semibold">Approved Content</h2>
            <p className="text-sm text-muted-foreground">
              These events are live on the Meath County Council website
            </p>
          </div>
          <Badge variant="secondary" className="bg-green-500/10 text-green-600 border-green-500/20">
            {publishedCount} Live
          </Badge>
        </div>

        {/* Published Events Grid */}
        {publishedEvents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {publishedEvents.map((event) => (
              <div key={event.id} className="relative">
                <div className="absolute -top-2 -right-2 z-10">
                  <Badge className="bg-green-500 text-white shadow-sm">
                    <Globe className="w-3 h-3 mr-1" />
                    Published
                  </Badge>
                </div>
                <EventCard event={event} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-muted/30 rounded-xl border border-border">
            <Globe className="w-12 h-12 mx-auto text-muted-foreground/50 mb-3" />
            <h3 className="font-medium text-lg mb-1">No Published Content</h3>
            <p className="text-sm text-muted-foreground">
              Approve events in the Moderation tab to publish them to meath.ie
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
