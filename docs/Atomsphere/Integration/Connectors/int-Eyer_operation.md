import OperationEnd from './_operationEnd.md'
import ReturnErrRes from './_ReturnResponse.md'
import TrackingDir from './_TrackingDirection.md'

# Eyer - Partner operation 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-3467f9c0-4c8f-4540-b451-06318cf17df2"/>
</head>

The Eyer – Partner operation defines how to interact with your Eyer account and represents a specific action (GET) to retrieve anomaly alerts with set criteria and data.

## Actions

The Eyer - Partner connector supports a single action (GET) with either static or dynamic (set in the process) parameters for **Query with metrics** and **Query to** date.

## Operations

The Eyer - Partner connector supports a single operation to get anomaly alerts, with parameters that controls how much detail you receive:

**Unread Anomalies** - Returns a list of anomaly alerts based on set parameters, where each alert contains affected metrics and nodes (sections like queues, execution data, heap, and more) and systems,
grouped by correlation.

## Options

You can set static parameters during setup of the selected operation, or set dynamic parameters in the process depending on the use case. The parameters are:

**Response profile** - Populated by the operation chosen by the user.

<TrackingDir />

**Query to** - Timestamp in format `YYYY-DD-MMTHH:MM:SSZ`. Decides to which date the connector will query for anomaly alerts with a set status and severity.

:::note

If **Query to** is not populated, the query will use the current time.

:::

**Query with metrics** - Returns a list of anomaly alerts based on set parameters, where each alert contains metrics affected with value per metric and baseline values per metric at the moment of the alert (new / updated).

<ReturnErrRes />

<OperationEnd />