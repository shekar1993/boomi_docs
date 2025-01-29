---
sidebar_position: 2
---
# Reading Body Content of Request

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-ecf77f05-3bd8-4e19-8524-9ef041f6d33c"/>
</head>

1. In the request, get the *ContentSource*. 

2. From the ContentSource, get the *inputStream*. 

3. Read content from the *InputStream*. 

   ```xml
   ContentSource body = event.getCallContext().getRequest().getBody();
  final InputStream inputStream = body.getInputStream() ;
  //use input stream to read content
  //Do something with the content
  ```

:::note

Refer working code in `examples/ReadRequestBody.java`. 

:::
