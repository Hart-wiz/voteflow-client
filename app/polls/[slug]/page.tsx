"use client"
import React from 'react';

// --- Data Models ---
const nominees = [
  {
    title: "Nexus Analytics",
    author: "Sarah Chen",
    description: "An AI-driven predictive analytics engine that helps enterprise teams forecast resource bottlenecks before they occur, utilizing localized machine learning models.",
    imgSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuCk42vWK7afB8TGzIExblCSrZ5SNY_UzbHSYkOP52ATCYh-X5N_o23YVmrcvTZOEHo_E3Yvw-BqqIOqcDCmHP5tJ1KM7CRw_LPjv0CjiQPqqBvLxQUKm0yyW3iE8am9pEuCdDamKkJgIwfnGxmVkF_1e7TfkcQT3eAqfu470X8COsX_18kj-6FAVRpi9Nv2HbnFkITW9yCKT1-jD-OK7iWLP-mMePNBk1RRYV6AdSMKUhIV7Gz69dWz",
    imgAlt: "A clean, modern data dashboard interface displayed on a high-resolution screen in a bright, well-lit studio environment. The UI features crisp charts and graphs in cool blues and whites, embodying a high-end SaaS software aesthetic."
  },
  {
    title: "CollabSync",
    author: "Team Flow",
    description: "A decentralized workspace platform that merges real-time document editing with asynchronous video standups, designed specifically for globally distributed engineering teams.",
    imgSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuB-TNAOif1QVy4n98XXdENhno3VDDk8e8Jqo2DklOlgqUUY4p4vToUB2pyPlxpNDJIIJ88ciL0aML8oE3p-O_EQY7lI1Y5lerMlIuJLYd8wrpI4axoOSMyBalGV0SQzrD7glK-pVYZbya1qfScTVK_mALuZ9wCDM9M8JIGDPYZvq1ZjctYn18Ys-DKrgGio6KAq1GNf8qmNTHYUCr16KdZGZtNvkJEtPosE1HmKNrSQT9CiyXu0U2Fn",
    imgAlt: "A diverse team of software developers collaborating around a sleek, modern workstation in a minimalist, bright office. The setting suggests agile development and professional teamwork, with soft natural light enhancing the modern corporate vibe."
  },
  {
    title: "Guardian Protocol",
    author: "Marcus Johnson",
    description: "A lightweight zero-knowledge proof API layer that allows developers to integrate biometric authentication without storing raw user data on their servers.",
    imgSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuDAzGbKRl-ZBxeejxlV8v2o2v8jmrL11J4EaCNIW-vdhRDiBumx7LXTDUIafCBS0HHGnNaHvHUwXPYTlPA48jhioHyzJsKI43fh5q8vMGrdkqme5jHtdT-IUasP_OJckDglgnZqKAMj7WZtyIbBSuPVGiA8D7AoSCrNDbtcM85dwKslpv9HNoyXdHcBh3CFV3fpDWeKQzUGkii7-55eDXEOkyC6Su2Y9uUFP6PYhJAQMqdpGGUHWGzt",
    imgAlt: "Close-up of glowing code on a high-resolution dark mode monitor, focusing on intricate syntax highlighting. The environment is dark and focused, representing deep tech and advanced software engineering with a premium, professional edge."
  },
  {
    title: "Aura UI",
    author: "Elena Rodriguez",
    description: "An accessible, highly performant component library built on WebGL that brings fluid, console-quality micro-interactions to standard web applications.",
    imgSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuD0ulkTR_Mx_DI51OwmsNGVQQZ1dQkrt4Pj1ZFaG1vZ6TUcSif8jV86ib1H9iwoiMor8eWhJY41LZz45qr2Y78Zh_edGyEu9PzZ3kIrci98HICG8V3lvP8gsG9Y_LyBUykhr1CfZzQeOayCiUhbx2HjF3HD61pFj5UA_ijW-whE9HUfm3LLfjT7Z-Vqhw_8jAXqdcZxfrXIHU9vyONaIk20_UcrWlFLP5_jYa1Ae-JVv3PD3-2qnqr0",
    imgAlt: "Abstract, generative digital art featuring smooth, flowing 3D geometric shapes in a bright, ethereal studio setting. The soft lighting and clean aesthetics represent modern, elegant frontend design and fluid user experiences."
  }
];

const countdowns = [
  { value: "14", label: "Days" },
  { value: "08", label: "Hours" },
  { value: "45", label: "Mins" },
];

const footerLinks = [
  "Privacy Policy",
  "Terms of Service",
  "Support",
  "Contact"
];

