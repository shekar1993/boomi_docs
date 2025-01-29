# Table Service

<head>
  <meta name="guidename" content="Boomi for SAP"/>
  <meta name="context" content="GUID-4941bbc1-9e51-41c5-a433-c0879215b4c2"/>
</head>

The Table Service feature enables the creation of REST services based on tables and views in SAP. With the Table Service, you can query, filter, sort, and page the REST services.

Additionally, you can configure the Table Services to expose all or selected fields in the table view, including CDS views based on the use case. For large loads (1000s of records), users should utilize Table Services with the Table Service Extracts feature, which offers batching.

Use case examples:

- Synchronize master data
  - Develop a REST service with SAP product data that businesses can use to update other applications with the latest product data in scheduled integrations.
- Expose up-to-date data
  - Develop a REST service that provides SAP stock data and allows other applications to request it on demand.
- Expose modeled data
  - Create a REST service of customer data based on an SAP view or join several tables.
