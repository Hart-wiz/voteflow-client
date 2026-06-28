import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Bell } from "lucide-react";

const notifications = [
  { id: 1, title: "New vote on Miss Universe Nigeria", desc: "Anonymous user voted for Amaka Eze · +$1.50", time: "2 min ago", read: false, type: "vote" },
  { id: 2, title: "Payout Processed",                 desc: "Your withdrawal of $2,000.00 has been credited.", time: "1 hr ago", read: false, type: "payment" },
  { id: 3, title: "Poll Ending Soon",                  desc: "Regional Start-up Pitch Deck Competition ends in 2 hours.", time: "3 hrs ago", read: false, type: "warning" },
  { id: 4, title: "New vote on Global Music Awards",   desc: "User #33401 voted · +$0.15", time: "5 hrs ago", read: true, type: "vote" },
  { id: 5, title: "VoteFlow Update",                   desc: "New: Bulk vote scheduling is now available for paid polls.", time: "Yesterday", read: true, type: "update" },
  { id: 6, title: "Poll Created Successfully",          desc: "Fintech UI Challenge: 2024 Edition is now live.", time: "2 days ago", read: true, type: "info" },
];

const typeColors: Record<string, string> = {
  vote: "bg-[#d3e4fe] text-[#004ac6]",
  payment: "bg-green-100 text-green-700",
  warning: "bg-amber-100 text-amber-700",
  update: "bg-violet-100 text-violet-700",
  info: "bg-slate-100 text-slate-600",
};

export default function NotificationsPage() {
  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Notifications</h1>
          <p className="text-muted-foreground mt-1">
            Stay updated on votes, payouts, and platform news.
          </p>
        </div>
        {unreadCount > 0 && (
          <Button variant="outline" size="sm">
            Mark all as read
          </Button>
        )}
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0">
          <div>
            <CardTitle>All Notifications</CardTitle>
            <CardDescription>
              {unreadCount} unread notification{unreadCount !== 1 ? "s" : ""}
            </CardDescription>
          </div>
          <Bell className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent className="divide-y divide-border p-0">
          {notifications.map((n) => (
            <div
              key={n.id}
              className={`flex items-start gap-4 px-6 py-4 transition-colors hover:bg-muted/30 ${!n.read ? "bg-primary/[0.03]" : ""}`}
            >
              <div className={`mt-0.5 w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-sm ${typeColors[n.type]}`}>
                <Bell className="h-3.5 w-3.5" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <p className={`text-sm font-medium ${!n.read ? "text-foreground" : "text-muted-foreground"}`}>
                    {n.title}
                  </p>
                  {!n.read && <Badge className="text-[10px] h-4 px-1.5">New</Badge>}
                </div>
                <p className="text-xs text-muted-foreground mt-0.5">{n.desc}</p>
              </div>
              <span className="text-xs text-muted-foreground shrink-0 mt-0.5">{n.time}</span>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
