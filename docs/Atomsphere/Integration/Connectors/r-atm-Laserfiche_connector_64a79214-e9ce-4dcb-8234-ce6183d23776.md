import PartnerSupport from './_PartnerSupport.md'

# Laserfiche - Partner connector 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-64a79214-e9ce-4dcb-8234-ce6183d23776"/>
</head>

<PartnerSupport />

Leverage the Laserfiche - Partner connector to build integrations with other enterprise platforms and implement custom end-to-end solutions. Currently, the Laserfiche - Partner connector supports operations that let you interact with your Laserfiche repository, which promotes easy access to information inside and outside your business, all while maintaining content compliance at all stages, from initial capture to final archival.

![](../Images/img-int-laserfiche_icon_a591b781-e4f5-474e-8992-da18db946098.png)

## Benefits 

The Laserfiche integration with Boomi is helpful for:

-   Viewing a document or document metadata from Laserfiche and viewing or downloading it in another system, like a CRM, ERP, or any system with relevant documents stored within Laserfiche.

-   Saving a document to Laserfiche or updating Laserfiche metadata from another system. This action can be monitored to start a Laserfiche business process.

-   Gathering healthcare data. You can convert a Laserfiche document's metadata into the HL7 data format before sending it to a healthcare system requiring that standard.

-   AP Processing. The Laserfiche solutions for automating invoice processing can update necessary ERP and financial systems.


## Connector configuration 

To configure a connector to communicate with Laserfiche, set up two components:

-   Laserfiche - Partner connection

-   Laserfiche - Partner operation


This design provides reusable components, which contain connection settings such as username, password, and repository information. After configuring your connection and connector operation, you can use the connector operation within a process. When the Laserfiche - Partner operation is defined properly in your process, Integration can map to and from virtually any system using the Laserfiche - Partner connector to retrieve data from or send data to the Laserfiche application.

## Prerequisites

To use the Laserfiche - Partner connector, implement a connection from Laserfiche to Integration. To ensure the connection is successful, you must have the following:

**For Laserfiche Cloud**

-   A Laserfiche account with security permissions to create Service Principal Users and access the developer console

-   A Laserfiche repository \([Learn more](https://www.laserfiche.com/products/document-management/)\)

-   A Laserfiche Service Principal Key

-   A Laserfiche Base-64 Encoded Access Key


**For Self-Hosted Laserfiche Installations**

-   A Laserfiche repository \([Learn more](https://www.laserfiche.com/products/document-management/)\)

-   The base URL for your Laserfiche API, for example, https://ServerName/LFRepositoryAPI

-   A Laserfiche repository’s ID, that is, the name of your Laserfiche repository.

-   The username of an account that has the appropriate access rights to the Laserfiche repository to make changes on behalf of Boomi.

-   The password for the above account.


## Supported versions

The Laserfiche - Partner connector supports all the actions included in Laserfiche Repository API V1 build version 3a7a49ffc2db49aecc10091994a0292be398cd51\_.20221214.3.

The connector works with both Laserfiche Cloud and self-hosted installations.

## Tracked properties

This connector has the following tracked properties that you can set or reference in various step parameters:

-   **event** -  Used for the Get Audit Reasons operation. This property indicates the event that the caused the audit reason: `deleteEntry` or `exportDocument`.

-   **nextLink** -  Used when a collection is returned. This property contains a URL that allows for the retrieval of the next subset of the requested collection.

-   **count** -  Used when a collection is returned. This property contains the count of a collection of entities or a collection of entity references.