---
sidebar_position: 1
---

# Create a Space 

<head>
  <meta name="guidename" content="Spaces"/>
  <meta name="context" content="GUID-6a9ef0e1-c643-4518-8e86-6897426b6b5e"/>
</head>

This mutation creates a new Space and takes the **SpaceCreateInput** object as input.

## Code samples 

#### Input syntax

``` {#codeblock_tyl_zks_zxb}
mutation($file:Upload) {
  spaceCreate(input: {
      name: String!
      description: String
      sharingMode: SpaceSharingMode
      integrationPackIds: [ID]
      accountGroupId: ID!
      accountIds: [ID]
    theme: SpaceThemeInput} )
}


```


|Field|Type|Description|Required/Optional|
|-----|----|-----------|-----------------|
|name|String|The Space name.|Required|
|accountGroupId|ID|The id of the account group for which the Space is being created|Required|
|integrationPackIds|ID|The id of the Integration Pack that will be associated with the Space.|Optional|
|accountIds|ID|The id of the account that will have access to the Space.|Optional|
|description|String|The Space description.|Optional|
|sharingMode|SpaceSharingMode|The sharing mode allows you to share a Space that you have created with other Boomi accounts. Currently the only accepted value for this parameter is **ACCOUNT\_GROUP.**|Optional|
|theme|SpaceThemeInput|The Space theme data.|Optional|

*SpaceThemeInput*

|Field|Type|Description|Required/Optional|
|-----|----|-----------|-----------------|
|logoAltTxt|String|Logo Alternate Text.|Optional|
|logo|Upload|The Space Logo. Must be a svg or png or jpg file and the size should be less than or equal to 256 KB|Optional|

#### Return syntax

``` {#codeblock_afr_jms_zxb}
{
  "data": {
    "spaceCreate": {
      "id": "String!",
    
  "name": "String!",
      "description": String,
      "createdDate": "String",
      "createdByAccountId": "String!",
      "modifiedDate": "String",
      "accountGroup": {
        "id": "String!"
      },
      "modifiedByAccountId": "String",
      "url": "String",
      "theme": {
        "logoAltTxt": "String",
        "logoUrl": null
      }
    }
  }
}

```

#### Implementation

To create a new Space, send a mutation to platform.boomi.com/graphql with the following headers:

|Key|Value|
|---|-----|
|Authorization|Bearer `<Token\>`|
|Accept|application/json|

#### JSON request

Sample mutation that takes the name, description, sharing mode, account group id, integration pack ids, and account ids to create a new Space.

``` {#codeblock_h2q_3ns_zxb}
mutation($file:Upload) {
  spaceCreate(input: {
      name: "Test1"
      description: "testing uploading logo"
      sharingMode: ACCOUNT_GROUP
      integrationPackIds: ["89abcdef-0123-4567-89ab-cdef01234567
","76abcdef-0145-4913-59af-fsef01234543"]
      accountGroupId: "b1bddd1dd41d-d59623-401ddb-8a9y01-*********"
  
      accountIds: [
        "demoacct1-BQZ9V2"
        "demoacct2-LIYF9V"
        "demoacct3-2DOYAL"
        "demoacct3-17BSXD"
        "sidpopaccount-746SUU"
        "sourcechildaccount-EE07OA",
        "sourcechildaccount2-28K1PZ"
      ]
    theme:{
      logoAltTxt: "testing"
      logo: $file
    }
    }) {
    id
    name
    description
    createdDate
    createdByAccountId
    modifiedDate
    sharedIpacks {
      id
    }
    accountGroup {
      name
    }
    modifiedByAccountId
    url
    theme{
      logoAltTxt
    logoUrl
    }
  }
}

```

#### JSON response

``` {#codeblock_kk1_4ns_zxb}
{
  "data": {
    "spaceCreate": {
      "id": "84957126-acc4-4175-8480-****",
    
  "name": "test1",
      "description": null,
      "createdDate": "2023-04-13 11:57:12.0",
      "createdByAccountId": "demoAccount-*****",
      "modifiedDate": null,
      "accountGroup": {
        "id": "b1bddd1dd41d-d59623-401ddb-8a9y01-a184e0d4d041a"
      },
      "modifiedByAccountId": null,
      "url": "https://space.boomi.com?guid=gh887hhuj",
      "theme": {
        "logoAltTxt": "testing",
        "logoUrl": null
      }
    }
  }
}

```