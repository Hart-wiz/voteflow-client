"use client"
import React, { useState } from 'react';

// --- Data Models ---
const contests = [
  {
    title: "National Wildlife Photography 2024",
    category: "Photography",
    author: "National Geographic Society",
    votes: "12.4K",
    time: "14d",
    tagText: "Active",
    tagStyle: "primary", // primary | error | secondary
    timeStyle: "default", // default | error
    imgSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuD_pCAfvs6JVfD1lqUPd_ffZR-hU7b8ewjHrhw_AgtkZXNZ_gSWJ4-eN0YSuhHoOimc_fW1pWNjHO79AoAXkqhosnq56T4MBPPbqyvS58UoJsIKNIb8y1eHjGIAoVnR6WQmzXDyb9hChJqMC8vCtQeqwDvGOepRi-awkOF6MTmuVCp9TGtEFKSB-qd5bfE-zuU7GAqozdT6g60dbx1BxwsqzIULWuNWDyPEYJlK_prE1kONT2yFmb8A",
    imgAlt: "A wide panoramic landscape of snow-capped mountains reflected in a crystal-clear alpine lake at sunrise."
  },
  {
    title: "Regional Start-up Pitch Deck Competition",
    category: "Startup Pitch",
    author: "VentureHub Global",
    votes: "3.2K",
    time: "2h 14m",
    tagText: "Ending Soon",
    tagStyle: "error",
    timeStyle: "error",
    imgSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuDdKqDIchFJ9YzwuZk5wNVVflIiDXDWwV6qZcTexW6IF2uoWEXctOPpOxVdDlmryIi18dpNHE1ME-G0pL3oPQR-e6IoodyvU2rtWSPugsVtFLAGtMMfBBUdjkkd6yfO-aJWADBRVWGgim-WdoTQo0GfLx8u_Wn6nz_AU3g0Q1rdksEIaAq8d72KrmW0RejfqYTfM8-ZaPdujSizf36IFtchsC8vT_SK_-HqJbap_tQtijCQN_BXgApQ",
    imgAlt: "A futuristic startup boardroom with glass walls and holographic displays showing financial growth charts."
  },
  {
    title: "UX Excellence Award: SaaS 2.0",
    category: "UI/UX Design",
    author: "DesignMasters Collective",
    votes: "842",
    time: "30d",
    tagText: "New",
    tagStyle: "secondary",
    timeStyle: "default",
    imgSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuCX6juD7qHKHVjXWxLVBjKEfBWeTUXpL1akn2Uw4Y1bf03tVWNZlJozYiAzuKPLzBI789heFAHXLyeNqT4k9Xhpra4OtwBk8nL1oyRqriECBSbo0cN5BgScT50fSMxAEAhu3w9xG5nMS1CAxE1rO925ztpSMkz6UmIxKVicIsdp8xYomtnSurNlIoJuVtxVqlGMTCkC1rXx9zeH3-QOZVDeiiOjkGJ-SVm2StwYlVmQ1P2YrvdDUyRv",
    imgAlt: "A clean, minimalist workspace featuring a high-end designer laptop, a sketchbook with wireframe drawings, and an ergonomic chair."
  },
  {
    title: "Global Independent Film Festival",
    category: "Non-Profit",
    author: "CinemaLink Pro",
    votes: "45.1K",
    time: "5d",
    tagText: "Active",
    tagStyle: "primary",
    timeStyle: "default",
    imgSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuBl60FCVCf02E-AxWbdTwh4r9tvZwno_22AmnsTefd_cBOPs3ZqXKJdo5etHXteaHu35ghSGmwT-iRal4O6kGCockiko7hmxFyCJGbH50IxzFJUFSuf5pc_1ORIbUFb1wimZbvAtVAaKqlmQEr6B3rpdTAarRGowmVZDJuiCwErUEQVqx9G3sWlkDCBVv_iuW381fsRM1Wp_wOdU08Vf5UiiqS0RUzFLo0LBO-l79GYBjHCp1i8-u0V",
    imgAlt: "A high-contrast cinematic shot of a modern concert hall stage under focused spotlights."
  },
  {
    title: "Cyber Security Innovation Challenge",
    category: "Startup Pitch",
    author: "SecureNet Systems",
    votes: "1.1K",
    time: "22d",
    tagText: "Active",
    tagStyle: "primary",
    timeStyle: "default",
    imgSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuAn3maKkY0xn2rdJarBJaoSxqWsU3ZZQeQaf4446_ccKs-0fKwg2wRqH1A6rLosATLaqSJs37hE8BaSHU3Hde-ztgNfvWnRhARwAPnx3tG0KYMHHAyIoIzQ2fO-Wwmg3gjIu9-BJUEeQyT-OVkcbYSKRH7oSMtnxtXOaaZ9dFhhq1Nn-OsrnlFR44H6AoEgtziro3PS-Mmh-z7pQRNRaHUbI4iCKntg77wnKvdMGfwGC3rHzml81pCT",
    imgAlt: "A close-up of a complex circuit board with neon blue data streams flowing through glowing pathways."
  },
  {
    title: "Fintech UI Challenge: 2024 Edition",
    category: "UI/UX Design",
    author: "FinFlow Academy",
    votes: "5.9K",
    time: "11d",
    tagText: "Active",
    tagStyle: "primary",
    timeStyle: "default",
    imgSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuBLlRTElPzQdx3_jj_afw4fWhzK8uuVidVeBQjJ_oV41yylC9Y67I4P7WC008WdqyCZur_580U25hvinz41dHQLAVXTZ6eHtpbKKt4lrRWxCOjB5ZGjTB45u0ab78GCy89IlgXdrJBxi-WtgmoWV42_Q4URAdCtguYE_R932HHeHj83USq1sr8xcJfK-wOgSC4TDU2alMo-bAi26SkbxLx758Zf3MudByhbCxWN_7QFMieltv-v6YHC",
    imgAlt: "A sophisticated digital interface displaying clean data visualizations, interactive heatmaps, and financial metrics in a dark mode UI."
  }
];

