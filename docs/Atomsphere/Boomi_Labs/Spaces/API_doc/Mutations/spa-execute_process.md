---
sidebar_position: 9
---
# Execute process 

<head>
  <meta name="guidename" content="Spaces"/>
  <meta name="context" content="GUID-15a7de51-0cc6-4351-b761-4dd114cea2e7"/>
</head>

This GraphQL mutation executes a process of an Install Integration Pack. This mutation takes the **ProcessExecuteInput** object as input.

## Code samples 

#### Input syntax

``` {#codeblock_sqt_zys_zxb}
mutation executeProcess {
  processExecute(
    input: {
      atomId: "Sting!"
      processId: "String!"
    }
  )
}

```

|Field|Type|Description|Required/Optional|
|-----|----|-----------|-----------------|
|atomId|String|The ID of the Atom on which to run the process.|Required|
|processId|String|The ID of the process to run.|Required|

#### Return syntax

``` {#codeblock_pnr_hzs_zxb}
{
    "data": {
        "processExecute": "String"
    }
}

```

#### Platform API objects

This GraphQL mutation uses the following platform API object:

|**Platform API Object**|Operation|URL|
|-----------------------|---------|---|
|ExecutionRequest. [See documentation](https://developer.boomi.com/api/platformapi#tag/ExecutionRequest).|CREATE|[https://api.boomi.com/api/rest/v1/%3CaccountID%3EExecutionRequest](https://api.boomi.com/api/rest/v1/%3CaccountID%3EExecutionRequest)|

#### Implementation

To execute a process, send the mutation request to *platformboomi.com/graphql* with the following headers:

|Key|Value|
|---|-----|
|SPACE\_GUID|`<The Space guid\>`|
|Authorization|Bearer `<Token\>`|
|Accept|application/json|

#### Sample request

-   You can find the atomId by navigating to Manage \> Atom Management on the Integration user interface, and viewing the Atom Information panel for a selected Atom.
-   You can find the processId by navigating to Manage \> Atom Management on the Integration user interface, and viewing the Atom Information panel for a selected Atom.

``` {#codeblock_bbx_szs_zxb}
mutation executeProcess {
  processExecute(
    input: {
      atomId: "8fa55714-8e5e-45f1-xxxx-f57f2000f464"
      processId: "6e79aead-40d4-xxxx-9037-4370a86cc2f1"
    }
  )
}

```

#### Sample response

``` {#codeblock_pfl_5zs_zxb}
{
    "data": {
        "processExecute": "{\"@type\":\"ExecutionRequest\",\"processId\":\"6e79aead-40d4-xxxx-9037-4370a86cc2f1\",\"atomId\":\"8fa55714-8e5e-45f1-xxxx-f57f2000f464\",\"requestId\":\"executionrecord-2802cb0d-8237-4176-85cd-41abe669cdfc\",\"recordUrl\":\"https://platform.boomi.com/api/rest/v1/<account_ID>/ExecutionRecord/async/executionrecord-2802cb0d-8237-4176-85cd-41abe669cdfc\"}"
    }
}


```