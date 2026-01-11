import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Sparkles, Send, Calendar, MapPin, Clock, User, Loader2 } from 'lucide-react';
import { mockEvents } from '@/lib/mockData';
import { format, addDays } from 'date-fns';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

interface ItineraryDay {
  date: string;
  activities: {
    time: string;
    title: string;
    location: string;
    description: string;
    eventId?: string;
  }[];
}

export function ItineraryBuilder() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [itinerary, setItinerary] = useState<ItineraryDay[] | null>(null);
  const [preferences, setPreferences] = useState({
    duration: '3',
    interests: [] as string[],
    travelStyle: 'balanced',
  });

  const interestOptions = ['Food & Wine', 'History & Culture', 'Nature', 'Adventure', 'Family', 'Wellness', 'Nightlife'];
  const travelStyles = ['relaxed', 'balanced', 'packed'];

  const toggleInterest = (interest: string) => {
    setPreferences((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest],
    }));
  };

  const generateMockItinerary = () => {
    const approvedEvents = mockEvents.filter((e) => e.status === 'approved');
    const days: ItineraryDay[] = [];

    for (let i = 0; i < parseInt(preferences.duration); i++) {
      const date = format(addDays(new Date(), i + 1), 'yyyy-MM-dd');
      const activities = [];

      // Morning
      activities.push({
        time: '09:00',
        title: i === 0 ? 'Guided Heritage Walking Tour' : 'Morning Exploration',
        location: i === 0 ? 'Heritage Centre' : 'City Centre',
        description: 'Start your day with a cultural experience',
        eventId: approvedEvents[0]?.id,
      });

      // Lunch
      activities.push({
        time: '12:30',
        title: 'Artisan Food Market',
        location: 'Old Town Square',
        description: 'Enjoy local cuisine and artisan products',
        eventId: approvedEvents[1]?.id,
      });

      // Afternoon
      activities.push({
        time: '15:00',
        title: i === 1 ? 'Sunset Yoga on the Beach' : 'Free Time for Exploration',
        location: i === 1 ? 'Sandy Bay Beach' : 'Various locations',
        description: i === 1 ? 'Relaxing wellness activity' : 'Discover hidden gems at your own pace',
        eventId: i === 1 ? approvedEvents[2]?.id : undefined,
      });

      days.push({ date, activities });
    }

    return days;
  };

  const handleGenerate = async () => {
    if (preferences.interests.length === 0) {
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: 'Please select at least one interest to help me create a personalized itinerary!' },
      ]);
      return;
    }

    setIsLoading(true);
    setMessages((prev) => [
      ...prev,
      {
        role: 'user',
        content: `Create a ${preferences.duration}-day ${preferences.travelStyle} itinerary focused on: ${preferences.interests.join(', ')}`,
      },
    ]);

    // Simulate AI processing
    await new Promise((resolve) => setTimeout(resolve, 1500));

    const generatedItinerary = generateMockItinerary();
    setItinerary(generatedItinerary);

    setMessages((prev) => [
      ...prev,
      {
        role: 'assistant',
        content: `I've created a personalized ${preferences.duration}-day itinerary based on your interests in ${preferences.interests.join(', ')}! The itinerary features our approved local events and experiences. You can see the day-by-day plan on the right.`,
      },
    ]);

    setIsLoading(false);
  };

  const handleChat = async () => {
    if (!input.trim()) return;

    const userMessage = input;
    setInput('');
    setMessages((prev) => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    // Simulate response
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setMessages((prev) => [
      ...prev,
      {
        role: 'assistant',
        content: `Great question! Based on our approved events, I'd recommend ${mockEvents[Math.floor(Math.random() * 3)].title}. This would fit perfectly with your ${preferences.travelStyle} travel style.`,
      },
    ]);

    setIsLoading(false);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-[calc(100vh-8rem)]">
      {/* Left: Chat & Preferences */}
      <div className="flex flex-col bg-card rounded-xl border overflow-hidden animate-fade-in">
        {/* Header */}
        <div className="p-4 border-b border-border gradient-hero">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="font-semibold text-white">AI Itinerary Builder</h2>
              <p className="text-sm text-white/80">Create personalized travel plans</p>
            </div>
          </div>
        </div>

        {/* Preferences */}
        <div className="p-4 border-b border-border space-y-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Days:</span>
              <Input
                type="number"
                value={preferences.duration}
                onChange={(e) => setPreferences((prev) => ({ ...prev, duration: e.target.value }))}
                min={1}
                max={14}
                className="w-16 h-8"
              />
            </div>
            <div className="flex items-center gap-2">
              <User className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Style:</span>
              <div className="flex gap-1">
                {travelStyles.map((style) => (
                  <Badge
                    key={style}
                    variant={preferences.travelStyle === style ? 'default' : 'outline'}
                    className="cursor-pointer capitalize"
                    onClick={() => setPreferences((prev) => ({ ...prev, travelStyle: style }))}
                  >
                    {style}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          <div>
            <p className="text-sm text-muted-foreground mb-2">Interests:</p>
            <div className="flex flex-wrap gap-2">
              {interestOptions.map((interest) => (
                <Badge
                  key={interest}
                  variant={preferences.interests.includes(interest) ? 'default' : 'outline'}
                  className="cursor-pointer"
                  onClick={() => toggleInterest(interest)}
                >
                  {interest}
                </Badge>
              ))}
            </div>
          </div>

          <Button onClick={handleGenerate} disabled={isLoading} className="w-full gap-2">
            <Sparkles className="w-4 h-4" />
            Generate Itinerary
          </Button>
        </div>

        {/* Chat */}
        <div className="flex-1 overflow-auto p-4 space-y-4">
          {messages.length === 0 && (
            <div className="text-center py-8">
              <Sparkles className="w-12 h-12 text-muted-foreground/30 mx-auto mb-4" />
              <p className="text-muted-foreground">
                Select your preferences above and generate an itinerary, or ask me anything about the area!
              </p>
            </div>
          )}
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] p-3 rounded-xl ${
                  msg.role === 'user'
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-foreground'
                }`}
              >
                {msg.content}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-muted p-3 rounded-xl">
                <Loader2 className="w-5 h-5 animate-spin text-muted-foreground" />
              </div>
            </div>
          )}
        </div>

        {/* Input */}
        <div className="p-4 border-t border-border">
          <div className="flex gap-2">
            <Textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about events, recommendations, or modify your itinerary..."
              className="resize-none"
              rows={2}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleChat();
                }
              }}
            />
            <Button onClick={handleChat} size="icon" disabled={isLoading || !input.trim()}>
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Right: Itinerary Display */}
      <div className="bg-card rounded-xl border overflow-auto animate-fade-in">
        <div className="p-4 border-b border-border">
          <h2 className="font-semibold text-foreground">Your Itinerary</h2>
          <p className="text-sm text-muted-foreground">Based on approved local events</p>
        </div>

        {!itinerary ? (
          <div className="flex flex-col items-center justify-center h-[400px] text-center p-8">
            <Calendar className="w-16 h-16 text-muted-foreground/20 mb-4" />
            <p className="text-muted-foreground">
              Generate an itinerary using the preferences on the left
            </p>
          </div>
        ) : (
          <div className="p-4 space-y-6">
            {itinerary.map((day, dayIndex) => (
              <div key={day.date} className="animate-fade-in" style={{ animationDelay: `${dayIndex * 100}ms` }}>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-full gradient-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
                    {dayIndex + 1}
                  </div>
                  <h3 className="font-semibold text-foreground">
                    {format(new Date(day.date), 'EEEE, MMMM d')}
                  </h3>
                </div>

                <div className="space-y-3 ml-4 border-l-2 border-border pl-6">
                  {day.activities.map((activity, actIndex) => (
                    <div
                      key={actIndex}
                      className="relative bg-muted/50 rounded-lg p-3 hover:bg-muted transition-colors"
                    >
                      <div className="absolute -left-[25px] top-4 w-2 h-2 rounded-full bg-primary" />
                      <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
                        <Clock className="w-3 h-3" />
                        {activity.time}
                      </div>
                      <h4 className="font-medium text-foreground">{activity.title}</h4>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                        <MapPin className="w-3 h-3" />
                        {activity.location}
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">{activity.description}</p>
                      {activity.eventId && (
                        <Badge variant="outline" className="mt-2 text-xs">
                          ✓ Approved Event
                        </Badge>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
