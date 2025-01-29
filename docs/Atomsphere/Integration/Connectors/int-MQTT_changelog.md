# MQTT changelog

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-d9d1d8bb-250d-4e31-a910-629c1668fc43"/>
</head>

## Changelog

**2025-01 (Version 5, Current)**

- The MQTT connector has been updated to support a default message size limit of 1 MB, with the ability to increase or decrease this limit by a configurable container property override (`com.boomi.container.connector.sizeLimitedUpdateOperation.maxSize`). Due to MQTT broker constraints, the maximum size allowed is 256 MB for this connector.

**2024-04 (Version 3)**

- Initial GA release.
- Connector can also run in a molecule.