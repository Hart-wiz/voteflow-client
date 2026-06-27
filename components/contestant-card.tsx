import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2 } from "lucide-react";

interface ContestantCardProps {
  id: string;
  name: string;
  imageUrl?: string;
  votes: number;
  rank?: number;
  onVote: (id: string) => void;
  isWinning?: boolean;
}

export function ContestantCard({ id, name, imageUrl, votes, rank, onVote, isWinning }: ContestantCardProps) {
  return (
    <Card className="relative overflow-hidden group hover:border-primary/50 transition-all shadow-sm">
      {rank && (
        <div className="absolute top-2 left-2 z-10">
          <Badge variant={rank === 1 ? "default" : "secondary"} className="h-8 w-8 rounded-full flex items-center justify-center p-0 text-sm font-bold shadow-md">
            #{rank}
          </Badge>
        </div>
      )}
      
      {isWinning && (
        <div className="absolute top-2 right-2 z-10 text-success">
          <CheckCircle2 className="h-6 w-6 bg-white rounded-full" />
        </div>
      )}

      <div className="aspect-square bg-muted relative overflow-hidden">
        {imageUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img 
            src={imageUrl} 
            alt={name} 
            className="w-full h-full object-cover transition-transform group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900">
            <span className="text-4xl font-bold text-slate-300 dark:text-slate-700">{name.charAt(0)}</span>
          </div>
        )}
      </div>
      
      <CardContent className="p-4 flex flex-col gap-3">
        <div className="flex justify-between items-start gap-2">
          <h3 className="font-bold text-lg leading-tight line-clamp-2">{name}</h3>
        </div>
        
        <div className="flex justify-between items-center mt-auto">
          <div className="text-sm font-medium text-muted-foreground">
            <span className="text-foreground font-bold text-base">{votes.toLocaleString()}</span> votes
          </div>
          <Button onClick={() => onVote(id)} size="sm" className="rounded-full shadow-sm hover:shadow-md transition-all">
            Vote Now
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
