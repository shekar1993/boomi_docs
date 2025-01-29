# MLLP Server operation

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-6c1c66b8-3303-47dc-bed0-0289c9251193"/>
</head>

The MLLP Server operation contains the inbound MLLP settings and preferences for communicating with a specific trading partner. Your trading partner should provide the information to configure the operation.

## MLLP Info tab

The **MLLP Info** tab content changes depending on which **Route by** setting you choose. If you choose to route by data identifiers (default), select the document standard and enter the sender and receiver information as appropriate for the standard. If you choose to route by **Route Key**, you can add the routing key that you configured on the [MLLP Server Settings panel](../Integration%20management/r-atm-MLLP_Server_Settings_panel_e60ac7aa-e6ce-45e9-9b5f-7701bb443cc8.md) and users who have permission to access those ports. For more information about routing, refer to the Boomi Community article [How MLLP Server Document routing works](https://community.boomi.com/s/article/How-MLLP-Server-Document-Routing-Works).

The operation supports only the Listen action.

- **Route by** - You can route by data identifiers extracted from EDI messages received on any port or by routing keys associated with the port in the MLLP Server.

### Route by data identifiers

- **Document Standard** - Select HL7 or X12 as the document standard.

Identify the sending trading partner in the **From Identifiers** section:

| HL7 standard | X12 standard |
| --- | --- |
| **From Application** - Sending trading partner's application ID. | **Sender Interchange ID** - Sending trading partner's Interchange ID. |
| **From Facility** - Sending trading partner's facility ID. | **Sender Interchange ID Qualifier** - Sending trading partner's Interchange ID Qualifier. |

- **Client SSL Certificate** - The client SSL certificate.

Identify the receiving trading partner in the **To Identifiers** section:

| HL7 standard | X12 standard |
| --- | --- |
| **To Application** - Receiving trading partner's application ID. | **Receiver Interchange ID** - Receiving trading partner's Interchange ID. |
| **To Facility** - Receiving trading partner's facility ID. | **Receiver Interchange ID Qualifier** - Receiving trading partner's Interchange ID Qualifier. |

### Route by route key

If you choose **Route Key** for the **Route by** setting, configure the following:

- **Route Key** - Enter the value associated with one or more ports in the Boomi runtime where the process will be deployed. For more information about routing keys, refer to [MLLP Server Settings panel](../Integration%20management/r-atm-MLLP_Server_Settings_panel_e60ac7aa-e6ce-45e9-9b5f-7701bb443cc8.md).

- **Users** - Add users and enter a username (required) and an SSL certificate (optional) for each.

  :::info Important

  If you add SSL certificates to users, each user must have a different SSL certificate.

  :::

### Options section

The following settings are available for both HL7 and X12 document standards:

- **Auto Acknowledge?** - Determines whether the MLLP Server automatically acknowledges received documents. When enabled for an HL7 transmission, an Accept ACK message is generated when also requested by the sender in the MSH.15 header value. When enabled for an X12 message, a simple interchange with a TA1 segment is generated when also requested by the sender in the ISA.14 header value. For more information, refer to the Boomi Community article [How Acknowledgments Work in the MLLP Server Connector](https://community.boomi.com/s/article/How-Acknowledgements-Work-in-the-MLLP-Server-Connector).

- **Log Messages?** - If selected, messages are logged in the outbound work/MLLP folder of the Atom.

## Archiving tab

See the topic [Connector operation’s Archiving tab](../Process%20building/r-atm-Connector_operations_Archiving_tab_061fbf70-1034-4bf3-b795-e952f9338dbe.md) for more information.

## Tracking tab

See the topic [Connector operation’s Tracking tab](../Process%20building/r-atm-Connector_operations_Tracking_tab_8a03f547-738a-448c-bb0f-594bad806cfe.md) for more information.

## Response codes for non-standard data

If the **Route By** key calls a process and **Auto Acknowledge** is enabled, the server sends responses based on the standard used in the document: an ACK message for HL7 and an interchange with a TA1 segment for X12. However, if the standard is neither HL7 nor X12, a plain text code is sent in the response.

For HL7, the code is returned as a string in the MSA.3 segment and for X12, the TA1.05 segment.

| Code | Condition |
| --- | --- |
| `OK` | Process execution is successful, **Auto Acknowledge** is enabled |
| `ERR_ROUTE` | Unable to return a route between the MLLP server and listener process by data identifier or route key |
| `ERR_CERT` | The client certificate does not match the listener process certificate |
| `ERR_PROCESS` | Process execution failed, **Auto Acknowledge** is enabled |

:::note

`ERR_ROUTE` and `ERR_CERT` acknowledgments are not controlled by by the **Auto Acknowledge** setting. If you want to turn off acknowledgments for these errors, you must set the custom property `com.boomi.connector.mllpserver.autoAckOnError` to `false` on the Atom.

:::

For more information about MLLP Server acknowledgments, refer to the Boomi Community article [How Acknowledgments work in the MLLP Server connector](https://community.boomi.com/s/article/How-Acknowledgements-Work-in-the-MLLP-Server-Connector).
