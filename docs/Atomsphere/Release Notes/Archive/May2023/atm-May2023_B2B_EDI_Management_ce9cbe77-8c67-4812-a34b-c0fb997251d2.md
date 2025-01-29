# B2B/EDI Management

<head>
  <meta name="guidename" content="Release Notes"/>
  <meta name="context" content="GUID-ce9cbe77-8c67-4812-a34b-c0fb997251d2"/>
</head>





**Features:**

-  You can transmit and receive files with the OFTP2 protocol by using the OFTP2 Client connector and OFTP2 Server connector. Send and Get actions are supported for the OFTP2 Client connector and the Listen action is supported for the OFTP2 Shared Server and OFTP2 Server connector. You can also configure the OFTP2 Communication Method for a trading partner. (B2B-560, B2B-2725, B2B-2680, B2B-2681, B2B-2682, B2B-2683)

    To learn more about this feature, see the topics [OFTP2 Client connector](/docs/Atomsphere/Integration/Connectors/int-OFTP2_client_connector_678c1bc3-2174-4a76-9b9f-30be4e15dc78.md), [OFTP2 Client connection](/docs/Atomsphere/Integration/Connectors/int-OFTP2_client_connection_88c42d4d-6711-4ac5-b09a-384e0e74695b.md), [OFTP2 Client operation](/docs/Atomsphere/Integration/Connectors/int-OFTP2_client_operation_a56473ee-12be-4346-9e19-03fb469c56fa.md), [OFTP2 Server connector](/docs/Atomsphere/Integration/Connectors/int-OFTP2_server_connector_667d6b41-4898-4cdf-a654-f881281b3c92.md), [OFTP2 Server operation](/docs/Atomsphere/Integration/Connectors/int-OFTP2_server_operation_629ae4b1-a902-4b5a-8d95-4d9f8c5b9e39.md), and [OFTP2 Communication Method configuration](/docs/Atomsphere/Integration/Process%20building/int-OFTP2_communication_method_configuration_8023d41a-5525-4f9a-a5be-91139839eeae.md).

-   You can select the document cache component Attachment Cache in the AS2 Message Options tab for a trading partner to attach binary or unstructured data, such as PDFs or images, to EDI documents for both inbound and outbound data flow. \(B2B-2952, B2B-2958, B2B-2957\)

    To learn more about this feature, see the topic [AS2 Communication Method configuration](/docs/Atomsphere/Integration/Process%20building/r-atm-AS2_Communication_Method_configuration_72a8923f-f787-48ca-84a6-b5d939be9832.md).

-   The MLLP Client connector and MLLP Server connector support TLS/SSL encryption. \(B2B-2561, B2B-3008\)

    To learn more about this feature, see the topics [MLLP Client connection](/docs/Atomsphere/Integration/Connectors/r-atm-MLLP_Client_connection_124b91d1-4e7a-4248-bde8-ad5ae81ff382.md) and [MLLP Server Settings panel](/docs/Atomsphere/Integration/Connectors/r-atm-MLLP_Server_Settings_panel_e60ac7aa-e6ce-45e9-9b5f-7701bb443cc8.md).

-   You can configure the protocols and cipher suites to establish secure communication for an MLLP Server by using the container.properties file. The following ciphers are configurable:

    -   TLS\_ECDHE\_RSA\_WITH\_AES\_256\_GCM\_SHA384

    -   TLS\_ECDHE\_RSA\_WITH\_AES\_128\_GCM\_SHA256

    -   TLS\_DHE\_RSA\_WITH\_AES\_256\_GCM\_SHA384

    -   TLS\_DHE\_RSA\_WITH\_AES\_128\_GCM\_SHA256

    -   TLS\_ECDHE\_RSA\_WITH\_AES\_256\_CBC\_SHA384

    -   TLS\_ECDHE\_RSA\_WITH\_AES\_128\_CBC\_SHA256

:::note

The best supported protocol is TLSv1.2.

:::

 \(B2B-3009\)

 To learn more about this feature, see the topic [Configuring Shared Web Server SSL protocols and cipher suites](/docs/Atomsphere/Integration/Integration%20management/t-atm-Configuring_Shared_Web_Server_SSL_protocols_ebafef2f-ee35-4ad2-8ae0-3f3ae07e8768.md).

-   You can configure an MLLP Server to require client authentication when TLS/SSL support is enabled. To require client authentication, you must provide a client public certificate on the MLLP Server's listen operation. The client then must provide the required certificate for the server to authenticate and establish a secure connection. \(B2B-3044\)

    To learn more about this feature, see the topic [MLLP Server Settings panel](/docs/Atomsphere/Integration/Connectors/r-atm-MLLP_Server_Settings_panel_e60ac7aa-e6ce-45e9-9b5f-7701bb443cc8.md).

-   MLLP Client connectors and MLLP Server connectors support persistent connections. When multiple instances of an MLLP Client connect to the same server that is configured for persistent connections, they will share the same connection. You can configure the length of an inactivity period before the connection times out. \(B2B-2969\)

    To learn more about this feature, see the topics [MLLP Client connector](/docs/Atomsphere/Integration/Connectors/r-atm-MLLP_Client_connector_217bc186-1536-4379-8434-4be3997340e3.md) and [MLLP Server connector](/docs/Atomsphere/Integration/Connectors/r-atm-MLLP_Server_connector_1c16c812-6151-4224-91f8-a2be9087c85b.md).

-   The MLLP Client connector supports client authentication to a server over a connection with TLS/SSL encryption. \(B2B-3045\)

    To learn more about this feature, see the topic [MLLP Client connection](/docs/Atomsphere/Integration/Connectors/r-atm-MLLP_Client_connection_124b91d1-4e7a-4248-bde8-ad5ae81ff382.md).

-   Text configuration fields for Trading Partner Standards have character limits that are determined by the standard you are configuring. If the limit is exceeded, a warning displays the character limit under the text field. \(B2B-2894\)






**Fixes:**

-   Improved error messages to be more descriptive when the BHS segment or MHS segment is missing in an HL7 Inbound Process. \(B2B-854\)

-   Resolved an issue where the MLLP Server acknowledgment message was missing the value for the MSA segment and throwing an error in the log. \(B2B-1427\)

-   Improved the error message to be more descriptive when an Inbound Process with an X12 document contains multiple AK2 segments that are not associated with an AK5 segment. \(B2B-2976\)

-   Updated how the TRADACOMS standard displays to match the style of other standards in the drop-down on the Options tab when creating an EDI profile. \(B2B-2947\)

-   Resolved an issue where error messages were not cleared in text fields when the Document Standard chooser was refreshed on the Trading Partner Reporting page. \(B2B-2982\)
