# Trading Partner Component object 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-47c8b9fd-a0db-46a9-9a18-c309f46d376e"/>
</head>

The Trading Partner Component object allows users to retrieve, query, create, update, and delete Trading Partner components through the AtomSphere API.

:::note

Due to the large number of fields and options for this object, recommends that you use the AtomSphere and Partner API connectors to create Trading Partner components through the API. For detailed information about the fields, see the [Trading Partner component](r-atm-Trading_Partner_Components_96eb4e6c-f5a6-4583-98a8-690236d288f9.md) information or the help provided for the Trading Partner component within the user interface.

:::

## Structure 

This structure example is for a Trading Partner `classification="tradingpartner"`. For an operation on a My Company Trading Partner, set the classification to `classification="mycompany"` , replace any `<AS2SendSettings>` tags with corresponding `<AS2ReceiveSettings>` tags, and if the tag `<PartnerDocumentTypes` is not applicable, omit the tag.

The root element’s deleted attribute is unique to deleted Trading Partner components. When the attribute is present, its value is true.

The organizationId field value is the ID of an Organization component, which is reusable across multiple Trading Partners, API Services, and API Proxies. The Organization component structure is identical to that of the ContactInformation fields in the Trading Partner component.

The valid values for the CommunicationSetting field are component \(Communication Channel component\), custom \(custom settings\), and default \(default settings for the My Company trading partner with which this trading partner is paired on a **Start** or **Trading Partner** step\). If the **CommunicationSetting** field value is component, the CommunicationChannel field value specifies the Communication Channel component ID. A CommunicationSetting field value of custom or default corresponds to a null CommunicationChannel field value.

The AS2 message option field maxDocumentCount is type int\(eger\), and the field’s range of valid values is 1–20. The value is meaningful only if the multipleAttachments field value is true.

:::note

Although the description field is in the object, operations does not support the field. It ignores the field if it is present in a QUERY, CREATE, or UPDATE request.

:::

```xml
<TradingPartnerComponent xmlns:ns1="http://api.platform.boomi.com/" classification="" standard="" identifier="" componentName="" componentId="" organizationId="" folderName="" folderId="" deleted="">
   <ContactInfo>
      <contactName/>
      <address1/>
      <address2/>
      <city/>
      <state/>
      <postalcode/>
      <country/>
      <email/>
      <phone/>
      <fax/>
   </ContactInfo>
   <PartnerInfo>
   <!--See specific structure examples for EDIFACT, HL7, RosettaNet, Tradacoms, and X12 standards. The related sample should be pasted here.-->
   </PartnerInfo>
   <PartnerCommunication>
      <AS2CommunicationOptions CommunicationSetting="">
         <SharedCommunicationChannel componentId="">         
         <AS2SendSettings useDefaultSettings="" authenticationType="">
            <url/>
            <sslCertificate componentId="" alias="">
               <certificate/>
            </sslCertificate>
            <clientSSLCertificate componentId="" alias="" passPhrase="">
               <certificate/>
            </clientSSLCertificate>
            <AuthSettings user="" password=""/> 
            <verifyHostname/>
         </AS2SendSettings>
         <AS2SendOptions>
            <AS2PartnerInfo>
               <as2Id/>
               <signingPublicCertificate componentId="" alias="">
                  <certificate/>
               </signingPublicCertificate>
               <encryptionPublicCertificate componentId="" alias="">
                  <certificate/>
               </encryptionPublicCertificate>
               <mdnSignaturePublicCertificate componentId="" alias="">
                  <certificate/>
               </mdnSignaturePublicCertificate>
               <clientSSLCertificate componentId="" alias="">
                  <certificate/>
               </clientSSLCertificate>
               <basicAuthEnabled/>
               <rejectDuplicateMessages/>
               <messagesToCheckForDuplicates/>
               <ListenAuthSettings user="" password=""/>
               <ListenAttachmentSettings multipleAttachments="" attachmentCache="">
                  <attachmentContentType></attachmentContentType>
               </ListenAttachmentSettings>
            </AS2PartnerInfo>
            <AS2MessageOptions encryptionAlgorithm="" dataContentType="" signingDigestAlg="" signed="" encrypted="" compressed="" multipleAttachments="" maxDocumentCount="">
               <subject/>
            </AS2MessageOptions>
            <AS2MDNOptions requestMDN="" synchronous="" signed="" useSSL="" mdnDigestAlg=""/>
         </AS2SendOptions>
         <AS2ReceiveOptions>
            <AS2MyCompanyInfo>
               <as2Id></as2Id>
               <enabledLegacySMIME></enabledLegacySMIME>
            </AS2MyCompanyInfo>
         </AS2ReceiveOptions>
      </AS2CommunicationOptions>
      <DiskCommunicationOptions CommunicationSetting="">
        <SharedCommunicationChannel componentId="">         
        <DiskGetOptions useDefaultGetOptions="" deleteAfterRead="" maxFileCount="" filterMatchType="">
            <fileFilter/>
            <getDirectory/>
         </DiskGetOptions>
         <DiskSendOptions useDefaultSendOptions="" createDirectory="" writeOption="">
            <sendDirectory/>
         </DiskSendOptions> 
      </DiskCommunicationOptions>
      <FTPCommunicationOptions CommunicationSetting="">
         <SharedCommunicationChannel componentId="">         
         <FTPSettings useDefaultSettings="" connectionMode="">
            <host/>
            <port/>
            <user/>
            <password/>
            <FTPSSLOptions useClientAuthentication="" sslmode="">
               <clientSSLCertificate alias="" passPhrase="">
                  <certificate/>
               </clientSSLCertificate>
            </FTPSSLOptions>
         </FTPSettings>
         <FTPGetOptions useDefaultGetOptions="" ftpAction="" transferType="">
            <remoteDirectory></remoteDirectory>
            <fileToMove/>
            <maxFileCount/>
         </FTPGetOptions>
         <FTPSendOptions useDefaultSendOptions="" ftpAction="" transferType="">
            <remoteDirectory/>
            <moveToDirectory/>
         </FTPSendOptions>
      </FTPCommunicationOptions>

      <SFTPCommunicationOptions CommunicationSetting="">
         <SharedCommunicationChannel componentId="">         
         <SFTPSettings useDefaultSettings="">
            <host/>
            <port/>
            <user/>
            <password/>
            <SFTPSSHOptions sshkeyauth="">
               <sshkeypath/>
               <sshkeypassword/>
            </SFTPSSHOptions>
         </SFTPSettings>
         <SFTPGetOptions useDefaultGetOptions="" ftpAction="">
            <remoteDirectory/>
            <fileToMove/>
            <maxFileCount/>
         </SFTPGetOptions>
         <SFTPSendOptions useDefaultSendOptions="" ftpAction="">
            <remoteDirectory/>
            <moveToDirectory/>
         </SFTPSendOptions>
      </SFTPCommunicationOptions>
      <MLLPCommunicationOptions>
         <MLLPSendSettings>
            <host/>
            <port/>
            <sendTimeout/>
            <receiveTimeout/>
            <maxRetry/>
            <failOnTimeout/>
            <usePersistentConnections maxPoolSize="" expireTimeout=""/>
            <useTrustedSSLCertificate trustSSLServerCertificate=""/>
            <useClientSSLAuthorization clientSSLCertificate=""/>
         </MLLPSendSettings>
      </MLLPCommunicationOptions>
   </PartnerCommunication>
   <PartnerDocumentTypes>
	See specific structure examples for EDIFACT, HL7, RosettaNet, Tradacoms, and X12 document types. The related sample should be pasted here.
   </PartnerDocumentTypes>
</TradingPartnerComponent>

```

## EDIFACT partner information 

