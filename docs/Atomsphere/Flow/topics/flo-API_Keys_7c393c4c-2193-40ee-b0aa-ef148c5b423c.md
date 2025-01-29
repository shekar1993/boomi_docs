# API keys

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-7c393c4c-2193-40ee-b0aa-ef148c5b423c"/>
</head>

The **API keys** section on the **User Settings** page allows you to generate and manage API keys for authenticating with the API.

## Overview

Flow is based on an API-first architecture, meaning that many of the operations performed within Boomi Flow can also be accessed through the Rest API.

- You can authenticate with the API using an API key.

- Once you have generated an API key, you can add a `x-boomi-flow-api-key` header to your API requests instead of an Authorization header, to authenticate as yourself. This header should contain only the `apiKey` value of the API key.

- API keys are specific to a tenant, meaning that each API key only authenticates you for the tenant selected when generating the API key.

:::note

When making requests to the API, you may also need to include a `manywhotenant` header referencing the tenant ID value that the API key is associated with.

:::

To learn more about using the Rest API, see the documentation.

## Managing API keys

The **Generate a new API key** section allows you to generate a new API key. See [Generating an API key](flo-API_Keys_Creating_fab6941c-d8a2-433a-a2f2-6782eb873a02.md).

The **API keys** table displays the existing API keys that you have generated from your user account. The table contains the following columns:

- **Actions**: The **Delete** icon allows you to delete an API key. See [Deleting an API key](flo-API_Keys_Deleting_b0969c7e-3962-46c5-b2b7-c8ae5343c192.md).

- **Key Name**: The name of the API key.

- **Tenant Name**: The name of the tenant that the API key allows you to authenticate to.

- **Tenant ID**: The ID of the tenant that the API key allows you to authenticate to.

- **Created**: The date the API key was generated.

- **Key**: Click **Show** to display the 32-character API key.
