# Flow 

<head>
  <meta name="guidename" content="Release Notes"/>
  <meta name="context" content="GUID-205e3cab-32a2-43f9-97ab-19c4faa2c780"/>
</head>



**We added these features:**

- **Anomaly Detection**: This feature allows you to stay one step ahead by pinpointing faults, saving time, and enhancing security.
  - Anomaly Detection analyzes your flows and reports anomalies when unexpected actions or behaviors occur.
  - This can assist you in identifying and diagnosing faults in your flow that are not easily identifiable. (FLOW-2783)

- **GraphQL Connector**: We have introduced a new connector which easily connects with products like API Management and Event Streams, using GraphQL's intuitive query language for APIs. This helps in requesting specific data, performing admin tasks, and creating advanced dashboards effortlessly. (FLOW-6401)


**We fixed this issue:**

- Fixed an issue when starting a flow from a browser tab other than the designtime window that resulted in an error. (FLOW-7222)

- Resolved a connectivity issue by adding support for ``SSL Mode=VerifyFull`` for postgres connections in sql connector. (FLOW-7209)

- Fixed the Flow table selection clearance issue by updating the configuration. (Flow-7173)