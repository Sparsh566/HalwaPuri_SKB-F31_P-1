# CarbonLens Work Done Tracker

This document tracks the cleaned and current project direction.

## Completed

- Finalized product identity as a smart ESG control tower for manufacturing SMEs
- Locked the product positioning to operations and governance first
- Kept AI as a supporting layer rather than the system core
- Restricted Scope 3 to a limited and realistic MVP
- Created and aligned the main project docs around CarbonLens
- Cleaned conflicting documentation that had pushed OCR-heavy and oversized MVP scope
- Updated README, idea, CRD, PRD, architecture, task plan, and pitch notes for one consistent story
- **Phase 1 Backend Execution:** Implemented `schema.prisma` with robust base data seeding via `seed.ts` (1000+ records). Express server scaffolding and Master Data CRUD APIs established.
- **Phase 2 Supplier Portal Execution:** Deployed secure JWT-based supplier invite endpoints and an external `multer` form-data endpoint strictly verifying, parsing, and storing Scope 3 metrics and attached evidence documents.

## Current Status

- **Implementation Phase Active**
- Phase 1 & 2 Backend APIs constructed, seeded, and tested via web UI.
- Moving on to Phase 3 (Validation Engine & UI Integration).

## Removed or Simplified

- OCR-first ingestion assumptions from MVP scope
- Massive Scope 3 expectations from early planning
- Overly enterprise-heavy branch/task structure
- Duplicate README variants not needed for the project

## Next Recommended Work

1. Finalize the canonical tech stack in docs
2. Create implementation scaffolding
3. Complete the calculation and validation engines (Phase 3)
4. Integrate the UI logic against the deployed backend
5. Build dashboard & reporting layers
   - dashboard
   - governance
   - report summary
   - AI-smart summary layer
