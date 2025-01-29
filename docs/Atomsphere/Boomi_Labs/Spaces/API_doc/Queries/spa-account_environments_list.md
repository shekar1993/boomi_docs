---
sidebar_position: 6
---
# Get the list of environments for an account 

<head>
  <meta name="guidename" content="Spaces"/>
  <meta name="context" content="GUID-88017155-ef4a-40b8-a6f6-7907671e0f85"/>
</head>


This query retrieves the list of available environments along with their corresponding Integration Pack attachment details for the authorizing account.

## Code samples 

#### Input syntax

``` {#codeblock_lcm_dzh_1yb}
query env {
  environments {
    id
    name
    classification
    integrationPackEnvironmentAttachment {
       environmentId
       id
       integrationPackInstanceId
    }
   atoms {
         id
         name
     }
  }
}

```

| Field          | Type           | Description       | Required/Optional   |
| ----------------- | --------- | ----------- | ------------------- |
| id   | ID | The environment ID | Response-only field |
| name                              | String                             | The environment name                | Response-only field |
| classification                    | Classification                     | The classification of the environment. Input value - PROD|TEST | Response-only field |
| integrationPackEnvironmentAttachment | IntegrationPackEnvironmentAttachment | The Integration Pack attachment data | Response-only field |
| atoms                             | Atom                               | The atoms data.                     | Response-only field |




*IntegrationPackEnvironmentAttachment*

| Field                      | Type   | Description                                                  | Required/Optional |
|----------------------------|--------|--------------------------------------------------------------|-------------------|
| id                         | ID     | The Integration Pack instance environment attachment ID.     | Response-only field |
| integrationPackInstanceId  | String | The Integration Pack instance ID.                            | Response-only field |
| environmentId              | String | The environment ID.                                          | Response-only field |


| Field | Type   | Description         | Required/Optional |
|-------|--------|---------------------|-------------------|
| id    | ID     | The unique Atom ID. | Response-only field  |
| name  | String | The name of the Atom.| Response-only field  |


#### Return syntax

The available environments for the account are returned in the response of a QUERY operation performed on the [Environment object](https://developer.boomi.com/api/platformapi#tag/Environment). Then, to get the Integration Pack attachment status of each of the environments that are available to the account, a QUERY operation is performed on the Integration [Pack Environment Attachment object](https://developer.boomi.com/api/platformapi#tag/IntegrationPackEnvironmentAttachment).

``` {#codeblock_hnr_yzh_1yb}
{
  "data": {
    "environments": [
      {
        "id": "ID",
        "name": "String",
        "classification": "Classification",
        "integrationPackEnvironmentAttachment": [
{
            "environmentId": "String",
            "id": "ID",
            "integrationPackInstanceId": "String"
          }
        ],
        "atoms": [
          {
            "id": "ID",
            "name": "String"
          },
          {
            "id": "ID",
            "name": "String"
          },
          {
            "id": "ID",
            "name": "String"
          }
        ]
      }
    ]
  }
}

```

#### Implementation

To get the available environments for an account, send the query to *platform.boomi.com/graphql*with the following headers:

|Key|Value|
|---|-----|
|SPACE\_GUID|`<The Space guid\>`|
|Authorization|Bearer `<Token\>`|
|Accept|application/json|

#### Sample request

``` {#codeblock_yyd_d13_1yb}
query env {
  environments {
    id
    name
    classification
    integrationPackEnvironmentAttachment {
        environmentId
       id
        integrationPackInstanceId
    }
   atoms {
         id
         name
     }
  }
}

```

#### Sample response

``` {#codeblock_unp_213_1yb}
{
  "data": {
    "environments": [
      {
        "id": "aec9a3ba-2a9a-43da-998d-1466de6eba23",
        "name": "TestEnvPr",
        "classification": "PROD",
        "integrationPackEnvironmentAttachment": [
          {
            "environmentId": "aec9a3ba-2a9a-43da-998d-1466de6eba23",
            "id": "QVRUQUNIX0lQQUNLX0VOVlNXNTBaV2R5WVhScGIyNVFZV05yU1c1emRHRnVZMlV5TnprM01nOmFlYzlhM2JhLTJhOWEtNDNkYS05OThkLTE0NjZkZTZlYmEyMw",
            "integrationPackInstanceId": "SW50ZWdyYXRpb25QYWNrSW5zdGFuY2UyNzk3Mg"
          }
        ],
        "atoms": [
{
            "id": "5578ce86-0963-4f26-ad74-5f510789b022",
            "name": "Test_atom1"
          },
          {
            "id": "b27c0697-a989-4b53-9fee-724abd301f46",
            "name": "Test_atom2"
          },
          {
            "id": "b57535c3-b650-4ef2-9430-171b9bd4c287",
            "name": "Test_atom"
          }
        ]
      }
    ]
  }
}
  

```