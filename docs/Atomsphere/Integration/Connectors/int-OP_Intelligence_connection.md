# OP Intelligence - Partner connection

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-41589ca7-e9ff-4f3c-90c3-092946de5f7d"/>
</head>

The OP Intelligence — Partner connector includes a few fields necessary for establishing and managing the connection. Below are the required and optional fields you can configure.

## Connection tab

-	**URL:** (Optional) Set if you want to override the default URL.
-	**API Key:** The API key used to connect to the LLM provider.
-	**License Key:** Feature use. For Atom Cloud, no need for a licence. For on-premises Atoms, no licence is required up to 1000 requests per hour.
-	**Default Chat Model:** (Optional) Default chat model if not specified in the operation.
-	**Default Embedding Model:** (Optional) Default embedding model if not specified in the operation.
-	**Connection Timeout:** The maximum wait time, in milliseconds, to establish a connection to a service.
-	**Read Timeout:** The maximum wait time, in milliseconds, to return all the data from a service.
-	**Connection Pooling Settings:** If selected, connection pooling is enabled, allowing connections to be reused for future requests. Connection pools may improve performance by utilising resources more efficiently.

