# Puja Insights Engine - Developer Guide

Welcome to the **Puja Insights Engine**. This document provides a deep structural analysis of the codebase, a step-by-step breakdown of how the components interact, and optimization recommendations for scaling the platform.

---

## 1. Project Overview & Architecture

This project is built as a **monorepo** utilizing **PNPM Workspaces**. The monorepo separates concerns cleanly by dividing the codebase into independent packages (`artifacts/*` for applications and `lib/*` for shared utilities).

### Tech Stack
- **Frontend** (`vedic-puja`): React 19, Vite, Tailwind CSS (v4), Radix UI, React Query.
- **Backend** (`api-server`): Node.js, Express, Pino (Logging).
- **Database** (`db`): PostgreSQL, Drizzle ORM.
- **Validation & Types**: Zod, TypeScript.
- **API Generation**: OpenAPI Spec with Orval generating React Query clients.

---

## 2. Directory Structure

Here is a breakdown of the important directories:

```text
Puja-Insights-Engine/
├── artifacts/                  # Applications & Frontends
│   ├── api-server/             # Backend Express Server
│   └── vedic-puja/             # Main React/Vite Frontend Web App
│
├── lib/                        # Shared Libraries & Modules
│   ├── api-client-react/       # Auto-generated React Query hooks (via Orval)
│   ├── api-spec/               # OpenAPI Definition (openapi.yaml)
│   ├── api-zod/                # Shared Zod validation schemas
│   └── db/                     # Drizzle ORM configuration and Database schemas
│
├── scripts/                    # Automation & Dev Scripts
├── docker/                     # Docker configurations
├── .env                        # Environment variables (Root)
├── pnpm-workspace.yaml         # Monorepo configuration
└── package.json                # Root build and setup scripts
```

---

## 3. Component Deep Dive

### A. The Database Layer (`lib/db`)
Handles all communication with the PostgreSQL database.
- Uses **Drizzle ORM** for type-safe database queries.
- `drizzle.config.ts` handles the migration settings.
- The `src/schema/` directory contains table definitions (e.g., `bookings.ts`, `contacts.ts`).

### B. The API Contract Layer (`lib/api-spec` && `lib/api-zod`)
- **API Spec**: `lib/api-spec/openapi.yaml` is the source of truth for your API. It uses `Orval` to auto-generate fully typed React Query hooks (`@workspace/api-client-react`).
- **Zod**: Shared validation rules that can be required in both the frontend (for forms) and the backend (for parsing payload requests).

### C. The Backend Server (`artifacts/api-server`)
- Mounts routes defined in `src/routes/` (`health`, `bookings`, `contact`).
- Uses `pino` and `pino-http` for extremely fast JSON logging.
- Imports the database from `@workspace/db` to interact with tables directly.

### D. The Frontend Web App (`artifacts/vedic-puja`)
- An SPA built with Vite.
- Pages like `Home.tsx`, `PujaDetail.tsx`, `Book.tsx`, etc., map to the routing structure.
- Communicates with the backend using the pre-generated API hooks from `@workspace/api-client-react`.
- Styling is heavily handled by Tailwind V4 and accessible headless components from Radix UI.

---

## 4. How the Data Flows (End-to-End)

If a user books a Puja on the frontend, this is what happens internally:
1. **Frontend**: The user fills out a form in `vedic-puja/src/pages/Book.tsx`. The form is validated locally using Zod (`@workspace/api-zod`).
2. **Network Request**: The component triggers a mutation via React Query hook imported from `@workspace/api-client-react`. This sends a POST request to the backend.
3. **Backend Route**: The request hits Express in `api-server/src/routes/bookings.ts`.
4. **Backend Validation**: Express verifies the payload again with the identical Zod schemas to ensure server security.
5. **Database Interaction**: The route uses `Drizzle` (`@workspace/db`) to insert the row into Postgres.
6. **Response**: A formatted JSON response is sent back, and UI state updates via React Query cache invalidation.

---

## 5. Development Workflow

To start development locally:
1. Ensure your PostgreSQL instance is running and your `.env` has a correct `DATABASE_URL`.
2. Run Database Migrations: cd into `lib/db` and execute `pnpm run push`.
3. Start the API Server: cd into `artifacts/api-server` and run `pnpm run dev`.
4. Start the Frontend: cd into `artifacts/vedic-puja` and run `pnpm run dev`.
*(Note: A root `pnpm dev` command or something similar utilizing `concurrently` is recommended if not already present.)*

---

## 6. Optimization Suggestions

To take the architecture and performance to the next level, here are key optimization suggestions based on the current stack:

### Frontend Optimizations (`vedic-puja`)
- **Code Splitting / Lazy Loading**: For routes that aren't visited immediately (relative to `Home.tsx`), wrap your page imports in `React.lazy()` or configure `wouter` for lazy loading to drastically reduce the initial JavaScript bundle size.
- **Image Optimization**: Ensure that images (like Puja thumbnails) are properly compressed. If possible, consider adding Vite PWA features or integrating a library like `vite-imagetools` to automatically transform large assets.
- **Prefetching**: Utilize React Query's `prefetchQuery` for critical details, such as pre-fetching `PujaDetail` data on hover over a Puja card on the `Home` page, creating instantaneous transitions.

### Backend Optimizations (`api-server`)
- **Connection Pooling**: When moving towards production, ensure you wrap your Postgres connection with a connection pooler (like `pg-pool`) and ideally a remote pooling service like PgBouncer.
- **Response Compression**: Add the `compression` middleware to your Express app to Gzip your API responses, reducing payload sizes sent back to the client.
- **Rate-Limiting & Security**: For public-facing endpoints (e.g., Contact and Booking endpoints), apply an IP rate limiter to prevent abuse (e.g., `express-rate-limit`).

### Infrastructure / Monorepo Optimizations
- **Build Caching with Turborepo**: Currently, the root `package.json` uses raw PNPM filtering. Adopting `Turborepo` (`pnpm dlx create-turbo`) would give you intelligent execution caching, reducing build and typecheck times drastically during CI/CD.
- **Database Indexing**: Make sure foreign keys and heavily queried columns inside `lib/db/src/schema/bookings.ts` are appropriately indexed in Drizzle to ensure read scalability.
