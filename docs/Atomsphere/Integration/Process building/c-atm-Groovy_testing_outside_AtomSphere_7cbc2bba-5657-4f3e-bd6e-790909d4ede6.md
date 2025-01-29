# Groovy testing outside the Boomi Enterprise Platform

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-7cbc2bba-5657-4f3e-bd6e-790909d4ede6"/>
</head>


There are tools available for testing Groovy scripts outside the Boomi Enterprise Platform.

Among these tools are the [Groovy Swing console](http://groovy-lang.org/groovyconsole.html), a standalone utility, and [plugins](http://groovy-lang.org/ides.html) for popular Java IDEs including Eclipse and IntelliJ IDEA.

When testing outside the platform, you need to simulate the `dataContext` object by modifying your script to read data in from files on your local PC and write results to the console or back to disk. Groovy and Java syntax is very similar so there are few minor syntactical changes to make when switching, most notably any private method declarations.

Here is an example skeleton of a Java class to simulate operating on a single XML document. If you needed to test the script across multiple documents, adapt the script to read in multiple files from disk and iterate through them.

```java
public class simpletest {

publicstatic void main(String[] args) throws Exception {

// Read in data from a local file
InputStream is = new FileInputStream("C:\\Test Data\.xml");

// Parse the data
SAXBuilder builder = new SAXBuilder();
Document doc = builder.build(is);


// YOUR SINGLE DOCUMENT LOGIC GOES HERE
// Output XML data to the Java conole
XMLOutputter outputter = new XMLOutputter();
System.out.print(outputter.outputString(doc));

}

}
```

:::note

Include all the contents from your local Atom's `<atom_installation_directory>/lib` directory to your IDE's or console's classpath to simulate the classes available when running within the Atom.

:::
