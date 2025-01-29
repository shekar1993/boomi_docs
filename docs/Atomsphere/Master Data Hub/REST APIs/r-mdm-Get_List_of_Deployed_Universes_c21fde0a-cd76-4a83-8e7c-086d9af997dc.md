# Get List of Deployed Universes

<head>
  <meta name="guidename" content="DataHub"/>
  <meta name="context" content="GUID-c21fde0a-cd76-4a83-8e7c-086d9af997dc"/>
</head>


The Get List of Deployed Universes operation retrieves the XML representation of all deployed universes \(domain and model configurations\) under the authenticated account.

## Basic authentication

To perform this operation using Basic auth, send an **HTTP GET** request to:

`https://<host>:<port>/mdm/universes`

where

`host` is the host name or IP address of the repository and `port` is the port number of the shared HTTP server as configured in the account’s [Atom Management settings](/docs/Atomsphere/Integration/Integration%20management/c-atm-Atom_Management_b38a3a90-d7f6-4df0-8c00-e75a178dfdfa.md).

## JWT authentication
To perform this operation using JSON Web Token (JWT) authentication, send an **HTTP GET** request to:

`https://<host>:<port>/mdm/universes?repositoryId=<repository Id>`

You must have the following MDM privileges:
- **MDM - View Repositories**


:::note

