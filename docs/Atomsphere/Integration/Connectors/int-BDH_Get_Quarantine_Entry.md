# Get Quarantine Entry operation 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-81630969-17ee-4b5b-aaa3-53772d7dce74"/>
</head>


The Get Quarantine Entry operation retrieves a specified quarantine entry from the authenticated repository. You can retrieve the entry based on its source entity ID. This operation aligns with the [Get Quarantine Entry for Source Entity](/docs/Atomsphere/Master%20Data%20Hub/REST%20APIs/r-mdm-Get_Quarantine_Entry_for_Contributing_Source_Entity_f444cde0-1d24-4757-9eb2-f1e0422e0ac9.md) operation in the Repository API.

## Prerequisites

You must have the following:

- A Hub repository 
- A deployed model in the repository
- Quarantine entries in the repository
- A deployed Boomi Atom to run connector operations (Integration > Manage > Atom Management)

## Setting up the Get Quarantine Entry operation

1. In the connector, select **Get Quarantine Entry** in the **Action** drop-down.
2. Click the plus icon in the **Operation** field to create a new operation.
3. Click **Import Operation**.
4. Select the Atom you want to use to run your integration. The Atom must be online.
5. Ensure [the connection you created](/docs/Atomsphere/Integration/Connectors/int-Boomi_Data_Hub_connection.md) to the repository is selected in the Connection field.
6. **Optional**: In **Source**, enter the source ID, which acts as a filter to help you select the deployed model name. You can find the source ID on the Sources page in Hub.
7. **Optional**: In **Filter**, enter a regex as a filter to help you select the deployed model name.
8. Click **Next**.
9. Select the deployed model name. 
10. Click **Next**. 
11. Click **Finish**. The import operation creates a response profile. You can use this response profile to map data in a [Map step within your integration](/docs/Atomsphere/Integration/Process%20building/c-atm-Map_components_87f669d6-4999-445f-9f29-ed24e79c92dd.md).
12. Enter the source ID in **Source** for the source attached to the record. You can find the source ID on the Sources page in Hub.
13. **Optional**: Select **Return Application Error Responses** if you want the operation to continue when there is an application error. Processing continues and passes the error to the next component processed as the connection output. When the checkbox is clear, the process stops and reports the error in Process Reporting.
12. Click **Save and Close**.
13. Select the **Parameters** tab to import the ID parameter. Click the link to import all. 
14. Select the parameter in the list.
15. Click the edit icon. 
16. Add the source entity ID as the **Static Value**.
17. Click **OK**.
18. Click **Save**.


## Quarantine entry response example

```xml

<QuarantineEntry createdDate="2024-05-08T20:59:53Z" sourceId="SFDC" sourceEntityId="SF-2" transactionId="d093abc8-65df-4b3a-a364-91cbf1839198">
  <cause>REQUIRES_APPROVAL</cause>
  <reason>The source which submitted this entity requires approval to create a golden record.</reason>
  <entity>
    <contact>
      <name>Quinn</name>
      <city>New York</city>
      <state>NY</state>
      <country>USA</country>
    </contact>
  </entity>
</QuarantineEntry>

```
:::info 

The connector uses administrator privileges to authenticate. Therefore, masked field values are unmasked in responses.

:::

|Element | Definition |
| -----  | -----      |
| createdDate |  Date and time of quarantine entry creation. The format is yyyy-MM-dd'T'HH:mm:ss'Z', where 'T' separates the date and time.|
| sourceId    |    Source's unique ID.|
| sourceEntityId |  Unique ID for the source entity.|
| transactionId  | Internal ID associated with this entity upon its initial receipt for processing.   |
| cause          |  Category of the reason for the quarantine. Read [Quarantine cause filters](/docs/Atomsphere/Integration/Connectors/int-BDH_Query_Quarantine_Entries.md#quarantine-cause-filters) for a list of cause definitions.|
| reason         | Reason for quarantining the entity.|