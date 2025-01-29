# Event Streams

<head>
  <meta name="guidename" content="Release Notes"/>
  <meta name="context" content="GUID-df2ae087-76e2-42c9-b51c-1ddf31567dde"/>
</head>

**We added this feature:**

- A new message management feature allows you to perform the following functions, both via the UI and the new message management API:

  - View the message backlog and dead letter backlog for each subscription.
  - Easily display and download message payloads & metadata.
  - Delete Individual messages in the backlog & dead letter backlog for each subscription. (ES-704)
  
  To learn more about this feature, see topics: [Message Management](/docs/Atomsphere/Event%20Streams/es-Event_streams_message_management.md) and [Message Management API](/docs/Atomsphere/Event%20Streams/es-Admin_API_Message_Management.md).

**We added this fix:**

- Added a field to the ES Connector connection to apply an Environment token connection type. This fixes the incorrect encryption added to the Dynamic process property. ES-2149
