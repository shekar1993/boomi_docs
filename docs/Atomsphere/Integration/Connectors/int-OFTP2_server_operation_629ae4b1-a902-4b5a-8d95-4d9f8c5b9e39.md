# OFTP2 Server operation 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-629ae4b1-a902-4b5a-8d95-4d9f8c5b9e39"/>
</head>


The OFTP2 Server operation contains the inbound OFTP2 settings and preferences for communicating with a specific trading partner. Your trading partner should provide the information to configure the operation.

The operation supports only the Listen action.

When a process containing a start step configured with the OFTP2 Server connector is deployed, an OFTP2 Server listener starts on the Atom and performs the following actions:

-   The Atom's OFTP2 Server attempts to authenticate incoming OFTP2 sessions against any running OFTP2 listeners by using the To and From *ODETTE IDs*.

-   The Atom's OFTP2 Server sends incoming data to the process which has a matching From *ODETTE ID* for the sender and To *ODETTE ID* for the receiver.


:::note

OFTP2 Server processes deployed to an Atom must have a unique combination of From ODETTE ID and password, otherwise an OFTP2 listener will not start.

:::

For example, you are a trading partner attempting to send data to two of your partners who share the same Boomi Atom instance. Your ODETTE ID is ACME.

-   Your Atom's OFTP2 Server authenticates to PARTNER1 with an ODETTE ID of ACME and a password set to SECRET, and then sends data to PARTNER1.

-   Your Atom's OFTP2 Server authenticates to PARTNER2 with an ODETTE ID of ACME and a password set to DONTTELL, and then sends data to PARTNER2.


If you wanted to deploy a new OFTP2 Server process to send data to PARTNER3, you can use the same ODETTE ID, however you must set a new, unique password.

## OFTP2 Info tab 

Identify the sending trading partner in the **From Identifiers** section:

**ODETTE ID** - 
Uniquely identifies the responder participating in the ODETTE-FTP session. Limited to 25 characters.

**Password** - 
Authenticates the trading partner and is assigned by bilateral agreement.

**Acknowledgment Verification Certificate** - 
The public certificate used to verify signed End-to-End Responses \(EERPs\) sent from this destination.

**Signature Verification Certificate** - 
The public certificate used to verify signatures received from this destination.

**Session Authentication Encrypting Certificate** - 
The public certificate used to encrypt the session authentication challenge for this destination.

**Client SSL Certificate** - 
The public certificate used to authenticate the client when SSL is required.

Identify the receiving trading partner in the **To Identifiers** section:

**ODETTE ID** - 
Uniquely identifies the initiator participating in the ODETTE-FTP session. Limited to 25 characters.

**Password** - 
Authenticates the trading partner and is assigned by bilateral agreement.

**Decryption Certificate** - 
The private certificate used to decrypt incoming data from your partners.

**Acknowledgment Signing Certificate** - 
The private certificate used to sign EERPs sent to this destination.

**Session Authentication Challenge Certificate** - 
The private certificate used to decrypt the session authentication challenge from your partners.

## Archiving 

See the topic [Connector operation's Archiving tab](../Process%20building/r-atm-Connector_operations_Archiving_tab_061fbf70-1034-4bf3-b795-e952f9338dbe.md) for more information.

## Tracking 
See the topic [Connector operation's Tracking tab](../Process%20building/r-atm-Connector_operations_Tracking_tab_8a03f547-738a-448c-bb0f-594bad806cfe.md) for more information.