import React from 'react';

import { Footer } from '@/components/layout/Footer';

export default function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen">

        <main className="flex-grow">
          {/* Hero Section */}
          <section className="relative pt-[4rem] pb-[2.5rem] px-[16px] md:px-[48px] overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern -z-10"></div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-[#dbe1ff] to-transparent opacity-40 -z-10 blur-3xl pointer-events-none"></div>

            <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="flex flex-col gap-6 text-center lg:text-left z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#dce9ff] text-[#003ea8] font-geist text-[12px] font-semibold leading-[1] w-fit mx-auto lg:mx-0">
                  <span className="material-symbols-outlined text-[16px]">campaign</span>
                  New: Advanced Monetization Tools
                </div>

                <h1 className="font-geist text-[36px] md:text-[48px] font-bold leading-[1.2] md:leading-[1.1] tracking-[-0.02em] text-[#0b1c30]">
                  Powering the World's Most <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#004ac6] to-[#712ae2]">Engaging Contests</span>
                </h1>

                <p className="font-inter text-[18px] leading-[1.6] text-[#434655] max-w-xl mx-auto lg:mx-0">
                  The premium platform for organizations, creators, and brands to host secure, high-stakes voting campaigns. Create free or paid polls in minutes.
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-4 mt-4 justify-center lg:justify-start">
                  <button className="btn-primary w-full sm:w-auto font-geist text-[14px] font-medium leading-[1] tracking-[0.01em] px-8 py-4 rounded-lg shadow-lg flex items-center justify-center gap-2 md:px-12 md:py-6 text-lg hover:scale-105 transition-all duration-300 soft-glow-shadow bg-[#2563eb] text-[#eeefff]">
                    Create Contest | Poll
                    <span className="material-symbols-outlined text-[20px]">add_circle</span>
                  </button>
                  <button className="btn-secondary w-full sm:w-auto text-[#0b1c30] font-geist text-[14px] font-medium leading-[1] tracking-[0.01em] px-8 py-4 rounded-lg flex items-center justify-center gap-2 bg-[#ffffff]/80 backdrop-blur-md border-2 border-[#004ac6]/20 hover:border-[#004ac6] transition-all">
                    <span className="material-symbols-outlined text-[20px]">explore</span>
                    Discover Contests
                  </button>
                </div>

                <div className="mt-8 flex items-center justify-center lg:justify-start gap-4 text-[#434655]">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-[#d3e4fe] border-2 border-[#f8f9ff] flex items-center justify-center text-xs font-bold text-[#004ac6]">A</div>
                    <div className="w-8 h-8 rounded-full bg-[#dce9ff] border-2 border-[#f8f9ff] flex items-center justify-center text-xs font-bold text-[#712ae2]">B</div>
                    <div className="w-8 h-8 rounded-full bg-[#b4c5ff] border-2 border-[#f8f9ff] flex items-center justify-center text-xs font-bold text-[#00174b]">C</div>
                  </div>
                  <p className="font-inter text-[14px] leading-[1.5]">Trusted by 10,000+ campaign organizers</p>
                </div>
              </div>

              <div className="relative w-full aspect-[4/3] lg:aspect-auto lg:h-[600px] rounded-xl overflow-hidden soft-glow-shadow border border-[#c3c6d7] bg-[#ffffff] z-10 flex items-center justify-center group">
                <div className="absolute inset-0 bg-[#eff4ff] flex flex-col p-6 overflow-hidden">
                  {/* Fake UI Header */}
                  <div className="flex justify-between items-center mb-6 pb-4 border-b border-[#c3c6d7]">
                    <div className="flex gap-2 items-center">
                      <div className="w-3 h-3 rounded-full bg-[#ba1a1a]"></div>
                      <div className="w-3 h-3 rounded-full bg-[#ffb596]"></div>
                      <div className="w-3 h-3 rounded-full bg-[#004ac6]"></div>
                    </div>
                    <div className="bg-[#e5eeff] px-4 py-1 rounded-md text-xs font-medium text-[#004ac6]">Dashboard / Active Campaign</div>
                  </div>

                  {/* Fake UI Body Bento Grid */}
                  <div className="grid grid-cols-2 gap-4 h-full">
                    <div className="col-span-2 bg-[#f8f9ff] rounded-lg border border-[#c3c6d7] p-4 flex flex-col justify-between group-hover:border-[#004ac6]/30 transition-colors">
                      <div className="flex justify-between items-start">
                        <h3 className="font-geist text-sm font-bold text-[#0b1c30]">Global Photography Awards 2024</h3>
                        <span className="bg-[#d3e4fe] text-[#004ac6] text-[10px] px-2 py-1 rounded-full font-bold">LIVE</span>
                      </div>
                      <div className="mt-4">
                        <div className="flex justify-between text-xs text-[#434655] mb-1">
                          <span>Total Votes</span>
                          <span className="font-bold text-[#0b1c30]">124,592</span>
                        </div>
                        <div className="w-full bg-[#e5eeff] rounded-full h-2">
                          <div className="bg-[#004ac6] h-2 rounded-full w-[75%]"></div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-[#f8f9ff] rounded-lg border border-[#c3c6d7] p-4 group-hover:border-[#004ac6]/30 transition-colors flex flex-col justify-center items-center text-center">
                      <span className="material-symbols-outlined text-[#712ae2] text-2xl mb-2" style={{ fontVariationSettings: '"FILL" 1' }}>payments</span>
                      <h4 className="text-xs text-[#434655]">Revenue Generated</h4>
                      <p className="text-lg font-bold text-[#0b1c30] mt-1">$45,290</p>
                    </div>

                    <div className="bg-[#f8f9ff] rounded-lg border border-[#c3c6d7] p-4 group-hover:border-[#004ac6]/30 transition-colors flex flex-col justify-center items-center text-center">
                      <span className="material-symbols-outlined text-[#004ac6] text-2xl mb-2" style={{ fontVariationSettings: '"FILL" 1' }}>group</span>
                      <h4 className="text-xs text-[#434655]">Active Voters</h4>
                      <p className="text-lg font-bold text-[#0b1c30] mt-1">8,402</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Product Showcase (Live Poll Action) */}
          <section className="py-[2.5rem] bg-[#f8f9ff] border-y border-[#c3c6d7] px-[16px] md:px-[48px]">
            <div className="max-w-[1280px] mx-auto flex flex-col items-center">
              <p className="font-geist text-[12px] font-semibold leading-[1] tracking-wider text-[#434655] uppercase mb-8">Trusted by industry leaders</p>
              <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                <div className="text-xl font-bold font-geist tracking-tighter">AcmeCorp</div>
                <div className="text-xl font-bold font-geist tracking-widest uppercase">Global Awards</div>
                <div className="text-xl font-bold font-geist italic">NextGen Fintech</div>
                <div className="text-xl font-bold font-geist">Vanguard Media</div>
              </div>
            </div>
          </section>

          {/* How It Works Section */}
          <section className="py-[4rem] px-[16px] md:px-[48px] relative">
            <div className="max-w-[1280px] mx-auto">
              <div className="text-center mb-16">
                <h2 className="font-geist text-[32px] font-semibold leading-[1.25] tracking-[-0.01em] text-[#0b1c30] mb-4">From Idea to Revenue in Minutes</h2>
                <p className="font-inter text-[18px] leading-[1.6] text-[#434655] max-w-2xl mx-auto">A streamlined workflow designed for maximum engagement and frictionless monetization.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-px bg-[#c3c6d7] z-0"></div>

                {/* Step 1 */}
                <div className="relative z-10 flex flex-col items-center text-center group">
                  <div className="w-24 h-24 rounded-full bg-[#f8f9ff] border-4 border-[#f8f9ff] shadow-sm flex items-center justify-center mb-6 group-hover:border-[#dbe1ff] transition-colors duration-300">
                    <span className="material-symbols-outlined text-4xl text-[#004ac6]" style={{ fontVariationSettings: '"FILL" 1' }}>edit_square</span>
                  </div>
                  <h3 className="font-geist text-[24px] font-semibold leading-[1.3] text-[#0b1c30] mb-2">1. Create</h3>
                  <p className="font-inter text-[16px] leading-[1.5] text-[#434655]">Set up your poll, define categories, and configure free or paid voting tiers effortlessly.</p>
                </div>

                {/* Step 2 */}
                <div className="relative z-10 flex flex-col items-center text-center group">
                  <div className="w-24 h-24 rounded-full bg-[#f8f9ff] border-4 border-[#f8f9ff] shadow-sm flex items-center justify-center mb-6 group-hover:border-[#dbe1ff] transition-colors duration-300">
                    <span className="material-symbols-outlined text-4xl text-[#712ae2]" style={{ fontVariationSettings: '"FILL" 1' }}>share</span>
                  </div>
                  <h3 className="font-geist text-[24px] font-semibold leading-[1.3] text-[#0b1c30] mb-2">2. Engage</h3>
                  <p className="font-inter text-[16px] leading-[1.5] text-[#434655]">Share your customized, mobile-optimized voting page to gather votes from anywhere.</p>
                </div>

                {/* Step 3 */}
                <div className="relative z-10 flex flex-col items-center text-center group">
                  <div className="w-24 h-24 rounded-full bg-[#f8f9ff] border-4 border-[#f8f9ff] shadow-sm flex items-center justify-center mb-6 group-hover:border-[#dbe1ff] transition-colors duration-300">
                    <span className="material-symbols-outlined text-4xl text-[#943700]" style={{ fontVariationSettings: '"FILL" 1' }}>account_balance</span>
                  </div>
                  <h3 className="font-geist text-[24px] font-semibold leading-[1.3] text-[#0b1c30] mb-2">3. Monetize</h3>
                  <p className="font-inter text-[16px] leading-[1.5] text-[#434655]">Earn revenue from paid votes with instant payouts and enterprise-grade security.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Features Bento Grid Section */}
          <section className="py-[4rem] bg-[#ffffff] px-[16px] md:px-[48px]" id="features">
            <div className="max-w-[1280px] mx-auto">
              <div className="mb-12">
                <h2 className="font-geist text-[32px] font-semibold leading-[1.25] tracking-[-0.01em] text-[#0b1c30] mb-4">Enterprise Power, Consumer Feel</h2>
                <p className="font-inter text-[18px] leading-[1.6] text-[#434655] max-w-2xl">Everything you need to run secure, large-scale voting events.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 h-auto md:h-[600px]">

                {/* Feature 1: Large Span */}
                <div className="interactive-card col-span-1 md:col-span-2 md:row-span-1 bg-[#f8f9ff] border border-[#c3c6d7] rounded-xl p-8 flex flex-col md:flex-row gap-6 overflow-hidden relative soft-glow-shadow">
                  <div className="flex-1 z-10">
                    <div className="w-12 h-12 rounded-lg bg-[#2563eb] text-[#eeefff] flex items-center justify-center mb-6">
                      <span className="material-symbols-outlined">analytics</span>
                    </div>
                    <h3 className="font-geist text-[24px] font-semibold leading-[1.3] text-[#0b1c30] mb-3">Real-time Analytics</h3>
                    <p className="font-inter text-[16px] leading-[1.5] text-[#434655]">Watch votes and revenue roll in live. Our dashboard provides deep demographic insights and fraud detection metrics instantly.</p>
                  </div>

                  <div className="flex-1 relative min-h-[150px] md:min-h-0 bg-[#eff4ff] rounded-lg border border-[#c3c6d7]/50 flex items-end p-4">
                    <div className="w-full flex items-end gap-2 h-32">
                      <div className="w-1/4 bg-[#b4c5ff] rounded-t-sm h-[40%]"></div>
                      <div className="w-1/4 bg-[#dbe1ff] rounded-t-sm h-[60%]"></div>
                      <div className="w-1/4 bg-[#004ac6] rounded-t-sm h-[85%]"></div>
                      <div className="w-1/4 bg-[#8a4cfc] rounded-t-sm h-[100%]"></div>
                    </div>
                  </div>
                </div>

                {/* Feature 2: Small */}
                <div className="interactive-card col-span-1 md:row-span-1 bg-[#f8f9ff] border border-[#c3c6d7] rounded-xl p-8 flex flex-col soft-glow-shadow">
                  <div className="w-12 h-12 rounded-lg bg-[#d3e4fe] text-[#004ac6] flex items-center justify-center mb-6">
                    <span className="material-symbols-outlined">shield_lock</span>
                  </div>
                  <h3 className="font-geist text-[24px] font-semibold leading-[1.3] text-[#0b1c30] mb-3">Fraud Prevention</h3>
                  <p className="font-inter text-[16px] leading-[1.5] text-[#434655]">Bank-level security, IP tracking, and device fingerprinting ensure every vote is legitimate.</p>
                </div>

                {/* Feature 3: Small */}
                <div className="interactive-card col-span-1 md:row-span-1 bg-[#f8f9ff] border border-[#c3c6d7] rounded-xl p-8 flex flex-col soft-glow-shadow">
                  <div className="w-12 h-12 rounded-lg bg-[#d3e4fe] text-[#004ac6] flex items-center justify-center mb-6">
                    <span className="material-symbols-outlined">smartphone</span>
                  </div>
                  <h3 className="font-geist text-[24px] font-semibold leading-[1.3] text-[#0b1c30] mb-3">Mobile-First Experience</h3>
                  <p className="font-inter text-[16px] leading-[1.5] text-[#434655]">Over 80% of votes happen on mobile. Our voting interfaces are obsessively optimized for tap-friendly speed.</p>
                </div>

                {/* Feature 4: Medium Span */}
                <div className="interactive-card col-span-1 md:col-span-2 md:row-span-1 bg-gradient-to-br from-[#f8f9ff] to-[#e5eeff] border border-[#c3c6d7] rounded-xl p-8 flex flex-col justify-center relative overflow-hidden soft-glow-shadow">
                  <div className="absolute -right-10 -bottom-10 opacity-10">
                    <span className="material-symbols-outlined text-[200px]">payments</span>
                  </div>
                  <div className="relative z-10 w-full md:w-2/3">
                    <div className="w-12 h-12 rounded-lg bg-[#712ae2] text-[#ffffff] flex items-center justify-center mb-6">
                      <span className="material-symbols-outlined">paid</span>
                    </div>
                    <h3 className="font-geist text-[24px] font-semibold leading-[1.3] text-[#0b1c30] mb-3">Secure Paid Voting</h3>
                    <p className="font-inter text-[16px] leading-[1.5] text-[#434655]">Turn engagement into revenue. Accept global payments securely with integrated processing and instant payouts.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Final CTA Section */}
          <section className="py-[4rem] px-[16px] md:px-[48px] bg-[#004ac6] text-[#ffffff] text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
              <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#003ea8] rounded-full mix-blend-multiply filter blur-3xl"></div>
              <div className="absolute top-1/2 right-10 w-72 h-72 bg-[#712ae2] rounded-full mix-blend-multiply filter blur-3xl"></div>
            </div>
            <div className="max-w-3xl mx-auto relative z-10">
              <h2 className="font-geist text-[36px] md:text-[48px] font-bold leading-[1.2] md:leading-[1.1] tracking-[-0.02em] mb-6">Ready to launch your first campaign?</h2>
              <p className="font-inter text-[18px] leading-[1.6] text-[#dbe1ff] mb-8">Join thousands of organizations running fair, secure, and profitable voting events on VoteFlow.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-[#ffffff] text-[#004ac6] font-geist text-[14px] font-medium leading-[1] tracking-[0.01em] px-8 py-4 rounded-lg shadow-lg hover:bg-[#f8f9ff] transition-colors duration-200">
                  Get Started for Free
                </button>
                <button className="border border-[#ffffff]/30 text-[#ffffff] font-geist text-[14px] font-medium leading-[1] tracking-[0.01em] px-8 py-4 rounded-lg hover:bg-[#ffffff]/10 transition-colors duration-200">
                  Talk to Sales
                </button>
              </div>
            </div>
          </section>
        </main>


      </div>
    </>
  );
}