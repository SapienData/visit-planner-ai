import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const data = [
  { name: 'Websites', value: 124, color: 'hsl(185, 65%, 35%)' },
  { name: 'Facebook', value: 56, color: 'hsl(220, 70%, 50%)' },
  { name: 'Instagram', value: 28, color: 'hsl(340, 75%, 55%)' },
  { name: 'Twitter', value: 6, color: 'hsl(200, 80%, 55%)' },
];

export function SourcesChart() {
  return (
    <div className="bg-card rounded-xl border p-5 animate-fade-in">
      <h3 className="font-semibold text-foreground mb-4">Sources by Type</h3>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              paddingAngle={4}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: 'hsl(var(--card))',
                border: '1px solid hsl(var(--border))',
                borderRadius: '0.5rem',
              }}
            />
            <Legend
              verticalAlign="bottom"
              height={36}
              formatter={(value) => <span className="text-sm text-foreground">{value}</span>}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
