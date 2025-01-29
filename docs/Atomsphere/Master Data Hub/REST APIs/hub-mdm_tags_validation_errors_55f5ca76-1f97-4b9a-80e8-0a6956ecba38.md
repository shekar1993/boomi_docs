# `<mdm:tags> validation errors` 

<head>
  <meta name="guidename" content="DataHub"/>
  <meta name="context" content="GUID-55f5ca76-1f97-4b9a-80e8-0a6956ecba38"/>
</head>


This validation error for Create Model and Update Model requests is specific to `<mdm:tags>`:

-   `<mdm:tag>` does not have a name attribute value. Error message:

    ``` xml
    <mdm:error>Tag name is empty</mdm:error>
    ```