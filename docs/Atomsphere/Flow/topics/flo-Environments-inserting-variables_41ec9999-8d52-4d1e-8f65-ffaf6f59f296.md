# Inserting an environment variable

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-41ec9999-8d52-4d1e-8f65-ffaf6f59f296"/>
</head>


Once you have created an environment variable, you can insert the contents of the variable into a number of areas, such as in an existing value, or into the content of a map element.

## Inserting an environment variable

To insert the value of an environment variable into values, fields, or map element content, use the following syntax:

```
{{environmentName}}
```

For example, if your variable is named "ConnectorURL", use:

```
{{ConnectorURL}}
```

If you are using a variable with a value, you must insert it into the **A default applied to this Value** field.

## Supported areas

You can insert environment variable values into the following areas:

- Map element content: Insert a variable into content map elements, such as page map element.  
  Example: Insert an "environment" variable into a page map element to show which environment a flow is being run in.
- Values: Insert a variable as the default for a value.  
  Example: Insert an "environment" variable value into the **A default applied to this Value** field to show which environment a flow is being run in.
- Custom connectors: Insert a variable into any of the following configuration values:-   **Url**
   -   **Username**
   -   **Password**  
  Example: Insert a "Connector Url" variable value into the **Url** configuration value, which you can change for each environment.
- Identity providers: Insert a variable into any field when configuring an identity provider.   
  Example: Insert a "Client Secret Key" variable value into the **Client Secret** field of an OIDC identity provider, which you can change for each environment.

