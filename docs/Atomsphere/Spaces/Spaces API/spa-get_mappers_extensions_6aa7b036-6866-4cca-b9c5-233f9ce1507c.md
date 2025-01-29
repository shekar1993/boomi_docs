# Get Mappers and Extensions of an Integration Pack Instance

<head>
  <meta name="guidename" content="Spaces"/>
  <meta name="context" content="GUID-6aa7b036-6866-4cca-b9c5-233f9ce1507c"/>
</head>


This query retrieves the environment mappers and extensions of an Integration Pack instance of the environments that are sent as the input field of the query for the account that is authorizing the request.

## Code samples 

This query takes **ipackInstanceId** and **environmentIds** as input.

#### Input Syntax

``` {#codeblock_c3s_k13_1yb}
query ipackEnvAttachmentDtl {
  integrationPackEnvironmentAttachments(
    ipackInstanceId: "String!"
    environmentIds: ["String!"]
  ) {
    integrationPackInstanceId
    environmentMapExtension
    environmentExtensions
  }
}
```

#### Return Syntax

``` {#codeblock_qk3_l13_1yb}
{
  "data": {
    "integrationPackEnvironmentAttachments": [
      {
        "integrationPackInstanceId": "ID",
        "environmentMapExtension": ["String"]
      }
   ]
}

```

|Field|Type|Description|Required/Optional|
|-----|----|-----------|-----------------|
|ipackInstanceId|String|The Integration Pack Instance ID.|Required|
|environmentIds|String|A list of environment IDs.|Required|
|environmentExtensions|String|The Environment extension data.|Optional|
|environmentMapExtension|String|The Environment map extension data.|Optional|

#### Platform API Objects

This GraphQL query uses the following Boomi Enterprise Platform API objects to retrieve the data:

|Platform API Object|Operation|URL|
|-------------------|---------|---|
|Environment. [See documentation](https://developer.boomi.com/api/platformapi#tag/Environment).|QUERY|[https://api.boomi.com/api/rest/v1/accountId/Environment/query](https://api.boomi.com/api/rest/v1/accountId/Environment/query)|
|IntegrationPackEnvironmentAttachment. [See documentation](https://developer.boomi.com/api/platformapi#tag/IntegrationPackEnvironmentAttachment).|QUERY|[https://api.boomi.com/api/rest/v1/accountId/IntegrationPackEnvironmentAttachment/query](https://api.boomi.com/api/rest/v1/accountId/IntegrationPackEnvironmentAttachment/query)|


#### Implementation

To get the mappers and the extensions of an Integration Pack instance, send the query to *platform.boomi.com/graphql* with the following headers:

|Key|Value|
|---|-----|
|SPACE\_GUID|`<The Space guid\>`|
|Authorization|Bearer `<Token\>`|
|Accept|application/json|

:::note

-   The *ipackInstanceId* is the Integration Pack Instance ID that is initially returned in the response of the QUERY operation performed on the [Integration Pack Environment Attachment object](https://developer.boomi.com/api/platformapi#tag/IntegrationPackEnvironmentAttachment).
-   The *environmentId*is the ID of the environment that is returned in the response of the QUERY operation performed on the [Environment object](https://developer.boomi.com/api/platformapi#tag/Environment)

:::

#### Sample Request

``` {#codeblock_v31_gb3_1yb}
query ipackEnvAttachmentDtl {
  integrationPackEnvironmentAttachments(
    ipackInstanceId: "SW50ZWdyYXRpb25QYWNrSW5zdGFuY2UyNzk3Mg"
    environmentIds: ["4c9d031e-408b-4903-a44e-5a4219e62b25"]
  ) {
    integrationPackInstanceId
    environmentMapExtension
    environmentExtensions
  }
}

```

#### Sample Response

``` {#codeblock_mlm_hb3_1yb}
{
  "data": {
    "integrationPackEnvironmentAttachments": [
      {
        "integrationPackInstanceId": "SW50ZWdyYXRpb25QYWNrSW5zdGFuY2UyNzk3Mg",
        "environmentMapExtension": [
          "",
          "",
          "",
          "",
          "{\"@type\":\"BulkResult\",\"response\":[{\"@type\":\"BulkResponse\",\"Result\":{\"@type\":\"EnvironmentMapExtension\",\"Map\":{\"@type\":\"MapExtension\",\"SourceProfile\":{\"@type\":\"MapExtensionsProfile\",\"Node\":[{\"@type\":\"MapExtensionsNode\",\"name\":\"\",\"xpath\":\"\"},{\"@type\":\"MapExtensionsNode\",\"name\":\"Record\",\"xpath\":\"/Record\"},{\"@type\":\"MapExtensionsNode\",\"name\":\"Elements\",\"xpath\":\"/Record/Elements\"},{\"@type\":\"MapExtensionsNode\",\"name\":\"New Flat File Element\",\"xpath\":\"/Record/Elements/New Flat File Element\"},{\"@type\":\"MapExtensionsNode\",\"name\":\"New Flat File Element\",\"xpath\":\"/Record/Elements/New Flat File Element\"},{\"@type\":\"MapExtensionsNode\",\"name\":\"New Flat File Element\",\"xpath\":\"/Record/Elements/New Flat File 
            Element\"},{\"@type\":\"MapExtensionsNode\",\"name\":\"New Flat File Element\",\"xpath\":\"/Record/Elements/New Flat File Element\"},{\"@type\":\"MapExtensionsNode\",\"name\":\"New Flat File Element\",\"xpath\":\"/Record/Elements/New Flat File Element\"}],\"componentId\":\"129e9220-d86e-4fcb-8c1d-389930db5629\"},\"DestinationProfile\":{\"@type\":\"MapExtensionsProfile\",\"Node\":[{\"@type\":\"MapExtensionsNode\",\"name\":\"\",\"xpath\":\"\"},{\"@type\":\"MapExtensionsNode\",\"name\":\"Record\",\"xpath\":\"/Record\"},{\"@type\":\"MapExtensionsNode\",\"name\":\"Elements\",\"xpath\":\"/Record/Elements\"},{\"@type\":\"MapExtensionsNode\",\"name\":\"New Flat File Element\",\"xpath\":\"/Record/Elements/New Flat File Element\"},{\"@type\":\"MapExtensionsNode\",\"name\":\"New Flat File Element\",\"xpath\":\"/Record/Elements/New Flat File Element\"},{\"@type\":\"MapExtensionsNode\",\"name\":\"New Flat File Element\",\"xpath\":\"/Record/Elements/New Flat File Element\"},{\"@type\":\"MapExtensionsNode\",\"name\":\"New Flat File Element\",\"xpath\":\"/Record/Elements/New Flat File Element\"},{\"@type\":\"MapExtensionsNode\",\"name\":\"New Flat File Element\",\"xpath\":\"/Record/Elements/New Flat File Element\"}],\"componentId\":\"495d1a6f-640e-450d-a1b7-2b7f669c47cf\"},\"SourceProfileExtensions\":{\"@type\":\"MapExtensionExtendProfile\"},\"DestinationProfileExtensions\":{\"@type\":\"MapExtensionExtendProfile\"}},\"environmentId\":\"4c9d031e-408b-4903-a44e-5a4219e62b25\",\"extensionGroupId\":\"70d36151-4070-4

```