# Creating a Pub/Sub integration

<head>
  <meta name="guidename" content="Event Streams"/>
  <meta name="context" content="GUID-8463e2c5-f648-4fda-bbc7-f064824932c6"/>
</head>


A Pub/Sub integration allows one producer to send a topic through a shared subscription to multiple consumers. This allows a high level of throughput, but without the guarantee of messages received in order.

## About this task


You develop Event Streams processes from within the Integration Service on the **Build** tab. Event Streams is a separate AtomSphere service, but you will use the Integration Service to create processes that will eventually connect to Event Streams and the Event Broker.

After you create the Event Streams connector, you will configure the Pub/Sub status by adding multiple subscriptions to the same event.

The Event Streams connector with pub/sub integration receives messages from the broker and passes them to multiple subscribers. The Subscription needs to be configured to be shared, meaning multiple consumer processes can subscribe to it. Also, there is only one Consumer process that is configured for Concurrent Executions. This means multiple logical processes or threads will be created and connected to the Shared Subscription. The order of the messages is **not** guaranteed.



## Procedure

1. Once signed into the Boomi Enterprise Platform, open Integration by clicking the **Integration** link on the home page or by selecting it from the **Services** menu. The Integration service opens.
2. On the Build page, click **Create New** and select Connection from the list.
3. In the Create a Connection dialog, select in the Connector drop-down list, and then click **Create**.
4. Rename your component to connection.
5. In the Connection tab, enter the following information: <br />
    a. **Action** — Select Consume from the drop-down list.

    b. **Connection** — Search or enter the name of the broker that will send the message.

    c. **Operation** — Search or enter the name of the operation.

6. Click **Save** and **Close**.
7. On the Build page, click the **Create New** button and select **Connector Operation** from the list.
8. In the Create a Connector Operation dialog, select **Event Streams** in the Connector drop-down list, and then click **Create**.
9. Rename your component to Connection.
10. In the Options tab, enter the following information:
    a. Account<br />
    b. Environment<br />
    c. Topic<br />
    d. Subscription Name<br />
    e. Subscription Type — Shared<br />
    f. Maximum Retries<br />
11. Click **Save** and **Close**.

## Results

After completing these steps, you have successfully created the Event Streams connector and operation.