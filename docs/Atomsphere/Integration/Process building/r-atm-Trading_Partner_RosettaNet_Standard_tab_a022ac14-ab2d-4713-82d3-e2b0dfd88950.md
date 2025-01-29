# Trading Partner ROSETTANET Standard tab 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-a022ac14-ab2d-4713-82d3-e2b0dfd88950"/>
</head>


The ROSETTANET Standard tab is where you set Basic Options, Control Information, Security Options, and Message Options.

Inbound documents are automatically validated based on the data populated within this tab. Outbound documents are optionally validated. Certain envelope fields are automatically populated for outbound interchanges.

## Basic RosettaNet Options 

The Basic RosettaNet options are only applicable to your trading partners — that is, they are not applicable to “This is my company.”

**Name**  
**Description**

**RosettaNet Version**  
Sets the version of the RosettaNet Framework version that this partner uses, either version 1.1 or 2.0.

**Filter Signals?**  
Business signals are positive and negative acknowledgment messages that are sent in response to business actions between two RosettaNet network applications to communicate certain events. For example, the receipt and successful validation of a message \(Receipt-Acknowledgment\). If selected, Trading Partner start steps do not pass signals to processes.

**Reject Duplicate Transactions**  
If selected, documents are rejected when documents with the same Transaction Instance ID number have already been received.

**Validate Outbound Documents**  
If selected, outbound RosettaNet messages are validated for message types for which the **Validate Outbound Messages** option is selected in the **Document Types** tab.

## Control Information Options 

The RosettaNet Control Information options define information that is added to the beginning and appended to content in the service header and trailer in RosettaNet business messages.

**Name**  
**Description**

**Partner ID**  
Sets the business ID of the trading partner. A Dun & Bradstreet Universal Numbering System \(DUNS\) number is commonly used as the partner ID.

**Partner ID Type**  
Sets the partner ID type as DUNS. The DUNS number is a unique business identifier that is specified by RosettaNet.

**Partner Location ID**  
Sets the logical business location that is associated with a trading partner.

**Global Partner Classification Code**  
\(RosettaNet version 1.1 only\) Sets the code identifying a partner's role in the supply chain. The RosettaNet specification document contains this code.

**Global Usage Code**  
Sets the code identifying if the message is sent in Test or Production.

**Supply Chain Code**    
\(RosettaNet version 1.1 only\) Sets the code identifying a sequence of events, which may include conversion, movement or placement, which adds value to goods, products, or services.

## Security Options 

The RosettaNet Security options define how to sign outbound messages to partners.

**Name**  
**Description**

**Encryption Certificate**  
 \(RosettaNet version 2.0 only\) Select, edit, or create your trading partner's certificate. Then, import the certificate. This certificate is used for two reasons:

-   Outbound messages—To encrypt outbound messages for trading partners.
-   Inbound messages—On My Company to decrypt inbound messages from trading partners.

**Signing Certificate**  
Select, edit, or create your private certificate. Then, export a public certificate and give it to your trading partner. This certificate is used for two reasons:

-   Outbound messages—On My Company to sign outbound messages with the private certificate and allow trading partners to verify that the message was sent by you.
-   Inbound messages—The trading partner's public certificate is used to verify that the message was sent by the trading partner.

## Message Options 

The RosettaNet Message options define the message transmission preferences for partners.

**Name**  
**Description**

**Content Transfer Encoding**  
Sets the encoding type for content transfer applied to outbound message headers and service content:

 -   Base64 — arbitrary octet sequences encoded into a form that satisfies the rules of 7bit encoding

 -   Binary \(default\)


**Sign Messages**  
Select if your trading partner wants the message signed to verify the sender.

**Signature Digest Algorithm**  
Used to select a secure one-way hash algorithm in SHA \(Secured Hash Algorithm\).

 -   SHA-1— A 160-bit hash function. Beginning in 2010, the standard is no longer approved for most cryptographic uses.
 -   SHA-224 — A family of two similar hash functions that range from 224 to 512 bits. SHA-256 \(and its truncated version SHA-224\) uses 32-bit words. SHA-512 \(and its truncated version SHA-384\) uses 64-bit words.

-   SHA-256 — A family of two similar hash functions that range from 224 to 512 bits. SHA-256 \(and its truncated version SHA-224\) uses 32-bit words. SHA-512 \(and its truncated version SHA-384\) uses 64-bit words.

 -   SHA-384 — A family of two similar hash functions that range from 224 to 512 bits. SHA-256 \(and its truncated version SHA-224\) uses 32-bit words. SHA-512 \(and its truncated version SHA-384\) uses 64-bit words.

 -   SHA-512 — A family of two similar hash functions that range from 224 to 512 bits. SHA-256 \(and its truncated version SHA-224\) uses 32-bit words. SHA-512 \(and its truncated version SHA-384\) uses 64-bit words.


:::note
 
This list is displayed only while **Sign Messages** is selected.

:::

**Encrypt Messages**  
\(RosettaNet version 2.0 only\) Select if your trading partner wants messages encrypted instead of sent in plain text.

**Encrypt Service Header**  
 \(RosettaNet version 2.0 only\) Service headers provide operating information \(metadata\) about the RosettaNet business message. Service headers are always sent in messages. If selected, the service header is encrypted when the message is sent.

**Note:** This option is available for selection only while **Encrypt Messages** is selected.

**Encryption Algorithm**  
\(RosettaNet version 2.0 only\) Select the algorithm to use to encrypt the message. These are the available selections:

 -   Triple DES — Triple Data Encryption Standard \(default\)

 -   DES — Data Encryption Standard

 -   RC2-128 — RC2 with 128-bit key length

 -   RC2-64 — RC2 with 64-bit key length

 -   RC2-40 — RC2 with 40-bit key length


:::note

This list is displayed only while **Encrypt Messages** is selected.

:::

**Attachment Cache**  
\(RosettaNet version 2.0 only\) Select the Document Cache used to store documents that you want to attach to the message.