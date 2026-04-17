# CarbonLens Getting Started

## Purpose

This file describes the planned setup and onboarding flow for the future implementation of CarbonLens.

## Planned Tech Stack

- Frontend: React, Vite, TypeScript, Tailwind CSS
- Charts: Recharts
- Backend: Node.js, Express, TypeScript
- Database: SQLite with Prisma
- Auth: simple seeded demo authentication
- Uploads: CSV parsing for activity and emissions data
- AI Add-on: OpenAI-powered narrative summaries as optional enhancement

## Planned Folder Structure

```text
/
  client/
    src/
      components/
      pages/
      features/
      services/
      styles/
  server/
    src/
      routes/
      controllers/
      services/
      validators/
      calculations/
      db/
  prisma/
    schema.prisma
  docs/
    optional later consolidation
```

## Prerequisites

- Node.js 20+
- npm or pnpm
- Git
- Modern browser

## Planned Installation Steps

```bash
npm install
```

If using workspace setup later:

```bash
npm install
npm run setup
```

## Planned Run Commands

```bash
npm run dev
```

Possible split commands:

```bash
npm run dev:client
npm run dev:server
```

Database commands:

```bash
npx prisma migrate dev
npx prisma db seed
```

## Expected Environment Variables

```env
PORT=4000
CLIENT_URL=http://localhost:5173
DATABASE_URL="file:./dev.db"
OPENAI_API_KEY=your_key_here
DEMO_MODE=true
```

## Demo Accounts

- `sustainability@carbonlens.demo` / `demo123`
- `ops@carbonlens.demo` / `demo123`
- `supplier@carbonlens.demo` / `demo123`
- `leadership@carbonlens.demo` / `demo123`

## Seed Data Notes

- One manufacturing organization
- Two facilities
- Preloaded electricity and fuel records
- Preloaded supplier list
- A few unresolved governance issues
- One generated report example

## How To Run Later

## Frontend

```bash
cd client
npm run dev
```

## Backend

```bash
cd server
npm run dev
```

## Database

```bash
npx prisma migrate dev
npx prisma db seed
```

## Troubleshooting Notes

- If Prisma fails, confirm `DATABASE_URL`
- If the frontend does not connect, verify `CLIENT_URL` and backend port
- If charts are blank, ensure seed data was loaded
- If AI summaries fail, app should still work without the API key
- Keep a local-only demo fallback ready

## Deployment Notes For Hackathon

- Frontend can be deployed to Vercel
- Backend can be deployed to Render or Railway
- SQLite is fine for local demo; hosted DB can be deferred
- Always keep a localhost fallback for the live pitch

