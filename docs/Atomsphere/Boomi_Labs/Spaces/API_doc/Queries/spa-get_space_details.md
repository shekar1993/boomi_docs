---
sidebar_position: 3
---
# Get Space details by its ID 

<head>
  <meta name="guidename" content="Spaces"/>
  <meta name="context" content="GUID-5da11eea-ac83-427b-848b-2d694fa11891"/>
</head>

This GraphQL query retrieves Space details by its ID. This query accepts ID as input.

## Code samples 

#### Input syntax

``` {#codeblock_anz_zth_1yb}
query Space {
  Space(id:"ID!") {
    id
    name
    description
    createdDate
    modifiedDate
    modifiedByAccountId
    sharedIpacks {
      id
      description
      name
      installationType
    }
    url
    theme {
      logoUrl
      logoAltTxt
    }
    accountGroup {
      id
      name
    }
  }
}

```

| Field | Type | Description | Required/Optional |
|-------|------|-------------|------------------|
| id | ID | The unique Space ID. | Required |
| name | String | The Space name. | Required |
| description | String | The Space description. | Optional |
| createdDate | String | The Space creation date. | Optional |
| createdByAccountId | String | The account id that created the Space. | Optional |
| sharedIpacks | IntegrationPacks | The Integration IPacks shared with the Space.<br /> :::note  <br />Only sub-accounts of the account group that is associated with the Space can request for the integration packs shared with the Space. <br /> ::: | Optional |
| accountGroup | AccountGroup | The Account Group associated with the Space. | Optional |
| url | String | The URL of the Space User Interface. | Optional |
| theme | SpaceThe | The Space theme data. | Optional |
|  | me  |  |  |

*SpaceTheme*

|Field|Type|Description|Required/Optional|
|-----|----|-----------|-----------------|
|logoAltTxt|String|Logo Alternate Text.|Optional|
|logoUrl|String|The Space Logo URL.|Optional|

*AccountGroup*

|Field|Type|Description|Required/Optional|
|-----|----|-----------|-----------------|
|id|ID|The account group ID.|Optional|
|name|String|The account group name.|Optional|
|integrationPacks|IntegrationPack|The Integration Pack data.|Optional|

*IntegrationPack*

|Field|Type|Description|Required/Optional|
|-----|----|-----------|-----------------|
|id|ID|The Integration Pack ID.|Optional|
|name|String|The Integration Pack name.|Optional|
|description|String|The Integration Pack|Optional|
|installationType|InstallationType|The installation type data of the Integration Pack. |Optional|



#### Return syntax

``` {#codeblock_vgr_x5h_1yb}
{
  "data": {
    "Space": {
      "id": "ID",
      "name": "String",
      "description": "String",
      "createdDate": "String",
      "modifiedDate": "String",
      "modifiedByAccountId": "String",
      "url": "String” {
        "id": "String",
        "name": "String"
      }
    }
  }
}

```

#### Implementation

To get the details of a Space by its ID, send the query to *platform.boomi.com/graphql* with the following headers:

|Key|Value|
|---|-----|
|Authorization|Bearer `<Token\>`|
|Accept|application/json|

#### Sample request

The id is the ID of the Space that is initially returned in the response of the Create a Space mutation request.

``` {#codeblock_lnm_gvh_1yb}
query Space {
  Space(id:"2da77d1f-bbd4-4066-xxxx-e15fc
") {
    id
    name
    description
    createdDate
    modifiedDate
    modifiedByAccountId
    sharedIpacks {
      id
      description
      name
      installationType
    }
    url
    theme {
      logoUrl
      logoAltTxt
    }
    accountGroup {
      id
      name
    }
  }
}

```

#### Sample response

``` {#codeblock_jzn_3vh_1yb}
{
  "data": {
    "space": {
      "id": "2da77d1f-bbd4-4066-xxxx-e15fc",
      "name": "Trial1_Space",
      "description": null,
      "createdDate": "2022-11-03 08:43:50.0",
      "modifiedDate": "2023-04-14 08:15:00.0",
      "modifiedByAccountId": null,
      "url": "https://api.space-service.cj-pipeline.boomi.com?guid=*****",
      "accountGroup": {
        "id": "b1bddd1dd41d-d59623-401ddb-8a9y01-*********",
        "name": "Trial1"
      }
    }
  }
}

```