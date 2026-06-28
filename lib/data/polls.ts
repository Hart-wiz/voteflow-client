import type { Poll } from '@/lib/types';

// ============================================================
// VoteFlow — Consolidated Mock Data
// Single source of truth. Replace with API calls in production.
// ============================================================

export const polls: Poll[] = [
  {
    slug: 'national-wildlife-photography-2024',
    title: 'National Wildlife Photography 2024',
    organizer: 'National Geographic Society',
    category: 'Photography',
    description:
      'Celebrate the raw beauty of the natural world. Submit and vote for the most breathtaking wildlife photographs captured this year from photographers across the globe.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD_pCAfvs6JVfD1lqUPd_ffZR-hU7b8ewjHrhw_AgtkZXNZ_gSWJ4-eN0YSuhHoOimc_fW1pWNjHO79AoAXkqhosnq56T4MBPPbqyvS58UoJsIKNIb8y1eHjGIAoVnR6WQmzXDyb9hChJqMC8vCtQeqwDvGOepRi-awkOF6MTmuVCp9TGtEFKSB-qd5bfE-zuU7GAqozdT6g60dbx1BxwsqzIULWuNWDyPEYJlK_prE1kONT2yFmb8A',
    status: 'active',
    votes: '12.4K',
    votesCount: 12400,
    endsIn: '14d',
    endsAt: '2026-07-12T23:59:59Z',
    isPaid: false,
    tags: ['photography', 'wildlife', 'nature'],
    contestants: [
      {
        id: 'nwp-1',
        name: 'Arctic Silence',
        author: 'Erik Larsson',
        description: 'A polar bear resting on a dwindling ice floe at dusk, captured during a six-month expedition to the Svalbard archipelago.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCk42vWK7afB8TGzIExblCSrZ5SNY_UzbHSYkOP52ATCYh-X5N_o23YVmrcvTZOEHo_E3Yvw-BqqIOqcDCmHP5tJ1KM7CRw_LPjv0CjiQPqqBvLxQUKm0yyW3iE8am9pEuCdDamKkJgIwfnGxmVkF_1e7TfkcQT3eAqfu470X8COsX_18kj-6FAVRpi9Nv2HbnFkITW9yCKT1-jD-OK7iWLP-mMePNBk1RRYV6AdSMKUhIV7Gz69dWz',
        votes: 4821,
        percentage: 39,
      },
      {
        id: 'nwp-2',
        name: 'Monsoon Hunt',
        author: 'Priya Sharma',
        description: 'A Bengal tiger wading through floodwaters in the Sundarbans mangrove delta, shot during peak monsoon season.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB-TNAOif1QVy4n98XXdENhno3VDDk8e8Jqo2DklOlgqUUY4p4vToUB2pyPlxpNDJIIJ88ciL0aML8oE3p-O_EQY7lI1Y5lerMlIuJLYd8wrpI4axoOSMyBalGV0SQzrD7glK-pVYZbya1qfScTVK_mALuZ9wCDM9M8JIGDPYZvq1ZjctYn18Ys-DKrgGio6KAq1GNf8qmNTHYUCr16KdZGZtNvkJEtPosE1HmKNrSQT9CiyXu0U2Fn',
        votes: 5310,
        percentage: 43,
      },
      {
        id: 'nwp-3',
        name: 'Desert Bloom',
        author: 'Fatima Al-Hassan',
        description: 'An Arabian sand gazelle grazing among rare desert wildflowers following exceptional rainfall in the Empty Quarter.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDAzGbKRl-ZBxeejxlV8v2o2v8jmrL11J4EaCNIW-vdhRDiBumx7LXTDUIafCBS0HHGnNaHvHUwXPYTlPA48jhioHyzJsKI43fh5q8vMGrdkqme5jHtdT-IUasP_OJckDglgnZqKAMj7WZtyIbBSuPVGiA8D7AoSCrNDbtcM85dwKslpv9HNoyXdHcBh3CFV3fpDWeKQzUGkii7-55eDXEOkyC6Su2Y9uUFP6PYhJAQMqdpGGUHWGzt',
        votes: 2269,
        percentage: 18,
      },
    ],
  },
  {
    slug: 'regional-startup-pitch-deck-competition',
    title: 'Regional Start-up Pitch Deck Competition',
    organizer: 'VentureHub Global',
    category: 'Startup Pitch',
    description:
      'The most competitive early-stage startup competition in the region. Pitch your vision to a panel of seasoned investors and win access to funding, mentorship, and industry networks.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDdKqDIchFJ9YzwuZk5wNVVflIiDXDWwV6qZcTexW6IF2uoWEXctOPpOxVdDlmryIi18dpNHE1ME-G0pL3oPQR-e6IoodyvU2rtWSPugsVtFLAGtMMfBBUdjkkd6yfO-aJWADBRVWGgim-WdoTQo0GfLx8u_Wn6nz_AU3g0Q1rdksEIaAq8d72KrmW0RejfqYTfM8-ZaPdujSizf36IFtchsC8vT_SK_-HqJbap_tQtijCQN_BXgApQ',
    status: 'ending_soon',
    votes: '3.2K',
    votesCount: 3200,
    endsIn: '2h 14m',
    endsAt: '2026-06-28T13:00:00Z',
    isPaid: true,
    pricePerVote: 1.5,
    tags: ['startup', 'pitch', 'venture'],
    contestants: [
      {
        id: 'rsp-1',
        name: 'Nexus Analytics',
        author: 'Sarah Chen',
        description: 'An AI-driven predictive analytics engine that helps enterprise teams forecast resource bottlenecks before they occur, utilizing localized machine learning models.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCk42vWK7afB8TGzIExblCSrZ5SNY_UzbHSYkOP52ATCYh-X5N_o23YVmrcvTZOEHo_E3Yvw-BqqIOqcDCmHP5tJ1KM7CRw_LPjv0CjiQPqqBvLxQUKm0yyW3iE8am9pEuCdDamKkJgIwfnGxmVkF_1e7TfkcQT3eAqfu470X8COsX_18kj-6FAVRpi9Nv2HbnFkITW9yCKT1-jD-OK7iWLP-mMePNBk1RRYV6AdSMKUhIV7Gz69dWz',
        votes: 1250,
        percentage: 39,
      },
      {
        id: 'rsp-2',
        name: 'CollabSync',
        author: 'Team Flow',
        description: 'A decentralized workspace platform that merges real-time document editing with asynchronous video standups, designed specifically for globally distributed engineering teams.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB-TNAOif1QVy4n98XXdENhno3VDDk8e8Jqo2DklOlgqUUY4p4vToUB2pyPlxpNDJIIJ88ciL0aML8oE3p-O_EQY7lI1Y5lerMlIuJLYd8wrpI4axoOSMyBalGV0SQzrD7glK-pVYZbya1qfScTVK_mALuZ9wCDM9M8JIGDPYZvq1ZjctYn18Ys-DKrgGio6KAq1GNf8qmNTHYUCr16KdZGZtNvkJEtPosE1HmKNrSQT9CiyXu0U2Fn',
        votes: 1410,
        percentage: 44,
      },
      {
        id: 'rsp-3',
        name: 'Guardian Protocol',
        author: 'Marcus Johnson',
        description: 'A lightweight zero-knowledge proof API layer that allows developers to integrate biometric authentication without storing raw user data on their servers.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDAzGbKRl-ZBxeejxlV8v2o2v8jmrL11J4EaCNIW-vdhRDiBumx7LXTDUIafCBS0HHGnNaHvHUwXPYTlPA48jhioHyzJsKI43fh5q8vMGrdkqme5jHtdT-IUasP_OJckDglgnZqKAMj7WZtyIbBSuPVGiA8D7AoSCrNDbtcM85dwKslpv9HNoyXdHcBh3CFV3fpDWeKQzUGkii7-55eDXEOkyC6Su2Y9uUFP6PYhJAQMqdpGGUHWGzt',
        votes: 540,
        percentage: 17,
      },
    ],
  },
  {
    slug: 'ux-excellence-award-saas-2-0',
    title: 'UX Excellence Award: SaaS 2.0',
    organizer: 'DesignMasters Collective',
    category: 'UI/UX Design',
    description:
      'Recognizing the most innovative and user-centric SaaS product designs of the year. Open to independent designers and agencies worldwide.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCX6juD7qHKHVjXWxLVBjKEfBWeTUXpL1akn2Uw4Y1bf03tVWNZlJozYiAzuKPLzBI789heFAHXLyeNqT4k9Xhpra4OtwBk8nL1oyRqriECBSbo0cN5BgScT50fSMxAEAhu3w9xG5nMS1CAxE1rO925ztpSMkz6UmIxKVicIsdp8xYomtnSurNlIoJuVtxVqlGMTCkC1rXx9zeH3-QOZVDeiiOjkGJ-SVm2StwYlVmQ1P2YrvdDUyRv',
    status: 'new',
    votes: '842',
    votesCount: 842,
    endsIn: '30d',
    endsAt: '2026-07-28T23:59:59Z',
    isPaid: false,
    tags: ['design', 'ux', 'saas'],
    contestants: [
      {
        id: 'ux-1',
        name: 'Aura UI',
        author: 'Elena Rodriguez',
        description: 'An accessible, highly performant component library built on WebGL that brings fluid, console-quality micro-interactions to standard web applications.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD0ulkTR_Mx_DI51OwmsNGVQQZ1dQkrt4Pj1ZFaG1vZ6TUcSif8jV86ib1H9iwoiMor8eWhJY41LZz45qr2Y78Zh_edGyEu9PzZ3kIrci98HICG8V3lvP8gsG9Y_LyBUykhr1CfZzQeOayCiUhbx2HjF3HD61pFj5UA_ijW-whE9HUfm3LLfjT7Z-Vqhw_8jAXqdcZxfrXIHU9vyONaIk20_UcrWlFLP5_jYa1Ae-JVv3PD3-2qnqr0',
        votes: 412,
        percentage: 49,
      },
      {
        id: 'ux-2',
        name: 'FlowState Design',
        author: 'Kenji Watanabe',
        description: 'A revolutionary design system for enterprise dashboards that reduces cognitive load by 40% through adaptive information density algorithms.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBLlRTElPzQdx3_jj_afw4fWhzK8uuVidVeBQjJ_oV41yylC9Y67I4P7WC008WdqyCZur_580U25hvinz41dHQLAVXTZ6eHtpbKKt4lrRWxCOjB5ZGjTB45u0ab78GCy89IlgXdrJBxi-WtgmoWV42_Q4URAdCtguYE_R932HHeHj83USq1sr8xcJfK-wOgSC4TDU2alMo-bAi26SkbxLx758Zf3MudByhbCxWN_7QFMieltv-v6YHC',
        votes: 430,
        percentage: 51,
      },
    ],
  },
  {
    slug: 'global-independent-film-festival',
    title: 'Global Independent Film Festival',
    organizer: 'CinemaLink Pro',
    category: 'Non-Profit',
    description:
      'The premier platform for independent filmmakers to showcase their work to a global audience. Vote for your favourite short film, documentary, or feature.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBl60FCVCf02E-AxWbdTwh4r9tvZwno_22AmnsTefd_cBOPs3ZqXKJdo5etHXteaHu35ghSGmwT-iRal4O6kGCockiko7hmxFyCJGbH50IxzFJUFSuf5pc_1ORIbUFb1wimZbvAtVAaKqlmQEr6B3rpdTAarRGowmVZDJuiCwErUEQVqx9G3sWlkDCBVv_iuW381fsRM1Wp_wOdU08Vf5UiiqS0RUzFLo0LBO-l79GYBjHCp1i8-u0V',
    status: 'active',
    votes: '45.1K',
    votesCount: 45100,
    endsIn: '5d',
    endsAt: '2026-07-03T23:59:59Z',
    isPaid: false,
    tags: ['film', 'art', 'creative'],
    contestants: [
      {
        id: 'gif-1',
        name: 'The Last Meridian',
        author: 'Adaeze Okonkwo',
        description: 'A surrealist short exploring the boundaries of memory and identity through the eyes of a lighthouse keeper on a forgotten coast.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAn3maKkY0xn2rdJarBJaoSxqWsU3ZZQeQaf4446_ccKs-0fKwg2wRqH1A6rLosATLaqSJs37hE8BaSHU3Hde-ztgNfvWnRhARwAPnx3tG0KYMHHAyIoIzQ2fO-Wwmg3gjIu9-BJUEeQyT-OVkcbYSKRH7oSMtnxtXOaaZ9dFhhq1Nn-OsrnlFR44H6AoEgtziro3PS-Mmh-z7pQRNRaHUbI4iCKntg77wnKvdMGfwGC3rHzml81pCT',
        votes: 22341,
        percentage: 50,
      },
      {
        id: 'gif-2',
        name: 'Roots & Routes',
        author: 'Carlos Mendoza',
        description: 'A documentary following three generations of a migrant family across four continents, stitched together from 40 years of home video footage.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD_pCAfvs6JVfD1lqUPd_ffZR-hU7b8ewjHrhw_AgtkZXNZ_gSWJ4-eN0YSuhHoOimc_fW1pWNjHO79AoAXkqhosnq56T4MBPPbqyvS58UoJsIKNIb8y1eHjGIAoVnR6WQmzXDyb9hChJqMC8vCtQeqwDvGOepRi-awkOF6MTmuVCp9TGtEFKSB-qd5bfE-zuU7GAqozdT6g60dbx1BxwsqzIULWuNWDyPEYJlK_prE1kONT2yFmb8A',
        votes: 22759,
        percentage: 50,
      },
    ],
  },
  {
    slug: 'cyber-security-innovation-challenge',
    title: 'Cyber Security Innovation Challenge',
    organizer: 'SecureNet Systems',
    category: 'Startup Pitch',
    description:
      'Funding the next generation of cybersecurity solutions. Compete for $500K in grants and equity-free investment from leading security-focused VCs.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAn3maKkY0xn2rdJarBJaoSxqWsU3ZZQeQaf4446_ccKs-0fKwg2wRqH1A6rLosATLaqSJs37hE8BaSHU3Hde-ztgNfvWnRhARwAPnx3tG0KYMHHAyIoIzQ2fO-Wwmg3gjIu9-BJUEeQyT-OVkcbYSKRH7oSMtnxtXOaaZ9dFhhq1Nn-OsrnlFR44H6AoEgtziro3PS-Mmh-z7pQRNRaHUbI4iCKntg77wnKvdMGfwGC3rHzml81pCT',
    status: 'active',
    votes: '1.1K',
    votesCount: 1100,
    endsIn: '22d',
    endsAt: '2026-07-20T23:59:59Z',
    isPaid: true,
    pricePerVote: 2.0,
    tags: ['security', 'startup', 'tech'],
    contestants: [
      {
        id: 'csic-1',
        name: 'ZeroTrust Edge',
        author: 'James Park',
        description: 'A runtime application self-protection layer that continuously verifies trust at every API call without adding latency to production systems.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDAzGbKRl-ZBxeejxlV8v2o2v8jmrL11J4EaCNIW-vdhRDiBumx7LXTDUIafCBS0HHGnNaHvHUwXPYTlPA48jhioHyzJsKI43fh5q8vMGrdkqme5jHtdT-IUasP_OJckDglgnZqKAMj7WZtyIbBSuPVGiA8D7AoSCrNDbtcM85dwKslpv9HNoyXdHcBh3CFV3fpDWeKQzUGkii7-55eDXEOkyC6Su2Y9uUFP6PYhJAQMqdpGGUHWGzt',
        votes: 620,
        percentage: 56,
      },
      {
        id: 'csic-2',
        name: 'Phantom Shield',
        author: 'Aisha Kamara',
        description: 'An AI-powered deception technology platform that deploys dynamically-generated honeypots to detect and neutralize advanced persistent threats in real time.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBLlRTElPzQdx3_jj_afw4fWhzK8uuVidVeBQjJ_oV41yylC9Y67I4P7WC008WdqyCZur_580U25hvinz41dHQLAVXTZ6eHtpbKKt4lrRWxCOjB5ZGjTB45u0ab78GCy89IlgXdrJBxi-WtgmoWV42_Q4URAdCtguYE_R932HHeHj83USq1sr8xcJfK-wOgSC4TDU2alMo-bAi26SkbxLx758Zf3MudByhbCxWN_7QFMieltv-v6YHC',
        votes: 480,
        percentage: 44,
      },
    ],
  },
  {
    slug: 'fintech-ui-challenge-2024',
    title: 'Fintech UI Challenge: 2024 Edition',
    organizer: 'FinFlow Academy',
    category: 'UI/UX Design',
    description:
      'Design the future of financial interfaces. Build dashboard concepts, mobile banking UX, or trading platforms that redefine clarity and usability in fintech.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBLlRTElPzQdx3_jj_afw4fWhzK8uuVidVeBQjJ_oV41yylC9Y67I4P7WC008WdqyCZur_580U25hvinz41dHQLAVXTZ6eHtpbKKt4lrRWxCOjB5ZGjTB45u0ab78GCy89IlgXdrJBxi-WtgmoWV42_Q4URAdCtguYE_R932HHeHj83USq1sr8xcJfK-wOgSC4TDU2alMo-bAi26SkbxLx758Zf3MudByhbCxWN_7QFMieltv-v6YHC',
    status: 'active',
    votes: '5.9K',
    votesCount: 5900,
    endsIn: '11d',
    endsAt: '2026-07-09T23:59:59Z',
    isPaid: false,
    tags: ['fintech', 'design', 'ui'],
    contestants: [
      {
        id: 'fui-1',
        name: 'ClearLedger',
        author: 'Olivier Dubois',
        description: 'A frictionless personal finance dashboard that uses natural-language queries to give users instant, plain-English answers about their spending behaviour.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD0ulkTR_Mx_DI51OwmsNGVQQZ1dQkrt4Pj1ZFaG1vZ6TUcSif8jV86ib1H9iwoiMor8eWhJY41LZz45qr2Y78Zh_edGyEu9PzZ3kIrci98HICG8V3lvP8gsG9Y_LyBUykhr1CfZzQeOayCiUhbx2HjF3HD61pFj5UA_ijW-whE9HUfm3LLfjT7Z-Vqhw_8jAXqdcZxfrXIHU9vyONaIk20_UcrWlFLP5_jYa1Ae-JVv3PD3-2qnqr0',
        votes: 3100,
        percentage: 53,
      },
      {
        id: 'fui-2',
        name: 'TradeVision',
        author: 'Min-Ji Lee',
        description: 'A dark-mode first trading terminal that uses spatial audio cues and haptic feedback patterns to convey market volatility without visual clutter.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCk42vWK7afB8TGzIExblCSrZ5SNY_UzbHSYkOP52ATCYh-X5N_o23YVmrcvTZOEHo_E3Yvw-BqqIOqcDCmHP5tJ1KM7CRw_LPjv0CjiQPqqBvLxQUKm0yyW3iE8am9pEuCdDamKkJgIwfnGxmVkF_1e7TfkcQT3eAqfu470X8COsX_18kj-6FAVRpi9Nv2HbnFkITW9yCKT1-jD-OK7iWLP-mMePNBk1RRYV6AdSMKUhIV7Gz69dWz',
        votes: 2800,
        percentage: 47,
      },
    ],
  },
];

// Lookup helpers
export const getPollBySlug = (slug: string): Poll | undefined =>
  polls.find((p) => p.slug === slug);

export const getPollsByCategory = (category: string): Poll[] =>
  category === 'All Categories'
    ? polls
    : polls.filter((p) => p.category === category);

export const POLL_CATEGORIES = [
  'All Categories',
  'Photography',
  'Startup Pitch',
  'UI/UX Design',
  'Non-Profit',
] as const;
