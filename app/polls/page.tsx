"use client";
import React, { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export default function DiscoverPage() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <>
      {/* Native Google Fonts injection & Custom UI effects.
        In a full Next.js 16 app, these font imports can be replaced by next/font 
        in your layout.js, but are included here for a perfect standalone preview.
      */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @import url('https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700;800&family=Inter:wght@400;500;600&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap');

          body {
            font-family: 'Inter', sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }

          .font-geist { font-family: 'Geist', sans-serif; }
          .font-inter { font-family: 'Inter', sans-serif; }

          .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
            vertical-align: middle;
          }

          .soft-glow-card {
            box-shadow: 0 2px 4px rgba(0, 74, 198, 0.04);
            transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
          }
          .soft-glow-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 10px 20px rgba(0, 74, 198, 0.08);
          }

          .gradient-button {
            background: linear-gradient(180deg, #2563eb 0%, #1d4ed8 100%);
          }
        `
      }} />

      {/* Main Layout Wrapper */}
      <div className="bg-[#f8f9ff] text-[#0b1c30] font-inter text-[16px] leading-[1.5] selection:bg-[#dbe1ff] selection:text-[#00174b] min-h-screen flex flex-col">

        <Navbar />

        <main className="flex-grow max-w-[1280px] w-full mx-auto px-[16px] md:px-[48px] py-[40px]">

          {/* Hero Section */}
          <header className="mb-[64px] text-center md:text-left">
            <h1 className="font-geist text-[36px] md:text-[48px] leading-[1.2] md:leading-[1.1] tracking-[-0.02em] font-bold text-[#0b1c30] mb-[16px]">
              Explore & Vote
            </h1>
            <p className="font-inter text-[18px] leading-[1.6] text-[#434655] max-w-2xl mx-auto md:mx-0">
              Participate in verified, high-stakes contests from around the globe. Your voice shapes the future of technology, art, and leadership.
            </p>
          </header>

          {/* Search & Filter Bar */}
          <section className="bg-[#eff4ff] p-[24px] rounded-xl mb-[40px] border border-[#c3c6d7]">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-[16px] items-end">

              <div className="md:col-span-5 space-y-[4px]">
                <label className="font-geist text-[12px] leading-[1] font-semibold text-[#737686] ml-1">Search Contests</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#737686]">search</span>
                  <input
                    className="w-full pl-10 pr-[16px] py-[8px] bg-[#ffffff] border border-[#c3c6d7] rounded-lg focus:ring-2 focus:ring-[#004ac6]/20 focus:border-[#004ac6] outline-none transition-all font-inter text-[16px] leading-[1.5]"
                    placeholder="Search by name or organizer..."
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>

              <div className="md:col-span-3 space-y-[4px]">
                <label className="font-geist text-[12px] leading-[1] font-semibold text-[#737686] ml-1">Category</label>
                <select className="w-full px-[16px] py-[8px] bg-[#ffffff] border border-[#c3c6d7] rounded-lg focus:ring-2 focus:ring-[#004ac6]/20 focus:border-[#004ac6] outline-none appearance-none font-inter text-[16px] leading-[1.5]">
                  <option>All Categories</option>
                  <option>Photography</option>
                  <option>Startup Pitch</option>
                  <option>UI/UX Design</option>
                  <option>Non-Profit</option>
                </select>
              </div>

              <div className="md:col-span-3 space-y-[4px]">
                <label className="font-geist text-[12px] leading-[1] font-semibold text-[#737686] ml-1">Status</label>
                <div className="flex bg-[#dce9ff] p-1 rounded-lg">
                  <button className="flex-1 px-[8px] py-1.5 bg-[#ffffff] shadow-sm rounded-md font-geist text-[14px] leading-[1] tracking-[0.01em] font-medium text-[#004ac6]">All</button>
                  <button className="flex-1 px-[8px] py-1.5 hover:text-[#004ac6] transition-colors font-geist text-[14px] leading-[1] tracking-[0.01em] font-medium text-[#434655]">Active</button>
                  <button className="flex-1 px-[8px] py-1.5 hover:text-[#004ac6] transition-colors font-geist text-[14px] leading-[1] tracking-[0.01em] font-medium text-[#434655]">Ending</button>
                </div>
              </div>

              <div className="md:col-span-1">
                <button className="w-full h-[42px] flex items-center justify-center bg-[#2563eb] text-[#eeefff] hover:bg-[#004ac6] hover:text-[#ffffff] rounded-lg transition-all">
                  <span className="material-symbols-outlined">tune</span>
                </button>
              </div>
            </div>
          </section>

          {/* Contest Grid */}
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[40px]">

            {/* Card 1 */}
            <article className="bg-[#ffffff] rounded-xl overflow-hidden soft-glow-card border border-[#c3c6d7] group flex flex-col">
              <div className="relative h-56 overflow-hidden">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  alt="A wide panoramic landscape of snow-capped mountains reflected in a crystal-clear alpine lake at sunrise."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_pCAfvs6JVfD1lqUPd_ffZR-hU7b8ewjHrhw_AgtkZXNZ_gSWJ4-eN0YSuhHoOimc_fW1pWNjHO79AoAXkqhosnq56T4MBPPbqyvS58UoJsIKNIb8y1eHjGIAoVnR6WQmzXDyb9hChJqMC8vCtQeqwDvGOepRi-awkOF6MTmuVCp9TGtEFKSB-qd5bfE-zuU7GAqozdT6g60dbx1BxwsqzIULWuNWDyPEYJlK_prE1kONT2yFmb8A"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#004ac6] text-[#ffffff] text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded">Active</span>
                </div>
              </div>
              <div className="p-[24px] flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-[8px]">
                  <h3 className="font-geist text-[24px] leading-[1.3] font-semibold text-[#0b1c30] leading-tight">National Wildlife Photography 2024</h3>
                </div>
                <p className="font-geist text-[14px] leading-[1] tracking-[0.01em] font-medium text-[#737686] mb-[24px]">by National Geographic Society</p>

                <div className="flex items-center gap-[40px] mb-[40px]">
                  <div className="flex flex-col">
                    <span className="font-geist text-[12px] leading-[1] font-semibold text-[#737686] uppercase tracking-tight mb-1">Votes</span>
                    <span className="font-geist text-[24px] leading-[1.3] font-semibold text-[#004ac6]">12.4K</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-geist text-[12px] leading-[1] font-semibold text-[#737686] uppercase tracking-tight mb-1">Ends In</span>
                    <span className="font-geist text-[24px] leading-[1.3] font-semibold text-[#0b1c30]">14d</span>
                  </div>
                </div>

                <button className="mt-auto w-full py-[16px] border border-[#004ac6] text-[#004ac6] font-geist text-[14px] leading-[1] tracking-[0.01em] font-medium rounded-lg hover:bg-[#2563eb] hover:text-[#eeefff] transition-all">
                  View Contest
                </button>
              </div>
            </article>

            {/* Card 2 */}
            <article className="bg-[#ffffff] rounded-xl overflow-hidden soft-glow-card border border-[#c3c6d7] group flex flex-col">
              <div className="relative h-56 overflow-hidden">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  alt="A futuristic startup boardroom with glass walls and holographic displays."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdKqDIchFJ9YzwuZk5wNVVflIiDXDWwV6qZcTexW6IF2uoWEXctOPpOxVdDlmryIi18dpNHE1ME-G0pL3oPQR-e6IoodyvU2rtWSPugsVtFLAGtMMfBBUdjkkd6yfO-aJWADBRVWGgim-WdoTQo0GfLx8u_Wn6nz_AU3g0Q1rdksEIaAq8d72KrmW0RejfqYTfM8-ZaPdujSizf36IFtchsC8vT_SK_-HqJbap_tQtijCQN_BXgApQ"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#ba1a1a] text-[#ffffff] text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded">Ending Soon</span>
                </div>
              </div>
              <div className="p-[24px] flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-[8px]">
                  <h3 className="font-geist text-[24px] leading-[1.3] font-semibold text-[#0b1c30] leading-tight">Regional Start-up Pitch Deck Competition</h3>
                </div>
                <p className="font-geist text-[14px] leading-[1] tracking-[0.01em] font-medium text-[#737686] mb-[24px]">by VentureHub Global</p>

                <div className="flex items-center gap-[40px] mb-[40px]">
                  <div className="flex flex-col">
                    <span className="font-geist text-[12px] leading-[1] font-semibold text-[#737686] uppercase tracking-tight mb-1">Votes</span>
                    <span className="font-geist text-[24px] leading-[1.3] font-semibold text-[#004ac6]">3.2K</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-geist text-[12px] leading-[1] font-semibold text-[#737686] uppercase tracking-tight mb-1">Ends In</span>
                    <span className="font-geist text-[24px] leading-[1.3] font-semibold text-[#ba1a1a]">2h 14m</span>
                  </div>
                </div>

                <button className="mt-auto w-full py-[16px] border border-[#004ac6] text-[#004ac6] font-geist text-[14px] leading-[1] tracking-[0.01em] font-medium rounded-lg hover:bg-[#2563eb] hover:text-[#eeefff] transition-all">
                  View Contest
                </button>
              </div>
            </article>

            {/* Card 3 */}
            <article className="bg-[#ffffff] rounded-xl overflow-hidden soft-glow-card border border-[#c3c6d7] group flex flex-col">
              <div className="relative h-56 overflow-hidden">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  alt="A clean, minimalist workspace featuring a high-end designer laptop."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCX6juD7qHKHVjXWxLVBjKEfBWeTUXpL1akn2Uw4Y1bf03tVWNZlJozYiAzuKPLzBI789heFAHXLyeNqT4k9Xhpra4OtwBk8nL1oyRqriECBSbo0cN5BgScT50fSMxAEAhu3w9xG5nMS1CAxE1rO925ztpSMkz6UmIxKVicIsdp8xYomtnSurNlIoJuVtxVqlGMTCkC1rXx9zeH3-QOZVDeiiOjkGJ-SVm2StwYlVmQ1P2YrvdDUyRv"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#8a4cfc] text-[#fffbff] text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded">New</span>
                </div>
              </div>
              <div className="p-[24px] flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-[8px]">
                  <h3 className="font-geist text-[24px] leading-[1.3] font-semibold text-[#0b1c30] leading-tight">UX Excellence Award: SaaS 2.0</h3>
                </div>
                <p className="font-geist text-[14px] leading-[1] tracking-[0.01em] font-medium text-[#737686] mb-[24px]">by DesignMasters Collective</p>

                <div className="flex items-center gap-[40px] mb-[40px]">
                  <div className="flex flex-col">
                    <span className="font-geist text-[12px] leading-[1] font-semibold text-[#737686] uppercase tracking-tight mb-1">Votes</span>
                    <span className="font-geist text-[24px] leading-[1.3] font-semibold text-[#004ac6]">842</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-geist text-[12px] leading-[1] font-semibold text-[#737686] uppercase tracking-tight mb-1">Ends In</span>
                    <span className="font-geist text-[24px] leading-[1.3] font-semibold text-[#0b1c30]">30d</span>
                  </div>
                </div>

                <button className="mt-auto w-full py-[16px] border border-[#004ac6] text-[#004ac6] font-geist text-[14px] leading-[1] tracking-[0.01em] font-medium rounded-lg hover:bg-[#2563eb] hover:text-[#eeefff] transition-all">
                  View Contest
                </button>
              </div>
            </article>

            {/* Card 4 */}
            <article className="bg-[#ffffff] rounded-xl overflow-hidden soft-glow-card border border-[#c3c6d7] group flex flex-col">
              <div className="relative h-56 overflow-hidden">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  alt="A high-contrast cinematic shot of a modern concert hall stage under focused spotlights."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBl60FCVCf02E-AxWbdTwh4r9tvZwno_22AmnsTefd_cBOPs3ZqXKJdo5etHXteaHu35ghSGmwT-iRal4O6kGCockiko7hmxFyCJGbH50IxzFJUFSuf5pc_1ORIbUFb1wimZbvAtVAaKqlmQEr6B3rpdTAarRGowmVZDJuiCwErUEQVqx9G3sWlkDCBVv_iuW381fsRM1Wp_wOdU08Vf5UiiqS0RUzFLo0LBO-l79GYBjHCp1i8-u0V"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#004ac6] text-[#ffffff] text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded">Active</span>
                </div>
              </div>
              <div className="p-[24px] flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-[8px]">
                  <h3 className="font-geist text-[24px] leading-[1.3] font-semibold text-[#0b1c30] leading-tight">Global Independent Film Festival</h3>
                </div>
                <p className="font-geist text-[14px] leading-[1] tracking-[0.01em] font-medium text-[#737686] mb-[24px]">by CinemaLink Pro</p>

                <div className="flex items-center gap-[40px] mb-[40px]">
                  <div className="flex flex-col">
                    <span className="font-geist text-[12px] leading-[1] font-semibold text-[#737686] uppercase tracking-tight mb-1">Votes</span>
                    <span className="font-geist text-[24px] leading-[1.3] font-semibold text-[#004ac6]">45.1K</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-geist text-[12px] leading-[1] font-semibold text-[#737686] uppercase tracking-tight mb-1">Ends In</span>
                    <span className="font-geist text-[24px] leading-[1.3] font-semibold text-[#0b1c30]">5d</span>
                  </div>
                </div>

                <button className="mt-auto w-full py-[16px] border border-[#004ac6] text-[#004ac6] font-geist text-[14px] leading-[1] tracking-[0.01em] font-medium rounded-lg hover:bg-[#2563eb] hover:text-[#eeefff] transition-all">
                  View Contest
                </button>
              </div>
            </article>

            {/* Card 5 */}
            <article className="bg-[#ffffff] rounded-xl overflow-hidden soft-glow-card border border-[#c3c6d7] group flex flex-col">
              <div className="relative h-56 overflow-hidden">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  alt="A close-up of a complex circuit board with neon blue data streams flowing through glowing pathways."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAn3maKkY0xn2rdJarBJaoSxqWsU3ZZQeQaf4446_ccKs-0fKwg2wRqH1A6rLosATLaqSJs37hE8BaSHU3Hde-ztgNfvWnRhARwAPnx3tG0KYMHHAyIoIzQ2fO-Wwmg3gjIu9-BJUEeQyT-OVkcbYSKRH7oSMtnxtXOaaZ9dFhhq1Nn-OsrnlFR44H6AoEgtziro3PS-Mmh-z7pQRNRaHUbI4iCKntg77wnKvdMGfwGC3rHzml81pCT"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#004ac6] text-[#ffffff] text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded">Active</span>
                </div>
              </div>
              <div className="p-[24px] flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-[8px]">
                  <h3 className="font-geist text-[24px] leading-[1.3] font-semibold text-[#0b1c30] leading-tight">Cyber Security Innovation Challenge</h3>
                </div>
                <p className="font-geist text-[14px] leading-[1] tracking-[0.01em] font-medium text-[#737686] mb-[24px]">by SecureNet Systems</p>

                <div className="flex items-center gap-[40px] mb-[40px]">
                  <div className="flex flex-col">
                    <span className="font-geist text-[12px] leading-[1] font-semibold text-[#737686] uppercase tracking-tight mb-1">Votes</span>
                    <span className="font-geist text-[24px] leading-[1.3] font-semibold text-[#004ac6]">1.1K</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-geist text-[12px] leading-[1] font-semibold text-[#737686] uppercase tracking-tight mb-1">Ends In</span>
                    <span className="font-geist text-[24px] leading-[1.3] font-semibold text-[#0b1c30]">22d</span>
                  </div>
                </div>

                <button className="mt-auto w-full py-[16px] border border-[#004ac6] text-[#004ac6] font-geist text-[14px] leading-[1] tracking-[0.01em] font-medium rounded-lg hover:bg-[#2563eb] hover:text-[#eeefff] transition-all">
                  View Contest
                </button>
              </div>
            </article>

            {/* Card 6 */}
            <article className="bg-[#ffffff] rounded-xl overflow-hidden soft-glow-card border border-[#c3c6d7] group flex flex-col">
              <div className="relative h-56 overflow-hidden">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  alt="A sophisticated digital interface displaying clean data visualizations, interactive heatmaps, and financial metrics."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLlRTElPzQdx3_jj_afw4fWhzK8uuVidVeBQjJ_oV41yylC9Y67I4P7WC008WdqyCZur_580U25hvinz41dHQLAVXTZ6eHtpbKKt4lrRWxCOjB5ZGjTB45u0ab78GCy89IlgXdrJBxi-WtgmoWV42_Q4URAdCtguYE_R932HHeHj83USq1sr8xcJfK-wOgSC4TDU2alMo-bAi26SkbxLx758Zf3MudByhbCxWN_7QFMieltv-v6YHC"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#004ac6] text-[#ffffff] text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded">Active</span>
                </div>
              </div>
              <div className="p-[24px] flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-[8px]">
                  <h3 className="font-geist text-[24px] leading-[1.3] font-semibold text-[#0b1c30] leading-tight">Fintech UI Challenge: 2024 Edition</h3>
                </div>
                <p className="font-geist text-[14px] leading-[1] tracking-[0.01em] font-medium text-[#737686] mb-[24px]">by FinFlow Academy</p>

                <div className="flex items-center gap-[40px] mb-[40px]">
                  <div className="flex flex-col">
                    <span className="font-geist text-[12px] leading-[1] font-semibold text-[#737686] uppercase tracking-tight mb-1">Votes</span>
                    <span className="font-geist text-[24px] leading-[1.3] font-semibold text-[#004ac6]">5.9K</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-geist text-[12px] leading-[1] font-semibold text-[#737686] uppercase tracking-tight mb-1">Ends In</span>
                    <span className="font-geist text-[24px] leading-[1.3] font-semibold text-[#0b1c30]">11d</span>
                  </div>
                </div>

                <button className="mt-auto w-full py-[16px] border border-[#004ac6] text-[#004ac6] font-geist text-[14px] leading-[1] tracking-[0.01em] font-medium rounded-lg hover:bg-[#2563eb] hover:text-[#eeefff] transition-all">
                  View Contest
                </button>
              </div>
            </article>

          </section>

          {/* Pagination */}
          <nav className="mt-[64px] flex flex-col md:flex-row items-center justify-between gap-[24px] border-t border-[#c3c6d7] pt-[40px]">
            <p className="font-inter text-[14px] leading-[1.5] text-[#737686]">Showing 1 to 6 of 48 contests</p>
            <div className="flex items-center gap-[4px]">
              <button className="p-[8px] rounded-lg hover:bg-[#e5eeff] transition-colors disabled:opacity-30 text-[#434655]" disabled>
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#004ac6] text-[#ffffff] font-geist text-[14px] leading-[1] tracking-[0.01em] font-medium">1</button>
              <button className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-[#e5eeff] font-geist text-[14px] leading-[1] tracking-[0.01em] font-medium text-[#434655] transition-colors">2</button>
              <button className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-[#e5eeff] font-geist text-[14px] leading-[1] tracking-[0.01em] font-medium text-[#434655] transition-colors">3</button>
              <span className="px-[4px] text-[#737686]">...</span>
              <button className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-[#e5eeff] font-geist text-[14px] leading-[1] tracking-[0.01em] font-medium text-[#434655] transition-colors">8</button>
              <button className="p-[8px] rounded-lg hover:bg-[#e5eeff] transition-colors text-[#434655]">
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
          </nav>
        </main>

        <Footer />
      </div>
    </>
  );
}