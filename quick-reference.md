# CarbonLens Quick Reference

## Elevator Pitch

CarbonLens is a digital ESG intelligence platform that gives manufacturing companies one trusted place to upload emissions-related data, calculate GHG footprints, collect supplier inputs, track data quality, and generate audit-ready sustainability insights.

## Problem In 3 Bullets

- ESG and GHG data is fragmented across teams and suppliers
- Manual reporting is slow, error-prone, and hard to audit
- Leadership lacks a clear, trusted emissions view for decision-making

## Solution In 3 Bullets

- Centralize activity and supplier data in one platform
- Calculate Scope 1, Scope 2, and limited Scope 3 emissions transparently
- Add governance, accountability, and reporting on top of the data

## Core Features

- Activity data upload and manual entry
- Scope 1 and Scope 2 calculation engine
- Supplier Scope 3 submission flow
- Data quality score and issue detection
- Governance dashboard and assignment flow
- Summary report generator
- Optional AI narrative insights

## Planned Stack

- React + Vite + TypeScript + Tailwind CSS
- Recharts
- Node.js + Express + TypeScript
- SQLite + Prisma

## User Roles

- Sustainability Manager
- Operations/Admin
- Supplier
- Leadership/Board Viewer

## Demo Flow Summary

1. Show dashboard with seeded emissions snapshot
2. Upload a CSV and update records
3. Display refreshed calculations
4. Submit supplier Scope 3 data
5. Surface a validation issue and governance owner
6. Generate a summary report

## Key APIs Summary

- `POST /auth/login`
- `GET /dashboard/summary`
- `POST /records/upload`
- `POST /records/manual`
- `POST /supplier-submissions`
- `GET /issues`
- `POST /reports/generate`

## Key Entities Summary

- Organization
- Facility
- EmissionRecord
- Supplier
- SupplierSubmission
- EmissionFactor
- Issue
- Scenario
- Report

## Judge Talking Points

- Solves a real enterprise pain with a simple MVP
- Moves beyond dashboarding into accountability
- Makes Scope 3 practical instead of ignoring it
- Designed for audit readiness and decision support
- Feels realistic for SMEs, not only large enterprises

## One-Minute Version

CarbonLens helps manufacturing companies manage ESG and emissions data without relying on disconnected spreadsheets. It centralizes data, calculates carbon footprint, involves suppliers in Scope 3 reporting, flags quality issues, and gives leaders a trusted sustainability snapshot they can actually use.

