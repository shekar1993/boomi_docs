# Kafka changelog

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-7d7953ab-5d1c-4aea-9e15-e4fda5ee03d9"/>
</head>


## Changelog

**2024-06 (Version 24.06.1)**

- Messages read or listened from a Kafka topic will now be processed without exceptions when the header value is missing, and the property will be displayed in tracked properties with the header value as a blank string.

**2024-01 (Version 24.02.1)**

- The Topic Name can now be imported dynamically across all operations. 

- A tracked property to return the **Message Timestamp** on Consume and Listen operations.

- **Consumer Group**, an optional connection property. When you set a **Consumer Group** name in the connection, the connector will use that value for running the test connection and importing the operations. The **Consumer Group** must be defined in either the connection or operation for the Consume, Listen and Commit Offset operations.