import PartnerSupport from './_PartnerSupport.md'

# Inverbis Analytics - Partner connector

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-db560c9a-ff2e-4525-9e5a-844b5c4e741a"/>
</head>

<PartnerSupport />

The Inverbis Analytics — Partner connector enables users to upload their process datasets from the Boomi platform into the Inverbis Analytics platform. This integration enables users to explore and analyze their processes in depth, uncovering detailed insights into how these processes truly perform. By leveraging this connector, organizations can gain valuable visibility into process behaviors, identify inefficiencies, and discover opportunities for automation, driving continuous improvement and more informed decision-making.

## Benefits 

The Inverbis solution extract the digital footprint of a process from corporate systems to show its execution in real life.
- Visualize the different paths (variants) that have been followed every time a process has been executed. 
- Get the data you need to explore the behavior of the different paths, individually or in an aggregated manner
- Filter by specific situations to get to their root causes 
- Compare executions and performance between regions, departments, sites, teams, etc.
- Define process KPIs and monitor them in real-time, complementing your traditional dashboards
- Get insights into future behavior and performance

## Connector configuration 
To configure a connector to communicate with Inverbis Analytics platform, set up these two components:
- Inverbis Analytics — Partner connection. This connector uses the OAuth 2.0 protocol for authentication and authorization.
- Inverbis Analytics — Partner operation.

This approach creates reusable components which contain connection settings and operation settings. After building your connection and operation, set up your Inverbis Analytics — Partner connector within a process. When the process is defined properly, AtomSphere can map to and from virtually any system using the Inverbis Analytics — Partner connector to retrieve data from or send data to the Inverbis Analytics platform.

## Prerequisites

To use the Inverbis Analytics — Partner Connector, you need to have a user account at the Inverbis Analytics platform and know the account Email and Password.

## Tracked properties

This connector has no predefined tracked properties. See the topic [Adding tracked fields to a connector operation](../Process%20building/t-atm-Adding_tracked_fields_to_a_connector_operation_f71821dd-95ee-4ebd-bfc9-3333262f56f6.md) to learn how to add a custom tracked field.

