import { Header } from '@/components/layout/Header';
import { StatsCard } from '@/components/dashboard/StatsCard';
import { SourcesChart } from '@/components/dashboard/SourcesChart';
import { ActivityChart } from '@/components/dashboard/ActivityChart';
import { RecentEvents } from '@/components/dashboard/RecentEvents';
import { mockStats } from '@/lib/mockData';
import { Calendar, Clock, CheckCircle, XCircle, Globe, Trash2, TrendingUp } from 'lucide-react';
import { useState } from 'react';

export function DashboardView() {
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 2000);
  };

  return (
    <div className="flex flex-col h-full">
      <Header
        title="Dashboard"
        subtitle="Overview of your tourism events pipeline"
        onRefresh={handleRefresh}
        isRefreshing={isRefreshing}
      />

      <div className="flex-1 p-6 overflow-auto">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <StatsCard
            title="Total Events"
            value={mockStats.totalEvents}
            subtitle="Across all sources"
            icon={Calendar}
            trend={{ value: 12, isPositive: true }}
            variant="primary"
          />
          <StatsCard
            title="Pending Review"
            value={mockStats.pendingReview}
            subtitle="Awaiting moderation"
            icon={Clock}
            variant="warning"
          />
          <StatsCard
            title="Approved"
            value={mockStats.approved}
            subtitle="Ready to display"
            icon={CheckCircle}
            variant="success"
          />
          <StatsCard
            title="Expired Removed"
            value={mockStats.expiredRemoved}
            subtitle="This week"
            icon={Trash2}
            variant="default"
          />
        </div>

        {/* Second row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <StatsCard
            title="Sources Scanned"
            value={mockStats.sourcesScanned}
            subtitle="Websites & social profiles"
            icon={Globe}
          />
          <StatsCard
            title="Events This Week"
            value={mockStats.eventsThisWeek}
            subtitle="Newly extracted"
            icon={TrendingUp}
            trend={{ value: 8, isPositive: true }}
          />
          <StatsCard
            title="Rejected"
            value={mockStats.rejected}
            subtitle="Did not meet criteria"
            icon={XCircle}
            variant="destructive"
          />
        </div>

        {/* Charts & Lists */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <ActivityChart />
          </div>
          <SourcesChart />
        </div>

        <div className="mt-6">
          <RecentEvents />
        </div>
      </div>
    </div>
  );
}
