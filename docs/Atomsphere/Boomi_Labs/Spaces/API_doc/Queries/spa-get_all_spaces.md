---
sidebar_position: 1
---
# Get All Spaces 

<head>
  <meta name="guidename" content="Spaces"/>
  <meta name="context" content="GUID-9e511833-439c-4567-8757-da1ff06ef750"/>
</head>


This query retrieves all Spaces that are created by the authorized account.

## Code samples 

#### Input syntax

``` {#codeblock_p45_54h_1yb}

query spaces {
  spaces {
    id
    name
    accountGroup {
      id
      name
    }
    createdDate
    modifiedDate
    modifiedByAccountId
  }
}

```

#### Return syntax

``` {#codeblock_lgk_w4h_1yb}
{
  "data": {
    "spaces": [
      {
        "id": "ID",
        "name": "String",
        "accountGroup": {
          "id": "ID",
          "name": "String"
        },
        "createdDate": "String",
        "modifiedDate": "String",
        "modifiedByAccountId": "String"
      },
      ]
  }
}

```

| Field             | Type              | Description | Required/Optional |
|-------------------|-------------------|-------------|-------------------|
| url               | String            | The URL of the Space User Interface. | Optional |
| theme             | SpaceThe          | The Space theme data. | Optional |
| sharedIpacks      | IntegrationPacks  | The Integration IPacks shared with the Space. Only sub-accounts of the account group that is associated with the Space can request for the integration packs shared with the Space. | Optional |
| name              | String            | The Space name. | Required |
| id                | ID                | The unique Space ID. | Required |
| description       | String            | The Space description. | Optional |
| createdDate       | String            | The Space creation date. | Optional |
| createdByAccountId| String            | The account id that created the Space. | Optional |
| accountGroup      | AccountGroup      | The Account Group associated with the Space. | Optional |
|                 |         type          |             |                   |


#### Implementation

To get a list of Spaces created by the authorizing account, send the query to *platform.boomi.com/graphql*with the following headers:

|Key|Value|
|---|-----|
|Authorization|Bearer `<Token\>`|
|Accept|application/json|

#### Sample request

``` {#codeblock_iqc_brh_1yb}
query spaces {
  spaces {
    id
    name
    accountGroup {
      id
      name
    }
    createdDate
    modifiedDate
    modifiedByAccountId
  }
}

```

#### Sample response

``` {#codeblock_uyc_crh_1yb}
{
  "data": {
    "spaces": [
 {
        "id": "97b78685-0e6c-41f7-a484-c1512",
        "name": "test12",
        "accountGroup": {
          "id": "00035d16-600e-43af-a98f-0566272a111d",
          "name": "All Accounts"
        },
        "createdDate": "2022-11-02 18:41:11.0",
        "modifiedDate": null,
        "modifiedByAccountId": null
      },
      {
        "id": "2dcd9964-b85e-42ce-998d-b7c22",
           "name": "Trial1_Space",
        "accountGroup": {
          "id": "3ebe1222-b5fa-4d53-ab2f-fd57c4daf530",
          "name": "Trial1"
        },
        "createdDate": "2022-11-03 08:43:50.0",
        "modifiedDate": "2023-04-14 08:15:00.0",
        "modifiedByAccountId": null
       }
    ]
  }
}

```