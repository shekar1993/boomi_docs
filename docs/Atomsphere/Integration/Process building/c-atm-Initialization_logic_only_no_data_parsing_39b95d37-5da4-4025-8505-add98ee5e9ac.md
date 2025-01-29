# Initialization logic only, no data parsing

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-39b95d37-5da4-4025-8505-add98ee5e9ac"/>
</head>


Sometimes you may need to do only some initialization logic and you do not actually need to modify the document data. In these cases, you can add your initialization logic and leave the rest of the skeleton script alone so the documents pass through untouched.

For example, here is how to store the current number of documents in a process property without affecting the contents of the documents. Note that you still need to iterate through the documents to store them to the outgoing `dataContext` to pass to the next process step. If you omitted this custom scripting step, there would be no documents to pass to the next step.

```java
import java.util.Properties;
import java.io.InputStream;
import com.boomi.execution.ExecutionUtil;

ExecutionUtil.setDynamicProcessProperty("DOC_COUNT", String.valueOf(dataContext.getDataCount()), false);

// Leave the rest of the script as-is...
for( int i = 0; i < dataContext.getDataCount(); i++ ) {
InputStream is = dataContext.getStream(i);
Properties props = dataContext.getProperties(i);

dataContext.storeStream(is, props);
}
```