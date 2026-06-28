# Handoff Guide

## For the Next Developer / Agent

Welcome. This document tells you exactly what state the project is in, what was done, and what to do next.

---

## What Was Done (v0.2.0)

The frontend was transformed from a prototype with scattered hardcoded data and broken routing into a structured, scalable SaaS frontend.

Key changes:
1. **Routing fixed** — Route groups `(public)`, `(auth)`, `(dashboard)` prevent double-navigation
2. **Single data source** — `lib/data/polls.ts` is now the only place poll data lives
3. **Shared types** — `lib/types.ts` defines all domain interfaces
4. **API stubs** — `lib/api/` has typed endpoint functions ready to plug into Django REST
5. **All sidebar routes work** — Analytics, Settings, Notifications, Admin pages exist
6. **404 page** — `app/not-found.tsx`
7. **Forgot password** — `app/(auth)/forgot-password/page.tsx`
8. **Providers** — `components/providers/providers.tsx` unifies ThemeProvider + ReactQueryProvider

---

## Immediate Next Steps (in order)

### 1. Build TanStack Query hooks
Create `lib/hooks/`:
```
usePolls(filters) → uses pollsApi.list()
usePoll(slug)     → uses pollsApi.get()
useVote()         → uses votesApi.cast()
useWallet()       → uses walletApi.get()
```
Replace mock data in pages with these hooks.

### 2. Auth state management
Create `lib/stores/auth.ts` using Zustand:
```typescript
interface AuthStore {
  user: User | null;
  tokens: AuthTokens | null;
  login(payload): Promise<void>;
  logout(): void;
}
```
Persist to localStorage. Hydrate on app start.

### 3. Protected route middleware
Create `middleware.ts` at root:
```typescript
export function middleware(req) {
  const token = req.cookies.get('voteflow_access_token');
  if (!token && req.nextUrl.pathname.startsWith('/dashboard')) {
    return NextResponse.redirect(new URL('/login', req.url));
  }
}
```

### 4. Wire forms to API
- Login form → `authApi.login()` → store tokens → redirect to `/dashboard`
- Register form → `authApi.register()` → store tokens → redirect to `/dashboard`
- Create poll wizard → `pollsApi.create()` → redirect to `/polls/:slug`

### 5. Paystack payment integration
In `VoteCheckoutModal`, for paid polls:
```typescript
const handler = PaystackPop.setup({
  key: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY,
  email,
  amount: total * 100,
  onSuccess: (ref) => votesApi.cast(slug, { contestant_id, quantity, payment_ref: ref.reference }),
});
handler.openIframe();
```

---

## Environment Variables Needed

```env
NEXT_PUBLIC_API_URL=http://localhost:8000/api/v1
NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY=pk_test_...
```

---

## Key Files to Know

| File | Why It Matters |
|---|---|
| `lib/types.ts` | Start here for all domain types |
| `lib/data/polls.ts` | Replace with API calls |
| `lib/api/client.ts` | Edit to change auth header logic |
| `components/poll-card.tsx` | Used everywhere polls are listed |
| `components/contestant-card.tsx` | Wired to vote modal |
| `components/vote-checkout-modal.tsx` | The vote + payment UX |
| `app/(dashboard)/layout.tsx` | Dashboard chrome |
| `app/(public)/layout.tsx` | Public chrome |

---

## What NOT to Touch

- `globals.css` — design tokens and utility classes are stable; coordinate before changing
- `components/ui/` — shadcn/ui auto-generated; don't hand-edit
- `lib/types.ts` — add fields but don't rename/remove without a migration plan
