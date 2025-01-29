# Delete a space 

<head>
  <meta name="guidename" content="Spaces"/>
  <meta name="context" content="GUID-0ec8a0a8-0494-4a87-98cd-e6d0a533cbba"/>
</head>

This mutation deletes a Space that is created by the account authorizing this request. It takes the **id** \(the Space id\) as input.

## Code samples 

#### Input syntax

``` {#codeblock_b1p_pps_zxb}
mutation space{
    spaceDelete(id: "ID!")
}

```

|Field|Type|Description|Required/Optional|
|-----|----|-----------|-----------------|
|id|ID|The unique id of the Space that you want to delete.|Required|

#### Return syntax

``` {#codeblock_j2b_xps_zxb}
{
  "data": {
    "spaceDelete": Boolean
  }
}

```

#### Implentation

To delete a Space, send a mutation request to *platform.boomi.com/graphql*with the following headers:

|Key|Value|
|---|-----|
|Authorization|Bearer `<Token\>`|
|Accept|application/json|

#### JSON Request

``` {#codeblock_pwg_2qs_zxb}
mutation space{
    spaceDelete(id: "2da77d1f-bbd4-4066-xxxx-e15fc
")
}

```

#### JSON Response

``` {#codeblock_dnc_gqs_zxb}
{
  "data": {
    "spaceDelete": true
  }
}

```