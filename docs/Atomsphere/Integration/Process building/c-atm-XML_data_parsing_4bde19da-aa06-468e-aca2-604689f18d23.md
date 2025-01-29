# XML data parsing

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-4bde19da-aa06-468e-aca2-604689f18d23"/>
</head>


Review a basic script that demonstrates how to parse a document containing XML data.

Integration uses the JDOM XML library. For a full list of available objects, methods and properties, see [http://www.jdom.org/docs/apidocs/](http://www.jdom.org/docs/apidocs/). It may be helpful to do some additional research on working with XML in Java. One good tutorial can be found here: [https://www.tutorialspoint.com/java\_xml/java\_jdom\_parse\_document.htm](https://www.tutorialspoint.com/java_xml/java_jdom_parse_document.htm).

For more XML and XPath reference information, see [http://www.w3schools.com](http://www.w3schools.com).

```java
import org.jdom.input.SAXBuilder;
import org.jdom.Document;
import org.jdom.Element;
import org.jdom.xpath.XPath;
import org.jdom.output.XMLOutputter;

// Loop through the Process Documents
for ( int i = 0; i < dataContext.getDataCount(); i++ ) {

InputStream is = dataContext.getStream(i);
Properties props = dataContext.getProperties(i);

// Build XML Document
SAXBuilder builder = new SAXBuilder();
Document doc = builder.build(is);

// Here's how to grab values from the current data
// Create an XPath statement to search for the element or elements you care about:
XPath x;
x = XPath.newInstance("//MyElement");
// Select a single node and grab the actual value
eleMyElement = x.selectSingleNode(doc);

if (eleMyElement != null) {
myValue = eleMyElement.getText();
}


// OR multiple nodes (if multiple nodes you will need to loop through them)
myElements = x.selectNodes(doc);

for (Element myElement : myElements) {
...
}


// Here's how to change the value of an existing element
// First, find the element using XPath as illustrated above, then just the value:
myElement.setText("new value");



// Here's how to create a brand new element
// First, create the new element object with the value...
myNewElement = new Element("MyElement").addContent("new value");

// ...Then grab the appropriate parent element to attach your new element to:
x = XPath.newInstance("//MyParent");
eleParentElement = x.selectSingleNode(doc);

if (eleParentElement != null) {
eleParentElement.addContent(myNewElement);
}


// When you're finished manipulating the XML data, you'll need to output the Document's data to an InputStream to pass to the next step in your Process work flow.

XMLOutputter outputter = new XMLOutputter();
is = new ByteArrayInputStream(outputter.outputString(doc).getBytes("UTF-8"));

dataContext.storeStream(is, props);

}
```