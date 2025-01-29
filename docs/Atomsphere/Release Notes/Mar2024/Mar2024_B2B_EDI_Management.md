# B2B/EDI Management

<head>
  <meta name="guidename" content="Release Notes"/>
  <meta name="context" content="GUID-0809fc76-4c35-4724-b08c-5043bd7ca953"/>
</head>

**Deferred**: Subsequent to the March 2024 Runtime release, features and fixes for the March platform release are postponed and will be rescheduled.

**We added these features:**

- You can enable multi-tenancy on the MLLP Shared Server settings page, allowing you assign ports to specific accounts. If Enable Multi-Tenancy is checked, the container property `com.boomi.container.mllpServer.enableMultiTenant` is set to `true`. (B2B-3449)

  :::caution

  This feature will trigger a runtime restart.

  :::

  This feature has code changes in the Runtime Release, but is not functionally available until the Platform Release.

- The AS2 Client Connector will now forward documents to the next step in the process. You can use the AS2 `ackstatus` and `mdnmessage` document properties to view and get additional information about synchronous MDN responses. (B2B-3839)

  This feature has code changes in the Runtime Release, but is not functionally available until the Platform Release.

- You can use the Trading Partner Component object, the Shared Communication Channel Component object, or Environment Extensions to configure the Asynchronous MDN call back URL for an AS2 trading partner. (B2B-3836)

  This feature is not in the Runtime Release.

**We fixed these issues:**

- Addressed an issue where environment extensions could not be used to override the certificates in the AS2 communication method of a Trading Partner component. (B2B-3740)

- MLLP Server routes are correctly updated when the connector is updated so that a runtime restart is no longer required. (B2B-3985)

- An error no longer displays when certificates are loaded after the MLLP Server connector is updated. (B2B-3987)

These fixes are in the Runtime Release.
