"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNotifications } from "@/lib/hooks/useNotifications";
import { Bell, Loader2 } from "lucide-react";

const typeColors: Record<string, string> = {
  vote: "bg-[#d3e4fe] text-[#004ac6]",
  payment: "bg-green-100 text-green-700",
  warning: "bg-amber-100 text-amber-700",
  info: "bg-slate-100 text-slate-600",
};

function relativeTime(value: string) {
  const seconds = Math.max(0, Math.floor((Date.now() - new Date(value).getTime()) / 1000));
  if (seconds < 60) return "Just now";
  if (seconds < 3600) return `${Math.floor(seconds / 60)} min ago`;
  if (seconds < 86400) return `${Math.floor(seconds / 3600)} hr ago`;
  return new Date(value).toLocaleDateString();
}

export default function NotificationsPage() {
  const { data = [], isLoading, error, markRead, markAllRead } = useNotifications();
  const unreadCount = data.filter((notification) => !notification.read).length;

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Notifications</h1>
          <p className="mt-1 text-muted-foreground">Stay updated on votes, payouts, and platform news.</p>
        </div>
        {unreadCount > 0 && (
          <Button variant="outline" size="sm" onClick={() => markAllRead.mutate()} disabled={markAllRead.isPending}>
            {markAllRead.isPending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
            Mark all as read
          </Button>
        )}
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0">
          <div>
            <CardTitle>All Notifications</CardTitle>
            <CardDescription>{unreadCount} unread notification{unreadCount !== 1 ? "s" : ""}</CardDescription>
          </div>
          <Bell className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent className="divide-y divide-border p-0">
          {isLoading ? (
            <div className="flex justify-center py-16"><Loader2 className="h-7 w-7 animate-spin text-muted-foreground" /></div>
          ) : error ? (
            <p className="px-6 py-12 text-center text-destructive">Unable to load notifications. Please try again.</p>
          ) : data.length === 0 ? (
            <p className="px-6 py-12 text-center text-muted-foreground">You&apos;re all caught up.</p>
          ) : data.map((notification) => (
            <button
              key={notification.id}
              type="button"
              onClick={() => !notification.read && markRead.mutate(notification.id)}
              className={`flex w-full items-start gap-4 px-6 py-4 text-left transition-colors hover:bg-muted/30 ${!notification.read ? "bg-primary/[0.03]" : ""}`}
            >
              <div className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm ${typeColors[notification.type] ?? typeColors.info}`}>
                <Bell className="h-3.5 w-3.5" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <p className={`text-sm font-medium ${!notification.read ? "text-foreground" : "text-muted-foreground"}`}>{notification.title}</p>
                  {!notification.read && <Badge className="h-4 px-1.5 text-[10px]">New</Badge>}
                </div>
                <p className="mt-0.5 text-xs text-muted-foreground">{notification.description}</p>
              </div>
              <span className="mt-0.5 shrink-0 text-xs text-muted-foreground">{relativeTime(notification.time)}</span>
            </button>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
