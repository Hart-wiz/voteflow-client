import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { ShieldCheck, Users, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AdminPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Admin Console</h1>
        <p className="text-muted-foreground mt-1">Platform-wide overview and moderation tools.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Active Polls</CardTitle>
            <ShieldCheck className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,204</div>
            <p className="text-xs text-muted-foreground mt-1">
              +15% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Platform Revenue</CardTitle>
            <ShieldCheck className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$45,231.80</div>
            <p className="text-xs text-muted-foreground mt-1 text-success">
              Platform fee collected
            </p>
          </CardContent>
        </Card>
        <Card className="border-warning/50 bg-warning/5">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-warning">Flagged Polls</CardTitle>
            <AlertTriangle className="h-4 w-4 text-warning" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-warning">12</div>
            <p className="text-xs text-warning/80 mt-1">
              Requires review
            </p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Flagged Content</CardTitle>
          <CardDescription>
            Polls that have received multiple user reports.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Poll Title</TableHead>
                <TableHead>Creator</TableHead>
                <TableHead>Reports</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Free Money Giveaway 2026</TableCell>
                <TableCell>ScamUser99</TableCell>
                <TableCell><Badge variant="destructive">15 Reports</Badge></TableCell>
                <TableCell className="text-right">
                  <Button variant="outline" size="sm" className="mr-2">Review</Button>
                  <Button variant="destructive" size="sm">Suspend</Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Best Crypto Token to Buy</TableCell>
                <TableCell>CryptoKing</TableCell>
                <TableCell><Badge variant="outline" className="text-warning border-warning">5 Reports</Badge></TableCell>
                <TableCell className="text-right">
                  <Button variant="outline" size="sm" className="mr-2">Review</Button>
                  <Button variant="destructive" size="sm">Suspend</Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
