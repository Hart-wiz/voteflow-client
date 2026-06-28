# Component Library

## Public Components

### `<PollCard poll={Poll} />`
**File:** `components/poll-card.tsx`  
**Props:**
| Prop | Type | Required |
|---|---|---|
| poll | Poll | ✅ |
| className | string | ❌ |

Renders a contest card with image, status badge, paid badge (if applicable), organizer, vote count, countdown, and "View Contest" CTA. Wrapped in `<Link>` to `/polls/:slug`. Uses `.soft-glow-card` CSS class for hover effect.

---

### `<ContestantCard contestant={Contestant} poll={Poll} rank={number} />`
**File:** `components/contestant-card.tsx`  
**Props:**
| Prop | Type | Required |
|---|---|---|
| contestant | Contestant | ✅ |
| poll | Poll | ✅ |
| rank | number | ❌ (shows medal badge if 1–3) |
| className | string | ❌ |

Renders a contestant card with image, rank badge, vote progress bar, description, and "Vote Now" button. Opens `VoteCheckoutModal` on click. Client component.

---

### `<VoteCheckoutModal />`
**File:** `components/vote-checkout-modal.tsx`  
**Props:**
| Prop | Type | Required |
|---|---|---|
| isOpen | boolean | ✅ |
| onClose | () => void | ✅ |
| contestant | string | ✅ |
| pollTitle | string | ✅ |
| pricePerVote | number | ❌ |
| isPaid | boolean | ❌ |

Shadcn Dialog for voting. Free polls show quantity selector only. Paid polls show email field and total amount. Simulates API call on submit.

---

## Layout Components

### `<Navbar />`
**File:** `components/layout/Navbar.tsx`  
Public navigation with logo, nav links (Home, Discover Contests, Create Contest), Log In, and Sign Up. Active link detected with `usePathname()`.

### `<Footer />`
**File:** `components/layout/Footer.tsx`  
Simple footer with brand + copyright and footer links.

### `<Sidebar />`
**File:** `components/layout/sidebar.tsx`  
Dashboard sidebar with:
- Main nav: Overview, Create Poll, Analytics, Wallet
- Manage nav: Notifications (badge), Admin Console, Settings
- User profile footer with logout button

---

## UI Primitives (shadcn/ui)
Located in `components/ui/`. Auto-generated — do not hand-edit.
Available: `button`, `card`, `dialog`, `input`, `label`, `table`, `badge`, `tabs`, `avatar`, `dropdown-menu`, `progress`, `separator`, `sonner`

---

## Utility Components

### `<ThemeToggle />`
**File:** `components/theme-toggle.tsx`  
Dropdown menu to switch light / dark / system theme. Uses `next-themes`.

### `<ThemeProvider />` & `<ReactQueryProvider />`
**File:** `components/providers/providers.tsx`  
Centralised client providers used in root layout.
