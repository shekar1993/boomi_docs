---
sidebar_position: 4
---

# Configuring Endpoint Call Processing

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-5ce8379d-53ba-43cd-8b33-1af5d6bb1df1"/>
</head>

On the Call Transformations page, specify the following information in these fields: 

- **Processing Adapter:** com.mashery.proxy.customer.generic.xml-json-transformation-connector 

- **Perform Pre-Processing:** Enabled 

- **Perform Post-Processing:** Enabled 

- **Data to make available for pre-processing:** Pre-Input Data as shown in the following table. 

  |**Data** |**Example** |**Notes** |
  | ---- | --- | ---- |
  |array\_representation : ``<array representation> `` array\_parent\_child : parent|child |array\_representation : compact array\_parent\_child : options|option |Optional Field. Applicable for XML→JSON Transformation |
  |array\_representation : ``<array representation>`` array\_parent\_child : parent|child |array\_representation : expand array\_parent\_child : options|option |Optional Field. Applicable for XML→JSON Transformation |
  |consider\_boolean : ``<flag>`` |consider\_boolean : true |Optional Field. Applicable for XML→JSON Transformation |
  |consider\_number : ``<flag>`` |consider\_number : true |Optional Field. Applicable for XML→JSON Transformation |
  |namespace\_handling : ``<Namespace Handling Flag>``|namespace\_handling:yes |Optional Field. Applicable for XML→JSON Transformation |
  |namespace\_handling : ``<Namespace Handling Flag>`` use\_namespace\_prefix : ``<Use Namespace Prefix Flag>`` namespace\_prefix : ``<Namespace Prefix to be use>`` |namespace\_handling:yes use\_namespace\_prefix:yes namespace\_prefix:# |Optional Field. Applicable for XML→JSON Transformation |
  |node\_interpretation : ``<Node Interpretation>`` text\_node\_name : ``<sample node name>``|node\_interpretation : strict text\_node\_name : testNode|Optional Field. Applicable for XML→JSON Transformation |
  |override\_custom\_error\_message : ``<flag>`` |override\_custom\_error\_message : true |Optional Field. |
  |use\_attribute\_prefix : ``<Use Attribute Prefix Flag>`` attribute\_prefix : ``<Attribute Prefix to be use>`` |use\_attribute\_prefix:yes attribute\_prefix:# |Optional Field. Applicable for XML→JSON Transformation |