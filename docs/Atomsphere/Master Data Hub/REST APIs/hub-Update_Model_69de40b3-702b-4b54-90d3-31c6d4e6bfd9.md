# Update Model 

<head>
  <meta name="guidename" content="DataHub"/>
  <meta name="context" content="GUID-69de40b3-702b-4b54-90d3-31c6d4e6bfd9"/>
</head>


The Update Model operation requests an update of a specified model in a specified account accessible to the authenticating user.

To perform this operation, send an HTTP PUT request to:

`https://api.boomi.com/mdm/api/rest/v1/<accountID>/models/<modelID>`

:::note

This operation requires the authenticating user to have the **MDM - Edit Models** and the **API Access** privileges.

You can implement requests for this operation in processes using the [HTTP Client connector](/docs/Atomsphere/Integration/Connectors/r-atm-HTTP_Client_connector_d64af80e-febe-4cd2-89ad-e3d0fc53c502.md).

:::

The body of the request must conform with the following structure:

``` xml
<mdm:UpdateModelRequest xmlns:mdm="http://mdm.api.platform.boomi.com/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
</mdm:UpdateModelRequest>
```

where the content of `<mdm:UpdateModelRequest>` defines the desired [XML representation of the model](/docs/Atomsphere/Master%20Data%20Hub/REST%20APIs/hub-Model_XML_representation_69d11108-f18a-4f07-9fc6-4cbd6b468449.md) upon application of the update.

Precede this request with a Get Model request, and copy the content of `<mdm:GetModelResponse>` into `<mdm:UpdateModelRequest>` and then modify as needed.

:::note

You have the option to apply data masking attributes to model fields. To see masked data, the user needs either the **MDM - Reveal Masked Data** privilege or the **Reveal Masked Data** entitlement. Read [Setting up user accounts and access](/docs/Atomsphere/Master%20Data%20Hub/Getting%20started/r-mdm-User_Management_5f47b2da-d5cc-4c88-bdfd-0a255d69323a.md) to learn more. 

