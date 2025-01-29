# Update an extended mapper

<head>
  <meta name="guidename" content="Spaces"/>
  <meta name="context" content="GUID-0b796563-8a1b-4eeb-9eab-af66e1aaf3f0"/>
</head>

This GraphQL mutation updates an extensible data map extension of a process of an Installed Integration Pack.

## Code samples 

Data map extensions allow you to override or augment default field mappings and profile elements for a given pair of object definitions.see the [Data map extensions](/docs/Atomsphere/Integration/Process%20building/c-atm-Data_Map_Extensions_126d6c7d-71d1-4839-b1e7-586147f826d1.md) documentation.

This mutation takes the **ExtensionInput** object as input.

#### Input Syntax

``` {#codeblock_vfd_pbt_zxb}
mutation extendedMappersUpdate{
    extendedMappersUpdate(input :[
        {
            extensions:"String!",
            envExtensionId:"String!"
        }
    ])
}

```

|Field|Type|Description|Required/Optional|
|-----|----|-----------|-----------------|
|extensions|String|The extensions object.|Required|
|envExtensionId|ID|The environment map extension ID.|Required|

#### Return syntax

``` {#codeblock_o2y_wbv_1yb}
“data”: {
        “extendedMappersUpdate”: []
                        }

```

#### Platform API Objects

This GraphQL mutation uses the following platform API object:

