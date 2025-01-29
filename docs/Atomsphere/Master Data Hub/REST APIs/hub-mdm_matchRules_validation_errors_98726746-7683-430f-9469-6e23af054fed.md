# `<mdm:matchRules> validation errors` 

<head>
  <meta name="guidename" content="DataHub"/>
  <meta name="context" content="GUID-98726746-7683-430f-9469-6e23af054fed"/>
</head>

These validation errors for Create Model and Update Model requests are specific to `<mdm:matchRules>`:

-   `<mdm:matchRule>` is empty. Error message:

    ``` 
    <mdm:error>Match rule is empty</mdm:error>
    ```

-   `<mdm:matchRule>` has an invalid *topLevelOperator* attribute value. The valid values are AND, OR, and NOT. Error message:

    ``` xml
    <mdm:error>Invalid top-level operator in match rule</mdm:error>
    ```

-   `<mdm:firstInput>` or `<mdm:secondInput>` is missing its *inputType* attribute. Error message:

    ``` xml
    <mdm:error>Missing input type in advanced expression in match rule</mdm:error>
    ```

-   `<mdm:firstInput>` or `<mdm:secondInput>` has a child `<mdm:inputType>` element that does not contain either EXISTING, INCOMING, or STATIC. Error message:

    ``` xml
    <mdm:error>Invalid input type in match rule</mdm:error>
    ```

-   `<mdm:simpleExpression>` does not have a child `<mdm:fieldUniqueId>` element. Error message:

    ``` xml
    <mdm:error>Missing field ID in simple expression in match rule</mdm:error>
    ```

-   `<mdm:firstInput>` or `<mdm:secondInput>` does not have a child `<mdm:fieldUniqueId>` element. Error message:

    ``` xml
    <mdm:error>Missing field ID in Advanced expression in match rule</mdm:error>
    ```

-   `<mdm:advancedExpression>` has a child `<mdm:ruleOperator>` element that does not contain either IS\_SIMILAR\_TO, STRICT\_EQUALS, or EQUALS. Error message:

    ``` xml
    <mdm:error>Invalid operator for advanced expression in match rule</mdm:error>
    ```

-   `<mdm:advancedExpression>` has a child `<mdm:similarityAlgorithm>` element that does not contain either Jaro-Winkler, Levenshtein, Bigram, Trigram, or Soundex. Error message:

    ``` xml
    <mdm:error>Invalid similarity algorithm for advanced expression in match rule</mdm:error>
    ```

-   `<mdm:advancedExpression>` does not have a child `<mdm:similarityAlgorithm>` or `<mdm:tolerance>` element, both of which are required because their peer `<mdm:ruleOperator>` element contains IS\_SIMILAR\_TO. Error message:

    ``` xml
    <mdm:error>Missing matching algorithm or tolerance in IS_SIMILAR_TO advanced expression in match rule</mdm:error>
    ```