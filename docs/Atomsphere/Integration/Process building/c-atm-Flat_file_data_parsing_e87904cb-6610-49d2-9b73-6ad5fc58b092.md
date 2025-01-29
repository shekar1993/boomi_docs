# Flat file data parsing

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-e87904cb-6610-49d2-9b73-6ad5fc58b092"/>
</head>


In this topic is a basic script that demonstrates how to parse a document containing flat file data such as a CSV file.

```java
import java.util.Properties;
import java.io.InputStream;
import java.io.BufferedReader;


String LINE_SEPARATOR = System.getProperty("line.separator");
String DELIMITER = ",";

for( int i = 0; i < dataContext.getDataCount(); i++ ) {

InputStream is = dataContext.getStream(i);
Properties props = dataContext.getProperties(i);

BufferedReader reader = new BufferedReader(new InputStreamReader(is));
StringBuffer outData = new StringBuffer();
int lineNum = 0;

while ((line = reader.readLine()) != null) {

// Skip logic ifthis is the first line (assuming the file contains column headers
if (lineNum>0) {

// Parse the line into separate columns splitting on the delimiter defined above
String[] columns = line.split(DELIMITER);

// Obtain a column's value by its known position on the line (zero-indexed)
String someColumnValue = columns[4];


// Perform business logic here as necessary

}

// Add line to output buffer including a line break at the end
outData.append(line);
outData.append(LINE_SEPARATOR);
lineNum++;

}

// Convert the output StringBuffer to an InputStream and store in the dataContext
is = new ByteArrayInputStream(outData.toString().getBytes("UTF-8"));
dataContext.storeStream(is, props);

}
```