|Platform API Objects|Operation|URL|
|--------------------|---------|---|
|EnvironmentMapExtension. [See documentation](/docs/Atomsphere/Integration/AtomSphere%20API/r-atm-Environment_Map_Extension_object_dfe25a7a-eb29-4a04-8937-46ac7d0118ba.mdx).|UPDATE|[https://api.boomi.com/api/rest/v1/accountId/EnvironmentMapExtension/id/update](https://api.boomi.com/api/rest/v1/accountId/EnvironmentMapExtension/id/update)|

#### Implementation

To update an extension mapper, send the mutation request to *platform.boomi.com/graphql* with the following headers:

|Key|Value|
|---|-----|
|SPACE\_GUID|`<The Space guid\>`|
|Authorization|Bearer `<Token\>`|
|Accept|application/json|

#### Sample Request

``` {#codeblock_uck_fct_zxb}
mutation extendedMappersUpdate{
    extendedMappersUpdate(input :[
        {
            extensions:{\“@type\“:\“EnvironmentMapExtension\“,\“Map\“:{\“@type\“:\“MapExtension\“,\“SourceProfile\“:{\“@type\“:\“MapExtensionsProfile\“,\“Node\“:[{\“@type\“:\“MapExtensionsNode\“,\“name\“:\“Employee\“,\“xpath\“:\“\”},{\“@type\“:\“MapExtensionsNode\“,\“name\“:\“Name\“,\“xpath\“:\“/Name\“},{\“@type\“:\“MapExtensionsNode\“,\“name\“:\“Department\“,\“xpath\“:\“/Department\“},{\“@type\“:\“MapExtensionsNode\“,\“name\“:\“DOJ\“,\“xpath\“:\“/DOJ\“},{\“@type\“:\“MapExtensionsNode\“,\“name\“:\“Manager\“,\“xpath\“:\“/Manager\“}],\“componentId\“:\“1b48c905-f455-41cd-a902-8a3e00c685bf\“},\“DestinationProfile\“:{\“@type\“:\“MapExtensionsProfile\“,\“Node\“:[{\“@type\“:\“MapExtensionsNode\“,\“name\“:\“\”,\“xpath\“:\“\”},{\“@type\“:\“MapExtensionsNode\“,\“name\“:\“Record\“,\“xpath\“:\“/Record\“},{\“@type\“:\“MapExtensionsNode\“,\“name\“:\“Elements\“,\“xpath\“:\“/Record/Elements\“},{\“@type\“:\“MapExtensionsNode\“,\“name\“:\“FirstName\“,\“xpath\“:\“/Record/Elements/FirstName\“},{\“@type\“:\“MapExtensionsNode\“,\“name\“:\“Department\“,\“xpath\“:\“/Record/Elements/Department\“},{\“@type\“:\“MapExtensionsNode\“,\“name\“:\“JoiningDate\“,\“xpath\“:\“/Record/Elements/JoiningDate\“},{\“@type\“:\“MapExtensionsNode\“,\“name\“:\“ReportTo\“,\“xpath\“:\“/Record/Elements/ReportTo\“}],\“componentId\“:\“fca2d59d-f272-40f6-9cfd-ecbfc86b29ee\“},\“ExtendedFunctions\“:{\“@type\“:\“MapExtensionsFunctions\“},\“ExtendedMappings\“:{\“@type\“:\“MapExtensionsExtendedMappings\“,\“Mapping\“:[{\“@type\“:\“MapExtensionsMapping\“,\“toXPath\“:\“/Record/Elements/FirstName\“,\“fromXPath\“:\“/Name\“},{\“@type\“:\“MapExtensionsMapping\“,\“toXPath\“:\“/Record/Elements/Department\“,\“fromXPath\“:\“/Department\“},{\“@type\“:\“MapExtensionsMapping\“,\“toXPath\“:\“/Record/Elements/JoiningDate\“,\“fromXPath\“:\“/DOJ\“},{\“@type\“:\“MapExtensionsMapping\“,\“toXPath\“:\“/Record/Elements/ReportTo\“,\“fromXPath\“:\“/Manager\“}]},\“SourceProfileExtensions\“:{\“@type\“:\“MapExtensionExtendProfile\“},\“DestinationProfileExtensions\“:{\“@type\“:\“MapExtensionExtendProfile\“}},\“environmentId\“:\“c031e719-7763-472d-a8d8-8b88b4223f7b\“,\“extensionGroupId\“:\“1f393937-c621-4741-80d3-3b75c734ed66\“,\“id\“:\“YzAzMWU3MTktNzc2My00NzJkLWE4ZDgtOGI4OGI0MjIzZjdiOjFmMzkzOTM3LWM2MjEtNDc0MS04MGQzLTNiNzVjNzM0ZWQ2NjoxZjM5MzkzNy1jNjIxLTQ3NDEtODBkMy0zYjc1YzczNGVkNjY6MTY4ODAyMDQ2OTMzNDE2ODgwMjA0ODc0NTg\“,\“processId\“:\“1f393937-c621-4741-80d3-3b75c734ed66\“,\“mapId\“:\“16880204693341688020487458\“,\“name\“:\“EmployeeMapper - EmployeeFF\“}”,
            envExtensionId:"Y2EyMjU5ZGQtZjM5NC00ZmYyLThlOTMtODg1OTZjOGFhNzJhOjZkNzcyYWY3LTUxNzgtNGEyZC1hODVhLTQ0ZWYwYzZlNmVlZDo2ZDc3MmFmNy01MTc4LTRhMmQtYTg1YS00NGVmMGM2ZTZlZWQ6MTY2MzI2MzMyODk3MjE2NjMyNjU0NzI0OTA"
        }
    ])
}

```

#### Sample Response

``` {#codeblock_m4t_hct_zxb}
{
  “data”: {
    “extendedMappersUpdate”: [
      “{\“@type\“:\“EnvironmentMapExtension\“,\“Map\“:{\“@type\“:\“MapExtension\“,\“SourceProfile\“:{\“@type\“:\“MapExtensionsProfile\“,\“Node\“:[{\“@type\“:\“MapExtensionsNode\“,\“name\“:\“Employee\“,\“xpath\“:\“\”},{\“@type\“:\“MapExtensionsNode\“,\“name\“:\“Name\“,\“xpath\“:\“/Name\“},{\“@type\“:\“MapExtensionsNode\“,\“name\“:\“Department\“,\“xpath\“:\“/Department\“},{\“@type\“:\“MapExtensionsNode\“,\“name\“:\“DOJ\“,\“xpath\“:\“/DOJ\“},{\“@type\“:\“MapExtensionsNode\“,\“name\“:\“Manager\“,\“xpath\“:\“/Manager\“}],\“componentId\“:\“1b48c905-f455-41cd-a902-8a3e00c685bf\“},\“DestinationProfile\“:{\“@type\“:\“MapExtensionsProfile\“,\“Node\“:[{\“@type\“:\“MapExtensionsNode\“,\“name\“:\“\”,\“xpath\“:\“\”},{\“@type\“:\“MapExtensionsNode\“,\“name\“:\“Record\“,\“xpath\“:\“/Record\“},{\“@type\“:\“MapExtensionsNode\“,\“name\“:\“Elements\“,\“xpath\“:\“/Record/Elements\“},{\“@type\“:\“MapExtensionsNode\“,\“name\“:\“FirstName\“,\“xpath\“:\“/Record/Elements/FirstName\“},{\“@type\“:\“MapExtensionsNode\“,\“name\“:\“Department\“,\“xpath\“:\“/Record/Elements/Department\“},{\“@type\“:\“MapExtensionsNode\“,\“name\“:\“JoiningDate\“,\“xpath\“:\“/Record/Elements/JoiningDate\“},{\“@type\“:\“MapExtensionsNode\“,\“name\“:\“ReportTo\“,\“xpath\“:\“/Record/Elements/ReportTo\“}],\“componentId\“:\“fca2d59d-f272-40f6-9cfd-ecbfc86b29ee\“},\“ExtendedFunctions\“:{\“@type\“:\“MapExtensionsFunctions\“},\“ExtendedMappings\“:{\“@type\“:\“MapExtensionsExtendedMappings\“,\“Mapping\“:[{\“@type\“:\“MapExtensionsMapping\“,\“toXPath\“:\“/Record/Elements/FirstName\“,\“fromXPath\“:\“/Name\“},{\“@type\“:\“MapExtensionsMapping\“,\“toXPath\“:\“/Record/Elements/Department\“,\“fromXPath\“:\“/Department\“},{\“@type\“:\“MapExtensionsMapping\“,\“toXPath\“:\“/Record/Elements/JoiningDate\“,\“fromXPath\“:\“/DOJ\“},{\“@type\“:\“MapExtensionsMapping\“,\“toXPath\“:\“/Record/Elements/ReportTo\“,\“fromXPath\“:\“/Manager\“}]},\“SourceProfileExtensions\“:{\“@type\“:\“MapExtensionExtendProfile\“},\“DestinationProfileExtensions\“:{\“@type\“:\“MapExtensionExtendProfile\“}},\“environmentId\“:\“c031e719-7763-472d-a8d8-8b88b4223f7b\“,\“extensionGroupId\“:\“1f393937-c621-4741-80d3-3b75c734ed66\“,\“id\“:\“YzAzMWU3MTktNzc2My00NzJkLWE4ZDgtOGI4OGI0MjIzZjdiOjFmMzkzOTM3LWM2MjEtNDc0MS04MGQzLTNiNzVjNzM0ZWQ2NjoxZjM5MzkzNy1jNjIxLTQ3NDEtODBkMy0zYjc1YzczNGVkNjY6MTY4ODAyMDQ2OTMzNDE2ODgwMjA0ODc0NTg\“,\“processId\“:\“1f393937-c621-4741-80d3-3b75c734ed66\“,\“mapId\“:\“16880204693341688020487458\“,\“name\“:\“EmployeeMapper - EmployeeFF\“}”
    ]
  }
}

```