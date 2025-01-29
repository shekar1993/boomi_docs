# AS2 Server operation - Legacy 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-6edf2d4a-dc8e-4c35-aea4-7e4e14e45277"/>
</head>


The AS2 Server operation distinguishes who sent an incoming AS2 message.


:::note

The AS2 Server connector is manageable only as a legacy connector in existing integrations. To enable AS2 listening, review the AS2 Shared Server connector which contains all required functionality.

:::

Because all AS2 traffic is typically received on a single port, the AS2 Server connector needs to know how to route documents from different senders. It does this by matching the *AS2 ID* contained in the transmission header to that configured in an operation. When a match is found, the data is routed to the process in which that corresponding operation is used. Consequently, use only one operation in a process. Create a separate operation for each sender.

The AS2 Server operation supports only the Listen action.

## AS2 Info tab 

Define the sender in the AS2 From section:



**AS2 From ID** - 
An arbitrary identifier that represents who is sending data to you. You and your trading partner should agree on this value. When Boomi Integration receives an AS2 message, it inspects the AS2 ID included in the transmission header and routes the document to the appropriate process \(the one configured with an operation with the matching AS2 ID\). The AS2 ID is case sensitive and cannot contain blank spaces.

**Signing Certificate** - 
This is your trading partner's certificate. Boomi Integration uses it to verify the authenticity of the sender. Select an existing certificate or create a new one. For more information, see the linked Certificate components topic.

Define the recipient in the AS2 To section. If your trading partner requests asynchronous MDNs, configure this section:



**AS2 To ID** - 
An arbitrary identifier that represents who is sending data to you.

**Decryption Certificate** - 
This is your trading partner's certificate to encrypt the MDN before sending it. Select an existing certificate or create a new one.

**MDN Signing Certificate** - 
his is your private certificate used to sign the MDN before sending. Select an existing certificate or create a new one.

## Archiving tab

See the topic [Connector operation’s Archiving tab](../Process%20building/r-atm-Connector_operations_Archiving_tab_061fbf70-1034-4bf3-b795-e952f9338dbe.md) for more information.

## Tracking tab

See the topic [Connector operation’s Tracking tab](../Process%20building/r-atm-Connector_operations_Tracking_tab_8a03f547-738a-448c-bb0f-594bad806cfe.md) for more information.