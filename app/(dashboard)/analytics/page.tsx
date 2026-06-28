"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, TrendingUp, Users, Eye } from "lucide-react";

const statCards = [
  { label: "Total Impressions", value: "248,930", change: "+12.5%", icon: Eye, color: "text-blue-600" },
  { label: "Unique Voters",     value: "89,210",  change: "+8.1%",  icon: Users, color: "text-violet-600" },
  { label: "Votes Cast",        value: "142,854", change: "+19.3%", icon: BarChart3, color: "text-primary" },
  { label: "Revenue Generated", value: "$45,290", change: "+22.4%", icon: TrendingUp, color: "text-green-600" },
];

const pollPerformance = [
  { name: "Miss Universe Nigeria",         votes: 89034,  revenue: "$13,505.10", pct: 95 },
  { name: "Global Music Awards",           votes: 230450, revenue: "$4,500.00",  pct: 80 },
  { name: "National Wildlife Photography", votes: 12400,  revenue: "$0.00",      pct: 48 },
  { name: "Cyber Security Challenge",      votes: 1100,   revenue: "$2,200.00",  pct: 22 },
  { name: "Fintech UI Challenge",          votes: 5900,   revenue: "$0.00",      pct: 35 },
];

export default function AnalyticsPage() {
  const max = Math.max(...pollPerformance.map((p) => p.votes));

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Analytics</h1>
        <p className="text-muted-foreground mt-1">Performance overview across all your voting campaigns.</p>
      </div>

      {/* Stat cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {statCards.map((s) => {
          const Icon = s.icon;
          return (
            <Card key={s.label}>
              <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                <CardTitle className="text-sm font-medium">{s.label}</CardTitle>
                <Icon className={`h-4 w-4 ${s.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{s.value}</div>
                <p className="text-xs text-green-600 mt-1 flex items-center gap-1">
                  <TrendingUp className="h-3 w-3" /> {s.change} from last month
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Poll performance table */}
      <Card>
        <CardHeader>
          <CardTitle>Poll Performance</CardTitle>
          <CardDescription>Vote volume and revenue for each active campaign.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-5">
            {pollPerformance.map((poll) => (
              <div key={poll.name} className="space-y-1.5">
                <div className="flex justify-between items-baseline text-sm">
                  <span className="font-medium text-foreground truncate max-w-[60%]">{poll.name}</span>
                  <div className="flex gap-4 shrink-0 text-right">
                    <span className="text-muted-foreground">{poll.votes.toLocaleString()} votes</span>
                    <span className="font-semibold text-foreground w-24">{poll.revenue}</span>
                  </div>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary rounded-full transition-all duration-700"
                    style={{ width: `${(poll.votes / max) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Placeholder charts area */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Votes Over Time</CardTitle>
            <CardDescription>Daily vote volume across all campaigns.</CardDescription>
          </CardHeader>
          <CardContent className="h-52 flex items-end gap-1.5 pb-4">
            {[40, 65, 50, 80, 55, 90, 70, 85, 95, 60, 75, 100, 88, 72].map((h, i) => (
              <div
                key={i}
                className="flex-1 bg-primary/80 rounded-t-sm transition-all hover:bg-primary"
                style={{ height: `${h}%` }}
              />
            ))}
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Revenue by Poll Type</CardTitle>
            <CardDescription>Free vs paid poll revenue breakdown.</CardDescription>
          </CardHeader>
          <CardContent className="h-52 flex items-center justify-center gap-8">
            <div className="relative w-32 h-32">
              <svg viewBox="0 0 36 36" className="w-32 h-32 -rotate-90">
                <circle cx="18" cy="18" r="15.9" fill="none" stroke="#e5eeff" strokeWidth="3.5" />
                <circle
                  cx="18" cy="18" r="15.9"
                  fill="none" stroke="hsl(var(--primary))" strokeWidth="3.5"
                  strokeDasharray="62 38" strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-xl font-bold">62%</span>
                <span className="text-xs text-muted-foreground">Paid</span>
              </div>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-primary inline-block" /> Paid polls</div>
              <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-[#e5eeff] border border-border inline-block" /> Free polls</div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
