import OperationEnd from './_operationEnd.md'
import ResponseProfile from './_ResponseProfile.md'
import TrackingDirection from './_TrackingDirection.md'
import ReturnErrRes from './_ReturnResponse.md'

# HTTP PATCH Client (Deprecated) operation

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-4911aa75-dc4d-4ab9-af44-a1594276efe3"/>
</head>


The HTTP PATCH Client (Deprecated) operation determines how to interact with the HTTP service defined in the HTTP PATCH Client (Deprecated) connection.


:::note

The REST Client connector should now be used for PATCH functionality. For a comparison of the REST Client connector and the HTTP Client connector functionality, see this [Community article](https://community.boomi.com/s/article/REST-Client-Connector-vs-HTTP-Client-Connector).

:::

The operation supports one action:

-   PATCH — send HTTP requests supporting the PATCH method to update and make partial changes to an existing resource without replacing the original version of the resource.

    -   Make sure and specify the resource path \(required\) in the Set Properties step \(Path document property\) for the input document to the connector. By specifying the required Path document property, you help ensure that the connection works as expected and does not encounter errors. The connector sends HTTP PATCH requests to the service based on the **Base URL** from the connection and the resource path from the **Path** document property.

    -   Data passed into the HTTP PATCH Client (Deprecated) connector \(for example, a user's name in the Message step\) is included and set in the payload of the Request.

    -   The connector returns an unstructured document as output from the operation.

    -   You can specify HTTP request headers using dynamic document properties. Properties having the prefix `inheader_` are included in the HTTP request. The connector ignores and does not include other properties in the request, but attaches the properties in the output document.


## Options tab 

When you configure a PATCH action, the following fields appear on the Options tab:


<TrackingDirection />

<ResponseProfile />

<ReturnErrRes />


<OperationEnd />