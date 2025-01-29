# `<mdm:businessRule> validation errors` 

<head>
  <meta name="guidename" content="DataHub"/>
  <meta name="context" content="GUID-4514a10a-3b30-4b13-aa0b-84de4f13bd2e"/>
</head>


These validation errors for Create Model and Update Model requests are specific to `<mdm:businessRule>` regardless of the element’s context:

-   `<mdm:businessRule>` has an empty name attribute. Error message:

    ``` xml
    <mdm:error>Business rule name attribute cannot be empty but the attribute can be omitted</mdm:error>
    ```

-   `<mdm:businessRule>` does not have a child `<mdm:inputs>` element or the element is empty. Error message:

    ``` xml
    <mdm:error>No inputs are defined for business rule</mdm:error>
    ```

-   `<mdm:inputs>` does not have any child `<mdm:input>` elements. Error message:

    ``` xml
    <mdm:error>Missing input fields in business rule</mdm:error>
    ```

-   `<mdm:input>` element has an invalid type attribute value. The valid values are *Field* and *Function*. Sample error message:

    ``` xml
    <mdm:error>Missing or invalid rule type in business rule data quality step Validate Email Address</mdm:error>
    ```

    :::note
    
    This validation message is erroneously specific to a data quality step.

    :::

-   `<mdm:input>` does not have a key attribute or the attribute has a null value. Error message:

    ``` xml
    <mdm:error>Missing input key value in business rule</mdm:error>
    ```

-   `<mdm:input>` has the same key attribute value as that of a peer element. Sample error message:

    ``` xml
    <mdm:error>Business rule input key 1 is a duplicate</mdm:error>
    ```

-   `<mdm:input>` has a non-numeric key attribute value. Sample error message:

    ``` xml
    <mdm:error>Business rule input key XXX must be numeric</mdm:error>
    ```

-   `<mdm:function>` is either missing its type attribute or the attribute has an invalid value. Error message:

    ``` xml
    <mdm:error>Empty or invalid function type in business rule</mdm:error>
    ```

-   `<mdm:function>` does not specify all required properties. Error message:

    ``` xml
    <mdm:error>Missing input function properties in business rule</mdm:error>
    ```

-   The `<mdm:function>` element representing the named function does not have all required inputs. Sample error message:

    ``` xml
    <mdm:error>Function StringConcat one or more inputs are not defined in business rule</mdm:error>
    ```

-   `<mdm:function>` has an empty or invalid child `<mdm:input>` element. Error message:

    ``` xml
    <mdm:error>Empty or invalid function input in business rule</mdm:error>
    ```

-   `<mdm:input>` to a function has an empty or invalid name attribute. Error message:

    ``` xml
    <mdm:error>Empty or invalid input name in business rule</mdm:error>
    ```

-   `<mdm:function>` with a type attribute value of *StringSplit* either does not have a child `<mdm:outputs>` element or `<mdm:outputs>` does not have any child `<mdm:output>` elements. Error message:

    ``` xml
    <mdm:error>No output fields are defined for function of type *StringSplit* in business rule</mdm:error>
    ```

-   `<mdm:condition>` does not specify all required properties. Sample error message:

    ``` xml
    <mdm:error>Missing required properties in condition Validate Email Address in business rule</mdm:error>
    ```

-   `<mdm:condition>` has a child `<mdm:firstInput>` or `<mdm:secondInput>` element with an invalid type attribute value. The valid values are *Field*, *Function*, and *Static*. Error message:

    ``` xml
    <mdm:error>Invalid input type for condition in business rule</mdm:error>
    ```

-   `<mdm:firstInput>` or `<mdm:secondInput>` element of type *Field* or *Function* has a key attribute whose value is not that of any of the `<mdm:inputs>` element’s child `<mdm:input>` elements. Sample error message:

    ``` xml
    <mdm:error>Input key 1 in condition does not exist</mdm:error>
    ```

-   `<mdm:function>` with a type attribute value of *StringSplit* has an invalid *splitBy* attribute value. The valid values are *Delimiter* and *FixedLength*. Error message:

    ``` xml
    <mdm:error>Invalid split type for condition in business rule</mdm:error>
    ```

-   `<mdm:conditions>` has an invalid topLevelOperator attribute value. The valid values are AND and OR. Error message:

    ``` xml
    <mdm:error>Invalid top-level operator for condition in business rule</mdm:error>
    ```

-   `<mdm:condition>` has an invalid operator attribute value. The valid values are:

    -   CONTAINS

    -   EQUALS

    -   GREATER\_THAN

    -   GREATER\_THAN\_EQUAL

    -   IS\_NULL

    -   IS\_NOT\_NULL

    -   LESS\_THAN

    -   LESS\_THAN\_EQUAL

    -   NOT\_CONTAINS

    -   NOT\_EQUALS

    -   STARTS\_WITH

    Error message:

    ``` xml
    <mdm:error>Invalid condition operator in business rule</mdm:error>
    ```

-   `<mdm:conditionGroup>` has an operator attribute with an invalid value. The valid values are AND and OR. Error message:

    ``` xml
    <mdm:error>Invalid condition group operator for function in business rule</mdm:error>
    ```