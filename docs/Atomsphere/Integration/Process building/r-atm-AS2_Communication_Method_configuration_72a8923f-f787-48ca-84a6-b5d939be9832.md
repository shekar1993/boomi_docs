# AS2 Communication Method configuration

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-72a8923f-f787-48ca-84a6-b5d939be9832"/>
</head>

To set up AS2 as a communication method for a trading partner, you can use default settings, shared communication, or manually configure specific settings in the Edit AS2 Configuration dialog. The dialog opens from within the trading partner **Communication** tab when you add AS2 as a communication method or click **AS2** in the Communication Method list.

The AS2 protocol provides an MDN option that informs you of the disposition of messages after successful delivery.

:::info Important

If you set a username and poassword that will be required for inbound AS2 messages, you must enable authentication on the [Shared Web Server](../Event-based%20integration/c-atm-Shared_web_server_f9f50738-1a26-4aba-8f3a-f09fef752777.md) by configuring the **Authentication Type**. For the username and password setting to work, **Authentication Type** cannot be set to `None`.

:::

- **Use Default AS2 Configuration** - Selecting this check box is equivalent to setting **Communication Settings** to Use All Defaults: This partner uses the settings configured in whichever My Company that it is paired with on a Start or Trading Partner step.

## Identification Information

- **AS2 ID** - The ID that will identify this partner in an AS2-From or AS2-To Header

- **Encrypting Certificate** - Your partner's public certificate that is used for data encryption and decryption.

- **Signing Certificate** - Your partner's public certificate that is used to validate data signatures.

- **MDN Signing Certificate** - Your partner's public certificate that is used to validate MDN signatures.

- **Client SSL Certificate** - If applicable, this is the certificate your partner uses to require client authentication in addition to the standard SSL certificate handshake.

- **Legacy S/MIME Support (RFC3851)** - The S/MIME standard changed from RFC3851 to RFC5751. By default Boomi encodes messages using the latest RFC5751 specification. Select this option to enable backwards compatibility for partner systems that use the legacy RFC3851 specification.

- **Reject Duplicate Messages** - If selected, messages with IDs that identify them as duplicates of previously received messages are rejected.

- **Messages to Check for Duplicates** - If **Reject Duplicate Messages** is selected, this setting is the number of previously received messages that are checked for duplicate message IDs. The default is 100,000. The valid range is 100–1,000,000.

  While **Reject Duplicate Messages** is cleared, this setting is not applicable and this field is therefore not visible.

- **Use IP Filtering** - If selected, IP filtering is applied to access requests. Upon selection of this option, the **IP Filter** list is revealed. IPV4 and IPV6 are supported.

- **IP Filter** - This list of IP addresses from which access is allowed is visible only while **Use IP Filtering** is selected. A list value can be a single IP address \(for example, 127.0.0.1\), an IP address range \(127.0.0.1-127.0.0.10\), or an IP address pattern for matching \(127.0.0.\* or 127.0.\*.\* but not 127.0.\*.1\).

  Upon typing a value, click **![icon](../Images/main-ic-plus-sign-white-in-green-circle-16_4dc8c5f3-e893-4aef-ade2-0b7afe9476c1.jpg) Add allowable value** to add the value to the list. To delete a value from the list, click **![icon](../Images/main-ic-x-white-in-red-circle-16_0d0c5dc5-1c5e-4117-8a58-92c5e050ec5b.jpg) Delete this value** adjacent to the value.

  If the list is empty, all IP addresses are blocked for the user.

## AS2 Listen Options

- **Enable Basic Authentication** - When checked, basic authentication is enforced on endpoints configured to use Basic authentication. Selecting this option reveals required **User Name** and **Password** fields.

- **Receive Attachments \(RFC6362\)** - When checked, messages are able to have attachments. Selecting this option reveals the **Attachment Cache** and **Attachment Content Type** fields.

- **Attachment Cache** - Select an Attachment Cache component from which to attach files to messages.

- **Attachment Content Type** - Select the type of content that is in the Attachment Cache component from the following options:

  - application/xml
  - application/pdf
  - application/msword
  - image/jpeg
  - image/tiff
  - text/plain

## AS2 Send Settings

- **URL** - The URL provided by your trading partner to send data to .

- **SSL Certificate** - If you are using AS2 via SSL, this is the trading partner's public certificate for encrypting data. Select an existing certificate or create a new one and then import the certificate provided by your trading partner. See [Certificate Components](/docs/Atomsphere/Integration/Process%20building/c-atm-Certificate_components_9985dbf3-9b86-4983-a68d-53e7c6836763.md) for more information.

