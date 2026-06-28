"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import { Bell, CreditCard, Shield, User } from "lucide-react";

export default function SettingsPage() {
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("john@voteflow.io");
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      toast.success("Settings saved successfully.");
    }, 1000);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground mt-1">Manage your account, notifications, and security preferences.</p>
      </div>

      <Tabs defaultValue="profile">
        <TabsList className="mb-6 flex flex-wrap h-auto w-full justify-start gap-1 p-1">
          <TabsTrigger value="profile" className="gap-2"><User className="h-4 w-4" />Profile</TabsTrigger>
          <TabsTrigger value="notifications" className="gap-2"><Bell className="h-4 w-4" />Notifications</TabsTrigger>
          <TabsTrigger value="billing" className="gap-2"><CreditCard className="h-4 w-4" />Billing</TabsTrigger>
          <TabsTrigger value="security" className="gap-2"><Shield className="h-4 w-4" />Security</TabsTrigger>
        </TabsList>

        {/* Profile */}
        <TabsContent value="profile">
          <Card>
            <CardHeader>
              <CardTitle>Profile Information</CardTitle>
              <CardDescription>Update your name, email, and public profile details.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 max-w-lg">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <div className="h-16 w-16 rounded-full bg-primary/15 flex items-center justify-center font-bold text-primary text-xl shrink-0">
                  JD
                </div>
                <div>
                  <Button variant="outline" size="sm">Change Avatar</Button>
                  <p className="text-xs text-muted-foreground mt-1">JPG, PNG or GIF. Max 2MB.</p>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="full-name">Full Name</Label>
                <Input id="full-name" value={name} onChange={(e) => setName(e.target.value)} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email-addr">Email Address</Label>
                <Input id="email-addr" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="bio">Bio (Optional)</Label>
                <Input id="bio" placeholder="Tell voters about yourself or your organization..." />
              </div>
              <Button onClick={handleSave} disabled={isSaving}>
                {isSaving ? "Saving..." : "Save Changes"}
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Notifications */}
        <TabsContent value="notifications">
          <Card>
            <CardHeader>
              <CardTitle>Notification Preferences</CardTitle>
              <CardDescription>Choose what events you want to be notified about.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-5 max-w-lg">
              {[
                { label: "New vote on your poll", desc: "Get notified each time someone votes." },
                { label: "Poll ending soon",       desc: "24-hour reminder before your poll closes." },
                { label: "Payout processed",       desc: "Confirmation when funds hit your wallet." },
                { label: "New platform updates",   desc: "Product news and feature announcements." },
              ].map((item) => (
                <div key={item.label} className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-medium">{item.label}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{item.desc}</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" defaultChecked className="sr-only peer" />
                    <div className="w-10 h-5 bg-muted rounded-full peer peer-checked:bg-primary transition-colors" />
                    <div className="absolute left-0.5 top-0.5 w-4 h-4 bg-white rounded-full shadow transition-transform peer-checked:translate-x-5" />
                  </label>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Billing */}
        <TabsContent value="billing">
          <Card>
            <CardHeader>
              <CardTitle>Billing & Payout</CardTitle>
              <CardDescription>Manage your payout method and withdrawal settings.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 max-w-lg">
              <div className="p-4 border border-border rounded-lg flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-muted/30">
                <CreditCard className="h-8 w-8 text-primary shrink-0" />
                <div>
                  <p className="font-medium text-sm">Bank Account ****1234</p>
                  <p className="text-xs text-muted-foreground">Default payout destination · GTB</p>
                </div>
                <Button variant="outline" size="sm" className="ml-auto">Change</Button>
              </div>
              <div className="space-y-2">
                <Label htmlFor="min-withdrawal">Minimum Withdrawal ($)</Label>
                <Input id="min-withdrawal" type="number" defaultValue="100" />
                <p className="text-xs text-muted-foreground">Withdrawals below this amount are held until the threshold is reached.</p>
              </div>
              <Button onClick={() => toast.success("Billing settings saved.")}>Save</Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Security */}
        <TabsContent value="security">
          <Card>
            <CardHeader>
              <CardTitle>Security</CardTitle>
              <CardDescription>Keep your account safe with a strong password and 2FA.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 max-w-lg">
              <div className="space-y-3">
                <h3 className="text-sm font-semibold">Change Password</h3>
                <div className="space-y-2">
                  <Label htmlFor="current-pass">Current Password</Label>
                  <Input id="current-pass" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="new-pass">New Password</Label>
                  <Input id="new-pass" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirm-pass">Confirm New Password</Label>
                  <Input id="confirm-pass" type="password" />
                </div>
                <Button onClick={() => toast.success("Password updated.")}>Update Password</Button>
              </div>
              <div className="pt-4 border-t border-border">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold">Two-Factor Authentication</p>
                    <p className="text-xs text-muted-foreground mt-0.5">Adds an extra layer of security to your account.</p>
                  </div>
                  <Button variant="outline" size="sm">Enable 2FA</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
