# Connectivity 

<head>
  <meta name="guidename" content="Release Notes"/>
  <meta name="context" content="GUID-38e97d1a-d1ba-4093-ba5b-aa0809ecfce1"/>
</head>





## Aible AI - Partner connector

Features:

-   Two new operations to create datasets for AI analysis in Aible:

    -   `CREATE` - creates a complete dataset in Aible using the documents one execution of a process.
    -   `SEND` - incrementally builds a dataset in Aible Y-writing documents and passing them through unchanged, allowing the Aible component to be dropped transparently into any existing process.
-   Simplified authentication using Aible login credentials.
-   Aible connections can be reused to connect to different projects and tenants.

\(CON-7328\)



To learn more, see the topic [Aible AI - Partner connector](/docs/Atomsphere/Integration/Connectors/int-Aible_connector_b2c80ebe-82f6-4130-b9ad-10b5183e0da3.md).

## Boomi aXis for SAP connector 

Features:

-   When sending iDocs to SAP, the return xml now has a profile containing the generated iDoc number.



-   In the iDoc Send Import wizard, iDoc extensions are now supported.






\(CON-7121\)

To learn more, see the topic [Boomi aXis for SAP connector](/docs/Atomsphere/Integration/Connectors/int-SAP_Axis_connector_d3188761-2073-49f6-81e3-a4062cec171e.md).

## Ceres Technology - Partner connector 

Feature:

-   New connector release to support the integration between Ceres Technology and the Boomi Enterprise Platform. \(CON-7347\)





To learn more, see the topic [Ceres Technology - Partner connector](/docs/Atomsphere/Integration/Connectors/r-atm-Ceres_Tech_connector_5a328f60-ba7e-4f63-8041-58527fb5212f.md).

## Database V2 connector 

Fixes:

-   Resolved an issue where using the GET operation in the Database V2 connector returned incorrect values for data containing NULL values in the database. With this fix, while retrieving any numeric data type columns from the database, the result contains:

    -   The database column name and its value, if the stored value is not NULL.

    -   The database column name and its value as NULL, if the stored value is NULL.

:::note

Previously NULL values for numbers are output as zero. With this fix, the output will be "NULL".

:::

 \(CONC-1501\)

 



-   Resolved an issue where using the database in built functions in the SQL query to concatenate multiple columns was returning an output with only a single blank space separating the columns. With this fix, multiple blank spaces are now separating the returned concatenated columns. \(CONC-1525\)





-   Resolved an issue where using a standard GET operation and SQL query with named parameters and parentheses threw the error `'1062] Incorrect syntax near '@P2'`. To avoid this, the closed right parentheses, which was getting dropped in the code, was appended. With this fix, a standard GET operation along with SQL query with named parameters and parentheses, works as expected. \(CONC-1526\)




-   Resolved an issue where the Database V2 connector was not accepting NULL for all input parameters for stored procedures. With this fix,

    -   All valid parameters return valid responses from the Stored Procedure Operation call.

    -   The stored procedure will accept NULL for input parameters that can accept a NULL value.

    \(CONC-1537\)

    



To learn more, see the topic [Database V2 connector](/docs/Atomsphere/Integration/Connectors/int-Database_V2_connector_7b04dbdd-ef36-4a2f-b6ff-b038b3f60ff2.mdx).

## Files.com - Partner connector 

Fix:

-   Fixed the file upload operation. \(CON-7360\)




To learn more, see the topic [Files.com - Partner connector](/docs/Atomsphere/Integration/Connectors/r-atm-Files_connector_233ee8d5-7738-4ed7-86a1-37c85563592c.md).

## IFS REST - Partner connector 

Feature:

-  Entity Service API is a feature introduced in IFS Cloud 23R1 that exposes Entity Data Models directly as REST endpoints. When an Entity Service API is in active state in IFS cloud, it will be accessible in the IFS REST - Partner connector. This change is backward compatible and supports any IFS version. Note that access to the Entity Service APIs is governed by IFS API usage policy. (CON-7425)


Fix:

-   Resolved an issue where the connector was unable to generate the response in the correct structure when the response of a function contains an array. \(CON-7425\)

:::note

Subsequent to the May 2023 Platform release, the previous fix was postponed and will be rescheduled for a future release. Users of this connector should use version 308.

:::




-   Improved runtime performance by reducing the number of internal HTTP requests issued to fetch entity details. Entity metadata are fetched once and stored in a cookie for subsequent use. \(CON-7425\)


To learn more, see the topic [IFS REST - Partner connector](/docs/Atomsphere/Integration/Connectors/int-IFS_REST_Connector_e7e1c825-992f-42f8-a41d-f29f8b4992ea.md).

## OpenLegacy Hub - Partner connector 
Feature:

-   Added support for integration between legacy systems in the OpenLegacy Hub and the Boomi AtomSphere platform. \(CON-7005\)




To learn more about these features, see the topic [OpenLegacy Hub - Partner connector](/docs/Atomsphere/Integration/Connectors/OpenLegacy_connector_39974818-86c9-46b9-a76d-9481b436d674.mdx).

## Solace PubSub+ - Partner connector 

Fix:

-   Fixed a Listener performance issue. \(CON-7462\)





To learn more, see the topic [Solace PubSub+ - Partner connector](/docs/Atomsphere/Integration/Connectors/int-Solace_PubSub_connector_b38dbd64-539a-40f5-854b-1efd40b4477d.md).

## Ubix - Partner connector 
Feature:

-   New connector release to support the integration between UBIX Advanced Analytics and the Boomi Enterprise Platform. \(CON-7450\)





To learn more, see the topic [Ubix Advanced Analytics - Partner connector](/docs/Atomsphere/Integration/Connectors/int-Ubix_connector_ccb8007a-f4ab-44ea-985b-8d82bbc26c5a.mdx).