const categories = [
  "All Categories",
  "Photography",
  "Startup Pitch",
  "UI/UX Design",
  "Non-Profit"
];

// --- Sub-components ---
function ContestCard({ title, author, votes, time, tagText, tagStyle, timeStyle, imgSrc, imgAlt }: { title: string, author: string, votes: string, time: string, tagText: string, tagStyle: string, timeStyle: string, imgSrc: string, imgAlt: string }) {
  const getTagClasses = () => {
    switch (tagStyle) {
      case 'error': return 'bg-[#ba1a1a] text-white';
      case 'secondary': return 'bg-[#8a4cfc] text-[#fffbff]';
      case 'primary': default: return 'bg-[#004ac6] text-white';
    }
  };

  const getTimeClasses = () => {
    return timeStyle === 'error' ? 'text-[#ba1a1a]' : 'text-[#0b1c30]';
  };

  return (
    <article className="bg-white rounded-xl overflow-hidden soft-glow-card border border-[#c3c6d7] group">
      <div className="relative h-56 overflow-hidden">
        <img
          alt={imgAlt}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          src={imgSrc}
        />
        <div className="absolute top-4 left-4">
          <span className={`${getTagClasses()} text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded`}>
            {tagText}
          </span>
        </div>
      </div>
      <div className="p-[24px]">
        <div className="flex justify-between items-start mb-[8px]">
          <h3 className="font-['Geist'] text-[24px] leading-[1.3] font-semibold text-[#0b1c30] leading-tight">
            {title}
          </h3>
        </div>
        <p className="font-['Geist'] text-[14px] leading-[1] font-medium tracking-[0.01em] text-[#737686] mb-[24px]">
          by {author}
        </p>
        <div className="flex items-center gap-[40px] mb-[40px]">
          <div className="flex flex-col">
            <span className="font-['Geist'] text-[12px] leading-[1] font-semibold text-[#737686] uppercase tracking-tight">
              Votes
            </span>
            <span className="font-['Geist'] text-[24px] leading-[1.3] font-semibold text-[#004ac6]">
              {votes}
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-['Geist'] text-[12px] leading-[1] font-semibold text-[#737686] uppercase tracking-tight">
              Ends In
            </span>
            <span className={`font-['Geist'] text-[24px] leading-[1.3] font-semibold ${getTimeClasses()}`}>
              {time}
            </span>
          </div>
        </div>
        <button className="w-full py-[16px] border border-[#004ac6] text-[#004ac6] font-['Geist'] text-[14px] leading-[1] font-medium tracking-[0.01em] rounded-lg hover:bg-[#2563eb] hover:text-[#eeefff] transition-all">
          View Contest
        </button>
      </div>
    </article>
  );
}

// --- Main Page Component ---
export default function DiscoverContests() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [selectedStatus, setSelectedStatus] = useState('All');

  const filteredContests = contests.filter(contest => {
    const matchesSearch = contest.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      contest.author.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All Categories' || contest.category === selectedCategory;
    const matchesStatus = selectedStatus === 'All' ||
      (selectedStatus === 'Active' && (contest.tagText === 'Active' || contest.tagText === 'New')) ||
      (selectedStatus === 'Ending' && contest.tagText === 'Ending Soon');

    return matchesSearch && matchesCategory && matchesStatus;
  });

  return (
    <div className="bg-[#f8f9ff] text-[#0b1c30] font-['Inter'] text-[16px] leading-[1.5] font-normal selection:bg-[#dbe1ff] selection:text-[#00174b] min-h-screen flex flex-col">
      {/* Inject Fonts and Custom Styles */}
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Geist:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      <style dangerouslySetInnerHTML={{
        __html: `
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
      `}} />



      {/* Main Content */}
      <main className="flex-grow max-w-[1280px] mx-auto px-[16px] md:px-[48px] py-[40px] w-full">
        {/* Hero Section */}
        <header className="mb-[64px] text-center md:text-left">
          <h1 className="font-['Geist'] text-[48px] leading-[1.1] tracking-[-0.02em] font-bold text-[#0b1c30] mb-[16px]">Explore & Vote</h1>
          <p className="font-['Inter'] text-[18px] leading-[1.6] font-normal text-[#434655] max-w-2xl">
            Participate in verified, high-stakes contests from around the globe. Your voice shapes the future of technology, art, and leadership.
          </p>
        </header>

        {/* Search & Filter Bar */}
        <section className="bg-[#eff4ff] p-[24px] rounded-xl mb-[40px] border border-[#c3c6d7]">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-[16px] items-end">
            <div className="md:col-span-5 space-y-[4px]">
              <label className="font-['Geist'] text-[12px] leading-[1] font-semibold text-[#737686] ml-1">Search Contests</label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#737686]">search</span>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by name or organizer..."
                  className="w-full pl-10 pr-[16px] py-[8px] bg-white border border-[#c3c6d7] rounded-lg focus:ring-2 focus:ring-[#004ac6]/20 focus:border-[#004ac6] outline-none transition-all font-['Inter'] text-[16px] leading-[1.5] font-normal text-[#0b1c30]"
                />
              </div>
            </div>

            <div className="md:col-span-3 space-y-[4px]">
              <label className="font-['Geist'] text-[12px] leading-[1] font-semibold text-[#737686] ml-1">Category</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-[16px] py-[8px] bg-white border border-[#c3c6d7] rounded-lg focus:ring-2 focus:ring-[#004ac6]/20 focus:border-[#004ac6] outline-none appearance-none font-['Inter'] text-[16px] leading-[1.5] font-normal text-[#0b1c30]">
                {categories.map((cat, idx) => (
                  <option key={idx} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            <div className="md:col-span-3 space-y-[4px]">
              <label className="font-['Geist'] text-[12px] leading-[1] font-semibold text-[#737686] ml-1">Status</label>
              <div className="flex bg-[#dce9ff] p-1 rounded-lg">
                <button
                  onClick={() => setSelectedStatus('All')}
                  className={`flex-1 px-[8px] py-1.5 transition-colors font-['Geist'] text-[14px] leading-[1] font-medium tracking-[0.01em] ${selectedStatus === 'All' ? 'bg-white shadow-sm rounded-md text-[#004ac6]' : 'text-[#434655] hover:text-[#004ac6]'}`}>All</button>
                <button
                  onClick={() => setSelectedStatus('Active')}
                  className={`flex-1 px-[8px] py-1.5 transition-colors font-['Geist'] text-[14px] leading-[1] font-medium tracking-[0.01em] ${selectedStatus === 'Active' ? 'bg-white shadow-sm rounded-md text-[#004ac6]' : 'text-[#434655] hover:text-[#004ac6]'}`}>Active</button>
                <button
                  onClick={() => setSelectedStatus('Ending')}
                  className={`flex-1 px-[8px] py-1.5 transition-colors font-['Geist'] text-[14px] leading-[1] font-medium tracking-[0.01em] ${selectedStatus === 'Ending' ? 'bg-white shadow-sm rounded-md text-[#004ac6]' : 'text-[#434655] hover:text-[#004ac6]'}`}>Ending</button>
              </div>
            </div>

            <div className="md:col-span-1">
              <button className="w-full h-[42px] flex items-center justify-center bg-[#2563eb] text-[#eeefff] hover:bg-[#004ac6] hover:text-white rounded-lg transition-all">
                <span className="material-symbols-outlined">tune</span>
              </button>
            </div>
          </div>
        </section>

        {/* Contest Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[40px]">
          {filteredContests.length > 0 ? (
            filteredContests.map((contest, idx) => (
              <ContestCard key={idx} {...contest} />
            ))
          ) : (
            <div className="col-span-full py-12 text-center text-[#737686] font-['Inter'] text-[16px]">
              No contests found matching your criteria.
            </div>
          )}
        </section>

        {/* Pagination */}
        <nav className="mt-[64px] flex flex-col md:flex-row items-center justify-between gap-[24px] border-t border-[#c3c6d7] pt-[40px]">
          <p className="font-['Inter'] text-[14px] leading-[1.5] font-normal text-[#737686]">
            Showing {filteredContests.length > 0 ? 1 : 0} to {filteredContests.length} of {contests.length} contests
          </p>
          <div className="flex items-center gap-[4px]">
            <button className="p-[8px] rounded-lg hover:bg-[#e5eeff] transition-colors disabled:opacity-30" disabled>
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#004ac6] text-white font-['Geist'] text-[14px] leading-[1] font-medium tracking-[0.01em]">1</button>
            <button className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-[#e5eeff] font-['Geist'] text-[14px] leading-[1] font-medium tracking-[0.01em] text-[#434655] transition-colors">2</button>
            <button className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-[#e5eeff] font-['Geist'] text-[14px] leading-[1] font-medium tracking-[0.01em] text-[#434655] transition-colors">3</button>
            <span className="px-[4px] text-[#737686]">...</span>
            <button className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-[#e5eeff] font-['Geist'] text-[14px] leading-[1] font-medium tracking-[0.01em] text-[#434655] transition-colors">8</button>
            <button className="p-[8px] rounded-lg hover:bg-[#e5eeff] transition-colors">
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </nav>
      </main>


    </div>
  );
}