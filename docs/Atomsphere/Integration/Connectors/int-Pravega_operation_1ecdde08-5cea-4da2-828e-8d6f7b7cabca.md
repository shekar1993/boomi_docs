# Pravega operation

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-1ecdde08-5cea-4da2-828e-8d6f7b7cabca"/>
</head>


The Pravega operations define how to interact with Pravega. An operation represents a specific action, such as Read and Write to be performed against a data stream in a Pravega system.

These operations require a JSON document format and support the following actions:

-   Outbound: Write
-   Inbound: Read
-   Inbound: Listen

## Write

Write is an outbound action to write streaming data in Pravega.

-   The user can specify the Stream name and Scope name in a Pravega Connection.
-   The user needs to specify which routing key type they will use.
-   For each document processed, the data will be written as an event.

If the Write operation is successful, SUCCESS status will be associated with the document.

Write operation options

-   **Routing Key Type** -  The type of routing key to use for each event. "Fixed" means to use the literal value of the Routing Key below. "JsonReference" means the event data is JSON and the value will be extracted from the body using the Routing Key below as a JSON reference \(i.e., a value of "myVar" will look for the "myVar" key in the JSON of each event, and use its corresponding value as the routing key for that event\).
-   **Routing Key** -  The routing key to use for each event written to the stream. If the Routing Key Type is "Fixed", this value will be used literally and will be the same for every event. If the Routing Key Type is "JsonReference", the routing key for each event will be evaluated from the JSON body, using the reference provided here.

## Read

Read is an inbound action to read the streaming data from Pravega. Each event that is read from the stream is passed on as a data document.

Read operation options

-   **Pravega Reader Group** -  \(Required\) The name of the reader group for this reader within Pravega. Each reader group will maintain its position in the stream between executions.

    **Note:** A reader group will distribute events between its readers. Be careful when naming your reader group so that you do not mistakenly share events with another reader. If different readers each need to process all events in the stream, they should use different reader groups.

-   **Read Timeout** -  The maximum amount of time the reader will wait for the next event from Pravega \(in milliseconds\).
-   **Max Events per Execution** -  For each execution of the operation, the maximum number of events the reader will read before moving to the next component in the process. For example, if this is set to 100000 events, the operation will read a maximum of 100000 events. If it hits the tail of the stream \(no more events\), or this limit \(100000 events\), it will exit execution and the collection of events will be sent to the next component in the process flow. If this is set to 0, the operation will continue reading from the stream until it hits the tail \(there are no more events\). If there are a lot of events, this may overload the document cache.
-   **Max Read Time per Execution** -  For each execution of the operation, the maximum number of seconds the reader will read and collect events from the stream before moving to the next component in the process. For example, if this is set to 30 seconds, the operation will spend a maximum of 30 seconds reading events from the stream. If it hits the tail of the stream \(no more events\), or this time \(30 seconds\), it will exit execution and the collection of events will be sent to the next component in the process flow. If this is set to 0, the operation will continue reading from the stream until it hits the tail \(there are no more events\). If there are a lot of events, this may overload the document cache.
-   **Initial Reader Group Position** -  The initial position from which to start reading from the stream.
    -   A value of "Head" means the first time the listener runs, it will read from the head \(beginning\) of the stream.

        **Note:** This will read the entire stream from start to finish and may cause a very high load while doing so.

    -   A value of "Tail" means the first time the listener runs, it will start reading from the tail \(end\) of the stream. Use this option to start reading real-time events, but be aware that all events that were written before the first process execution will be ignored.

## Listen

Listen is an inbound action to read the streaming data from Pravega. Each event that is read from the stream will be passed on as a data document submitted to the listener.

Listen operation options

-   **Pravega Reader Group** -  \(Required\) The name of the reader group for this reader within Pravega. Each reader group will maintain its position in the stream between executions.

    **Note:** A reader group will distribute events between its readers. Be careful when naming your reader group so that you do not mistakenly share events with another reader. If different readers each need to process all events in the stream, they should use different reader groups.

-   **Initial Reader Group Position** -  The initial position from which to start reading from the stream.
    -   A value of "Head" means the first time the listener runs, it will read from the head \(beginning\) of the stream.

        **Note:** This will read the entire stream from start to finish and may cause a very high load while doing so.

    -   A value of "Tail" means the first time the listener runs, it will start reading from the tail \(end\) of the stream. Use this option to start reading real-time events, but be aware that all events that were written before the first process execution will be ignored.