"use client";
import React, { useState } from "react";
import Link from "next/link";
import { toast } from "sonner";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
      toast.success("Reset link sent — check your email.");
    }, 1200);
  };

  return (
    <div className="bg-[#f8f9ff] text-[#0b1c30] min-h-screen flex flex-col font-inter">
      <main className="flex-grow flex items-center justify-center py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#004ac6] rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#712ae2] rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4" />
        </div>

        <div className="w-full max-w-md z-10">
          <div className="bg-white border border-[#c3c6d7] rounded-xl soft-glow-shadow p-10">
            {!sent ? (
              <>
                <div className="mb-8 text-center">
                  <div className="w-14 h-14 rounded-full bg-[#dbe1ff] flex items-center justify-center mx-auto mb-4">
                    <span className="material-symbols-outlined text-[#004ac6] text-[28px]">lock_reset</span>
                  </div>
                  <h1 className="font-geist text-[28px] font-semibold text-[#0b1c30] mb-2">Forgot password?</h1>
                  <p className="font-inter text-[15px] text-[#434655]">
                    No problem. Enter your email and we&apos;ll send you a secure reset link.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-1.5">
                    <label htmlFor="reset-email" className="font-geist text-[14px] font-medium text-[#0b1c30]">
                      Email Address
                    </label>
                    <input
                      id="reset-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@company.com"
                      className="w-full px-4 py-3 border border-[#c3c6d7] rounded-lg font-inter text-[15px] focus:ring-2 focus:ring-[#004ac6]/20 focus:border-[#004ac6] outline-none transition-all"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading || !email}
                    className="w-full py-3 bg-[#004ac6] text-white rounded-lg font-geist text-[14px] font-medium hover:bg-[#2563eb] active:scale-[0.98] transition-all shadow-md disabled:opacity-60"
                  >
                    {loading ? "Sending..." : "Send Reset Link"}
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-4">
                <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                  <span className="material-symbols-outlined text-green-600 text-[28px]" style={{ fontVariationSettings: '"FILL" 1' }}>mark_email_read</span>
                </div>
                <h2 className="font-geist text-[24px] font-semibold text-[#0b1c30] mb-2">Check your email</h2>
                <p className="font-inter text-[15px] text-[#434655] mb-6">
                  We&apos;ve sent a password reset link to <strong>{email}</strong>. It expires in 15 minutes.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="font-geist text-[14px] text-[#004ac6] hover:underline"
                >
                  Try a different email
                </button>
              </div>
            )}

            <div className="mt-8 pt-6 border-t border-[#c3c6d7] text-center">
              <Link href="/login" className="font-geist text-[14px] text-[#434655] hover:text-[#004ac6] transition-colors inline-flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px]">arrow_back</span>
                Back to Sign In
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
