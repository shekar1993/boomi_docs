# Platform API and Partner API

<head>
  <meta name="guidename" content="Release Notes"/>
  <meta name="context" content="GUID-ee77ecc4-f00f-42ba-847f-2e029677dc46"/>
</head>

**We added these features:**

- Enhanced the Event object by adding the following fields under `eventType user.notification`:

  - `topLevelProcessId`
  - `processId`
  - `processName` (INT-9475)

  To learn more about this feature, see the topic [Event object](https://developer.boomi.com/api/platformapi#tag/Event).

- You can use the Trading Partner Component object, the Shared Communication Channel Component object, or Environment Extensions to configure the Asynchronous MDN call back URL for an AS2 trading partner. (B2B-3836)

  To learn more about this feature, see the topics [Trading Partner Component object](https://developer.boomi.com/api/platformapi#tag/TradingPartnerComponent), [Shared Communication Channel Component object](https://developer.boomi.com/api/platformapi#tag/SharedCommunicationChannelComponent), and [Environment Extensions object](https://developer.boomi.com/api/platformapi#tag/EnvironmentExtensions).
