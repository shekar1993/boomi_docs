# B2B/EDI Management

<head>
  <meta name="guidename" content="Release Notes"/>
  <meta name="context" content="GUID-3d8fa2a9-c57b-46b8-9ffb-6974151957f3"/>
</head>

**We added these features:**

- You can enable multi-tenancy on the MLLP Shared Server settings panel, allowing you assign ports to specific accounts. If Enable Multi-Tenancy is checked, the container property `com.boomi.container.mllpServer.enableMultiTenant` is set to `true`. (B2B-3449)

  :::caution

  This feature will trigger a runtime restart.

  :::

  To learn more about this feature, see the topic [MLLP Shared Server settings panel](../../Integration/Integration%20management/r-atm-MLLP_Server_Settings_panel_e60ac7aa-e6ce-45e9-9b5f-7701bb443cc8.md).

- You can use the Trading Partner Component object, the Shared Communication Channel Component object, or Environment Extensions to configure the Asynchronous MDN call back URL for an AS2 trading partner. (B2B-3836)

  To learn more about this feature, see the topics [Trading Partner Component object](https://developer.boomi.com/api/platformapi#tag/TradingPartnerComponent), [Shared Communication Channel Component object](https://developer.boomi.com/api/platformapi#tag/SharedCommunicationChannelComponent), and [Environment Extensions object](https://developer.boomi.com/api/platformapi#tag/EnvironmentExtensions).

- You can configure Negative MDN handling for a trading partner that uses the AS2 communication method to determine how a process handles negative MDN responses. (B2B-3972)

  To learn more about this feature, see the topic [AS2 Communication Method configuration](../../Integration/Process%20building/r-atm-AS2_Communication_Method_configuration_72a8923f-f787-48ca-84a6-b5d939be9832.md).

- If **Fail on Negative MDN** is enabled for a trading partner with the AS2 communication method, the process fails if a negative MDN is received. You can use the AS2 `ackstatus` and `mdnmessage` document properties to view and get additional information about synchronous MDN responses in Process Reporting. (B2B-3839)

  To learn more about this feature, see the topic [AS2 Communication Method configuration](../../Integration/Process%20building/r-atm-AS2_Communication_Method_configuration_72a8923f-f787-48ca-84a6-b5d939be9832.md).

- The MLLP Server connector and MLLP Client connector now support the X12 document standard. (B2B-3924)

  To learn more about this feature, see the topics [MLLP Server connector](../../Integration/Connectors/r-atm-MLLP_Server_connector_1c16c812-6151-4224-91f8-a2be9087c85b.md) and [MLLP Client connector](../../Integration/Connectors/r-atm-MLLP_Client_connector_217bc186-1536-4379-8434-4be3997340e3.md).

- You can now select MLLP as a communication method on X12 trading partner components by using the Boomi Enterprise Platform or the Trading Partner Component object. (B2B-3924)

  To learn more about this feature, see the topic [MLLP Communication Method configuration](../../Integration/Process%20building/r-atm-MLLP_Communication_Method_configuration_efcf53f8-07c5-4a5a-a23e-8e66435ea03a.md).

- If you select **Wait for Response** in the MLLP Client Send operation, you can choose which documents are forwarded to the next step in the process by configuring the **Step Output** setting:

  - Input Documents - Allows the request messsage to continue
  - Acknowledgments - Allows the response message to continue (B2B-3954)

  To learn more about this feature, see the topic [MLLP Client operation](../../Integration/Connectors/r-atm-MLLP_Client_operation_3c8c501c-fed9-494e-8de5-98f2f4d2e854.md).

- Added support for TA1 and 997/999 responses as synchronous MLLP response messages. (B2B-3954)

- You can use the Return Documents step in a process to return a message to the MLLP Server for synchronous response. (B2B-3867, B2B-4045)

  To learn more about this feature, see the topic [Return Documents step](../../Integration/Process%20building/r-atm-Return_Documents_shape_61192114-0f9d-49d8-bcd0-1c8d6a843db2.md).

**We fixed these issues:**

- Addressed an issue where environment extensions could not be used to override the certificates in the AS2 communication method of a Trading Partner component. (B2B-3740)

  :::note

  Following the April 2024 Runtime Release, release of this fix was postponed and will be rescheduled.

  :::

- MLLP Server routes are correctly updated when the connector is updated so that a runtime restart is no longer required. (B2B-3985)

- An error no longer displays when certificates are loaded after the MLLP Server connector is updated. (B2B-3987)

- A NullPointerException error is no longer generated when an X12 connector or MLLP Client connector receives a message with an invalid note code for the TA1 segment. (B2B-4033)

- Users can no longer update a trading partner's extended fields if their account does not have the appropriate permissions. (B2B-3736)
