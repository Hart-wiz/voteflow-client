"use client";

import { TopNav } from "@/components/layout/top-nav";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, Crown, Share2, Trophy } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Mock data
const MOCK_RESULTS = {
  id: "p-2",
  title: "Miss Universe Nigeria - Final Selection",
  totalVotes: 89034,
  isLive: true,
  contestants: [
    { id: "c-1", name: "Amaka Eze", votes: 24500, rank: 1 },
    { id: "c-2", name: "Fatima Bello", votes: 21200, rank: 2 },
    { id: "c-3", name: "Chioma Okeke", votes: 18500, rank: 3 },
    { id: "c-4", name: "Aisha Yusuf", votes: 12434, rank: 4 },
    { id: "c-5", name: "Bisi Adeyemi", votes: 8900, rank: 5 },
    { id: "c-6", name: "Nneka Nwosu", votes: 3500, rank: 6 },
  ]
};

export default function ResultsPage() {
  const params = useParams();
  const slug = params.slug as string;
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const totalVotes = MOCK_RESULTS.totalVotes;
  const winner = MOCK_RESULTS.contestants[0];

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-background">
      <TopNav />
      <main className="flex-1 container py-8 px-4 md:px-6 max-w-4xl mx-auto">
        
        <Link href={`/polls/${slug}`}>
          <Button variant="ghost" className="mb-6 -ml-4 text-muted-foreground">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Poll
          </Button>
        </Link>

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              {MOCK_RESULTS.isLive && (
                <Badge className="bg-success text-success-foreground hover:bg-success/90">
                  <span className="flex h-2 w-2 rounded-full bg-white animate-pulse mr-1.5" />
                  Live Results
                </Badge>
              )}
            </div>
            <h1 className="text-3xl font-bold tracking-tight">{MOCK_RESULTS.title}</h1>
            <p className="text-muted-foreground mt-1">Total Votes: <span className="font-bold text-foreground">{totalVotes.toLocaleString()}</span></p>
          </div>
          <Button variant="outline">
            <Share2 className="mr-2 h-4 w-4" />
            Share Results
          </Button>
        </div>

        {/* Winner Highlight */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <Card className="bg-gradient-to-br from-primary/10 via-primary/5 to-background border-primary/20 shadow-lg overflow-hidden relative">
            <div className="absolute top-0 right-0 p-6 opacity-10">
              <Trophy className="w-32 h-32" />
            </div>
            <CardContent className="p-8 md:p-10 flex flex-col md:flex-row items-center gap-8 relative z-10">
              <div className="w-32 h-32 rounded-full bg-primary/20 flex items-center justify-center shrink-0 border-4 border-background shadow-xl">
                <Crown className="w-16 h-16 text-primary" />
              </div>
              <div className="text-center md:text-left flex-1">
                <Badge variant="default" className="mb-3 px-3 py-1 text-sm bg-primary text-primary-foreground">Current Leader</Badge>
                <h2 className="text-4xl font-black mb-2">{winner.name}</h2>
                <div className="text-xl text-muted-foreground">
                  <span className="font-bold text-foreground">{winner.votes.toLocaleString()}</span> votes 
                  <span className="opacity-50 mx-2">•</span> 
                  {((winner.votes / totalVotes) * 100).toFixed(1)}%
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Leaderboard */}
        <h3 className="text-xl font-bold mb-6 flex items-center">
          <BarChart2 className="mr-2 h-5 w-5 text-primary" /> 
          Full Leaderboard
        </h3>
        
        <div className="space-y-4">
          {MOCK_RESULTS.contestants.map((contestant, index) => {
            const percentage = (contestant.votes / totalVotes) * 100;
            return (
              <motion.div 
                key={contestant.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="overflow-hidden border-border/50 shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-0">
                    <div className="flex items-center p-4 gap-4">
                      <div className="w-8 font-bold text-muted-foreground text-center">
                        #{contestant.rank}
                      </div>
                      <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center shrink-0">
                        {contestant.name.charAt(0)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-end mb-1.5">
                          <h4 className="font-bold truncate">{contestant.name}</h4>
                          <div className="text-sm font-medium shrink-0">
                            {contestant.votes.toLocaleString()} <span className="text-muted-foreground font-normal">({percentage.toFixed(1)}%)</span>
                          </div>
                        </div>
                        <Progress 
                          value={mounted ? percentage : 0} 
                          className="h-2.5" 
                          indicatorColor={index === 0 ? "bg-primary" : index === 1 ? "bg-accent" : "bg-muted-foreground"}
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

      </main>
    </div>
  );
}

// Simple fix for Progress missing indicatorColor prop if we use shadcn default
// Let's assume we can style it via standard Tailwind. 
// I'll add an icon import
import { BarChart2 } from "lucide-react";
