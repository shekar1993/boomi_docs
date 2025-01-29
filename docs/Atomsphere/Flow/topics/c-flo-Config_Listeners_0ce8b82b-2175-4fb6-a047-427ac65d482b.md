# Adding Listeners to a map element 

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-0ce8b82b-2175-4fb6-a047-427ac65d482b"/>
</head>


A listener is used to listen to events on objects stored or managed by a Flow.

When an event occurs in the underlying application \(such as a record being updated in Salesforce for example\), can then trigger an event or an action in the flow as it is 'listening' to the for just such an event. Business rules can also then be added to the flow to determine which path the flow takes once it has received this data. Listeners are typically used with Salesforce .

For example, a listener can be added to:

-   Monitor for updates to a task record in Salesforce, with the flow only progressing when the task is completed.

-   Monitor a specific file for updates and/or modifications.

-   Monitor a case record in Salesforce, with the flow only progressing once the case record is marked as 'Closed Won'.

-   Monitor for when a file is downloaded by a user, and then sending a text message when this has happened.

-   Pause a parent flow at a certain point until a specific threshold in a parallel/child flow is met.


## An example workflow for a listener 

An example workflow involved in setting up a listener is as follows:

1.  Add a listener that defines the and the objects that you want to listen to, referencing the appropriate value. In addition, the type of the event that you want to monitor needs to be referenced \('record created' for example\).
2.  The connector you have defined will monitor for the specified event, and then notify when the event has occurred for the specified object\(s\). The referenced value is populated with the latest data from the connector.
3.  The outcomes for which the event is "accepted" need to be set up \(using comparisons/business rules\), along with the workflow path that the flow should follow. If the comparisons/rules are met successfully, the flow can proceed to the next map element as defined by the relevant matching outcome. If the event does not occur or the comparisons/rules are not met, the flow will continue to wait until the appropriate event occurs.

**Note:** You can only listen to records at the point that you register the listener in the flow - once the flow proceeds to the next step, it will no longer be listening for any further updates.

## Adding a listener to a map element 

1.  Open the configuration panel for the map element you wish to add a listener to. See [Editing map elements on the flow canvas](c-flo-Canvas_Editing_Elements_656a364c-879f-4153-8ee5-b19e47dca8f5.md). Any existing listeners for the map element are shown and can be edited or deleted as required.
2.  Click **Add Listener** to add a new listener.
3.  The **Listener** panel is displayed. Define the listener options:
    -   **Name**: Enter a name for the listener.

    -   **Listen to events of type**: Enter the event type that you wish to listen for - not that this must be entered in uppercase, for example '`UPDATE`'. The event types that can be listened to are defined by the that is selected, but generally include types of event such as the '`UPDATE`' or '`DONE`' event. See [Supported listener types](r-flo-Listeners_Types_40e958ef-0d6e-48a1-a82a-4e26478643eb.md).

    -   **The Connector implementing this Listener**: Select the that you wish to use to monitor for the selected type of event.

    -   **The Value being listened to**: Select an existing value or create a new value that represents the object containing the data you wish to populate with the data.

4.  Click **Add Listener** to save the new listener and return to the configuration panel. The new listener is shown in the **Listeners** section.
5.  Save your changes to add the listener to the selected map element.
6.  Connect and configure outcomes to the map element in the flow to define the path the flow should take when the listener event is triggered.

## Map elements this configuration option is available for 

This configuration option can be defined for the following map elements:

-   [Page map elements](c-flo-ME_Page_539c415f-59d7-47d5-90ef-cb3a108b3010.md)

-   [Message map elements](c-flo-ME_Message_342e9efb-0f11-4083-a2dc-195d52d1f939.md)

-   [Database load map elements](c-flo-ME_Load_d47f5e01-a760-4aa2-8342-e843dd3abc48.md)

-   [Database save map elements](c-flo-ME_Save_bffa5a42-8d81-4dd9-9528-1eb26ae04d4c.md)