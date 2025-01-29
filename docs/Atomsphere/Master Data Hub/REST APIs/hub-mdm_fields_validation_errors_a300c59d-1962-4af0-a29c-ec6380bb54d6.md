# `<mdm:fields> validation errors` 

<head>
  <meta name="guidename" content="DataHub"/>
  <meta name="context" content="GUID-a300c59d-1962-4af0-a29c-ec6380bb54d6"/>
</head>

These validation errors for Create Model and Update Model requests are specific to `<mdm:fields>`:

-   `<mdm:fields>` is empty. Error message:

    ``` xml
    <mdm:error>Field does not exist</mdm:error>
    ```

-   `<mdm:field>` or `<mdm:fieldGroup>` is invalid. Error message:

    ``` xml
    <mdm:error>Invalid field or field group</mdm:error>
    ```

-   `<mdm:field>` or `<mdm:fieldGroup>` has a *uniqueId* attribute value that is the same as that of another such element. Sample error message:

    ``` xml
    <mdm:error>Unique ID CITY is a duplicate</mdm:error>
    ```

-   `<mdm:field>` has a type attribute value that differs from that of the corresponding field in the specified model. Sample error message:

    ``` xml
    <mdm:error>Field CITY type cannot be changed</mdm:error>
    ```
    :::note

    This error is applicable only to the Update Model operation.

    :::

-   `<mdm:field>` does not specify all required properties. Sample error message:

    ``` xml
    <mdm:error>Missing required properties for field city</mdm:error>
    ```

-   `<mdm:field>` has a *maxLength* attribute value that exceeds the system limit of 255 characters. Sample error message:

    ``` xml
    <mdm:error>Field CITY has more than 255 characters</mdm:error>
    ```

-   `<mdm:field>` has *minLength* and *maxLength* attribute values that do not reflect the system minimum length requirement of one character and maximum length requirement of 255 characters. Sample error message:

    ``` xml
    <mdm:error>Field CITY length must be at least one character and less than 256 characters</mdm:error>
    ```

-   `<mdm:field>` has a *uniqueId* attribute value of a length that exceeds the system limit for its type. Sample error message:

    ``` xml
    <mdm:error>Field UNIQUEIDLONGERTHANTHESYSTEMCHARACTERLIMITFORNONREFERENCEFIELDSOF64 has more than 64 characters</mdm:error>
    ```

-   `<mdm:field>` has a repeatable attribute value that differs from that of the corresponding field in the published model. Sample error message:

    ``` xml
    <mdm:error>Field CITY Repeatability cannot be changed because the model is published</mdm:error>
    ```
    :::note

    This error is applicable only to the Update Model operation.

    :::
   
-   `<mdm:field>` with a repeatable attribute value of *true* does not specify all required properties. Sample error message:

    ``` xml
    <mdm:error>Missing required properties for collection field PHONE</mdm:error>
    ```

-   `<mdm:field>` with a repeatable attribute value of true has a collectionUniqueId attribute value that, given the model name length, exceeds the system limit. Sample error message:

    ``` xml
    <mdm:error>Collection field COLLECTIONUNIQUEIDLONGERTHANTHESYSTEMCHARACTERLIMITFOF51FORAMODELWITHA7CHARACTERNAME has more than 51 characters</mdm:error>
    ```

-   `<mdm:fieldGroup>` with a repeatable attribute value of true has duplicate key values in the value of its collectionKeys attribute. Error message:

    ``` xml
    <mdm:error>Collection key is not unique</mdm:error>
    ```

-   `<mdm:field>` represents a collection item field with an invalid identifyBy attribute value. The valid values are KEY and OCCURRENCE. Sample error message:

    ``` xml
    <mdm:error>Invalid matching type for collection field PHONE</mdm:error>
    ```

-   `<mdm:field>` represents an intra-domain reference field with true as its required attribute value. Sample error message:

    ``` xml
    <mdm:error>Reference field MANAGER cannot be Required because it references this model</mdm:error>
    ```

    :::note

    This error is applicable only to the Update Model operation.

    :::

