---
sidebar_position: 1
---

# Introduction

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-d2e9ebb7-e1ee-496f-82ea-c8298ef3850a"/>
</head>

The Call Transformation feature in Boomi Cloud<sup>TM</sup> API Management allows API Management (CAM) endpoints with the ability to plugin pre- and postprocessors (CAM connectors).

The Traffic Manager can apply processing logic to an API request before it is sent to the host API servers and after the response is returned from the client API servers. A typical use-case for a processing logic is protocol translation. 

For example, when a developer makes an XML-RPC to the client API servers that require the API requests to be REST-based, the Traffic Manager translates this request to a REST-based request using specific translation logic. Protocol translation can make the API appear more robust by supporting multiple protocols when, in fact, it only supports a single protocol. Other common use-cases for the processing adapter include content injection, content filtering, and content transformation.

## Important Notes

- Your Boomi Cloud area can have this new feature visible only when the Boomi-controlled back office Config Feature flag "Enable External Call Transformation" is enabled for it. Once enabled, this feature can't be turned off.

- ASR (Application Service Registry) services set up in Boomi Cloud will only be available in ASR Picker if they are marked Private. The Services defined for Post methods with no variable set on path can only be successfully selected on the Call Transformation page. This means that query parameters can't be added, and none of the path values for the endpoint can be dynamically populated during run-time.

## Related Links

- [Call Transformations Configuration Page Overview](./Call_Transformations_page_overview.md)

- [Configuring Call Transformations for an Endpoint using TIBCO Cloud Mesh Service](./Configuring_call_transformation_for_an_endpoint_using_TIBCO_cloud_mesh_service.md)
- [Configuring Call Transformations for an Endpoint using Manual Entry](./Configuring_call_transformation_for_an_endpoint_using_manual_entry.md)

- [Creating an Endpoint using TIBCO Cloud Mesh](../DesignControls/APIdefinitions/Endpoints/Creating_an_endpoint_using_TIBCO_cloud_mesh.md)

- [Boomi CAM connectors](../ConnectorGuides/BoomiMasheryConnectors/Overview.md)                                                            
