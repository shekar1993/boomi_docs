# Google Ad Manager changelog 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-ce726a6e-fde6-4cc2-a775-2a88288aa05d"/>
</head>

## Changelog

**2024-08 (Version 24.08.1, Current)**

- Necessary runtime packages are now packaged with the connector.

- The connector has been upgraded to support API version v202405. Also, the connector now supports v202405, excluding the `createTargetingPresets` and `updateTargetingPresets` operations from the `TargetingPresets` service.

- The Google Ad Manager API version v202305 has been sunsetted and the connector has been upgraded to support API version v202402.

**2024-04 (Version 24.04.0)**

- The connector is upgraded to support the API versions v202308 and v202311.

- The Google Ad Manager API version v202305 has been deprecated.

**2023-11**

- Several potential security vulnerabilities (Improper Input Validation, Information Exposure, Man-in-the-Middle (MitM), Directory Traversal, and XML External Entity (XXE) Injection) were resolved to make the connector more secure.