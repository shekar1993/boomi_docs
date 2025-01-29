# Snowflake changelog

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-593d86bb-c9ea-45b0-ab46-707bb42fd8c0"/>
</head>


## Changelog

**2025-01 (Version 25, Current)**

- Enhanced the connector to support **Database** and **Schema** via **operation properties**, which can be overridden using the **Dynamic Operation Properties**.

- Improved flexibility with **Truncate** functionality. If the same **Database** and **Schema** combination is repeated for the documents, truncation is performed only once per combination, eliminating redundant truncations for each file.

**2024-09 (Version 24)**

- Enhanced the Snowflake connector so that the Bulk Unload operation properties (S3 Bucket Name, AWS Region, and Internal Stage Name) are overridden via dynamic operation property.

- Enhanced the Snowflake connector so that the Bulk Load operation properties (S3 Bucket Name, AWS Region, Internal Stage Name, and Internal Source File Path) are overridden via dynamic operation property.

- Vulnerability issue of type Denial of Service was resolved to make the connector more secure.

**2024-08 (Version 22)**

- Upgraded the connector SDK to version 2.18.2.

**2024-07 (Version 21)**

- The connector successfully supports **Create** action for multiple documents having different missing fields when **Input Options for Missing Fields** field configured with the **Snowflake defaults for empty fields** option and Batch Size set to one.

- Vulnerability issue of type Denial of Service was resolved to make the Connector more secure.

- Fixed multiple critical and major code quality issues for the Snowflake connector.

- Number of SnowSQL Statements tool tip was updated to make it more informative. While Batch Size was updated for getting query results.

**2024-06 (Version 20)**

- Heap memory usage complies with acceptable standards, resulting in successful execution processes.

**2024-04 (Version 19)**

- Supports applying multiple filters on the same column, enabling the querying of data within a specified range, based on the column. For example, retrieving data between two dates.

- The document Tracking Direction option for the Bulk Unload is updated to Output Documents, by default.

- The Snowflake connector supports the key pair authentication mechanism using OpenSSL for generating public/private keys. Backward compatibility is also ensured to support older OpenSSL versions, those are:
  - OpenSSL 0.9.8h
  - OpenSSL 1.1.1v 
  - OpenSSL v3.x.

- Snowflake connector is able to connect using the key pair authentication mechanism and generates private/public keys using the python cryptography "RSA" function within the asymmetric library.

**2024-02 (Version 18)**

- When one of the documents (without batching) failed at the SnowSQL operation, then all documents were being failed and moved to the Catch path. Now, all documents are correctly labeled as successful or failed.
- The Snowflake Connector Class code was not loading the JDBC Driver class correctly with Java 1.8.
- The Snowflake Bulk Load operation was not accepting the **Other Format Options** value for the CSV file format.