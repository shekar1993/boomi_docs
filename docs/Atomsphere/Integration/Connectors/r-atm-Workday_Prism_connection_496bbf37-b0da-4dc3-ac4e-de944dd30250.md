import TestConnection from './_TestCon.md'

# Workday Prism Analytics \(Tech Preview\) connection 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-496bbf37-b0da-4dc3-ac4e-de944dd30250"/>
</head>


The Workday Prism Analytics \(Tech Preview\) connection represents and contains all of the information that is needed to connect to and log in to a specific Workday account instance.

If you have multiple organizations or sandbox instances, you need a separate connection for each. You can pair a single connection with different Workday Prism Analytics \(Tech Preview\) operations to perform a unique action against a Workday instance.

## Connection tab 

The Workday Prism Analytics \(Tech Preview\) connector uses the OAuth 2.0 protocol for authentication and authorization. To establish a connection to Workday, you need your API service endpoint, your client ID and secret, and your refresh token.

**API Endpoint** -
 Enter the URL for the Workday REST API service endpoint. For example, the URL to your data center and production service may be `https://wd2-impl-services1.workday.com/ccx/api/v1/<tenant\_id\>`. The URL is analyzed to determine and set the base host API and tenant account. You can find the endpoint in Workday using the View API Client task.

**Client ID** -
  The client ID obtained from Workday to request authorized access to client data. The Client ID is generated for you in Workday when you register the API client in your tenant using the Register API Client for Integrations task. In addition, the Include Workday Owned Scope option must be included when creating the credentials in Workday.

**Client Secret** -
 The client secret obtained from Workday. Click **Click to Set** to open the Password window. Enter the alphanumeric client secret that is associated with the Client ID. The Client Secret is generated for you in Workday when you register the API client in your tenant using the Register API Client for Integrations task. When you are done, click **Apply**.

**Refresh Token** -
 Click **Click to Set** to open the Password window. Enter the refresh token allowing access to Workday. You can generate a refresh token in Workday when you register the API client in your tenant using the Register API Client for Integration task. When you are done, click **Apply**.

 Have the appropriate access rights and permissions to create Workday Prism datasets using the Workday user interface. The API uploads are performed with this user.


<TestConnection />