-   `<mdm:field>` represents a reference field with a referenceUniverseId attribute value that differs from that of the referenceUniverseId attribute of the corresponding field in the published model. Sample error message:

    ``` xml
    <mdm:error>Referenced model cannot be updated for reference field ACCOUNT</mdm:error>
    ```
    :::note

    This error is applicable only to the Update Model operation.

    :::
-   `<mdm:field>` represents a reference field for which the referenceUniverseId attribute is either missing or does not have a value. Sample error message:

    ``` xml
    <mdm:error>Reference field ACCOUNT is missing or does not specify a referenced universe</mdm:error>
    ```

-   `<mdm:field>` represents a collection reference field with its incomingReferenceIntegrity attribute value erroneously not set to true. Sample error message:

    ``` xml
    <mdm:error>IncomingReferenceIntegrity must be true when REFERENCE field ACCOUNT is repeatable</mdm:error>
    ```

-   `<mdm:field>` represents a required collection reference field with its outgoingReferenceIntegrity attribute value erroneously not set to true. Sample error message:

    ``` xml
    <mdm:error>OutgoingReferenceIntegrity must be true when REFERENCE field ACCOUNT is required</mdm:error>
    ```

-   `<mdm:fieldGroup>` has a *uniqueId* attribute value that corresponds to that of a field in the specified model. Sample error message:

    ``` xml
    <mdm:error>Field CITY cannot be changed to a field group</mdm:error>
    ```

    :::note

    This error is applicable only to the Update Model operation.

    :::

-   `<mdm:field>` has a *uniqueId* attribute value that corresponds to that of a field group in the specified model. Sample error message:

    ``` xml
    <mdm:error>Field group ADDRESS cannot be changed to a field</mdm:error>
    ```

    :::note

    This error is applicable only to the Update Model operation.

    :::

-   The *collectionKeys* attribute value for `<mdm:fieldGroup>` specifies a key that is not the *uniqueId* attribute value of any child `<mdm:field>` element. Sample error message:

    ``` xml
    <mdm:error>Collection Key SITEURL does not exist in the field group</mdm:error>
    ```

-   The *collectionKeys* attribute for `<mdm:fieldGroup>` is erroneously populated with a meaningless value, given the element’s identifyBy attribute value of OCCURRENCE. Sample error message:

    ``` xml
    <mdm:error>Collection keys for field group PHONE are not applicable to matching by occurrence</mdm:error>
    ```
- The *mask* attribute values PARTIAL MASK and PARTIAL SHOW for `<mdm:field>` are invalid when the field *type* attribute is BOOLEAN. Sample error message: 

    ```xml
    <mdm:error>Select the All or None mask type for the Name field.</mdm:error>
    ```
- The *mask* attribute values PARTIAL MASK and PARTIAL SHOW for `<mdm:field>` are invalid when the field *type* attribute is REFERENCE. Sample error message: 

    ```xml
    <mdm:error>Masking is not available for reference fields.</mdm:error>
    ```
- **firstMaskCharsCount** or **lastMaskCharsCount** is a required attribute when`<mdm:field>` has the *mask* attribute values PARTIAL MASK or PARTIAL SHOW. Sample error message: 

    ```xml
    <mdm:error>Enter a character amount to partially mask field values.</mdm:error>
    ```
- The character length for **firstMaskCharsCount** and **lastMaskCharsCount** cannot be less 0 or greater than 255 characters. Sample error message:

    ```xml
     <mdm:error>Mask character length must be greater than 0 and less than 256 characters for the street field.</mdm:error>
    ```
- **firstMaskCharsCount** and **lastMaskCharsCount** attributes are not allowed with the **Mask** attribute values ALL and NONE. Sample error message:

    ```xml
    <mdm:error>Partial masking is not available for All and None mask types.</mdm:error>
    ```