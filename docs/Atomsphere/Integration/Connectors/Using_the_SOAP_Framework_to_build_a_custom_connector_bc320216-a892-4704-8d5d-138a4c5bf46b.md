# Using the SOAP Framework to build a connector 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-bc320216-a892-4704-8d5d-138a4c5bf46b"/>
</head>


When building a SOAP connector rather than one that is REST-based, use the Boomi SOAP Framework which enables easy integration with any SOAP web service.



## Introduction 

The syntax of SOAP is standardized, but the semantics to interact with a given SOAP web service is not. Implementation details such as authentication, resource protection, and object representation are handled in a different ways so that almost every web service is unique in some aspect. To make things easier when building a connector, the Boomi SOAP Framework provides a shortcut and starting point. The framework is a collection of third-party libraries and custom code to develop and package the SOAP connector, and provides building blocks and templates to handle many common web service implementation features. When assembled, the framework provides a full-featured Boomi SDK connector implementation.



## SOAP Framework libraries 

Use the SOAP Framework libraries (the Boomi libraries and third-party libraries) to develop and package a SOAP connector. You do not need to include all of the libraries in your deployed connector package. For example, some are not required because they are already included in the Atom. The required libraries are specifically highlighted. When deploying a SOAP connector, follow the same process as you would for a REST-based connector.



**Note:** All of the files that you need to work with the SOAP Framework are in the Connector SDK artifacts available from the public repository.

## Boomi libraries 

Use the libraries to develop and package a SOAP connector. Not all libraries for development should be included in your connector package.

|Name|File Name\(s\)|Include in Connector|Description|
|----|--------------|--------------------|-----------|
|Boomi Webservices Util|`common-webservices`|Required.|Utility classes for working with SOAP web services.|
|Connector SDK SOAP Framework|`connector-sdk-ws.jar`|Required.|SOAP Framework template for connector implementation.|
|Connector SDK Util|`connector-sdk-util.jar`|Required.|Optional utility classes for facilitating connector implementation.|
|Connector SDK API|`connector-sdk-api.jar`|Not required, included in the Atom.||
|Boomi Util|`boomi-util.jar`|Not required, included in the Atom.|General utility code.|

## Third-party libraries 

Use the third-party libraries to develop and package a SOAP connector. Not all libraries for development should be included in your connector package.

|Name|File Name\(s\)|Include in Connector|Description|
|----|--------------|--------------------|-----------|
|`WSDL4J 1.6.2`|`wsdl4j.jar`|Required.|WSDL parsing.|
|`Apache Axis 1.4`|`axis-nspatch.jar`, `axis-jaxrpc.jar`, `commons-discovery.jar`|Optional, needed for RPC binding.|Invoker implementation for "rpc" binding style web services.|
|`Apache WSS4J 1.5.4`|`wss4j.jar`, `opensaml.jar`, `xmlsec.jar`|Optional, needed for WS-Security.|WS-Security support.|
|`S 2.0`|\(part of JDK\)|Not required, included in all supported Java versions.|Invoker implementation for "document" binding style web services.|
|`JDOM 1.0`|`jdom.jar`|Not required, included in the Atom.|Used for some legacy XML processing. Newer code should use the JDK DOM.|

## SOAP Framework components 

Of the many components in the SOAP Framework, the `WSConnector`, `WebServiceExecutor`, and `WSDLUtil`, `SchemaMap` components are the most used and extended.

-   `WSConnector` — The web service "Template" connector is an almost completely functional Connector SDK connector implementation that can handle "raw" EXECUTE operations for SOAP web services. When building a connector, you can extend this class when writing a custom web service connector implementation. Many of the extension points for common functionality are in the WSConnection class, which is instantiated for each operation invocation from a process. As a starting point for a custom web service connector implementation, use the initial connector-d.xml that is included.

-   `WebServiceExecutor` — This component is a wrapper around various supported web service invocation frameworks \(JAX-WS/Axis\). The wrapper allows the connector implementation to invoke the web service without needing to handle most of the details. Many customizations configure or reconfigure an instance of this class. When you add support for other OperationTypes, you can use an instance of this class to perform the web service operation invocation.

-   `WSDLUtil`, `SchemaMap` — Use these utilities to manipulate WSDLs and XML Schemas.