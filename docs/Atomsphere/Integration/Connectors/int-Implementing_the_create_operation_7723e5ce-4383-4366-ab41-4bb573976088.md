# Implementing the Create operation 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-7723e5ce-4383-4366-ab41-4bb573976088"/>
</head>


The Create operation has many purposes, such as creating objects and folders, uploading documents and files, inserting data into an account, etc.

## Code sample 

Here is a simple implementation of the Create operation with comments included for context. This sample supports batch object creation with `ExampleCreateOperation.java`.

```java
public class ExampleCreateOperation extends BaseUpdateOperation
{
    public ExampleCreateOperation(ExampleConnection conn)
    {
        super(conn);
    }

    @Override
    protected void executeUpdate(UpdateRequest request, OperationResponse response)
    {
        // ... get user credentials (same as GET example) ...
        String requestUrl = "http://www.example.com/service/type/" +
            getContext().getObjectTypeId() + "/value";

        // handle new objects in batches of at most MAX_BATCH_SIZE
        for(List<ObjectData> requestDataBatch : RequestUtil.pageIterable(request, MAX_BATCH_SIZE,
                                                                         getContext().getConfig())) {

            // ... compile a batch of request elements into a big xml doc ...
            // ... Make POST request to requestUrl using given credentials ...
            // ... grab returned status code ...
            int httpStatusCode = ...;

            // indicate status of the operation
            OperationStatus status = ((httpStatusCode == HttpURLConnection.HTTP_OK) ?
                                      OperationStatus.SUCCESS : OperationStatus.FAILURE);
            ResponseUtil.addEmptyResults(response, requestDataBatch, status, String.valueOf(httpStatusCode), null);
        }
    }

    @Override
    public ExampleConnection getConnection() 
    {
        return (ExampleConnection) super.getConnection();
    }
}

```