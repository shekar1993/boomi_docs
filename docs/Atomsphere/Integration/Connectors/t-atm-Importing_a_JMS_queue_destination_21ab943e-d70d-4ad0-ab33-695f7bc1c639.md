# Importing a JMS queue destination 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-21ab943e-d70d-4ad0-ab33-695f7bc1c639"/>
</head>


By importing a JMS queue destination, you have a list of available Oracle AQ queues to select for the Destination.

## About this task
Use the JMS Destination Import wizard only for Oracle AQ queues. For other JMS database providers, enter the destination directly.

## Procedure

1.  In a JMS operation, next to **Destination**, click **Import**.

    The **Import Queue Name** dialog opens.

2.  Click in the **Connection** field and select an Oracle AQ queue.

    Selecting another database provider results in an error.

3.  Next to **Atom**, click the drop-down arrow, select an Atom, then click **Next**.

    The wizard connects to the Atom, then the Import Queue Name dialog re-opens with a list of available queues.

4.  Use the drop-down arrow to select a destination queue, then click **Finish**.

    The Destination field fills in the selected queue.