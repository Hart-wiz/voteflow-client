import Link from "next/link";

export function Navbar() {
  return (
    <nav className="w-full top-0 sticky bg-[#f8f9ff] z-50 border-b border-[#c3c6d7] shadow-sm transition-all duration-300" id="main-nav">
      <div className="flex justify-between items-center max-w-[1280px] mx-auto px-[16px] md:px-[48px] h-16">
        <div className="flex items-center gap-8">
          <Link href="/" className="font-geist text-[24px] font-bold leading-[1.3] text-[#004ac6] flex items-center gap-2">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>ballot</span>
            VoteFlow
          </Link>
          <div className="hidden md:flex gap-6">
            <Link href="/" className="font-geist text-[14px] font-bold leading-[1] tracking-[0.01em] text-[#004ac6] py-5">
              Home
            </Link>
            <Link href="/polls" className="font-geist text-[14px] font-medium leading-[1] tracking-[0.01em] text-[#434655] hover:text-[#004ac6] transition-colors duration-200 py-5">
              Discover Contests
            </Link>
            <Link href="/create" className="font-geist text-[14px] font-medium leading-[1] tracking-[0.01em] text-[#434655] hover:text-[#004ac6] transition-colors duration-200 py-5">
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
