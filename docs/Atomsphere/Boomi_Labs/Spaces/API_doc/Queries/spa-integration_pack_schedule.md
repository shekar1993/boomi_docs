---
sidebar_position: 5
---
# Get integration pack instance processes with their schedule 

<head>
  <meta name="guidename" content="Spaces"/>
  <meta name="context" content="GUID-4fb51eef-14d6-4166-be6f-5087c5e3d42b"/>
</head>


This GraphQL query retrieves the processes of an Integration Pack instance along with their run schedules. This query takes the **integrationPackInstanceId** object as input.

## Code samples 

#### Input syntax

``` {#codeblock_kz2_pwh_1yb}
query process {
integrationPackInstanceProcesses(    integrationPackInstanceId:"ID"
) {
   id
   name
   integrationPack {
   integrationPackId
     integrationPackInstanceId
   }
   processSchedules {
     id
     processId
     atomId
     envId
     schedule {
       minutes
       hours
       daysOfWeek
       daysOfMonth
       months
       years
     }
     retry {
       schedule {
        minutes
        hours
        daysOfWeek
        daysOfMonth
        months
        years
       }
       maxRetry
     }
   }
 }
}
```

|Field|Type|Description|Required/Optional|
|-----|----|-----------|-----------------|
|integrationPackInstanceId|ID|The Integration Pack instance ID.|Required|
|id|ID|The process ID.|Optional|
|name|String|The process name.|Optional|
|integrationPack|IntegrationPack|The Integration Pack data.|Optional|
|processSchedules|ProcessSchedules|The process Schedules data.|Optional|

*integrationPack*

| Field                     | Type   | Description                 | Required/Optional |
|---------------------------|--------|-----------------------------|-------------------|
| integrationPackId         | ID     | The Integration Pack ID.    | Optional          |
| integrationPackInstanceId | String | The Integration Instance ID.| Optional          |


*processSchedules*

|Field|Type|Description|Required/Optional|
|-----|----|-----------|-----------------|
|id|ID|The process schedule ID.|Optional|
|processId|ID|The process ID.|Optional|
|atomId|IS|The atom ID.|Optional|
|schedule|Schedule|The schedule fields data.|Optional|
|retry|Retry|The retry fields|Optional|

*Schedule*

|Field|Type|Description|Required/Optional|
|-----|----|-----------|-----------------|
|minutes|String|The scheduled minutes.|Optional|
|hours|String|The scheduled hours.|Optional|
|daysOfWeek|String|The scheduled days Of Week.|Optional|
|daysOfMonth|String|The scheduled days Of Month.|Optional|
|months|String|The scheduled months.|Optional|
|years|String|The scheduled years.|Optional|

*Retry*

|Field|Type|Description|Required/Optional|
|-----|----|-----------|-----------------|
|schedule|Schedule|The schedule fields.|Optional|
|maxRetry|Int|The maximum number of retries allowed for this request.|Optional|

#### Return syntax

``` {#codeblock_epq_fyh_1yb}
{
  "data": {
    "integrationPackInstanceProcesses": [
      {
        "id": "ID",
        "name": "String",
        "integrationPack": [
          {
            "integrationPackId": "ID",
            "integrationPackInstanceId": "ID"
          }
        ],
        "processSchedules": {
          "id": "ID",
          "processId": "ID",
          "atomId": "ID",
          "envId": "ID",
          "schedule": [],
          "retry": {
            "schedule": [Schedule],
            "maxRetry": Int
          }
        }
      }
]
  }
}
```

#### Platform API objects

This GraphQL query uses the following Boomi Enterprise Platform API objects to retrieve the data:

| Platform API Object          | Operation | URL                                                          |
|------------------------------|-----------|--------------------------------------------------------------|
| ProcessScheduleStatus        | QUERY     | https://api.boomi.com/api/rest/v1/accountId/ProcessScheduleStatus/query   |
| ProcessSchedules             | QUERY     | https://api.boomi.com/api/rest/v1/accountId/ProcessSchedules/query       |
| Process                      | QUERY     | https://api.boomi.com/api/rest/v1/accountId/Process/query                  |
| EnvironmentAtomAttachment    | QUERY     | https://api.boomi.com/api/rest/v1/accountId/EnvironmentAtomAttachment/query |


#### Implementation

To get the processes of an Integration Pack instance along with their run schedules, send the query to *platform.boomi.com/graphql*with the following headers:

|Key|Value|
|---|-----|
|SPACE_GUID|`<The Space guid\>`|
|Authorization|Bearer`<Token\>`|
|Accept|application/json|

#### Sample request

Use [Get all Integration Pack instances for an account ](./spa-integration_pack_instances.md) query to get the `id` of the installed Integration Pack Instance.

``` {#codeblock_qtd_tyh_1yb}
query process {
integrationPackInstanceProcesses(    integrationPackInstanceId:"ID"
) {
   id
   name
   integrationPack {
     integrationPackId
     integrationPackInstanceId
   }
   processSchedules {
     id
     processId
     atomId
     envId
     schedule {
       minutes
       hours
       daysOfWeek
       daysOfMonth
       months
       years
     }
     retry {
       schedule {
        minutes
        hours
        daysOfWeek
        daysOfMonth
        months
        years
       }
       maxRetry
     }
   }
 }
}
```

#### Sample response

``` {#codeblock_btw_zyh_1yb}
{
  "data": {
    "integrationPackInstanceProcesses": 
      {
        "id": "70d36151-4070-4a92-8d00-d7c832e4caf5",
        "name": "test1",
        "integrationPack": [
          {
            "integrationPackId": "2e659fc6-2202-4da5-9f88-ceda49303885",
            "integrationPackInstanceId": "SW50ZWdyYXRpb25QYWNrSW5zdGFuY2UyNzk3Mg"
          }
        ],
        "processSchedules": {
          "id": "Q1BTNGJjYjgzMTItMmY0NS00ZjI5LWFiMmQtZmEyMDU5OGMwYTc2OjcwZDM2MTUxLTQwNzAtNGE5Mi04ZDAwLWQ3YzgzMmU0Y2FmNQ",
          "processId": "70d36151-4070-4a92-8d00-d7c832e4caf5",
          "atomId": "4bcb8312-2f45-4f29-ab2d-fa20598c0a76",
          "envId": "4c9d031e-408b-4903-a44e-5a4219e62b25",
          "schedule": [],
          "retry": {
            "schedule": [],
            "maxRetry": 5
          }
        }
      },
      {
        "id": "3260ddbc-1675-4a18-9a91-ae57f3f1acaa",
        "name": "test2",
        "integrationPack": [
          {
            "integrationPackId": 
        "2e659fc6-2202-4da5-9f88-ceda49303885",
            "integrationPackInstanceId": "SW50ZWdyYXRpb25QYWNrSW5zdGFuY2UyNzk3Mg"
          }
        ],
        "processSchedules": {
          "id": "Q1BTNGJjYjgzMTItMmY0NS00ZjI5LWFiMmQtZmEyMDU5OGMwYTc2OjMyNjBkZGJjLTE2NzUtNGExOC05YTkxLWFlNTdmM2YxYWNhYQ",
          "processId": "3260ddbc-1675-4a18-9a91-ae57f3f1acaa",
          "atomId": "4bcb8312-2f45-4f29-ab2d-fa20598c0a76",
          "envId": "4c9d031e-408b-4903-a44e-5a4219e62b25",
          "schedule": [],
          "retry": {
            "schedule": [],
            "maxRetry": 5
          }
        }
      }
  }
}
```