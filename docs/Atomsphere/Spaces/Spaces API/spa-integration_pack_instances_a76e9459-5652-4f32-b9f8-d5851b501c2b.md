# Get all Integration Pack Instances for an account

<head>
  <meta name="guidename" content="Spaces"/>
  <meta name="context" content="GUID-a76e9459-5652-4f32-b9f8-d5851b501c2b"/>
</head>


This query retrieves all installed instances of an Integration Pack for the account that is authorizing the request.

## Code samples 

#### Input Syntax

``` {#codeblock_fvk_nvh_1yb}
query ipackInstance {
  integrationPackInstances {
    id
    integrationPackOverrideName
    integrationPack {
      id
      name
    }
  }
}

```

|Field|Type|Description|Required/Optional|
|-----|----|-----------|-----------------|
|id|ID|The Integration Pack instance ID.|Required|
|integrationPackOverrideName|String|The Integration Pack override name.|Optional|
|integrationPack|IntegrationPack|The Integration Pack data.|Optional|

*IntegrationPack*

|Field|Type|Description|Required/Optional|
|-----|----|-----------|-----------------|
|id|ID|The Integration Pack ID.|Optional|
|name|String|The Integration Pack name.|Optional|
|description|String|The Integration Pack description|Optional|
|installationType|InstallationType|The installation type data of the Integration Pack.|Optional|

#### Return Syntax

These fields are returned in the QUERY response of the [Integration Pack Instance object](https://developer.boomi.com/api/platformapi#tag/IntegrationPackInstance).

``` {#codeblock_pbv_cwh_1yb}
{
  "data": {
    "integrationPackInstances": [
      {
        "id": “ID”,
        "integrationPackOverrideName": "String",
        "integrationPack": [IntegrationPack]
      }
    ]
  }
}

```

#### Implementation

To get all Integration Pack instances for the authorizing account, send the query to *platform.boomi.com/graphql*with the following headers:

|Key|Value|
|---|-----|
|SPACE\_GUID|`<The Space guid\>`|
|Authorization|Bearer `<Token\>`|
|Accept|application/json|

``` {#codeblock_qpt_fwh_1yb}
query ipackInstance {
  integrationPackInstances {
    id
    integrationPackOverrideName
    integrationPack {
      id
      name
    }
  }
}

```

#### Sample Response

``` {#codeblock_nbb_mwh_1yb}
{
  "data": {
    "integrationPackInstances": [
      {
        "id": “ID”,
        "integrationPackOverrideName": "String",
        "integrationPack": {
          "id": “ID”,
          "name": "String"
        }
      },
      {
        "id": "“ID”",
        "integrationPackOverrideName": "String",
        }
    ]
  }
}

```