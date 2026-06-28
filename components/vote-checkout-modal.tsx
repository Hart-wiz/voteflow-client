"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Minus, Plus, CreditCard, Loader2 } from "lucide-react";
import { toast } from "sonner";

interface VoteCheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  contestant: string;
  pollTitle: string;
  pricePerVote?: number;
  isPaid?: boolean;
}

export function VoteCheckoutModal({ isOpen, onClose, contestant, pollTitle, pricePerVote, isPaid }: VoteCheckoutModalProps) {
  const [quantity, setQuantity] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);
  const [email, setEmail] = useState("");

  const isFree = !isPaid || pricePerVote === undefined || pricePerVote === 0;
  const total = isFree ? 0 : quantity * (pricePerVote || 0);

  const handleVote = () => {
    if (!isFree && !email) {
      toast.error("Please enter your email to receive a receipt.");
      return;
    }

    setIsProcessing(true);
    
    // Simulate API call / Paystack flow
    setTimeout(() => {
      setIsProcessing(false);
      toast.success(`Successfully cast ${quantity} vote(s) for ${contestant}!`, {
        description: isFree ? "Thank you for voting." : `Payment of $${total.toFixed(2)} processed.`,
      });
      onClose();
      setQuantity(1);
      setEmail("");
    }, 1500);
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Vote for {contestant}</DialogTitle>
          <DialogDescription>
            {pollTitle}
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-6 py-4">
          <div className="flex flex-col gap-4">
            <Label>Number of Votes</Label>
            <div className="flex items-center gap-4">
              <Button 
                variant="outline" 
                size="icon" 
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                disabled={quantity <= 1 || isProcessing}
              >
                <Minus className="h-4 w-4" />
              </Button>
              <div className="text-2xl font-bold w-12 text-center">{quantity}</div>
              <Button 
                variant="outline" 
                size="icon" 
                onClick={() => setQuantity(quantity + 1)}
                disabled={isProcessing}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {!isFree && (
            <div className="flex flex-col gap-3">
              <Label htmlFor="email">Email address</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="you@example.com" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isProcessing}
              />
            </div>
          )}

          <div className="bg-muted p-4 rounded-lg flex justify-between items-center">
            <span className="font-medium">Total</span>
            <span className="text-xl font-bold">
              {isFree ? "Free" : `$${total.toFixed(2)}`}
            </span>
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={onClose} disabled={isProcessing}>
            Cancel
          </Button>
          <Button onClick={handleVote} disabled={isProcessing} className="w-full sm:w-auto">
            {isProcessing ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : isFree ? (
              "Cast Vote"
            ) : (
              <>
                <CreditCard className="mr-2 h-4 w-4" />
                Pay & Vote
              </>
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
