# Puja Insights Engine - Admin Panel Implementation Plan

This plan details the end-to-end architecture and implementation steps to introduce a secure, scalable Admin Panel into the existing Puja Insights Engine monorepo. It focuses on fulfilling the core requirements: Role-based access, Dynamic Tracking Scripts, Business Information Management, and a Blog Engine, without degrading current performance.

## User Review Required

> [!CAUTION]
> **Custom Authentication Strategy:** Per your request, we are proceeding with a **custom authentication setup using completely isolated PostgreSQL.**
> 
> We will implement our own authentication logic on the backend (`api-server`) using bcrypt for password hashing and securing sessions via `httpOnly` JWT cookies. The frontend will communicate exclusively with your Express backend.

## Proposed Architecture

1. **Frontend App (`vedic-puja`)**: Instead of creating an entirely new package, we will inject the Admin Panel into the existing Single Page Application using **React's Lazy Loading**. All `/admin/*` routes will be strictly code-split, ensuring 0 bytes of the admin interface are loaded for standard users, preserving optimal performance.
2. **Backend API (`api-server`)**: We will introduce standard `/api/auth/login` endpoints along with a new `adminRouter` protected by an Express middleware that validates HttpOnly JWT cookies to enforce user roles.
3. **Database (`db`)**: Several new tables will be added using Drizzle to manage users (with encrypted passwords), blogs, and global settings (contact details + tracking scripts).

---

## Proposed Changes

### Database Layer (`lib/db/src/schema`)

#### [NEW] [users.ts](file:///d:/ReactWorkspace/Puja-Insights-Engine/lib/db/src/schema/users.ts)
Table to store administrators and editors directly in Postgres.
- `id`: Serial
- `email`: Varchar (Unique)
- `password_hash`: Varchar (Hashed securely via bcrypt)
- `role`: Enum (`admin`, `editor`)
- `created_at`: Timestamp

#### [NEW] [settings.ts](file:///d:/ReactWorkspace/Puja-Insights-Engine/lib/db/src/schema/settings.ts)
A flexible key-value store to manage dynamic business information and tracking scripts.
- `id`: Serial
- `type`: Enum (`contact`, `tracking_script`)
- `key`: Varchar (e.g., `company_phone`, `google_analytics_id`, `fb_pixel`)
- `value`: Text (The raw script or string value)
- `injection_location`: Enum (`head`, `body`) — *Nullable, only used for tracking scripts*
- `is_active`: Boolean
- `updated_at`: Timestamp

#### [NEW] [blogs.ts](file:///d:/ReactWorkspace/Puja-Insights-Engine/lib/db/src/schema/blogs.ts)
Table ensuring robust content structuring for SEO.
- `id`: Serial
- `slug`: Varchar (Unique identifier for SEO friendly URLs like `/blog/puja-benefits`)
- `title`: Varchar
- `content`: Text (HTML/WYSIWYG format)
- `meta_title`: Varchar (For SEO `<title>`)
- `meta_description`: Varchar (For SEO `<meta name="description">`)
- `status`: Enum (`draft`, `published`)
- `author_id`: Integer (Foreign key to `users`)
- `published_at`: Timestamp
- `created_at`: Timestamp
- `updated_at`: Timestamp

---

### Backend API (`artifacts/api-server`)

#### [NEW] [src/routes/auth.ts](file:///d:/ReactWorkspace/Puja-Insights-Engine/artifacts/api-server/src/routes/auth.ts)
- `POST /api/auth/login` - Authenticates user and sets an `httpOnly` secure cookie containing a signed JWT.
- `POST /api/auth/logout` - Clears the authentication cookie.

#### [NEW] [src/middlewares/auth.ts](file:///d:/ReactWorkspace/Puja-Insights-Engine/artifacts/api-server/src/middlewares/auth.ts)
Express middleware to extract the JWT from the `cookie` header, cryptographically verify it with `jsonwebtoken`, and resolve the user's role against the database before proceeding.

#### [NEW] [src/routes/admin.ts](file:///d:/ReactWorkspace/Puja-Insights-Engine/artifacts/api-server/src/routes/admin.ts)
- `GET/PUT /api/admin/settings` - Manage contact info and scripts.
- `GET/POST/PUT/DELETE /api/admin/blogs` - Manage blog posts.
- `GET/POST/PUT/DELETE /api/admin/users` - Manage admin/editor accounts.

#### [MODIFY] [src/routes/index.ts](file:///d:/ReactWorkspace/Puja-Insights-Engine/artifacts/api-server/src/routes/index.ts)
Register new routers: Mount `/api/auth` unrestricted. Mount `/api/admin` with `authMiddleware` applied. Generate a new unauthenticated route `/api/settings/public` for the frontend.

---

### Frontend Web (`artifacts/vedic-puja`)

#### [NEW] [src/pages/admin/*](file:///d:/ReactWorkspace/Puja-Insights-Engine/artifacts/vedic-puja/src/pages/admin/)
Create standard UI/UX layouts utilizing Radix UI:
- **Login Portal**: A form submitting credentials to the auth endpoint.
- **Admin Layout**: A sidebar navigation wrapper for all admin paths (`/admin/dashboard`, `/admin/blogs`, `/admin/settings`, `/admin/users`).
- **Settings Editor**: Forms for key-value inputs targeting site content and injectible script blocks.
- **Blog Editor**: A React-based WYSIWYG rich text editor for content modifications, accompanied by dedicated SEO field inputs (slug, meta description).

#### [MODIFY] [src/App.tsx](file:///d:/ReactWorkspace/Puja-Insights-Engine/artifacts/vedic-puja/src/App.tsx)
- Integrate dynamic routing for the `/admin` path using React `lazy`. Implement an Auth Guard component to redirect unauthenticated access back to login.
- Integrate a standard `<GlobalSettingsProvider>` at the root that hits the `/api/settings/public` endpoint on initial load.
- Inside the Provider, dynamically inject active tracking scripts into `document.head` and `document.body` via JS DOM manipulation (`document.createElement('script')`), to keep the `index.html` totally clean.

---

## Security Best Practices Included
1. **Password Safety**: Utilizes `bcryptjs` on the backend to securely salt and hash passwords. No raw passwords ever touch the database.
2. **Session Security**: Uses `httpOnly`, `Secure`, and `SameSite` configurations for JWT cookies, making the session impenetrable to Javascript-based XSS attacks on the client side.
3. **Sanitization for Scripts**: Because administrators will add `<script>` tags dynamically, React strictly sanitizes standard rendering. The actual injection uses raw DOM manipulation solely for scripts marked as `tracking_script`, strictly curated by admins.
4. **Role-Based Middlewares**: APIs have multiple layers of checks (Valid JWT, User identity resolution, Role enum validation).

## Open Questions

None at this time. Unless specified otherwise, we will proceed with a WYSIWYG-style editor (rich text) for the blogs page.

## Verification Plan

### Database & Security Verification
- Write a quick seed script or DB insert to provision the first `admin` user to start.
- Test `POST /api/auth/login` to ensure the `set-cookie` header responds correctly with an HttpOnly JWT.
- Push standard requests to `/api/admin/blogs` via Postman without cookies to verify `HTTP 401 Unauthorized`.

### Frontend Verification
- Open Chrome Devtools, inspect `<head>` and `<body>` tags. Update a GA Tracking ID inside the Admin panel, refresh the page, and ensure the script is physically placed inside the correct DOM section without reloading the underlying Vite source wrapper.
- Utilize the `Networks` tab to ensure the split-chunk associated with the `/admin` page is ONLY downloaded when a user physically types/navigates to `/admin`.
