# Event Streams

<head>
  <meta name="guidename" content="Release Notes"/>
  <meta name="context" content="GUID-6d83c87a-9cc2-4d31-8634-8966762f029e"/>
</head>

**We added these features:**

- We added an enhanced level of security to Event Streams, which restricts access to the settings tab so that only Admins can view, edit, and delete information in the settings tab. (ES-2547)

- We improved Event Streams' capabilities by introducing a new REST API that enables seamless message production and enhances functionality for applications relying on HTTP-based interactions. (ES-115)

  :::note

  The deployment of this feature may have resulted in a temporary metrics gap in your Event Streams dashboard and when accessing dashboard metrics data via APIs.

  :::
