# Platform API and Partner API

<head>
  <meta name="guidename" content="Release Notes"/>
  <meta name="context" content="GUID-78ca0e5e-4735-4e4d-8ce1-feefcc388620"/>
</head>


## Legacy S/MIME support 

Feature:

-   You can use the field `enabledLegacySMIME` in the `AS2MyCompanyInfo` section of the Trading Partner Component object and the `AS2PartnerInfo` section of the Shared Communication Channel object to enable backwards compatibility for partner systems that use the legacy RFC3851 specification. \(B2B-2580\)

    To learn more about this feature, see the topics [Trading Partner Component object](https://developer.boomi.com/api/platformapi#tag/TradingPartnerComponent) and [Shared Communication Channel Component object](https://developer.boomi.com/api/platformapi#tag/SharedCommunicationChannelComponent).


## ODETTE Connector Record object 

Feature:

-  You can use the ODETTE Connector Record object to receive the document and trading partner details of the Process Reporting page. This object supports the Query operation and returns the following fields:

    Base fields

    -   account

    -   executionId

    -   atomId

    -   dateProcessed

    -   id

    -   actionType

    -   connectorType

    -   connectorName

    -   operationName

    -   documentIndex

    -   successful

    -   size

    -   errorMessage

    ODETTE-specific fields

    -   ackStatus

    -   ackReport

    -   senderID

    -   receiverID

    -   interchangeControlReference

    -   messageType

    -   messageReferenceNumber

    -   interchangeDate

    -   interchangeTime

    -   ackRequested

    -   outboundValidationStatus

    -   outboundValidationReport

    \(B2B-2679\)

    To learn more about this feature, see the topic [ODETTE Connector Record object](https://developer.boomi.com/api/platformapi#tag/ODETTEConnectorRecord).


## Trading Partner Processing Group object 

Fix:

-   This fix resolves an issue where the Trading Partner Processing Group object returned a 400 response and an "Unexpected Partner Document Standard: ODETTE" message when an ODETTE Trading Partner was included. \(B2B-2747\)


