---
sidebar_position: 4
---

# Configuring Endpoint Call Processing

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-f861f6de-5978-4cb1-969d-ac4d03cfafd8"/>
</head>

On the Call Transformations page, specify the following information in these fields: 

- **Processing Adapter:** com.mashery.proxy.customer.generic.soap-rest-transformation-connector

- **Perform Pre-Processing:** Enabled 

- **Perform Post-Processing:** Enabled 

- **Data to make available for pre-processing (one per line):** Pre-Input Data as shown in the following table. 

  |**Data** |**Example** |**Notes** |
  | ---- | --- | --- |
  |node\_interpretation : ``<Node Interpretation> ``text\_node\_name : ``<sample node name>`` |node\_interpretation : strict text\_node\_name : testNode|Optional Field. Example given above under SOAP to REST (Pre-Processing) section |
  |use\_attribute\_prefix : ``<Use Attribute Prefix Flag>`` attribute\_prefix : ``<Attribute Prefix to be use>`` |use\_attribute\_prefix:yesattribute\_prefix:# |Optional Field.Example given above under SOAP to REST (Pre-Processing) section |
  |namespace\_handling : ``<Namespace Handling Flag>``|namespace\_handling:yes |Optional Field.Example given above under SOAP to REST (Pre-Processing) section |
  |namespace\_handling : ``<Namespace Handling Flag>`` use\_namespace\_prefix : ``<Use Namespace Prefix Flag>`` namespace\_prefix : ``<Namespace Prefix to be use>`` |namespace\_handling:yesuse\_namespace\_prefix:yesnamespace\_prefix:# |Optional Field.Example given above under SOAP to REST (Pre-Processing) section |
  |array\_representation : ``<array representation>`` array\_parent\_child : parent|child |array\_representation : compact array\_parent\_child : options|option |Optional Field.Example given above under SOAP to REST (Pre-Processing) section |
  |array\_representation : ``<array representation>`` array\_parent\_child : parent|child |array\_representation : expand array\_parent\_child : options|option |Optional Field.Example given above under SOAP to REST (Pre-Processing) section |
  |consider\_number : ``<flag>`` |consider\_number : true |Optional Field. Default is false.Example given above under SOAP to REST (Pre-Processing) section |
  |consider\_boolean : ``<flag>`` |consider\_boolean : true|Optional Field. Default is false. Example given above under SOAP to REST (Pre-Processing) section |
  |override\_custom\_error\_message : ``<flag>`` |override\_custom\_error\_message : true. |Optional Field. Default is false|