// --- Sub-components ---
function NomineeCard({ title, author, description, imgSrc, imgAlt }: { title: string; author: string; description: string; imgSrc: string; imgAlt: string; }) {
  return (
    <div className="bg-[#ffffff] rounded-xl border border-[#c3c6d7] flex flex-col overflow-hidden hover-lift group">
      <div className="h-48 relative overflow-hidden bg-[#eff4ff]">
        <img
          alt={imgAlt}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          src={imgSrc}
        />
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <div className="mb-4">
          <h3 className="font-['Geist'] text-[24px] leading-[1.3] font-semibold text-[#0b1c30] mb-1">{title}</h3>
          <p className="font-['Inter'] text-[14px] leading-[1.5] font-medium text-[#004ac6] mb-2">by {author}</p>
          <p className="font-['Inter'] text-[14px] leading-[1.5] font-normal text-[#434655] line-clamp-3">
            {description}
          </p>
        </div>
        <div className="mt-auto pt-4 border-t border-[#c3c6d7] flex justify-between items-center">
          <button className="w-full inline-flex items-center justify-center px-4 py-2 bg-gradient-to-b from-[#004ac6] to-[#003ea8] text-[#ffffff] rounded font-['Geist'] text-[14px] leading-[1] font-medium tracking-[0.01em] hover:opacity-90 transition-opacity cursor-pointer">
            <span className="material-symbols-outlined mr-2 text-sm">thumb_up</span>
            Vote Now
          </button>
        </div>
      </div>
    </div>
  );
}

