# CarbonLens Hackathon Rules

## Core Build Rules

- Build MVP-first, not wishlist-first
- Every feature must support the final demo story
- Deterministic emissions calculations come before AI features
- No overengineering of architecture, auth, or infra
- Prioritize working flows over polished edge cases

## Product Rules

- Keep the product focused on manufacturing SMEs
- Scope 1 and Scope 2 must work reliably
- Scope 3 must be limited but meaningful
- Governance should be visible even if lightweight
- Reporting should be concise and demo-ready

## Technical Rules

- Use seeded data whenever live or real data is risky
- Separate calculations from UI logic
- Keep validation rules explicit and understandable
- AI must never be the source of truth for calculations
- App must have a local demo path without external dependencies

## Team Discipline Rules

- Log key assumptions immediately
- Update `progress.md` as the source of execution truth
- If a feature slips the timeline, cut scope instead of adding complexity
- Use simple naming and predictable folder structure
- Align all docs and implementation to the same story

## Timeboxing Rules

- First 2 hours: finalize scope, data model, flow, and setup
- Next 6 hours: build core data ingestion and calculations
- Next 6 hours: build dashboard, suppliers, and governance views
- Next 4 hours: reporting, styling, and seeded demo data
- Last 6 hours: testing, demo polish, and fallback plan

## Fallback Rules

- If live upload parsing is unstable, use seeded import preview
- If AI summary is unstable, replace with rule-based insight cards
- If report export is unstable, use a printable report page
- If supplier auth is unstable, use a simple dedicated submission page
- If charts fail, use summary tables and headline metrics

## Presentation Rules

- Keep screens clean and easy to scan
- Do not overwhelm judges with standards jargon
- Explain the pain before the platform
- Show accountability as a differentiator
- End with business impact and roadmap

