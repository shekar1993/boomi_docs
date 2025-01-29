# Creating a FIFO integration

<head>
  <meta name="guidename" content="Event Streams"/>
  <meta name="context" content="GUID-b262f83c-f455-4b27-8030-dc2b701eba96"/>
</head>


A First In/First Out \(FIFO\) integration sends messages in the order received from the broker to an individual consumer. It guarantees that messages are processed in order at the cost of a lower volume of messages passed through.

You develop processes from within the Integration Service on the **build** tab. Event Streams is a separate AtomSphere service, but you will use the Integration Service to create processes that will eventually connect to and the Event Broker.

After you create the connector, you will configure the FIFO status through the subscriptions.

## About this task

The Event Streams connector with FIFO integration receives messages from the broker and passes them to the subscriber based on the order in which they were received.

## Procedure

1. Once signed into the Boomi Enterprise Platform, open Integration by clicking the *Integration* link on the home page or by selecting it from the Services menu. The Integration service opens.
2. On the Build page, click **Create New** and select Connection from the list.
3. In the Create a Connection dialog, select in the Connector drop-down list, and then click **Create**.
4. Rename your component to s connection.
5. In the Connection tab, enter the following information:
   
    a. **Action** — Select Consume from the drop-down list.<br />
    b. **Connection** — Search or enter the name of the broker that will send the message.<br />
    c. **Operation** — Search or enter the name of the operation.
6. Click **Save** and **Close**.
7. On the Build page, click the **Create New** button and select **Connector Operation** from the list.
8. In the Create a Connector Operation dialog, select **Event Streams** in the Connector drop-down list, and then click **Create**.
9.  Rename your component to Connection.
10. In the Options tab, enter the following information:
    a. Account <br />
    b. Environment<br />
    c. Topic<br />
    d. Subscription Name<br />
    e. Subscription Type — Exclusive<br />
    f. Maximum Retries<br />
11. Click **Save** and **Close**.

