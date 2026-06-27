import Link from "next/link";
import { Clock, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface PollCardProps {
  id: string;
  title: string;
  creator: string;
  voteType: "free" | "paid";
  isLive: boolean;
  timeLeft: string;
  totalVotes: number;
}

export function PollCard({ id, title, creator, voteType, isLive, timeLeft, totalVotes }: PollCardProps) {
  return (
    <Card className="flex flex-col h-full overflow-hidden hover:shadow-lg transition-all duration-300 border-border/50 group">
      <CardHeader className="p-0">
        <div className="h-32 bg-gradient-to-br from-primary/20 to-accent/20 relative">
          <div className="absolute top-4 left-4 flex gap-2">
            {isLive && (
              <Badge variant="default" className="bg-success text-success-foreground hover:bg-success/90">
                <span className="flex h-2 w-2 rounded-full bg-white animate-pulse mr-1.5" />
                Live
              </Badge>
            )}
            <Badge variant="outline" className="bg-background/80 backdrop-blur-sm">
              {voteType === "paid" ? "Paid Votes" : "Free Votes"}
            </Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-1 p-5">
        <h3 className="font-bold text-xl mb-1 line-clamp-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground mb-4">by {creator}</p>
        
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <Clock className="h-4 w-4" />
            <span>{timeLeft} left</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Users className="h-4 w-4" />
            <span>{totalVotes.toLocaleString()} votes</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-5 pt-0">
        <Link href={`/polls/${id}`} className="w-full">
          <Button className="w-full group-hover:bg-primary/90">
            View Poll
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