When masked fields use the ALL mask type, the masked field value shows as five asteriks to hide the actual character length of the value. Review the [MDM:fields element structure](/docs/Atomsphere/Master%20Data%20Hub/REST%20APIs/hub-mdm_fields_element_structure_6df92ffb-2902-4df7-ae06-2062dfdd8b95.md#data-masking) to learn how to add a data masking attribute to a field's xml request body. 

:::

## Path parameters 

**accountID**  
ID of the account

**modelID**  
ID of the model

## Request body example

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<mdm:UpdateModelRequest xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:mdm="http://mdm.api.platform.boomi.com/">
    <mdm:name>employer</mdm:name>
    <mdm:fields>
        <mdm:field name="employer" repeatable="false" required="false" type="STRING" uniqueId="EMPLOYER" maxLength="100"/>
        <mdm:field name="name" repeatable="false" required="false" type="STRING" uniqueId="NAME" maxLength="100"/>
        <mdm:field name="isEmployed" repeatable="false" required="false" type="BOOLEAN" uniqueId="ISEMPLOYED" maxLength="100" masked="ALL"/>
        <mdm:field name="email" repeatable="false" required="false" type="STRING" uniqueId="EMAIL" maxLength="100" masked="ALL"/>
    <mdm:fieldGroup name="address" repeatable="false" required="false" uniqueId="ADDRESS">
            <mdm:field name="street" repeatable="false" required="false" type="STRING" uniqueId="STREET" masked="PARTIAL MASK" firstMaskCharsCount="2" lastMaskCharsCount ="3"/>
            <mdm:field name="city" repeatable="false" required="false" type="STRING" uniqueId="CITY"/>
            <mdm:field name="country" repeatable="false" required="false" type="STRING" uniqueId="COUNTRY"/>
    </mdm:fieldGroup>
    </mdm:fields>
    <mdm:sources>
        <mdm:source id="SF" type="Both" allowMultipleLinks="false" default="true">
            <mdm:inbound>
                <mdm:createApproval required="false"/>
                <mdm:updateApproval required="false"/>
                <mdm:updateApprovalWithBaseValue>false</mdm:updateApprovalWithBaseValue>
                <mdm:endDateApproval required="false"/>
                <mdm:earlyChangeDetectionEnabled>true</mdm:earlyChangeDetectionEnabled>
            </mdm:inbound>
            <mdm:outbound>
                <mdm:channelUpdatesFields>All</mdm:channelUpdatesFields>
                <mdm:sendCreates>true</mdm:sendCreates>
            </mdm:outbound>
        </mdm:source>
    </mdm:sources>
    <mdm:dataQualitySteps/>
      <mdm:recordTitle>
            <mdm:titleParameters>
            <mdm:parameter uniqueId="EMPLOYER"/>
            <mdm:parameter staticConstant="."/>
            <mdm:parameter uniqueId="NAME"/>
        </mdm:titleParameters>
    </mdm:recordTitle>
    <mdm:matchRules>
        <mdm:matchRule topLevelOperator="AND">
            <mdm:simpleExpression>
                <mdm:fieldUniqueId>EMPLOYER</mdm:fieldUniqueId>
            </mdm:simpleExpression>
        </mdm:matchRule>
    </mdm:matchRules>
    <mdm:tags/>
</mdm:UpdateModelRequest>
```
:::note

Unique ID cannot contain spaces.

:::

## Responses 

-   200 \(OK\) Updated a draft version of the model with a specific ID or, in the case of a published model without a draft version, created one. Sample response body:

    ```xml 
    <mdm:UpdateModelResponse xmlns:mdm="http://mdm.api.platform.boomi.com/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
       <mdm:id>6789abcd-ef01-2345-6789-abcdef012345</mdm:id>
    </mdm:UpdateModelResponse>
    ```

    `<mdm:id>` contains the system ID of the model, which you can use in a Get Model, Publish Model, or Delete Model request.

-   200 \(OK\) The XML model representation in the request is no different than that of the model identified by modelID, and as a result, did not update the model.

    ``` xml
    <mdm:UpdateModelResponse xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:mdm="http://mdm.api.platform.boomi.com/">
       <mdm:message>The model was not updated. No changes to the model were specified in the request.</mdm:message>
    </mdm:UpdateModelResponse>
    ```

-   400 \(Bad Request\) The request body did not contain an `<UpdateModelRequest>` element. Sample response body:

    ``` xml
    <error>
       <message>Message body is invalid: expected UpdateModelRequest</message>
    </error>
    ```

-  400 (Bad Request) A model validation error occurred. Model validation continues until the entire XML representation of the model is processed. The response returns all validation errors. Sample response body:

    ```xml
    <mdm:UpdateModelResponse xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:mdm="http://mdm.api.platform.boomi.com/">
        <mdm:errors>
            <mdm:error>Missing required properties for field alien</mdm:error>
            <mdm:error>Missing field ID in simple expression in match rule</mdm:error>
            <mdm:error>Title field ALIAS does not exist in the Model</mdm:error>
        </mdm:errors>
    </mdm:UpdateModelResponse>
    ```
    The following validation error message indicates an invalid model name:

    ```xml
    <mdm:error>Model creation failed due to a null or invalid model name. The name must have at least 2 characters and no more than 40.</mdm:error>
    ```

    Other model validation errors are specific to individual model components and sub-components. Follow these links to view these error messages and their descriptions: [fields](/docs/Atomsphere/Master%20Data%20Hub/REST%20APIs/hub-mdm_fields_validation_errors_a300c59d-1962-4af0-a29c-ec6380bb54d6.md), [sources](/docs/Atomsphere/Master%20Data%20Hub/REST%20APIs/hub-mdm_sources_validation_errors_be0d72cd-4bc0-414d-96a4-9fcaf8432f1d.md), [data quality steps](/docs/Atomsphere/Master%20Data%20Hub/REST%20APIs/hub-mdm_dataQualitySteps_validation_errors_e05c8a41-e2cf-4136-b15d-7347b5dbb692.md), [record title format](/docs/Atomsphere/Master%20Data%20Hub/REST%20APIs/hub-mdm_recordTitle_validation_errors_3399ae58-d8cf-40e1-a52d-13c7fdde0813.md), [match rules](/docs/Atomsphere/Master%20Data%20Hub/REST%20APIs/hub-mdm_matchRules_validation_errors_98726746-7683-430f-9469-6e23af054fed.md), [tags](/docs/Atomsphere/Master%20Data%20Hub/REST%20APIs/hub-mdm_tags_validation_errors_55f5ca76-1f97-4b9a-80e8-0a6956ecba38.md), and [business rules](/docs/Atomsphere/Master%20Data%20Hub/REST%20APIs/hub-mdm_businessRule_validation_errors_4514a10a-3b30-4b13-aa0b-84de4f13bd2e.md).

- 400 (Bad Request) The authenticating user does not have the **API Access** and **MDM - Edit Models** privileges required for this operation. Sample response body:

    ```xml
    <error>
    <message>The authenticated user does not have access rights to this functionality</message>
    </error>
    ```

- 400 (Bad Request) *modelID* is not a valid GUID and is therefore an invalid component ID. Sample response body:

    ```xml
    <error>
    <message>1 is not a valid component ID.</message>
    </error>
    ```

- 400 (Bad Request) *modelID* does not identify a model in the specified account. Sample response body:

    ```xml
    <error>
    <message>A model with ID 851a6a64-6a88-4916-a5b7-d6a974d54318 does not exist.</message>
    </error>
    ```

- 403 (Forbidden) Authentication failure. Sample response body:

    ```xml
    <UserMessage id="error.user.login" type="error">
    <Data>Incorrect user name and password combination.</Data>
    </UserMessage>
    ```

-  403 (Forbidden) *accountID* does not identify an account accessible to the authenticating user. Sample response body:

    ```xml
    <UserMessage id="error.user.login" type="error">
    <Data>Incorrect user name and password combination.</Data>
    </UserMessage>
    ```

:::note

For information about field validation errors, read [mdm: fields validation errors](/docs/Atomsphere/Master%20Data%20Hub/REST%20APIs/hub-mdm_fields_validation_errors_a300c59d-1962-4af0-a29c-ec6380bb54d6.md)

:::