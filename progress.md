# CarbonLens Progress

## Current Status

**Implementation in progress.** Frontend Phase 1 & 2 complete. Backend Phase 1 & 2 complete. Jiya Phase 1 & 2 Backend APIs constructed, seeded, and tested. Harsh Phase 1 & 2 supplier UI implemented. Both servers running and tested end-to-end.

---

## Decision Log

- Selected product name: `CarbonLens`
- Chosen audience: manufacturing SMEs
- Chosen build strategy: practical MVP
- Positioning: single source of truth for ESG and GHG data
- Core value: actionability plus accountability, not dashboarding alone
- Scope 3 approach: limited but meaningful
- AI role: optional enhancement, not core logic
- Tech stack confirmed: Vite + React + Zustand (frontend), Express + Prisma + SQLite (backend)
- Shared type contracts enforced via `/shared/types/` — single source of truth for all team members
- Sahiti: Supabase Postgres with RLS + Next.js calculation engine established as secondary DB layer

---

## Completed Items

### Documentation Phase
- Problem statement interpretation
- Project ideation
- CRD, PRD, UX and design planning
- Technical stack definition
- System architecture planning
- Data model outline
- API contract draft
- Demo script draft
- Pitch notes draft
- Initialized Next.js `carbon-lens` repository scaffolding
- Setup Supabase Auth / PostgreSQL database
- Designed and executed `schema.sql` establishing 7 core relational tables
- Implemented Row-Level Security (RLS) and Webhook Triggers for automated governance
- Built `src/lib/services/emissions.ts` core Calculation Engine for Scope 1, 2, and CSV batch processing.

### Jiya — Backend Phase 1
- **Phase 1 Backend Core:** Prisma Schema, Data Seeding, Org/Facility CRUD APIs
- Implemented `schema.prisma` with robust base data seeding via `seed.ts` (1000+ records)
- Express server scaffolding and Master Data CRUD APIs established

### Jiya — Backend Phase 2
- **Phase 2 Supplier Portal:** JWT Invites, external Multer file submission API, Visual Test UI
- Deployed secure JWT-based supplier invite endpoints
- External `multer` form-data endpoint for Scope 3 metrics and evidence documents

### Harsh — Frontend Phase 1 & 2
- Frontend app scaffolding with React Router, Tailwind, Axios, and shared session/http utilities
- Internal settings experience for organization and facility management
- `react-hook-form` + Zod validation for the settings workflow
- Public supplier submission portal route and separate external layout
- Repeatable supplier metric entry with file attachment support
- Supplier submission API integration using unauthenticated `FormData`

### Atharva — Frontend Phase 1 (completed `2026-04-17 ~21:30 IST`)
- Vite + React + TypeScript scaffolding
- React Router with protected route wrapper
- Zustand auth store with localStorage persistence
- Axios API client with Bearer token auto-injection and 401 auto-logout
- Login page — dark glassmorphism theme, animated background orbs, error shake animation
- AppLayout — fixed sidebar, nav links, user avatar, logout button
- Upload Data page — drag-and-drop zone, multer-ready FormData POST, progress bar, result stats
- Dashboard page — 4 metric card shells for Sparsh's Recharts wiring
- Shared type contracts: `auth.ts`, `api.ts`, `records.ts`, `upload.ts`, `dashboard.ts`
- Design system CSS — 893 lines, full dark palette, glassmorphism, micro-animations

### Atharva — Frontend Phase 2 (completed `2026-04-17 ~22:30 IST`)
- Manual Entry Form (`/manual-entry`) — 7 source type selector cards with emoji + Scope badges
- Dynamic field adaptation — units and categories change based on selected source type
- Supported source types: Fuel Combustion, Electricity, Steam/Heating, Process Emissions, Transportation, Waste Disposal, Water Treatment
- Scope auto-defaults by source type (e.g. Electricity → Scope 2)
- Router wired: `/manual-entry` protected route added
- Sidebar updated with Manual Entry nav link
- Responsive CSS rules for all new components
- TypeScript 6 compatibility fixes: enums converted to `const object + type` pattern
- Build verified: `0 TS errors`, `297 kB bundle`, built in `253ms`

### Sameera — Backend Phase 1 (completed `2026-04-17 ~23:45 IST`)
- Express server with CORS, JSON parsing, static uploads serving
- Health check endpoint `GET /health`
- Prisma schema — 9 entities: Organization, User, Facility, EmissionFactor, EmissionRecord, Supplier, SupplierSubmission, Issue, Report
- SQLite database created and pushed (`dev.db`)
- `POST /api/auth/login` — bcrypt password validation, JWT signing (`userId`, `orgId`, `role`), exact `{ token, user: { id, orgId, role, name } }` contract
- `multer` upload middleware — accepts PDF, PNG, JPG, XLSX, CSV; 20 MB limit; disk storage
- File parser service — CSV (csv-parse), XLSX (xlsx lib), PDF (pdf-parse + regex heuristics), outputs `ParsedActivityItem[]`
- EmissionEngine stub — `processBatch()` and `calculateSingle()` for Sahiti to implement
- `POST /api/records/upload` — file upload → parse → EmissionEngine handoff
- `POST /api/records/manual` — validate → facility org check → calculateSingle → persist
- `GET /api/records` — org-scoped list with scope/facility/status filters
- All routes: organizations, facilities, dashboard (summary + trends), suppliers, reports

