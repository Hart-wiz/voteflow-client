# Architectural Decisions

## ADR-001 — Route Group Strategy

**Date:** 2026-06-28  
**Status:** Implemented  

**Problem:** Root layout rendered Navbar + Footer globally, which caused the dashboard to display a public marketing nav alongside its own sidebar header — a broken double-navigation experience.

**Options Considered:**
1. Conditional client wrapper (check pathname) — rejected because it pollutes the root layout with client-side logic and still flashes nav on load.
2. Route groups — accepted because Next.js App Router supports this natively at zero runtime cost.

**Decision:** Three route groups:
- `(public)` — wraps marketing pages with Navbar + Footer
- `(auth)` — wraps login/register with no chrome
- `(dashboard)` — wraps all creator/admin pages with Sidebar + top header

Root layout only provides providers.

---

## ADR-002 — Single Data Source

**Date:** 2026-06-28  
**Status:** Implemented  

**Problem:** Mock data existed in three separate, inconsistent locations: `app/polls/data.ts` (3 polls, minimal fields), an inline array in `app/polls/page.tsx` (6 polls, different field names), and a hardcoded array in `app/polls/[slug]/page.tsx` (static nominees unrelated to the slug). Visiting any slug showed the same generic content.

**Decision:** Consolidate into `lib/data/polls.ts` with full `Poll` typed objects including a nested `contestants` array. Helper functions (`getPollBySlug`, `getPollsByCategory`) make data access ergonomic. When the API is ready, only these helpers need to change.

---

## ADR-003 — API Client Pattern

**Date:** 2026-06-28  
**Status:** Implemented (stub)

**Decision:** A lightweight `apiClient` wrapper around `fetch` (no axios dependency) in `lib/api/client.ts`. Reads JWT from `localStorage` automatically. Throws typed `ApiError` instances for non-OK responses. All endpoint definitions are co-located in domain files (`polls.ts`, `auth.ts`, `wallet.ts`). TanStack Query hooks will be built on top of these functions.

---

## ADR-004 — No Global State for UI

**Date:** 2026-06-28  
**Status:** Guideline  

**Decision:** Keep UI state local to components (useState/useReducer). Only use Zustand for auth session state (user, tokens). TanStack Query manages all server state and caching. Do not put UI state (modal open, selected tab) in global stores.

---

## ADR-005 — Design System in globals.css

**Date:** 2026-06-28  
**Status:** Implemented  

**Decision:** Brand-specific utility classes (`.btn-primary`, `.soft-glow-card`, `.interactive-card`, etc.) live in `globals.css` as regular CSS classes, not Tailwind utilities. This keeps them available globally without repeating long class strings and allows easy theming. Tailwind is still used for layout and spacing.
