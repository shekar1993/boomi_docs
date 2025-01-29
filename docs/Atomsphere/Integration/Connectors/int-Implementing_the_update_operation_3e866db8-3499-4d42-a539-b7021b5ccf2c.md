# Implementing the Update operation

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-3e866db8-3499-4d42-a539-b7021b5ccf2c"/>
</head>


The Update operation has many purposes, such as updating objects, records, and data.

## Code sample 

Here is a simple implementation of the Update operation with `ExampleUpdateOperation.java`, dealing with multiple objects in one call. Comments are included for context.

```java
public class ExampleUpdateOperation extends BaseUpdateOperation
{
    public ExampleUpdateOperation(ExampleConnection conn)
    {
        super(conn);
    }

    @Override
    protected void executeUpdate(UpdateRequest request, OperationResponse response)
    {
        // ... get user credentials (same as GET example) ...
        for(ObjectData requestData : request) {

            // ... parse objectId from request data ...
            String objectId = ...;

            String requestUrl = "http://www.example.com/service/type/" +
                getContext().getObjectTypeId() + "/value/" + objectId;
            // ... Make POST request to requestUrl using given credentials ...
            // ... grab returned status code ...
            int httpStatusCode = ...;

            // indicate status of the operation
            OperationStatus status = ((httpStatusCode == HttpURLConnection.HTTP_OK) ?
                                      OperationStatus.SUCCESS : OperationStatus.FAILURE);
            response.addEmptyResult(requestData, status, String.valueOf(httpStatusCode), null);
        }
    }

    @Override
    public ExampleConnection getConnection() 
    {
        return (ExampleConnection) super.getConnection();
    }

}

```