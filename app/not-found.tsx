import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#f8f9ff] flex flex-col items-center justify-center px-4 text-center">
      <div className="mb-6 relative">
        <span className="font-geist text-[120px] md:text-[180px] font-bold leading-none text-transparent bg-clip-text bg-gradient-to-br from-[#004ac6] to-[#712ae2] select-none">
          404
        </span>
      </div>

      <h1 className="font-geist text-[28px] md:text-[36px] font-bold text-[#0b1c30] mb-3">
        Page not found
      </h1>
      <p className="font-inter text-[16px] leading-[1.6] text-[#434655] max-w-md mb-8">
        The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s get you back on track.
      </p>

      <div className="flex flex-col sm:flex-row gap-3">
        <Link
          href="/"
          className="btn-primary font-geist text-[14px] font-medium text-white px-6 py-3 rounded-lg flex items-center gap-2 justify-center"
        >
          <span className="material-symbols-outlined text-[18px]">home</span>
          Go to Home
        </Link>
        <Link
          href="/polls"
          className="btn-secondary font-geist text-[14px] font-medium text-[#0b1c30] px-6 py-3 rounded-lg flex items-center gap-2 justify-center"
        >
          <span className="material-symbols-outlined text-[18px]">explore</span>
          Discover Contests
        </Link>
      </div>
    </div>
  );
}
