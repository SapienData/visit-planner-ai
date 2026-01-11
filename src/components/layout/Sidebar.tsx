import { useState } from 'react';
import { cn } from '@/lib/utils';
import {
  LayoutDashboard,
  Calendar,
  CheckCircle,
  Route,
  Settings,
  ChevronLeft,
  ChevronRight,
  Sparkles,
} from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const navItems = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'events', label: 'Events Pipeline', icon: Calendar },
  { id: 'moderation', label: 'Moderation', icon: CheckCircle },
  { id: 'itinerary', label: 'AI Itinerary Builder', icon: Route, highlight: true },
  { id: 'settings', label: 'Settings', icon: Settings },
];

export function Sidebar({ activeTab, onTabChange }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={cn(
        'fixed left-0 top-0 h-screen bg-sidebar border-r border-sidebar-border transition-all duration-300 z-50 flex flex-col',
        collapsed ? 'w-16' : 'w-64'
      )}
    >
      {/* Logo */}
      <div className="h-16 flex items-center justify-between px-4 border-b border-sidebar-border">
        {!collapsed && (
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-semibold text-sidebar-foreground">TURASAI</span>
          </div>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-1.5 rounded-md hover:bg-sidebar-accent transition-colors text-sidebar-foreground"
        >
          {collapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-4 px-2 space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;

          return (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className={cn(
                'w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group relative',
                isActive
                  ? 'bg-sidebar-primary text-sidebar-primary-foreground shadow-glow'
                  : 'text-sidebar-foreground hover:bg-sidebar-accent'
              )}
            >
              <Icon className={cn('w-5 h-5 flex-shrink-0', isActive && 'drop-shadow-sm')} />
              {!collapsed && (
                <>
                  <span className="font-medium text-sm">{item.label}</span>
                  {item.highlight && (
                    <span className="ml-auto px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide bg-accent text-accent-foreground rounded">
                      AI
                    </span>
                  )}
                </>
              )}
              {collapsed && item.highlight && (
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-accent rounded-full" />
              )}
            </button>
          );
        })}
      </nav>

      {/* Footer */}
      {!collapsed && (
        <div className="p-4 border-t border-sidebar-border">
          <div className="p-3 rounded-lg bg-sidebar-accent">
            <p className="text-xs text-sidebar-foreground/80">
              Last scan: <span className="font-medium">5 min ago</span>
            </p>
            <p className="text-xs text-sidebar-foreground/60 mt-1">214 sources monitored</p>
          </div>
        </div>
      )}
    </aside>
  );
}
