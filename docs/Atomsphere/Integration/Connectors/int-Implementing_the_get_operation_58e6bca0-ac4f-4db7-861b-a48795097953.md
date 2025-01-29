# Implementing the Get operation 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-58e6bca0-ac4f-4db7-861b-a48795097953"/>
</head>


The Get operation has many purposes, such as retrieving objects and records, downloading files, reading files, etc.

## Code sample 

Here is a simple implementation of the Get operation with `ExampleGetOperation.java`. Comments are included for context.

```java
public class ExampleGetOperation extends BaseGetOperation
{
    public ExampleGetOperation(ExampleConnection conn)
    {
        super(conn);
    }

    @Override
    protected void executeGet(GetRequest request, OperationResponse response)
    {
        // get user credentials
        String username = getContext().getConnectionProperties().getProperty("username");
        String password = getContext().getConnectionProperties().getProperty("password");

        // grab request information
        ObjectIdData requestData = request.getObjectId();
        String objectId = requestData.getObjectId();

        String requestUrl = "http://www.example.com/service/type/" +
            getContext().getObjectTypeId() + "/value/" + objectId;
        // ... Make GET request to requestUrl using given credentials ...
        // ... grab returned status code and stream ...
        int httpStatusCode = ...;
        InputStream objectStream = ...;

        if(httpStatusCode == HttpURLConnection.HTTP_OK) {
            // save response data
            ResponseUtil.addSuccess(response, requestData, String.valueOf(httpStatusCode),
                                    ResponseUtil.toPayload(objectStream));
        } else {
            // indicate failure
            ResponseUtil.addFailure(response, requestData, String.valueOf(httpStatusCode));
        }
     }

     @Override
     public ExampleConnection getConnection() 
     {
         return (ExampleConnection) super.getConnection();
     }
}

```