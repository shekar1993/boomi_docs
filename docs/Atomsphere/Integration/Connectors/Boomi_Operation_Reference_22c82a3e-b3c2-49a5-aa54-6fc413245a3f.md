# `<Enter the connector name\>` 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-22c82a3e-b3c2-49a5-aa54-6fc413245a3f"/>
</head>


Enter a short description for the operations. Replace this text with 1-2 sentences \(maximum 50 words\) describing the purpose of the operations. This displays in the output of the topic, as hover text over a link, as Internet search results, and when searching the User Guide in help.boomi.com. For an example, go to help.boomi.com and search for "SAP JCo V2 operation" and "SFTP V2 operation".

Create a separate operation component for each action/object combination that your integration requires.

The `<connector name\>` operations use `<add the supported format: XML, JSON, etc.\>` format and support the following actions:

-   Action Name — description.
-   Action Name — description.
-   Action Name — description.

## Options tab 

Select a connector action, then use the **Import Wizard** to select the object to integrate. When you configure an action, the following fields appear on the **Options** tab.



Field Name
:   Description of the field functionality. If you reference a user interface item \(an element appearing in the Boomi Integration user interface\), make sure and tag it with the **uicontrol** tag. You can copy/paste the **uicontrol** tag and update as necessary.

    -   Unordered list 1
    -   Unordered list 2

Field Name 2
:   Description of the field functionality.

Field Name 3
:   Description of the field functionality.

## `<Action name\> `

Create a separate section for each action your connector supports. You may need to create a section for Get, Upsert, Select, Delete, Query, Listen, etc. In each section, describe the operation functionality and include any appropriate information. If certain permissions are necessary as a prerequisite so the operation works, include that information. If the connector follows, for example, limits for chunked uploads, include that information. If the connector follows limitations for certain objects when querying, include that information. For an example, go to help.boomi.com and search for the "SAP JCo V2 operation" and "SFTP V2 operation" topics. There are many other examples.


:::note

Add your note.

:::

-   Unordered list item 1
-   Unordered list item 2
-   Unordered list item 3

## Code Block samples 

Sample code blocks are provided here for your convenience.

```
{
  "displayName": "Test Word Tab",
    "teamsApp@odata.bind" : "https://graph.microsoft.com/v1.0/appCatalogs/teamsApps/com.microsoft.teamspace.tab.file.staticviewer.word",
"configuration": {
"entityId": "205FA10A-E5F6-4694-85DA-FA08233146F1",
"contentUrl": "https://acpcloud2218outlook.sharepoint.com/sites/TestSite/Shared%20Documents/Document.docx",
"websiteUrl": "",
"removeUrl": ""
}
}
```

```
{
  "requests": [
 {
      "id": "1",
     "method": "GET",
    "url": "/teams/9845ec1b-f50b-44ad-967b-1e5a988c38f9"
},
    {
"id": "2",
 "method": "GET",
"url": "/teams/953aa6bd-5d6d-4182-a591-2a6b14ee74ca"
        }
  ]
}    

```

```

{
  "members@odata.bind":[ "https://graph.microsoft.com/v1.0/directoryObjects/{id}",
"https://graph.microsoft.com/v1.0/directoryObjects/{id}"        ]
}
```

``` {#codeblock_olq_zbs_lpb}
<?xml version="1.0" encoding="UTF-8"?>
<SelectRequest>
    <FileKey>Example-Object.csv</FileKey>
    <Expression>Select * from S3Object</Expression>
    <CompressionType>GZIP</CompressionType>
    <ObjectFormat>CSV</ObjectFormat>
    <CSV>
    <FieldDelimiter>,</FieldDelimiter>
    <QuoteFields>ALWAYS</QuoteFields>
    <FileHeaderInfo>IGNORE</FileHeaderInfo>
    <Comments>#</Comments>
    <QuoteCharacter>"</QuoteCharacter>
    </CSV>
</SelectRequest>
```

``` {#codeblock_axf_jbs_lpb .code-java}
<?xml version="1.0"?>
<GenericConnectorDescriptor
    browsingType="cloud"
    requireConnectionForBrowse="false">
    <description>This is an example connector</description>
    <field id="url" label="URL" type="string">
        <helpText>The base url for the Example service</helpText>
        <defaultValue>http://www.example.com/service</defaultValue>
    </field>
    <field id="username" label="User" type="string">
        <helpText>The User Name for logging into the Example service</helpText>
    </field>
    <field id="password" label="Password" type="password">
        <helpText>The Password for logging into the Example service</helpText>
    </field>
    <field id="connectionHeaders" label="Connection Headers" type="customproperties">
    <helpText>The restricted keys are "username" and "password" and these are case insensitive.</helpText>
    <customPropertiesConfiguration>
    <blacklistedKey>username</blacklistedKey>
    <blacklistedKey>password</blacklistedKey>
    </customPropertiesConfiguration>
    </field>

    <operation types="GET|UPDATE|CREATE"/>
    <operation types="QUERY" allowFieldSelection="true">
        <queryFilter grouping="any" sorting="one" >
            <operator id="EQUALS" label="Equal To"/>
            <operator id="NOT_EQUALS" label="Not Equal To"/>
            <operator id="NOT_EQUALS_OR_NULL" label="Not Equal To or Null"/>
            <operator id="GREATER_THAN" label="Greater Than"/>
            <operator id="LESS_THAN" label="Less Than"/>
            <operator id="GREATER_THAN_OR_EQUALS" label="Greater Than Or Equal"/>
            <operator id="LESS_THAN_OR_EQUALS" label="Less Than Or Equal"/>
            <operator id="LIKE" label="Like"/>
            <operator id="NOT_LIKE" label="Not Like"/>
            <operator id="NOT_LIKE_OR_NULL" label="Not Like Or Null"/>
            <operator id="IS_NULL" label="Is Null" numArguments="0"/>
            <operator id="IS_NOT_NULL" label="Is Not Null" numArguments="0"/>
            <operator id="IN_LIST" label="In">
                <helpText>Comma separated list of values</helpText>
            </operator>
            <operator id="NOT_IN_LIST" label="Not In">
                <helpText>Comma separated list of values</helpText>
            </operator>
            <operator id="RANGE" label="Between" numArguments="2">
                <supportedType type="number" />
            </operator>
            <sortOrder id="asc" label="Ascending">
                <supportedType type="string" />
                <supportedType type="number" />
            </sortOrder>
            <sortOrder id="desc" label="Descending">
                <supportedType type="string" />
                <supportedType type="number" />
            </sortOrder>
            <sortOrder id="ascNullFirst" label="Ascending - Nulls sorted first">
                <supportedType type="string" />
            </sortOrder>
            <sortOrder id="ascNullLast" label="Ascending - Nulls sorted first">
                <supportedType type="string" />
            </sortOrder>
            <sortOrder id="descNullFirst" label="Descending - Nulls sorted last">
                <supportedType type="string" />
            </sortOrder>
            <sortOrder id="descNullLast" label="Descending - Nulls sorted last">
                <supportedType type="string" />
            </sortOrder>
        </queryFilter>
    </operation>
</GenericConnectorDescriptor>
```

