# OP Wikipedia - Partner connection 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-4d0876e4-77d6-4505-b3d5-4a83dd2b9f79"/>
</head>

The OP Wikipedia — Partner connector includes a few fields necessary for establishing and managing the connection. Below are the required and optional fields you can configure.

## Connection tab

-	**Connection Timeout:** The maximum wait time, in milliseconds, to establish a connection to the Wikipedia service. A value less than or equal to zero means that the process will wait indefinitely until the connection is made. The default is -1.
-	**Read Timeout:** The maximum wait time, in milliseconds, to retrieve all the data from the Wikipedia service. A value less than or equal to zero means that the process will wait indefinitely until all the data has been returned. The default is -1.
-	**Enable Connection Pooling:** If selected, connection pooling is enabled, allowing connections to be reused for future requests. Connection pooling may improve performance by utilising resources more efficiently. The default is false.
-	**Max Simultaneous Requests:** The maximum number of simultaneous requests allowed in the connection at any time. The default is 20. If connection pooling is enabled and this value is not set or is set to -1 or 0, the default of 20 is used.
-	**Idle Timeout (seconds):** The maximum length of time, in seconds, that a connection can remain open while idle. The default is 30. This setting is applicable only if connection pooling is enabled.
