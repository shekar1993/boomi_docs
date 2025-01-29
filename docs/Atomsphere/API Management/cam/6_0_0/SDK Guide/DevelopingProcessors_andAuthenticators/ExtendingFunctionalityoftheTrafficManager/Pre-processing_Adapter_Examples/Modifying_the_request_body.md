---
sidebar_position: 3
---

# Modifying the Request Body

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-07db6da5-94a6-4389-ab08-3cae9a7005ba"/>
</head>

To modify the request body in the preprocessing stage, employ the content source and content producer to read from and write to the HTTP request. 

## Procedure

1. Get content source from the request. 

2. Get input stream from the content source. 

3. Read content from the input stream. 

4. Modify the content. 

5. Create a content producer.

6. Set the request body to the created content producer. 

```xml
ContentSource body = event.getCallContext().getRequest().getBody();
final InputStream inputStream = body.getInputStream() ;
//use input stream to read content
//modify content
httpReq.setBody(new ContentProducer() { //set new content body
.........
public void writeTo(OutputStream out) throws IOException {
out.write("modified content")
out.flush();
out.close();
}
});
```

:::note

Refer to the working code in `examples/ModifyRequestBody.java`. 

:::
