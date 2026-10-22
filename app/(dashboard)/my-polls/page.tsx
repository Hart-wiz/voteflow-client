"use client";

import { useMyPolls } from "@/lib/hooks/usePolls";
import { PollCard } from "@/components/poll-card";
import { Button } from "@/components/ui/button";
import { PlusCircle, Loader2 } from "lucide-react";
import Link from "next/link";

export default function MyPollsPage() {
  const { data, isLoading, error } = useMyPolls();
  const polls = data?.results || [];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">My Polls</h1>
          <p className="text-muted-foreground mt-1">Manage all the polls you have created.</p>
        </div>
        <Link href="/create">
          <Button className="w-full sm:w-auto">
            <PlusCircle className="mr-2 h-4 w-4" />
            Create New Poll
          </Button>
        </Link>
      </div>

      {isLoading ? (
        <div className="flex items-center justify-center py-20">
          <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
        </div>
      ) : error ? (
        <p className="py-12 text-center text-destructive">Unable to load your polls. Please try again.</p>
      ) : polls.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 text-center border rounded-xl bg-card border-dashed">
          <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center mb-4">
            <span className="material-symbols-outlined text-muted-foreground text-[24px]">inbox</span>
          </div>
          <h3 className="text-lg font-bold">No polls yet</h3>
          <p className="text-muted-foreground max-w-sm mx-auto mb-6">
            You haven&apos;t created any polls. Click the button below to launch your first poll.
          </p>
          <Link href="/create">
            <Button>
              <PlusCircle className="mr-2 h-4 w-4" />
              Create Poll
            </Button>
          </Link>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {polls.map((poll) => (
            <div key={poll.slug} className="relative group">
              <PollCard poll={poll} />
              {/* Overlay with management actions */}
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity flex gap-2">
                <Button size="sm" variant="secondary" className="h-8 shadow-sm" asChild>
                  <Link href={`/polls/${poll.slug}`}>View</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
