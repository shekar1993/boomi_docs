# Connector components

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-7BE43E7B-3A77-4C85-BAE9-03D40A7D4C4B"/>
</head>


Connectors get data into and send data out of processes. They enable communication with the applications or data sources between which data needs to move, or in other words, the “end points” of the process. Those applications and data sources can range from traditional on-premise applications, like SAP and QuickBooks, to web-based applications, like Salesforce.com and NetSuite, to data repositories, like an FTP directory, a commercial database or even an email server.

![Connector icon](../Images/step-ic-connector_466b2d3e-be12-457e-baac-84275f19e95e.jpg)

Connectors differ from APIs \(application programming interfaces\) in that an API works like an electrical socket: until something is plugged into it, an API just sits there. connectors work like plugs. The connectors plug into an API to abstract the technical details of the API as well as the transportation protocols used to communicate with various applications and data sources. This allows you to focus on the business data and logic of the integration.

A connector is a combination of two components: a connection and an operation. The connection is the *where* and the operation is the *how*. These components determine the type of data source, how to physically connect to it, and the type of data records to exchange.

The following table illustrates the difference between connections and operations and the type of information configured in each:

| Connector Type | Connection                                                                                      | Operation                                                                                                   |
|----------------|------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------|
| Disk           | Local directory location                                                                        | File name, file filter, whether to delete files after reading them, and how to name the files               |
| FTP            | FTP host name, port, user name, password                                                        | Remote directory, file filter, and whether to rename or overwrite files                                    |
| Database       | Database host name, user name, password, connection pool settings                               | How to batch or commit and the profile to use (which contains the actual SQL statement)                    |
| Salesforce     | Salesforce account user name and password                                                       | Record type, action (query, create, delete, merge, update, upsert), filters, and sorting                    |
| QuickBooks     | (For Desktop edition) company file name, file mode                                              | Record type and action (query, add, modify, delete)                                                         |
| JIRA REST  | URL to JIRA service, user name, password | Object and action (query, create, delete, update) |

Every process begins with a Start step, which gets data, and typically ends with one or more connectors that send data. Many processes need only two connectors: one to get data from the source and another to send it to the destination. However, you may need additional connectors depending on your integration requirements, such as sending data to multiple destinations or sending email notifications.

Connectors are also used in the middle of the process when the integration needs to connect to a data source; such as, performing a look-up, a cross-reference, or arbitrary database statements in a Decision step, Program Command step, or map function.