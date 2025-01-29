# Google BigQuery changelog 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-560c7412-ba5b-454f-8d3e-52e7a9d872b0"/>
</head>

## Changelog

**2025-01 (Version 25.01.1, Current)**

- The Google Big Query connector now supports **Dataset ID** as a dynamic operation property for the **UPDATE** action.

- If the Update action is on a static table, the **Dataset ID** can be overridden using a dynamic operation property. If the Update action is on a **Dynamic Table**, the **Dataset ID** will be dynamically provided via a JSON input request.

**2024-08 (Version 24.08.1)**

- The Google BigQuery connector has been updated to include agent attribution data identifying Boomi in the header as **User-Agent = Boomi Enterprise Platform/1.0 (GPN:Boomi;)** when performing Streaming Insert, Run Job, Update, Upsert Data, and Get Query Results actions.

**2024-06 (Version 24.06.1)**

- The Dataset ID is available as a dynamic operation property when using the Streaming Insert and Upsert actions.

- The connector uses the resumable API to resume an upload operation after a communication failure has interrupted the flow of data.

**2024-05 (Version 24.05.2)**

- During the Upsert action, the location ID operation property can be set dynamically.

**2024-04 (Version 24.04.7)**

- The Browse functionality for Run Job, Update and Upsert actions import the request and response profiles successfully and has Custom and Default options available in the dropdown.

- The Upsert operation populates the location ID field with the value available in the Google BigQuery table metadata.

- Support for nested and repeated columns, while using the Upsert action in JSON format with the Google BigQuery connector.

**2024-02 (Version 24.02.0)**

- During the `Import` for the `Upsert` operation, **Use Legacy SQL** is now unchecked by default.

**2024-01 (Version 24.01.0)**

- Browse functionality successfully creates profiles for Run job and Upsert operations for all object types including objects that contain type "any".

**2023-11 (Version 23.11.0)**

- A Denial of Service (DoS) vulnerability was resolved to make the Connector more secure.

- Necessary runtime packages are now packaged with the connector.

- Overridable fields now include Access Token parameters, Authorization parameters, and Extended JWT Claims (if supported by the connector).

**2023-10**

- Necessary runtime packages are now packaged with the connector.

- The connector errored out and was unable to parse the array type response elements along with non-array elements.

- User was unable to access a dataset and perform DML operations from another project accessible from GCP when the connector was configured for a particular project. User can now specify a Project Id, in the Project ID Override field, that is used in the subsequent steps of the connector operation else Project Id specified in the connection properties is considered as default.