You can implement requests for this operation in processes using the [HTTP Client connector](/docs/Atomsphere/Integration/Connectors/r-atm-HTTP_Client_connector_d64af80e-febe-4cd2-89ad-e3d0fc53c502.md), as demonstrated by example 1 in the sample process [Hub: Get Deployed Universe Information](https://platform.boomi.com/#build;processLibrary=7a24b7d3-a197-410c-aa98-1a2519896ffa), which you can install in your account from the process library inIntegration.

:::

## Query parameters

**repositoryId** <br></br>
ID of the repository. Case sensitive. Required with JWT authentication only. You can obtain the repository ID from the URL after navigating to the repository in the user interface.

## Responses 

-   200 \(OK\) Sample response body:

    ``` xml
    <universes>
        <universe>
            <id>04ea04cc-9df8-4004-bc00-a21b7dede1bb</id>
            <version>bb072194-2279-42b3-84c1-2f1b2a38c71e</version>
            <name>accounts</name>
            <stats asOf="2014-03-13T16:16:11.557Z" quarantinedRecords="13"
            enddatedRecords="2" activeRecords="804">
                <sourceStats undeliverableChannelDeliveries="0"
                pendingChannelDeliveries="5" pendingBatchRecords="0"
                pendingBatchUpdates="0" sourceCode="WD"/>
                <sourceStats undeliverableChannelDeliveries="0"
                pendingChannelDeliveries="18" pendingBatchRecords="0"
                pendingBatchUpdates="0" sourceCode="NS"/>
                <sourceStats undeliverableChannelDeliveries="0"
                pendingChannelDeliveries="805" pendingBatchRecords="0"
                pendingBatchUpdates="0" sourceCode="SF"/>
            </stats>
            <sources>
                <source code="WD" componentId="77d45402-5e9b-4b90-ab0e-7ae16f20a4f7"  
                   state="STRAPPED" allowContribute="true" default="true">
                    <channel primary="true" state="STRAPPED" updateType="FULL"
                    id="61a3bf80-fb38-4d38-a7ff-cf3090f4927e"/>
                </source>
                <source code="NS" componentId="16fd5463-5c1e-4765-bfab-d90b54c24b82"  
                   state="STRAPPED" allowContribute="true" requireUpdateApproval="true">
                    <channel primary="true" state="STRAPPED" updateType="DIFF"
                    id="486a24c7-205c-4bd7-8a8a-ce2878dad7ef"/>
                    <updateApprovalField>ACCOUNT_NAME</updateApprovalField>
                    <updateApprovalField>WEBSITE</updateApprovalField>
                    <group id="3d243192-f970-4e2b-be3c-21c821ac1271"/>
                </source>
                <source code="SF" componentId="ebd26c4f-6f81-4b62-9729-ea7b45ab1985"  
                   state="STRAPPED" allowContribute="true">
                    <channel primary="true" state="STRAPPED" updateType="DIFF"
                    id="59ddf71e-43b4-4670-b193-b87895472ef4"/>
                </source>
            </sources>
          <layoutid>04ea04cc-9df8-4004-bc00-a21b7dede1bb</layoutid>
          <layout idXPath="/accounts/id">
             <model name="accounts">
                <element titleField="true" enforceIntegrity="false" required="true" type="STRING" prettyName="Account Name" name="account_name" uniqueId="ACCOUNT_NAME"/>
                <element required="false" type="STRING" prettyName="Phone" name="phone" uniqueId="PHONE"/>
                <element required="false" type="STRING" prettyName="Website" name="website" uniqueId="WEBSITE"/>
                <element titleField="false" enforceIntegrity="false" required="false" type="CLOB" prettyName="Story" name="story" uniqueId="STORY"/>
                <element collectionUniqueId="SLOGANS" collectionTag="slogans" collectionPrettyName="Slogans" collectionMatchType="KEY" repeatable="true" titleField="false" enforceIntegrity="false" required="false" type="STRING" prettyName="Slogan" name="slogan" uniqueId="SLOGAN"/>
                <element collectionUniqueId="CONTACTS" collectionTag="contacts" collectionPrettyName="Contacts" collectionMatchKeys="" collectionMatchType="KEY" repeatable="true" titleField="false" enforceIntegrity="false" required="false" type="CONTAINER" prettyName="Contact" name="contact" uniqueId="CONTACT">
                   <element repeatable="false" titleField="false" enforceIntegrity="false" required="true" type="STRING" prettyName="Name" name="name" uniqueId="NAME"/>
                   <element repeatable="false" titleField="false" enforceIntegrity="false" required="false" type="STRING" prettyName="Title" name="title" uniqueId="TITLE"/>
                </element>
             </model>
             <deletedElements>
                <element collectionUniqueId="CONTACTS" collectionTag="contacts" collectionMatchType="KEY" required="false" type="STRING" prettyName="Contact" name="contact" uniqueId="CONTACT"/>
             </deletedElements>
             <xsd><![CDATA[<xs:schema version="1.0" xmlns:xs="http://www.w3.org/2001/XMLSchema"><xs:element name="accounts"><xs:complexType><xs:all><xs:element maxOccurs="1" minOccurs="1" name="id" type="xs:string"/><xs:element maxOccurs="1" minOccurs="0" name="account_name" type="xs:string"/><xs:element maxOccurs="1" minOccurs="0" name="phone" type="xs:string"/><xs:element maxOccurs="1" minOccurs="0" name="website" type="xs:string"/><xs:element maxOccurs="1" minOccurs="0" name="story" type="xs:string"/><xs:element maxOccurs="1" minOccurs="0" name="slogans"><xs:complexType><xs:sequence><xs:element maxOccurs="unbounded" minOccurs="0" name="slogan" type="xs:string"/></xs:sequence></xs:complexType></xs:element><xs:element maxOccurs="1" minOccurs="0" name="contacts"><xs:complexType><xs:sequence><xs:element maxOccurs="unbounded" minOccurs="0" name="contact"><xs:complexType><xs:all><xs:element maxOccurs="1" minOccurs="0" name="name" type="xs:string"/><xs:element maxOccurs="1" minOccurs="0" name="title" type="xs:string"/></xs:all></xs:complexType></xs:element></xs:sequence></xs:complexType></xs:element></xs:all><xs:attribute name="op" type="xs:string"/><xs:attribute name="ts" type="xs:string"/><xs:attribute name="grid" type="xs:string"/><xs:attribute name="enddate" type="xs:string"/></xs:complexType></xs:element></xs:schema>]]></xsd>
             <field prettyName="Id" type="STRING" xpath="/accounts/id"/>
             <field titleField="true" enforceIntegrity="false" required="true" prettyName="Account Name" type="STRING" xpath="/accounts/account_name" uniqueId="ACCOUNT_NAME"/>
             <field titleField="false" enforceIntegrity="false" required="false" prettyName="Phone" type="STRING" xpath="/accounts/phone" uniqueId="PHONE"/>
             <field titleField="false" enforceIntegrity="false" required="false" prettyName="Website" type="STRING" xpath="/accounts/website" uniqueId="WEBSITE"/>
             <field titleField="false" enforceIntegrity="false" required="false" prettyName="Story" type="CLOB" xpath="/accounts/story" uniqueId="STORY"/>
             <field collectionMatchType="KEY" prettyName="Slogans" type="COLLECTION" xpath="/accounts/slogans" uniqueId="SLOGANS"/>
             <field collectionId="SLOGANS" titleField="false" enforceIntegrity="false" required="false" prettyName="Slogan" type="STRING" xpath="/accounts/slogans/slogan" uniqueId="SLOGAN"/>
             <field collectionMatchType="KEY" prettyName="Contacts" type="COLLECTION" xpath="/accounts/contacts" uniqueId="CONTACTS"/>
             <field collectionId="CONTACTS" titleField="false" enforceIntegrity="false" required="true" prettyName="Name" type="STRING" xpath="/accounts/contacts/contact/name" uniqueId="NAME"/>
             <field collectionId="CONTACTS" titleField="false" enforceIntegrity="false" required="false" prettyName="Title" type="STRING" xpath="/accounts/contacts/contact/title" uniqueId="TITLE"/>
          </layout>
            <matchid>04ea04cc-9df8-4004-bc00-a21b7dede1bb</matchid>
            <matchconfig>
                <round>
                    <matchrule xsi:type="GroupingRule" operator="AND"
                    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
                        <nestedExpression xsi:type="ExpressionRule"
                        operator="EQUALS">
                            <input xsi:type="UniqueIdRuleInput"
                            type="INCOMING" uniqueId="ACCOUNT_NAME"/>
                            <input xsi:type="UniqueIdRuleInput"
                            type="EXISTING" uniqueId="ACCOUNT_NAME"/>
                        </nestedExpression>
                    </matchrule>
                </round>
            </matchconfig>
            <dataquality/>
       </universe>
       <universe>
          <id>1d969a54-49e5-4f75-974a-85869280873d</id>
          <version>836e6d2d-47c7-457b-94f1-54ae07492d2f</version>
          <name>employees</name>
          <stats asOf="2015-08-10T15:58:09.034Z" quarantinedRecords="1" enddatedRecords="0" activeRecords="0">
             <sourceStats undeliverableChannelDeliveries="0" pendingChannelDeliveries="0" pendingBatchRecords="0" pendingBatchUpdates="0" sourceCode="s2"/>
             <sourceStats undeliverableChannelDeliveries="0" pendingChannelDeliveries="0" pendingBatchRecords="0" pendingBatchUpdates="0" sourceCode="s1"/>
          </stats>
          <sources>
             <source code="s2" componentId="21e69e35-77a2-4db7-95fb-7214f30138a9"  
                   state="STRAPPED" allowContribute="true">
                <channel primary="true" state="STRAPPED" updateType="DIFF" id="dc875c5c-a83d-42b5-a01a-294613bca68a"/>
             </source>
             <source code="s1" componentId="9d443e21-ec56-4012-818f-9011be640b40"  
                   state="STRAPPED" allowContribute="true" default="true">
                <channel primary="true" state="STRAPPED" updateType="FULL" id="a8ecff8f-071c-43b2-a689-ef9c5fc758da"/>
             </source>
          </sources>
          <layoutid>1d969a54-49e5-4f75-974a-85869280873d</layoutid>
          <layout idXPath="/employees/id">
             <model name="employees">
                <element repeatable="false" titleField="false" enforceIntegrity="false" required="false" type="STRING" prettyName="name" name="name" uniqueId="UQKEY"/>
                <element collectionUniqueId="PHONE_1" collectionTag="phone" collectionPrettyName="phone" collectionMatchType="OCCURRENCE" repeatable="true" titleField="false" enforceIntegrity="false" required="false" type="STRING" prettyName="phone" name="phone" uniqueId="PHONE"/>
                <element collectionUniqueId="EMAIL_1" collectionTag="email" collectionPrettyName="email" collectionMatchKeys="TYPE" collectionMatchType="KEY" repeatable="true" titleField="false" enforceIntegrity="false" required="false" type="CONTAINER" prettyName="email" name="email" uniqueId="EMAIL">
                   <element repeatable="false" titleField="false" enforceIntegrity="false" required="false" type="STRING" prettyName="type" name="type" uniqueId="TYPE"/>
                   <element repeatable="false" titleField="false" enforceIntegrity="false" required="false" type="STRING" prettyName="email" name="email" uniqueId="EMAIL_2"/>
                </element>
                <element collectionUniqueId="ADDR" collectionTag="addr" collectionPrettyName="addr" collectionMatchKeys="TYPE_1" collectionMatchType="KEY" repeatable="true" titleField="false" enforceIntegrity="false" required="false" type="CONTAINER" prettyName="addrs" name="addrs" uniqueId="ADDRS">
                   <element repeatable="false" titleField="false" enforceIntegrity="false" required="true" type="ENUMERATION" prettyName="type" name="type" uniqueId="TYPE_1">
                      <value>home</value>
                      <value>work</value>
                      <value>away</value>
                      <value>unknown</value>
                   </element>
                   <element repeatable="false" titleField="false" enforceIntegrity="false" required="false" type="CONTAINER" prettyName="address" name="address" uniqueId="ADDRESS">
                      <element repeatable="false" titleField="false" enforceIntegrity="false" required="false" type="STRING" prettyName="line" name="line" uniqueId="LINE"/>
                      <element repeatable="false" titleField="false" enforceIntegrity="false" required="false" type="STRING" prettyName="zip" name="zip" uniqueId="ZIP"/>
                   </element>
                </element>
             </model>
             <deletedElements/>
             <xsd><![CDATA[<xs:schema version="1.0" xmlns:xs="http://www.w3.org/2001/XMLSchema"><xs:element name="employees"><xs:complexType><xs:all><xs:element maxOccurs="1" minOccurs="1" name="id" type="xs:string"/><xs:element maxOccurs="1" minOccurs="0" name="name" type="xs:string"/><xs:element maxOccurs="1" minOccurs="0" name="phone"><xs:complexType><xs:sequence><xs:element maxOccurs="unbounded" minOccurs="0" name="phone" type="xs:string"/></xs:sequence></xs:complexType></xs:element><xs:element maxOccurs="1" minOccurs="0" name="email"><xs:complexType><xs:sequence><xs:element maxOccurs="unbounded" minOccurs="0" name="email"><xs:complexType><xs:all><xs:element maxOccurs="1" minOccurs="0" name="type" type="xs:string"/><xs:element maxOccurs="1" minOccurs="0" name="email" type="xs:string"/></xs:all></xs:complexType></xs:element></xs:sequence></xs:complexType></xs:element><xs:element maxOccurs="1" minOccurs="0" name="addr"><xs:complexType><xs:sequence><xs:element maxOccurs="unbounded" minOccurs="0" name="addrs"><xs:complexType><xs:all><xs:element maxOccurs="1" minOccurs="0" name="type" type="xs:string"/><xs:element maxOccurs="1" minOccurs="0" name="address"><xs:complexType><xs:all><xs:element maxOccurs="1" minOccurs="0" name="line" type="xs:string"/><xs:element maxOccurs="1" minOccurs="0" name="zip" type="xs:string"/></xs:all></xs:complexType></xs:element></xs:all></xs:complexType></xs:element></xs:sequence></xs:complexType></xs:element></xs:all><xs:attribute name="op" type="xs:string"/><xs:attribute name="ts" type="xs:string"/><xs:attribute name="grid" type="xs:string"/><xs:attribute name="enddate" type="xs:string"/></xs:complexType></xs:element></xs:schema>]]></xsd>
             <field prettyName="Id" type="STRING" xpath="/employees/id"/>
             <field titleField="false" enforceIntegrity="false" required="false" prettyName="name" type="STRING" xpath="/employees/name" uniqueId="UQKEY"/>
             <field collectionMatchType="OCCURRENCE" prettyName="phone" type="COLLECTION" xpath="/employees/phone" uniqueId="PHONE_1"/>
             <field collectionId="PHONE_1" titleField="false" enforceIntegrity="false" required="false" prettyName="phone" type="STRING" xpath="/employees/phone/phone" uniqueId="PHONE"/>
             <field collectionMatchType="KEY" prettyName="email" type="COLLECTION" xpath="/employees/email" uniqueId="EMAIL_1">
                <matchKey>TYPE</matchKey>
             </field>
             <field collectionId="EMAIL_1" titleField="false" enforceIntegrity="false" required="false" prettyName="type" type="STRING" xpath="/employees/email/email/type" uniqueId="TYPE"/>
             <field collectionId="EMAIL_1" titleField="false" enforceIntegrity="false" required="false" prettyName="email" type="STRING" xpath="/employees/email/email/email" uniqueId="EMAIL_2"/>
             <field collectionMatchType="KEY" prettyName="addr" type="COLLECTION" xpath="/employees/addr" uniqueId="ADDR">
                <matchKey>TYPE_1</matchKey>
             </field>
             <field collectionId="ADDR" titleField="false" enforceIntegrity="false" required="true" prettyName="type" type="ENUMERATION" xpath="/employees/addr/addrs/type" uniqueId="TYPE_1">
                <value>work</value>
                <value>away</value>
                <value>home</value>
                <value>unknown</value>
             </field>
             <field collectionId="ADDR" titleField="false" enforceIntegrity="false" required="false" prettyName="line" type="STRING" xpath="/employees/addr/addrs/address/line" uniqueId="LINE"/>
             <field collectionId="ADDR" titleField="false" enforceIntegrity="false" required="false" prettyName="zip" type="STRING" xpath="/employees/addr/addrs/address/zip" uniqueId="ZIP"/>
          </layout>
          <matchid>1d969a54-49e5-4f75-974a-85869280873d</matchid>
          <matchconfig>
             <round>
                <matchrule xsi:type="GroupingRule" operator="AND" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
                   <nestedExpression xsi:type="ExpressionRule" operator="EQUALS">
                      <input xsi:type="UniqueIdRuleInput" type="INCOMING" uniqueId="UQKEY"/>
                      <input xsi:type="UniqueIdRuleInput" type="EXISTING" uniqueId="UQKEY"/>
                   </nestedExpression>
                </matchrule>
             </round>
          </matchconfig>
           <dataquality>
             <step stepType="CONNECTOR" callFrequency="ALWAYS" connectionId="resource:mdm_loqate" objectTypeId="Verify" operationType="UPDATE" serviceType="loqate" templateName="Verify Address" templateId="verify" name="Verify Address" id="4ab40d19-e306-4670-97cb-93d8a8d03ff8">
                <field value="85" type="INTEGER" id="threshold"/>
                <field value="3" type="INTEGER" id="matchLevelThreshold"/>
                <input uniqueId="ZIP" id="postalcode"/>
                <output uniqueId="ZIP" id="postalcode"/>
             </step>
          </dataquality>
      </universe>
    </universes>
    
    ```
- 401 (Invalid Credentials) JWT auth token is expired. Sample response body:
   ```xml
   <body>
   <h2>HTTP ERROR 401</h2>
      <p>Problem accessing /mdm/universes. Reason:
      <pre>Invalid credentials.</pre>
   </p>
   </body>
   ```
- 403 (You do not have permissions to access this resource) User does not have the required MDM privilege to perform the action. Applicable to JWT auth only. Sample response body:

   ```xml
   <error><message>You do not have permissions to access this resource.</message></error>
   ```