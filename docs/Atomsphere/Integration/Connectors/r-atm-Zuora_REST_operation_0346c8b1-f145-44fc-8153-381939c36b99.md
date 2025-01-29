import RequestProfile from './_RequestProfile.md'
import ResponseProfile from './_ResponseProfile.md'
import OperationEnd from './_operationEnd.md'
import TrackingDirection from './_TrackingDirection.md'
import ReturnErrRes from './_ReturnResponse.md'
import TrackingDir from './_TrackObject.md'

# Zuora REST operation 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-0346c8b1-f145-44fc-8153-381939c36b99"/>
</head>


The Zuora REST operation defines how to interact with your Zuora account and represents a specific action \(Get, Query, etc.\) performed against a specific Zuora object type \(Accounts, Invoice Payments, Product Features, etc.\)

Create a separate operation component for each object required for your integration. The set of operations changes for each operation type. The operation supports the following actions:

-   **Get** — takes the ID of the element as input and returns a JSON document with the element that matches the Response Profile. Some operations return binary documents.
-   **Query** — returns JSON documents that match the response profile. When Get retrieves information, it uses the default Zuora page size of 10 and continues fetching files until all are returned.
-   **Create** — creates objects in Zuora.
-   **Delete** — deletes objects in Zuora.
-   **Execute** — updates objects in Zuora.

:::info Important

UTF-8 encode input JSON documents to preserve special characters and ensure the operations work properly.

:::

## CreateAndRetrieveExport object 

The CreateAndRetrieveExport object, available when browsing the Execute operation, is a convenient way to simplify and streamline your process so you don't have to create two separate operations \(one for the creation of the data source export, and another to access the exported data\). Typically, the entire creation and export cycle is performed together in a single process, so the two actions are combined in the Execute operation.

When using this object, the request profile contains a header parameter, X-Zuora-WSDL-Version. This can be used, for example, when you need to make a request to a specific WSDL version. To do so, you add a field named X-Zuora-WSDL-Version in your input document with the specific WSDL version. Then, the connector adds a header with the same name in the request executed by the operation to ensure that the API version you are connecting to and the WSDL version specified in the input document are the same. In this way, you can take advantage of certain operations and objects supported in specific versions.

## Options tab 

Select a connector action and use the Import Wizard to select the object with which you want to integrate. The following table describes the fields for each action type:

<TrackingDir />

<RequestProfile />

<ResponseProfile />

<ReturnErrRes />