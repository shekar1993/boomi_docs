# SAP connection – legacy 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-39e0afdd-ca7d-4278-86c4-4801d650e587"/>
</head>


The SAP – legacy connection contains details about the physical location of a single instance of the SAP application server.

## Settings Tab 

**Note:** The SAP – legacy connector is no longer available for use by customers who have not previously used it. If you are using this connector, you can continue to do so. However, you are encouraged to take advantage of the new functionality provided by the SAP connector.


  

**User Name** - 
  User name

**Password** - 
  Password

**Server** - 
 Host name or IP address of the SAP application server.

**Client** - 
 Client number

**Language** - 
  Language

**System Number**    
 System identification number.

**Minimum Connections** - 
  The minimum number of connections in the pool at all times. The default is 5.

**Maximum Connections** - 
  The maximum number of connections in the pool at any time. The default is 10. You will receive an error if you attempt to exceed the maximum.

**Growth Size** - 
  The increment by which to increase the number of connections in the connection pool. The default is 2

**Shrink Size** - 
 The number of connections that are recycled back to the connection pool after the idle time interval. The default is 1.

**Idle Time** - 
 The interval in minutes after which extra connections in the pool are recycled. After recycling, the pool contains only the minimum connections.