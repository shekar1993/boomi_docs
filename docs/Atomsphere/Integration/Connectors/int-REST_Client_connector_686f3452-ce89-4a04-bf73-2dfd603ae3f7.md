# REST Client connector 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-686f3452-ce89-4a04-bf73-2dfd603ae3f7"/>
</head>

Use the REST Client connector to connect to any service utilizing a REST API. With this connector, you can extract and exchange data with HTTP-enabled servers using the Hyper Text Transfer Protocol \(HTTP\) and Hyper Text Transfer Protocol Secure \(HTTPS\) protocols, and use the data in your process.

The REST Client connector provides the flexibility to connect to any RESTful API service, extract the data, and use it in your process. The connector is generic, and is not tailored to any specific REST data source. By being generic, the connector provides a standard way to connect to any RESTful API endpoint service and use the information from the service-specific API, rather than requiring the use of a specific branded connector.

A common reason why you use the REST Client connector is to collect data from multiple REST APIs and merge the data into a data storage service such as Google BigQuery, Amazon Redshift, Oracle CRM, etc. The data storage service is independent from the connector, allowing the service to be constantly updated. As long as the service uses a REST API and the HTTP or HTTPS protocols, the connector can connect to it, allowing you to add new applications in your process as they become available.

:::note

The REST Client connector uses a different mechanism for timeouts than the HTTP Client connector. If you have issues with timeouts when using the HTTP CLient Connector, use the REST Client connector instead.

:::

## Prerequisites 

The REST Client connector requires the following:

-   Access to a RESTful API returning binary data \(data with no structure\).
-   Basic knowledge of the RESTful API you are connecting to, including the connection Base URL, endpoints, parameters, etc. We recommend having access to the service's documentation.

## Connector configuration 

To configure a connector to communicate with an HTTP-enabled server, set up two components:

-   REST Client connection

-   REST Client operation

This approach provides reusable components that contain connection settings such as URL, user name, and password. After building your connection and connector operation, set up your connector within a process. When the REST Client connector is properly configured within your process, Integration can map to and from virtually any system using the connector to exchange data through HTTP or HTTPS.

## Tracked groups 

This connector has the following tracked group that you can reference in various step parameters:

- **Response Headers** - Input a property with the property group "Response Header" to fetch a response header after the execution of your connector step. If the response header does not exist from the response, then the value will be blank.