```

             <EdifactPartnerInfo>
        <EdifactOptions filteracknowledgements="" acknowledgementoption="" envelopeoption="" rejectDuplicateUNB="" includeUNA="" outboundInterchangeValidation="" outboundValidationOption="">
           <elementDelimiter delimiterValue=""/>
           <segmentTerminator segmentTerminatorValue="" segmentTerminatorSpecial=""/>
           <compositeDelimiter delimiterValue="" delimiterSpecial=""/>
        </EdifactOptions>
        <EdifactControlInfo>
           <UNBControlInfo interchangeIdQual="" interchangeId="" interchangeAddress="" interchangeSubAddress="" syntaxId="" syntaxVersion="" priority="" referencePassword="" referencePasswordQualifier="" appReference="" ackRequest="" commAgreement="" testIndicator=""/>
           <UNGControlInfo useFunctionalGroups="" applicationIdQual="" applicationId=""/>
           <UNHControlInfo version="" release="" controllingAgency="" assocAssignedCode="" commonAccessRef=""/>
        </EdifactControlInfo>
     </EdifactPartnerInfo>

```

:::note

The valid outboundValidationOption field values are filterError and failAll. The default is filterError.

:::

## HL7 partner information 

```

             <HL7PartnerInfo>
         <HL7Options filteracknowledgements="" rejectDuplicates="" acceptackoption="" appackoption="" batchoption="" outboundInterchangeValidation="" outboundValidationOption="">
            <segmentTerminator segmentTerminatorValue=""/>
            <elementDelimiter delimiterValue="" delimiterSpecial=""/>
            <compositeDelimiter delimiterValue=""/>
            <subCompositeDelimiter delimiterValue="" delimiterSpecial=""/>
         </HL7Options>
         <HL7ControlInfo>
            <MSHControlInfo>
               <Application namespaceId="" universalId="" universalIdType=""/>
               <Facility namespaceId="" universalId="" universalIdType=""/>
               <NetworkAddress namespaceId="" universalId="" universalIdType=""/>
               <ProcessingId processingId="" processingMode=""/>
            </MSHControlInfo>
         </HL7ControlInfo>
      </HL7PartnerInfo>

```

:::note

The valid outboundValidationOption field values are filterError and failAll. The default is filterError.

:::

## Odette partner information 

``` {#codeblock_hnk_xmh_fwb}

<OdettePartnerInfo>
    <OdetteOptions filteracknowledgements="" acknowledgementoption="" envelopeoption="" rejectDuplicateUNB="" includeUNA="" outboundInterchangeValidation="" outboundValidationOption="">
       <elementDelimiter delimiterValue="" />
       <segmentTerminator segmentTerminatorValue="" />
       <compositeDelimiter delimiterValue="" />
    </OdetteOptions>
    <OdetteControlInfo>
       <OdetteUNBControlInfo interchangeIdQual="" syntaxId="" syntaxVersion="" priority="" referencePasswordQualifier="" ackRequest="" testIndicator="" />
       <OdetteUNHControlInfo version="" release="" controllingAgency="" />
    </OdetteControlInfo>
</OdettePartnerInfo>

```

## RosettaNet partner information 

``` {#codeblock_wyx_r5h_fwb}

        <RosettaNetPartnerInfo>
    <RosettaNetOptions version="" filterSignals="" rejectDuplicateTransactions="" outboundDocumentValidation=""/> 
    <RosettaNetControlInfo partnerId="" partnerIdType="" partnerLocation="" globalPartnerClassificationCode="" globalUsageCode="" supplyChainCode="">
       <encryptionPublicCertificate componentId="" alias="">
          <certificate/>
       </encryptionPublicCertificate>
       <signingPublicCertificate/></signingPublicCertificate>
    </RosettaNetControlInfo>
    <RosettaNetMessageOptions compressed="" signed="" signatureDigestAlgorithm="" encrypted="" encryptServiceHeader="" encryptionAlgorithm="" contentTransferEncoding="" attachmentCache=""/>
</RosettaNetPartnerInfo>

```

:::note

The valid contentTransferEncoding field values are binary and base64. The default is binary.

:::

## Tradacoms partner information 

```
 <TradacomsPartnerInfo>
    <TradacomsOptions useReconcilationMessage="" filterAcknowledgements="">
       <elementDelimiter delimiterValue=""/>
       <segmentTerminator segmentTerminatorValue=""/>
       <compositeDelimiter delimiterValue=""/>
    </TradacomsOptions>  
    <TradacomsControlInfo>
       <STXControlInfo interchangeId="" interchangeIdQualifier=""/>
    </TradacomsControlInfo>
</TradacomsPartnerInfo>
```

## X12 partner information 

```

             <X12PartnerInfo>
      <X12PartnerInfo>
         <X12Options filteracknowledgements="" acknowledgementoption="" envelopeoption="" rejectDuplicateInterchange="" outboundInterchangeValidation="" outboundValidationOption="">
            <elementDelimiter delimiterValue="" delimiterSpecial=""/>
            <segmentTerminator segmentTerminatorValue="" segmentTerminatorSpecial=""/>
         </X12Options>
      <X12ControlInfo>
        <ISAControlInfo interchangeIdQualifier="" securityInformationQualifier="" authorizationInformationQualifier="" componentElementSeparator="" ackrequested="" version="" interchangeId="" securityInformation="" authorizationInformation="" standardIdentification="" testindicator=""/>
        <GSControlInfo respagencycode="" applicationcode="" gsVersion=""/>	
      </X12ControlInfo>
    </X12PartnerInfo>
```

:::note

The valid outboundValidationOption field values are filterError and failAll. The default is filterError.

:::

## EDIFACT partner document types 

```        
<PartnerDocumentType typeId="" profileId="" expectAckForOutbound="" validateOutboundTransactionSets="" invalidDocumentRouting="" qualifierValidation=""/>
```

:::note

The valid invalidDocumentRouting field values are documentsPath and errorsPath. The default is errorsPath.

:::

## HL7 partner document types 

```        
<PartnerDocumentType typeId="" profileId="" expectAckForOutbound="" validateOutboundTransactionSets="" qualifierValidaton=""/>
```

## Odette partner document types 

``` {#codeblock_yyp_b5h_fwb}
<PartnerDocumentType typeId="" expectAckForOutbound="" validateOutboundTransactionSets="" invalidDocumentRouting="" qualifierValidation="" />
```

## RosettaNet partner document types 

```        
<PartnerDocumentType typeId="" profileId="" expectAckForOutbound="" validateOutboundTransactionSets=""/>
```

The `typeId` value corresponds to the docTypeSystemId attribute value in a RosettaNet document type XML schema. When you import a RosettaNet document type XML schema into an XML profile component in , the docTypeSystemId value appears in the **Document Type System ID** field on the profile’s **Options** tab.

## Tradacoms partner document types 

```
<PartnerDocumentType typeId="" profileId=""/>
```

## X12 partner document types 

```        
<PartnerDocumentType typeId="" profileId="" use999Ack="" useTA1Ack="" expectAckForOutbound="" validateOutboundTransactionSets="" qualifierValidation=""/>
```

## Supported operations 

|GET|QUERY|CREATE|UPDATE|EXECUTE|DELETE|
|---|-----|------|------|-------|------|
|Supported|Supported|Supported|Supported|Not supported|Supported|

## Using the GET operation 

-   The ordinary GET operation returns a single Trading Partner Component object based on the supplied ID.

-   The bulk GET operation returns multiple Trading Partner Component objects based on the supplied IDs, to a maximum of 100.

-   A GET operation specifying the ID of a deleted Trading Partner component retrieves the component. In the component, the deleted field’s value is true.


## Using the QUERY operation 

-   You can use the following fields as QUERY filters for the Trading Partner Component object:

    |Field|Allowed values|
    |-----|--------------|
    |classification|tradingpartner or mycompany.|
    |name|Any string value.<br />'''**Note:** '''The name field in a QUERY filter represents the object’s componentName field.|
    |standard|edifact, hl7, rosettanet, tradacoms, x12, odetteor custom.|
    |identifier|Any string value.|
    |as2|true|
    |disk|true|
    |ftp|true|
    |http|true|
    |mllp|true|
    |sftp|true|
    |oftp2|true|

