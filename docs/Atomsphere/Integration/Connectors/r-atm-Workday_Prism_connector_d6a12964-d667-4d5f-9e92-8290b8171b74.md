import TrackedProperties from './_TrackedProperties.md'

# Workday Prism Analytics \(Tech Preview\) connector 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-d9a72f0a-ccb9-470d-8a0f-a4629d4d3d7b"/>
</head>


Workday Prism Analytics allows you to bring together your data \(Workday Prism Analytics and non-Workday Prism Analytics data\) from any source so you can prepare, analyze, and securely share it with your organization. You gain the insights that you need to drive better business decisions and outcomes. You can bring external data sources into Workday Prism Analytics, govern them along with existing Workday Prism Analytics data sources, and generate financial and HR insights that can be shared across your organization.

:::note

- This is an open source connector and you can access the code in the [Workday Prism Analytics](https://bitbucket.org/officialboomi/workday-prism) connector repository.

- To learn about support levels of Tech Preview connectors, see the topic [Feature Release Stages](../../Platform/atm-Feature_release_stages_00d83b66-e5db-4038-8398-fcaead4be12d.md).

:::

## Connector configuration 

Using the Workday Prism Analytics \(Tech Preview\) connector, you can use a Boomi Integration process to upload large data files to a Workday Prism Analytics dataset. To improve performance and efficiency, the connector breaks up the files into smaller chunks.

To configure the connector to communicate with Workday Prism Analytics, set up two components:

-   Workday Prism Analytics \(Tech Preview\) connection
-   Workday Prism Analytics \(Tech Preview\) operation

This design provides reusable components which contain connection settings and operation settings. After building your connection and operation, set up your connector within a process. When the process is defined properly, Integration can map to and from virtually any system using the Workday Prism Analytics \(Tech Preview\) connector to create a dataset, create a bucket to load files into a dataset, upload files to a dataset, and complete the bucket. The connector manages all of the steps to load big data into Workday Prism Analytics datasets.

## Prerequisites 

To use the connector and implement a connection to Workday Prism Anaytics from Integration, have the following information and access rights:

-   The URL to your Workday REST API service endpoint. You can find this endpoint in Workday using the View API Client task.
-   Your Workday client ID and secret. The client ID and secret are generated for you in Workday when you register the API client in your tenant using the Register API Client for Integrations task.
-   Your refresh token. You can generate a refresh token in Workday when you register the API client in your tenant using the Register API Client for Integrations task.
-   Have the appropriate access rights and permissions to create Workday Prism Analytics datasets using the Workday user interface. The API uploads are performed with this user.


<TrackedProperties />