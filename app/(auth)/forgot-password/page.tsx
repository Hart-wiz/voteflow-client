"use client";
import React, { useState } from "react";
import Link from "next/link";
import { toast } from "sonner";
import { authApi } from "@/lib/api/auth";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [stage, setStage] = useState<"request" | "confirm" | "done">("request");
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || loading) return;
    setLoading(true);
    try {
      if (stage === "request") {
        await authApi.requestPasswordReset({ email });
        setStage("confirm");
        toast.success("If the account exists, a reset code has been sent.");
      } else {
        await authApi.confirmPasswordReset({ email, code, password });
        setStage("done");
        toast.success("Your password has been reset.");
      }
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Unable to reset your password.");
    } finally {
      setLoading(false);
    }
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
            {stage !== "done" ? (
              <>
                <div className="mb-8 text-center">
                  <div className="w-14 h-14 rounded-full bg-[#dbe1ff] flex items-center justify-center mx-auto mb-4">
                    <span className="material-symbols-outlined text-[#004ac6] text-[28px]">lock_reset</span>
                  </div>
                  <h1 className="font-geist text-[28px] font-semibold text-[#0b1c30] mb-2">Forgot password?</h1>
                  <p className="font-inter text-[15px] text-[#434655]">
                    {stage === "request" ? "Enter your email and we’ll send you a one-time reset code." : "Enter the code from your email and choose a new password."}
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
                      disabled={stage === "confirm"}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@company.com"
                      className="w-full px-4 py-3 border border-[#c3c6d7] rounded-lg font-inter text-[15px] focus:ring-2 focus:ring-[#004ac6]/20 focus:border-[#004ac6] outline-none transition-all"
                    />
                  </div>
                  {stage === "confirm" && (
                    <>
                      <div className="space-y-1.5">
                        <label htmlFor="reset-code" className="font-geist text-[14px] font-medium text-[#0b1c30]">Reset code</label>
                        <input id="reset-code" inputMode="numeric" autoComplete="one-time-code" required minLength={6} maxLength={6} value={code} onChange={(e) => setCode(e.target.value.replace(/\D/g, ""))} className="w-full px-4 py-3 border border-[#c3c6d7] rounded-lg font-inter text-[15px] focus:ring-2 focus:ring-[#004ac6]/20 focus:border-[#004ac6] outline-none transition-all" />
                      </div>
                      <div className="space-y-1.5">
                        <label htmlFor="new-password" className="font-geist text-[14px] font-medium text-[#0b1c30]">New password</label>
                        <input id="new-password" type="password" autoComplete="new-password" required minLength={12} value={password} onChange={(e) => setPassword(e.target.value)} className="w-full px-4 py-3 border border-[#c3c6d7] rounded-lg font-inter text-[15px] focus:ring-2 focus:ring-[#004ac6]/20 focus:border-[#004ac6] outline-none transition-all" />
                      </div>
                    </>
                  )}
                  <button
                    type="submit"
                    disabled={loading || !email || (stage === "confirm" && (code.length !== 6 || password.length < 12))}
                    className="w-full py-3 bg-[#004ac6] text-white rounded-lg font-geist text-[14px] font-medium hover:bg-[#2563eb] active:scale-[0.98] transition-all shadow-md disabled:opacity-60"
                  >
                    {loading ? "Please wait..." : stage === "request" ? "Send Reset Code" : "Reset Password"}
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-4">
                <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                  <span className="material-symbols-outlined text-green-600 text-[28px]" style={{ fontVariationSettings: '"FILL" 1' }}>mark_email_read</span>
                </div>
                <h2 className="font-geist text-[24px] font-semibold text-[#0b1c30] mb-2">Password reset</h2>
                <p className="font-inter text-[15px] text-[#434655] mb-6">
                  Your password for <strong>{email}</strong> has been changed. You can sign in now.
                </p>
                <button
                  onClick={() => { setStage("request"); setEmail(""); setCode(""); setPassword(""); }}
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
