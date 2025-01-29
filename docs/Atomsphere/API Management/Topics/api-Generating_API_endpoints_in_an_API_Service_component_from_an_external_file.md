# Generating API endpoints in an API Service Component from an external file

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-ec826d4c-bc1b-40c5-b6ea-900c8f0e6348"/>
</head>

Use the **Import an Endpoint** option to create API endpoints for the API Service component from an external file, such as an OpenAPI specification file. You can also select which fields, values, methods, and paths to import.

## Procedure

1. In the API Service component, click **Import an Endpoint**.

2. Select **Import processes from an external service file**.

3. Select **Next**.

4. In the **Import Service** field, choose a file to import for creating API endpoints. Supported file types include SOAP WSDL and OpenAPI Specification (in JSON or YAML).

5. In the **Process Location** field, select the folder location.

6. Select **Next**.

7. Select the **Connection** (optional) and a **Process Mode** to use as the default for the generated processes.

8. Select **Next**.

9. In **Select Fields to Import**, select the fields to import into your API Service Component.

  :::note

  The values you select here will overwrite what is currently configured in your API Service components for those fields. Select only the fields you want overwritten.

  :::

10. Select **Next**.

11.  In **Select Methods and Paths to Import**, select at least one HTTP method and endpoint to import.

12. Select **Next**.

13. In the **Summary**, verify the fields, values, methods, and paths to import.

14. Select **Finish**.