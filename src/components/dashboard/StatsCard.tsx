import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface StatsCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon: LucideIcon;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'destructive';
}

const variantStyles = {
  default: 'bg-card',
  primary: 'gradient-primary text-primary-foreground',
  success: 'bg-success/10 border-success/20',
  warning: 'bg-warning/10 border-warning/20',
  destructive: 'bg-destructive/10 border-destructive/20',
};

const iconStyles = {
  default: 'bg-muted text-muted-foreground',
  primary: 'bg-white/20 text-primary-foreground',
  success: 'bg-success/20 text-success',
  warning: 'bg-warning/20 text-warning',
  destructive: 'bg-destructive/20 text-destructive',
};

export function StatsCard({ title, value, subtitle, icon: Icon, trend, variant = 'default' }: StatsCardProps) {
  return (
    <div
      className={cn(
        'p-5 rounded-xl border shadow-sm transition-all duration-200 hover:shadow-md animate-fade-in',
        variantStyles[variant]
      )}
    >
      <div className="flex items-start justify-between">
        <div>
          <p className={cn('text-sm font-medium', variant === 'primary' ? 'text-primary-foreground/80' : 'text-muted-foreground')}>
            {title}
          </p>
          <p className={cn('text-3xl font-bold mt-1', variant === 'primary' ? 'text-primary-foreground' : 'text-foreground')}>
            {value}
          </p>
          {subtitle && (
            <p className={cn('text-xs mt-1', variant === 'primary' ? 'text-primary-foreground/70' : 'text-muted-foreground')}>
              {subtitle}
            </p>
          )}
          {trend && (
            <p className={cn('text-xs mt-2 font-medium', trend.isPositive ? 'text-success' : 'text-destructive')}>
              {trend.isPositive ? '↑' : '↓'} {Math.abs(trend.value)}% from last week
            </p>
          )}
        </div>
        <div className={cn('p-2.5 rounded-lg', iconStyles[variant])}>
          <Icon className="w-5 h-5" />
        </div>
      </div>
    </div>
  );
}
