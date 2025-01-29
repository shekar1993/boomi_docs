# Working with ABAP Proxy

<head>
  <meta name="guidename" content="Boomi for SAP"/>
  <meta name="context" content="GUID-21fefdbb-e539-4832-bdcd-217fa06ea511"/>
</head>

No additional custom code is needed to make ABAP Proxies work. It communicates and connects to the proxy framework by doing the following:

- Uses HTTP as a "transfer" protocol and XI 3.0 as a "message" protocol.

- Sends a content-type **multipart/related** message when using SAP Process Orchestration(PO). In SAP PO, this is handled using the SOAP adapter.

- Opens the possibility to send "0 to N" number of attachments along with the **MainDocument**.

- Supports both asynchronous (Exactly Once(EO) / Exactly Once In Order (EOIO)) and synchronous (BestEffort(BE)) communication.

- All data delivered and received from the proxy framework has to be in XML, underlining the use of SOAP. Other formats are not accepted in the pipeline. Pre or post processing steps are required to be implemented in order to use other formats.

## Important considerations

- The entirety of the SAP PO pipeline isn't covered. Consequently, activities such as message transformation, attachment handling, mapping, and others are considered prerequisites for ABAP Proxy operation.

- The reuse of pre-existing proxy classes is possible only within ABAP Proxy. Neither the creation of new proxies nor modifications in any form are supported, as these require a SAP PO repository, containing metadata to function properly.