"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle2, ChevronRight, Loader2, Plus, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { POLL_CATEGORIES } from "@/lib/data/polls";

export default function CreatePollPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [pollData, setPollData] = useState<{
    title: string;
    description: string;
    category: string;
    type: string;
    price: string;
    image: File | null;
    endsAt: string;
  }>({
    title: "",
    description: "",
    category: "",
    type: "free",
    price: "",
    image: null,
    endsAt: "",
  });

  const [contestants, setContestants] = useState<{
    id: number;
    name: string;
    description: string;
    image: File | null;
  }[]>([{ id: 1, name: "", description: "", image: null }]);

  const handleAddContestant = () => {
    setContestants([...contestants, { id: Date.now(), name: "", description: "", image: null }]);
  };

  const handleRemoveContestant = (id: number) => {
    setContestants(contestants.filter(c => c.id !== id));
  };

  const handleContestantChange = (id: number, field: string, value: any) => {
    setContestants(contestants.map(c => c.id === id ? { ...c, [field]: value } : c));
  };

  const handlePublish = () => {
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Poll successfully created and is now live!");
      router.push("/dashboard");
    }, 2000);
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Create a New Poll</h1>
        <p className="text-muted-foreground mt-1">Set up your poll, add contestants, and start collecting votes.</p>
      </div>

      <div className="flex items-center justify-between mb-8 overflow-x-auto pb-2 text-xs sm:text-sm min-w-max px-2">
        <div className="flex items-center gap-2 shrink-0">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0 ${step >= 1 ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}`}>1</div>
          <span className={`font-medium ${step >= 1 ? 'text-foreground' : 'text-muted-foreground'}`}>Details</span>
        </div>
        <div className={`h-1 flex-1 mx-4 rounded-full ${step >= 2 ? 'bg-primary' : 'bg-muted'}`}></div>
        <div className="flex items-center gap-2">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${step >= 2 ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}`}>2</div>
          <span className={`font-medium ${step >= 2 ? 'text-foreground' : 'text-muted-foreground'}`}>Contestants</span>
        </div>
        <div className={`h-1 flex-1 mx-4 rounded-full ${step >= 3 ? 'bg-primary' : 'bg-muted'}`}></div>
        <div className="flex items-center gap-2">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${step >= 3 ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}`}>3</div>
          <span className={`font-medium ${step >= 3 ? 'text-foreground' : 'text-muted-foreground'}`}>Review</span>
        </div>
      </div>

      <Card className="border-border/50 shadow-sm">
        {step === 1 && (
          <>
            <CardHeader>
              <CardTitle>Poll Details</CardTitle>
              <CardDescription>Enter the basic information about your poll.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="title">Poll Title</Label>
                <Input 
                  id="title" 
                  placeholder="e.g. Best Tech Startup of 2026" 
                  value={pollData.title}
                  onChange={(e) => setPollData({...pollData, title: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description (Optional)</Label>
                <Input 
                  id="description" 
                  placeholder="Describe what this poll is about..." 
                  value={pollData.description}
                  onChange={(e) => setPollData({...pollData, description: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <div className="relative">
                  <select
                    id="category"
                    value={pollData.category}
                    onChange={(e) => setPollData({...pollData, category: e.target.value})}
                    className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 appearance-none"
                  >
                    <option value="" disabled>Select a category...</option>
                    {POLL_CATEGORIES.map((cat) => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                  <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none text-[18px]">
                    expand_more
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="image">Banner Image</Label>
                <Input 
                  id="image" 
                  type="file" 
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files?.[0] || null;
                    setPollData({...pollData, image: file});
                  }}
                  className="cursor-pointer"
                />
                <p className="text-xs text-muted-foreground">Upload a high-quality cover image for your poll.</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="endsAt">Poll End Date & Time</Label>
                <Input 
                  id="endsAt" 
                  type="datetime-local" 
                  value={pollData.endsAt}
                  onChange={(e) => setPollData({...pollData, endsAt: e.target.value})}
                />
              </div>

              <div className="space-y-3">
                <Label>Voting Type</Label>
                <Tabs value={pollData.type} onValueChange={(v) => setPollData({...pollData, type: v})}>
                  <TabsList className="flex flex-col sm:grid sm:grid-cols-2 w-full h-auto gap-1 p-1">
                    <TabsTrigger value="free">Free Voting</TabsTrigger>
                    <TabsTrigger value="paid">Paid Voting (Monetized)</TabsTrigger>
                  </TabsList>
                  <TabsContent value="paid" className="pt-4 space-y-2">
                    <Label htmlFor="price">Price Per Vote ($)</Label>
                    <Input 
                      id="price" 
                      type="number" 
                      placeholder="1.50" 
                      value={pollData.price}
                      onChange={(e) => setPollData({...pollData, price: e.target.value})}
                    />
                    <p className="text-xs text-muted-foreground">You will receive payouts directly to your wallet minus platform fees.</p>
                  </TabsContent>
                </Tabs>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button onClick={() => setStep(2)} disabled={!pollData.title}>
                Next Step <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </>
        )}

        {step === 2 && (
          <>
            <CardHeader>
              <CardTitle>Add Contestants</CardTitle>
              <CardDescription>Add the participants or options people will vote for.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {contestants.map((c, i) => (
                <div key={c.id} className="relative p-4 border rounded-lg space-y-4 bg-card/50">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold">Contestant {i + 1}</h4>
                    <Button variant="ghost" size="icon" onClick={() => handleRemoveContestant(c.id)} disabled={contestants.length === 1} className="text-destructive h-8 w-8">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label>Name</Label>
                      <Input 
                        placeholder="Contestant Name" 
                        value={c.name}
                        onChange={(e) => handleContestantChange(c.id, 'name', e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Image</Label>
                      <Input 
                        type="file" 
                        accept="image/*"
                        onChange={(e) => {
                          const file = e.target.files?.[0] || null;
                          handleContestantChange(c.id, 'image', file);
                        }}
                        className="cursor-pointer"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Brief Description</Label>
                    <Input 
                      placeholder="e.g. Actor, Model, Tech Lead" 
                      value={c.description}
                      onChange={(e) => handleContestantChange(c.id, 'description', e.target.value)}
                    />
                  </div>
                </div>
              ))}
              <Button variant="outline" onClick={handleAddContestant} className="w-full mt-4 border-dashed border-2">
                <Plus className="mr-2 h-4 w-4" /> Add Another Contestant
              </Button>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" onClick={() => setStep(1)}>Back</Button>
              <Button onClick={() => setStep(3)} disabled={contestants.some(c => !c.name)}>
                Next Step <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </>
        )}

        {step === 3 && (
          <>
            <CardHeader>
              <CardTitle>Review & Publish</CardTitle>
              <CardDescription>Review your settings before launching your poll.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-muted p-6 rounded-lg space-y-4">
                <div>
                  <h3 className="font-bold text-lg">{pollData.title}</h3>
                  {pollData.description && <p className="text-muted-foreground">{pollData.description}</p>}
                  {pollData.image && (
                    <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="material-symbols-outlined text-[16px]">image</span>
                      <span>{pollData.image.name}</span>
                    </div>
                  )}
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Voting Type:</span>
                    <p className="font-medium capitalize">{pollData.type}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Category:</span>
                    <p className="font-medium">{pollData.category || "None selected"}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Ends At:</span>
                    <p className="font-medium">{pollData.endsAt ? new Date(pollData.endsAt).toLocaleString() : "Not set"}</p>
                  </div>
                  {pollData.type === 'paid' && (
                    <div>
                      <span className="text-muted-foreground">Price per Vote:</span>
                      <p className="font-medium">${pollData.price}</p>
                    </div>
                  )}
                  <div>
                    <span className="text-muted-foreground">Contestants:</span>
                    <p className="font-medium">{contestants.length} total</p>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" onClick={() => setStep(2)} disabled={isSubmitting}>Back</Button>
              <Button onClick={handlePublish} disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Publishing...
                  </>
                ) : (
                  <>
                    <CheckCircle2 className="mr-2 h-4 w-4" />
                    Launch Poll
                  </>
                )}
              </Button>
            </CardFooter>
          </>
        )}
      </Card>
    </div>
  );
}
