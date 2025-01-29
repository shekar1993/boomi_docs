# Document properties access with scripting

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-f05febe5-4acd-46d7-9645-ca633a2c16ca"/>
</head>


You can set and retrieve document property values within a custom scripting step.

To retrieve, modify and create document properties, you will use the `props` variable within the document `for` loop. This is a normal Java `Properties` object and you can get and set values with the `getProperty()` and `setProperty()` methods, respectively. This `Properties` object contains both standard and dynamic document properties.

:::note

Document properties \(standard and dynamic\) are not accessible through scripting in a map function. Use a "Get Document Property" or "Set Document Property" function step instead.

:::

```java
import java.util.Properties;
import java.io.InputStream;

for( int i = 0; i < dataContext.getDataCount(); i++ ) {
InputStream is = dataContext.getStream(i);

// Here is the Properties object for the current Document
Properties props = dataContext.getProperties(i);



dataContext.storeStream(is, props);
}
```