# Pravega connector

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-a593f565-0f1c-45c1-95bb-04a477140700"/>
</head>


The Pravega connector allows you to read from or write to an enterprise data stream within Pravega.

Using the Pravega connector, you can take advantage of Boomi's unique capability to provide a broad range of data source connectors and point them at Pravega for ingestion. You can also expose stream data to the various controls and outputs within the  platform.

Pravega is a storage system that exposes Stream as the main primitive for continuous and unbounded data. A Pravega stream is a durable, elastic, append-only, unbounded sequence of bytes having good performance and strong consistency.

## Connector configuration

To configure a connector to communicate with Pravega, set up the following components. Before starting, we suggest you read the Pravega connector's configuration [glossary of terms](http://pravega.io/docs/latest/terminology/).

-   Pravega connection
-   Pravega operations

## Prerequisites

To use the Pravega connector, you must first have a running Pravega storage cluster. For information on how to obtain and deploy Pravega, visit the Pravega website \([https://pravega.io](http://www.pravega.io/)\).

## Supported versions

The Pravega connector currently supports Pravega v0.6 and v0.7, and should also support v0.8 once available.

## Supported documents

The current version of the Pravega connector supports only JSON documents.

## Tracked properties

This connector has the following tracked properties that you can set or reference:

-   Stream Name: The name of the stream to read and write. A stream name must be unique within a scope.
-   Scope: A namespace for Streams.