---
sidebar_position: 7
---
# Unattach integration pack instance from an environment 

<head>
  <meta name="guidename" content="Spaces"/>
  <meta name="context" content="GUID-48b6f2f9-154f-4a19-94c7-cf263dc19d61"/>
</head>

This GraphQL mutation detaches an Integration Pack instance from an environment.

## Code samples 
This mutation takes **integrationPackInstanceEnvironmentAttachmentUnattach** object as input.

#### Input syntax

``` {#codeblock_xxc_wvs_zxb}
mutation unattachIpackInstance {
  integrationPackInstanceEnvironmentAttachmentUnattach(
    id: "ID!"
  )
}

```

|Field|Type|Description|Required/Optional|
|-----|----|-----------|-----------------|
|id|ID|A unique ID assigned by the system to the installed instance of the integration pack.|Required|

#### Return syntax

``` {#codeblock_vr4_1ws_zxb}
{
  "data": {
    "integrationPackInstanceEnvironmentAttachmentUnattach": "String"
  }
}

```

#### Platform API objects

This GraphQL mutation uses the following Boomi Enterprise Platform API object:

|Platform API Object|**Operation**|**URL**|
|-------------------|-------------|-------|
|IntegrationPackEnvironmentAttachment. [See documentation](https://developer.boomi.com/api/platformapi#tag/IntegrationPackEnvironmentAttachment).|**DELETE**|[https://api.boomi.com/api/rest/v1/accountId/IntegrationPackEnvironmentAttachment/id](https://api.boomi.com/api/rest/v1/accountId/IntegrationPackEnvironmentAttachment/id)|

#### Implementation

To detach the Integration Pack instance from an environment, send the mutation request with the id of the Integration Pack instance to *platform.boomi.com/graphql* with the following headers:

|Key|Value|
|---|-----|
|SPACE_GUID|`<The Space guid\>`|
|Authorization|`Bearer<Token>`|
|Accept|application/json|

:::note

The `id` is the ID of the instance of the multi-install Integration that you want to detach from its environment, and is initially returned in the response of the Install an Integration mutation request.

:::

#### Sample request

``` {#codeblock_pbq_lws_zxb}
mutation unattachIpackInstance {
  integrationPackInstanceEnvironmentAttachmentUnattach(
    id: "<IpackinstanceID>"
  )
}

```

#### Sample response

``` {#codeblock_ycx_mws_zxb}
{
  "data": {
    "integrationPackInstanceEnvironmentAttachmentUnattach": "QVRUQUNIX0lQQUNLX0VOVlNXNTBaV2R5WVhScGIyNVFZV05yU1c1emRHRnVZMlV6TkRRNE5nOjg2YjQxM2E4LTFlYmYtNGM5NS1iYzViLTEzOTU3M2I3NzkxMA"
  }
}

```