-   Only the LIKE operator is allowed with a name filter. Likewise, you can only use the EQUALS operator with a classification, standard, identifier filter, or a communication method filter \(as2, disk, ftp, http, mllp, sftp\). Filtering on a communication method field requests Trading Partner components by defining the communication method.

-   If the QUERY request includes multiple filters, you can connect the filters with a logical AND operator. The QUERY request does not support the logical OR operator.

-   The QUERY results omit the folderName field.

For general information about the structure of QUERY filters and how to handle paged results, see the Query filters and Query paging topics.

## Using the CREATE operation 

-   TheCREATE operation creates a Trading Partner Component object with a specified component name.

-   The request body requires the standard, classification, and componentName fields. If you omit the folderName field, you must use the folderId field — and vice versa. If you omit the componentID field and the IDs of any certificates you want to create, their values are assigned when you create the components. If you leave off the folderID field when creating a component, it assigns a value.

-   Includes the organizationId field only if the trading partner is to reference an Organization component, in which case the field value is the ID of the Organization component. A request specifying the organizationId field populates the ContactInformation fields with the data from the referenced Organization component.


## Using the UPDATE operation 

-   The UPDATE operation overwrites the Trading Partner Component object with the specified component ID except as described in the following:

-   If those fields are empty, an UPDATE operation specifying the organizationId field populates the ContactInformation fields with the data from the referenced Organization component. However, if those fields have values, they are not overwritten.

-   An UPDATE operation specifying the ID of a deleted Trading Partner component restores the component to a non-deleted state, assuming the request is otherwise valid.


## Using the DELETE operation 

-   The DELETE operation deletes the Trading Partner Component object with a specific component ID.

-   A DELETE operation specifying the ID of a deleted Trading Partner component returns a false response.


## RESTish implementation 

-   **GET operation**

    Send an HTTP GET to:

    https://api.boomi.com/api/rest/v1/accountId/TradingPartnerComponent/id

    where accountId is the ID of the authenticating account for the request and id is the Trading Partner component ID.

    In this example, it retrieves the Trading Partner component with the ID 12345678-9abc-def0-1234-56789abcdef0.

    XML response:

    ``` {#codeblock_rm5_sds_s5b .code-java}
    <bns:TradingPartnerComponent folderId="11356" folderName="Home:TPs" componentId="12345678-9abc-def0-1234-56789abcdef0" componentName="Best Wholesaling" standard="x12" classification="tradingpartner" xmlns:bns="http://api.platform.boomi.com/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
       <bns:ContactInfo>
          <bns:contactName>Tom Miller</bns:contactName>
          <bns:address1>127 Comstock Ave.</bns:address1>
          <bns:address2/>
          <bns:city>Philadelphia</bns:city>
          <bns:state>PA</bns:state>
          <bns:postalcode>19100</bns:postalcode>
          <bns:country>US</bns:country>
          <bns:email>tom@bestwholesaling.biz</bns:email>
          <bns:phone>311 555-3579</bns:phone>
          <bns:fax>311 555-9753</bns:fax>
       </bns:ContactInfo>
       <bns:PartnerInfo>
          <bns:X12PartnerInfo>
             <bns:X12Options acknowledgementoption="donotackitem" envelopeoption="groupall" filteracknowledgements="false" rejectDuplicateInterchange="false" outboundInterchangeValidation="true" outboundValidationOption="filterError">
                <bns:elementDelimiter delimiterValue="stardelimited"/>
                <bns:segmentTerminator segmentTerminatorValue="newline"/>
             </bns:X12Options>
             <bns:X12ControlInfo>
                <bns:ISAControlInfo testindicator="P" ackrequested="false" authorizationInformationQualifier="X12AUTHQUAL_00" securityInformationQualifier="X12SECQUAL_00" interchangeIdQualifier="X12IDQUAL_01"/>
                <bns:GSControlInfo respagencycode="T"/>
             </bns:X12ControlInfo>
          </bns:X12PartnerInfo>
       </bns:PartnerInfo>
       <bns:PartnerCommunication>
          <bns:FTPCommunicationOptions CommunicationSetting="custom">
             <bns:SharedCommunicationChannel/> 
             <bns:FTPSettings connectionMode="active" useDefaultSettings="false">
                <bns:host>ftp.bestwholesaling.com</bns:host>
                <bns:port>1010</bns:port>
                <bns:user>tom.miller</bns:user>
                <bns:FTPSSLOptions sslmode="none" useClientAuthentication="false"/>
             </bns:FTPSettings>
             <bns:FTPGetOptions transferType="ascii" ftpAction="actionget" useDefaultGetOptions="false">
                <bns:remoteDirectory>/usr/local/bestwholesaling/outbox</bns:remoteDirectory>
                <bns:fileToMove>*.xml</bns:fileToMove>
                <bns:maxFileCount>200</bns:maxFileCount>
             </bns:FTPGetOptions>
             <bns:FTPSendOptions transferType="ascii" ftpAction="actionputappend" useDefaultSendOptions="false">
                <bns:remoteDirectory>/home/tommiller/new</bns:remoteDirectory>
                <bns:moveToDirectory>/home/tommiller/inbox</bns:moveToDirectory>
             </bns:FTPSendOptions>
          </bns:FTPCommunicationOptions>
       </bns:PartnerCommunication>
       <bns:PartnerDocumentTypes>
          <bns:PartnerDocumentType typeId="101" profileId="23456789-abcd-ef01-2345-6789abcdef01" use999Ack="false" useTA1Ack="false" expectAckForOutbound="false" validateOutboundTransactionSets="false" qualifierValidation="true"/>
          <bns:PartnerDocumentType typeId="810" profileId="3456789a-bcde-4012-3456-789abcdef012" use999Ack="false" useTA1Ack="false" expectAckForOutbound="false" validateOutboundTransactionSets="false" qualifierValidation="true"/>
       </bns:PartnerDocumentTypes>
    </bns:TradingPartnerComponent>
    ```

    For a JSON response, send the request with the following HTTP header:

    `Accept: application/json`

    JSON response:

    ``` {#codeblock_msz_zds_s5b}
    {
       "@type": "TradingPartnerComponent",
       "ContactInfo":    {
          "@type": "ContactInfo",
          "contactName": "Tom Miller",
          "address1": "127 Comstock Ave.",
          "address2": "",
          "city": "Philadelphia",
          "state": "PA",
          "postalcode": "19100",
          "country": "US",
          "email": "tom@bestwholesaling.biz",
          "phone": "311 555-3579",
          "fax": "311 555-9753"
       },
       "PartnerInfo":    {
          "@type": "PartnerInfo",
          "X12PartnerInfo":       {
             "@type": "X12PartnerInfo",
             "X12Options":          {
                "@type": "X12Options",
                "elementDelimiter":             {
                   "@type": "EdiDelimiter",
                   "delimiterValue": "stardelimited"
                },
                "segmentTerminator":             {
                   "@type": "EdiSegmentTerminator",
                   "segmentTerminatorValue": "newline"
                },
                "filteracknowledgements": false,
                "acknowledgementoption": "donotackitem",
                "envelopeoption": "groupall",
                "rejectDuplicateInterchange": false,
                "outboundInterchangeValidation": true,
                "outboundValidationOption": "filterError"
             },
             "X12ControlInfo":          {
                "@type": "X12ControlInfo",
                "ISAControlInfo":             {
                   "@type": "ISAControlInfo",
                   "interchangeIdQualifier": "X12IDQUAL_01",
                   "securityInformationQualifier": "X12SECQUAL_00",
                   "authorizationInformationQualifier": "X12AUTHQUAL_00",
                   "ackrequested": false,
                   "testindicator": "P"
                },
                "GSControlInfo":             {
                   "@type": "GSControlInfo",
                   "respagencycode": "T"
                }
             }
          }
       },
       "PartnerCommunication":    {
          "@type": "PartnerCommunication",
          "FTPCommunicationOptions":       {
             "@type": "FTPCommunicationOptions",
             "FTPSettings":          {
                "@type": "FTPSettings",
                "host": "ftp.bestwholesaling.com",
                "port":             [
                   "BigInteger",
                   1010
                ],
                "user": "tom.miller",
                "FTPSSLOptions":             {
                   "@type": "FTPSSLOptions",
                   "useClientAuthentication": false,
                   "sslmode": "none"
                },
                "useDefaultSettings": false,
                "connectionMode": "active"
             },
             "FTPGetOptions":          {
                "@type": "FTPGetOptions",
                "remoteDirectory": "/usr/local/bestwholesaling/outbox",
                "fileToMove": "*.xml",
                "maxFileCount":             [
                   "BigInteger",
                   200
                ],
                "useDefaultGetOptions": false,
                "ftpAction": "actionget",
                "transferType": "ascii"
             },
             "FTPSendOptions":          {
                "@type": "FTPSendOptions",
                "remoteDirectory": "/home/tommiller/new",
                "moveToDirectory": "/home/tommiller/inbox",
                "useDefaultSendOptions": false,
                "ftpAction": "actionputappend",
                "transferType": "ascii"
             },
             "SharedCommunicationChannel": {
                "@type": "SharedCommunicationChannel"
             },
             "CommunicationSetting": "custom" 
          }
       },
       "PartnerDocumentTypes": {
          "@type": "PartnerDocumentTypes",
          "PartnerDocumentType": [
             {
                "@type": "PartnerDocumentType",
                "typeId": "101",
                "profileId": "23456789-abcd-ef01-2345-6789abcdef01",
                "use999Ack": false,
                "useTA1Ack": false,
                "expectAckForOutbound": false,
                "validateOutboundTransactionSets": false,
                "qualifierValidation": true
             },
             {
                "@type": "PartnerDocumentType",
                "typeId": "810",
                "profileId": "3456789a-bcde-4012-3456-789abcdef012",
                "use999Ack": false,
                "useTA1Ack": false,
                "expectAckForOutbound": false,
                "validateOutboundTransactionSets": false,
                "qualifierValidation": true
             }
          ],
       },
       "classification": "tradingpartner",
       "standard": "x12",
       "componentName": "Best Wholesaling",
       "componentId": "12345678-9abc-def0-1234-56789abcdef0",
       "folderName": "Home:TPs",
       "folderId": 11356
    }
    ```

