# Advanced Connection Debugging

<head>
  <meta name="guidename" content="Boomi for SAP"/>
  <meta name="context" content="GUID-85099dc5-bf23-4e95-ba29-e4bfa5c5b7af"/>
</head>

## Challenge

Monitoring the raw form of HTTP traffic between Boomi and SAP can be quite challenging because it not possible for Boomi Cloud infrastructure.

## Solution

To monitor the HTTP traffic between Boomi and SAP in its raw form, follow the below steps:

- Enable Connector Trace Logging by referring to the [Boomi Guide](/docs/Atomsphere/Integration/Integration%20management/t-atm-Enabling_trace_logging_for_various_connectors_848172d2-594b-4ea2-8d18-ab80b5375907.md). This requires an Atom restart.

- Conduct a connection test to SAP using the Boomi for SAP connector. 

- Download the container log and inspect the HTTP traffic. For Molecules, the container log of the head node typically contains the data from the connection test.