// --- Main App Component ---
export default function App() {
  return (
    <div className="bg-[#f8f9ff] text-[#0b1c30] antialiased min-h-screen flex flex-col font-['Inter'] text-[16px] leading-[1.5] font-normal">
      {/* Inject Fonts and Custom Styles required by the original design */}
      <link href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      <style dangerouslySetInnerHTML={{
        __html: `
        .material-symbols-outlined { font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24; }
        .material-symbols-outlined[data-weight="fill"] { font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24; }
        .soft-glow-shadow { box-shadow: 0 2px 4px 0 rgba(0, 74, 198, 0.04); }
        .floating-shadow { box-shadow: 0 10px 20px 0 rgba(0, 74, 198, 0.08); }
        .hover-lift { transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.2s cubic-bezier(0.4, 0, 0.2, 1); }
        .hover-lift:hover { transform: translateY(-2px); box-shadow: 0 10px 20px 0 rgba(0, 74, 198, 0.08); }
      `}} />



      {/* Main Content */}
      <main className="flex-grow w-full max-w-[1280px] mx-auto px-[16px] md:px-[48px] py-[40px]">
        {/* Hero Section */}
        <section className="mb-12 relative rounded-xl overflow-hidden bg-[#eff4ff] border border-[#c3c6d7] soft-glow-shadow">
          <div className="absolute inset-0 z-0">
            <img
              alt="A highly detailed, professional view of a global network visualization with glowing interconnected lines over a deep blue and black Earth."
              className="w-full h-full object-cover opacity-20"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuARdLEIhu3Hpcgqzk90rwy2oZIkatKHw2YalVwCsYXxNafbchKUwIIIZsQ72tbxMzBshAKTCrPkCtUFZmEuk-3EBm8_wKqchrxV2fHRk0W_3bhSYOY_mpwFy9G2mLhZ2MCND-jp0QTKRjQJIWGz0dKZdlH0etgryB3kOk_ohYEeDKerXNLb5wwevVgZdw3bl6qHIzoAp1PNyALvHuHKkdWJXjrcaxOZ1mREiBItVktNtDXrq8e4hcCL"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#eff4ff] via-[#eff4ff]/90 to-transparent"></div>
          </div>
          <div className="relative z-10 p-[24px] md:p-[40px] lg:p-[64px] max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="inline-flex items-center px-2 py-1 rounded-full bg-[#d3e4fe] text-[#004ac6] font-['Geist'] text-[12px] leading-[1] font-semibold">
                <span className="w-2 h-2 rounded-full bg-[#004ac6] mr-2 animate-pulse"></span>
                Active Contest
              </span>
              <span className="text-[#434655] font-['Geist'] text-[12px] leading-[1] font-semibold uppercase tracking-wider">
                By TechGlobal Council
              </span>
            </div>
            <h1 className="font-['Geist'] text-[36px] leading-[1.2] tracking-[-0.02em] font-bold md:text-[48px] md:leading-[1.1] text-[#0b1c30] mb-4">
              Global Tech Innovator Awards 2024
            </h1>
            <p className="font-['Inter'] text-[18px] leading-[1.6] font-normal text-[#434655] mb-8 max-w-2xl">
              Recognizing the most disruptive and visionary software projects of the year. Cast your vote securely below to decide the People's Choice winner.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <button className="inline-flex items-center justify-center px-6 py-3 bg-[#ffffff] border border-[#c3c6d7] rounded-lg font-['Geist'] text-[14px] leading-[1] font-medium tracking-[0.01em] text-[#0b1c30] hover:bg-[#eff4ff] transition-colors hover-lift">
                <span className="material-symbols-outlined mr-2">share</span>
                Share Contest
              </button>
              <div className="flex items-center gap-2 text-[#434655] font-['Inter'] text-[14px] leading-[1.5] font-normal bg-[#ffffff] px-4 py-2 rounded-lg border border-[#c3c6d7]">
                <span className="material-symbols-outlined text-[#004ac6]" data-weight="fill">verified_user</span>
                Secure, 1-vote-per-person system
              </div>
            </div>
          </div>
        </section>

        {/* Layout Grid: Sidebar + Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-[24px]">
          {/* Sidebar (Sticky) */}
          <aside className="lg:col-span-4 space-y-[24px]">
            <div className="sticky top-24 space-y-[24px]">

              {/* Countdown Card */}
              <div className="bg-[#ffffff] rounded-xl border border-[#c3c6d7] soft-glow-shadow overflow-hidden">
                <div className="p-4 border-b border-[#c3c6d7] bg-[#eff4ff]/50">
                  <h2 className="font-['Geist'] text-[24px] leading-[1.3] font-semibold text-[#0b1c30] flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#004ac6]">timer</span>
                    Voting Ends In
                  </h2>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-3 gap-2 text-center">
                    {countdowns.map((item, idx) => (
                      <div key={idx} className="bg-[#e5eeff] p-3 rounded-lg border border-[#cbdbf5]">
                        <div className="font-['Geist'] text-[48px] leading-[1.1] font-bold tracking-[-0.02em] text-[#004ac6]">{item.value}</div>
                        <div className="font-['Geist'] text-[12px] leading-[1] font-semibold text-[#434655] mt-1 uppercase">{item.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Live Stats Card */}
              <div className="bg-[#ffffff] rounded-xl border border-[#c3c6d7] soft-glow-shadow overflow-hidden">
                <div className="p-4 border-b border-[#c3c6d7] bg-[#eff4ff]/50">
                  <h2 className="font-['Geist'] text-[24px] leading-[1.3] font-semibold text-[#0b1c30] flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#712ae2]">monitoring</span>
                    Live Statistics
                  </h2>
                </div>
                <div className="p-6 space-y-4">
                  <div>
                    <div className="flex justify-between items-end mb-1">
                      <span className="font-['Geist'] text-[14px] leading-[1] font-medium tracking-[0.01em] text-[#434655]">Total Votes Cast</span>
                      <span className="font-['Geist'] text-[24px] leading-[1.3] font-semibold text-[#0b1c30]">142,854</span>
                    </div>
                    <div className="h-2 w-full bg-[#dbe1ff] rounded-full overflow-hidden">
                      <div className="h-full bg-[#712ae2] w-3/4 rounded-full"></div>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-[#c3c6d7]">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-[#737686]">group</span>
                        <span className="font-['Inter'] text-[16px] leading-[1.5] font-normal text-[#434655]">Unique Participants</span>
                      </div>
                      <span className="font-['Geist'] text-[24px] leading-[1.3] font-semibold text-[#0b1c30]">89,210</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content: Contestants */}
          <div className="lg:col-span-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="font-['Geist'] text-[32px] leading-[1.25] tracking-[-0.01em] font-semibold text-[#0b1c30]">Nominees</h2>
              <div className="flex items-center gap-2">
                <span className="font-['Inter'] text-[14px] leading-[1.5] font-normal text-[#434655]">Sort by:</span>
                <select className="bg-[#ffffff] border border-[#c3c6d7] rounded font-['Inter'] text-[14px] leading-[1.5] font-normal text-[#0b1c30] py-1 px-2 focus:ring-2 focus:ring-[#004ac6]/20 focus:border-[#004ac6] outline-none cursor-pointer">
                  <option>Alphabetical A-Z</option>
                  <option>Randomize</option>
                </select>
              </div>
            </div>

            {/* Iterating Nominee Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
              {nominees.map((nominee, idx) => (
                <NomineeCard
                  key={idx}
                  title={nominee.title}
                  author={nominee.author}
                  description={nominee.description}
                  imgSrc={nominee.imgSrc}
                  imgAlt={nominee.imgAlt}
                />
              ))}
            </div>
          </div>
        </div>
      </main>


    </div>
  );
}