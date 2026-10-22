"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useMyPolls } from "@/lib/hooks/usePolls";
import { useWallet } from "@/lib/hooks/useWallet";
import { Activity, BarChart3, Eye, Loader2, TrendingUp, Users } from "lucide-react";

const money = (amount: number) => new Intl.NumberFormat("en-NG", { style: "currency", currency: "NGN" }).format(amount || 0);

export default function AnalyticsPage() {
  const pollsQuery = useMyPolls();
  const walletQuery = useWallet();
  const polls = pollsQuery.data?.results ?? [];
  const totalVotes = polls.reduce((sum, poll) => sum + poll.votesCount, 0);
  const activePolls = polls.filter((poll) => ["active", "ending_soon", "new"].includes(poll.status)).length;
  const paidCount = polls.filter((poll) => poll.isPaid).length;
  const rankedPolls = [...polls].sort((a, b) => b.votesCount - a.votesCount);
  const maxVotes = Math.max(1, ...rankedPolls.map((poll) => poll.votesCount));
  const isLoading = pollsQuery.isLoading || walletQuery.isLoading;

  const stats = [
    { label: "Your Polls", value: isLoading ? "—" : polls.length.toLocaleString(), icon: Eye, color: "text-blue-600" },
    { label: "Active Polls", value: isLoading ? "—" : activePolls.toLocaleString(), icon: Users, color: "text-violet-600" },
    { label: "Votes Cast", value: isLoading ? "—" : totalVotes.toLocaleString(), icon: BarChart3, color: "text-primary" },
    { label: "Lifetime Earnings", value: isLoading ? "—" : money(walletQuery.data?.lifetimeEarnings ?? 0), icon: TrendingUp, color: "text-green-600" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Analytics</h1>
        <p className="mt-1 text-muted-foreground">Performance overview across your voting campaigns.</p>
      </div>
      {(pollsQuery.error || walletQuery.error) && <p className="text-sm text-destructive">Unable to load all analytics data.</p>}

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return <Card key={stat.label}><CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2"><CardTitle className="text-sm font-medium">{stat.label}</CardTitle><Icon className={`h-4 w-4 ${stat.color}`} /></CardHeader><CardContent><div className="text-2xl font-bold">{stat.value}</div></CardContent></Card>;
        })}
      </div>

      <Card>
        <CardHeader><CardTitle>Poll Performance</CardTitle><CardDescription>Vote volume for your campaigns.</CardDescription></CardHeader>
        <CardContent>
          {isLoading ? <div className="flex justify-center py-12"><Loader2 className="h-7 w-7 animate-spin" /></div> : rankedPolls.length ? (
            <div className="space-y-5">
              {rankedPolls.map((poll) => (
                <div key={poll.id} className="space-y-1.5">
                  <div className="flex flex-col gap-2 text-sm sm:flex-row sm:items-baseline sm:justify-between">
                    <span className="w-full truncate font-medium sm:max-w-[60%]">{poll.title}</span>
                    <div className="flex shrink-0 items-center gap-4 sm:text-right"><span className="text-muted-foreground">{poll.votesCount.toLocaleString()} votes</span><span className="w-24 font-semibold">{poll.isPaid ? `${money(Number(poll.pricePerVote || 0))}/vote` : "Free"}</span></div>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-muted"><div className="h-full rounded-full bg-primary transition-all" style={{ width: `${(poll.votesCount / maxVotes) * 100}%` }} /></div>
                </div>
              ))}
            </div>
          ) : <p className="py-10 text-center text-muted-foreground">No poll data available yet.</p>}
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-2">
        <Card><CardHeader><CardTitle>Poll Types</CardTitle><CardDescription>Free and paid campaigns in your account.</CardDescription></CardHeader><CardContent className="flex items-center justify-around py-8"><div className="text-center"><div className="text-3xl font-bold">{polls.length - paidCount}</div><div className="text-sm text-muted-foreground">Free</div></div><Activity className="h-8 w-8 text-muted-foreground" /><div className="text-center"><div className="text-3xl font-bold">{paidCount}</div><div className="text-sm text-muted-foreground">Paid</div></div></CardContent></Card>
        <Card><CardHeader><CardTitle>Voting totals</CardTitle><CardDescription>Votes recorded across your polls.</CardDescription></CardHeader><CardContent className="py-8 text-center"><div className="text-4xl font-bold">{isLoading ? "—" : totalVotes.toLocaleString()}</div><p className="mt-2 text-sm text-muted-foreground">Based on current poll tallies</p></CardContent></Card>
      </div>
    </div>
  );
}
