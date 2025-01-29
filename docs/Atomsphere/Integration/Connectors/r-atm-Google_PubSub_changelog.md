# Google Pub/Sub changelog 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-2133a9a5-181e-47b9-873c-c2579478f75e"/>
</head>


## Changelog

**2024-11 (Version 24.11.0, Runtime release)**

- Necessary runtime packages are packaged with the connector.

- An issue with access token expiration has been resolved for the Listen operation, allowing continued message reception even after token expiration when using the same connection across multiple runtimes.

  - Messages are now successfully processed after an expiration failure even after the access token expiration.

  - The connector now logs authentication failures due to expired tokens as **INFO-level** messages instead of **WARNING**.

**2023-11 (Current)**

- Overridable fields now include Access Token parameters, Authorization parameters, and Extended JWT Claims (if supported by the connector).