-   **QUERY operation**

    The QUERY operation returns each Trading Partner component that meets the specified filtering criteria. The operation does not return full component representations; it returns, for each result, it returns the following:

    -   component’s folder ID

    -   ID

    -   name

    -   standard

    -   identifier

    -   classification

    -   communication methods

    Send an HTTP POST to:

    https://api.boomi.com/api/rest/v1/accountId/TradingPartnerComponent/query

    where *accountId* is the ID of the authenticating account for the request.

    The following example query returns the authenticating account’s X12 Trading Partner components.

    XML request:

    ```
    <QueryConfig xmlns="http://api.platform.boomi.com/">
      <QueryFilter>
        <expression xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type="SimpleExpression" 
           operator="EQUALS" property="standard">
           <argument>x12</argument>
        </expression>
      </QueryFilter>
    </QueryConfig>
    ```

    XML response:

    ``` {#codeblock_ilq_x1t_s5b}
    <bns:QueryResult numberOfResults="2" xmlns:bns="http://api.platform.boomi.com/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
       <bns:queryToken>/2mZdfERiaxo8QzovFbelpbegzlMWTSWIyfFgEV3XoCHCYhO2HTumRKXjc53lCChRwOiuKD6sXyixAbOsPa82okh/</bns:queryToken>
       <bns:result xsi:type="bns:TradingPartnerComponent" classification="tradingpartner" standard="x12" identifier="BEST-WH" componentName="Best Wholesaling" componentId="12345678-9abc-def0-1234-56789abcdef0" folderId="11356">
          <bns:PartnerCommunicationTypes>ftp</bns:PartnerCommunicationTypes>
        </bns:result>
       <bns:result xsi:type="bns:TradingPartnerComponent" classification="mycompany" standard="x12" identifier="MY-X12" componentName="MyCompany-x12" componentId="fedcba09-8765-4321-fedc-ba0987654321" folderId="13340">
          <bns:PartnerCommunicationTypes>ftp</bns:PartnerCommunicationTypes>
        </bns:result>
    </bns:QueryResult>
    ```

    For a JSON request, send the request with the following HTTP header:

    `Content-Type: application/json`

    JSON request:

    ```
    {
      "QueryFilter" :
        {
          "expression" :
            {
              "argument" : ["x12"],
              "operator" : "EQUALS",
              "property" : "standard"
            }
        }
    }
    ```

    For a JSON response, send the request with the following HTTP header:

    `Accept: application/json`

    JSON response:

    ``` {#codeblock_tl1_kct_s5b}
    {
       "@type": "QueryResult",
       "queryToken": "/2mZdfERiaxo8QzovFbelpbegzlMWTSWIyfFgEV3XoCHCYhO2HTumRKXjc53lCChRwOiuKD6sXyixAbOsPa82okh",
       "result":    [
          {
             "@type": "TradingPartnerComponent",
             "PartnerCommunicationTypes" : [
                "ftp"
             ], 
             "classification" : "tradingpartner",
             "standard" : "x12",
             "identifier" : "BEST-WH",
             "componentName" : "Best Wholesaling",
             "componentId" : "12345678-9abc-def0-1234-56789abcdef0",
             "folderId" : 11356
          },
          {
             "@type": "TradingPartnerComponent",
             "PartnerCommunicationTypes" : [
                "ftp"
             ], 
             "classification": "mycompany",
             "standard": "x12",
             "identifier": "MY-X12",
             "componentName": "MyCompany-X12",
             "componentId": "fedcba09-8765-4321-fedc-ba0987654321",
             "folderId": 13340
          },
       ],
       "numberOfResults": 2
    }
    ```

