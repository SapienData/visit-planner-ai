import { mockEvents, sourceIcons } from '@/lib/mockData';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { formatDistanceToNow } from 'date-fns';

const statusStyles = {
  pending: 'bg-warning/10 text-warning border-warning/20',
  approved: 'bg-success/10 text-success border-success/20',
  rejected: 'bg-destructive/10 text-destructive border-destructive/20',
};

export function RecentEvents() {
  const recentEvents = mockEvents.slice(0, 5);

  return (
    <div className="bg-card rounded-xl border p-5 animate-fade-in">
      <h3 className="font-semibold text-foreground mb-4">Recent Extractions</h3>
      <div className="space-y-3">
        {recentEvents.map((event, index) => (
          <div
            key={event.id}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <span className="text-lg" title={event.source}>
              {sourceIcons[event.source]}
            </span>
            <div className="flex-1 min-w-0">
              <p className="font-medium text-sm text-foreground truncate">{event.title}</p>
              <p className="text-xs text-muted-foreground">
                {formatDistanceToNow(new Date(event.extractedAt), { addSuffix: true })}
              </p>
            </div>
            <Badge variant="outline" className={cn('text-xs', statusStyles[event.status])}>
              {event.status}
            </Badge>
          </div>
        ))}
      </div>
    </div>
  );
}
