# Salesforce Platform Events changelog

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-1fa44772-223b-4368-a7d3-28e422f9ab07"/>
</head>

## Changelog

**2024-11 (Version 24.09.0, Current)**

- Allow the SFPE listen manager to use the Persisted Connector Cache to save and retrieve the `replayID` on send and receive actions when the **Enable Persisted Connector Cache** (`com.boomi.container.connector.persistence.enabled`) container property is enabled in the Advanced Properties section of the container properties. If the container owner is filtering out a specific set of connectorType values to use connector property persistence on runtime, then ensure that this connector is included. 

  This allows the SFPE connector to persist the replayID and start over from the point before the stop when pausing or stopping the listener.

  If the persisted `replayID` is invalid, the fail over is to the initial `replayID` mentioned in the connection.

**2024-04 (Version 24.03.1)**

- Upgraded the CometD library from version 3.1.2 to 5.0.0 for security improvements.

**2023-11**

- Overridable fields now include Access Token parameters, Authorization parameters, and Extended JWT Claims (if supported by the connector).