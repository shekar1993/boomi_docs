# HTTP Client connector 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-562c73c8-2b0a-4256-89e3-acc2471aedcc"/>
</head>


Use the HTTP Client connector to exchange data with HTTP-enabled servers using the Hyper Text Transfer Protocol \(HTTP\) and Hyper Text Transfer Protocol Secure \(HTTPS\) protocols.

The HTTP Client connector is not web services nor SOAP. You can use the connector to get and send generic data, often but not necessarily in XML, through HTTP\(S\) using basic HTTP commands. Exchanging proprietary XML data through HTTP\(S\) is often faster than developing full-blown web services following the SOAP specification.

Some important and unique characteristics of the HTTP Client connector include the following:

-   You can send or retrieve messages using HTTP\(S\) through the HTTP Client connector, however the connector cannot listen for outbound messages from another application. Use the Web Services Server connector for real-time or event-based integrations.
-   The HTTP Client connector is stateless. Because there are no sessions, each document is sent as a separate request in connector steps and in connector calls.


## Connector configuration 

To configure a connector to communicate with an HTTP-enabled server, set up two components:

-   HTTP Client connection

-   HTTP Client operation


This approach provides reusable components that contain connection settings such as URL, user name, and password. After building your connection and connector operation, set up your connector within a process. When the HTTP Client connector is properly configured within your process, Integration can map to and from virtually any system using the connector to exchange data through HTTP.

## Tracked properties 

This connector has the following tracked property that you can set or reference in various step parameters:

**URL** - 
The URL that the connector interacts with for Get or Send actions.