-   **CREATE operation**

    Send an HTTP POST to:

    https://api.boomi.com/api/rest/v1/accountId/TradingPartnerComponent/

    where accountId is the ID of the authenticating account for the request.

    The following example adds an X12 Trading Partner component with the FTP communication method.

    XML request:

    ``` {#codeblock_hwv_bgs_s5b .code-java}
    <bns:TradingPartnerComponent folderName="Home:TPs" componentName="Best Wholesaling" standard="x12" classification="tradingpartner" xmlns:bns="http://api.platform.boomi.com/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
       <bns:ContactInfo>
          <bns:contactName>Tom Miller</bns:contactName>
          <bns:address1>127 Comstock Ave.</bns:address1>
          <bns:address2/>
          <bns:city>Philadelphia</bns:city>
          <bns:state>PA</bns:state>
          <bns:postalcode>19100</bns:postalcode>
          <bns:country>US</bns:country>
          <bns:email>tom@bestwholesaling.biz</bns:email>
          <bns:phone>311 555-3579</bns:phone>
          <bns:fax>311 555-9753</bns:fax>
       </bns:ContactInfo>
       <bns:PartnerInfo>
          <bns:X12PartnerInfo>
             <bns:X12Options envelopeoption="groupall" acknowledgementoption="donotackitem" filteracknowledgements="false" rejectDuplicateInterchange="false" outboundInterchangeValidation="true" outboundValidationOption="filterError">
                <bns:elementDelimiter delimiterValue="stardelimited"/>
                <bns:segmentTerminator segmentTerminatorValue="newline"/>
             </bns:X12Options>
             <bns:X12ControlInfo>
                <bns:ISAControlInfo testindicator="P" ackrequested="false" authorizationInformationQualifier="X12AUTHQUAL_00" securityInformationQualifier="X12SECQUAL_00" interchangeIdQualifier="X12IDQUAL_01"/>
                <bns:GSControlInfo respagencycode="T"/>
             </bns:X12ControlInfo>
          </bns:X12PartnerInfo>
       </bns:PartnerInfo>
       <bns:PartnerCommunication>
          <bns:FTPCommunicationOptions CommunicationSetting="custom">
             <bns:SharedCommunicationChannel/>
             <bns:FTPSettings connectionMode="active" useDefaultSettings="false">
                <bns:host>ftp.bestwholesaling.com</bns:host>
                <bns:port>1010</bns:port>
                <bns:user>tom.miller</bns:user>
                <bns:FTPSSLOptions sslmode="none" useClientAuthentication="false"/>
             </bns:FTPSettings>
             <bns:FTPGetOptions transferType="ascii" ftpAction="actionget" useDefaultGetOptions="false">
                <bns:remoteDirectory>/usr/local/bestwholesaling/outbox</bns:remoteDirectory>
                <bns:fileToMove>*.xml</bns:fileToMove>
                <bns:maxFileCount>200</bns:maxFileCount>
             </bns:FTPGetOptions>
             <bns:FTPSendOptions transferType="ascii" ftpAction="actionputappend" useDefaultSendOptions="false">
                <bns:remoteDirectory>/home/tommiller/new</bns:remoteDirectory>
                <bns:moveToDirectory>/home/tommiller/inbox</bns:moveToDirectory>
             </bns:FTPSendOptions>
          </bns:FTPCommunicationOptions>
       </bns:PartnerCommunication>
       <bns:PartnerDocumentTypes>
          <bns:PartnerDocumentType typeId="101" profileId="23456789-abcd-ef01-2345-6789abcdef01" use999Ack="false" useTA1Ack="false" expectAckForOutbound="false" validateOutboundTransactionSets="false" qualifierValidation="true"/>
          <bns:PartnerDocumentType typeId="810" profileId="3456789a-bcde-4012-3456-789abcdef012" use999Ack="false" useTA1Ack="false" expectAckForOutbound="false" validateOutboundTransactionSets="false" qualifierValidation="true"/>
       </bns:PartnerDocumentTypes>
    </bns:TradingPartnerComponent>
    ```

    For a JSON request, send the request with the following HTTP header:

    `Content-Type: application/json`

    JSON request:

    ``` {#codeblock_rjq_tq3_w5b}
    {
      "PartnerCommunication": {
        "FTPCommunicationOptions": {
          "FTPSettings": {
            "host": "ftp.wholesaling.com",
            "port":             [
               "BigInteger",
               1010
            ],
            "user": "tom.miller",
            "FTPSSLOptions": {
              "useClientAuthentication": false,
              "sslmode": "none"
            },
            "useDefaultSettings": false,
            "connectionMode": "active"
          },
          "FTPGetOptions": {
            "remoteDirectory": "/usr/local/bestwholesaling/outbox",
            "fileToMove": "*.xml",
            "maxFileCount":             [
               "BigInteger",
               200
            ],
            "useDefaultGetOptions": false,
            "ftpAction": "actionget",
            "transferType": "ascii"
          },
          "FTPSendOptions": {
            "remoteDirectory": "/home/tommiller/new",
            "moveToDirectory": "/home/tommiller/inbox",
            "useDefaultSendOptions": false,
            "ftpAction": "actionputappend",
            "transferType": "ascii"
          },
          "SharedCommunicationChannel": {
          },
          "CommunicationSetting": "custom"  
        }
      },
      "PartnerInfo":    {
          "X12PartnerInfo":       {
             "X12Options":          {
                "elementDelimiter":             {
                   "delimiterValue": "stardelimited"
                },
                "segmentTerminator":             {
                   "segmentTerminatorValue": "newline"
                },
                "filteracknowledgements": false,
                "acknowledgementoption": "donotackitem",
                "envelopeoption": "groupall",
                "rejectDuplicateInterchange": false,
                "outboundInterchangeValidation": true,
                "outboundValidationOption": "filterError"
             },
             "X12ControlInfo":          {
                "ISAControlInfo":             {
                   "interchangeIdQualifier": "X12IDQUAL_01",
                   "securityInformationQualifier": "X12SECQUAL_00",
                   "authorizationInformationQualifier": "X12AUTHQUAL_00",
                   "ackrequested": false,
                   "testindicator": "P"
                },
                "GSControlInfo":             {
                   "respagencycode": "T"
                }
             }
          }
       },
       "ContactInfo":    {
          "contactName": "Tom Miller",
          "address1": "127 Comstock Ave.",
          "address2": "",
          "city": "Philadelphia",
          "state": "PA",
          "postalcode": "19100",
          "country": "US",
          "email": "tom@bestwholesaling.biz",
          "phone": "311 555-3579",
          "fax": "311 555-9753"
       },
       "PartnerDocumentTypes": {
          "@type": "PartnerDocumentTypes",
          "PartnerDocumentType": [
             {
                "@type": "PartnerDocumentType",
                "typeId": "101",
                "profileId": "23456789-abcd-ef01-2345-6789abcdef01",
                "use999Ack": false,
                "useTA1Ack": false,
                "expectAckForOutbound": false,
                "validateOutboundTransactionSets": false,
                "qualifierValidation": true
             },
             {
                "@type": "PartnerDocumentType",
                "typeId": "810",
                "profileId": "3456789a-bcde-4012-3456-789abcdef012",
                "use999Ack": false,
                "useTA1Ack": false,
                "expectAckForOutbound": false,
                "validateOutboundTransactionSets": false,
                "qualifierValidation": true
             }
          ],
       },
       "classification": "tradingpartner",
       "standard": "x12",
       "componentName": "Best Wholesaling",
       "folderName": "Home:TPs"
    }
    ```

    For a JSON response, send the request with the following HTTP header:

    `Accept: application/json`

    Response:

    The response contains the XML or JSON representation of the created Trading Partner component, including the:

    -   Assigned folder ID

    -   Component ID

    -   Certificate IDs \(the latter only if you create certificates\)

