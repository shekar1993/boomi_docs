# View Linked Documents dialog 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-2e0d9359-737e-4845-9f2c-9911a0b9008e"/>
</head>


Use the View Linked Documents dialog to see documents that are retrieved or sent by connectors in a process execution.

-   For the Start step connector, when you click View Linked Documents you see the outbound document\(s\) produced from this inbound document.

-   For all other connectors, when you click View Linked Documents you see the inbound document\(s\) that this outbound document came from.


The following controls help you find documents:

**Show Data for Connector**
 Used to select the connection. You can select any single connection used in the process or All connections.

**\#**  
 The document number.

**Status**  
-   ![Green circle](../Images/main-ic-circle-green-20x22_0a620eac-494b-4d65-9f1f-6b372abe7acd.jpg) Successful document
-   ![Red circle with white dash](../Images/main-ic-bar-white-on-red-circle-20_bb816599-0e68-436e-a92a-dafa82affda4.jpg) Failed document

**Actions**  
![Gear or Actions icon](../Images/main-ic-gear-blue-and-arrow-black-16_188e61d7-2204-48ad-b085-15fa4a70615d.jpg) Actions — Click the icon and select View Document. The document opens in the Document Viewer dialog.

**various columns**  
Various columns are displayed in this dialog, depending on the type of connector being used by the process. For example, if a Disk connector is used you see the Directory, File Name, and Size columns.

**First, Previous, Next, Last**  
If all records or documents cannot be displayed in the dialog, use these buttons to navigate.

**Record Count**  
Provides the range of record numbers currently displayed in the dialog and the total number of records.