# JSON data parsing

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-6e190d31-df87-49a0-abe0-5d6c8c653760"/>
</head>


In this topic is a basic script that demonstrates how to parse a document containing JSON data.

```java
// Load compatibility script
load("nashorn:mozilla_compat.js");

// Load Java classes
importClass(com.boomi.execution.ExecutionUtil);
importClass(java.util.Properties);
importClass(java.io.ByteArrayInputStream);
importClass(java.util.Scanner);

for( var i = 0; i < dataContext.getDataCount(); i++ ) {
var is = dataContext.getStream(i);
var props = dataContext.getProperties(i);
var s = new Scanner(is).useDelimiter("\\A");
var inputString = s.hasNext() ? s.next() : "";

var obj = JSON.parse(inputString);
var outStr = "result = " + obj.result + " and count = " + obj.count;

var outStream = new java.io.ByteArrayInputStream(outStr.getBytes('UTF-8'));
dataContext.storeStream(outStream, props);
}

//given an input document containing: '{"result":true, "count":42}'
//the output document contains: result = true and count = 42

```