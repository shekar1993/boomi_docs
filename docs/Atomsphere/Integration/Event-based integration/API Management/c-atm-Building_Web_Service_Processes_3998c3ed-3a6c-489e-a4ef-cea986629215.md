# Web service processes

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-3998c3ed-3a6c-489e-a4ef-cea986629215"/>
</head>

A process controls the document flow for all requests made by client applications. You can evolve any standard process into a web service process by assigning the Web Services Server connector in the Start step and resetting the base connector as the next step in the process.

If no synchronous responses \(output types\) are configured for return back to the client application, then any type of process flow is acceptable. You can use the other available connectors licensed in your account to connect to other client applications and data sources.

:::note

Consider using a Process Call or Process Route step to execute a chain of child processes for different document flows and actions. The parent process can control the web service piece to handle all requests and responses.

:::

If you have an expected input type defined in your Web Services Server operation, you need to understand that it will be the source document format for your process flow. For example, if XML data is sent in through a SOAP request, then the XML profile must be defined as the source profile in a map if you would like to translate the data directly into a database.

## Process design considerations

When configuring an integration between a client application and , your process design should:

-   Be aware of automatic retries. The process should perform duplicate checking in the event that a given message is sent twice by the client application.

-   Be aware of any requirements on the part of the client application that the process return an acknowledgment message \(defined by the outbound messaging WSDL\) before returning documents.

-   Account for error scenarios and return the appropriate response, as opposed to letting the process throw an exception.

## Managing HTTP and SOAP requests using XML profiles

XML is a common, flexible format that allows web service processes to easily manage HTTP and SOAP requests \(and REST requests if you are using web service components\). strips away the SOAP envelope and HTTP header so you can work solely with the raw data fields when constructing processes at the profile level. It is the most common document type for the start and end of a web service process. Below are some considerations when building these profiles for your integrations.

-   The root tag and web service object name do not need to match.

-   Build one XML profile for each object that you want to integrate. For example, if you want to launch one web service process for updating customer information and another web service process for creating new customers, then manage both actions in one simple XML profile that contains the standard customer fields. Simply assign the UPDATE action for one web service server operation and the CREATE action for the other.

:::note

The default SOAP API configuration specifies that the WSDL includes -specific operation name wrapper elements. You can modify the configuration to remove the wrapper elements to accommodate clients requiring pure SOAP pass-through.

:::

## Communication considerations

Synchronous communication refers to an open session that returns response data to the client application upon initial request. It is best suited for integrations where there is less data being processed and a quick response is required to be sent to the client. A Return Documents step is required for this communication type. Asynchronous communication refers to a closed session where the client application sends an initial request, receives a 200 OK response and no structured response is returned, or there is no Return Documents step in the process.

-   In synchronous communication, in the event there are no response documents forwarded to the Return Documents step to return data to the client for an execution scenario, an empty “Response” or “ResponseList” message is returned to the client application if you have a Single or Multiple XML Object output type defined.

-   If you prefer to send response data asynchronously, depending on the nature of the web service process or the client application you are using, you may want to build another process that sends response data. For instance, you could build a standalone process that is scheduled to run hourly, queries recently created data and sends responses via the Web Services SOAP or HTTP Client connectors.

## Assigning web service operations

Review the topics below to understand operation configuration to control request and response actions if you are creating an operation from scratch.

-   Web Services Server Connector

-   Web Services Server Operation Configuration

You also can link an existing Web Service Server operation to a new process that you are building.

If you are using API Management, you need to link each REST and SOAP endpoint defined in your web service components to a process in which a Web Services Server connector operation is used. You can link the same process to any number of endpoints. The default settings for an endpoint’s specified operation are derived from its linked process’ connector operation. By taking advantage of the capability to define overrides for the operation’s default settings, you can expose different sets of endpoints for use by different customers or partners.
