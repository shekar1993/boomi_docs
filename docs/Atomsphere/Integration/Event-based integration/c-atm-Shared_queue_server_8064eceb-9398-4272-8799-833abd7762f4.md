# Shared queue server 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-DEA311BD-BD93-4405-914A-B8788AB3936B"/>
</head>


Atom message queuing makes use of the Atom's shared queue server. The queue server runs as an embedded service within the runtime and is configured and managed through the Atom Management screen. The default configuration of the server is likely to be suitable for your purposes, at least initially. Runtime owners can configure the shared queue server using the Shared Queue Server panel.

## Atom Queues and Clusters

When using Atom Queues on a Molecule or Atom Cloud clustered runtime, an instance of the queue server runs within each node in the cluster. The instances communicate with each other to synchronize messages as needed.
Port 61717 is the default port for communications between the queue servers. Make sure the nodes in the cluster have this port open for incoming TCP traffic. You can select a different port in the Shared Queue Server panel.

## Atom Queue Rate limit

You can optionally configure a message rate limit for the Atom Queue server to limit the number of messages that can be sent to the server during a given period of time. This is similar in concept to the HTTP request rate limit for the shared web server, but for Atom Queues.

A rate limit can protect the queue server from extreme spikes in message volume and ensure quality of service for other integrations executing in the runtime. This is an especially important consideration for multi-tenant Atom cloud runtimes to prevent one tenant from potentially impacting others. 

With this configuration: 

- The Incoming Message Rate Limit configured on the Shared Queue Server panel in Atom Management configures the global rate limit for the queue server. For clusters this is enforced per node.
- For multi-tenant Atom clouds, the limit can be further restricted per tenant with the Queue Server Incoming Message Rate Limit attachment quota.
- The rate limit is enforced as requests per minute. Note that the number requests may not equal the number of documents in certain situations based on process configuration and type of runtime. See below for details.

### How the rate limit works

The rate limit counts requests sent to the shared queue server as follows:

- Requests per minute window
- Across all processes and queues
- Per node (molecule and atom cloud clusters only)
- Per attachment (multi-tenant atom clouds only)
- Only requests sent TO the server (i.e. Send processes) are counted. Requests sent FROM the server (i.e. Listener/Get processes) are not counted.

The rate limit uses a variation of a “sliding window” algorithm. Upon receiving the first request a “window” is opened and remains open for 60 seconds. There is a global window for the entire server (per node), as well as a window for each tenant in the case of multi-tenant atom clouds.

During this time, requests received count toward the global and per-tenant limits. Requests that exceed the global or per-tenant limit are rejected,resulting in a connector error in the integration process. Subsequent requests will continue to be rejected until the current window closes. After the current window closes, a new window will open with a new counter upon receiving the next request.

### Understanding Atom Queue requests

The number of requests received by the Atom Queue does not always equal the number of documents handled by the Atom Queue connector in the integration process. In some cases, especially atom clouds, the actual number of requests can be much fewer than the number of documents.

- Within an Atom Queue send operation, a Batch Size can be configured. One request is sent to the queue server per batch, so if Batch Size is greater than 1, there will be one request sent per that many documents.
- When running on an Atom Cloud (or molecule with forked executions enabled), those document batches are, in turn, batched again, into groups of 100, when communicating between the process execution JVMs (that is, a forked execution or atom worker) and the main node JVM where the Atom Queue server runs. This request batch size is an internal setting and is not configurable.

## Data storage 

To provide durable messaging, Atom Queues persist enqueued messages temporarily within the runtime’s installation directory on the file system. You can configure the amount of disk storage that can be used by atom queues with the shared queue server setting for **Maximum Disk Usage**. See the [Shared Queue Server panel](./r-atm-Shared_Queue_Server_panel_3a906c55-eecc-4bdc-98e1-62cab1078643.md) topic for more information. 

The shared queue server’s stores its data as follows:

- For a single tenant Atom or Molecule, the shared queue server’s runtime configuration information and message queues reside in the “queue” directory within the Atom installation directory.

- For a multi-tenant Atom Cloud, the shared queue server’s runtime configuration information resides in the “queue” directory within the Atom installation directory. Message queues, on the other hand, reside in the “queue” directory within each account’s directory.

## Document Purging 

Documents referenced in currently enqueued messages persist until a scheduled purge occurs. This is true even while the Atom or process is configured to enable purging of data immediately following process execution. When documents referenced in an enqueued message are purged, the message itself is also purged.

