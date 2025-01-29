# Communication Channel components

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-611A91F2-292D-469B-AE7F-25AD55BCD7F1"/>
</head>

In a Communication Channel component, you configure a file transfer protocol — AS2, Disk, FTP, HTTP, OFTP2 or SFTP — to send data to and receive data from trading partners.

A communication channel is similar to a combined connection and operation. By referencing a Communication Channel component in your Trading Partner components, you can change or update information in one place instead of within multiple separate trading partners. This would be common when connections to the Trading Partners are managed via a Value Added Network (VAN). Like other components, a Communication Channel component is stored as a discrete reusable component in Component Explorer.

You can create communication channels on the Build page by clicking **Create New** and selecting **Communication Channel** from the **Type** list; select a communication method on the Create a Communication Channel dialog and click **Create**.

For a process with a Trading Partner Start step and/or Trading Partner step in which trading partners share a communication channel, you can precisely control the archiving of documents processed by those trading partners by selecting the **Archive document data that passes through this trading partner** option in the Communication Channel component’s **Archiving** tab.

After you select this option, set **Inbound Directory** as the archive directory for inbound documents received in Trading Partner Start steps and/or set **Outbound Directory** as the archive directory for outbound documents sent in Trading Partner steps. With this option, documents processed by trading partners sharing the channel are archived in the specified directory, regardless of whether **Archive document data that passes through this trading partner** is selected in those trading partners. The archive filename prefix is the name of the Communication Channel component.

The following settings are for a Communication Channel component with an AS2 communication method.

## Options tab

Identification Information:

- **AS2 ID** - The ID that will identify this partner in an AS2-From or AS2-To header.

- **Encrypting Certificate** - Your partner's public certificate that is used for data encyption and decryption.

- **Signing Certificate** - Your partner's public certificate that is used to validate data signatures.

- **MDN Signing Certificate** - Your partner's public certificate that is used to validate MDN signatures.

- **Client SSL Certificate** - If applicable, this is the certificate your partner uses to require client authentication in addition to the standard SSL certificate handshake.

- **Legacy S/MIME Support \(RFC3851\)** - The S/MIME standard changed from RFC3851 to RFC5751. By default, Boomi encodes messages using the latest RFC5751 specification. Select this option to enable backwards compatibility for partner systems that use the legacy RFC3851 specification.

- **Reject Duplicate Messages** - If selected, messages with IDs that identify them as duplicates of previously received messages.

- **Messages to Check for Duplicates** - If **Reject Duplicate Messages** is selected, this setting is the number of previously received messages that are checked for duplicate message IDs. The default is 100,000. The valid range is 100-1,000,000. While **Reject Duplicate Messages** is cleared, this setting is not applicable and this field is therefore not visible.

- **Use IP Filtering** - If selected, IP filtering is applied to access requests. Upon selection of this option, the **IP Filter** list is revealed. IPV4 and IPV6 are supported.

- **IP Filter** - This list of IP addresses from which access is allowed is visible only while **Use IP Filtering** is selected. A list value can be a single IP address \(for example, 127.0.0.1\), an IP address range \(127.0.0.1-127.0.0.10\), or an IP address pattern for matching \(127.0.0.\* or 127.0.\*.\* but not 127.0.\*.1\). Upon typing a value, click **Add allowable value** to add the value to the list. To delete a value from the list, click **Delete this value** adjacent to the value.

  If the list is empty, all IP addresses are blocked.

AS2 Listen Options:

- **Enable Basic Authentication** - If enabled, basic authentication will be enforced on endpoints configured to use basic authentication. Selecting this option reviews required **User Name** and **Password** fields.

AS2 Send Settings:

- **URL** - The URL provided by your trading partner to send data.

- **SSL Certificate** - If you are using AS2 via SSL, this is the trading partner's public certificate for encrypting data. Select an existing certificate or create a new one and then import the certificate provided by your trading partner. See [Certificate Components](c-atm-Certificate_components_9985dbf3-9b86-4983-a68d-53e7c6836763.md) for more information.

- **Client SSL Certificate** - Only use this certificate if the partner's endpoint specifically requires client authentication in addition to the standard SSL certificate handshake.

  :::note
  
  Only private certificates are eligible for importing.

  :::

- **Authentication Type** - The type of authentication required by the receiving trading partner.

  - None \(default\)
  - Basic — selecting this authentication type reveals required **User Name** and **Password** fields.

- **Verify Hostname** - If selected, the sender will verify the hostname.

Message Options:

- **Subject** - Only use this field if the client specifically requests that a particular AS2 Message Subject is sent.

- **Content Type** - Set a Content Type that matches the data being sent. The available selections are MIME types:

  - text/plain
  - application/binary
  - application/edifact
  - application/octet-stream
  - application/edi-x12
  - application/xml

  The Content-Type MIME property, where set in a process, takes precedence over the content type selected here.

- **Sign Message** - If selected, signed messages are sent to this trading partner.

- **Encrypt Message** - If selected, messages sent to this trading partner are encrypted.

- **Compress Message** - If selected, data sent to or received from your trading partner is compressed or zipped.

- **Multiple Attachments** - If selected, it can include multiple documents in a single message. **Maximum Document Count** sets the maximum number of documents per message.

- **Attachment Option** - (Available when **Multiple Attachments** is selected) Batch all process documents into a single message or use DocumentCache to store and access them as attachments.

  When **Batch all process documents into a single file** is selected, each process document is attached to a single AS2 message. The **Maximum Document Count** setting prevents excessively large messages by limiting the number of process documents that can be attached to a single message. Process documents that exceed the maximum are attached to a separate AS2 message.

  When **Use DocumentCache for attachments** is selected, each process document is attached to its own AS2 message. The attachments are stored in a specified document cache.

- **Maximum Document Count** - (Available when **Batch all process documents into a single file** is selected) The maximum number of process documents that can be attached to a message. The range is 1-20, inclusive.

- **Attachment Cache** - (Available when **Use DocumentCache for attachments** is selected) Choose the DocumentCache that you want to use to store and access document attachments.

Message Disposition Notification \(MDN\) Options:

- **Request MDN** - If selected, you receive MDN acknowledgements for messages sent to this trading partner. MDNs acknowledge successful delivery of a message and include any errors from the received message. MDNs are generated automatically for incoming AS2 data on the AS2 Server.

- **Signed** - If selected, you request that this trading partner sign the MDNs that they return.

- **Sync/Async** - Sets the method your trading partner uses to send you MDNs. Typically, Synchronous is used so that MDNs are received from the trading partner during the same connection on which you sent data to the trading partner.

- **MDN URL** - (Available when **Sync/Async** is set to Asynchronous) The URL which receives MDNs. You can select the system default URL or set a custom URL.

  The MDN URL can be overriden by using environment extensions.

- **Use SSL** - (Available when **MDN URL** is set to Default) Requests that the trading partner uses SSL when sending asynchronous MDNs.

- **Custom URL** - (Available when **MDN URL** is set to Custom) The URL to which your trading partner sends MDNs.

Data Processing Options:

- **Send Data Processing Steps** - The data processing steps are completed in the order specified before the data is sent.

- **Receive Data Processing Steps** - The data processing steps are completed in the order specified after receiving the data before the data is decrypted.
