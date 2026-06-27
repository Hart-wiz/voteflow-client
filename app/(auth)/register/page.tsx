"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      {/* Main Layout Wrapper */}
      <div className="bg-[#f8f9ff] text-[#0b1c30] min-h-screen flex flex-col font-inter">

        <Navbar />

        {/* Main Content: Split Screen Layout */}
        <main className="flex-grow flex flex-col md:flex-row w-full max-w-[1440px] mx-auto overflow-hidden">

          {/* Left Side: Visual & Trust Indicators */}
          <div className="hidden lg:flex w-1/2 relative flex-col justify-center px-24 bg-[#eff4ff] overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none"></div>

            <div className="relative z-10">
              <div className="inline-flex items-center gap-[4px] px-[8px] py-[4px] bg-[#2563eb]/10 text-[#b4c5ff] rounded-full mb-[24px] border border-[#004ac6]/10">
                <span className="material-symbols-outlined text-[18px]">verified</span>
                <span className="font-geist text-[12px] leading-[1] font-semibold">ISO 27001 Certified Infrastructure</span>
              </div>

              <h1 className="font-geist text-[48px] leading-[1.1] tracking-[-0.02em] font-bold mb-[16px] text-[#0b1c30]">
                Precision for high-stakes governance.
              </h1>
              <p className="font-inter text-[18px] leading-[1.6] font-normal text-[#434655] mb-[40px] max-w-lg">
                Join 10,000+ world-class organizations using VoteFlow for secure, fluid, and legally binding digital elections.
              </p>

              <div className="grid grid-cols-2 gap-[24px]">
                <div className="flex items-center gap-[8px]">
                  <div className="w-10 h-10 rounded-full bg-[#ffffff] flex items-center justify-center shadow-sm">
                    <span className="material-symbols-outlined text-[#004ac6]">security</span>
                  </div>
                  <div>
                    <p className="font-geist text-[14px] leading-[1] tracking-[0.01em] font-medium text-[#0b1c30]">End-to-End Encryption</p>
                    <p className="font-inter text-[14px] leading-[1.5] text-[#434655]">Zero-knowledge proof systems</p>
                  </div>
                </div>
                <div className="flex items-center gap-[8px]">
                  <div className="w-10 h-10 rounded-full bg-[#ffffff] flex items-center justify-center shadow-sm">
                    <span className="material-symbols-outlined text-[#004ac6]">speed</span>
                  </div>
                  <div>
                    <p className="font-geist text-[14px] leading-[1] tracking-[0.01em] font-medium text-[#0b1c30]">Real-time Audits</p>
                    <p className="font-inter text-[14px] leading-[1.5] text-[#434655]">Instant, verifiable results</p>
                  </div>
                </div>
              </div>

              <div className="mt-[64px] flex items-center gap-[16px]">
                <div className="flex -space-x-2">
                  <img className="w-10 h-10 rounded-full border-2 border-[#ffffff] object-cover" alt="Portrait 1" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYtBF-rh6ZahdBFKoTMfkm5a1P-DCnYQAl4zFt7OnsJhabBal6VX3IcVMTYIjHhrWmSlI8MFbqS_ZNaRuckh5ubJ7tlLbctyYo8IsQ0_LdagfGpLkRXYjUc3oQXPT8bmpew-D0jMzzM4dZF1FVGdwj6K2d_6ra_2jibWvORpfzSR7Bc0u8Et3jAvlR9AVmpn_4z3ZSqmyie0zpqaUpQQbzlTsAuJavyZc5fo3LwNUbWZyt32KoL_qo" />
                  <img className="w-10 h-10 rounded-full border-2 border-[#ffffff] object-cover" alt="Portrait 2" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAV_2YllsQKWtUxn2w9QlVThUl7muipi5rg7BN3DPDAoQKCJQam6fGqau-N1YH4p3ob4y1lRbva6tqkJsZZsgAyr4ohXc5CS7DVMBawQUxyXEoMwaE0uTFdqEBoUZOfe0yBvmKmLeklHbJNwl1pO6O_udpCwwCjuMG8q1CK99L-WV_fu0pRvFJhG3rDwDPYLoiMbmlSNYCI5e0G2rRfvSiMEdOC2kfb6yZeU3bdDVJSEkF1YwIcaT4b" />
                  <img className="w-10 h-10 rounded-full border-2 border-[#ffffff] object-cover" alt="Portrait 3" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIvRysnI0Vd1vPyhpXTd0k56cTSKQX_YZtF_Hhpo8hvkXew8o983GesIzYV3s7uXrzwChX2-blzbPMQUEDzHI9nY-laXhLm-3z3t6lf4m7VnCZGywYrbVIcYVuubbhgaUCT__E62dJRJWl1xK9wucK8SrgD7vRhybLDhpcaq9eTUqAuADSZ00LqUsgN-OFF9hc9_vXurqj1tx9BtfP_al5Ql-jyjqmWnYwV7n24kKNzvilEYV5Vj84" />
                </div>
                <p className="font-inter text-[14px] leading-[1.5] text-[#434655]">Trusted by the world's leading boards.</p>
              </div>
            </div>
          </div>

          {/* Right Side: Registration Form */}
          <div className="w-full lg:w-1/2 flex items-center justify-center p-[16px] md:p-[40px] bg-[#f8f9ff]">
            <div className="w-full max-w-md">

              <div className="mb-[40px]">
                <h2 className="font-geist text-[32px] leading-[1.25] tracking-[-0.01em] font-semibold text-[#0b1c30] mb-[4px]">
                  Get started today
                </h2>
                <p className="font-inter text-[16px] leading-[1.5] text-[#434655]">
                  No credit card required • 14-day free trial
                </p>
              </div>

              {/* Google Signup */}
              <button className="w-full flex items-center justify-center gap-[8px] px-[16px] py-[8px] border border-[#c3c6d7] rounded-lg font-geist text-[14px] leading-[1] tracking-[0.01em] font-medium text-[#434655] hover:bg-[#eff4ff] transition-all duration-200 active:scale-[0.98] mb-[24px]">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"></path>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 12-4.53z" fill="#EA4335"></path>
                </svg>
                Sign up with Google
              </button>

              <div className="relative flex items-center mb-[24px]">
                <div className="flex-grow border-t border-[#c3c6d7]"></div>
                <span className="px-[16px] font-geist text-[12px] leading-[1] font-semibold text-[#737686] uppercase tracking-wider">or email</span>
                <div className="flex-grow border-t border-[#c3c6d7]"></div>
              </div>

              <form className="space-y-[24px]" onSubmit={(e) => e.preventDefault()}>

                {/* Full Name */}
                <div className="space-y-[4px] group focus-within:scale-[1.01] transition-transform duration-200">
                  <label className="font-geist text-[14px] leading-[1] tracking-[0.01em] font-medium text-[#0b1c30]" htmlFor="name">Full Name</label>
                  <input className="w-full px-[16px] py-[8px] rounded-lg border border-[#c3c6d7] focus:ring-2 focus:ring-[#004ac6]/20 focus:border-[#004ac6] outline-none transition-all placeholder:text-[#c3c6d7] font-inter text-[16px] leading-[1.5]" id="name" placeholder="Alex Rivera" type="text" />
                </div>

                {/* Work Email */}
                <div className="space-y-[4px] group focus-within:scale-[1.01] transition-transform duration-200">
                  <label className="font-geist text-[14px] leading-[1] tracking-[0.01em] font-medium text-[#0b1c30]" htmlFor="email">Work Email</label>
                  <input className="w-full px-[16px] py-[8px] rounded-lg border border-[#c3c6d7] focus:ring-2 focus:ring-[#004ac6]/20 focus:border-[#004ac6] outline-none transition-all placeholder:text-[#c3c6d7] font-inter text-[16px] leading-[1.5]" id="email" placeholder="alex@organization.com" type="email" />
                </div>

                {/* Organization Name */}
                <div className="space-y-[4px] group focus-within:scale-[1.01] transition-transform duration-200">
                  <label className="font-geist text-[14px] leading-[1] tracking-[0.01em] font-medium text-[#0b1c30]" htmlFor="org">Organization Name</label>
                  <input className="w-full px-[16px] py-[8px] rounded-lg border border-[#c3c6d7] focus:ring-2 focus:ring-[#004ac6]/20 focus:border-[#004ac6] outline-none transition-all placeholder:text-[#c3c6d7] font-inter text-[16px] leading-[1.5]" id="org" placeholder="Acme Governance Corp" type="text" />
                </div>

                {/* Password Field */}
                <div className="space-y-[4px] group focus-within:scale-[1.01] transition-transform duration-200">
                  <label className="font-geist text-[14px] leading-[1] tracking-[0.01em] font-medium text-[#0b1c30]" htmlFor="password">Password</label>
                  <div className="relative">
                    <input
                      className="w-full px-[16px] py-[8px] rounded-lg border border-[#c3c6d7] focus:ring-2 focus:ring-[#004ac6]/20 focus:border-[#004ac6] outline-none transition-all placeholder:text-[#c3c6d7] font-inter text-[16px] leading-[1.5]"
                      id="password"
                      placeholder="••••••••"
                      type={showPassword ? "text" : "password"}
                    />
                    <button
                      className="absolute right-[16px] top-1/2 -translate-y-1/2 text-[#c3c6d7] hover:text-[#434655] transition-colors"
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      <span className="material-symbols-outlined text-[20px]">
                        {showPassword ? "visibility_off" : "visibility"}
                      </span>
                    </button>
                  </div>
                  <p className="font-geist text-[12px] leading-[1] font-semibold text-[#c3c6d7]">Must be at least 12 characters.</p>
                </div>

                <button className="w-full cta-gradient text-[#ffffff] font-geist text-[14px] leading-[1] tracking-[0.01em] font-medium py-[16px] rounded-lg shadow-md hover:shadow-lg transition-all duration-200 active:scale-[0.97] mt-[16px]">
                  Create Account
                </button>
              </form>

              <p className="mt-[40px] text-center font-inter text-[14px] leading-[1.5] text-[#434655]">
                Already have an account?{' '}
                <Link className="text-[#004ac6] font-semibold hover:underline" href="/login">Sign In</Link>
              </p>

              <p className="mt-[16px] text-center font-geist text-[12px] leading-[1.5] font-semibold text-[#c3c6d7]">
                By creating an account, you agree to our <Link className="underline hover:text-[#434655]" href="#">Terms of Service</Link> and <Link className="underline hover:text-[#434655]" href="#">Privacy Policy</Link>.
              </p>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}