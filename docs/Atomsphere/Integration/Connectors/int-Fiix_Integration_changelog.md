# Fiix - Partner changelog

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-20b624ee-e986-4d57-9ea3-84d22c210911"/>
</head>

## Changelog

**2024-09 (Version 60, Current)**

- New Objects Added
  - BusinessRole
  - RCAAction
  - RCACause
  - RCAGrouping
  - RCAGroupingAction
  - RCAGroupingCause
  - RCAProblem
  - RegionUser
  - RegionUserGroup
  - UserCertification
  - WorkOrderTaskFile

- Objects Amended
  - Asset
  - Project
  - ScheduledMaintenance
  - Stock
  - StockHistory
  - User
  - WorkOrder

- Removed logic to find `"` and replace within the code since this is preventing the connector from querying data which contains `"` within the query parameter.