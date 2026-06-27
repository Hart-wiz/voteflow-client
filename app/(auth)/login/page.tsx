"use client"
import React, { useState } from 'react';
import Link from 'next/link';

import { Footer } from '@/components/layout/Footer';

export default function SignInPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      {/* Main Layout Wrapper */}
      <div className="bg-[#f8f9ff] text-[#0b1c30] min-h-screen flex flex-col font-inter">


        {/* Main Content Area */}
        <main className="flex-grow flex items-center justify-center py-20 px-4 relative overflow-hidden">

          {/* Atmospheric Background Elements */}
          <div className="absolute inset-0 pointer-events-none opacity-20">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#004ac6] rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#712ae2] rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4"></div>
          </div>

          <div className="w-full max-w-md z-10">
            <div className="bg-[#ffffff] border border-[#c3c6d7] rounded-xl soft-glow-shadow p-[2.5rem] auth-card-hover">

              <div className="mb-[2.5rem] text-center">
                <h1 className="text-[32px] leading-[1.25] tracking-[-0.01em] font-semibold font-geist text-[#0b1c30] mb-2">
                  Welcome Back
                </h1>
                <p className="text-[16px] leading-[1.5] font-normal font-inter text-[#434655]">
                  Sign in to manage your high-stakes elections
                </p>
              </div>

              <form action="#" className="space-y-[1.5rem]" method="POST">

                {/* Social Login */}
                <button className="w-full flex items-center justify-center gap-3 py-3 px-4 border border-[#c3c6d7] rounded-lg bg-[#f8f9ff] text-[#0b1c30] font-geist text-[14px] leading-[1] tracking-[0.01em] font-medium hover:bg-[#eff4ff] transition-colors duration-200 group" type="button">
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"></path>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path>
                  </svg>
                  Sign in with Google
                </button>

                <div className="relative flex items-center gap-4 py-2">
                  <div className="flex-grow h-px bg-[#c3c6d7]"></div>
                  <span className="text-[12px] leading-[1] font-semibold font-geist text-[#737686] uppercase tracking-wider">or email</span>
                  <div className="flex-grow h-px bg-[#c3c6d7]"></div>
                </div>

                {/* Email Field */}
                <div className="space-y-[4px]">
                  <label className="block text-[14px] leading-[1] tracking-[0.01em] font-medium font-geist text-[#0b1c30]" htmlFor="email">
                    Email Address
                  </label>
                  <div className="relative group">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#737686] group-focus-within:text-[#004ac6] transition-colors">mail</span>
                    <input className="w-full pl-10 pr-4 py-3 bg-[#ffffff] border border-[#c3c6d7] rounded-lg text-[16px] leading-[1.5] font-normal font-inter focus:ring-2 focus:ring-[#004ac6] focus:ring-opacity-20 focus:border-[#004ac6] outline-none transition-all placeholder:text-[#c3c6d7]" id="email" name="email" placeholder="name@company.com" required type="email" />
                  </div>
                </div>

                {/* Password Field */}
                <div className="space-y-[4px]">
                  <div className="flex justify-between items-center">
                    <label className="block text-[14px] leading-[1] tracking-[0.01em] font-medium font-geist text-[#0b1c30]" htmlFor="password">
                      Password
                    </label>
                    <Link className="text-[12px] leading-[1] font-semibold font-geist text-[#004ac6] hover:underline" href="#">
                      Forgot password?
                    </Link>
                  </div>
                  <div className="relative group">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#737686] group-focus-within:text-[#004ac6] transition-colors">lock</span>
                    <input
                      className="w-full pl-10 pr-10 py-3 bg-[#ffffff] border border-[#c3c6d7] rounded-lg text-[16px] leading-[1.5] font-normal font-inter focus:ring-2 focus:ring-[#004ac6] focus:ring-opacity-20 focus:border-[#004ac6] outline-none transition-all placeholder:text-[#c3c6d7]"
                      id="password"
                      name="password"
                      placeholder="••••••••"
                      required
                      type={showPassword ? "text" : "password"}
                    />
                    <button
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-[#737686] hover:text-[#0b1c30] transition-colors"
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      <span className="material-symbols-outlined text-[20px]">
                        {showPassword ? "visibility_off" : "visibility"}
                      </span>
                    </button>
                  </div>
                </div>

                {/* Remember Me */}
                <div className="flex items-center">
                  <input className="w-4 h-4 text-[#004ac6] border-[#c3c6d7] rounded focus:ring-[#004ac6] focus:ring-offset-0 transition-all cursor-pointer" id="remember" name="remember" type="checkbox" />
                  <label className="ml-2 text-[14px] leading-[1] tracking-[0.01em] font-medium font-geist text-[#434655] cursor-pointer select-none" htmlFor="remember">
                    Remember me for 30 days
                  </label>
                </div>

                {/* CTA */}
                <button className="w-full py-3 px-4 bg-[#004ac6] text-[#ffffff] rounded-lg font-geist text-[14px] leading-[1] tracking-[0.01em] font-medium hover:bg-[#2563eb] active:scale-[0.98] transition-all shadow-md" type="submit">
                  Sign In
                </button>
              </form>

              <div className="mt-[2.5rem] pt-[1.5rem] border-t border-[#c3c6d7] text-center">
                <p className="text-[14px] leading-[1.5] font-normal font-inter text-[#434655]">
                  Don't have an account?{' '}
                  <Link className="text-[#004ac6] font-semibold hover:underline" href="/register">Register your organization</Link>
                </p>
              </div>
            </div>

            {/* Trust Badge */}
            <div className="mt-8 flex items-center justify-center gap-2 opacity-60">
              <span className="material-symbols-outlined text-sm">verified_user</span>
              <span className="text-[12px] leading-[1] font-semibold font-geist tracking-tight text-[#0b1c30]">
                ISO 27001 Certified & SOC2 Type II Compliant Environment
              </span>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}