import Link from "next/link";
import type { Poll } from "@/lib/types";
import { cn } from "@/lib/utils";

interface PollCardProps {
  poll: Poll;
  className?: string;
}

const STATUS_CONFIG = {
  active:       { label: "Active",       classes: "bg-[#004ac6] text-white" },
  ending_soon:  { label: "Ending Soon",  classes: "bg-[#ba1a1a] text-white" },
  new:          { label: "New",          classes: "bg-[#8a4cfc] text-white" },
  closed:       { label: "Closed",       classes: "bg-[#737686] text-white" },
  draft:        { label: "Draft",        classes: "bg-[#434655] text-white" },
} as const;

export function PollCard({ poll, className }: PollCardProps) {
  const status = STATUS_CONFIG[poll.status] ?? STATUS_CONFIG.active;
  const timeIsUrgent = poll.status === "ending_soon";

  return (
    <Link href={`/polls/${poll.slug}`} className={cn("block group", className)}>
      <article className="bg-white rounded-xl overflow-hidden soft-glow-card border border-[#c3c6d7] h-full flex flex-col">
        {/* Image */}
        <div className="relative h-56 overflow-hidden flex-shrink-0">
          <img
            src={poll.image}
            alt={poll.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-4 left-4">
            <span className={cn("text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded", status.classes)}>
              {status.label}
            </span>
          </div>
          {poll.isPaid && (
            <div className="absolute top-4 right-4">
              <span className="bg-[#712ae2] text-white text-[10px] font-bold px-2 py-1 rounded flex items-center gap-1">
                <span className="material-symbols-outlined text-[12px]" style={{ fontVariationSettings: '"FILL" 1' }}>paid</span>
                ${poll.pricePerVote}/vote
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-grow">
          <div className="flex-grow">
            <p className="font-geist text-[11px] font-semibold text-[#737686] uppercase tracking-wider mb-1">
              {poll.category}
            </p>
            <h3 className="font-geist text-[18px] font-semibold leading-[1.3] text-[#0b1c30] mb-1 group-hover:text-[#004ac6] transition-colors">
              {poll.title}
            </h3>
            <p className="font-geist text-[13px] text-[#737686] mb-4">
              by {poll.organizer}
            </p>
            <p className="font-inter text-[14px] leading-[1.5] text-[#434655] line-clamp-2">
              {poll.description}
            </p>
          </div>

          {/* Stats */}
          <div className="mt-4 pt-4 border-t border-[#c3c6d7] flex items-center justify-between">
            <div className="flex flex-col">
              <span className="font-geist text-[11px] font-semibold text-[#737686] uppercase tracking-tight">Votes</span>
              <span className="font-geist text-[20px] font-semibold text-[#004ac6]">{poll.votes}</span>
            </div>
            <div className="flex flex-col text-right">
              <span className="font-geist text-[11px] font-semibold text-[#737686] uppercase tracking-tight">Ends In</span>
              <span className={cn("font-geist text-[20px] font-semibold", timeIsUrgent ? "text-[#ba1a1a]" : "text-[#0b1c30]")}>
                {poll.endsIn}
              </span>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-4">
            <span className="w-full block text-center py-3 border border-[#004ac6] text-[#004ac6] font-geist text-[13px] font-medium rounded-lg group-hover:bg-[#004ac6] group-hover:text-white transition-all">
              View Contest
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