-   **UPDATE operation**

    Send an HTTP POST to:

    https://api.boomi.com/api/rest/v1/accountId/TradingPartnerComponent/id

    where *accountId* is the ID of the authenticating account for the request and id is the trading partner component ID.

    You must use the componentId field.

    The following example overwrites the Trading Partner component shown in the GET and CREATE samples above. As a result, it updates the following:

    -   Name

    -   Email address

    -   Phone number

    -   Fax number of the trading partner’s contact person

    -   FTP user option

    -   Send option

    XML request:

    ``` {#codeblock_qlw_qgs_s5b .code-java}
    <bns:TradingPartnerComponent folderId="11356" folderName="Home:TPs" componentId="12345678-9abc-def0-1234-56789abcdef0" componentName="Best Wholesaling" standard="x12" classification="tradingpartner" xmlns:bns="http://api.platform.boomi.com/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
       <bns:ContactInfo>
          <bns:contactName>Rachel Lewis</bns:contactName>
          <bns:address1>127 Comstock Ave.</bns:address1>
          <bns:address2/>
          <bns:city>Philadelphia</bns:city>
          <bns:state>PA</bns:state>
          <bns:postalcode>19100</bns:postalcode>
          <bns:country>US</bns:country>
          <bns:email>rachel@bestwholesaling.biz</bns:email>
          <bns:phone>311 555-2468</bns:phone>
          <bns:fax>311 555-8642</bns:fax>
       </bns:ContactInfo>
       <bns:PartnerInfo>
          <bns:X12PartnerInfo>
             <bns:X12Options envelopeoption="groupall" acknowledgementoption="donotackitem" filteracknowledgements="false" rejectDuplicateInterchange="false" outboundInterchangeValidation="true" outboundValidationOption="filterError">
                <bns:elementDelimiter delimiterValue="stardelimited"/>
                <bns:segmentTerminator segmentTerminatorValue="newline"/>
             </bns:X12Options>
             <bns:X12ControlInfo>
                <bns:ISAControlInfo testindicator="P" ackrequested="false" authorizationInformationQualifier="X12AUTHQUAL_00" securityInformationQualifier="X12SECQUAL_00" interchangeIdQualifier="X12IDQUAL_01"/>
                <bns:GSControlInfo respagencycode="T"/>
             </bns:X12ControlInfo>
          </bns:X12PartnerInfo>
       </bns:PartnerInfo>
       <bns:PartnerCommunication>
          <bns:FTPCommunicationOptions CommunicationSetting="custom">
             <bns:SharedCommunicationChannel/>
             <bns:FTPSettings connectionMode="active" useDefaultSettings="false">
                <bns:host>ftp.bestwholesaling.com</bns:host>
                <bns:port>1010</bns:port>
                <bns:user>rachel.lewis</bns:user>
                <bns:FTPSSLOptions sslmode="none" useClientAuthentication="false"/>
             </bns:FTPSettings>
             <bns:FTPGetOptions transferType="ascii" ftpAction="actionget" useDefaultGetOptions="false">
                <bns:remoteDirectory>/usr/local/bestwholesaling/outbox</bns:remoteDirectory>
                <bns:fileToMove>*.xml</bns:fileToMove>
                <bns:maxFileCount>200</bns:maxFileCount>
             </bns:FTPGetOptions>
             <bns:FTPSendOptions transferType="ascii" ftpAction="actionputappend" useDefaultSendOptions="false">
                <bns:remoteDirectory>/home/rachellewis/new</bns:remoteDirectory>
                <bns:moveToDirectory>/home/rachellewis/inbox</bns:moveToDirectory>
             </bns:FTPSendOptions>
          </bns:FTPCommunicationOptions>
       </bns:PartnerCommunication>
       <bns:PartnerDocumentTypes>
          <bns:PartnerDocumentType typeId="101" profileId="23456789-abcd-ef01-2345-6789abcdef01" use999Ack="false" useTA1Ack="false" expectAckForOutbound="false" validateOutboundTransactionSets="false" qualifierValidation="true"/>
          <bns:PartnerDocumentType typeId="810" profileId="3456789a-bcde-4012-3456-789abcdef012" use999Ack="false" useTA1Ack="false" expectAckForOutbound="false" validateOutboundTransactionSets="false" qualifierValidation="true"/>
       </bns:PartnerDocumentTypes>
    </bns:TradingPartnerComponent>
    ```

    For a JSON request, send the request with the following HTTP header:

    `Content-Type: application/json`

    JSON request:

    ``` {#codeblock_upy_hr3_w5b}
    {
      "PartnerCommunication": {
        "FTPCommunicationOptions": {
          "FTPSettings": {
            "host": "ftp.bestwholesaling.com",
            "port":             [
               "BigInteger",
               1010
            ],
            "user": "rachel.lewis",
            "FTPSSLOptions": {
              "useClientAuthentication": false,
              "sslmode": "none"
            },
            "useDefaultSettings": false,
            "connectionMode": "active"
          },
          "FTPGetOptions": {
            "remoteDirectory": "/usr/local/bestwholesaling/outbox",
            "fileToMove": "*.xml",
            "maxFileCount":             [
               "BigInteger",
               200
            ],
            "useDefaultGetOptions": false,
            "ftpAction": "actionget",
            "transferType": "ascii"
          },
          "FTPSendOptions": {
            "remoteDirectory": "/home/rachellewis/new",
            "moveToDirectory": "/home/rachellewis/inbox",
            "useDefaultSendOptions": false,
            "ftpAction": "actionputappend",
            "transferType": "ascii"
          },
          "SharedCommunicationChannel": {
          },
          "CommunicationSetting": "custom" 
        }
      },
      "PartnerInfo":    {
          "X12PartnerInfo":       {
             "X12Options":          {
                "elementDelimiter":             {
                   "delimiterValue": "stardelimited"
                },
                "segmentTerminator":             {
                   "segmentTerminatorValue": "newline"
                },
                "filteracknowledgements": false,
                "acknowledgementoption": "donotackitem",
                "envelopeoption": "groupall",
                "rejectDuplicateInterchange": false,
                "outboundInterchangeValidation": true,
                "outboundValidationOption": "filterError"
             },
             "X12ControlInfo":          {
                "ISAControlInfo":             {
                   "interchangeIdQualifier": "X12IDQUAL_01",
                   "securityInformationQualifier": "X12SECQUAL_00",
                   "authorizationInformationQualifier": "X12AUTHQUAL_00",
                   "ackrequested": false,
                   "testindicator": "P"
                },
                "GSControlInfo":             {
                   "respagencycode": "T"
                }
             }
          }
       },
       "ContactInfo":    {
          "contactName": "Rachel Lewis",
          "address1": "127 Comstock Ave.",
          "address2": "",
          "city": "Philadelphia",
          "state": "PA",
          "postalcode": "19100",
          "country": "US",
          "email": "rachel@bestwholesaling.biz",
          "phone": "311 555-2468",
          "fax": "311 555-8642"
       },
       "PartnerDocumentTypes": {
          "@type": "PartnerDocumentTypes",
          "PartnerDocumentType": [
             {
                "@type": "PartnerDocumentType",
                "typeId": "101",
                "profileId": "23456789-abcd-ef01-2345-6789abcdef01",
                "use999Ack": false,
                "useTA1Ack": false,
                "expectAckForOutbound": false,
                "validateOutboundTransactionSets": false,
                "qualifierValidation": true
             },
             {
                "@type": "PartnerDocumentType",
                "typeId": "810",
                "profileId": "3456789a-bcde-4012-3456-789abcdef012",
                "use999Ack": false,
                "useTA1Ack": false,
                "expectAckForOutbound": false,
                "validateOutboundTransactionSets": false,
                "qualifierValidation": true
             }
          ],
       },
       "classification": "tradingpartner",
       "standard": "x12",
       "componentName": "Best Wholesaling",
       "componentId": "12345678-9abc-def0-1234-56789abcdef0",
       "folderName": "Home:TPs",
       "folderId": 11356
    }
    ```

    For a JSON response, send the request with the following HTTP header:

    `Accept: application/json`

    Response:

    The response contains the XML or JSON representation of the updated Trading Partner component.

-   **DELETE operation**

    Send an HTTP DELETE to:

    https://api.boomi.com/api/rest/v1/accountId/TradingPartnerComponent/id

    where *accountId* is the ID of the authenticating account for the request and id is the ID of the trading partner component you are attempting to delete.

    If you deleted the component successfully, the response is `<true/>`.

    For a JSON response, send the request with the following HTTP header:

    `Accept: application/json`

    If you deleted the component successfully, the response is `{true}`.


## SOAP implementation 

