# Boomi Atom message queuing 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-5310fd40-efdf-4bb2-bb3c-6ef099472b36"/>
</head>


Atoms natively support message queuing. Messages are managed by a shared queue server embedded in the Atom Java process. This approach enables simple, reliable asynchronous process execution whereby a process invokes another process in a completely separate invocation.

The messaging system is implemented as follows:

-   Reusable queue components are configured at the account level. Each queue component specifies the configuration of a message queue, including its name and the messaging model with which the message queue can be used, either Point-to-Point or Publish/Subscribe.

-   An Atom’s shared queue server creates a message queue upon invocation of a Boomi Atom Queue connector Get, Send or Listen operation that specifies a queue component.

-   Messages consist of references to documents rather than actual document content. Each message references one or more documents. The document metadata in messages includes dynamic document properties.

-   Messages persist on a message queue until one of the following occurs:

    -   The message is consumed.

    -   The documents that the message references are purged.


While Atom message queuing is simple, robust and reliable, it lacks many of the features of an enterprise queuing system, such as message priorities and variable persistence guarantees. If Atom message queuing does not meet your requirements, consider installing your own messaging system and using the JMS connector.

## Benefits 

The benefits of having a native message queuing implementation can be categorized as follows:

-   Asychronous communication — Processes writing and reading data execute independently of each other. Requests are batched in real-time. Enqueuing requests is more efficient than spawning an individual execution for each real-time message or writing messages to disk for later batch processing in a scheduled process.

-   Decoupling — Producers and consumers of messages are independent and can evolve separately at their own rate. Workflow is encapsulated into logical, reusable units — that is, separate processes — which are organized, maintained and *deployed* independently.

-   Multiple recipients — Messages can be sent to multiple recipients independently. Likewise, their receipt can be monitored independently.

-   Redundancy — Message queues can persist messages until they are fully processed.

-   Resiliency — Decoupling implies failures are not linked, thereby mitigating the risk of unreliable applications. A producer can continue to enqueue messages while consumers are temporarily disabled.


## Typical usage scenarios 

Following are typical usage scenarios for Atom message queuing employing message queues:

-   Consider a requirement for fully disconnected process execution. This requirement is common in the case of services with known reliability issues. Having a separate processing path enables more granular retries. In this scenario a Boomi Atom Queue connector Send operation would send failed documents to a Point-to-Point message queue in batches. In another process a Boomi Atom Queue connector operation — either Listen or scheduled Get — would receive the batches.

-   Consider a requirement for aggregate AS2 document processing — a batch process operating upon separate incoming documents. In this scenario the AS2 Shared Server connector would listen for incoming documents, and a Boomi Atom Queue connector Send operation would send them to a Point-to-Point message queue. In another process a scheduled Boomi Atom Queue connector Get operation would receive documents in batches.

-   Consider a requirement for dispersed document processing — incoming documents processed in parallel, with failed documents retried individually. In this scenario a primary process would have a Boomi Atom Queue connector Send operation to send documents to a Point-to-Point message queue in small batches, in some cases a single document. In another process a Boomi Atom Queue connector Listen operation would receive the batches and in subsequent steps route the documents for concurrent processing.

-   Consider a requirement to route messages between Atoms.

    -   The server Atom would act much like an enterprise service bus \(ESB\). It would deploy two Web Services Server processes, one using a BoomiAtom Queue connector Send operation to send documents to a Point-to-Point message queue for consumption by client Atoms and the other using a BoomiAtom Queue connector Get operation to receive documents sent by client Atoms from a Point-to-Point message queue.

    -   Each client Atom would deploy two Web Services SOAP or HTTP client processes, one using a Boomi Atom Queue connector Get operation to receive documents sent by the server Atom from a Point-to-Point message queue and the other using a Boomi Atom Queue connector Send operation to send documents to a Point-to-Point message queue for consumption by the server Atom.

-   Consider a requirement for a hub and spoke system in which documents are produced in the hub and made available for consumption on a variable population of spokes. In this scenario the publisher \(hub\) would have a scheduled process that executes a Boomi Atom Connector Send operation to send documents to a Publish/Subscribe message queue. At any given time the message queue would have zero or more subscribing message queues \(spokes\). Each subscriber would be executing a process in which a Boomi Atom Queue connector Listen operation would receive published documents. Because subscribers are unknown to the publisher, they can activate or deactivate at any time without necessitating a modification to the publishing process.


## Limitations 

Atom message queuing is subject to the following limitations:

-   Messages cannot be sent between accounts.

-   Messages cannot be sent directly between Atoms.

-   Message queues cannot be directly accessed from outside the Atom.


## Using the messaging system 

The messaging system supports all Atom types including Molecules, which enable clustering, and Atom Clouds, which enable multi-tenancy.

To use the messaging system, you need to

1.  Create *queue components*. See the [Queue components topic](./r-atm-Queue_Components_1f127521-e340-40c3-b02f-57cad457850e.md) for more information.

2.  Configure the Atom’s *shared queue server*, if you are the Atom’s owner. The default configuration is likely to be suitable for your purposes, at least initially.

3.  Build and deploy processes that use *Boomi Atom Queue connector operations* that specify the queue components you created.

4.  Perform *message queue management* actions as needed.


## Listener management 

You can view the status of listener processes that are deployed to an Atom, Molecule, or Atom Cloud to retrieve messages from a message queue by going to the Listeners panel in **Manage** \> **Atom Management**. In this panel, you can also pause, resume, and restart listeners.

<!--## Dead letter queues 

Dead letter queues contain undeliverable messages. Each ordinary message queue can have one associated dead letter queue.

Message delivery failure commonly occurs because of

-   network failure

-   purging of referenced documents

-   general message processing failure


When a failure occurs, the shared queue server will attempt to redeliver the message up to six more times, in intervals of 1, 2, 3, 5, 8, and 24 seconds. After six failures the message is sent to the appropriate dead letter queue. If the dead letter queue does not yet exist it is automatically created.

You should periodically analyze the contents of dead letter queues to identify the reasons for delivery failures.

If messages make it to the dead letter queue, they can be retried at a later time manually by an administrator. However, it is not recommended to rely on this capability.

:::note
Message queuing, by nature, provides a level of resiliency for your system. The redeliver strategy adds additional resiliency in case of execution failures. The dead letter queue captures messages that fail beyond those measures and even allows messages to be replayed, adding more resiliency. However, you should not rely this on as a replacement of a more persistent mechanism. Messages should not be delivered to the dead letter queue as part of normal system operation but rather should be considered a system failure every time a message gets as far as the dead letter queue. It should not be necessary for an operator to regularly use the DLQ to resend failed messages. See the [Message Queue Management](./c-atm-Message_queue_management_e5b4294d-f3eb-48bd-83ac-809c963dc4c5.md) topic for more details.
:::
-->

## Monitoring the message queue service 

The following metrics are available for monitoring an Atom’s message queue service:

-   overall status

-   message store disk usage

-   temporary data store disk usage

-   job scheduler store disk usage

-   memory usage


In order to monitor these attributes, you need to use a systems management tool, such as Zabbix, and use a JMX hook \(a standardized interface for Java programs\). See the [System Monitoring with JMX](../Integration%20management/r-atm-System_monitoring_with_JMX_3c582f4e-29ce-4cd4-a246-be25bd36b583.md) topic for more information.