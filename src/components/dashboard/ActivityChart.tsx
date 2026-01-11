import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { day: 'Mon', extracted: 45, approved: 38 },
  { day: 'Tue', extracted: 52, approved: 42 },
  { day: 'Wed', extracted: 38, approved: 35 },
  { day: 'Thu', extracted: 65, approved: 55 },
  { day: 'Fri', extracted: 48, approved: 44 },
  { day: 'Sat', extracted: 28, approved: 25 },
  { day: 'Sun', extracted: 22, approved: 18 },
];

export function ActivityChart() {
  return (
    <div className="bg-card rounded-xl border p-5 animate-fade-in">
      <h3 className="font-semibold text-foreground mb-4">Weekly Activity</h3>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="extractedGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(185, 65%, 35%)" stopOpacity={0.3} />
                <stop offset="95%" stopColor="hsl(185, 65%, 35%)" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="approvedGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(152, 65%, 40%)" stopOpacity={0.3} />
                <stop offset="95%" stopColor="hsl(152, 65%, 40%)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis dataKey="day" stroke="hsl(var(--muted-foreground))" fontSize={12} />
            <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
            <Tooltip
              contentStyle={{
                backgroundColor: 'hsl(var(--card))',
                border: '1px solid hsl(var(--border))',
                borderRadius: '0.5rem',
              }}
            />
            <Area
              type="monotone"
              dataKey="extracted"
              stroke="hsl(185, 65%, 35%)"
              fillOpacity={1}
              fill="url(#extractedGradient)"
              strokeWidth={2}
              name="Extracted"
            />
            <Area
              type="monotone"
              dataKey="approved"
              stroke="hsl(152, 65%, 40%)"
              fillOpacity={1}
              fill="url(#approvedGradient)"
              strokeWidth={2}
              name="Approved"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
