"use client";

import { useState } from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { POLL_CATEGORIES } from "@/lib/constants";
import { PollCard } from "@/components/poll-card";
import { usePolls } from "@/lib/hooks/usePolls";
import type { PollStatus } from "@/lib/types";

// NOTE: metadata can't be exported from a client component.
// For SEO, this page should ideally be a Server Component with a
// client-side filter wrapper. For now we export as a client
// component and add metadata via the parent layout.

type StatusFilter = "All" | "Active" | "Ending";

function getStatusFilter(filter: StatusFilter): PollStatus[] | null {
  if (filter === "Active") return ["active", "new"];
  if (filter === "Ending") return ["ending_soon"];
  return null;
}

export default function DiscoverPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [selectedStatus, setSelectedStatus] = useState<StatusFilter>("All");

  const statusFilterMap: Record<StatusFilter, PollStatus | 'all' | undefined> = {
    All: "all",
    Active: "active",
    Ending: "ending_soon",
  };

  const { data, isLoading, error } = usePolls({
    search: searchQuery || undefined,
    category: selectedCategory === "All Categories" ? undefined : selectedCategory,
    status: statusFilterMap[selectedStatus] === "all" ? undefined : statusFilterMap[selectedStatus],
  });

  const polls = data?.results || [];
  const totalCount = data?.count || 0;

  return (
    <div className="bg-[#f8f9ff] min-h-screen">
      <div className="max-w-[1280px] mx-auto px-4 md:px-12 py-10">
        {/* Page Header */}
        <header className="mb-12">
          <h1 className="font-geist text-[42px] md:text-[52px] leading-[1.1] tracking-[-0.02em] font-bold text-[#0b1c30] mb-3">
            Explore &amp; Vote
          </h1>
          <p className="font-inter text-[18px] leading-[1.6] text-[#434655] max-w-2xl">
            Participate in verified, high-stakes contests from around the globe.
            Your voice shapes the future of technology, art, and leadership.
          </p>
        </header>

        {/* Search & Filter Bar */}
        <section
          aria-label="Search and filter"
          className="bg-[#eff4ff] p-6 rounded-xl mb-10 border border-[#c3c6d7]"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end">
            {/* Search */}
            <div className="md:col-span-5 space-y-1">
              <label
                htmlFor="search-contests"
                className="font-geist text-[12px] font-semibold text-[#737686]"
              >
                Search Contests
              </label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#737686] text-[20px]">
                  search
                </span>
                <input
                  id="search-contests"
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by name or organizer..."
                  className="w-full pl-10 pr-4 py-2.5 bg-white border border-[#c3c6d7] rounded-lg focus:ring-2 focus:ring-[#004ac6]/20 focus:border-[#004ac6] outline-none transition-all font-inter text-[15px] text-[#0b1c30]"
                />
              </div>
            </div>

            {/* Category */}
            <div className="md:col-span-3 space-y-1">
              <label
                htmlFor="category-filter"
                className="font-geist text-[12px] font-semibold text-[#737686]"
              >
                Category
              </label>
              <div className="relative">
                <select
                  id="category-filter"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-2.5 bg-white border border-[#c3c6d7] rounded-lg focus:ring-2 focus:ring-[#004ac6]/20 focus:border-[#004ac6] outline-none appearance-none font-inter text-[15px] text-[#0b1c30] cursor-pointer"
                >
                  {POLL_CATEGORIES.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
                <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-[#737686] pointer-events-none text-[18px]">
                  expand_more
                </span>
              </div>
            </div>

            {/* Status Toggle */}
            <div className="md:col-span-3 space-y-1">
              <span className="font-geist text-[12px] font-semibold text-[#737686]">
                Status
              </span>
              <div className="flex bg-[#dce9ff] p-1 rounded-lg" role="group" aria-label="Status filter">
                {(["All", "Active", "Ending"] as StatusFilter[]).map((s) => (
                  <button
                    key={s}
                    onClick={() => setSelectedStatus(s)}
                    aria-pressed={selectedStatus === s}
                    className={`flex-1 px-2 py-1.5 rounded-md transition-colors font-geist text-[13px] font-medium ${
                      selectedStatus === s
                        ? "bg-white shadow-sm text-[#004ac6]"
                        : "text-[#434655] hover:text-[#004ac6]"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Clear Filters */}
            <div className="md:col-span-1 flex items-end">
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All Categories");
                  setSelectedStatus("All");
                }}
                className="w-full h-[42px] flex items-center justify-center bg-[#2563eb] text-white hover:bg-[#004ac6] rounded-lg transition-all"
                aria-label="Clear filters"
              >
                <span className="material-symbols-outlined text-[20px]">filter_alt_off</span>
              </button>
            </div>
          </div>
        </section>

        {/* Results count */}
        <div className="flex items-center justify-between mb-6">
          <p className="font-inter text-[14px] text-[#737686]">
            Showing <span className="font-semibold text-[#0b1c30]">{polls.length}</span> of{" "}
            {totalCount} contests
          </p>
        </div>

        {/* Contest Grid */}
        {isLoading ? (
          <div className="flex items-center justify-center py-24">
            <span className="material-symbols-outlined text-[48px] text-[#004ac6] animate-spin">refresh</span>
          </div>
        ) : error ? (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <span className="material-symbols-outlined text-[64px] text-[#ba1a1a] mb-4">error</span>
            <h3 className="font-geist text-[20px] font-semibold text-[#0b1c30] mb-2">Error loading polls</h3>
            <p className="font-inter text-[15px] text-[#737686] max-w-sm">Please try again later.</p>
          </div>
        ) : polls.length > 0 ? (
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {polls.map((poll) => (
              <PollCard key={poll.slug} poll={poll} />
            ))}
          </section>
        ) : (
          /* Empty State */
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <span className="material-symbols-outlined text-[64px] text-[#c3c6d7] mb-4">
              search_off
            </span>
            <h3 className="font-geist text-[20px] font-semibold text-[#0b1c30] mb-2">
              No contests found
            </h3>
            <p className="font-inter text-[15px] text-[#737686] max-w-sm mb-6">
              Try adjusting your search or filters to find what you&apos;re
              looking for.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All Categories");
                setSelectedStatus("All");
              }}
              className="px-6 py-2.5 bg-[#004ac6] text-white rounded-lg font-geist text-[14px] font-medium hover:bg-[#2563eb] transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Pagination placeholder */}
        {polls.length > 0 && (
          <nav
            aria-label="Pagination"
            className="mt-16 flex flex-col md:flex-row items-center justify-between gap-6 border-t border-[#c3c6d7] pt-10"
          >
            <p className="font-inter text-[14px] text-[#737686]">
              Page <span className="font-semibold text-[#0b1c30]">1</span> of 1
            </p>
            <div className="flex items-center gap-1">
              <button
                className="p-2 rounded-lg hover:bg-[#e5eeff] transition-colors disabled:opacity-30"
                disabled
                aria-label="Previous page"
              >
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#004ac6] text-white font-geist text-[14px] font-medium">
                1
              </button>
              <button
                className="p-2 rounded-lg hover:bg-[#e5eeff] transition-colors disabled:opacity-30"
                disabled
                aria-label="Next page"
              >
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
          </nav>
        )}
      </div>
    </div>
  );
}
