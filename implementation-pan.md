# CarbonLens Implementation Pan

## Final Chosen Project Scope

CarbonLens will be a dashboard-first ESG intelligence platform for manufacturing SMEs. The MVP will centralize emissions-related activity data, calculate Scope 1 and Scope 2 emissions, capture limited Scope 3 supplier submissions, flag quality gaps, track governance issues, and generate a summary report.

## System Modules

- Authentication and seeded role access
- Dashboard and analytics
- Activity data ingestion
- Emission calculation engine
- Supplier submission module
- Validation and issue engine
- Governance and assignment workflow
- Report generation
- Optional AI insight module

## Page And Module Breakdown

- Login Page
- Dashboard Page
- Upload Data Page
- Manual Entry Page
- Records View
- Supplier Submission Page
- Issues And Governance Page
- Report Generator Page

## Data Model Plan

Main entities:
- Organization
- User
- Facility
- EmissionRecord
- EmissionFactor
- Supplier
- SupplierSubmission
- Issue
- Scenario
- Report

Relationships:
- One organization has many facilities, users, records, suppliers, and reports
- Facilities have many emission records
- Suppliers have many submissions
- Issues can be linked to records or supplier submissions
- Reports aggregate emissions and issue summaries

## API Plan

Authentication:
- `POST /auth/login`

Dashboard:
- `GET /dashboard/summary`
- `GET /dashboard/trends`

Records:
- `GET /records`
- `POST /records/upload`
- `POST /records/manual`

Suppliers:
- `GET /suppliers`
- `POST /supplier-submissions`

Governance:
- `GET /issues`
- `POST /issues/:id/assign`
- `POST /issues/:id/status`

Reports:
- `POST /reports/generate`
- `GET /reports`

Optional AI:
- `POST /insights/generate`

## Tech Stack Decision

- Frontend: React + Vite + TypeScript + Tailwind CSS
- Charts: Recharts
- Backend: Node.js + Express + TypeScript
- Database: SQLite + Prisma
- Auth: seeded demo auth
- File handling: CSV upload and parse
- AI: optional OpenAI summaries

## System Architecture Overview

- React frontend for data entry, dashboard, governance, and reporting
- Express backend for APIs and orchestration
- Prisma ORM over SQLite for data persistence
- Dedicated calculation layer for emissions logic
- Validation layer that creates issue records
- Reporting layer that converts aggregates into exportable summaries
- Optional AI layer that reads computed outputs and generates narrative commentary

## Step-By-Step Build Order

1. Initialize project structure and shared types
2. Define Prisma schema and seed data
3. Build basic auth and seeded user roles
4. Implement core entities and record APIs
5. Build emission calculation service
6. Build dashboard summaries and charts
7. Add CSV upload and manual entry
8. Add supplier submission flow
9. Add validation and issue tracking
10. Build report generation page
11. Add optional AI insight cards
12. Polish UI, data, and demo story

## 24-Hour Execution Timeline

### Hour 0 To 2

- Finalize scope
- Set up repo and tech stack
- Define schema and data flow

### Hour 2 To 8

- Build backend skeleton
- Seed database
- Implement records and calculations

### Hour 8 To 14

- Build dashboard
- Build upload/manual entry
- Build supplier submission

### Hour 14 To 18

- Build governance and issue views
- Add report generation

### Hour 18 To 22

- Style UI
- Add seeded scenarios
- Improve charts and messaging

### Hour 22 To 24

- Dry-run demo
- Fix blockers
- Prepare pitch and fallback flow

## Priority Matrix

## Must Have

- Dashboard
- Record upload/manual entry
- Scope 1 and 2 calculations
- Supplier submission
- Issue tracking
- Report summary

## Should Have

- Better data quality score
- Trend charts
- Cleaner governance actions
- Scenario snapshot

## Could Have

- AI summaries
- Export styling
- Extra supplier nudges

## Risks And Fallback Choices

- Upload parsing fails
  Use seeded import preview and sample upload

- Scope 3 becomes too large
  Limit to one or two supplier categories

- Auth slows development
  Use seeded mock login flow

- AI integration fails
  Use static recommendation cards

- Report export is unstable
  Use browser-printable report page

## Ownership Slots

- Member 1: backend and calculations
- Member 2: frontend dashboard and charts
- Member 3: supplier flow and governance
- Member 4: styling, report page, pitch support

