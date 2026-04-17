# CarbonLens Data Model

## Overview

The data model is intentionally compact so the MVP remains understandable and implementable within a hackathon.

## Entities

## Organization

Fields:
- `id`
- `name`
- `industry`
- `reportingYear`
- `createdAt`

## User

Fields:
- `id`
- `organizationId`
- `name`
- `email`
- `role`
- `createdAt`

Roles:
- `SUSTAINABILITY_MANAGER`
- `OPERATIONS_ADMIN`
- `SUPPLIER`
- `LEADERSHIP_REVIEWER`

## Facility

Fields:
- `id`
- `organizationId`
- `name`
- `location`
- `type`
- `createdAt`

## EmissionRecord

Fields:
- `id`
- `organizationId`
- `facilityId`
- `sourceType`
- `scope`
- `category`
- `activityValue`
- `activityUnit`
- `emissionFactorId`
- `calculatedEmissions`
- `periodMonth`
- `periodYear`
- `status`
- `createdAt`

## EmissionFactor

Fields:
- `id`
- `name`
- `scope`
- `category`
- `factorValue`
- `factorUnit`
- `sourceReference`
- `createdAt`

## Supplier

Fields:
- `id`
- `organizationId`
- `name`
- `contactName`
- `contactEmail`
- `category`
- `priorityTier`
- `createdAt`

## SupplierSubmission

Fields:
- `id`
- `supplierId`
- `organizationId`
- `scope3Category`
- `activityValue`
- `activityUnit`
- `reportingPeriod`
- `dataQualityScore`
- `status`
- `notes`
- `createdAt`

## Issue

Fields:
- `id`
- `organizationId`
- `recordType`
- `recordId`
- `title`
- `description`
- `severity`
- `status`
- `ownerUserId`
- `dueDate`
- `createdAt`

## Scenario

Fields:
- `id`
- `organizationId`
- `name`
- `assumptionType`
- `assumptionValue`
- `estimatedImpact`
- `createdAt`

## Report

Fields:
- `id`
- `organizationId`
- `title`
- `reportingPeriod`
- `summary`
- `generatedByUserId`
- `createdAt`

## Relationship Summary

- Organization has many users, facilities, records, suppliers, issues, scenarios, and reports
- Facility has many emission records
- Supplier has many supplier submissions
- EmissionRecord links to one emission factor
- Issue can reference either an emission record or supplier submission
- Report is generated for one organization and one reporting period

