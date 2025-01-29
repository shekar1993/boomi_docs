# com.boomi.execution.ExecutionUtil

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-7727f7f7-f8b9-43e1-b39d-8ac28fa11fb5"/>
</head>

The methods in the com.boomi.execution.ExecutionUtil class are the means by which scripts in custom scripting steps and custom scripting map functions interact with internal process execution information.

- `public static SSLContext createSSLContext()` - Creates a custom SSL context based on the specified public and private keystores. If you do not specify a keystore, a common trust store is used instead.

  When you use this method in connector development, the SSL context is created based on the connection's Trust SSL Server Certificate setting:

  - If Trust SSL Server Certificate is specified, the SSL context is created with the configured certificate for both browsing and execution operations.

  - If Trust SSL Certificate is not specified, the following occurs:

    - For browsing operations, the SSL context is created with the Atom's JVM certificates.

    - For execution operations, the SSL context is created with an account-level certificate, if there is one; otherwise, it is created with the Atom's JVM certificates.

- `public static String getAccountId()` - Returns the account ID in which the process is executing.

- `public static Logger getBaseLogger()` - Returns a handle to the process logger to be able to write messages to the process log for debugging or informational purposes. Use the following standard Java `Logger` methods to write messages of different log levels:

  - `info(String message)`
  - `warning(String message)`
  - `severe(String message)`
  - `fine(String message)`
  - `finer (String message)`
  - `finest (String message)`

- `public static String getContainerId()` - Returns the internal ID for the Atom on which the process is executing.

- `public static com.boomi.util.Counter getCounter(String counterName, int batchSize)` - Returns the specified counter for the process that is executing.

- `public static String getDirectory()` - Returns the directory from which the process is executing.

- `public static String getDynamicProcessProperty(String key)` - Returns the value of the specified dynamic process property.

- `public static String getExecutionProperty(String key)` - Returns the value of the specified execution property.

- `public static String getProcessProperty(String componentId, String propertyKey)` - Returns the value of the specified Process Property component.

- `public static void setDynamicProcessProperty(String key, String value, Boolean persist)` - Sets the specified dynamic process property with the provided value. If you use “true” as the `Boolean persist`, the dynamic property is persistent. If you use “false” the dynamic property is not persistent.

- `public static void setExecutionProperty(String key, String value)` - Sets the specified execution property with the provided value.

- `public static void setProcessProperty(String componentId, String propertyKey, String value)` - Sets the specified Process Property component with the provided value. This method persists the property value if the Process Property component’s Persist check box is turned on.

  To find the propertyKey, open the Process Property component. The Key field on the Process Property tab displays the value.
