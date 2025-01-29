# Services Enablement 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-e883062e-3271-4dec-bc98-0cb76eaa878c"/>
</head>


The Services Enablement feature enables you to turn any integration process into a web service that can then be deployed on premise or in any BoomiAtom Cloud to which your account has access. 

Web services deployed in an Atom Cloud can be dynamically invoked by any cloud or on-premise application through the cloud's domain name \(such as, `https://c01-usa-east-integrate.boomi.com`\). An Atom can even be enabled as a simple web server that does not require SOAP or XML messaging. If a client application can post via HTTP or HTTPS, messages are parsed and forward them into the linked process.

:::note

The Services Enablement feature is available in the Professional Plus, Enterprise and Enterprise Plus Editions. Contact your representative for more information.

Before building and deploying web services and web service APIs, you should be familiar with general process development, process deployment and the Atom.

:::

All web services, whether deployed on premise or "in the cloud," are then managed from one central location in Integration to help extend and strengthen existing governance policies.

Deploying a process that contains a Web Services Server connector will launch the web service and web server that will listen for requests or documents.

Another optional feature, API Management, enables a web service publisher to expose versioned APIs for logical groups of web services. A web service API consists of a set of REST and/or SOAP endpoints. APIs are implemented as deployable web service components. For more information, see the topic about API management linked below.

One of the most common use cases for web services is event-based integration. Here is an overview of the process of building, publishing, and invoking web service processes to implement event-driven integration:

1.  Configure your shared web server.

    -   If you will deploy your web service to a Atom Cloud, there is no need to configure it. It defaults to BASIC authentication and should generate a token if one was not already generated.

    -   If you will deploy your web service to a local Atom, you should also configure your firewall/router to route incoming messages to the Atom \(similar to AS2\).

        -   You should set **Authentication** to NONE.

        -   Authentication should be IP-based or SSL Client Certificate-based, but that needs to be done at the firewall level.

2.  Build your initial process:

    1.  Configure the Start step by defining a Web Services Server listener and a Web Services Server operation.

    2.  Add a Message step to generate an XML document for the acknowledgment.

    3.  Add a Return Documents step after the Message step to return the acknowledgment message synchronously back to the sending application.

3.  Test the process.

4.  Configure the Start step by editing the Web Services Server operation:

    1.  Create a new request XML profile and use the XML Import Wizard to build a profile structure based on a saved copy of the test data received from the client application.

    2.  If the client application requires acknowledgment, create a new response XML profile and use the XML Import Wizard to build a profile structure based on a saved copy of the acknowledgment XML.

5.  Add a Branch step after the Start step. Use the second branch path as the starting point for the rest of your process flow. The request XML profile defined in the Web Services Server operation can be used as the source format for the rest of your process and maps.

6.  Redeploy the process.


For details about these steps, review the topics linked below. These topics cover

-   configuring web service processes from end to end

-   configuring web service listen connections. Configuration options include restricting access to web service processes by account, user and IP address.

-   configuring object and action types supported within a Web Services Server operation

-   handling multiple inputs in a single request, multiple response outputs and response paging

-   testing web service processes

-   the Low Latency option for web service processes

-   enabling Atom workers in an Atom Cloud to achieve performance objectives when call volumes increase or when low latency is a requirement

-   invoking web services from client applications and accessing the WSDL

:::note

These tasks also apply to the API Management feature. For each of the linked topics the primary context is API Management.

:::