# Adding Message Actions to a map element 

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-81616add-ed70-45c7-a844-3e98f14844e2"/>
</head>


Message actions allow you to map values in a flow to the inputs and outputs specified by a .

The message actions available are dependent on the that is being used when creating a message, as each individual provides a different set of message actions that can be performed.

For example, the Salesforce allows the following message actions.

-   Create Task

-   Notify Users
-   Send Task Email

-   Create a Task

-   Create A Calendar Event


## Adding a message action to a map element 

1.  Open the configuration panel for the map element you wish to add a message action to. See [Editing map elements on the flow canvas](c-flo-Canvas_Editing_Elements_656a364c-879f-4153-8ee5-b19e47dca8f5.md).
2.  Any existing message actions for the map element are shown and can be edited or deleted as required. Click **Add Message Action** to add a new message action.
3.  The **Message Action** panel is displayed. Define the message action options:
    -   **The Connector to send the Message**: Select the that you wish to use for the message action.

    -   **The Message to send**: This section is shown once you have selected a . The available message actions that you can select from depend on the . Click **Select** in the **Actions** column to configure the action you wish to use.

4.  The **Message Action** configuration form is displayed. Configure the message action:
    -   **Name**: This field is pre-populated but can be amended if you wish to change the name for the message action.

    -   **Inputs**: Input values allow you to add information to a message action to make what it does more specific, or to give it any information it requires to operate correctly. For example, if you are using a message action to send an email, it will require information about which email address it should be sent to, what the content of the email is, and so on. These would be set up as input values. Click**Select or create a new value** to select an existing value to store this information in, or create a new value specifically for this purpose.

    -   **Outputs**: Output values are used to store any information that is returned by the message action. For example, the runtime allows a message action to be set up that launches a flow, with an output of that message action being the `State` of the flow, allowing you to read the value and get information about the flow that was launched. Click**Select or create a new value** to select an existing value to store this information in, or create a new value specifically for this purpose.

    -   **The order in which this Message should be sent**: Specify an order in which the message actions should be performed. The value "0" will result in a message action being performed before a value of "1", and so on. Any message actions in a message element with the same order value will be executed in parallel. Note that you cannot use the output of one message action as the input of another message action if they are ordered to run as the same parallel batch.

    -   **Disable this message**: Select this check box to temporarily disable the message action without having to permanently delete it.

5.  Click **Save** to save the new message action and return to the configuration panel. The new message action is shown in the **Message Actions** table.
6.  Click **Save** to save your changes and apply the message action to the selected map element.

## Map elements this configuration option is available for 

Message actions can be added to the following map elements:

-   [Page map elements](c-flo-ME_Page_539c415f-59d7-47d5-90ef-cb3a108b3010.md)

-   [Message map elements](c-flo-ME_Message_342e9efb-0f11-4083-a2dc-195d52d1f939.md)