# VoteFlow Project Status

**Updated:** 2026-10-22

## Integration status

The client and Django API are wired together for the current product flows. Authentication and token refresh, poll browsing and creation, voting and Paystack payment verification, results, wallet and withdrawal requests, notifications, profile updates, and organizer approval use API calls. Transactional email is configured through Resend.

The client production build completed successfully. Django's configuration check passed. The backend has not been connected to PostgreSQL or external provider accounts, and no database migrations were run. Deployment is therefore pending environment setup and database initialization.

## Routes

| Area | Status |
|---|---|
| Public poll listing and detail | Connected to the API |
| Login, registration, and password reset | Connected to the API |
| Dashboard, poll creation, and organizer access | Connected to the API |
| Wallet, withdrawal requests, and notifications | Connected to the API |
| Poll results by slug | Connected to the API |
| Results index, vote-success page, and payment callback page | Not implemented |

## Before running the application

Configure PostgreSQL, Resend, Paystack, the client origin, and image storage as described in [the server setup guide](../../voteflow-server/SETUP.md). Copy the server and client environment templates, then apply the repository's migrations once a database is ready.

The `.kiro` RBAC roadmap contains additional unimplemented scope, including its expanded contest state machine, voter identity verification, security monitoring, integration tests, and migration verification. Its checkpoint items remain open until those steps can be completed against a database and configured services.
