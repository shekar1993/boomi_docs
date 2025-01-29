# `<mdm:sources> validation errors` 

<head>
  <meta name="guidename" content="DataHub"/>
  <meta name="context" content="GUID-be0d72cd-4bc0-414d-96a4-9fcaf8432f1d"/>
</head>


These validation errors for Create Model and Update Model requests are specific to `<mdm:sources>`:

-   `<mdm:source>` has an invalid type attribute value. The valid values are *Accept*, *Contribute*, and *Both*. Error message:

    ``` xml
    <mdm:error>Invalid source type</mdm:error>
    ```

-   `<mdm:source>` has a type attribute value that is not a valid URL. Error message:

    ``` xml
    <mdm:error>Invalid entity ID URL</mdm:error>
    ```

-   `<mdm:source>` does not specify all required properties. Error message:

    ``` xml
    <mdm:error>Missing required properties for source</mdm:error>
    ```

-   `<mdm:source>` has an id attribute value that is the same as that of another such element. Sample error message:

    ``` xml
    <mdm:error>Source NS is a duplicate</mdm:error>
    ```

-   `<mdm:sourceRankings>` is erroneously present in `<mdm:sources>` because `<mdm:sources>` has only one child `<mdm:source>` element. Error message:

    ``` xml
    <mdm:error>Source ranking is not applicable to a single source</mdm:error>
    ```

-   `<mdm:sourceRanking>` has a missing or empty child `<mdm:uniqueId>` element. Sample error message:

    ``` xml
    <mdm:error>Missing CITY in source ranking</mdm:error>
    ```

-   `<mdm:sourceRanking>` has a child `<mdm:sourceId>` element containing an ID that does not correspond to the id attribute value of any `<mdm:source>` element. Sample error message:

    ``` xml
    <mdm:error>Source with ID XX does not exist</mdm:error>
    ```

-   `<mdm:sourceRanking>` has multiple child `<mdm:sourceId>` elements with the same rank attribute value. Sample error message:

    ``` xml
    <mdm:error>Multiple sources have rank value 1</mdm:error>
    ```

-   `<mdm:sourceRanking>` has multiple child `<mdm:sourceId>` elements with the same element content. Sample error message:

    ``` xml
    <mdm:error>Source NS is ranked multiple times for field</mdm:error>
    ```

-   `<mdm:sourceRanking>` does not have child `<mdm:sourceId>` elements for each child `<mdm:source>` element of `<mdm:sources>`. Sample error message:

    ``` xml
    <mdm:error>All sources are not ranked for field CITY</mdm:error>
    ```

-   Multiple `<mdm:source>` elements have a default attribute value of *true*. Error message:

    ``` xml
    <mdm:error>Multiple default sources are designated</mdm:error>
    ```

-   `<mdm:source>` has a default attribute value of *true* and a type attribute value of Accept. Error message:

    ``` xml
    <mdm:error>Source of type Accept should not be the default source</mdm:error>
    ```

-   `<mdm:source>` with a type attribute value of *Accept* erroneously has its child `<mdm:inbound>` element populated. Error message:

    ``` xml
    <mdm:error>Inbound configuration does not apply to source type Accept</mdm:error>
    ```

-   `<mdm:updateApprovalFields>` is erroneeously populated because `<mdm:updateApproval>` has a child `<mdm:businessRule>` element. Error message:

    ``` xml
    <mdm:error>Individual field approval is not applicable because approval is required for all updates</mdm:error>
    ```

-   `<mdm:excludedFields>` has a child `<mdm:excludedField>` element with a *uniqueID* attribute value that is not the uniqueId attribute value of any `<mdm:field>` element. Sample error message:

    ``` xml
    <mdm:error>Excluded field CITY does not exist in the model</mdm:error>
    ```

-   `<mdm:updateApprovalFields>` has a child `<mdm:updateApprovalField>` element with a *uniqueId* attribute value that is not the *uniqueId* attribute value of any `<mdm:field>` element. Sample error message:

    ``` xml
    <mdm:error>Update field CITY does not exist in the model</mdm:error>
    ```

-   `<mdm:source>` with a type attribute value of Contribute erroneously has its child `<mdm:outbound>` element populated. Error message:

    ``` xml
    <mdm:error>Outbound configuration does not apply to source type Contribute</mdm:error>
    ```

-   `<mdm:channelUpdatesFields>` does not contain either All or Creates. Error message:

    ``` xml
    <mdm:error>Invalid channel update scope</mdm:error>
    ```

-   `<mdm:sendFilter>` has an invalid scope attribute value. The valid values are All and Creates. Sample error message:

    ``` xml
    <mdm:error>Invalid channel update filter scope for source ID NS</mdm:error>
    ```

-   `<mdm:tag>` has a name attribute value that is not the name attribute value of a child `<mdm:tag>` element of the `<mdm:tags>` element that is a child of the model’s root element. Error message:

    ``` xml
    <mdm:error>A tag specified for restricting propagation of update requests does not exist in the model</mdm:error>
    ```

-   `<mdm:tags>` is present but it either does not have any child `<mdm:tag>` elements or any such `<mdm:tag>` elements are empty. Error message:

    ``` xml
    <mdm:error>Tags are not selected for restricting propagation of update requests</mdm:error>
    ```