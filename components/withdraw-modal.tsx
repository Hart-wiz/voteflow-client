"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useWithdraw } from "@/lib/hooks/useWallet";
import { toast } from "sonner";
import { ArrowDownToLine, Loader2 } from "lucide-react";

export function WithdrawModal() {
  const [open, setOpen] = useState(false);
  const [amount, setAmount] = useState("");
  const [bankCode, setBankCode] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  
  const withdrawMutation = useWithdraw();

  // Mock available balance for demo
  const availableBalance = 12450.00;

  const handleQuickAmount = (percentage: number) => {
    setAmount((availableBalance * percentage).toFixed(2));
  };

  const handleWithdraw = () => {
    if (!amount || !bankCode || !accountNumber) {
      toast.error("Please fill in all fields");
      return;
    }

    if (parseFloat(amount) > availableBalance) {
      toast.error("Insufficient funds");
      return;
    }

    if (accountNumber.length !== 10) {
      toast.error("Account number must be 10 digits");
      return;
    }

    withdrawMutation.mutate(
      { 
        amount: parseFloat(amount), 
        bank_code: bankCode, 
        account_number: accountNumber 
      },
      {
        onSuccess: () => {
          toast.success("Withdrawal queued successfully!");
          setOpen(false);
          setAmount("");
          setBankCode("");
          setAccountNumber("");
        },
        onError: () => {
          toast.error("Failed to process withdrawal. Please try again.");
        }
      }
    );
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="secondary" className="w-full mt-4 bg-white text-primary hover:bg-white/90">
          <ArrowDownToLine className="mr-2 h-4 w-4" />
          Withdraw Funds
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-white">
        <DialogHeader>
          <DialogTitle>Withdraw Funds</DialogTitle>
          <DialogDescription>
            Transfer your available earnings directly to your local bank account.
          </DialogDescription>
        </DialogHeader>

        <div className="bg-muted/50 p-4 rounded-lg flex items-center justify-between mb-2 border">
          <span className="text-sm font-medium text-muted-foreground">Available Balance</span>
          <span className="text-xl font-bold text-foreground">${availableBalance.toLocaleString(undefined, {minimumFractionDigits: 2})}</span>
        </div>

        <div className="grid gap-4 py-2">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="amount">Amount ($)</Label>
              <div className="flex items-center gap-1">
                <Button variant="outline" size="sm" className="h-6 px-2 text-[10px]" onClick={() => handleQuickAmount(0.25)}>25%</Button>
                <Button variant="outline" size="sm" className="h-6 px-2 text-[10px]" onClick={() => handleQuickAmount(0.5)}>50%</Button>
                <Button variant="outline" size="sm" className="h-6 px-2 text-[10px]" onClick={() => handleQuickAmount(1)}>Max</Button>
              </div>
            </div>
            <Input
              id="amount"
              type="number"
              placeholder="0.00"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="text-lg font-medium"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="bank">Select Bank</Label>
            <select
              id="bank"
              value={bankCode}
              onChange={(e) => setBankCode(e.target.value)}
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <option value="" disabled>Choose a bank...</option>
              <option value="044">Access Bank</option>
              <option value="050">Ecobank Nigeria</option>
              <option value="070">Fidelity Bank</option>
              <option value="011">First Bank of Nigeria</option>
              <option value="214">First City Monument Bank</option>
              <option value="058">Guaranty Trust Bank (GTB)</option>
              <option value="033">United Bank for Africa (UBA)</option>
              <option value="032">Union Bank of Nigeria</option>
              <option value="057">Zenith Bank</option>
            </select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="account">Account Number</Label>
            <Input
              id="account"
              placeholder="10-digit account number"
              value={accountNumber}
              maxLength={10}
              onChange={(e) => setAccountNumber(e.target.value.replace(/\D/g, ''))}
            />
          </div>
        </div>
        <DialogFooter className="pt-4 border-t">
          <Button variant="outline" onClick={() => setOpen(false)} disabled={withdrawMutation.isPending}>
            Cancel
          </Button>
          <Button onClick={handleWithdraw} disabled={withdrawMutation.isPending || !amount || !bankCode || accountNumber.length !== 10}>
            {withdrawMutation.isPending ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <ArrowDownToLine className="mr-2 h-4 w-4" />
            )}
            Confirm Withdrawal
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
