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
import { CustomSelect } from "@/components/ui/custom-select";

const banks = [
  { value: "044", label: "Access Bank" },
  { value: "050", label: "Ecobank Nigeria" },
  { value: "070", label: "Fidelity Bank" },
  { value: "011", label: "First Bank of Nigeria" },
  { value: "214", label: "First City Monument Bank" },
  { value: "058", label: "Guaranty Trust Bank (GTB)" },
  { value: "033", label: "United Bank for Africa (UBA)" },
  { value: "032", label: "Union Bank of Nigeria" },
  { value: "057", label: "Zenith Bank" },
];

export function WithdrawModal({ availableBalance }: { availableBalance: number }) {
  const [open, setOpen] = useState(false);
  const [amount, setAmount] = useState("");
  const [bankCode, setBankCode] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  
  const withdrawMutation = useWithdraw();

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
      toast.error("Failed to process withdrawal. Check your bank details and try again.");
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
          <span className="text-xl font-bold text-foreground">{formatNaira(availableBalance)}</span>
        </div>

        <div className="grid gap-4 py-2">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="amount">Amount (NGN)</Label>
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
            <CustomSelect
              id="bank"
              value={bankCode}
              onValueChange={setBankCode}
              options={banks}
              placeholder="Choose a bank..."
            />
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

function formatNaira(amount: number) {
  return new Intl.NumberFormat("en-NG", { style: "currency", currency: "NGN" }).format(amount);
}
