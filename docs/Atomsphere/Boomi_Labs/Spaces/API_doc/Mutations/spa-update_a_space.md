---
sidebar_position: 2
---
# Update a Space 

<head>
  <meta name="guidename" content="Spaces"/>
  <meta name="context" content="GUID-aa1a0f83-8e4b-4265-8f96-acef5919ce08"/>
</head>


Use this mutation to update the logo and the description of an existing Space that is created by the account that is authorizing this request. This mutation takes the **SpaceUpdateInput** object as input.

## Code samples 

#### Input syntax

``` {#codeblock_o43_sns_zxb}
mutation($file:Upload) {
 spaceUpdate(input: {
     id: ID!,
     name: String!
     description: String
   Theme: SpaceThemeInput
 
 
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
     id
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

|Field|Type|Description|Required/Optional|
|-----|----|-----------|-----------------|
|id|ID|The unique id assigned by the system to the Space.|Required|
|name|String|The Space Name.|Required|
|description|String|The Space Description.|Optional|
| |SpaceThemeInput|The Space theme data.|Optional|


*SpaceThemeInput*

|Field|Type|Description|Required/Optional|
|-----|----|-----------|-----------------|
|logoAltTxt|String|Logo Alternate Text.|Optional|
|logo|Upload|The Space Logo. Must be a svg or png or jpg file and the size should be less than or equal to 256 KB |Optional|



#### Return syntax

``` {#codeblock_txd_z4s_zxb}
{
  "data": {
    "spaceUpdate": {
      "id": "ID",
      "name": "String",
      "description": "String",
      "createdDate": "String",
      "createdByAccountId": "String",
      "modifiedDate": "String",
      "sharedIpacks": {
          "id": "ID"
       },
      "accountGroup": {
        "id": "ID"
      },
      "modifiedByAccountId": "String",
      "url": "String",
      "theme": {
        "logoAltTxt": "String",
        "logoUrl": "String"
      }
    }
  }
}

```

#### Implementation

To update a Space, send the mutation request to *platform.boomi.com/graphql*with following headers:

|Key|Value|
|---|-----|
|Authorization|Bearer `<Token\>`|
|Accept|application/json|

#### JSON request

Sample mutation that takes the id, name, and the description to update the Space description.

``` {#codeblock_qcx_hps_zxb}
mutation($file:Upload) {
 spaceUpdate(input: {
     id: "84957126-acc4-4175-8480-****",
     name: "test1"
     description: "This is a sample description of the Space"
   theme:{
     logoAltTxt: "String"
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
     id
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

``` {#codeblock_q1j_mps_zxb}
{
  "data": {
    "spaceUpdate": {
      "id": "84957126-acc4-4175-8480-****",
      "name": " testing logos2",
      "description": null,
      "createdDate": "2023-04-13 11:57:12.0",
      "createdByAccountId": "demoaccount-XOCI9G",
      "modifiedDate": "2023-04-13 12:18:42.0",
      "sharedIpacks": null,
      "accountGroup": {
        "id": "b1bddd1dd41d-d59623-401ddb-8a9y01-*****"
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