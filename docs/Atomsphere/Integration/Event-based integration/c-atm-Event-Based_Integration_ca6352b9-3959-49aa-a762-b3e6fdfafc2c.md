# Event-based integration 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-ca6352b9-3959-49aa-a762-b3e6fdfafc2c"/>
</head>


Use event-based integrations where processing is required in response to irregularly occurring external events. Typically, event-based integration processes are not executed on a schedule. Rather, once executed, an event-based process continuously “listens” for the occurrence of a specific event. The occurrence of the event triggers processing.

The following advanced optional features facilitate the building, deployment, and management of event-driven integrations:

-   [Services Enablement](c-atm-Services_Enablement_e883062e-3271-4dec-bc98-0cb76eaa878c.md#GUID-F8FA3A41-8C0F-41BE-9923-AA5145F36ABE) — Lets you turn any integration process into a web service that can then be deployed on premise or in Boomi’s Atom Cloud. An Atom’s shared web server accepts HTTP and SOAP requests in real time and initiates processing. The requests are the events upon which integration is based. The web server can be configured at the account and account user level to control network and security settings.

-   [API Management](../../API%20Management/Topics/c-atm-API_Management_28fb124c-f53f-4da8-bf8e-ca89656a5f39.md) — Builds upon Services Enablement, enabling a web service publisher to expose versioned APIs for logical groups of web services. A web service API consists of a set of REST, SOAP, and/or OData endpoints. APIs are implemented in Integration as deployable API components.

-   [Event Streams](../../Event%20Streams/es-getting_started_4264b227-9e7a-4705-add9-2bfda9327306.md) — Boomi Event Streams is a cloud-native, event-driven, message queueing solution built into the Boomi Enterprise Platform, making it easy to create high-performance, scalable, event-driven connections for demanding integration use cases.

-   [Atom Message Queuing](c-atm-Atom_Message_Queuing_5310fd40-efdf-4bb2-bb3c-6ef099472b36.md#GUID-509DDAB5-123F-4F03-AE23-882B86FD0CF6) — Atoms support message queuing. The presence in of a messaging system is essential for facilitating inter-process communication, a key requirement for many types of event-based integration usage scenarios. Simplicity, robustness, and reliability are major advantages of the Atom’s native support for message queuing.

    Many usage scenarios for Atom message queuing involve the use of the Atom’s shared web server. An understanding of web service API management is therefore helpful for deriving the benefits of Atom message queuing.
