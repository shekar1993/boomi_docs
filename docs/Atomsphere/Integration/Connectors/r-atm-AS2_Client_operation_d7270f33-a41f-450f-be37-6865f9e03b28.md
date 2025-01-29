
import OperationEnd from './_operationEnd.md'

# AS2 Client operation

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-d7270f33-a41f-450f-be37-6865f9e03b28"/>
</head>

The AS2 Client operation contains the outbound AS2 settings for communicating with a trading partner. Coordinate with your trading partner on these transmission settings.

The operation supports only the Send action.

## AS2 info tab

The AS2 From section defines the sender:

- **AS2 From ID** - Enter an arbitrary identifier that indicates you are the person sending the data. You must send this ID to your trading partner. The ID is case-sensitive and cannot contain blank spaces.

- **Signing Certificate** - Select, edit, or create your private certificate, then export a public certificate and give it to your trading partner. Your trading partner uses this certificate to verify that messages were sent by you. For more information about certificates, see the linked Certificate components topic.

The AS2 To section defines the recipient:

- **AS2 To ID** - Enter an arbitrary identifier that indicates who is sending data to you.

- **Encryption Certificate** - Select, edit, or add your trading partner's certificate, then import the certificate. For more information about certificates, see the linked Certificate components topic.

- **MDN Signing Certificate** - Select, edit, or add your trading partner's certificate \(in most cases\).

## Options tab

The Message Options section sets the message transmission preferences:

- **Subject** - Enter an arbitrary subject name for messages.

- **Content Type** - Select a content type that matches the data being sent. These are the available selections:

  - textplain — plain text, MIME type text/plain
  - binary — MIME type application/binary
  - edifact — EDIFACT EDI, MIME type application/EDIFACT
  - edix12 — X12 EDI, MIME type application/edi-x12
  - applicationxml — XML, MIME type application/xml
  - octetstream — arbitrary binary, MIME type application/octet-stream

  The Content-Type MIME property, where set in a process, takes precedence over the content type selected here.

- **Sign Message** - Select if your trading partner wants the message signed to verify the sender. Typically, this option is selected.

- **Legacy S/MIME Support \(RFC3851\)** - The S/MIME standard changed from RFC3851 to RFC5751. By default, Boomi encodes messages using the latest RFC5751 specification. Select to enable backwards compatibility for partner systems that use the legacy RFC3851 specification.

- **Signature Secure Hash Algorithm** - Sets the cryptographic hash function to use. These are the available selections:

  - MD5 — A 128-bit hash function. Beginning in 2004, the standard is no longer approved for most cryptographic uses.
  - SHA-1— A 160-bit hash function. Beginning in 2010, the standard is no longer approved for most cryptographic uses.
  - SHA-224 — A 224-bit hash function using 32-bit words (truncated version of SHA-256).
  - SHA-256 — A 256-bit hash function using 32-bit words.
  - SHA-384 — A 384-bit hash function using 64-bit words (truncated version of SHA-512).
  - SHA-512 — A 512-bit hash function using 64-bit words.

  Clearing Sign Message disables this control.

- **Encrypt Message** - Select if your trading partner wants data encrypted instead of sent in plain text. Typically, this option is selected.

- **Encryption Algorithm** - Sets the encryption algorithm to use. These are the available selections:

  - N/A — equivalent to clearing Encrypt Message
  - Triple DES — Triple Data Encryption Standard (default)
  - DES — Data Encryption Standard
  - RC2-128 — RC2 with 128-bit key length
  - RC2-64 — RC2 with 64-bit key length
  - RC2-40 — RC2 with 40-bit key length
  - AES-128 — Advanced Encryption Standard with 128-bit key length
  - AES-192 — Advanced Encryption Standard with 192-bit key length
  - AES-256 — Advanced Encryption Standard with 256-bit key length

  Clearing Encrypt Message disables this control.

- **Compress Message** - Select if your trading partner wants data compressed or zipped.

The MDN Options section sets the Message Definition Notifications:

- **Multiple Attachments** - If selected, it can include multiple documents in a single message. Maximum Document Count sets the maximum number of documents per message.

- **Attachment Option** - Available when **Multiple Attachments** is selected. Choose how you want attachments to be handled: batch all process documents into a single file or use DocumentCache for attachments.

- **Maximum Document Count** - Available when **Multiple Attachments** is selected. Sets the maximum number of documents you can include in a single message. The range of valid values is 1–20.

The MDN Options section sets the Message Definition Notifications:

- **Request MDN** - Select to receive MDN acknowledgments for the messages you send to this trading partner. MDNs, which acknowledge successful delivery of a message and include any errors from the received message, are then generated automatically for incoming AS2 data on the AS2 Server.

- **Signed** - Select to receive MDNs signed by your trading partner. Typically, Signed is selected.

- **Signature Secure Hash Algorithm** - Select the cryptographic hash function to use \(**Signed** must be selected\):

  - MD5 — A 128-bit hash function. Beginning in 2004, the standard is no longer approved for most cryptographic uses.
  - SHA-1— A 160-bit hash function. Beginning in 2010, the standard is no longer approved for most cryptographic uses.
  - SHA-224 — A family of two similar hash functions that range from 224 to 512 bits. SHA-256 \(and its truncated version SHA-224\) uses 32-bit words. SHA-512 \(and its truncated version SHA-384\) uses 64-bit words.
  - SHA-256 — A family of two similar hash functions that range from 224 to 512 bits. SHA-256 \(and its truncated version SHA-224\) uses 32-bit words. SHA-512 \(and its truncated version SHA-384\) uses 64-bit words.
  - SHA-384 — A family of two similar hash functions that range from 224 to 512 bits. SHA-256 \(and its truncated version SHA-224\) uses 32-bit words. SHA-512 \(and its truncated version SHA-384\) uses 64-bit words.
  - SHA-512 — A family of two similar hash functions that range from 224 to 512 bits. SHA-256 \(and its truncated version SHA-224\) uses 32-bit words. SHA-512 \(and its truncated version SHA-384\) uses 64-bit words.

- **Synchronous/Asynchronous** - Set the method your trading partner uses to send you MDNs. Typically, Synchronous is used. If set to Asynchronous, specify the External URL.

- **External URL** - Enter the URL to which your trading partner sends MDNs.

<OperationEnd />