-   **GET operation**

    In this example, it retrieves the Trading Partner component with the ID 12345678-9abc-def0-1234-56789abcdef0.

    Request:

    ```
    <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"xmlns:api="http://api.platform.boomi.com/">
       <soapenv:Header>
          <wsse:Security
           xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">
            <wsse:UsernameToken wsu:Id="UsernameToken" xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">
              <wsse:Username>ATOMSPHERE_USER_NAME</wsse:Username>
              <wsse:Password Type="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText">ATOMSPHERE_PASSWORD</wsse:Password>
            </wsse:UsernameToken>
          </wsse:Security>
       </soapenv:Header>
       <soapenv:Body>
          <api:get>
             <api:objectType>TradingPartnerComponent</api:objectType>
             <api:objectId>12345678-9abc-def0-1234-56789abcdef0</api:objectId>
          </api:get>
       </soapenv:Body>
    </soapenv:Envelope>
    ```

    Response:

    ``` {#codeblock_qpj_xgs_s5b}
    <S:Envelope xmlns:S="http://schemas.xmlsoap.org/soap/envelope/">
       <S:Body>
          <bns:getResponse xmlns:bns="http://api.platform.boomi.com/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
             <bns:result xsi:type="bns:TradingPartnerComponent" folderId="120088" folderName="Home:TPs" componentId="12345678-9abc-def0-1234-56789abcdef0" componentName="Best Wholesaling" identifier="Best" standard="x12" classification="tradingpartner">
                <bns:ContactInfo>
                   <bns:contactName>Tom Miller</bns:contactName>
                   <bns:address1>127 Comstock Ave.</bns:address1>
                   <bns:address2/>
                   <bns:city>Philadelphia</bns:city>
                   <bns:state>PA</bns:state>
                   <bns:postalcode>19100</bns:postalcode>
                   <bns:country>United States</bns:country>
                   <bns:email>tom@bestwholesaling.com</bns:email>
                   <bns:phone>311 555-1926</bns:phone>
                   <bns:fax/>
                </bns:ContactInfo>
                <bns:PartnerInfo>
                <bns:PartnerInfo>
                   <bns:X12PartnerInfo>
                      <bns:X12Options envelopeoption="groupall" acknowledgementoption="donotackitem" filteracknowledgements="false" rejectDuplicateInterchange="false" outboundInterchangeValidation="true" outboundValidationOption="filterError">
                         <bns:elementDelimiter delimiterValue="stardelimited"/>
                         <bns:segmentTerminator segmentTerminatorValue="newline"/>
                      </bns:X12Options>
                      <bns:X12ControlInfo>
                         <bns:ISAControlInfo testindicator="P" ackrequested="false" authorizationInformationQualifier="X12AUTHQUAL_00" securityInformationQualifier="X12SECQUAL_00" interchangeIdQualifier="X12IDQUAL_01"/>
                         <bns:GSControlInfo respagencycode="T"/>
                      </bns:X12ControlInfo>
          </bns:X12PartnerInfo>
                </bns:PartnerInfo>
                <bns:PartnerCommunication>
                   <bns:FTPCommunicationOptions CommunicationSetting="custom">
                      <bns:SharedCommunicationChannel/> 
                      <bns:FTPSettings connectionMode="active" useDefaultSettings="false">
                         <bns:host>ftp.bestwholesaling.com</bns:host>
                         <bns:port>1010</bns:port>
                         <bns:user>tom.miller</bns:user>
                         <bns:FTPSSLOptions sslmode="none" useClientAuthentication="false"/>
                      </bns:FTPSettings>
                      <bns:FTPGetOptions transferType="ascii" ftpAction="actionget" useDefaultGetOptions="false">
                         <bns:remoteDirectory>/usr/local/bestwholesaling/outbox</bns:remoteDirectory>
                         <bns:fileToMove>*.xml</bns:fileToMove>
                         <bns:maxFileCount>200</bns:maxFileCount>
                      </bns:FTPGetOptions>
                      <bns:FTPSendOptions transferType="ascii" ftpAction="actionputappend" useDefaultSendOptions="false">
                         <bns:remoteDirectory>/home/tommiller/new</bns:remoteDirectory>
                         <bns:moveToDirectory>/home/tommiller/inbox</bns:moveToDirectory>
                      </bns:FTPSendOptions>
                   </bns:FTPCommunicationOptions>
                </bns:PartnerCommunication>
                <bns:PartnerDocumentTypes>
                  <bns:PartnerDocumentType typeId="101" profileId="23456789-abcd-ef01-2345-6789abcdef01" use999Ack="false" useTA1Ack="false" expectAckForOutbound="false" validateOutboundTransactionSets="false" qualifierValidation="true"/>
                  <bns:PartnerDocumentType typeId="810" profileId="3456789a-bcde-4012-3456-789abcdef012" use999Ack="false" useTA1Ack="false" expectAckForOutbound="false" validateOutboundTransactionSets="false" qualifierValidation="true"/>
                </bns:PartnerDocumentTypes>
             </bns:result>
          </bns:getResponse>
       </S:Body>
    </S:Envelope>
    ```

-   **QUERY operation**

    The QUERY operation returns each Trading Partner component that meets the specified filtering criteria. The operation does not return full component representations; it returns, for each result the:

    -   Component’s folder ID

    -   ID

    -   Name

    -   Standard

    -   Identifier

    -   Classification

    -   Communication methods

    The following example query returns the authenticating account’s X12 Trading Partner components.

    Request:

    ```
    <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:api="http://api.platform.boomi.com/">
       <soapenv:Header>
          <wsse:Security
           xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">
            <wsse:UsernameToken wsu:Id="UsernameToken" xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">
              <wsse:Username>ATOMSPHERE_USER_NAME</wsse:Username>
              <wsse:Password Type="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText">ATOMSPHERE_PASSWORD</wsse:Password>
            </wsse:UsernameToken>
          </wsse:Security>
       </soapenv:Header>
       <soapenv:Body>
          <api:query>
             <api:objectType>TradingPartnerComponent</api:objectType>
             <api:queryConfig>
                 <api:QueryFilter>
                    <api:expression operator="EQUALS" property="standard"
                          xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type="api:SimpleExpression">
                          <api:argument>x12</api:argument>
                    </api:expression>
                 </api:QueryFilter>
             </api:queryConfig>
          </api:query>
       </soapenv:Body>
    </soapenv:Envelope>
    ```

    Response:

    ``` {#codeblock_gbq_ndt_s5b}
    <S:Envelope xmlns:S="http://schemas.xmlsoap.org/soap/envelope/">
       <S:Body>
          <bns:queryResponse xmlns:bns="http://api.platform.boomi.com/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
             <bns:results numberOfResults="2">
                  <bns:result xsi:type="bns:TradingPartnerComponent" classification="tradingpartner" standard="x12" identifier="BEST-WH" componentName="Best Wholesaling" componentId="12345678-9abc-def0-1234-56789abcdef0" folderId="11356">
                     <bns:PartnerCommunicationTypes>ftp</bns:PartnerCommunicationTypes>
                  </bns:result>
                  <bns:result xsi:type="bns:TradingPartnerComponent" classification="mycompany" standard="x12" identifier="MY-X12" componentName="MyCompany="x12" componentId="fedcba09-8765-4321-fedc-ba0987654321" folderId="13340">
                     <bns:PartnerCommunicationTypes>ftp</bns:PartnerCommunicationTypes>
                  </bns:result>
             </bns:results>
          </bns:queryResponse>
       </S:Body>
    </S:Envelope>
    ```

-   **CREATE operation**

    The following example adds an X12 Trading Partner component with the FTP communication method.

    Request:

    ``` {#codeblock_b1x_2hs_s5b .code-java}
    
    <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:api="http://api.platform.boomi.com/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
       <soapenv:Header>
          <wsse:Security
           xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">
            <wsse:UsernameToken wsu:Id="UsernameToken" xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">
              <wsse:Username>ATOMSPHERE_USER_NAME</wsse:Username>
              <wsse:Password Type="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText">ATOMSPHERE_PASSWORD</wsse:Password>
            </wsse:UsernameToken>
          </wsse:Security>
       </soapenv:Header>
       <soapenv:Body>
          <api:create>
             <object xsi:type="api:TradingPartnerComponent" componentName="Best Wholesaling" classification="tradingpartner" standard="x12">
                <api:ContactInfo>
                   <api:contactName>Tom Miller</api:contactName>
                   <api:address1>127 Comstock Ave.</api:address1>
                   <api:address2/>
                   <api:city>Philadelphia</api:city>
                   <api:state>PA</api:state>
                   <api:postalcode>19100</api:postalcode>
                   <api:country>US</api:country>
                   <api:email>tom@bestwholesaling.biz</api:email>
                   <api:phone>311 555-3579</api:phone>
                   <api:fax>311 555-9753</api:fax>
                </api:ContactInfo>
                <api:PartnerInfo>
                   <api:X12PartnerInfo>
                      <api:X12Options envelopeoption="groupall" acknowledgementoption="donotackitem" filteracknowledgements="false" rejectDuplicateInterchange="false" outboundInterchangeValidation="true" outboundValidationOption="filterError">
                         <api:elementDelimiter delimiterValue="stardelimited"/>
                         <api:segmentTerminator segmentTerminatorValue="newline"/>
                      </api:X12Options>
                      <api:X12ControlInfo>
                         <api:ISAControlInfo testindicator="P" ackrequested="false" authorizationInformationQualifier="X12AUTHQUAL_00" securityInformationQualifier="X12SECQUAL_00" interchangeIdQualifier="X12IDQUAL_01"/>
                         <api:GSControlInfo respagencycode="T"/>
                      </api:X12ControlInfo>
                   </api:X12PartnerInfo>
                </api:PartnerInfo>
                <api:PartnerCommunication>
                   <api:FTPCommunicationOptions CommunicationSetting="custom">
                      <api:SharedCommunicationChannel/>  
                      <api:FTPSettings connectionMode="active" useDefaultSettings="false">
                         <api:host>ftp.bestwholesaling.com</api:host>
                         <api:port>1010</api:port>
                         <api:user>tom.miller</api:user>
                         <api:FTPSSLOptions sslmode="none" useClientAuthentication="false"/>
                      </api:FTPSettings>
                      <api:FTPGetOptions transferType="ascii" ftpAction="actionget" useDefaultGetOptions="false">
                         <api:remoteDirectory>/usr/local/bestwholesaling/outbox</api:remoteDirectory>
                         <api:fileToMove>*.xml</api:fileToMove>
                         <api:maxFileCount>200</api:maxFileCount>
                      </api:FTPGetOptions>
                      <api:FTPSendOptions transferType="ascii" ftpAction="actionputappend" useDefaultSendOptions="false">
                         <api:remoteDirectory>/home/tommiller/new</api:remoteDirectory>
                         <api:moveToDirectory>/home/tommiller/inbox</api:moveToDirectory>
                      </api:FTPSendOptions>
                   </api:FTPCommunicationOptions>
                </api:PartnerCommunication>
                <api:PartnerDocumentTypes>
                  <api:PartnerDocumentType typeId="101" profileId="23456789-abcd-ef01-2345-6789abcdef01" use999Ack="false" useTA1Ack="false" expectAckForOutbound="false" validateOutboundTransactionSets="false" qualifierValidation="true"/>
                  <api:PartnerDocumentType typeId="810" profileId="3456789a-bcde-4012-3456-789abcdef012" use999Ack="false" useTA1Ack="false" expectAckForOutbound="false" validateOutboundTransactionSets="false" qualifierValidation="true"/>
                </api:PartnerDocumentTypes>
             </object>
          </api:create>
       </soapenv:Body>
    </soapenv:Envelope>
    ```

    Response:

    The response contains the XML representation of the created Trading Partner component, including the:

    -   Assigned folder ID

    -   Component ID

    -   Certificate IDs \(the latter only if certificates are created\)

