import { useState } from 'react';
import { Sidebar } from '@/components/layout/Sidebar';
import { DashboardView } from '@/components/views/DashboardView';
import { EventsView } from '@/components/views/EventsView';
import { ModerationView } from '@/components/views/ModerationView';
import { PublishedView } from '@/components/views/PublishedView';
import { ItineraryView } from '@/components/views/ItineraryView';
import { SettingsView } from '@/components/views/SettingsView';
import { cn } from '@/lib/utils';

const Index = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const renderView = () => {
    switch (activeTab) {
      case 'dashboard':
        return <DashboardView />;
      case 'events':
        return <EventsView />;
      case 'moderation':
        return <ModerationView />;
      case 'published':
        return <PublishedView />;
      case 'itinerary':
        return <ItineraryView />;
      case 'settings':
        return <SettingsView />;
      default:
        return <DashboardView />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
      <main className={cn('transition-all duration-300 ml-64', sidebarCollapsed && 'ml-16')}>
        {renderView()}
      </main>
    </div>
  );
};

export default Index;
