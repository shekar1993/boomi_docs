import RequestProfile from './_RequestProfile.md'
import ResponseProfile from './_ResponseProfile.md'
import OperationEnd from './_operationEnd.md'
import TrackingDirection from './_TrackingDirection.md'
import ReturnErrRes from './_ReturnResponse.md'

# Salesforce Platform Events operation 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-ef454f61-9d04-4da0-bd81-df1be346f807"/>
</head>


The Salesforce Platform Events operation defines how to interact with your Salesforce account instance.

The operation represents a specific action \(Listen and Send\) to be performed against a specific Salesforce record type or object \(Account, Opportunity, Contact, etc.\). Create a separate operation component for each action/object combination that is required for your integration. Not all actions are available for every object.

The Salesforce Platform Events operation supports the following actions:

-   **Listen** — Used to retrieve messages from a queue or topic asynchronously in real-time.

    -   Listen operations are only available on the Start step in a process.
    -   You can view the status of listener processes that are deployed to an Atom, Molecule, or Atom Cloud by going to the Listeners panel in **Manage > Atom Management**.
    -   On the Listeners panel, you can pause, resume, and restart listeners.
    -   Listen processes can run in low latency mode. For more information, see the Low latency processes topic.
    -   Listen operations honor the Atom proxy settings for Proxy Host, Proxy Port, Proxy User ID, Encrypted Proxy Password, and Non Proxy Hosts from the container.properties file and not the atom.vmoptions file. For more information, see the linked Properties panel topic.
    
    :::note

    Test mode does not support real-time triggering and, therefore, cannot be used with listener processes.

    :::

-   **Send** — Used to send messages \(JSON structured document\) to a queue or topic. Send operations are available on the Start step in a process.


When you choose the setting to return application error responses, the application error includes the response from the service \(if available\). You can troubleshoot errors on the Process Reporting page.

## Singleton mode 

The Salesforce Platform Events connector runs in singleton mode by default and listeners will only submit executions from a single node of a molecule or cloud.

To learn more about setting container properties, see the topic [Setting or viewing Atom, Molecule, Cloud, or Account properties](../Integration%20management/t-atm-Setting_or_viewing_Atom_Molecule_Cloud_or_Account_74a45065-dc5f-4c15-8dcb-d1aa1273689b.md).

## Change Data Capture Events 

Listen operations provide the flexibility when browsing \(**Import Wizard**\) to choose which streaming event type \(Platform Events or Change Data Capture Events\) the connector works with. After selection, the Object Type displays all available channels for the selected streaming event type and you choose the specific channel the Listen operation subscribes to. The operation can listen for exclusive changes to Account objects, Asset objects, etc. that have been selected for Change Data Capture in Salesforce. To learn how to select objects for Change Data Capture in Salesforce, see the [Select Objects for Change Notifications in the User Interface](https://developer.salesforce.com/docs/atlas.en-us.change_data_capture.meta/change_data_capture/cdc_select_objects.htm) topic in the Change Data Capture Developer Guide.

Change Data Capture supports receiving near-real-time change events to a Salesforce record type or object by subscribing to Change Data Capture channels. By subscribing, the connector can update data in an external system rather than having to perform exports and imports of data. Capturing changes in this way ensures that the data in your external system is updated in real time and stays fresh.

Listening for all objects

**All ChangeEvents** is a special channel that may be subscribed to, allowing the Listen operation to listen for all Salesforce objects that have been selected for Change Data Capture.

Listening for custom objects

The connector can listen to specific channels for Salesforce custom objects unique to your organization. The number of channels appearing for subscription depends on the number of custom objects defined:

-   If no custom objects are defined, no channel appears for subscription.
-   If only one custom object is defined, that specific channel appears for subscription.
-   If more than one custom object is defined, that specific number of channels appears for subscription.

Required permissions for Change Events

To subscribe, listen, and receive Change Events on a channel, the subscriber must have the appropriate Change Event permissions. To learn more, see the Salesforce [Change Data Capture Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.226.0.change_data_capture.meta/change_data_capture/cdc_security_perms.htm).

## Options tab 

Click **Import Operation**, then use the Import wizard to select the object with which you want to integrate.

:::note

When browsing objects, only Platform Events objects \(event messages or notifications\) are available.

:::

The following table describes the fields for each action type:

<TrackingDirection />

<RequestProfile />

<ResponseProfile />

<ReturnErrRes />

:::note

**Return Application Error Responses** is unavailable for Listen operations.

:::

<OperationEnd />