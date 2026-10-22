"use client";

import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCurrentUser } from "@/lib/hooks/useCurrentUser";
import { useAuthStore } from "@/lib/stores/auth";
import { AdminDashboard, OrganizerDashboard, VoterDashboard } from "@/components/dashboard/role-dashboards";

export default function DashboardPage() {
  const currentUser = useCurrentUser();
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  if (!isAuthenticated || currentUser.isLoading) {
    return <div className="flex min-h-64 items-center justify-center"><Loader2 className="h-7 w-7 animate-spin text-muted-foreground" /></div>;
  }

  if (currentUser.error || !currentUser.data) {
    return (
      <div className="mx-auto max-w-lg py-16 text-center">
        <h1 className="text-xl font-semibold">Dashboard unavailable</h1>
        <p className="mt-2 text-sm text-muted-foreground">We could not load your account role and dashboard data.</p>
        <Button className="mt-5" variant="outline" onClick={() => void currentUser.refetch()}>Try again</Button>
      </div>
    );
  }

  const user = currentUser.data;
  if (user.role === "admin") return <AdminDashboard user={user} />;
  if (user.role === "creator") return <OrganizerDashboard user={user} />;
  return <VoterDashboard user={user} />;
}
