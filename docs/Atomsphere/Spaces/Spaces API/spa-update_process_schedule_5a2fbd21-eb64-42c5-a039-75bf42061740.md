# Update process schedule 

<head>
  <meta name="guidename" content="Spaces"/>
  <meta name="context" content="GUID-5a2fbd21-eb64-42c5-a039-75bf42061740"/>
</head>


This GraphQL mutation updates the run schedules of a process of an installed integration. This mutation takes the **processSchedules** and **processSchedulesId** as input arguments.

## Code samples

#### Input Syntax

``` {#codeblock_d4f_yzs_zxb}
mutation updateSchedules {
  processSchedulesUpdate(
    processSchedules: "String!"
    processSchedulesId: "String!"
  ) {
    atomIdprocessIdschedule {
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

```

| Field               | Type      | Description                                  | Required/Optional |
|---------------------|-----------|----------------------------------------------|-------------------|
| schedule            | Schedule  | The schedule fields data.                    | Optional          |
| retry               | Retry     | The retry fields.                            | Optional          |
| processSchedulesId  | String    | The Process Schedules                        | Required          |
| processSchedules    | String    | The Process Schedule details                 | Required          |
| processId           | ID        | A unique ID assigned by the system to the process.  | Required  |
| atomId              | ID        | The ID of the Atom on which to run the process.     | Required  |


| Field | Type | Description | Required/Optional |
|:-----:|:----:|:-----------:|:-----------------:|
| Filter | Filter | Filter | Filter |
| years | String | The standard year format. In most cases this is set to an asterisk [*] | Optional |
| months | String | 1 is January and 12 is December. In most cases this is set to an asterisk [*] | Optional |
| minutes | String | 0 is the first minute of the hour — for example, 1:00 A.M. 59 is the last minute of the hour — for example, 1:59 A.M. | Optional |
| hours | String | Uses a 24-hour clock. 0 is midnight and 12 is noon | Optional |
| daysOfWeek | String | 1 is Sunday and 7 is Saturday | Optional |
| daysOfMonth | String | 1 is the first day of the month and 31 is the last day of the month | Optional |



#### Return Syntax

``` {#codeblock_nyx_y1t_zxb}
{
    "data": {
        "processSchedulesUpdate": {
            "atomId": "edd0498d-a039-4406-a2da-3d1bd5a8688b",
            "processId": "652c60f3-1bf8-4597-adcf-3e9fbfcdd974",
            "schedule": [Schedule],
            "retry": {
                "schedule": [Schedule]
                     }
}
    }
}

```

#### Platform API Objects

This GraphQL mutation uses the following platform API object:

|**Platform API Object**|Operation|URL|
|-----------------------|---------|---|
|ProcessSchedules. [See documentation](https://developer.boomi.com/api/platformapi#tag/ProcessSchedules).|UPDATE|[https://api.boomi.com/api/rest/v1/accountId/ProcessSchedules/id/update](https://api.boomi.com/api/rest/v1/accountId/ProcessSchedules/id/update)|

#### Implementation

To update a process schedule, send the mutation request to *platform.boomi.com/graphql*with the following headers:

|Key|Value|
|---|-----|
|SPACE\_GUID|`<The Space guid\>`|
|Authorization|Bearer `<Token\>`|
|Accept|application/json|

#### Sample Request

``` {#codeblock_ngb_gbt_zxb}
mutation updateSchedules {
  processSchedulesUpdate(
    processSchedules: "{"Schedule":[{"minutes":"0-59/15","hours":"8-18","daysOfWeek":"2,3,4,5,6","daysOfMonth":"","months":"","years":""}],"Retry":{"Schedule":[{"minutes":"0-59/15","hours":"8-18","daysOfWeek":"2,3,4,5,6","daysOfMonth":"","months":"","years":""}],"maxRetry":3},"processId":"6e79aead-40d4-422b-9037-4370a86cc2f1","atomId":"8fa55714-8e5e-45f1-b7e1-f57f2000f464","id":"Q1BTOGZhNTU3MTQtOGU1ZS00NWYxLWI3ZTEtZjU3ZjIwMDBmNDY0OjZlNzlhZWFkLTQwZDQtNDIyYi05MDM3LTQzNzBhODZjYzJmMQ"}"
    processSchedulesId: "Q1BTOGZhNTU3MTQtOGU1ZS00NWYxLWI3ZTEtZjU3ZjIwMDBmNDY0OjZlNzlhZWFkLTQwZDQtNDIyYi05MDM3LTQzNzBhODZjYzJmMQ"
  ) {
    atomIdprocessIdschedule {
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

```

#### Sample Response

``` {#codeblock_dyt_3bt_zxb}
{
    "data": {
        "processSchedulesUpdate": {
            "atomId": "edd0498d-a039-4406-a2da-3d1bd5a8688b",
            "processId": "652c60f3-1bf8-4597-adcf-3e9fbfcdd974",
            "schedule": [
                {
                    "minutes": "0-59/3",
                    "hours": "8-18",
                    "daysOfWeek": "1,2,3,5",
                    "daysOfMonth": "*",
                    "months": "*",
                    "years": "*"
                },
                {
                    "minutes": "0-59/1",
                    "hours": "8-18",
                    "daysOfWeek": "1,2,3,4,5",
                    "daysOfMonth": "*",
"months": "*",
                    "years": "*"
                }
            ],
            "retry": {
                "schedule": 
                    {
                        "minutes": "0-59/3",
                        "hours": "8-18",
                        "daysOfWeek": "1,2,3,5",
                        "daysOfMonth": "*",
                        "months": "*",
                        "years": "*"
                    },
                    {
                        "minutes": "0-59/1",
                        "hours": "8-18",
                        "daysOfWeek": "1,2,3,4,5",
                        "daysOfMonth": "*",
                        "months": "*",
                        "years": "*"
                          }              }        }
}
}

```