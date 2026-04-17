# Changelog
## CarbonLens

All notable documentation changes are tracked here.

## [Unreleased]

### Added
- **Phase 1 Implementation:** `server` architecture with Express, Prisma ORM, and Zod validation. Seeded database with `faker` (1,000 Scope 3 validation records). Organization & Facility CRUD APIs.
- **Phase 2 Implementation:** JWT-based invite routing controller for secure supplier onboarding. External `multer` endpoint (`/api/supplier/submit`) processing `multipart/form-data` uploads securely.
- Visual API harness (`test.html`) to natively test token generation and file uploading.

### Updated
- Unified the repo around the CarbonLens product direction
- Simplified the MVP to operations/governance first
- Kept AI as a supporting layer
- Reduced Scope 3 expectations to a limited realistic flow
- Removed OCR-first assumptions from MVP planning

### Cleaned Up
- Removed duplicate README variants
- Replaced conflicting oversized task and architecture assumptions
- Aligned PRD, architecture, tasks, and work tracker with final product scope
