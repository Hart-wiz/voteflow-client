# Changelog

All notable changes are documented here.

---

## [0.2.0] — 2026-06-28 — Production-Ready Refactor

### Architecture
- **ADDED** Route group `(public)` — wraps landing page, polls, and results with Navbar + Footer
- **ADDED** Route group `(auth)` — login, register, forgot-password (no nav chrome)
- **FIXED** Root layout (`app/layout.tsx`) — removed global Navbar + Footer; now provides providers only
- **FIXED** Dashboard layout — no longer inherits public Navbar; has its own search + header
- **ADDED** `components/providers/providers.tsx` — centralised ThemeProvider + ReactQueryProvider

### Shared Types & Data
- **ADDED** `lib/types.ts` — all domain interfaces (`Poll`, `Contestant`, `User`, `Transaction`, `WalletData`, `AuthTokens`, etc.)
- **ADDED** `lib/data/polls.ts` — single source of truth: 6 fully-typed polls with 2–3 contestants each
- **REMOVED** `app/polls/data.ts` — superseded by `lib/data/polls.ts`
- **REMOVED** Inline hardcoded data arrays from `app/polls/page.tsx` and `app/polls/[slug]/page.tsx`

### API Service Layer
- **ADDED** `lib/api/client.ts` — JWT-aware fetch wrapper with `ApiError`
- **ADDED** `lib/api/polls.ts` — poll + vote REST endpoints
- **ADDED** `lib/api/auth.ts` — login, register, logout, token refresh, password reset
- **ADDED** `lib/api/wallet.ts` — balance, transactions, withdraw

### Components
- **REWRITTEN** `components/poll-card.tsx` — typed `Poll` prop, `<Link>` to `/polls/:slug`, status badge, paid badge, hover CTA
- **REWRITTEN** `components/contestant-card.tsx` — typed `Contestant` + `Poll` props, vote progress bar, rank badge, wired to modal
- **FIXED** `components/vote-checkout-modal.tsx` — prop names aligned (`contestant`, `pollTitle`, `isPaid`)
- **UPDATED** `components/layout/sidebar.tsx` — all nav items routed correctly (Analytics, Settings, Notifications, Admin)

### Pages — New
- **ADDED** `app/(public)/page.tsx` — landing page (moved from `app/page.tsx`)
- **ADDED** `app/(public)/polls/page.tsx` — clean rewrite using shared `PollCard` and consolidated data
- **ADDED** `app/(public)/polls/[slug]/page.tsx` — real slug lookup, live countdown, sticky sidebar, ranked contestants
- **ADDED** `app/(auth)/forgot-password/page.tsx` — email form with sent-state and back link
- **ADDED** `app/(dashboard)/analytics/page.tsx` — stat cards, performance bars, chart placeholders
- **ADDED** `app/(dashboard)/settings/page.tsx` — Profile, Notifications, Billing, Security tabs
- **ADDED** `app/(dashboard)/notifications/page.tsx` — read/unread feed
- **ADDED** `app/not-found.tsx` — global 404 with gradient text and navigation CTAs

### UI & Responsiveness
- **ADDED** `components/layout/mobile-sidebar.tsx` — sliding hamburger drawer for mobile dashboard navigation
- **FIXED** All `(dashboard)` pages — updated grid layouts, table overflow wrappers, and flex directions for mobile screens
- **FIXED** All `(public)` pages — verified and optimized landing page, discover polls, and individual poll pages for mobile compatibility

### Pages — Fixed
- **FIXED** `/login` — forgot password link now routes to `/forgot-password`

### Files Deleted
- `app/page.tsx` (moved to `app/(public)/page.tsx`)
- `app/polls/page.tsx` (moved to `app/(public)/polls/page.tsx`)
- `app/polls/[slug]/page.tsx` (moved to `app/(public)/polls/[slug]/page.tsx`)
- `app/polls/data.ts` (superseded by `lib/data/polls.ts`)

### Documentation
- **ADDED** `project-docs/` — README, PROJECT_STATUS, ARCHITECTURE, DECISIONS, TODO, CHANGELOG, HANDOFF, COMPONENTS

---

## [0.1.0] — 2026-06-27 — Initial Prototype

- Set up Next.js 16 with Tailwind CSS v4 and shadcn/ui
- Created landing page, login, register pages
- Created dashboard, wallet, create-poll, admin pages
- Added Navbar, Footer, Sidebar components
- Set up TanStack Query, Zustand, React Hook Form, Sonner
