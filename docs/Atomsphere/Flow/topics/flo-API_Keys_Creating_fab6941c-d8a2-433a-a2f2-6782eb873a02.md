# Generating an API key

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-fab6941c-d8a2-433a-a2f2-6782eb873a02"/>
</head>

You can generate an API key on the **User Settings** page.

API keys are used to authenticate with the API. See [API keys](flo-API_Keys_7c393c4c-2193-40ee-b0aa-ef148c5b423c.md).

1. Navigate to the **Generate a new API key** section on the **User Settings** page. See [User settings](flo-User_Settings_a75df92d-0c13-4468-a57f-4ea66101ccd8.md).

2. **Key Name**: Enter a name for the API key.

3. **Tenant**: Select the tenant that you wish to associate with the API key. The API key will only successfully authenticate you for this tenant; it cannot be used to access other tenants.

4. Click **Generate Key**. The new API key is generated and displayed in the **API keys** table.

Once you have generated an API key, you can use it to authenticate with the API by adding a `x-boomi-flow-api-key` header to your API requests. See [Using API keys](flo-API_Keys_Using_3eb1cca6-8456-4ecd-accc-03769d8b98e4.md).
