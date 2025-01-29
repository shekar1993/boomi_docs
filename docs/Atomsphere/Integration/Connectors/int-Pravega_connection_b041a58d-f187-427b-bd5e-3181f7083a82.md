# Pravega connection

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-b041a58d-f187-427b-bd5e-3181f7083a82"/>
</head>


The Pravega connection represents and contains all of the information that is needed to connect and log into Pravega.

## Connection options

-   **URI** -  \(Required\) The URI endpoint of the Pravega controller in the form tcp://host:port or tls://host:port
-   **Scope** -  \(Required\) The Pravega scope containing the data stream.
-   **Stream Name** -  \(Required\) The name of the data stream to read or write.
-   **Create Scope** -  When selected, the Pravega scope will be automatically created. Only select this if Pravega is running in stand-alone mode.
-   **Pravega Authentication Required** -  Indicates whether authentication is required for Pravega.
-   **Pravega Username** -  Used when Pravega authentication is required.
-   **Pravega Password** -  Used when Pravega authentication is required.

## Pravega connection glossary of terms

The glossary of terms related to Pravega is:

-   [Stream](http://pravega.io/docs/v0.5.1/pravega-concepts/#streams): Pravega organizes data into Streams. A Stream is a durable, elastic, append-only, unbounded sequence of bytes having good performance and strong consistency. A Pravega Stream is similar to but more flexible than a "topic" in popular message oriented middleware such as [RabbitMQ](https://www.rabbitmq.com/) or [Apache Kafka](https://kafka.apache.org/).

    A Stream is unbounded in size – Pravega itself does not impose any limits on how many [Events](http://pravega.io/docs/v0.5.1/pravega-concepts/#events) \(i.e., bytes\) are stored in a Stream. Pravega’s design horizontally scales from a few machines to an entire datacenter’s capacity.

-   [Events](http://pravega.io/docs/v0.5.1/pravega-concepts/#events): Pravega's client API allows applications to write and read data to/from Pravega in the form of Events. An Event is represented as a set of bytes within a Stream. For example, an Event could be as simple as a small number of bytes containing a temperature reading from an IoT sensor composed of a timestamp, a metric identifier, and a value.
-   [Routing Key](http://pravega.io/docs/v0.5.1/pravega-concepts/#events): A Routing Key is a string used by developers to group similar Events. A Routing Key is often derived from data naturally occurring in the Event, like "customer-id" or "machine-id" or a declared/user-defined string. For example, a Routing Key could be a date \(to group Events together by time\) or it could be a IoT sensor id \(to group Events by machine\). A Routing Key is important in defining the read and write semantics that Pravega guarantees.
-   [Pravega Writer](http://pravega.io/docs/v0.5.1/basic-reader-and-writer/): An application that creates Events and writes them into a Stream. All data is written by appending to the tail \(front\) of a Stream.
-   Pravega Reader: An application that reads Events from one or more Stream. See [Working with Pravega Basic Reader and Writer](http://pravega.io/docs/v0.5.1/basic-reader-and-writer/) for more information.
-   [Pravega Modes](http://pravega.io/docs/v0.5.1/deployment/deployment/): There are two modes for running Pravega.
    -   Standalone - Standalone mode is suitable for development and testing Pravega applications. It can either be run from the source code, from the distribution package, or as a docker container.
    -   Distributed - Distributed mode runs each component separately on a single or multiple nodes. This is suitable for production in addition for development and testing. The deployment options in this mode include a manual installation, running in a docker swarm, or DC/OS.

## Pravega security configuration

For information on how to configure Pravega for secure connections, visit [Pravega Security Configuration](https://github.com/pravega/pravega/blob/master/documentation/src/docs/security/pravega-security-configurations.md).