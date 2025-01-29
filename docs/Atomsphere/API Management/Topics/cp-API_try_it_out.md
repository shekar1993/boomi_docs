# API Try it out

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-647cc118-7312-4258-ba9e-1289a388575c"/>
</head> 

## No Try-it-out available in swagger UI

OpenAPI 3.x documents can contain a list of servers at which your API can be found. If this list is empty, the try-it-out feature in swagger UI will be unavailable. OpenAPI 2.x, also just known as swagger, only supports a single host. If the host is not present, try-it-out will be unavailable. The possible causes for missing servers in the OpenAPI document differ between administration portal and developer portal.

- **Administration Portal:** Here, the OpenAPI document used for swagger UI is the unchanged document available for your API. Either this was discovered from a gateway or it was uploaded manually. If the document does not contain servers, try-it-out will be unavailable.

- **Developer Portal:** In the developer portal, the server list is rewritten to contain the API urls for all production environments to which the API is deployed. If you find the try-it-out feature unavailable in developer portal, make sure that the API is actually deployed in at least one production environment and that the environment url is configured to be a valid URL.

## CORS issues when trying out API in swagger UI. 

When trying out an API (either in admin portal or in developer portal) you may encounter CORS issues. First of all, you should make sure that your API (either in your backend or via gateway policies) handles CORS correctly and allows calls from our frontend.

In addition, we have noticed another, more subtle problem: If your OpenAPI document is configured to pass the api-key as a query parameter everything should work. But **if your OpenAPI document is configured to pass the api-key inside a header, you may encounter unexpected CORS errors.** This is most likely because the browser does not include the api-key header in the preflight requests (OPTIONS calls). The preflight requests will then fail, because the gateway rejects them as unauthorized and the browser reports a CORS error. The solution is to make sure that your gateway allows preflight requests even without api-keys. How exactly this is done, depends on your platform, but generally, you want to add some policy to pass through any OPTIONS requests without requiring an api-key.