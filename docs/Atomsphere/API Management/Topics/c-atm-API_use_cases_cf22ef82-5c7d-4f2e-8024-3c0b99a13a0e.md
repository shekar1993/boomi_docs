# API use cases

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-cf22ef82-5c7d-4f2e-8024-3c0b99a13a0e"/>
</head>


Web service APIs can be constructed to facilitate common integration goals, such as event-based integrations and the triggering of integration processes.

## Develop event-based integration

Processes can automatically execute on a schedule as frequently as in one-minute intervals. If you would like to limit the number of process executions and support real-time integration, you can deploy a process that uses the Web Services Server connector to listen for requests. Here are some common examples.

-   Salesforce to database: Through Salesforce Outbound Messaging and Apex triggers, developers can now configure SOAP/HTTP requests to be sent to an endpoint URL upon the editing and/or saving of object records. You can enable a Atom in an on-premise database environment to listen for these requests via its embedded web server and translate the XML into database data that can be sent to a local database solution. There is more information about [Salesforce outbound messaging](http://www.salesforce.com/us/developer/docs/api/Content/sforce_api_om_outboundmessaging.htm) on the Salesforce site.

-   Coupa to EDI: Coupa also supports the ability to build work flows and send XML requests to an endpoint URL. You can use a  Atom Cloud to accept these requests, translate the data into EDI transactions, and send the transactions directly to a trading partner with other communication protocols such as FTP or AS2. This type of scenario does not require the usage of any on-premise resources and is fully supported in the cloud.


## Enable mashup scenarios

You can leverage a web service API to facilitate the [mashup](http://en.wikipedia.org/wiki/Mashup_%28web_application_hybrid%29) of data from an unlimited number of content sources in a variety of data formats. You can return formatted response data synchronously, serve it up to other web service APIs or send it directly to a destination file resource or application.

For example, you could construct a single process that:

-   Accepts user-defined requests

-   Queries Salesforce for updated account information

-   Polls an FTP directory for related flat file data

-   Queries a local QuickBooks file for an account's invoice information

-   Combines and translates the data in a desired format

-   Sends a mashup of the results to a Salesforce custom object

-   Updates an on-premise database application

-   Returns an XML response synchronously to the client request application at any point in the process flow


## Webify legacy or on-premise applications and resources

Web developers can use to more easily integrate a variety of applications and data sources with a web page or SaaS application. The Atom allows you to build a secure pipeline to your on-premise applications and resources behind your firewall, enable a web server on a specific URL and port, and send/receive SOAP and HTTP requests to then manipulate and serve the data.

:::note

Because data security is a top priority for integrations of this type, review the topic about securing APIs, linked below, for a full explanation.

:::

## Trigger integration processes

Input sent to an API endpoint linked to a Web Services Server listener process can be passed as documents of any type, HTTP request headers, URL path parameters and HTTP query parameters. The process can translate the input into other formats or simply send it to on-premise or hosted destinations. The capability for clients to simply kick off a process by hitting the URL is also supported. For this method of invocation, no input data is actually required. These options allow you to not only spark integrations in a real-time fashion, but also prevent you from having to log into the to manually execute a process.

:::note

The Execute Process API also supports process triggering.

:::

## Proxy external web services

Web developers can use to serve as a proxy for external web services. This type of implementation enables an organization to manage, throttle and analyze API usage regardless of where the underlying web services are deployed. 