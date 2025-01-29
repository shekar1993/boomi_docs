# Get execution history for a process 

<head>
  <meta name="guidename" content="Spaces"/>
  <meta name="context" content="GUID-722d8d0b-e2a1-40c0-ae29-6e6601d3c228"/>
</head>


This GraphQL query retrieves the execution history for a specific process which includes information about a process run, including the run date, status, process information, Atom information, and error messages along with other fields. In the Spaces User Interface the execution history is found on the **Process Reporting Page**.

## Code samples 

This query takes the **executionHistoryInput** object as input.

#### Input Syntax

``` {#codeblock_mqc_grh_1yb}
query executionHistory {
 executionHistory(input:{
       processId:"ID!",
       executionTime: "DateTime!",
       status: "ExecutionHistoryStatus!"
     })
     {
      executionId
      originalExecutionId
      account
      executionTime
      status
      atomName
      atomId
      executionDuration 
      message
      }
}

```

|Field|Type|Description|Required/Optional|
|-----|----|-----------|-----------------|
|processID|ID|The ID of the run process.|Required.|
|executionTime|DateTime|The start date and time of this run. **Format**:*yyyy-MM-dd'T'HH:mm:ss'Z'*. For example, 2023-01-31T15:32:00Z|Required.|
|status|ExecutionHistoryStatus|The execution history status. **Possible values** **are**: ABORTED \| COMPLETE \| COMPLETE\_WARN \| DISCARDED \| ERROR \| INPROCESS \| STARTED|Required.|

#### Return Syntax

``` {#codeblock_fvm_rrh_1yb}
{
    "data": {
        "executionHistory": [
            {
                "executionId": "String",
                "executionTime": "DateTime",
                "status": "ExecutionHistoryStatus",
                "executionType": "String",
                "processName": "String",
                "inboundDocumentCount": int,
                "inboundErrorDocumentCount": int,
                "outboundDocumentCount": int,
                "executionDuration": [String],
                "message": "String",
                "inboundDocumentSize": [String],
                "outboundDocumentSize": [String]
            }
        ]
    }
}

```

#### Platform API Objects

This GraphQL mutation uses the following platform API object:


| Platform API Object | Operation | URL |
|-------------------|-------------------|-----------------|
| ExecutionRecord. [See documentation.](https://developer.boomi.com/api/platformapi#tag/ExecutionRecord) | POST | https://api.boomi.com/api/rest/v1/accountId/ExecutionRecord/query POST: [accountId]/ExecutionRecord |



#### Implementation

To get the execution history of a process, send the query to *platform.boomi.com/graphql*with the following headers:

|Key|Value|
|---|-----|
|SPACE\_GUID|`<The Space guid\>`|
|Authorization|Bearer `<Token\>`|
|Accept|application/json|

#### Sample Request

Where the processId is the ID of the run process and executionTime and status are start date and the status of the run provided by the initial GET response returned by the [Execution Record Object](https://developer.boomi.com/api/platformapi#tag/ExecutionRecord).

``` {#codeblock_zjz_ssh_1yb}
query executionHistory {
 executionHistory(input:{
       processId:"dbb98f81-6914-43a2-b03f-594506940dd5",
       executionTime: "2016-01-31T15:32:00Z",
       status: ERROR
     })
     {
      executionId
      originalExecutionId
      account
      executionTime
      status
      atomName
      atomId
      executionDuration 
      message
    }
}

```

#### Sample Response

``` {#codeblock_xbq_xsh_1yb}
{
    "data": {
        "executionHistory": [
            {
                "executionId": "execution-73bca62e-7bf4-4c22-bcd9-26b3ec224f37-2023.04.23",
                "executionTime": "2023-04-23T18:30:00Z",
                "status": "ERROR",
                "executionType": "exec_sched",
                "processName": "PaginationIpack14 - Thu Apr 20 2023 -Process",
                "inboundDocumentCount": 1,
                "inboundErrorDocumentCount": 1,
                "outboundDocumentCount": 0,
                "executionDuration": [
                    "Long",
                    "5816"
                ],
                "message": "No data produced from map 'mapTest', please check source profile and make sure it matches source data.",
                "inboundDocumentSize": [
                    "Long",
                    "0"
                ],
                "outboundDocumentSize": [
                    "Long",
                    "0"
                ]
            }
        ]
    }
}

```