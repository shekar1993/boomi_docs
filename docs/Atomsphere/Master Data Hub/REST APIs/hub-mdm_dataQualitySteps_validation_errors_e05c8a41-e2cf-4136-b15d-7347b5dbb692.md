# `<mdm:dataQualitySteps> validation errors` 

<head>
  <meta name="guidename" content="DataHub"/>
  <meta name="context" content="GUID-e05c8a41-e2cf-4136-b15d-7347b5dbb692"/>
</head>


These validation errors for Create Model and Update Model requests are specific to `<mdm:dataQualitySteps>`:

-   `<mdm:step>` has an invalid type attribute value. The valid values are BUSINESS\_RULE and PROCESS. Error message:

    ``` xml
    <mdm:error>Invalid data quality step type</mdm:error>
    ```

-   `<mdm:step>` does not specify all required properties. Sample error message:

    ``` xml
    <mdm:error>Missing required properties for data quality step Validate Email Address</mdm:error>
    ```

-   `<mdm:step>` with a type attribute value of BUSINESS\_RULE does not have a child `<mdm:businessRule>` element or `<mdm:businessRule>` is empty. Sample error message:

    ``` xml
    <mdm:error>Business rule is not defined for data quality step Validate Email Address</mdm:error>
    ```

-   In `<mdm:businessRule>`, an `<mdm:input>` element has an invalid type attribute value. The valid values are Field and Function. Sample error message:

    ``` xml
    <mdm:error>Missing or invalid rule type in business rule data quality step Validate Email Address</mdm:error>
    ```

-   `<mdm:step>` with a type attribute value of PROCESS has a processId attribute with a value identifying a process not authorized for the authenticating user. Sample error message:

    ``` xml
    <mdm:error>User is not authorized to access process having ID 6789abcde-f012-3456-789ab-cdef0123456</mdm:error>
    ```

-   `<mdm:step>` with a type attribute value of PROCESS has a processId attribute with a value that does not identify a process. Error message:

    ``` xml
    <mdm:error>A process is not specified for Boomi Integration process call data quality step</mdm:error>
    ```

-   `<mdm:step>` with a type attribute value of PROCESS does not specify all required properties. Error message:

    ``` xml
    <mdm:error>Missing required property in Integration process data quality step <Step name></mdm:error>
    ```

-   `<mdm:field>` has a *uniqueId* attribute value that is not the uniqueId attribute value of a child `<mdm:field>` element of the `<mdm:fields>` element that is a child of the model’s root element. Sample error message:

    ``` xml
    <mdm:error>Invalid field CITY specified for conditional application of data quality step</mdm:error>
    ```

-   `<mdm:source>` has a *sourceId* attribute value that is not the id attribute value of a child `<mdm:source>` element of the `<mdm:sources>` element that is a child of the model’s root element. Sample error message:

    ``` xml
    <mdm:error>Source IDs are not specified for conditional application of data quality step Validate Email Address</mdm:error>
    ```