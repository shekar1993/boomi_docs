# Platform API and Partner API

<head>
  <meta name="guidename" content="Release Notes"/>
  <meta name="context" content="GUID-ccb42808-4fcd-48f5-b5b0-9045cc1ebd07"/>
</head>

**Deferred**: Subsequent to the March 2024 Runtime release, features and fixes for the March platform release are postponed and will be rescheduled.

**We added these features:**

- Enhanced the Event object by adding the following fields under `eventType user.notification`:

  - `topLevelProcessId`
  - `processId`
  - `processName` (INT-9475)

- You can use the Trading Partner Component object, the Shared Communication Channel Component object, or Environment Extensions to configure the Asyncrhonous MDN call back URL for an AS2 trading partner. (B2B-3836)
