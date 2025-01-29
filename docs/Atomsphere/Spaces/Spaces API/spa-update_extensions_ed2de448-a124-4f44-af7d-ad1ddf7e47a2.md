# Update extensions 

<head>
  <meta name="guidename" content="Spaces"/>
  <meta name="context" content="GUID-ed2de448-a124-4f44-af7d-ad1ddf7e47a2"/>
</head>


This GraphQL mutation updates extensions of a process. This mutation takes the **ExtensionInput** object as input.

## Code samples 

#### Input Syntax

``` {#codeblock_zfv_pws_zxb}
mutation updateExtension {
  extensionsUpdate(
    input: [
      {
        extensions: "String!"
        envExtensionId: "ID!"
     }
    ]
  )
}

```

|Field|Type|Description|Required/Optional|
|-----|----|-----------|-----------------|
|extensions|String|The process extensions details.|Required|
|envExtensionId|ID|The environment extension ID.|Required|

#### Return Syntax

``` {#codeblock_at5_1xs_zxb}
{
    "data": {
        "extensionsUpdate": [
            "String"
        ]
    }
}

```

#### Platform API Objects

This GraphQL mutation uses the following platform API object:

|**Platform API Object**|Operation|URL|
|-----------------------|---------|---|
|EnvironmentExtensions. [See documentation](https://developer.boomi.com/api/platformapi#tag/EnvironmentExtensions).|**UPDATE \(partial\)**|[https://api.boomi.com/api/rest/v1/accountId/EnvironmentExtensions/id/update](https://api.boomi.com/api/rest/v1/accountId/EnvironmentExtensions/id/update)|



:::note 

You must pass the attribute **“partial”: “true”** in the request body of this mutation call; any properties that are not passed will be set to default/empty. See [Working with the extension object](https://developer.boomi.com/docs/APIs/PlatformAPI/Working_with_the_Environment_Extensions_object) to learn more.

:::

#### Implementation

To update the extension, send the mutation request to *platform.boomi.com/graphql*with the following headers:

|Key|Value|
|---|-----|
|SPACE\_GUID|`<The Space guid\>`|
|Authorization|Bearer `<Token\>`|
|Accept|application/json|

#### Sample Request

``` {#codeblock_lxj_pxs_zxb}
mutation updateExtension {
  extensionsUpdate(
    input: [
      {
        extensions: "{"@type":"EnvironmentExtensions","connections":{"@type":"Connections","connection":[{"@type":"Connection","field":[{"@type":"Field","id":"host","encryptedValueSet":false,"usesEncryption":false,"componentOverride":false,"useDefault":true},{"@type":"Field","id":"user","encryptedValueSet":false,"usesEncryption":false,"componentOverride":false,"useDefault":true},{"@type":"Field","id":"password","encryptedValueSet":false,"usesEncryption":true,"componentOverride":false,"useDefault":true}],"id":"e8d24e66-0fa0-4d3b-9b4f-89246534ea53","name":"FTP Dummy 4"},{"@type":"Connection","field":[{"@type":"Field","id":"username","encryptedValueSet":false,"usesEncryption":false,"componentOverride":false,"useDefault":true},{"@type":"Field","id":"password","encryptedValueSet":false,"usesEncryption":true,"componentOverride":false,"useDefault":true},{"@type":"Field","id":"host","encryptedValueSet":false,"usesEncryption":false,"componentOverride":false,"useDefault":true},{"@type":"Field","id":"port","encryptedValueSet":false,"usesEncryption":false,"componentOverride":false,"useDefault":true},{"@type":"Field","id":"dbname","encryptedValueSet":false,"usesEncryption":false,"componentOverride":false,"useDefault":true}],"id":"d780a396-e144-46e4-a2cf-a2f72fa84314","name":"Dummy_db 4"}]},"processProperties":{"@type":"OverrideProcessProperties","ProcessProperty":[{"@type":"OverrideProcessProperty","ProcessPropertyValue":[{"@type":"ProcessPropertyValue","label":"name","key":"3288ef4f-4ec6-4b49-b4a1-6b711e30ae03","encryptedValueSet":false,"useDefault":true},{"@type":"ProcessPropertyValue","label":"Token","key":"0d6010fd-a386-4084-8efc-07873daba0de","value":"","encryptedValueSet":false,"useDefault":true}],"id":"e5301f1a-b8fe-48fc-8074-c38b14c4d4d7","name":"PP_Dummy 4"}]},"environmentId":"ca2259dd-f394-4ff2-8e93-88596c8aa72a","extensionGroupId":"2ae64310-78ed-41ac-8394-29018b346344","id":"Y2EyMjU5ZGQtZjM5NC00ZmYyLThlOTMtODg1OTZjOGFhNzJhOjJhZTY0MzEwLTc4ZWQtNDFhYy04Mzk0LTI5MDE4YjM0NjM0NA"}"
        envExtensionId: "Y2EyMjU5ZGQtZjM5NC00ZmYyLThlOTMtODg1OTZjOGFhNzJhOjJhZTY0MzEwLTc4ZWQtNDFhYy04Mzk0LTI5MDE4YjM0NjM0NA"
      }
    ]
  )
}



```

#### Sample Response

``` {#codeblock_mnt_qxs_zxb}
{
    "data": {
        "extensionsUpdate": [
"{\"@type\":\"EnvironmentExtensions\",\"connections\":{\"@type\":\"Connections\",\"connection\":[{\"@type\":\"Connection\",\"field\":[{\"@type\":\"Field\",\"id\":\"directory\",\"value\":\"EditFlowDirectory\",\"encryptedValueSet\":false,\"usesEncryption\":false,\"componentOverride\":false,\"useDefault\":false}],\"id\":\"a331857a-89a7-4984-83de-690080c28cff\",\"name\":\"Extension Test BOOMI-194\"},{\"@type\":\"Connection\",\"field\":[{\"@type\":\"Field\",\"id\":\"port\",\"value\":\"port1\",\"encryptedValueSet\":false,\"usesEncryption\":false,\"componentOverride\":false,\"useDefault\":false},{\"@type\":\"Field\",\"id\":\"host\",\"value\":\"EditFlowHost\",\"encryptedValueSet\":false,\"usesEncryption\":false,\"componentOverride\":false,\"useDefault\":false},{\"@type\":\"Field\",\"id\":\"connectionMode\",\"value\":\"EditFlowConnection\",\"encryptedValueSet\":false,\"usesEncryption\":false,\"componentOverride\":false,\"useDefault\":false},{\"@type\":\"Field\",\"id\":\"user\",\"value\":\"EditFlowUser\",\"encryptedValueSet\":false,\"usesEncryption\":false,\"componentOverride\":false,\"useDefault\":false},{\"@type\":\"Field\",\"id\":\"password\",\"encryptedValueSet\":true,\"usesEncryption\":true,\"componentOverride\":false,\"useDefault\":false}],\"id\":\"88181efe-f8a2-433d-ad91-17b97b57c03f\",\"name\":\"New FTP Connection\"},{\"@type\":\"Connection\",\"field\":[{\"@type\":\"Field\",\"id\":\"url\",\"value\":\"EditFlowURL\",\"encryptedValueSet\":false,\"usesEncryption\":false,\"componentOverride\":false,\"useDefault\":false},{\"@type\":\"Field\",\"id\":\"connectTimeout\",\"value\":\"403\",\"encryptedValueSet\":false,\"usesEncryption\":false,\"componentOverride\":false,\"useDefault\":false},{\"@type\":\"Field\",\"id\":\"readTimeout\",\"value\":\"100\",\"encryptedValueSet\":false,\"usesEncryption\":false,\"componentOverride\":false,\"useDefault\":false},{\"@type\":\"Field\",\"id\":\"useBasicAuth\",\"value\":\"EditFlowAuth\",\"encryptedValueSet\":false,\"usesEncryption\":false,\"componentOverride\":false,\"useDefault\":false},{\"@type\":\"Field\",\"id\":\"user\",\"value\":\"EditFlowUser\",\"encryptedValueSet\":false,\"usesEncryption\":false,\"componentOverride\":false,\"useDefault\":false},{\"@type\":\"Field\",\"id\":\"password\",\"encryptedValueSet\":true,\"usesEncryption\":true,\"componentOverride\":false,\"useDefault\":false}],\"id\":\"d322aa77-46c7-472e-bbe2-07b17ecf6beb\",\"name\":\"New HTTP Client Connection\"}]},\"processProperties\":{\"@type\":\"OverrideProcessProperties\",\"ProcessProperty\":[{\"@type\":\"OverrideProcessProperty\",\"ProcessPropertyValue\":[{\"@type\":\"ProcessPropertyValue\",\"label\":\"String\",\"key\":\"68dad3cb-9744-4701-984e-dc92c7481de5\",\"value\":\"\",\"encryptedValueSet\":false,\"useDefault\":true},{\"@type\":\"ProcessPropertyValue\",\"label\":\"Password\",\"key\":\"af61be8f-b580-4917-90c1-1faf06630522\",\"value\":\"[[HIDDEN]]\",\"encryptedValueSet\":true,\"useDefault\":false}],\"id\":\"4e34fc8d-cc7f-4629-ab05-bfe66f0499c4\",\"name\":\"Test Some Props Yo\"}]},\"environmentId\":\"0e8be959-54dd-47d8-8f77-547b7cdd407f\",\"extensionGroupId\":\"decc9f7c-028a-4647-b248-9a713ba84963\",\"id\":\"MGU4YmU5NTktNTRkZC00N2Q4LThmNzctNTQ3YjdjZGQ0MDdmOmRlY2M5ZjdjLTAyOGEtNDY0Ny1iMjQ4LTlhNzEzYmE4NDk2Mw\"}"
        ]
    }
}

```