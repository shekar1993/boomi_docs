# Connector operations and data profiles

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-aabe3969-d72a-4499-9516-8b220cf2473a"/>
</head>


Technology and application connector operations differ with respect to data profiles.

-   For technology connectors such as HTTP, Disk, FTP, SFTP, and Mail, the data format or profile is independent from the operation. You can send any type of data to an FTP directory or HTTP URL. Your integration requirements probably dictate that format, but technically they are unrelated.

-   Application connectors, however, expect a specific format or profile \(typically an XML or JSON profile type\) representing a request message to that application or a response message from it. The XML or JSON profile is automatically generated for you during the configuration of the operation using the import wizard.


When retrieving data from a connector, the document data returned "looks like" the response profile defined in the operation. You use this profile when mapping to another format or whenever you need to reference a specific field in a process step configuration. Similarly, when sending data to a connector, the document data to send must "look like" the request profile specified in the operation. You use this profile when mapping from another format or whenever you need to reference a specific field in a process step configuration.

When sending to a connector, you need to map the document data to the XML or JSON profile defined in that connector's operation. If you pass the wrong data into an operation, the connector call fails. For example, although a "Create Customer" profile and an "Update Customer" profile may look almost identical and have the same fields, it is important to understand they are different and require separate operations and separate profiles.