# CloudBlue Connect - Partner operation

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-5bddc3d1-1513-4cf9-8502-4094a936466f"/>
</head>


The CloudBlue Connect - Partner operation defines how to interact with your CloudBlue Connect account and represents a specific action \(Search, Create, Update\) to perform against a specific object type such as an asset, a request, a tier, or a Helpdesk ticket.

Create a separate operation component for each action/object combination that your integration requires.

## Actions

The CloudBlue Connect Boomi Connector features various actions \(also called resources\) that can be used to streamline and automate many operations on the CloudBlue Connect platform.

Available Actions

The following list introduces actions that are managed by the connector:

-   **List Resource**: This action is used to list your required resource file.
-   **Get Resource**: Get the required resource file by using this operation.
-   **Create Resource**: Create a required resource file by using this action.
-   Update Resource File: This action is used to update resource files.
-   **Accept**: This action is used to accept required resources.
-  **Reject**: Reject a request by using this operation.
-  **Approve**: Approve required requests by using this action.
-  **Inquire**: Inquire for necessary data to process subscriptions.
-   **Pending**: Switch requests to the pending state by using this action.
-   **Assign**: This action assigns an agent to process Connect requests.
-   **Unassign**: Used to remove an assigned agent from the request processing.
-   **Close**: This operation is used to close a record chunk within a usage file.
-   **Regenerate**: As the name implies, this action is used to regenerate required resources.
-  **Bulk Close**: This operation is used to close all usage records within the usage file.
-   **Reprocess**: Use this action to process the provided resource once again.
-   **Submit**: This operation is used to submit a usage file to your business partner.

## Operations

Each operation implements a specific task such as reading or creating an object of CloudBlue Connect. The CloudBlue Connect connector operations use JSON format and support the following actions:

-   Inbound: Get Search
-   Outbound: Create, Delete, Update, Custom action \(Approve, Pending, Assign, etc.,\)

Extension Objects

Depending on your selected action, the following objects \(also called resources\) of the extension are available:

-   **Asset**: This object represents a subscription on the Connect platform.
-   **Request**: Fulfillment request object \(also called subscription request\).
-   **Tier Account**: A Tier Account represents an account of your customer or reseller.
-   **Tier Account Version**: This represents a version for your tier account object.
-   **Tier Account Request**: A request object for a Tier Account.
-   **Tier Config Request**: This is a Tier Configuration request \(tier request\) object.
-   **Tier Config**: A tier configuration object on the Connect platform.
-   **Subscription Request**: Fulfillment request object \(also called asset request\).
-   **Subscription Asset**: Represents a subscription \(asset\) object on the platform.
-   **Product**: This represents a product object on the platform.
-   **Usage Report**: As the name implies, this represents a usage report object.
-   **Usage Record**: Your provided record is filed within the usage report file.
-   **Usage Chunk**: A chunk of usage records that are filed within the usage report file.
-  **Usage Reconciliation**: Usage reconciliation data is used to indicate successful usage file processing.
-   **Case**: This represents a Helpdesk case object on the CloudBlue Connect platform.