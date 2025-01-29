---
sidebar_position: 7
---
# Tee-ing Response Body

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-b618331d-b4a8-454a-8b86-aa19f4d77d7b"/>
</head>

Once a response is streamed, it cannot be streamed again since the target would have flushed and closed the stream. Use the `com.mashery.http.server.HTTPServerResponse#setBody` method to set a specialized content producer that will stream to a caller and also a secondary destination. 

## Defining a Content Producer

```
public class BiContentProducer implements ContentProducer{
@Override
public void writeTo(OutputStream out) throws IOException {
BufferedInputStream in = new BufferedInputStream(origin.getInputStream());
byte[]buffer = new byte[4096];
int c;
while((c = in.read(buffer)) != -1){
out.write(buffer, 0,c); //send response bytes to caller
secondaryStream.write(buffer); //send response bytes to secondary output.
//OPtionally write to secondary stream in a separate thread.
}
out.flush();
secondaryStream.flush();
secondaryStream.close();
}
}
```

## Setting a Content Producer to the Response

```
try{
BiContentProducer contentProducer = new BiContentProducer(origin, keyId);
postProcessEvent.getServerResponse().setBody(contentProducer);
}catch(IOException e){
Logger.error(AuditProcessor.class, "Error in creating respnse providr", e);
}
```

For more information, refer to `examples/PipeResponseAdapter.java` and `examples/BiContentProducer.java` in the Examples folder. 
