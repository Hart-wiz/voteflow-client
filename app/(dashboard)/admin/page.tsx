"use client";

import { authApi } from "@/lib/api/auth";
import { useCurrentUser } from "@/lib/hooks/useCurrentUser";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Loader2, ShieldCheck } from "lucide-react";
import { toast } from "sonner";

export default function AdminPage() {
  const currentUser = useCurrentUser();
  const user = currentUser.data;
  const queryClient = useQueryClient();
  const { data = [], isLoading, error } = useQuery({
    queryKey: ["organizer-requests"],
    queryFn: authApi.organizerRequests,
    enabled: user?.role === "admin",
  });
  const refresh = async () => {
    await Promise.all([
      queryClient.invalidateQueries({ queryKey: ["organizer-requests"] }),
      queryClient.invalidateQueries({ queryKey: ["admin-dashboard"] }),
    ]);
  };
  const approve = useMutation({
    mutationFn: authApi.approveOrganizer,
    onSuccess: () => { toast.success("Organizer approved."); void refresh(); },
    onError: (err) => toast.error(err instanceof Error ? err.message : "Unable to approve request."),
  });
  const reject = useMutation({
    mutationFn: authApi.rejectOrganizer,
    onSuccess: () => { toast.success("Organizer request rejected."); void refresh(); },
    onError: (err) => toast.error(err instanceof Error ? err.message : "Unable to reject request."),
  });

  if (currentUser.isLoading || (!user && !currentUser.error)) {
    return <div className="flex justify-center py-20"><Loader2 className="h-7 w-7 animate-spin" /></div>;
  }

  if (currentUser.error || !user) {
    return <p className="py-16 text-center text-muted-foreground">Unable to confirm your administrator account. Refresh and try again.</p>;
  }

  if (user.role !== "admin") {
    return <p className="py-16 text-center text-muted-foreground">Administrator access is required to review organizer requests.</p>;
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Admin Console</h1>
        <p className="mt-1 text-muted-foreground">Review organizer access requests.</p>
      </div>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0">
          <div>
            <CardTitle>Organizer requests</CardTitle>
            <CardDescription>{data.length} pending request{data.length === 1 ? "" : "s"}</CardDescription>
          </div>
          <ShieldCheck className="h-5 w-5 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <div className="flex justify-center py-12"><Loader2 className="h-7 w-7 animate-spin" /></div>
          ) : error ? (
            <p className="py-8 text-center text-destructive">Unable to load organizer requests.</p>
          ) : (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader><TableRow><TableHead>Organization</TableHead><TableHead>Applicant</TableHead><TableHead>Requested</TableHead><TableHead>Status</TableHead><TableHead className="text-right">Actions</TableHead></TableRow></TableHeader>
                <TableBody>
                  {data.length ? data.map((request) => (
                    <TableRow key={request.id}>
                      <TableCell className="font-medium">{request.business_name || "—"}</TableCell>
                      <TableCell><div>{request.name}</div><div className="text-xs text-muted-foreground">{request.email}</div></TableCell>
                      <TableCell>{new Date(request.requested_at).toLocaleDateString()}</TableCell>
                      <TableCell><Badge variant="outline">Pending</Badge></TableCell>
                      <TableCell className="space-x-2 text-right">
                        <Button size="sm" onClick={() => approve.mutate(request.id)} disabled={approve.isPending || reject.isPending}>Approve</Button>
                        <Button size="sm" variant="outline" onClick={() => reject.mutate(request.id)} disabled={approve.isPending || reject.isPending}>Reject</Button>
                      </TableCell>
                    </TableRow>
                  )) : <TableRow><TableCell colSpan={5} className="h-24 text-center text-muted-foreground">No pending organizer requests.</TableCell></TableRow>}
                </TableBody>
              </Table>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
