# Web services with multipart SOAP attachments

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-90e3715c-bc50-4beb-9925-edcf4d7724b4"/>
</head>

You can transmit attachments with a SOAP message. Attachments vary from facsimile images of documents to photographs or drawings. While the SOAP message is in XML format, attachments are often in a binary data format such as PDF or JPEG.

To transport the SOAP message, associate the SOAP message with the attachments in their native format in a multipart MIME \(Multipurpose Internet Mail Extensions\) structure. You can send MIME attachments through the Web Services Client connector. Both the Web Services Client and Web Services Server connectors can receive SOAP messages with MIME attachments.

The supports MTOM, W3C’s Message Transmission Optimization Mechanism for sending binary data. A response with MIME attachments is not returned.

## Dynamic document properties and document caches

The Web Services connectors identify MIME attachments based on an added dynamic document property called `WSS_ROOT_DOCUMENT_ID`. This property’s value is a unique identifier that is automatically generated. This unique identifier also appears on the SOAP message to which the MIME attachment is related.

For a Web Services connector to locate the MIME attachments, they must be stored in a document cache. Indicate which document cache to use on the Web Services Server connector and the Web Services SOAP Client connector. The document cache must have one index and one key. The key is the dynamic document property `WSS_ROOT_DOCUMENT_ID`.

## Receiving MIME attachments

When the Web Services Server connector receives a SOAP message \(XML document\) that has one or more MIME attachments, the following occurs:

-   The body of the SOAP message is extracted and saved as the root document. A unique identifier is automatically generated, assigned to the root document, and saved as a dynamic document property \(`WSS_ROOT_DOCUMENT_ID`\) with the root document.

-   The Web Services Server connector’s operation **Attachment Cache** field identifies the document cache to send the MIME attachments. The document cache must have one index and one key. The key is the dynamic document property `WSS_ROOT_DOCUMENT_ID`.

-   The MIME attachments are extracted from the message, sent to the document cache, and saved as attachment documents.

-   The following dynamic document properties are added to the attachment documents:

    -   `WSS_ROOT_DOCUMENT_ID` — The attachment’s automatically-generated unique identifier, which also appears on the SOAP message body.

    -   `WSS_ATTACHMENT_CONTENT_ID` — The attachment’s content ID, if it exists. If an ID does not exist, this is an integer value.

    -   `WSS_ATTACHMENT_CONTENT_TYPE` — The attachment’s content type.

-   The body of the SOAP message \(the root document\) is sent to the integration process.

## Sending MIME attachments

:::note

The WS SOAP Client connector does not support sending MIME attachments using the remote procedure call \(RPC\) protocol.

:::

When a process sends a SOAP message \(XML document\) to the Web Service SOAP Client connector, the following occurs:

-   A unique identifier is assigned to the XML document then extracted from the dynamic document properties.

-   The **Attachment Cache** field in the Web Service SOAP Client operation identifies the cache to get attachment documents. The document cache must have one index and one key. The key is the dynamic document property `WSS_ROOT_DOCUMENT_ID`.

-   Attachments with the same unique identifier as the XML document are taken from the document cache.

-   The XML document is set as the root of the SOAP message.

-   The attachment documents are added to the SOAP message as MIME attachments.

    The following dynamic document properties determine which attachment documents are included:

    -   `WSS_ROOT_DOCUMENT_ID` — The attachment's unique identifier.

    -   `WSS_ATTACHMENT_CONTENT_ID` — The attachment’s content ID, if it exists.

-   The SOAP message with MIME attachments is sent to the web service endpoint.
