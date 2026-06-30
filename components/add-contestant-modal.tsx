"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAddContestant } from "@/lib/hooks/usePoll";
import { PlusCircle, Loader2 } from "lucide-react";
import { toast } from "sonner";

export function AddContestantModal({ pollSlug }: { pollSlug: string }) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState<File | null>(null);

  const { mutate, isPending } = useAddContestant();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !image) {
      toast.error("Name and Image are required");
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("author", author);
    formData.append("description", description);
    formData.append("image", image);

    mutate({ slug: pollSlug, data: formData }, {
      onSuccess: () => {
        toast.success("Contestant added successfully");
        setOpen(false);
        setName("");
        setAuthor("");
        setDescription("");
        setImage(null);
      },
      onError: (err: any) => {
        toast.error(err.message || "Failed to add contestant");
      }
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="sm" className="gap-2">
          <PlusCircle className="h-4 w-4" />
          Add Nominee
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add New Nominee</DialogTitle>
          <DialogDescription>
            Fill in the details to add a new contestant to this poll.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name <span className="text-destructive">*</span></Label>
            <Input id="name" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="author">Author (Optional)</Label>
            <Input id="author" value={author} onChange={(e) => setAuthor(e.target.value)} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="description">Description (Optional)</Label>
            <Input id="description" value={description} onChange={(e) => setDescription(e.target.value)} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="image">Image <span className="text-destructive">*</span></Label>
            <Input id="image" type="file" accept="image/*" onChange={(e) => setImage(e.target.files?.[0] || null)} required />
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
            <Button type="submit" disabled={isPending}>
              {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Save Nominee
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
