"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { WithdrawModal } from "@/components/withdraw-modal";
import { useWallet } from "@/lib/hooks/useWallet";
import { CreditCard, History, Loader2, Wallet } from "lucide-react";

const money = (amount: number) => new Intl.NumberFormat("en-NG", { style: "currency", currency: "NGN" }).format(amount || 0);

export default function WalletPage() {
  const { data, isLoading, error } = useWallet();
  const transactions = data?.transactions ?? [];

  if (isLoading) {
    return <div className="flex justify-center py-24"><Loader2 className="h-8 w-8 animate-spin text-muted-foreground" /></div>;
  }

  if (error) {
    return <p className="py-12 text-center text-destructive">Unable to load your wallet. Please try again.</p>;
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Wallet</h1>
        <p className="mt-1 text-muted-foreground">Manage your earnings and withdraw to your bank account.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card className="border-primary bg-primary text-primary-foreground">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-primary-foreground/80">Available Balance</CardTitle>
            <Wallet className="h-4 w-4 text-primary-foreground/80" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{money(data?.availableBalance ?? 0)}</div>
            <WithdrawModal availableBalance={data?.availableBalance ?? 0} />
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Earnings</CardTitle>
            <History className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{money(data?.pendingEarnings ?? 0)}</div>
            <p className="mt-1 text-xs text-muted-foreground">Awaiting settlement</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Lifetime Earnings</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{money(data?.lifetimeEarnings ?? 0)}</div>
            <p className="mt-1 text-xs text-muted-foreground">Across all your polls</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Transaction History</CardTitle>
          <CardDescription>Recent withdrawals and earnings from your polls.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {transactions.length ? transactions.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell className="whitespace-nowrap font-medium">{new Date(item.date).toLocaleDateString()}</TableCell>
                    <TableCell>{item.description}</TableCell>
                    <TableCell><Badge variant="outline" className={item.status === "completed" ? "border-success/20 bg-success/10 text-success" : item.status === "failed" ? "border-destructive/20 bg-destructive/10 text-destructive" : "border-warning/20 bg-warning/10 text-yellow-600"}>{item.status}</Badge></TableCell>
                    <TableCell className={`text-right ${item.amount > 0 ? "text-success" : ""}`}>{money(item.amount)}</TableCell>
                  </TableRow>
                )) : (
                  <TableRow><TableCell colSpan={4} className="h-24 text-center text-muted-foreground">No transactions yet.</TableCell></TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
