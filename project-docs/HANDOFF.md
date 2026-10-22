# Handoff Guide

## Current state

The VoteFlow client is wired to the Django API for the current product flows. Authentication, poll browsing and creation, voting, wallet actions, notifications, results, and organizer review use live API functions. Paid voting opens Paystack and the server verifies payment before recording votes. Transactional email is sent by the server through Resend.

The client production build completed successfully. The server configuration check passed. No database migrations have been run and no external services have been configured in this workspace, so follow the [server setup guide](../../voteflow-server/SETUP.md) before running the full application.

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

The client needs `NEXT_PUBLIC_API_URL` and, for paid voting, `NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY`. The backend also needs PostgreSQL, Resend, and Paystack configuration; optional Cloudinary variables enable persistent hosted image uploads. The server setup guide documents every variable and startup step.
