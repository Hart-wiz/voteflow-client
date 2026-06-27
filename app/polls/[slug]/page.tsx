"use client";

import { useState } from "react";
import { TopNav } from "@/components/layout/top-nav";
import { ContestantCard } from "@/components/contestant-card";
import { VoteCheckoutModal } from "@/components/vote-checkout-modal";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Share2, BarChart2 } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

// Mock data
const MOCK_POLL_DETAIL = {
  id: "p-2",
  title: "Miss Universe Nigeria - Final Selection",
  description: "Vote for your favorite contestant to win the ultimate crown. Paid voting is enabled to support the organization's charity fund.",
  creator: "MUN Organization",
  isLive: true,
  timeLeft: "5 hours",
  totalVotes: 89034,
  pricePerVote: 1.50, // $1.50 per vote
  contestants: [
    { id: "c-1", name: "Amaka Eze", votes: 24500, rank: 1, isWinning: true },
    { id: "c-2", name: "Fatima Bello", votes: 21200, rank: 2 },
    { id: "c-3", name: "Chioma Okeke", votes: 18500, rank: 3 },
    { id: "c-4", name: "Aisha Yusuf", votes: 12434, rank: 4 },
    { id: "c-5", name: "Bisi Adeyemi", votes: 8900, rank: 5 },
    { id: "c-6", name: "Nneka Nwosu", votes: 3500, rank: 6 },
  ]
};

export default function PollDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  
  const [selectedContestant, setSelectedContestant] = useState<string | null>(null);

  const selectedName = MOCK_POLL_DETAIL.contestants.find(c => c.id === selectedContestant)?.name || "";

  return (
    <div className="flex flex-col min-h-screen">
      <TopNav />
      <main className="flex-1 container py-8 px-4 md:px-6">
        
        {/* Poll Header */}
        <div className="bg-card border rounded-2xl p-6 md:p-8 mb-8 shadow-sm">
          <div className="flex flex-col md:flex-row justify-between gap-6">
            <div className="space-y-4 max-w-3xl">
              <div className="flex flex-wrap items-center gap-2">
                {MOCK_POLL_DETAIL.isLive && (
                  <Badge className="bg-success text-success-foreground hover:bg-success/90">
                    <span className="flex h-2 w-2 rounded-full bg-white animate-pulse mr-1.5" />
                    Live
                  </Badge>
                )}
                <Badge variant="outline">
                  {MOCK_POLL_DETAIL.pricePerVote ? "Paid Voting" : "Free Voting"}
                </Badge>
                <span className="text-sm text-muted-foreground ml-2">by {MOCK_POLL_DETAIL.creator}</span>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold">{MOCK_POLL_DETAIL.title}</h1>
              <p className="text-muted-foreground text-lg">{MOCK_POLL_DETAIL.description}</p>
            </div>

            <div className="flex flex-row md:flex-col items-center md:items-end gap-4 shrink-0">
              <div className="flex gap-2">
                <Button variant="outline" size="icon">
                  <Share2 className="h-4 w-4" />
                </Button>
                <Link href={`/results/${slug}`}>
                  <Button variant="secondary">
                    <BarChart2 className="mr-2 h-4 w-4" />
                    Live Results
                  </Button>
                </Link>
              </div>
              
              <div className="bg-muted px-4 py-3 rounded-lg flex items-center gap-3">
                <Clock className="h-5 w-5 text-primary" />
                <div>
                  <div className="text-sm text-muted-foreground font-medium">Time Left</div>
                  <div className="font-bold">{MOCK_POLL_DETAIL.timeLeft}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contestants Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {MOCK_POLL_DETAIL.contestants.map((contestant) => (
            <ContestantCard
              key={contestant.id}
              {...contestant}
              onVote={(id) => setSelectedContestant(id)}
            />
          ))}
        </div>

      </main>

      <VoteCheckoutModal
        isOpen={!!selectedContestant}
        onClose={() => setSelectedContestant(null)}
        contestantName={selectedName}
        pollName={MOCK_POLL_DETAIL.title}
        pricePerVote={MOCK_POLL_DETAIL.pricePerVote}
      />
    </div>
  );
}
