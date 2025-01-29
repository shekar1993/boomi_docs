---
sidebar_position: 10
---

# Endpoint Call Transformations

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-23535876-795d-4fbb-8119-71fab94fc571"/>
</head>

The Traffic Manager can apply processing logic to an API call before it is sent to the host API servers and after the call is returned from the client API servers. A typical use-case for a processing logic is protocol translation. For example, when developer makes an XML-RPC to the client API servers that require the API calls to be REST-based, the Traffic Manager translates this call to a REST-based call using specific translation logic written by a API Management Engineer. Protocol translation can make the API appear more robust by supporting multiple protocols when, in fact, it only supports a single protocol. 

Other common use-cases for the processing adapter include content injection, content filtering, and content transformation.

For more information, refer to:

- [Call Transformation](../../../CallTransformation/Introduction.md)

- [Connectors Guide](../../../ConnectorGuides/BoomiMasheryConnectors/Overview.md)

The following table describes the fields on the Endpoint Call Transformations page. 

|**Field** |**Description** |
| ---- | ------ |
|Processing Adapter|<p>Class file of custom logic that the Traffic Manager uses to perform pre- or post-processing of an API call. </p><p>Refer to the [Connectors Guide](../../../ConnectorGuides/BoomiMasheryConnectors/Overview.md) and configure the **Call Transformations** page according to your requirements and environment. </p>|
|Perform Pre-processing|<p>Configures the Traffic Manager to process the API call before it is sent to the client API server. </p><p>When enabled, the Traffic Manager is configured to apply custom processing logic to an API call before the call is sent to the client API servers. </p>|
|Data to make available for pre-processing|<p>Configures the Traffic Manager to add new values or modify the existing values within the incoming API call before passing it to the client API servers. </p><p>Refer to the [Connectors Guide](../../../ConnectorGuides/BoomiMasheryConnectors/Overview.md) and configure the **Call Transformations** page according to your requirements and environment. </p>|
|Perform Post-processing|<p>Configures the Traffic Manager to process the API call before it is sent to the client API server. </p><p>When enabled, the Traffic Manager is configured to apply custom processing logic to the response received from the client API servers. </p>|
|Data to make available for post-processing|<p>Configures the Traffic Manager to add new values or modify the existing values within the incoming API call before passing it to the consumer. </p><p>Refer to the [Connectors Guide](../../../ConnectorGuides/BoomiMasheryConnectors/Overview.md) and configure the **Call Transformations** page according to your requirements and environment. </p>|

