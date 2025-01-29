# Environment configuration for an API Gateway 

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-f06e7034-0595-4ce3-ae68-f226d166585a"/>
</head>


Use the Environment Configuration page to configure the URL paths for accessing APIs in the environment through the API Gateway to which the environment is attached. To open the Environment Configuration page for the environment, go to the Gateways page \(**Configure Server** \> **Gateways**\), and click the environment name.

The URL path is specific to the API type. And, the URL path must be unique across all environments assigned to this API Gateway. The URL path is formed by appending the specified endpoint path to the Base URL.

Only legal characters are permitted in the URL path. If an illegal character is entered, the character is percent-encoded when **Save** is clicked and the URL examples supplied are updated.