-   **UPDATE operation**

    You must use the componentId field.

    The following example overwrites the Trading Partner component shown in the previous GET and CREATE examples. As a result, it updates the:

    -   Name

    -   Email address

    -   Phone number

    -   Fax number of the trading partner’s contact person

    -   FTP user option

    -   Send option

    Request:

    ``` {#codeblock_hzp_p3s_s5b .code-java}
    
    <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:api="http://api.platform.boomi.com/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
       <soapenv:Header>
          <wsse:Security
           xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">
            <wsse:UsernameToken wsu:Id="UsernameToken" xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">
              <wsse:Username>ATOMSPHERE_USER_NAME</wsse:Username>
              <wsse:Password Type="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText">ATOMSPHERE_PASSWORD</wsse:Password>
            </wsse:UsernameToken>
          </wsse:Security>
       </soapenv:Header>
       <soapenv:Body>
          <api:update>
             <object xsi:type="api:TradingPartnerComponent" folderId="11356" folderName="Home:TPs" componentId="12345678-9abc-def0-1234-56789abcdef0" componentName="Best Wholesaling" classification="tradingpartner" standard="x12">
                <api:ContactInfo>
                   <api:contactName>Rachel Lewis</api:contactName>
                   <api:address1>127 Comstock Ave.</api:address1>
                   <api:address2/>
                   <api:city>Philadelphia</api:city>
                   <api:state>PA</api:state>
                   <api:postalcode>19100</api:postalcode>
                   <api:country>US</api:country>
                   <api:email>rachel@bestwholesaling.biz</api:email>
                   <api:phone>311 555-2468</api:phone>
                   <api:fax>311 555-8642</api:fax>
                </api:ContactInfo>
                <api:PartnerInfo>
                   <api:X12PartnerInfo>
                      <api:X12Options envelopeoption="groupall" acknowledgementoption="donotackitem" filteracknowledgements="false" rejectDuplicateInterchange="false" outboundInterchangeValidation="true" outboundValidationOption="filterError">
                         <api:elementDelimiter delimiterValue="stardelimited"/>
                         <api:segmentTerminator segmentTerminatorValue="newline"/>
                      </api:X12Options>
                      <api:X12ControlInfo>
                         <api:ISAControlInfo testindicator="P" ackrequested="false" authorizationInformationQualifier="X12AUTHQUAL_00" securityInformationQualifier="X12SECQUAL_00" interchangeIdQualifier="X12IDQUAL_01"/>
                         <api:GSControlInfo respagencycode="T"/>
                      </api:X12ControlInfo>
                   </api:X12PartnerInfo>
                </api:PartnerInfo>
                <api:PartnerCommunication>
                   <api:FTPCommunicationOptions CommunicationSetting="custom">
                      <api:SharedCommunicationChannel/>     
                      <api:FTPSettings connectionMode="active" useDefaultSettings="false">
                         <api:host>ftp.bestwholesaling.com</api:host>
                         <api:port>1010</api:port>
                         <api:user>rachel.lewis</api:user>
                         <api:FTPSSLOptions sslmode="none" useClientAuthentication="false"/>
                      </api:FTPSettings>
                      <api:FTPGetOptions transferType="ascii" ftpAction="actionget" useDefaultGetOptions="false">
                         <api:remoteDirectory>/usr/local/bestwholesaling/outbox</api:remoteDirectory>
                         <api:fileToMove>*.xml</api:fileToMove>
                         <api:maxFileCount>200</api:maxFileCount>
                      </api:FTPGetOptions>
                      <api:FTPSendOptions transferType="ascii" ftpAction="actionputappend" useDefaultSendOptions="false">
                         <api:remoteDirectory>/home/rachellewis/new</api:remoteDirectory>
                         <api:moveToDirectory>/home/rachellewis/inbox</api:moveToDirectory>
                      </api:FTPSendOptions>
                   </api:FTPCommunicationOptions>
                </api:PartnerCommunication>
                <api:PartnerDocumentTypes>
                  <api:PartnerDocumentType typeId="101" profileId="23456789-abcd-ef01-2345-6789abcdef01" use999Ack="false" useTA1Ack="false" expectAckForOutbound="false" validateOutboundTransactionSets="false" qualifierValidation="true"/>
                  <api:PartnerDocumentType typeId="810" profileId="3456789a-bcde-4012-3456-789abcdef012" use999Ack="false" useTA1Ack="false" expectAckForOutbound="false" validateOutboundTransactionSets="false" qualifierValidation="true"/>
                </api:PartnerDocumentTypes>
             </object>
          </api:update>
       </soapenv:Body>
    </soapenv:Envelope>
    ```

    Response:

    The response contains the XML representation of the updated Trading Partner component.

-   **DELETE operation**

    In this example, it deletes the Trading Partner component with the ID 12345678-9abc-def0-1234-56789abcdef0.

    Request:

    ```java
    <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:api="http://api.platform.boomi.com/">
       <soapenv:Header>
          <wsse:Security
           xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">
            <wsse:UsernameToken wsu:Id="UsernameToken" xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">
              <wsse:Username>ATOMSPHERE_USER_NAME</wsse:Username>
              <wsse:Password Type="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText">ATOMSPHERE_PASSWORD</wsse:Password>
            </wsse:UsernameToken>
          </wsse:Security>
       </soapenv:Header>
       <soapenv:Body>
          <api:delete>
             <objectType>TradingPartnerComponent</objectType>
             <objectId>12345678-9abc-def0-1234-56789abcdef0</objectId>
          </api:delete>
       </soapenv:Body>
    </soapenv:Envelope>
    
    ```

    Response:

    ```java
    <S:Envelope xmlns:S="http://schemas.xmlsoap.org/soap/envelope/">
       <S:Body>
          <bns:deleteResponse xmlns:bns="http://api.platform.boomi.com/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
             <successful>true</successful>
          </bns:deleteResponse>
       </S:Body>
    </S:Envelope>
    
    ```