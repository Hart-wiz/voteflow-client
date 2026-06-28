# TODO — Prioritised Backlog

## 🔴 High Priority (Blocks Backend Integration)

- [x] **TanStack Query hooks** — Create `lib/hooks/usePolls.ts`, `usePoll.ts`, `useVote.ts`, `useWallet.ts` wrapping `lib/api/*`
- [x] **Auth state management** — Zustand store for `{ user, accessToken, refreshToken }` with persistence
- [ ] **Protected routes** — Middleware or layout guard that redirects unauthenticated users away from `/dashboard/*`
- [ ] **JWT refresh flow** — Auto-refresh access token using refresh token on 401 responses
- [ ] **Form wiring** — Wire login, register, and create-poll forms to `lib/api/auth.ts` and `lib/api/polls.ts` using React Hook Form + Zod

## 🟠 Medium Priority (Core Features)

- [ ] **Paystack integration** — Wrap paid-vote flow in Paystack popup; pass `payment_ref` to `votesApi.cast()`
- [ ] **Results page** — `/results` public listing + `/polls/:slug/results` post-close results
- [ ] **Vote success page** — `/vote-success` with contestant name, poll title, and share button
- [ ] **Poll creation API call** — Connect multi-step wizard to `pollsApi.create()`
- [ ] **Withdrawal flow** — Wire "Withdraw Funds" button in wallet to `walletApi.withdraw()` with confirmation modal
- [x] **Mobile Navbar** — Hamburger menu for the public and dashboard Navbar on small screens
- [ ] **Image upload** — Poll cover image upload in the create-poll wizard

## 🟡 Low Priority (Polish)

- [ ] **Dark mode audit** — Test all pages in dark mode; fix any hard-coded light colours
- [ ] **Error boundaries** — Add `error.tsx` files for key route segments
- [ ] **Loading states** — Add `loading.tsx` skeleton files for route segments
- [ ] **Framer Motion animations** — Add page transitions and stagger animations to card grids
- [ ] **SEO** — Proper `generateMetadata()` for poll detail pages (poll title, og:image)
- [ ] **Accessibility audit** — WCAG 2.1 AA focus management, colour contrast, aria-labels
- [ ] **E2E tests** — Playwright tests for vote flow, auth, and create poll wizard
