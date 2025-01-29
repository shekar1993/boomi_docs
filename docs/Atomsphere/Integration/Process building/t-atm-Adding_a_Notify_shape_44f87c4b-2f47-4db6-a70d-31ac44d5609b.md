# Adding a Notify step

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-44f87c4b-2f47-4db6-a70d-31ac44d5609b"/>
</head>


Add a Notify step to a process to build custom execution logs and/or send customized notification messages to your subscribed email alerts or RSS feed.

## Procedure

1.  Add the **Notify** step to the process.   
The Notify Properties dialog opens.

2.  Enter a custom label.

3.  Enter a notification title.

4.  Select a message level.

5.  Enter your desired message. \(Example: Profile Element Type for Order Number from XML\)

6.  Add any input parameters that you would like to appear in your message.   
`{1},{2},{3}`, etc., where the numeric value corresponds to the order in which the parameter was added. For example: `Order: {1} Completed Successfully`.

7.  To send the notification as an email alert to subscribers, select **Enable Events**.

8.  To log the notification in the base logs folder of the Atom, select **Enable User Log**. This option is applied only when the process executes on a local Atom.

9.  To aggregate notifications such that for a given document only one notification is generated, turn on **Write Once Per Execution**.   

    :::note

    If you select this option, the process cannot access data from incoming documents.

    :::

10. Click **OK**.