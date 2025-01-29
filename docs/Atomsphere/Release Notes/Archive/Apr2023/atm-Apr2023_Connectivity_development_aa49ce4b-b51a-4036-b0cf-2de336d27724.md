# Connectivity development 

<head>
  <meta name="guidename" content="Release Notes"/>
  <meta name="context" content="GUID-aa49ce4b-b51a-4036-b0cf-2de336d27724"/>
</head>





## Access to Connector Deployment and Management APIs 

Customers, Partners, and Administrators will be able to deploy and manage connectors using these APIs. Many of these functions require certain restricted features that are noted in the corresponding documentation.

Feature:

Using the Connector Deployment APIs, you can perform the following functions:

-   Create, delete, or retrieve a Connector Group

-   Create or delete a Connector Classification

-   Create, delete, or retrieve a version of an existing connector

-   Auto-configure a connector from a Connector Archive

-   Validate a Descriptor File


Using the Connector Management APIs, you can perform the following functions:

-   Submit a Connector Version for review

-   Cancel a Pending Version review

-   Submit a Connector Visibility Change for review

-   Cancel a Pending Connector Visibility Change request

-   Create a Connector Version Change request

-   Cancel a pending Connector Version Change request

-   Cancel a pending release for a Private/Public Connector


\(CON-6606\)



To learn more, see the topics [Connector Deployment API](https://developer.boomi.com/api/connectorgroup#section/Introduction-to-Boomi-integration-connectors) and [Connector Management API](https://developer.boomi.com/api/connectorgroup).

## Connector Descriptor File 

Feature:

-   For the `fieldSelectionLevels` attribute, the maximum value allowed is now set to `3` so that the platform can keep a resonable number of objects displayed on the query screen. The default value remains set to `2`.

To learn more, see the topic [Connector Description File](https://developer.boomi.com/docs/Connectors/GettingStartedWithConnectorDevelopment/ConnectorArchitecture/Connector_descriptor_file).

