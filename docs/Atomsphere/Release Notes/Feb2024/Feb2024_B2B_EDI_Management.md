# B2B/EDI Management

<head>
  <meta name="guidename" content="Release Notes"/>
  <meta name="context" content="GUID-575a0822-25fc-4c0a-8c5c-280fe67e890a"/>
</head>

**We added these features:**

- You can configure the Asynchronous MDN call back URL for an AS2 trading partner by using the AS2 communication method, an AS2 Communication Channel, or by environment extensions. (B2B-2380)

  To learn more about this feature, see the topics [AS2 Communication Method configuration](../../Integration/Process%20building/r-atm-AS2_Communication_Method_configuration_72a8923f-f787-48ca-84a6-b5d939be9832.md) and [Communication Channel component](../../Integration/Process%20building/r-atm-Communication_Channel_component_c1345812-8f43-4055-8a5d-87d1ae41f27f.md).

- Changed HTTP Accept header in outbound AS2 messages from `text/html, image/gif, image/jpeg, *; q=.2, */*; q=.2` to `*/*` to improve interoperability with some vendors' AS2 software. (B2B-3654)

- Addressed packaging issues in AS2 Client and Server connectors. (B2B-3892, B2B-3893)
