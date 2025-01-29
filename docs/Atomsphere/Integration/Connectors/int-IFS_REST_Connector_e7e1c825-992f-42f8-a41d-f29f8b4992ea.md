import PartnerSupport from './_PartnerSupport.md'

# IFS REST – Partner connector 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-e7e1c825-992f-42f8-a41d-f29f8b4992ea"/>
</head>

<PartnerSupport />

The IFS REST – Partner connector simplifies communicating with IFS Application 10 (Apps 10) or IFS Cloud instances, on-premise or in the cloud, to create, read, update or delete data through IFS's REST APIs.

Using the connector, you can integrate Apps 10 or IFS Cloud with other software applications and services wherever they reside. Utilizing the connector, you can browse the IFS schema and set up filters, sorts, and perform other common activities.

The IFS REST - Partner Connector connector connects to the OData REST APIs offered by IFS over an HTTP(S) connection. The connector abstracts the HTTP settings (request headers, errors, etc.) to simplify usage.

## Connector configuration

To configure the IFS REST – Partner connector to communicate with IFS Apps 10 or IFS Cloud, set up two components:

-  IFS REST - Partner connection — The connection represents a specific IFS server and authentication details. This connector supports basic authentication.
-  IFS REST - Partner operation - The operation represents an action against a object. You create one or more operations, one for each type of interaction required by your integration scenario.

This design provides reusable components which contain connection settings and operation settings. After building your connection and operation, you can utilize the Connector step within a process. When the IFS REST - Partner connector is configured properly within your process, Integration can map to and from virtually any connected application using the connector to retrieve data from or send data to the IFS server.

## Supported editions

The connector supports the following editions:

-   IFS Applications 10 \(update 8 or later\)
-   IFS Cloud

## Prerequisites

To implement a connection to your IFS account from Integration and use the connector operations, do the following:

-   Have the URL and port, if required, for the IFS API endpoint, and a valid username and password.
-   Have a local Atom or an Atom in an Atom Cloud.
-   Have knowledge of the hierarchical and data dependency structure of the IFS API model.

## Tracked properties

This connector has the following tracked properties that you can set or reference in various step parameters:

**Custom Header Support** - 
To add headers to the OData request of the IFS REST Partner Connector, use a Dynamic Document Property with the prefix `inheader_`. For example, to set the "Content-Type" header, you would use the Dynamic Document property name as `inheader_Content-Type`. 

The connector supports customizing both the Content-Type and Accept headers using Dynamic Document Properties. For more information, please refer to the article: [Custom Header Support for IEEE Standard 754 in Boomi IFS REST Partner Connector](https://community.boomi.com/s/article/How-To-set-Custom-Header-in-IFS-REST-Partner-Connector-to-Support-IEEE-Standard-754)].

**Bound Entity Set Name** - 
Some Actions and Functions within the IFS REST API are bound to another entity set. For example, the Action to release a ShopOrder is bound to an entity set which identifies which ShopOrder should be released. In these circumstances, both the Action and the bound entity set need to be specified. In an Action or Function action, use the Bound Entity Set Name document property to specify the name of the entity set to which the Action or Function is bound..

**Bound Entity Set Parameters** - 
When using a Bound Entity Set Name, you can also specify the parameters which should be passed to that entity. The parameters are entered as a single, comma-separated string, without spaces between the parameters. For example: `OrderNo='200136',ReleaseNo='*',SequenceNo='*'`. This document property is also used in conjunction with the "Use Extended Parameter" check box for Update operations to specify parameters for Update operations when Extended Parameters are required, specifically when you intend to upload a document to IFS.

**Etag** - 
The entity tag the OData protocol uses to identify specific versions of a resource, and detects whether the ETag has been modified since it was last retrieved.

**Extended Trailing Parameter** -    
This document property is used in conjunction with the **Use Extended Parameter** check box for Update operations to specify the trailing parameters for Update operations, specifically when you intend to upload a document to IFS. When used to upload a document to IFS, the Update action requires the name of the field within IFS to contain the document. Use this document property to specify this name, for example FileData. This is then automatically built into the necessary request to IFS.
  
**Supplemental Entity Sets and variables** - 
Certain operations within the IFS REST APIs require complex structures with multiple levels of entity sets and path variables within a single operation. It is not always viable to present these multi-level operations within Integration. As such, you can specify a supplemental list of entity set names and variables as a single text string. This is appended to the list of entity sets when created.