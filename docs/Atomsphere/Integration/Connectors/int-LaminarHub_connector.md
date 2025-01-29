import TrackedProperties from './_TrackedProperties.md'
import PartnerSupport from './_PartnerSupport.md'


# LaminarHub - Partner connector 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-465bf507-76e3-4f8c-9c9b-cd41e4c10af2"/>
</head>

<PartnerSupport />

LaminarHub AI is a one-stop shop AI-driven solution for your business and IT operations teams to transform your integration transaction data into operational insights. Find and resubmit transactions, monitor integration runtimes through dashboards, as well as configure alerts and notifications based on business rules. LaminarHub AI Search will assist your users to search using natural language to get trend analysis on any type of transaction. 
The LaminarHub - Partner connector enables users to connect their Boomi integrations to the Laminar Hub with ease. You can send any Boomi Integration data to the LaminarHub by using the connector in your integrations.

## Connector configuration

To configure a connector to communicate with LaminarHub, set up these two components:

- [LaminarHub - Partner connection](../../Integration/Connectors/int-LaminarHub_connection.md)
- [LaminarHub - Partner operation](../../Integration/Connectors/int-LaminarHub_operation.md)

This design provides reusable components that contain connection and operation settings. After building your connection and operation, set up your LaminarHub - Partner connector within a process. When the process is defined properly, Boomi Integration can get or send data to the LaminarHub AI with any other application.

## Prerequisites

To use the connector, you will need:

- an active LaminarHub account
- LaminarHub hostname
- LaminarHub API key and Environment Key

<TrackedProperties />