## Table sample 

|Task|Description|Reference|
|----|-----------|---------|
| |Confirm that: -   The connector does not already exist.
-   You have a valid Boomi license \(or free Trial edition\) and can log into the platform.
-   You entered your custom connector publisher information and accepted the SDK usage agreement terms.

|Review the [list of existing connectors](/docs/Atomsphere/Integration/Connectors/c-atm-Connectors_bb305b35-0f13-4937-a918-f85dbbe1b27b.md).[Enter your custom connector publisher information](https://developer.boomi.com/docs/Connectors/ConnectorDevelopmentReference/Entering_connector_publisher_information).

|
|Development skills|Ensure you are proficient in Java. The Connector SDK is written in Java, so Java development experience is required.|Not applicable.|
|API service|Ensure you: -   Learn about the API and target service you want your custom connector to connect to, its framework, and common use cases. Have a thorough knowledge and understanding of the supporting API documentation, an understanding of the core concepts supported by the API, and how to work with the API's methods, actions, data types, etc.


:::note

Having a clear understanding of the third-party application's inputs and outputs can potentially prevent a significant amount of development effort and rework.

:::

-   Are well-versed with HTTP, the principals of REST, and have a thorough understanding of how to authenticate with the API service.

**Important:** When building a connector for an API service that is SOAP-based, use the SOAP Framework which enables easy integration with any SOAP web service. See the [Using the SOAP Framework to build a custom connector](Using_the_SOAP_Framework_to_build_a_custom_connector_bc320216-a892-4704-8d5d-138a4c5bf46b.md#) topic for more information. Also of interest may be the [SOAP Framework cookbook](c-atm-SOAP_Framework_cookbook_318a50d7-b539-4298-87d1-d5ae0de5e066.md#), providing recipes to manipulate XML data and metadata, handle SOAP faults, handle operations other than EXECUTE, and handle authentication scenarios \(HTTP Basic authentication, WS-Security TEXT/DIGEST support, login tokens\).

|Refer to the documentation of the third-party application.|
|Atoms and Java|Optionally upgrade all of your Atoms to Java 8. You can develop a private connector using Java 7 or Java 8. However, if you use Java 8, be sure that all of your Atoms are running Java 8.

**Important:** If you develop a custom connector for public release, use Java 7. Otherwise, the connector will not work for users with Java 7 Atoms. encourages users to run Atoms on Java 8, but still supports Java 7 runtimes.

Optionally upgrade all of your Atoms to Java 11. You can develop a private connector using Java 7 or Java 8. However, if you use Java 8 or 11, be sure that all of your Atoms are running Java 8 or 11 respectively.

**Important:** If you develop a custom connector for public release, use Java 7. Otherwise, the connector will not work for users with Java 7 Atoms. encourages users to run Atoms on Java 8 or 11, but still supports Java 7 runtimes.

|[Upgrading an Atom or Molecule to Java 8](int-Upgrading_an_Atom_or_Molecule_to_Java_11_d46de877-3973-4353-95f8-d3e17f435b0e.md)|
|Best practices|Learn about the best practices for custom connector development. By doing so, you can optimize your custom connector's functionality, performance, and security.|[Best practices for custom connector development](int-Custom_connector_design_considerations_and_best_practices_99466f21-3ae0-44b0-95ba-810140bf7b0f.md#)|
|Requirements for public release|Learn about the requirements to follow and ensure your connector is ready to be submitted for approval by to be made public in .|[Custom connector requirements for public release \(Boomi Technology Partners\)](https://developer.boomi.com/docs/Connectors/ConnectorDevelopmentReference/Connector_requirements_for_public_release)|
|Code samples|The Connector SDK artifacts available from the public repository contain a `connector-sdk-samples-sources` JAR file, containing source code for some connector samples you can reference when building a custom connector. There are sample JSON Operation classes, Listener classes, and more.|[Connector SDK artifacts](./int-Connector_sdk_artifacts_72c6deee-1376-4f0b-b1db-371077460df2.mdx)|