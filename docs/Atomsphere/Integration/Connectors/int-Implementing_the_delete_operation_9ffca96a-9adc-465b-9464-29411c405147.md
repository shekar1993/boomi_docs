# Implementing the Delete operation 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-9ffca96a-9adc-465b-9464-29411c405147"/>
</head>


Short description is TBD. Relates to CON-445

## When to use the Delete operation

If the service supports the deletion of a record that has a simple singleton key, you can use the Delete operation to implement the functionality. In this case, there is no input profile. Instead, the operation supports setting a single required object id parameter on the Parameters tab in the Connector step dialog.

Delete is:

-   Invoked *for each group of documents*
-   Receives ObjectId instance *for each document*
-   Conventions: 1:1, N:1, Empty success for not found
-   Roles \(input, output\)
    -   predefined XML only for input
    -   Custom output

## Limitation 

The Connector SDK does not provide the ability to add more than one parameter for the Delete operation, and no input profile can be specified. Therefore, if the service supports paths with multiple ids in the form `/{customerID}/orders/{orderID}` the standard Delete operations cannot be used. In this case, use the Execute operation with a custom operation type. This situation also occurs when the record to delete does not have a single primary key, but instead has a composite key where multiple values must be specified to identify a single unique record.

In this case, implement an Execute operation and specify an input profile to handle one or more parameters for the operation. You can configure the operation in the descriptor using the following directive:

-   `<operation types="EXECUTE" customTypeId="DELETE" customTypeLabel="DELETE"/\>`