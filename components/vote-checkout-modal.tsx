"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Minus, Plus, CreditCard, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { useVote } from "@/lib/hooks/useVote";
import type { Contestant, Poll } from "@/lib/types";

interface VoteCheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  contestant: Contestant;
  poll: Poll;
}

export function VoteCheckoutModal({ isOpen, onClose, contestant, poll }: VoteCheckoutModalProps) {
  const [quantity, setQuantity] = useState(1);
  const [email, setEmail] = useState("");
  const [isInitializingPayment, setIsInitializingPayment] = useState(false);
  
  const voteMutation = useVote();
  const isProcessing = voteMutation.isPending || isInitializingPayment;

  const isFree = !poll.isPaid || poll.pricePerVote === undefined || poll.pricePerVote === 0;
  const total = isFree ? 0 : quantity * (poll.pricePerVote || 0);

  const submitVote = async (payment_ref?: string) => {
    try {
      await voteMutation.mutateAsync({
        slug: poll.slug,
        payload: {
          contestant_id: contestant.id,
          quantity,
          email: email || undefined,
          payment_ref,
        },
      });

      toast.success(`Successfully cast ${quantity} vote(s) for ${contestant.name}!`, {
        description: isFree ? "Thank you for voting." : `Payment of $${total.toFixed(2)} processed.`,
      });
      onClose();
      setQuantity(1);
      setEmail("");
    } catch (err: unknown) {
      toast.error("Failed to cast vote", {
        description: err instanceof Error ? err.message : "An unexpected error occurred.",
      });
    }
  };

  const handleVote = async () => {
    if (!isFree && !email) {
      toast.error("Please enter your email to receive a receipt.");
      return;
    }

    if (isFree) {
      submitVote();
    } else {
      setIsInitializingPayment(true);
      
      // Dynamically load Paystack Inline script if not already loaded
      if (typeof window !== "undefined" && !(window as any).PaystackPop) {
        await new Promise((resolve, reject) => {
          const script = document.createElement("script");
          script.src = "https://js.paystack.co/v1/inline.js";
          script.async = true;
          script.onload = resolve;
          script.onerror = reject;
          document.body.appendChild(script);
        }).catch(() => {
          toast.error("Failed to load payment gateway. Please check your connection.");
          setIsInitializingPayment(false);
        });
      }

      setIsInitializingPayment(false);

      if (typeof window !== "undefined" && (window as any).PaystackPop) {
        const handler = (window as any).PaystackPop.setup({
          key: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY || "",
          email: email || "anonymous@voteflow.com",
          amount: total * 100, // Amount in kobo/cents
          ref: `vote_${new Date().getTime()}`,
          callback: function (response: { reference: string; trans: string }) {
            submitVote(response.reference || response.trans);
          },
          onClose: function () {
            toast.info("Payment cancelled.");
          },
        });
        handler.openIframe();
      }
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Vote for {contestant.name}</DialogTitle>
          <DialogDescription>
            {poll.title}
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
