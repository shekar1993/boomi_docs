---
sidebar_position: 6
---
# Attach an instance of a multi install integration to an environment 

<head>
  <meta name="guidename" content="Spaces"/>
  <meta name="context" content="GUID-84afe3ee-0d8b-4245-8085-51c0df19697e"/>
</head>


This mutation attaches an instance of a multi-install Integration to an environment. It takes **IntegrationPackEnvironmentAttachmentInput** as input.

## Code samples 

#### Input Syntax

``` {#codeblock_e5z_q5s_zxb}
mutation attachIpackInstance {
  integrationPackInstanceEnvironmentAttachmentAttach(
    input: {
      integrationPackInstanceId: "ID!"
      environmentIds: ["ID!"]
    }
  ) {
    id
    environmentId
    integrationPackInstanceId
    environmentExtensions
  }
}

```

|Field|Type|Description|Required/Optional|
|-----|----|-----------|-----------------|
|integrationPackInstanceId|ID|A unique ID assigned by the system to the Integration Pack instance|Required|
| |String|A unique ID assigned by the system to the environment. You can pass multiple environment IDs if you want to attach the Integration Pack Instance to multiple environments.|Required|

#### Return syntax

``` {#codeblock_ftd_y5s_zxb}
{
  "data": {
    "integrationPackInstanceEnvironmentAttachmentAttach": [
      {
        "id": "ID",
        "environmentId": "String",
        "integrationPackInstanceId": "ID",
        "environmentExtensions": “String”
      }
    ]
  }
}

```

#### Platform API objects

|Platform API Object|Operation|URL|
|-------------------|---------|---|
|IntegrationPackEnvironmentAttachment. [See documentation](https://developer.boomi.com/api/platformapi#tag/IntegrationPackEnvironmentAttachment).|**CREATE**|[https://api.boomi.com/api/rest/v1/accountId/IntegrationPackEnvironmentAttachment/](https://api.boomi.com/api/rest/v1/accountId/IntegrationPackEnvironmentAttachment/)|



#### Implementation

To attach the Integration Pack instance to an environment, send the mutation request to *platform.boomi.com/graphql* with the following headers:

|Key|Value|
|---|-----|
|SPACE\_GUID|`<The Space guid\>`|
|Authorization|Bearer `<Token\>`|
|Accept|application/json|

:::note 

The **integrationPackInstanceId** is the ID of the Integration Pack Instance that is initially returned in the response of Install an Integration mutation request. The **environmentIds** is the ID of the environment to which the instance of the multi-install Integration is to be attached, and is returned in the response of the Get the list of environments for an account query.

:::

#### Sample request

``` {#codeblock_f4s_qvs_zxb}
mutation attachIpackInstance {
  integrationPackInstanceEnvironmentAttachmentAttach(
    input: {
      integrationPackInstanceId: "SW50ZWdyYXRpb25QYWNrSW5zdGFuY2UxOTUw"
      environmentIds: ["730bc9b1-1f7c-4049-bb65-aacf993b6fe0"]
    }
  ) {
    id
    environmentId
    integrationPackInstanceId
    environmentExtensions
  }
}

```

#### Sample response

``` {#codeblock_kfq_rvs_zxb}
{
  "data": {
    "integrationPackInstanceEnvironmentAttachmentAttach": [
      {
        "id": "QVRUQUNIX0lQQUNLX0VOVlNXNTBaV2R5WVhScGIyNVFZV05yU1c1emRHRnVZMlV6TkRRNE5nOjg2YjQxM2E4LTFlYmYtNGM5NS1iYzViLTEzOTU3M2I3NzkxMA",
        "environmentId": "86b413a8-1ebf-4c95-bc5b-139573b77910",
        "integrationPackInstanceId": "SW50ZWdyYXRpb25QYWNrSW5zdGFuY2UzNDQ4Ng",
        "environmentExtensions": null
      }
    ]
  }
}

```