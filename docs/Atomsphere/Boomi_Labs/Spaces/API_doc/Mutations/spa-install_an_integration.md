---
sidebar_position: 4
---
# Install an integration 

<head>
  <meta name="guidename" content="Spaces"/>
  <meta name="context" content="GUID-986c8287-4f47-4ae7-9913-0707a8094dc4"/>
</head>

This mutation installs an Integration Pack for the account that is authorizing the request. You can use this mutation to install a single-install Integration pack and multiple instances of a multi-install Integration Pack. See [Integration Pack documentation](/docs/Atomsphere/Integration/Integration%20packs/c-atm-Integration_packs_73e9b46d-050f-4491-a0bc-dee09949dfa8.md) to learn more.

## Code samples 

This mutation takes the **IntegrationPackInstanceInput** object as input.

#### Input syntax

``` {#codeblock_rfd_pzp_1yb}
mutation installIpack {
  integrationPackInstanceInstall(
    input: {
      integrationPackOverrideName: "String"
      integrationPackId: "ID!"
    }
  ) {
    id
    integrationPackId
    integrationPackOverrideName
  }
}

```

|Field|Type|Description|Required/Optional|
|-----|----|-----------|-----------------|
|integrationPackOverrideName|String|The name of the Integration Pack instance. This field is required while installing a multi-install Integration Pack|Optional|
|integrationPackId|ID|A unique ID assigned by the system to the integration pack.|Required|

#### Return syntax

``` {#codeblock_tfd_pzp_1yb}
{
    "data": {
        "integrationPackInstanceInstall": {
            "id": "ID",
            "integrationPackId": "ID",
            "integrationPackOverrideName": "String"
        }
    }
}

```

#### Implementation

To Install an Integration pack, send a mutation request to *platform.boomi.com/graphql* with following headers:

|Key|Value|
|---|-----|
|Authorization|Bearer `<Token\>`|
|Accept|application/json|

1.  When installing an instance of a **multi-install Integration Pack**, send the mutation request with the following `integrationPackOverrideName`: `<the_override_name>` field`;`its purpose is to distinguish between instances`.`
2.  **Use Get Space details by its ID** query to get a list of all Integration Packs associated with the Space. Pass the Id of the Integration Pack that you want to install as the value of the `integrationPackId` field.

#### JSON request

``` {#codeblock_wfd_pzp_1yb}
mutation installIpack {
  integrationPackInstanceInstall(
    input: {
      integrationPackOverrideName: "adhoc_08 - Mon Apr 24 2023"
      integrationPackId: "c0523638-0838-40e1-bd53-*****"
    }
  ) {
    id
    integrationPackId
    integrationPackOverrideName
  }
}

```

#### JSON response

``` {#codeblock_xfd_pzp_1yb}
"data": {
        "integrationPackInstanceInstall": {
            "id": "SW50ZWdyYXRpb25QYWNrSW5zdGFuY2UzNDQ0OA",
            "integrationPackId": "c0523638-0838-40e1-bd53-*****",
            "integrationPackOverrideName": "adhoc_08 - Mon Apr 24 2023"
        }
    }

```