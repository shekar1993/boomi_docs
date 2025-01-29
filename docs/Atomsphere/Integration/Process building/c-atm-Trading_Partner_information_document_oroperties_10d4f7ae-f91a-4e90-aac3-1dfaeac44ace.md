# Trading Partner information document properties

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-10d4f7ae-f91a-4e90-aac3-1dfaeac44ace"/>
</head>


Use Trading Partner information properties to retrieve values related to a document framework.

Trading Partner information properties represent various values related to a document framework, such as X12 EDI, including sender/receiver ID, ISA control number, etc. These properties are set automatically by the Trading Partner components configured in the Start step and are primarily used only for retrieval. For example, if you have a process that receives documents from multiple trading partners, you could inspect the "Sender ID" property to route or map individual documents accordingly. Or if you have documents coming from an inbound X12 or HL7 Trading Partner step, you could use a Route step or a Decision step to check the “Message Is Valid” property to determine whether the document passed or failed schema validation.

Although you can technically set outbound trading partner information property values, you should use a Trading Partner step instead to take advantage of the reusable configuration and acknowledgment handling.

The following list shows the types of document properties supported by each document standard:

-   Custom EDI

    -   Interchange document properties:

        -   Sending Partner — ID of the sending trading partner component

        -   Receiving Partner — ID of the receiving trading partner component

-   EDIFACT

    -   Interchange document properties

    -   Functional Group document properties

    -   Message document properties

-   HL7

    -   Message document properties

-   ODETTE

    -   Interchange document properties

    -   Message document properties

-   RosettaNet

    -   Message document properties

    Except where noted here, properties are applicable to both RosettaNet v2.0 and v1.1.

    These properties are applicable only to RosettaNet v2.0:

    -   Is Secure Transport Required

    -   Known Initiating Partner Domain

    -   Known Initiating Partner Location

    These properties are applicable only to RosettaNet v1.1:

    -   Global Process Code

    -   Global Document Function Code

    -   Process Instance Identifier

    -   Attempt Count

    -   Sender Global Partner Classification Code

    -   Receiver Global Partner Classification Code

    -   Time To Acknowledge Acceptance

    -   Time To Acknowledge Receipt

    -   Time To Perform

:::note

For cases in which the known initiating trading partner for a document is different than the sending trading partner, set the following document properties:

-   Known Initiating Partner ID

-   \(RosettaNet v2.0 only\) Known Initiating Partner Domain

-   \(RosettaNet v2.0 only\) Known Initiating Partner Location

These property values are used to populate the corresponding fields in the service header in the outbound document or acknowledgment document only if the Known Initiating Partner ID property is set. Otherwise, the sending trading partner information is used to populate those fields.

Of those three properties, only Known Initiating Partner ID is accessible in Process Reporting.

The Signal Version property is not accessible in Process Reporting.

:::

:::note

The document property Is Secure Transport Required defaults to Yes if the property is either not set or is set to a value other than Yes or No.

:::

:::note

The time period format for values of the document properties Time To Acknowledge Acceptance, Time To Acknowledge Receipt, and Time To Perform is CCYYMMDDThhmmss.sss, preceded by an optional sign \(+ or -\), where

-   CC — centuries

-   YY — years

-   MM — months

-   DD — days

-   T — literal date/time separator

-   hh — hours

-   mm — minutes

-   ss.sss — seconds and milliseconds, separated by a literal decimal point

For example, a value of 00000000T003000.000 denotes 30 minutes.

:::

-   Tradacoms

    -   Interchange document properties

    -   Message File document properties

-   X12

    -   Interchange document properties

    -   Functional Group document properties

    -   Transaction Set document properties