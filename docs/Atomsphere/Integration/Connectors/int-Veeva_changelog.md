# Veeva changelog

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-d841006e-da80-4549-8d82-eb30c1585a72"/>
</head>


## Changelog

**2023-07 (Version 5, Current)**

- The Veeva connector is now in General Availability (GA).

- A new object type, **Extract Data Files**, to export multiple files at once from your vault in the **Execute** operation. You can upload these files to another vault or different system altogether.

- A new object type, **Load Data Objects**, to upload multiple files at once to your vault in the **Execute** operation.

- The **Delete** operation is no longer available for this connector; it was moved to the **Execute** operation.

- The **Get** operation is no longer available for this connector; it was moved to the **Execute** operation.

- The **QUERY** operation was renamed to **Query Vault**.

**2023-06 (Version 4)**

- The default version for Veeva operations was updated to v23.3.

- A new optional field, **idParam**, under Delete Object Records in the Create/Upsert Vault operation.

- The Create / Upsert Vault and Update Vault operations were updated to send JSON files to Veeva instead of CSV files.

- The JSON to CSV file conversion for the Create / Upsert Vault and Update Vault operations was updated to handle comma separators correctly and prevent malformed CSV files from being sent to Veeva.

**2024-04 (Version 3)**

- You can update the names and locations of folders and files in the Veeva Vault File Staging Server with the Update operation.

- You can delete folders and files in the Veeva Vault File Staging Server with the Delete operation. 

- You can authenticate your Veeva account using OAuth 2.0 / Open ID Connect token to obtain a Vault Session ID that is used by the Connector to authenticate subsequent API calls.

- A new optional connection field, **Client ID**, adds headers to Veeva API calls. If the field is empty, the default **ClientID** is `Boomi`.

- The Veeva API Server field when authenticating your Veeva account has been replaced by three new connection fields: Vault Subdomain, Vault DNS, and API Version. The default Vault Subdomain and Vault DNS is `{vault_subdomain}.veevavault.com`. The default API version is v.23.3, the current Veeva REST API GA version.

- A new operation field and checkbox: **API Version** and **Override API Version**, respectively. When **Override API Version** is selected, the operation field will override any version dictated in the connection field.

- When the Vault Authentication API burst limit is exceeded, the connector waits 60 seconds before retrying once. This retry mechanism is only available when you use the **User Credentials** authentication type.

**2024-01 (Version 1)**

- Initial release