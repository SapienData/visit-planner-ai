import { TourismEvent, sourceIcons } from '@/lib/mockData';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import { MapPin, Calendar, ExternalLink, Check, X, Edit2 } from 'lucide-react';

interface EventCardProps {
  event: TourismEvent;
  showActions?: boolean;
  onApprove?: (id: string) => void;
  onReject?: (id: string) => void;
  onEdit?: (event: TourismEvent) => void;
}

const statusStyles = {
  pending: 'bg-warning/10 text-warning border-warning/20',
  approved: 'bg-success/10 text-success border-success/20',
  rejected: 'bg-destructive/10 text-destructive border-destructive/20',
};

const confidenceColor = (confidence: number) => {
  if (confidence >= 0.9) return 'text-success';
  if (confidence >= 0.75) return 'text-warning';
  return 'text-destructive';
};

export function EventCard({ event, showActions = false, onApprove, onReject, onEdit }: EventCardProps) {
  return (
    <div className="bg-card rounded-xl border overflow-hidden transition-all duration-200 hover:shadow-md animate-fade-in group">
      {/* Image */}
      {event.imageUrl && (
        <div className="relative h-40 overflow-hidden">
          <img
            src={event.imageUrl}
            alt={event.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute top-3 left-3 flex gap-2">
            <Badge variant="secondary" className="backdrop-blur-sm bg-background/80">
              {sourceIcons[event.source]} {event.source}
            </Badge>
          </div>
          <div className="absolute top-3 right-3">
            <Badge variant="outline" className={cn('backdrop-blur-sm bg-background/80', statusStyles[event.status])}>
              {event.status}
            </Badge>
          </div>
        </div>
      )}

      {/* Content */}
      <div className="p-4">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-semibold text-foreground line-clamp-2">{event.title}</h3>
          <span className={cn('text-xs font-medium', confidenceColor(event.confidence))}>
            {Math.round(event.confidence * 100)}%
          </span>
        </div>

        <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{event.description}</p>

        <div className="space-y-1.5 text-sm text-muted-foreground mb-3">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>{format(new Date(event.date), 'MMM d, yyyy')}</span>
            {event.endDate && <span>- {format(new Date(event.endDate), 'MMM d')}</span>}
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span className="truncate">{event.location}</span>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {event.tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>

        {/* Source info */}
        <div className="flex items-center justify-between pt-3 border-t border-border">
          <span className="text-xs text-muted-foreground truncate max-w-[150px]">{event.sourceName}</span>
          <a
            href={event.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-primary hover:underline flex items-center gap-1"
          >
            View source <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        {/* Action buttons */}
        {showActions && event.status === 'pending' && (
          <div className="flex gap-2 mt-4 pt-3 border-t border-border">
            <Button
              size="sm"
              variant="outline"
              className="flex-1 gap-1.5 border-success/30 text-success hover:bg-success hover:text-success-foreground"
              onClick={() => onApprove?.(event.id)}
            >
              <Check className="w-4 h-4" /> Approve
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="flex-1 gap-1.5 border-destructive/30 text-destructive hover:bg-destructive hover:text-destructive-foreground"
              onClick={() => onReject?.(event.id)}
            >
              <X className="w-4 h-4" /> Reject
            </Button>
            <Button size="sm" variant="ghost" className="gap-1.5" onClick={() => onEdit?.(event)}>
              <Edit2 className="w-4 h-4" />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
