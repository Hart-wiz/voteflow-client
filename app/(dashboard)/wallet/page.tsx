"use client"
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { ArrowDownToLine, CreditCard, History, Wallet } from "lucide-react";
import { WithdrawModal } from "@/components/withdraw-modal";

export default function WalletPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Wallet</h1>
        <p className="text-muted-foreground mt-1">Manage your earnings and withdraw to your bank account.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card className="bg-primary text-primary-foreground border-primary">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-primary-foreground/80">Available Balance</CardTitle>
            <Wallet className="h-4 w-4 text-primary-foreground/80" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">$12,450.00</div>
            <WithdrawModal />
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Earnings</CardTitle>
            <History className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$1,055.10</div>
            <p className="text-xs text-muted-foreground mt-1">
              Clears in 2-3 business days
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Lifetime Earnings</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$45,231.80</div>
            <p className="text-xs text-muted-foreground mt-1">
              Across 12 completed polls
            </p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Transaction History</CardTitle>
          <CardDescription>
            Recent payouts and earnings from your polls.
          </CardDescription>
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
                <TableRow>
                  <TableCell className="font-medium">Jun 14, 2026</TableCell>
                  <TableCell>Votes - Miss Universe Nigeria</TableCell>
                  <TableCell><Badge variant="outline" className="bg-success/10 text-success border-success/20">Completed</Badge></TableCell>
                  <TableCell className="text-right text-success">+$450.00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Jun 12, 2026</TableCell>
                  <TableCell>Withdrawal to Bank ****1234</TableCell>
                  <TableCell><Badge variant="outline" className="bg-success/10 text-success border-success/20">Completed</Badge></TableCell>
                  <TableCell className="text-right">-$2,000.00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Jun 10, 2026</TableCell>
                  <TableCell>Votes - Global Music Awards</TableCell>
                  <TableCell><Badge variant="outline" className="bg-warning/10 text-yellow-600 border-warning/20">Pending</Badge></TableCell>
                  <TableCell className="text-right text-success">+$1,055.10</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Jun 05, 2026</TableCell>
                  <TableCell>Votes - Miss Universe Nigeria</TableCell>
                  <TableCell><Badge variant="outline" className="bg-success/10 text-success border-success/20">Completed</Badge></TableCell>
                  <TableCell className="text-right text-success">+$890.00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Jun 01, 2026</TableCell>
                  <TableCell>Withdrawal to Bank ****1234</TableCell>
                  <TableCell><Badge variant="outline" className="bg-success/10 text-success border-success/20">Completed</Badge></TableCell>
                  <TableCell className="text-right">-$5,400.00</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
