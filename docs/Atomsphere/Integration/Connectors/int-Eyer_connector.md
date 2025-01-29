import PartnerSupport from './_PartnerSupport.md'

# Eyer - Partner connector 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-2e536531-989b-4261-b691-928e9b95e0d2"/>
</head>

<PartnerSupport />

The Eyer platform is an automated time-series observability platform that easily integrates and supports different technologies through APIs. Experience the power of AI monitoring for Boomi and take control of your integrations like never before. Maximize performance, minimize downtime, and streamline your operations.

## Benefits

The Eyer - Partner connector requires an agent installed per Atom/Molecule runtime environment (server/VM/Docker) to collect JMX performance metrics for the Eyer anomaly detection engine. The Eyer - Partner connector will integrate directly in Boomi processes via the connector, giving you the power to act proactively on anomaly alerts from Eyer. Alerts contain anomaly warnings and possible impacts relating to Atom & Molecule performance like throughput, latency, queues, statuses, and other metrics related to runtime processing.

## Connector configuration

To configure the Eyer - Partner connector to communicate with Eyer, set up two components:

- [Eyer – Partner connection](./int-Eyer_connection.md)
- [Eyer – Partner operation](./int-Eyer_operation.md)

This design provides reusable components that contain connection and operation settings. After building your connection and operation, set up your connector within a process. When the process is defined properly, Boomi Integration can receive runtime anomaly alerts with correlated components for further automated decisions in Boomi processes.

## Prerequisites

To use the Eyer - Partner connector, subscribe at Eyer to obtain a subscriber ID and authentication details. You should ensure that the permissions are set correctly.