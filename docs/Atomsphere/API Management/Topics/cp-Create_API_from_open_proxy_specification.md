# Create API from Open Proxy Specification 

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-09c235db-d54a-4a51-8764-175f0c15eca5"/>
</head>

This article describes how to use the API Control Plane Rest API to create and deploy a new API from an Open Proxy Specification file. For more details about parameters and payloads for each request, refer to our [OpenAPI documentation](../Topics/cp-API_and_CLI_reference.md).

## Analyze Open Proxy Specification

The fist step is to validate the Open Proxy Specification file. Send a `multipart/form-data` request with the file attached as openProxySpec:

Request: POST `<tenant>.backend.na.controlplane.boomi.com/apis/analyzeOpenProxySpec`

If you also have an OpenAPI specification file for your API and you intend to upload it manually (instead of referencing its URL inside the Open Proxy Specification), you can attach it too as openAPI. This will perform some additional checks, e.g. see if both files contain the same API name.

Any errors returned by the validation must be addressed before continuing, or else this flow will fail in a later step.

## Create a new universal API

Create an empty API. All fields in the request payload (e.g. name) are for API Control Plane only. When the API is deployed to a gateway, the values from the Open Proxy Specification will be used. It is highly recommended to use the same values to avoid any confusion.

If the API owner is not set explicitly, the current users organization will be used. Note that for setting the owner explicitly, that organization must be accessible to the current user. 

Most importantly, set the platformType of the new API to UNIVERSAL!

Request: POST `<tenant>.backend.na.controlplane.boomi.com/apis`

*Payload:*

```
{
    "name": "<technical-name>",
    "displayName": "<display-name>",
    "description": "<description>",
    "status": "ACTIVE",
    "platformType": "UNIVERSAL",
    "owner": <organization-id, optional>,
    "tags": ["<tag1>", "<tag2...>"]
}
```

Make sure to keep the id field from the response payload, as you will have to use it as replacement for `<api-id>` in the remaining steps!

## Create a new API version

Create an API version for the new API. Without versions, the API cannot be deployed. 

Request: POST `<tenant>.backend.na.controlplane.boomi.com/apis/<api-id>/versions`

As with the API, the version name specified here is for API Control Plane only. When deploying the API version, the version name from the Open Proxy Specification will be used. It is recommended to use the same version name in all places. That also means setting both name and displayName in the request to the same name.

*Payload:*

```
{
    "name": "<version>",
    "displayName": "<version>",
    "description": "<description>"
}
```

## Upload Open Proxy Specification for API Version

Now that the API version is ready, we can attach the Open Proxy Specification file to it. This step will also validate the file again, so hopefully you already did that in the very first step, or you might run into a surprise here. 

Send a `multipart/form-data` request with the file attached as file.

Request: PUT `<tenant>.backend.na.controlplane.boomi.com/apis/<api-id>/versions/<version>/openProxySpec`

If the response contains no errors, the file was saved and the API version is ready to be deployed. However, you should still have a look at any warnings that may have been returned. If the response contains any errors, the file was not saved. You must address the errors and upload a fixed version of the file.

### Optional: Upload OpenAPI Specification for API Version

If your Open Proxy Specification does not already contain a URL for an OpenAPI specification, you can manually upload your OpenAPI specification, similarly to how you uploaded the Open Proxy Specification.

Send a `multipart/form-data` request with the file attached as file.

Request: PUT `<tenant>.backend.na.controlplane.boomi.com/apis/<api-id>/versions/<version>/spec`

## Deploy API version to Environment

Before deploying the API version to an environment, make sure that the agent for that environment is connected and supports the Open Proxy Specification Deployment capability. 

The initial deployment will create a new API in the gateway. Subsequent deployments (e.g. of new API versions) will update the existing API.

Request: POST `<tenant>.backend.na.controlplane.boomi.com/apis/<api-id>/versions/<version>/importIntoGateways`

*Payload:*

```
{
    "environment": <environment-id>
}
```

Repeat this step for each environment into which the API version shall be deployed.