- **Client SSL Certificate** - Only use this certificate if the partner's endpoint specifically requires client authentication in addition to the standard SSL certificate handshake.

  :::caution
  
  Only private certificates are eligible for importing.

  :::

- **Authentication Type** - The type of authentication required by the receiving trading partner.

  - None \(default\)
  - Basic — selecting this authentication type reveals required **User Name** and **Password** fields.

- **Verify Hostname** - If selected, the sender will verify the hostname.

## Message Options

- **Subject** - Only use this field if the client specifically requests that a particular AS2 Message Subject is sent.

- **Content Type** - Set a Content Type that matches the data being sent. The available selections are MIME types:

  - text/plain
  - application/binary
  - application/edifact
  - application/octet-stream
  - application/edi-x12
  - application/xml

  The Content-Type MIME property, where set in a process, takes precedence over the content type selected here.

- **Sign message** - If selected, signed messages are sent to this trading partner.

- **Encrypt Message** - If selected, messages sent to this trading partner are encrypted.

- **Compress Message** - If selected, data sent to or received from your trading partner is compressed or zipped

- **Multiple Attachments (RFC6362)** - Select this option to send attachments to this trading partner.

- **Attachment Option** - (Available when **Multiple Attachments** is selected) Batch all process documents into a single message or use DocumentCache to store and access them as attachments.

  When **Batch all process documents into a single file** is selected, each process document is attached to a single AS2 message. The **Maximum Document Count** setting prevents excessively large messages by limiting the number of process documents that can be attached to a single message. Process documents that exceed the maximum are attached to a separate AS2 message.

  When **Use DocumentCache for attachments** is selected, each process document is attached to its own AS2 message. The attachments are stored in a specified document cache.

- **Maximum Document Count** - (Available when **Batch all process documents into a single file** is selected) The maximum number of process documents that can be attached to a message. The range is 1-20, inclusive.

- **Attachment Cache** - (Available when **Use DocumentCache for attachments** is selected) Choose the DocumentCache that you want to use to store and access document attachments.

## Message Disposition Notification \(MDN\) Options

- **Request MDN** - If selected, you receive MDN \(Message Disposition Notification\) acknowledgments for messages sent to this trading partner. MDNs acknowledge successful delivery of a message and include any errors from the received message. MDNs are generated automatically for incoming AS2 data on the AS2 Server.

- **Signed** - If selected, you request that this trading partner sign the MDNs that they return.

- **Signature Secure Hash Algorithm** - Select the cryptographic hash function to use \(**Signed** must be selected\):

  -   MD5 — A 128-bit hash function. Beginning in 2004, the standard is no longer approved for most cryptographic uses.
  -   SHA-1— A 160-bit hash function. Beginning in 2010, the standard is no longer approved for most cryptographic uses.
  -   SHA-224 — A family of two similar hash functions that range from 224 to 512 bits. SHA-256 \(and its truncated version SHA-224\) uses 32-bit words. SHA-512 \(and its truncated version SHA-384\) uses 64-bit words.
  -   SHA-256 — A family of two similar hash functions that range from 224 to 512 bits. SHA-256 \(and its truncated version SHA-224\) uses 32-bit words. SHA-512 \(and its truncated version SHA-384\) uses 64-bit words.
  -   SHA-384 — A family of two similar hash functions that range from 224 to 512 bits. SHA-256 \(and its truncated version SHA-224\) uses 32-bit words. SHA-512 \(and its truncated version SHA-384\) uses 64-bit words.
  -   SHA-512 — A family of two similar hash functions that range from 224 to 512 bits. SHA-256 \(and its truncated version SHA-224\) uses 32-bit words. SHA-512 \(and its truncated version SHA-384\) uses 64-bit words.

- **Sync/Async** - Sets the method your trading partner uses to send you MDNs. Typically, Synchronous is used so that MDNs are received from the trading partner during the same connection on which you sent data to the trading partner.

  - **MDN URL** - (Available when **Sync/Async** is set to Asynchronous) The URL which receives MDNs. You can select the system default URL or set a custom URL.

    The MDN URL can be overriden by using environment extensions.

  - **Custom URL** - (Available when **MDN URL** is set to Custom) The URL to which your trading partner sends MDNs.

- **Fail on Negative MDN** - When selected, the process fails if a negative MDN response is received.

## Data Processing Options

- **Send Data Processing Steps** - The data processing steps are completed in the order specified before the data is sent.

- **Receive Data Processing Steps** - The data processing steps are completed in the order specified after receiving the data before the data is decrypted.
