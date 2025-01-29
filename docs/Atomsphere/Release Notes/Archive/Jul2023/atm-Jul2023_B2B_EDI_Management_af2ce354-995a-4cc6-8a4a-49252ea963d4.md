# B2B/EDI Management 

<head>
  <meta name="guidename" content="Release Notes"/>
  <meta name="context" content="GUID-af2ce354-995a-4cc6-8a4a-49252ea963d4"/>
</head>


**Features**:

-   The OFTP2 Communication Method configuration fields are extendable and can be set to different values during a process execution that uses an OFTP2 communication channel. \(B2B-2722\)

-   The HTTP Communication Method for a trading partner and the HTTP Client connector support HMAC-SHA256 and HMAC-SHA1 signature methods. \(B2B-2569\)

-   The Trading Partner and connector APIs support the following fields for MLLP:

    -   Send Timeout

    -   Receive Timeout

    -   Max Retry

    -   Fail on Timeout

    -   Use Persistent Connections

    -   Expire Timeout

    -   Max Pool Size

    -   Use Client SSL Authorization

    -   Client SSL Certificate

    -   Use Trusted SSL Certificate

    -   Trust SSL Server Certificate

    \(B2B-3063\)

-   Trading Partner components support the following fields when you configure an MLLP communication method:

    -   Use Trusted SSL Certificate

    -   Trust SSL Server Certificate

    -   Use Client SSL Authorization

    -   Client SSL Certificate

    \(B2B-3069\)

-   The following MLLP configuration fields are extendable for HL7 trading partners and the MLLP Client connector:

    -   Use Trusted SSL Certificate

    -   Trust SSL Server Certificate

    -   Use Client SSL Authorization

    -   Client SSL Certificate

    \(B2B-3170\)

-   Added additional tracked fields for message code, event type, and message structure to HL7 process reporting and also the ability to filter by message code, event type, and message control ID in Trading Partner Process Reporting. \(B2B-3094\)

-   You can choose whether to verify the host name with the Verify Hostname option in the AS2 settings for a communication channel, the AS2 Client connector, the AS2 Shared Server connector, and a Trading Partner component. \(B2B-3085, B2B-3086\)

-   The Verify Hostname option for the AS2 communication method is extendable and can be set to a different value during process execution. \(B2B-3087\)

-   The following fields are extendable and can be set to different values during process executions for an OFTP2 Client Connection:

    -   Destination Host
    -   Destination Port Number
    -   Session Level Encryption
    -   Require Secure Authentication
    -   Cipher Suite
    -   Use Client SSL Certificates
    -   Client SSL Certificate
    \(B2B-3295\)

-   You can use Ack Report and Ack Status as Document Properties for an HL7 connector in the following locations:

    -   Route step
    -   Decision step
    -   Notify step
    \(B2B-2935\)

-   You can configure multiple listenting ports on the MLLP Server Settings panel to use multiple protocol listeners concurrently. Each port may have its own TLS/SSL configuration, but all ports share the same server SSL certificate. \(B2B-2933\)
-   Security updates for the OFTP2 connectors. \(B2B-3329\)

**Fixes**:

-   Removed ODETTE from all connector selection lists that aren't part of the Trading Partner framework in the Boomi Enterprise Platform. \(B2B-2315\)

-   Resolved an issue where the Client SSL Certificate configured for an OFTP2 Communication Method in an ODETTE trading partner was not deploying when the process was executed. \(B2B-3174\)

-   Validation warnings in OFTP2 Communication Method fields no longer disappear when the dialog is closed and then reopened. \(B2B-3254\)

-   Corrected the spelling of "acknowledgment" in ackReport values for HL7 messages. \(B2B-3043\)

-   Resolved an issue where, in some cases, in an HL7 connector, the MSH segment created for a document was using the 2.7 MSH message structure regardless of the version that was selected. \(B2B-3065\)

-   If the Filter Functional Acknowledgments option is selected in a Trading Partner component, inbound HL7 messages that are not batched are no longer forwarded to the document path. \(B2B-3146\)

-   In the MLLP configuration settings, that Expire Timeout and Max Pool Size options no longer display if Use Persistent Connections is not selected. \(B2B-3160\)

-   Added templates for ORM-O01 and ORR\_O02 messages for versions 2.3 and 2.3.1 for all five message structures in the HL7 standard. Also, template descriptions are clarified, invalid message types are removed, and Event Type, Message Code, and Message Structure are available as fields in an EDI profile. \(B2B-2610\)

-   Removed invalid document types from the Document Types list for the HL7 standard. \(B2B-3036\)

-   Resolved an issue where connections were reused for outbound AS2 messages after sending the HTTP Connection: close header. \(B2B-2653\)

-   Resolved an issue that caused the OFTP2 Server to fail while processing an uncompressed file. \(B2B-3367\)
-   Added help text to field labels for Trading Partner components that use the RosettaNet standard. \(B2B-730\)
-   Resolved an issue where invalid values were generated for some RosettaNet Version Information fields when a RosettaNet profile was being imported. \(B2B-2612\)
-   Resolved an issue where the OFTP2 Server would not start due to missing libraries. \(B2B-3326\)
-   Resolved an issue where the From Trading Partner and To Trading Parter filters were not working for RosettaNet in the Process Reporting Trading Partner view. \(B2B-3233\)
-   Added validation and descriptive error messages for the dynamic document property RNET\_ATTACHMENT\_CONTENT\_ID, which is required to be a unique value. \(B2B-2519\)
-   There is a patch available for the HL7 connector to fix issues resulting from B2B-3065 that affect data elements of the following segments and versions:

    -   MSH 2.3.1
    -   BHS and MSH 2.1
    -   MSH 2.4
    -   BHS and MSH 2.6
    -   ERR 2.7
    
    You must contact Boomi Support to receive version 23.07.1 of the HL7 connector. \(B2B-3423\)