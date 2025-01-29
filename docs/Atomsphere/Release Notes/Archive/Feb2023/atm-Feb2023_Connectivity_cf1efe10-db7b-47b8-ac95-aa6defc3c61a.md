# Connectivity 

<head>
  <meta name="guidename" content="Release Notes"/>
  <meta name="context" content="GUID-cf1efe10-db7b-47b8-ac95-aa6defc3c61a"/>
</head>

## Amazon EventBridge connector 

Fix:

-  A security vulnerability was identified in previous versions of the Apache Commons Text Library. With this feature, the Amazon EventBridge connector has adopted the current version 1.10.0 where the vulnerability is fixed. (CONC-1498)


## Boomi Flow Services Server connector 

Fix:

-   A Message Action call to an AtomSphere process that returned an Empty Document resulted in an invalid element at the root of the document error. With this fix, a response with NULL values is returned instead of an error. (FSS-2)


## Component chooser updates 

Legacy component choosers for certain connectors have been replaced with updated component choosers that take advantage of searching and recommendations where applicable. You'll find the updated component choosers in the following connectors:

-   Salesforce
-   HTTP Client
-   Atom Queue
-   SAP
-   QuickBooks
-   MQTT
-   FTP

\(INT-5664\)

## Coupa connector 

:::note

This feature was released off-cycle on January 25th, 2023.

:::

Feature:

-   The Coupa connector currently uses the soon-to-be deprecated Inventory Transactions API endpoint for pulling receipts. This endpoint has been replaced by five other endpoints: Receiving Transactions, Inventory Adjustments, Inventory Consumptions, Inventory Transfers, and Return to Supplier Transactions APIs. (CONC-1610)

To learn more about these features, see the topic [Coupa connector](/docs/Atomsphere/Integration/Connectors/r-atm-Coupa_connector_398e7796-e71d-407a-aea7-efab51ea4f92.md).


## Database V2 connector 

Fix:

-   A security vulnerability was identified in previous versions of the Apache Commons Text Library. With this fix, the Database V2 connector has adopted the current version 1.10.0 where the vulnerability is fixed. (CONC-1486)

## HTTP connector

Fix:

-   Updated the connector to use a new connector parent version \(23.02.1\) which uses updated jackson libraries. \(CON-6981\)


## NetSuite connector 

Fix:

-   The NetSuite SOAP API currently uses outdated version 2015.2; the oldest supported version is now 2016.1. With this feature, the connector has been updated to use 2022.1 as the default for new connections. Versions 2016.1 through 2022.1 will be listed as options in the version connection drop-down box. (CON-6699)


## IMAP connector 

Fix:

-   Resolved an issue where the file names of email attachments where corrupted when the Set property was selected for the Disk connector. With this fix, the IMAP connector will send the correct file name with attachments. (CON-2270)


## Laserfiche - Partner connector 

Feature:

-   New connector release to support integration between Laserfiche repositories and the Boomi Atomsphere platform. \(CON-7101\)


To learn more about this connector, see the topic [Laserfiche - Partner connector](/docs/Atomsphere/Integration/Connectors/r-atm-Laserfiche_connector_64a79214-e9ce-4dcb-8234-ce6183d23776.md).

## OpenAPI-based connectors

Boomi has released 130 new OpenAPI-based connectors as Tech Preview. These connectors are available on the AtomSphere platform in the Tech Preview category as well as on the open source BitBucket repository at: [https://bitbucket.org/officialboomi/workspace/projects/BCP](https://bitbucket.org/officialboomi/workspace/projects/BCP).

With the public access to the code as provided by the Boomi open source software program, developers can easily customize and integrate these connectors into their existing platform and workflow processes.

## OpenLegacy Generic connector 

Feature:

-   Added support for integration between legacy systems in the OpenLegacy Hub and the Boomi AtomSphere platform. \(CON-7005\)


To learn more about these features, see the topic [OpenLegacy Generic connector](/docs/Atomsphere/Integration/Connectors/OpenLegacy_connector_39974818-86c9-46b9-a76d-9481b436d674.mdx).


## Oracle Database connector 

Feature:

-   The latest iteration of the Oracle Database connector has been updated to support an array of new features. \(CONC-1457\)


To learn more about these features, see the topic [Oracle connector](/docs/Atomsphere/Integration/Connectors/int-Oracle_database_connector_2e42bb82-873a-4ec8-8d2d-3db821c0d9ec.md).


Fix:

-   A security vulnerability was identified in previous versions of the Apache Commons Text Library. With this fix, the Oracle connector has adopted the current version 1.10.0 where the vulnerability is fixed. (CONC-1487)



## Oracle Fusion Cloud connector 

**Deferred:** Subsequent to the February 2023 , release of this fix was postponed and will be rescheduled.

Fix:

-   Previously, the connector required a reimport of the profile whenever the connection details were modified. With this fix, the connector allows the modification of the connection details and offers the ability to utilize the connection extensions without the need for profile reimport. \(CONC-709\)




## SAP HANA Database connector 

Fix:

-  A security vulnerability was identified in previous versions of the Apache Commons Text Library. With this fix, the SAP HANA database connector has adopted the current version 1.10.0 where the vulnerability is fixed. (CONC-1497)



## Salesforce connector 

Fixes:

-   Updated the connector to use a new connector parent version \(23.02.1\). \(CON-7010\)



-   Updated the version of the jackson libraries that are pulled from the connector parent. \(CON-7010\)




-   Updated the `commonapachehttp` version to 0.9. \(CON-7033\)



-   Resolved an error where trying to create a Case object using BULK API v2 with an External ID resulted in data being shifted to the left in the output file. With this fix, the CSV output file headers match the data. (CON-3636)



## ServiceNow REST connector

Fix:

-   Resolved an issue where the filter operator was unavailable for certain numeric fields (Decimal, Floating Point Number, and Long) in the QUERY operation. With this fix, the filter operator is available for all numeric fields. (CON-3453)



## Snowflake connector 

Fixes:

-   Resolved an issue where running a process caused an unexpected call to metadata to be made. With this fix, the additional call to metadata will not happen. \(CONC-1098\)



-   Resolved an issue where no suitable drivers were found for the connector. The JBDC driver has been updated to version 3.13.25 to prevent this error. \(CONC-1076\)

-   Resolved an issue where concurrent Bulk load operations failed after referencing the incorrect stage path variable. With this fix, the correct stage path will be used with respect to each operation when running multiple Bulk Load operations. \(CONC-1289\)



-   Resolved an issue where concurrent Bulk unload operations failed after referencing the incorrect stage path variable. With this fix, the correct stage path will be used with respect to each operation when running multiple Bulk Load operations. \(CONC-1134\)




## SuccessFactors - Partner connector 

Fix:

-   Currently there is an issue where a cached OAuth token is cleared when there is a CookieCsrfPair cookie timeout. With this fix, the OAuth token is regenerated when the cached OAuth token is cleared due to a timeout. (CON-7031)


## QuickBooks Online connector 

Fix:

-   Resolved an issue where querying entity Item resulted in the wrong data output due to an unexpected version of the QuickBooks Online API being used. With this fix, the connector will now correctly point at minor version 14, providing access to capabilities added between the initial V3 release and the minor version 14 release. The output data may be adjusted because of this change, but it will reflect the profile that was imported into the connector. (CON-6643)



