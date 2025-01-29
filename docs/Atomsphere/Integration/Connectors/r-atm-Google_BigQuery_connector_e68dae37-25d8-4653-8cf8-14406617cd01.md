# Google BigQuery connector 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-14038e60-35d0-434d-9a88-106ceec97136"/>
</head>


Use the Google BigQuery connector to stream and insert incremental structured data into Google BigQuery.

After streaming and inserting your data, you can do the following:

-   Run a job to query against the data in Google BigQuery.

-   Retrieve the results of a query against the data from the Run Job operation.

-   Update a Google BigQuery table and view.


Google BigQuery is a fully-managed enterprise analytics data warehouse used to store all of your data. You can run SQL queries to analyze terabytes of data in seconds and petabytes in minutes to find useful insights. The data is analyzed in real-time. You can easily load, process, and make interactive visualizations of your data.

## Connector configuration 

To configure the connector to communicate with Google BigQuery, set up two components:

-   Google BigQuery connection. This connector uses the OAuth 2.0 protocol for authentication and authorization, and you can use the *JSON Web Token \(JWT\) Bearer Token* and *Authorization Code* grant types for client authentication.

-   Google BigQuery operation \(Streaming Insert, Run Job, Get Query Results, Update, Upsert Data\)


This design provides reusable components, which contain connection settings and operation settings. After building your connection and operation, set up your connector within a process. When you configure the Google BigQuery connector correctly within your process, can map to and from virtually any connected application using the Google BigQuery connector to:

-   Stream and insert data into Google BigQuery

-   Run a job to manipulate the data

-   Run a SQL query

-   Update a view


## Supported editions 

The connector supports the Google BigQuery API version 2. For more information, see the linked resources.

## Prerequisites 

To use the connector and implement a connection to your Google Cloud Platform account from , have the following information available:

-   The Google Cloud Platform project ID used for billing. Make sure to enable billing for your project. You can find your project ID by going to the Google Cloud Platform console and selecting **Manage all projects** from the projects list. The names and IDs for all the projects you are a member of appear.

-   When using the *JWT Bearer Token* grant type for client authentication, have your signature key and identify your issuer and subject.

    :::note

    The scope is automatically set as an extended JWT claim. Do not change the extended claim, and also ensure that the Scope field is empty. You create the signature key using the Google Cloud Platform console and import it into . You find the issuer and subject in the Google Cloud Platform console \(**Service account details** page\).

    :::

-   When using the *Authorization Code* grant type for client authentication, have your Google Cloud Platform client ID, the client secret from when you created your project, and your scope.

    :::note

    Copy and paste the scope into the **Scope** field from the help \(click the **Information** button\). Verify that you separate each entry in the scope by a single space.

    :::

## Tracked properties

This connector has no predefined tracked properties. See the topic [Adding tracked fields to a connector operation](../Process%20building/t-atm-Adding_tracked_fields_to_a_connector_operation_f71821dd-95ee-4ebd-bfc9-3333262f56f6.md) to learn how to add a custom tracked field.

