"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navbar() {
  const pathname = usePathname();

  // Helper function to check if the current path matches the link
  const isActive = (path: string) => pathname === path;

  // Base styling for nav links
  const baseLinkClass = "font-geist text-[14px] leading-[1] tracking-[0.01em] transition-all duration-200 py-5 border-b-2";

  // Dynamic styling for active/inactive states
  const getLinkClass = (path: string) => {
    return isActive(path)
      ? `${baseLinkClass} font-bold text-[#004ac6] border-[#004ac6]`
      : `${baseLinkClass} font-medium text-[#434655] border-transparent hover:text-[#004ac6] hover:border-[#004ac6]/50`;
  };

  return (
    <nav className="w-full top-0 sticky bg-[#f8f9ff] z-50 border-b border-[#c3c6d7] shadow-sm transition-all duration-300" id="main-nav">
      <div className="flex justify-between items-center max-w-[1280px] mx-auto px-[16px] md:px-[48px] h-16">
        <div className="flex items-center gap-8">
          <Link href="/" className="font-geist text-[24px] font-bold leading-[1.3] text-[#004ac6] flex items-center gap-2">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>how_to_vote</span>
            VoteFlow
          </Link>
          <div className="hidden md:flex gap-6">
            <Link href="/" className={getLinkClass("/")}>
              Home
            </Link>
            <Link href="/polls" className={getLinkClass("/polls")}>
              Discover Contests
            </Link>
            <Link href="/create" className={getLinkClass("/create")}>
              Create contest
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/login" className="hidden md:block font-geist text-[14px] font-medium leading-[1] tracking-[0.01em] text-[#434655] hover:text-[#004ac6] transition-colors duration-200">
            Log In
          </Link>
          <Link href="/register" className="btn-primary text-[#ffffff] font-geist text-[14px] font-medium leading-[1] tracking-[0.01em] px-4 py-2 rounded-lg cursor-pointer active:opacity-80">
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
}
