# Solace PubSub+ - Partner changelog

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-953c51ad-1031-4487-aea7-bed600fae648"/>
</head>

## Changelog

**2025-01 (Version 318, Current)**

- Persistent Transacted Send operations no longer fail with a 503 error when the documents in the transaction were still within the limit.

- Resolved the increased CPU usage issue that occurred in certain cases in the previous release. The system performance has been restored to previous levels.

**2024-11 (Version 313)**

- Upgraded the JCSMP dependency to v10.25.0 to address an issue that prevented message delivery when a consumer `flowId` grew larger than the max signed 32-bit integer.

**2024-09 (Version 305, Cancelled)**

- This version was cancelled during the Runtime release window and reverted back to version 300.

**2024-08 (Version 300)**

- The Listen operation is updated to respond to container shutdown signals, where it will stop accepting incoming messages and process those in flight, ensuring a smooth and predictable shutdown process.

**2024-04 (Version 297)**

- A new tracked property, **ReplyToAsString**. This property displays the decoded format of the **replyTo** tracked property to improve readability.

- Enhancements to the logging functionality of our listener. Upon startup, the listener logs its configuration, which will significantly aid our support team during debugging processes.

**2024-01 (Version 295)**

- We've introduced support for the OAuth 2.0 Client Credentials grant type. This allows applications to request an access token using their client credentials (Client ID and Client Secret) to authenticate against the authorization server and get a token directly. This strategy is particularly beneficial for long-lived and stable connections.

**2023-10 (Version 294)**

- Handling of Property mismatch while attempting to create a pre-existing queue.