# B2B/EDI Management

<head>
  <meta name="guidename" content="Release Notes"/>
  <meta name="context" content="GUID-3044f325-68a0-48ad-ad95-ba9ec377c469"/>
</head>

**We added this feature:**

- You can set MLLP framing characters&mdash;start block, end block, and end data characters&mdash;for the MLLP Client and MLLP Server connectors. Set the characters in the MLLP Client Connection settings to apply them to all documents that use the connection. Set the characters at a port level in the MLLP Server settings to apply them to all documents received by the server. (B2B-4005)

  To learn more about this feature, refer to [MLLP Server Settings panel](../../Integration/Integration%20management/r-atm-MLLP_Server_Settings_panel_e60ac7aa-e6ce-45e9-9b5f-7701bb443cc8.md) and [MLLP Client connection](../../Integration/Connectors/r-atm-MLLP_Client_connection_124b91d1-4e7a-4248-bde8-ad5ae81ff382.md).

  :::info Important

  You must manually update MLLP Client connector after the June platform release for framing characters to take effect in the runtime.

  :::

**We fixed these issues:**

- If the MLLP Server attempts to bind to an invalid port when starting, you no longer have to restart the Atom after changing the port in the Boomi Enterprise Platform. You can restart the MLLP Server, which will correctly bind to the new valid port. (B2B-4179)

- Trace logging for the MLLP Server now shows the number of accounts registered in the route map, the number of routes registered to each account, and the route and process information of a matched route. (B2B-4145)

- A NullPointerException error is no longer generated when an X12 or MLLP Client connector receives a message with an invalid note code for the TA1 segment. (B2B-4033)

- A warning is now logged when the MLLP Client connector can’t parse a message response instead of failing. (B2B-4154)

- X12 messages are no longer truncated when passing through the MLLP Server connector to the listener process. (B2B-4176)

- For X12 messages, the MLLP Server auto-acknowledgment now generates an ISA segment with all fields set to appropriate values in a TA1 response. (B2B-4177)

- MLLP ports no longer override the client authentication setting for a specific port. (B2B-4183)

- Improved outbound validation checks for RosettaNet documents. (B2B-4085)

- You can read and write the following fields EDIFACT and ODETTE documents by using document properties:
  
  - Recipient Reference/Password
  - Recipient Reference/Password Qualifier
  - Processing Priority Code
  - Test Indicator
  
  (B2B-3974)
