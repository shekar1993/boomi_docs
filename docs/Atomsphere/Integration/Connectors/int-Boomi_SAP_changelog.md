# Boomi for SAP changelog 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-83ac4c70-2213-4b02-81e3-5047bd919051"/>
</head>

## Changelog

**2024-07 (Version 33, Current)**

- New operation: LISTEN

  - It allows the connector to browse WebSocket EDA subscriptions, build response profiles, and connect to corresponding WebSocket servers identified through browse. It supports JSON and XML schemas.
  
  - Once connected, the connector listens to any message sent to the subscription’s receiver. It then processes this message and submits the result to downstream processes. If the connection fails, one error is submitted, and an indefinite retry loop is started.

:::info Important

SAP will send events to the WebSocket server regardless of listening connectors; the event may be lost if no connector is listening.

:::

**2024-02 (Version 32)**

- ABAP_PROXY_SEND function is modified to import request and response profile using Import wizard.

**2023-09 (Version 29)**

- A new `PROXY_SEND` operation utilizes SAP ABAP Proxies and timeout when the connection is slow or unresponsive.