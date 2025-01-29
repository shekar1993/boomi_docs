# API Management

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-28fb124c-f53f-4da8-bf8e-ca89656a5f39"/>
</head>


The API Management feature enables an API publisher to expose versioned APIs for logical groups of APIs.

An API consists of a set of [REST](http://en.wikipedia.org/wiki/REST_API), [SOAP](http://en.wikipedia.org/wiki/SOAP), or [OData](https://en.wikipedia.org/wiki/Open_Data_Protocol) endpoints.

:::note

To request the API Management feature, contact your Boomi sales representative.

:::

APIs are implemented as deployable API components. There are two types: API Service and API Proxy. Using API components enables you to consolidate API design into a single, explicit location. These components are created and configured in the **Build** page.

-   In an API Service component, you define endpoints — REST, SOAP, OData, or a combination of types.
-   In an API Proxy component, you connect an external host as the recipient of HTTP traffic through a  API Gateway.

Before building and deploying API Service components, you should be familiar with general process development, process deployment, the Atom and its shared web server, and the Web Services Server connector.

Once built, an API Service component can be deployed to Atoms or environments in the **Deployments** page in the same manner as process components. All versions of an API Service component are retained, so you can redeploy a previous version at any time. automatically generates a WSDL for each deployed SOAP API and an OpenAPI specification file for each deployed REST API.

## API Management example

Consider this sample use case for event-based integration: Your company uses Salesforce to manage its customer relationships, and your task is to synchronize data in the SQL database your company uses for enterprise resource planning with data in the Salesforce instance.

Following is an overview of how you can leverage the API Management feature to build, develop, and manage this event-based integration:

-   Design

    Build an API Service component to define the API by which the Salesforce client will integrate with the SQL database:

    -   Create the API Service component.

    -   Identify the objects in the database whose data is to be synchronized.

    -   Map these objects to Salesforce objects.

    -   For each mapped Salesforce object, identify the operations on that object for which API endpoints are required — for example, Create, Update, Delete.

    -   For each corresponding database object, generate the corresponding REST and/or SOAP API endpoints in the API Service component for the applicable types of operations on that object. When you generate an endpoint, select the option to create the Web Services Server listener process that will be linked to that endpoint. In each process created in this manner the Start step is automatically configured with the applicable Web Services Server connector operation.

    -   Complete the configuration of the API Service component by specifying the base URL for API requests and optionally defining custom HTTP headers that can be passed in requests.

-   Publish

    -   Build and deploy the listener processes to an Atom. Assume this Atom is in a private Atom Cloud owned by your account.

    -   Deploy the API Service component to the same Atom.

    -   Use an API testing tool to invoke API requests to each of the API’s defined endpoints.

    -   Configure Salesforce to trigger API requests to each of the API’s defined endpoints.

    -   Test the triggering of requests from Salesforce.

-   Secure

Implement security measures for the API to protect against unauthorized database access.

On a private Atom Cloud an Atom’s shared web server supports authentication, client certificates, SSL for encryption, IP filtering and user management. All are configurable on the Atom’s Shared Web Server panel, which is accessible in Atom Management \(**Manage** \> **Atom Management**\).

-   Traffic Control

As the owner of the Atom Cloud you can set a number of Atom properties to regulate API request traffic, such as the maximum number of requests per second and the maximum input size. These properties are set in Cloud Management \(**Manage** \> **Cloud Management**\). Additional traffic control options are available there if an Atom worker is dedicated to processing requests — see Performance and Scalability below.

-   Performance and Scalability

    If needed, implement one or both of the following measures to improve the performance of the shared web server and the scalability of the API:

    -   Dedicate an Atom worker to processing API requests.

    -   Select the Low Latency option for each listener process.

    Assume you decide to implement both of the above measures.

-   Monitor Use

    Monitor usage of the API on the Real-time Dashboard \(**Dashboard** \> **Real-time Dashboard**\). This dashboard aggregates execution data for Low Latency listener processes.


    :::note

    For information about enabling API services without customized endpoints, see [Services Enablement](/docs/Atomsphere/Integration/Event-based%20integration/c-atm-Services_Enablement_e883062e-3271-4dec-bc98-0cb76eaa878c.md).

    :::

## Deployed API execution time

Boomi does not recommend creating web server listener processes that take longer than three minutes to run. The recommended way to deal with long-processing requests is one of the following:

-   Having a process that returns quickly and later processes requests asynchronously and then calls a webhook when it is finished
-   Setting the [X-Max-Wait header](/docs/Atomsphere/Integration/Event-based%20integration/int-Atom_forward_headers_9f0fa058-ddb6-44a5-a49e-035f3e255657.md) per the process below

:::note

For public clouds and Managed Cloud Services accounts, contact your Boomi representative to obtain the current values.

:::

1.  Specify the `x-max-wait` header on request from the client.
2.  When the Atom hits the max wait and returns a 202 with the headers, the client can poll at the execution status and/or use the execution id to poll through the platform API \(not a call to the execution Atom\).

    :::note
    
    The method to retrieve the result from the process execution can differ depending on the specifics of the process, so it will vary from case to case.

    :::