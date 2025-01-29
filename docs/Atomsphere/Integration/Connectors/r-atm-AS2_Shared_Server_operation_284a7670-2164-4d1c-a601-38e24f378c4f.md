# AS2 Shared Server operation

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-284a7670-2164-4d1c-a601-38e24f378c4f"/>
</head>

The AS2 Shared Server operation contains the inbound AS2 settings and preferences for communicating with a trading partner. Coordinate with your trading partner on the transmission options.

The operation supports only the Listen action. Some headers are required for AS2 messages:

- AS2–From
- AS2-To
- Content-type

Other headers may be required for particular AS2 messages. When required headers are missing, the AS2 connector listener process executes but shows no inbound documents.

To review the AS2 message structure, go to the [Microsoft Developer Network](http://msdn.microsoft.com/en-us/library/bb245990.aspx).


:::note

This operation does not support usage of a client SSL certificate for asynchronous MDN \(Message Disposition Notification\). If you need to implement this approach in a process, configure a trading partner with the AS2 communication method. Then in your process configure a Trading Partner Start step to use that trading partner.

:::

:::info Important

If you set a username and password that will be required for inbound AS2 messages, you must enable authentication on the [Shared Web Server](../Event-based%20integration/c-atm-Shared_web_server_f9f50738-1a26-4aba-8f3a-f09fef752777.md) by configuring the **Authentication Type**. For the username and password setting to work, **Authentication Type** cannot be set to `None`.

:::

## AS2 Info tab

Define the sender in the AS2 From section:

- **AS2 From ID** - The sending partner's AS2 ID, which is an arbitrary identifier that represents who is sending the data. Retrieve this ID from your trading partner. This ID is case-sensitive and cannot contain blank spaces.

- **Signing Certificate** - The sending partner's public certificate for validating data signatures — that is, verifying that messages were sent by the partner.

- **Client SSL Certificate** - The sending partner’s public certificate for client authentication. Only use this certificate for an endpoint requiring client authentication in addition to the standard SSL certificate handshake.

- **Enable Basic Authentication** - If selected, Basic authentication is enforced on endpoints configured to use Basic authentication. Selecting this option reveals required **User Name** and **Password** fields.

- **Reject Duplicate Messages** - If selected, messages with IDs that identify them as duplicates of previously received messages are rejected.

- **Messages to Check for Duplicates** - If **Reject Duplicate Messages** is selected, this setting is the number of previously received messages that are checked for duplicate message IDs. The default is 100,000. The valid range is 100–1,000,000.

  While **Reject Duplicate Messages** is cleared, this setting is not applicable and this field is therefore not visible.

- **Use IP Filtering** - If selected, IP filtering is applied to access requests. Upon selection of this option, the **IP Filter** list is revealed. IPV4 and IPV6 are supported.

- **IP Filter** - This list of IP addresses from which access is allowed is visible only while **Use IP Filtering** is selected. A list value can be a single IP address \(for example, 127.0.0.1\), an IP address range \(127.0.0.1-127.0.0.10\), or an IP address pattern for matching \(127.0.0.\* or 127.0.\*.\* but not 127.0.\*.1\).

  Upon typing a value, click **![icon](../Images/main-ic-plus-sign-white-in-green-circle-16_4dc8c5f3-e893-4aef-ade2-0b7afe9476c1.jpg) Add allowable value** to add the value to the list. To delete a value from the list, click **![icon](../Images/main-ic-x-white-in-red-circle-16_0d0c5dc5-1c5e-4117-8a58-92c5e050ec5b.jpg) Delete this value** adjacent to the value.

  If the list is empty, all IP addresses are blocked for the user.

Define the recipient in the AS2 To section:

- **AS2 To ID** - An arbitrary identifier that represents who is listening for documents \(your company\). Give this ID to your sending partner.

- **Legacy S/MIME Support \(RFC3851\)** - The S/MIME standard changed from RFC3851 to RFC5751. By default, Boomi encodes messages using the latest RFC5751 specification. Select this option to enable backwards compatibility for partner systems that use the legacy RFC3851 specification.

- **MDN Signing Certificate** - Your company's private certificate \(most often\).

- **Decryption Certificate** - The company's private certificate. Export and give this certificate to your trading partner.

- **Verify Hostname** - If selected, the sender will verify the hostname.

## Archiving tab

See the topic [Connector operation’s Archiving tab](../Process%20building/r-atm-Connector_operations_Archiving_tab_061fbf70-1034-4bf3-b795-e952f9338dbe.md) for more information.

## Tracking tab

See the topic [Connector operation’s Tracking tab](../Process%20building/r-atm-Connector_operations_Tracking_tab_8a03f547-738a-448c-bb0f-594bad806cfe.md) for more information.