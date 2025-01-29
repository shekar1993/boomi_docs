# Snowflake connector

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-f551004c-1429-4fe1-85c1-b345d37ab73c"/>
</head>


The Snowflake connector allows you to leverage the capabilities of a Snowflake data warehouse i.e. speed, usability, and flexibility.

This connector is a key part of the Integration process that makes it easy to work with Snowflake, one of the fastest growing cloud data management platforms.

:::info Warning

The Snowflake connector is supported on the Boomi Local Atom, Molecule and Private Atom Cloud. The Snowflake connector is not supported on the Boomi Public Cloud.

:::

:::note

- This is an open source connector and you can access the code in the [Snowflake](https://bitbucket.org/officialboomi/snowflake) connector repository.

- When using the Snowflake connector in a Private Atom Cloud, make sure to update its **[Properties](../Integration%20management/r-atm-Properties_panel_6dcdbe36-55bc-4e39-acad-c938d6b653b0.md) – Advanced** configuration to include the “Security Policy” as Low. For more details, refer to the topic [Security policies for Clouds and Molecules](../Integration%20management/c-atm-Security_policies_for_Clouds_and_Molecules_19d244bf-2cab-45a8-8d8e-49ebde3eddc7.md).

:::

## Connector configuration

To configure the connector to communicate with the Snowflake tenant, set up the following components:

-   Snowflake connection
-   Snowflake operation

This approach provides reusable components, which contain connection settings such as username, password, etc. After building your connection and operation, set up your connector within a process. When you have properly configured your connector within your process, Integration can map to and from virtually any system using the Snowflake connector to query, create, update and/or delete data.

## Supported editions

The Snowflake connector is now packaged with the Snowflake JDBC driver version 3.13.25.

:::info Attention

If you encounter any issue as JDBC driver not recognized, then try deploying the driver into Integration Account Library. To do this:

1.  Download a Snowflake JDBC driver. This is a JAR file (`snowflake-jdbc-#.#.#.jar` – where `#.#.#` is the JDBC driver version number). To download the driver, see the [Downloading the Driver](https://docs.snowflake.com/en/user-guide/jdbc-download.html) topic in the Snowflake documentation. The Snowflake JDBC driver requires a 64-bit Boomi​ runtime using Java 1.8 \(or higher\).

2.  Deploy the JDBC driver by uploading the JAR file into Integration​ Account Library \(Setup \> Account Libraries\). Then, create a Custom Library component that referenced that file and set the ‘Custom Library Type’ to type ‘Connector’ and the ‘Connector Type’ to ‘Snowflake’. Finally, deploy the Custom Library to the appropriate Atom or Molecule environment\(s\).

If you face any error in the driver deployment, manually copy the driver (`snowflake-jdbc-x.xx.x.jar`) to the runtime userlib directory, restart the runtime, and try again. Contact support, if required.

:::

The uploaded or imported files are first passed through a virus scanner. If any virus detected, the upload or import will result in an error, and the file will be rejected. Contact Boomi Support, if error persists.

## Limitations

The Snowflake connector has the following limitations:

-   SnowSQL operation —
    -   When batch size is greater than 1, the update count for each statement cannot be retrieved. However, [Snowflake-specific Behaviour](https://docs.snowflake.com/en/user-guide/jdbc-api.html#id21) can be used to return the Query ids to the user which were executed in the batch. The user can then track them back in snowflake.
    -   When batch size is greater than 1 and DQL statement is presented in the SQL script as the first statement, an exception is thrown with error code : `net.snowflake.client.jdbc.ErrorCode.UPDATE_FIRST_RESULT_NOT_UPDATE_COUNT`. However, this exception can be ignored as this cannot prevent the execution of the SQL script.
-   Create operation with **Snowflake defaults for empty fields** option — Batching is not supported.
-   In the JSON Schema data type mapping, only the data types are mapped and not the format. Hence, for seamless execution of the process, make sure to set the required format manually in the request and/or response profile. For example,

    -   **Float data type with two precision and two scale** - In the profile, set the format as `##.##`.
    -   **Date/Time, Date, Time data type** - If AUTO option is selected to use the custom date, time and date/time format, make sure to manually set the required date and/or time format manually in the profile.

    :::note
    
    To apply this data type mapping, perform the profile reimport in the existing integration process. Otherwise, the existing profiles will continue to use old data type mapping \(mapping all Snowflake data type to Boomi characters\).

    :::

-   All input request documents \(Create, Update, Execute, and SnowSQL\) must not exceed 1 MB. Only one request can be provided to the connector at a time. If required, use Bulk Operations to handle large volume of data.

:::info Warning

For the Snowflake connector, the Query Text Size (i.e., SnowSQL) should not exceed 500 KB.

:::

## Prerequisites

The following prerequisites are necessary to implement a connection to your Snowflake account:

-   An Atom deployed on your local machine or hosted with Boomi Integration.
-   Java environment variables on your system, such as `JAVA_HOME, CLASSPATH`.
-   Necessary authorization to access database.
-   Connection URL of the Snowflake server.
-   One of the following authentication types:
    -   Username and Password
    -   Using Private Key and Passphrase
-   Boomi Integration Username and Password with the necessary credentials.
-   Amazon S3 access, secret keys, bucket details with the following permissions on the S3 bucket to access files in the folder \(and sub folders\):
    -   s3:GetObject
    -   s3:GetObjectVersion
    -   s3:ListBucket
    -   s3:ListAllBuckets

:::note

-   These fields are optional and applicable only when you are using the Amazon S3 external storage.
-   The additional s3:PutObject and s3:DeleteObject permissions are required if you plan to unload files to the bucket or automatically purge the files after loading them into a table.

:::

## Tracked properties

This connector has the following tracked properties that you can set or reference in various step parameters:

-   SnowSQL – Refers to the SnowSQL script containing the SnowSQL command you want to execute.
