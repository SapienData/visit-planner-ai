import { Header } from '@/components/layout/Header';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { Globe, Clock, Bell, Shield, Database, Zap } from 'lucide-react';

export function SettingsView() {
  return (
    <div className="flex flex-col h-full">
      <Header title="Settings" subtitle="Configure your event aggregation pipeline" />

      <div className="flex-1 p-6 overflow-auto">
        <div className="max-w-3xl space-y-6">
          {/* Scan Settings */}
          <div className="bg-card rounded-xl border p-6 animate-fade-in">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-primary/10">
                <Globe className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Source Scanning</h3>
                <p className="text-sm text-muted-foreground">Configure how often sources are scanned</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-foreground">Scan Frequency</p>
                  <p className="text-sm text-muted-foreground">How often to check for new events</p>
                </div>
                <select className="px-3 py-2 rounded-lg border bg-background text-foreground">
                  <option>Every 15 minutes</option>
                  <option>Every 30 minutes</option>
                  <option>Every hour</option>
                  <option>Every 6 hours</option>
                </select>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-foreground">Active Sources</p>
                  <p className="text-sm text-muted-foreground">Number of sources being monitored</p>
                </div>
                <Badge variant="secondary" className="text-lg px-4">214</Badge>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-foreground">Auto-remove Expired Events</p>
                  <p className="text-sm text-muted-foreground">Automatically remove past events</p>
                </div>
                <Switch defaultChecked />
              </div>
            </div>
          </div>

          {/* AI Settings */}
          <div className="bg-card rounded-xl border p-6 animate-fade-in" style={{ animationDelay: '100ms' }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-accent/10">
                <Zap className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">AI Configuration</h3>
                <p className="text-sm text-muted-foreground">Configure AI extraction and itinerary settings</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-foreground">Confidence Threshold</p>
                  <p className="text-sm text-muted-foreground">Minimum confidence for auto-suggestions</p>
                </div>
                <Input type="number" defaultValue="85" className="w-20" min={0} max={100} />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-foreground">Auto-approve High Confidence</p>
                  <p className="text-sm text-muted-foreground">Automatically approve events above 95%</p>
                </div>
                <Switch />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-foreground">Smart Categorization</p>
                  <p className="text-sm text-muted-foreground">Use AI to categorize events automatically</p>
                </div>
                <Switch defaultChecked />
              </div>
            </div>
          </div>

          {/* Notifications */}
          <div className="bg-card rounded-xl border p-6 animate-fade-in" style={{ animationDelay: '200ms' }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-warning/10">
                <Bell className="w-5 h-5 text-warning" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Notifications</h3>
                <p className="text-sm text-muted-foreground">Configure alerts and notifications</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-foreground">New Events Alert</p>
                  <p className="text-sm text-muted-foreground">Notify when new events are extracted</p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-foreground">Queue Alert Threshold</p>
                  <p className="text-sm text-muted-foreground">Alert when pending queue exceeds</p>
                </div>
                <Input type="number" defaultValue="50" className="w-20" />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-foreground">Daily Summary Email</p>
                  <p className="text-sm text-muted-foreground">Receive daily activity summary</p>
                </div>
                <Switch defaultChecked />
              </div>
            </div>
          </div>

          {/* Data */}
          <div className="bg-card rounded-xl border p-6 animate-fade-in" style={{ animationDelay: '300ms' }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-success/10">
                <Database className="w-5 h-5 text-success" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Data Management</h3>
                <p className="text-sm text-muted-foreground">Export, backup, and manage your data</p>
              </div>
            </div>

            <div className="flex gap-3">
              <Button variant="outline">Export All Events</Button>
              <Button variant="outline">Export Sources List</Button>
              <Button variant="outline">Backup Configuration</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
