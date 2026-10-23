# Handoff Guide

## Current state

The VoteFlow client is wired to the Django API for the current product flows. Authentication, poll browsing and creation, voting, wallet actions, notifications, results, and organizer review use live API functions. Paid voting opens Paystack and the server verifies payment before recording votes. Transactional email is sent by the server through Resend.

The earlier production build and server configuration checks preceded the InlineJS v2 and Dragonfly changes, which were not run through tests or a build in this turn. Paid checkout requires the server environment and a reachable Paystack account; the app also needs the database and Dragonfly connections described in the [server setup guide](../../voteflow-server/SETUP.md). These payment and queue changes add no database migrations.

## Remaining work

- Complete and verify the database and provider setup in the server guide.
- The `.kiro` server roadmap includes larger items that are still open: the expanded contest and voter verification APIs, background security monitoring, automated integration/property coverage, and final migration/deployment checkpoints.
- The client backlog in [TODO.md](./TODO.md) tracks remaining UI polish and pages.

## Key files

| File | Purpose |
|---|---|
| `lib/types.ts` | Shared client domain types |
| `lib/api/client.ts` | API base URL, JWT handling, and refresh flow |
| `lib/api/` | Authentication, polls, wallet, and notification requests |
| `lib/hooks/` | TanStack Query hooks for server data |
| `lib/stores/auth.ts` | Persisted auth state and client token cookie |
| `proxy.ts` | Protects dashboard and account routes |
| `components/vote-checkout-modal.tsx` | Free voting and Paystack checkout |
| `app/(dashboard)/create/page.tsx` | Poll wizard and organizer access request |

## Environment variables

The client needs `NEXT_PUBLIC_API_URL`. For paid voting, the backend needs both Paystack keys; the checkout endpoint returns its public key and server-calculated transaction details to InlineJS. The backend also needs PostgreSQL, Resend, and Dragonfly for shared cache and Celery; optional Cloudinary variables enable persistent hosted image uploads. The server setup guide documents every variable and startup step.
