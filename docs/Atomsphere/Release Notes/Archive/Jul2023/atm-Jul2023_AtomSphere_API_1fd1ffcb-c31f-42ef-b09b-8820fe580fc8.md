# Platform API and Partner API

<head>
  <meta name="guidename" content="Release Notes"/>
  <meta name="context" content="GUID-1fd1ffcb-c31f-42ef-b09b-8820fe580fc8"/>
</head>


Platform API and Partner API features and fixes are not in the Runtime Release.

**Features:**

-   You can Query the OFTP2 Connector Record object to receive OFTP2-specific document information and tracked field information along with other fields that correspond to the Process Reporting page. \(B2B-2961\)

    To learn more about this feature, see the topic [OFTP2 Connector Record object](https://developer.boomi.com/api/platformapi#tag/OFTP2ConnectorRecord).

-   You can use the Shared Communication Channel Component object to Get, Create, Update, Delete, or Query an OFTP2 communication channel. \(B2B-2955\)

    To learn more about this feature, see the topic [Shared Communication Channel component object](https://developer.boomi.com/api/platformapi#tag/SharedCommunicationChannelComponent).

-   You can use the Trading Partner Component object to Get, Create, Update, Delete, or Query trading partners with OFTP2 communication channels. \(B2B-2725\)

    To learn more about this feature, see the topic [Trading Partner component object](https://developer.boomi.com/api/platformapi#tag/TradingPartnerComponent).

-   You can include the verifyHostname attribute in the AS2SendSettings section of the Trading Partner Component object and Shared Communication Channel Component object for the Get, Create, and Update operations. \(B2B-3096\)

    To learn more about this feature, see the topics [Trading Partner component object](https://developer.boomi.com/api/platformapi#tag/TradingPartnerComponent) and [Shared Communication Channel component object](https://developer.boomi.com/api/platformapi#tag/SharedCommunicationChannelComponent).


**Fixes:**

-   Corrected the error in documentation that states that AtomSphere API supports the Cancel Execution operation. This operation is supported only by the Partner API. \(DOC-2177\)

    To learn more about this fix, see topic: [../../Integration/AtomSphere%20API/r-atm-Cancel\_execution\_operation\_c9579790-f637-4414-ab83-d9d874ce9ffd.md](https://developer.boomi.com/api/platformpartnerapi#tag/Cancel-execution-operation)

-   We fixed the **Container Analytic's** job issue causing **Splunk** logs to timeout. \(INT-3545\)
-   We corrected the issue where the Update Environment extension API, for connection extensions, did not override blank fields when the useDefault flag was set to “false/true”. Now, based on your value for useDefault flag, the blank value is properly overridden with your UPDATE request. \(INT-5589\)
-   We corrected the Atom Queue and MQTT connectors to save the component with ONLY Dependent type reference for Packaging and Deployments. \(INT-7495\)
-   We corrected the “Premature EOF” error caused while fetching Execution Records when using API connectors. \(INT-7517\)
-   We corrected the issue where the Update Environment extension API was failing when the Process Property data type changed from a string value to a boolean value. \(INT-8162\)
-   We corrected the error where log statements were printed according to the number of documents present in the Process Call step. Statements now print per each Process Call step, not per every document in it, when the process with Start step has No Data and Process Call Start step has Data Passthrough. \(INT-9147\)