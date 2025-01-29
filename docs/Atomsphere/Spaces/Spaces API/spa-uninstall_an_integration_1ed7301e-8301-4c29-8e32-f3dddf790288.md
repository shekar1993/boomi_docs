# Uninstall an Integration

<head>
  <meta name="guidename" content="Spaces"/>
  <meta name="context" content="GUID-1ed7301e-8301-4c29-8e32-f3dddf790288"/>
</head>


This mutation uninstalls an Integration from the account that is authorizing the request. This mutation takes the **IpackInstanceId** as input.

## Code samples 
#### Input syntax

``` {#codeblock_atq_sts_zxb}
mutation unInstallIpack {
 integrationPackInstanceUninstall(id: "ID!")
}

```

|Field|Type|Description|Required/Optional|
|-----|----|-----------|-----------------|
|id|ID|A unique ID assigned by the system to the instance of the integration.|Required|

#### Return syntax

``` {#codeblock_stl_yts_zxb}
{
    "data": {
        "integrationPackInstanceUninstall": "ID"
    }
}

```

#### Platform API Objects

|Platform API Object|Operation|URL|
|-------------------|---------|---|
|[IntegrationPackInstance](https://developer.boomi.com/api/platformapi#tag/IntegrationPackInstance). See documentation.|**QUERY**|[https://api.boomi.com/api/rest/v1/accountId/IntegrationPackInstance/id](https://api.boomi.com/api/rest/v1/accountId/IntegrationPackInstance/id)|

#### Implementation

To uninstall an Integration Instance, send the mutation request to *platform.boomi.com/graphql* with following headers:

|Key|Value|
|---|-----|
|Authorization|Bearer `<Token\>`|
|Accept|application/json|

Here, the id is the ID of the Integration Pack Instance that is initially returned in the response of the QUERY operation performed on the [Integration Pack Instance object](https://developer.boomi.com/api/platformapi#tag/IntegrationPackInstance).

#### JSON request

``` {#codeblock_t1t_g5s_zxb}
mutation unInstallIpack {
 integrationPackInstanceUninstall(id: "SW50ZWdyYXRpb25QYWNrSW5zdGFuY2UyOTUyMg")
}

```

#### Sample Response

``` {#codeblock_zh2_j5s_zxb}
{
    "data": {
        "integrationPackInstanceUninstall": "SW50ZWdyYXRpb25QYWNrSW5zdGFuY2UyOTUyMg"
    }
}

```