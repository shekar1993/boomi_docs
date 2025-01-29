# `<mdm:recordTitle> validation errors` 

<head>
  <meta name="guidename" content="DataHub"/>
  <meta name="context" content="GUID-3399ae58-d8cf-40e1-a52d-13c7fdde0813"/>
</head>


This validation error for Create Model and Update Model requests is specific to `<mdm:recordTitle>`:

-   `<mdm:titleParameters>` has a child `<mdm:parameter>` with a *uniqueID* attribute value that is not the *uniqueID* attribute value of any `<mdm:field>` element. Sample error message:

    ``` xml
    <mdm:error>Title field CITY does not exist in the model</mdm:error>
    ```