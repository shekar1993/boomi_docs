# Get Golden Record operation 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-81630969-17ee-4b5b-aaa3-53772d7dce74"/>
</head>


The Get Golden Record operation retrieves a specified active golden record from the authenticated repository. You can retrieve it based on a golden record ID or source entity ID. This operation aligns with the [Get Golden Record](/docs/Atomsphere/Master%20Data%20Hub/REST%20APIs/r-mdm-Get_Golden_Record_640b6051-a785-4c39-91b7-b9d143c40bed.md) operation in the Repository API.

## Prerequisites

You must have the following:

- A Hub repository 
- A deployed model in the repository
- Active golden records in the repository
- A deployed Boomi Atom to run connector operations (Integration > Manage > Atom Management)

## Setting up the Get Golden Record operation

1. In the connector, select **Get Golden Record** in the **Action** drop-down.
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
12. If you use a source entity ID in step 18, enter the source ID in **Source** for the source attached to the record. You can find the source ID on the Sources page in Hub.
13. **Optional**: Select **Return Application Error Responses** if you want the operation to continue when there is an application error. Processing continues and passes the error to the next component processed as the connection output. When the checkbox is clear, the process stops and reports the error in Process Reporting. 
14. Click **Save and Close**.
15. Select the **Parameters** tab to import the ID parameter. Click the link to import all. 
16. Select the parameter in the list.
17. Click the edit icon. 
18. Add the golden record ID or the source entity ID as the **Static Value**.
19. Click **OK**.
20. Click **Save**.

## Golden record response example

```xml

<contact createddate="04-29-2024T19:41:22.000+0000" grid="12bf3e7e-fa64-4bf9-12gh-12abcd245ef6" updateddate="05-16-2024T19:57:03.000+0000" source="SFDC">
  <id>SF-5</id>
  <name>Quinn</name>
  <city>New York</city>
  <state>NY</state>
  <country>USA</country>
</contact>

```
:::info 

The connector uses administrator privileges to authenticate. Therefore, masked field values are unmasked in responses.

:::

|Element | Definition |
| -----  | -----      |
| createddate |  the date and time of record creation. The format is yyyy-MM-dd'T'HH:mm:ss'Z', where 'T' separates the date and time.   |
| grid        | grid ID                  |
| updateddate | the latest update to the record. The format is yyyy-MM-dd'T'HH:mm:ss'Z', where 'T' separates the date and time. | 
| source    |    the source's unique ID specified in Hub's Sources page.   |
| id        | the unique ID for the source entity. 