### Sameera — Backend Phase 2 (completed `2026-04-17 ~23:55 IST`)
- `authenticateToken` middleware — verifies Bearer JWT, attaches `req.user` payload
- `POST /api/issues` — create issue linked to recordId
- `GET /api/issues` — list with status/severity filters
- `POST /api/issues/:id/assign` — assign owner, auto-set IN_PROGRESS
- `POST /api/issues/:id/status` — update issue status (OPEN / IN_PROGRESS / RESOLVED / CLOSED)
- `DELETE /api/issues/:id` — ADMIN only, uses `restrictToRole`

### Sameera — Backend Phase 3 (completed `2026-04-17 ~23:55 IST`)
- `restrictToRole(['ADMIN'])` RBAC middleware — 403 if role not in allowed list
- Applied to: `DELETE /api/issues/:id`, `POST /api/reports/generate`, `GET /api/organizations/users`

### Database Seed (completed `2026-04-17 ~23:45 IST`)
- 1 Organization: Bharat Steel Manufacturing Pvt. Ltd.
- 3 Users with bcrypt hashed passwords
- 2 Facilities: Pune Manufacturing Plant, Mumbai Warehouse
- 6 Emission Factors (IPCC/GHG Protocol aligned — diesel, petrol, LPG, grid electricity India, road freight, waste landfill)
- 2 Suppliers: FastMove Logistics, GreenPack Materials

---

## In Progress

- Sahiti — EmissionEngine real calculation logic (`processBatch`, `calculateSingle`)
- Jiya — Phase 3 Validation Engine & Analytics
- Sparsh — Dashboard Recharts integration (metric cards wired to `/api/dashboard/summary`)
- Harsh — Global Axios toast interceptor

---

## Blockers

- Dashboard metric cards show `—` until Sahiti seeds real emission records with calculated values
- AI insights layer requires Jiya's `/api/insights/generate` endpoint
- End-to-end supplier submission depends on the backend `/api/supplier/submit` endpoint honoring the agreed phase 2 payload contract

---

## Risks

- Scope creep during implementation
- Over-focus on AI instead of core flows
- Underestimating seeded data preparation
- Spending too much time on export polish

---

## Next Immediate Tasks

- Complete Phase 4 (Analytics & Reporting)
- Integrate Harsh & Atharva's UI code with Jiya's backend
- Seed the `emission_factors` and `organizations` tables in Supabase
- Build Server Actions bridging the frontend forms to the `emissions.ts` calculation service
- Connect the supplier portal to the live backend endpoint and validate file handling
- Reconcile older API documentation with the newer supplier submission contract
- Add backend-backed test coverage for supplier submission and issue workflows

---

## Demo Readiness Checklist

- [x] Problem and solution story defined
- [x] Core MVP scope defined
- [x] User roles documented
- [x] Main screens planned
- [x] Data entities listed
- [x] API contract drafted
- [x] Demo script prepared
- [x] Pitch notes prepared
- [x] Frontend scaffolded and running (`http://localhost:3000`)
- [x] Backend scaffolded and running (`http://localhost:5000`)
- [x] Auth login working end-to-end (JWT issued, Bearer token injected)
- [x] Database seeded with demo users and emission factors
- [x] Manual data entry form built and wired
- [x] File upload UI built and wired
- [x] Implementation started
- [x] Seeded demo data created (1000+ records)
- [x] UI API tester built
- [x] Supplier submission portal (Harsh + Jiya)
- [x] Real emission calculations (Sahiti)
- [x] Dashboard charts with live data (Sparsh + Jiya)
- [x] Governance issue board (Sparsh)
- [ ] Final UI demo built
- [ ] Report output built
- [ ] AI smart summary panel

---

## Live Credentials

| Email | Password | Role |
|-------|----------|------|
| `sustainability@carbonlens.demo` | `demo123` | Sustainability Manager |
| `ops@carbonlens.demo` | `demo123` | Operations Admin |
| `admin@carbonlens.demo` | `admin123` | Admin |

---

## Timestamped Updates

- `2026-04-17 11:29 IST` — Problem statement sourced from `SKB-P1.pdf`
- `2026-04-17 11:55 IST` — Product direction finalized: manufacturing SMEs, practical MVP
- `2026-04-17 12:10 IST` — Documentation planning pack complete
- `2026-04-17 14:00 IST` — Shared type contracts created (`/shared/types/`)
- `2026-04-17 21:30 IST` — Frontend Phase 1 complete: Router, Auth store, Login, Upload, Layout, CSS
- `2026-04-17 22:30 IST` — Frontend Phase 2 complete: Manual Entry Form dynamic UI
- `2026-04-17 22:37 IST` — Frontend TypeScript build passes: 0 errors, 297 kB bundle
- `2026-04-17 23:45 IST` — Backend Phase 1 complete: Express, Prisma, Auth API, File Upload, Parser
- `2026-04-17 23:55 IST` — Backend Phase 2 & 3 complete: JWT middleware, Issues API, RBAC guard
- `2026-04-17 23:55 IST` — Backend TypeScript: 0 errors. Server live at `localhost:5000`
- `2026-04-17 23:58 IST` — End-to-end login verified: JWT returned, facilities endpoint authenticated
- `2026-04-18 01:25 IST` — Layered Integration Merge completed: All developer branches synced, pulled, and merged to `main`.
- `2026-04-18 01:30 IST` — Phase 3 finalized: Live DB aggregations running on Dashboard Line/Pie charts (`recharts`), global toast middleware via global events.

---

## Notes

- No hardcoded data in frontend or backend business logic (policy enforced)
- All data flows through Prisma queries from SQLite
- EmissionEngine is a stub — Sahiti owns implementation
- Dashboard routes exist and return live DB aggregations — will populate once Sahiti seeds records
- Multer upgraded to v2 (security fix from v1 LTS)
