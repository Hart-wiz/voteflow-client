# TODO — Prioritised Backlog

## 🔴 High Priority (Blocks Backend Integration)

- [x] **TanStack Query hooks** — Create `lib/hooks/usePolls.ts`, `usePoll.ts`, `useVote.ts`, `useWallet.ts` wrapping `lib/api/*`
- [x] **Auth state management** — Zustand store for `{ user, accessToken, refreshToken }` with persistence
- [x] **Protected routes** — Proxy guards dashboard routes and redirects unauthenticated users
- [x] **JWT refresh flow** — Automatically refreshes tokens after 401 responses
- [x] **Form wiring** — Login, registration, and create-poll forms call the live API

## 🟠 Medium Priority (Core Features)

- [x] **Paystack integration** — Paid votes use InlineJS v2 with a server-created payment reference; the server binds and verifies each charge before recording votes
- [ ] **Results page** — `/results` public listing + `/polls/:slug/results` post-close results
- [ ] **Vote success page** — `/vote-success` with contestant name, poll title, and share button
- [x] **Poll creation API call** — Multi-step wizard submits poll, contestant, and image data to the API
- [x] **Withdrawal flow** — Wallet confirmation modal submits withdrawal requests to the API
- [x] **Mobile Navbar** — Hamburger menu for the public and dashboard Navbar on small screens
- [x] **Image upload** — Create-poll wizard uploads poll and contestant images

## 🟡 Low Priority (Polish)

- [ ] **Dark mode audit** — Test all pages in dark mode; fix any hard-coded light colours
- [ ] **Error boundaries** — Add `error.tsx` files for key route segments
- [ ] **Loading states** — Add `loading.tsx` skeleton files for route segments
- [ ] **Framer Motion animations** — Add page transitions and stagger animations to card grids
- [ ] **SEO** — Proper `generateMetadata()` for poll detail pages (poll title, og:image)
- [ ] **Accessibility audit** — WCAG 2.1 AA focus management, colour contrast, aria-labels
- [ ] **E2E tests** — Playwright tests for vote flow, auth, and create poll wizard
