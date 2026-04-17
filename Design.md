# CarbonLens Design Plan

## Product Vision

CarbonLens should feel like a trustworthy ESG control tower rather than a confusing compliance tool. The design must communicate clarity, confidence, and operational usefulness. It should help users move from scattered data to visible insight and accountable action.

## UX Goals

- Make data feel organized and manageable
- Reduce fear around complex emissions reporting
- Surface issues early and clearly
- Keep every action tied to a real business outcome
- Support a fast, clean hackathon demo

## User Roles

- Sustainability Manager
- Operations/Admin User
- Supplier
- Leadership/Board Viewer

## User Journeys

## Sustainability Manager Journey

1. Logs in and sees organization-wide emissions snapshot
2. Reviews data quality and issue count
3. Opens category or facility breakdown
4. Checks supplier submission coverage
5. Generates summary report

## Operations/Admin Journey

1. Logs in
2. Uploads fuel, electricity, transport, or waste data
3. Receives validation feedback
4. Fixes incomplete records
5. Confirms calculations updated successfully

## Supplier Journey

1. Opens a guided supplier submission page
2. Enters relevant activity or emissions data
3. Reviews completeness score
4. Submits data
5. Gets acknowledgement

## Leadership Journey

1. Opens executive dashboard
2. Reviews total footprint, trend, and hotspot categories
3. Sees outstanding governance risks
4. Downloads summary report

## Main Screens And Pages

- Login
- Dashboard
- Data Upload
- Manual Data Entry
- Records Table
- Supplier Submission Portal
- Governance And Issues
- Scenario/Insight View
- Report Generator

## Dashboard Layout Idea

Top section:
- Total emissions
- Scope 1 total
- Scope 2 total
- Scope 3 coverage indicator
- Data quality score

Middle section:
- Emissions by category
- Emissions by facility
- Monthly trend
- Top risk flags

Bottom section:
- Supplier response status
- Outstanding issues
- Recommended actions

## Data Upload Flow

1. User selects data type
2. Uploads CSV or chooses manual entry
3. System validates required fields
4. Preview table shows accepted and flagged rows
5. User confirms import
6. Dashboard refreshes with updated calculations

## Supplier Portal Flow

1. Supplier receives request or opens dedicated link
2. Selects category and reporting period
3. Enters quantity, unit, and optional notes
4. Validation checks completeness
5. Submission stored and linked to organization

## Governance And Escalation Flow

1. Data issue is detected by validation engine
2. Issue is created automatically
3. Owner is assigned
4. Priority and due date are visible
5. Issue status updates as resolved or escalated

## Reporting And Export Flow

1. User opens report generator
2. Selects period and organization/facility scope
3. System compiles emissions summary and issue notes
4. Report preview displays
5. User exports PDF-style summary or presentation-ready view

## Suggested Visual Direction

- Clean, professional, sustainability-focused
- White or warm neutral base with green and slate accents
- Cards, tables, and charts with strong spacing
- High trust feel, less decorative noise
- Emphasis on clarity over “futuristic” UI

## Mobile Responsiveness Notes

- Dashboard cards stack vertically
- Tables collapse to priority fields
- Supplier portal should be highly mobile-friendly
- Report preview can become a simplified scroll layout
- Navigation should remain simple and obvious

## Text Wireframe Notes

## Dashboard

Left nav:
- Dashboard
- Upload Data
- Suppliers
- Issues
- Reports

Main:
- Hero summary cards
- Emissions chart row
- Data quality and governance row
- Action list section

## Upload Page

- Data source selector
- Drag-and-drop CSV area
- Sample file template button
- Validation preview table
- Import button

## Supplier Page

- Simple guided form
- Progress indicator
- Required vs optional sections
- Submission summary

## Governance Page

- Issue list with status, owner, severity
- Quick filters
- Detail drawer for root cause and next action

## UX Principles

- Clarity: users should always know what data is missing and what happens next
- Trust: calculations and validation must be understandable
- Simplicity: avoid enterprise software clutter
- Speed: every main action should take a few steps only
