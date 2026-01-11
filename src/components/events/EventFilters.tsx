import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { categories, EventStatus, EventSource } from '@/lib/mockData';

interface EventFiltersProps {
  selectedStatus: EventStatus | 'all';
  selectedSource: EventSource | 'all';
  selectedCategory: string | 'all';
  onStatusChange: (status: EventStatus | 'all') => void;
  onSourceChange: (source: EventSource | 'all') => void;
  onCategoryChange: (category: string | 'all') => void;
}

const statuses: (EventStatus | 'all')[] = ['all', 'pending', 'approved', 'rejected'];
const sources: (EventSource | 'all')[] = ['all', 'website', 'facebook', 'instagram', 'twitter'];

export function EventFilters({
  selectedStatus,
  selectedSource,
  selectedCategory,
  onStatusChange,
  onSourceChange,
  onCategoryChange,
}: EventFiltersProps) {
  return (
    <div className="bg-card rounded-xl border p-4 space-y-4 animate-fade-in">
      {/* Status filter */}
      <div>
        <p className="text-sm font-medium text-foreground mb-2">Status</p>
        <div className="flex flex-wrap gap-2">
          {statuses.map((status) => (
            <Button
              key={status}
              size="sm"
              variant={selectedStatus === status ? 'default' : 'outline'}
              onClick={() => onStatusChange(status)}
              className="capitalize"
            >
              {status}
            </Button>
          ))}
        </div>
      </div>

      {/* Source filter */}
      <div>
        <p className="text-sm font-medium text-foreground mb-2">Source</p>
        <div className="flex flex-wrap gap-2">
          {sources.map((source) => (
            <Button
              key={source}
              size="sm"
              variant={selectedSource === source ? 'default' : 'outline'}
              onClick={() => onSourceChange(source)}
              className="capitalize"
            >
              {source}
            </Button>
          ))}
        </div>
      </div>

      {/* Category filter */}
      <div>
        <p className="text-sm font-medium text-foreground mb-2">Category</p>
        <div className="flex flex-wrap gap-2">
          <Badge
            variant={selectedCategory === 'all' ? 'default' : 'outline'}
            className={cn('cursor-pointer transition-colors', selectedCategory === 'all' && 'bg-primary')}
            onClick={() => onCategoryChange('all')}
          >
            All
          </Badge>
          {categories.map((category) => (
            <Badge
              key={category}
              variant={selectedCategory === category ? 'default' : 'outline'}
              className={cn('cursor-pointer transition-colors', selectedCategory === category && 'bg-primary')}
              onClick={() => onCategoryChange(category)}
            >
              {category}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
