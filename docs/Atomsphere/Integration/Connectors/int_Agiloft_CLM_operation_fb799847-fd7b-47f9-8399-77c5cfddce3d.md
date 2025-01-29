# Agiloft CLM - Partner operation 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-fb799847-fd7b-47f9-8399-77c5cfddce3d"/>
</head>


The Agiloft CLM - Partner operation implements a specific task such as reading the content of a record or deleting an attachment.

## Options tab 

Each operation implements a specific task such as reading the content of a record or deleting an attachment. It is linked with one table object or record in Agiloft. One operation for each combination of task and table object or record is needed in a Boomi process that exchange data with more than one table in Agiloft.

All operations use JSON format and support the following actions:

-   Get — Returns a JSON object that contains the content of all fields from a specific record in the Agiloft KB.
-   Query — Returns a list of records and the content of each record. A Query can be based on a “Saved Search” that exists in Agiloft or can be configured with filter parameters.
-   Update — Updates an existing record in Agiloft with the provided data.
-   Delete — Deletes the specified record in Agiloft.
-   Attach — Attaches a new file to the specified attachment field in Agiloft.
-   AttachRetrieve — Returns an attached file from the specified field. If the field contains multiple files, then each file can be selected in the request by its ID.
-   AttachRemove — Deletes an attached file in the specified field. If the field contains multiple versions of this file, then the version can be selected in the request.

## Configuration of a new operation 

The principal steps to configure a new operation are the same for all types of operations supported with the Agiloft CLM - Partner connector.

Steps

1.  Add the Agiloft CLM - Partner connector to the canvas and select the operation type \(e.g. Get\).
2.  Click the **Import** button.
3.  Select the Atom and connection in the **Import Wizard** and click **Next**.
4.  Select the **Object Type** and click **Next**. The Object Type refers to the corresponding table in the Agiloft KB.
5.  Review the generated JSON response profile. This can also be done at a later time by clicking on the operation’s pencil icon.
6.  Click **Finish**.
7.  Click **Save**. This creates the new operation.
8.  Open the operation to configure its parameters.

## Get 

The Get operation returns a list of fields for the specified record and table and the content of each returned field.

Available parameters

- **Record ID** - The ID of the record that is to be retrieved.

Settings that can be configured in JSON requests

-   None

## Query 

The Query operation returns a set of records from the specified Agiloft table. Results can be filtered either by specifying an Agiloft Saved Search that exists for the selected table or by adding filter criteria to the Operation’s parameters.

-   The list of returned fields can be limited by explicitly adding the fields that are returned by this operation in the parameters section.
-   If neither a saved search nor filter criteria are specified, then the content of the entire table is returned.

Steps

1.  Configure the Query Operation following the steps described in the “Get Operation” section.
2.  Open the new Query Operation.
    1.  Add the name of the Agiloft saved search in the **Saved Search** field.
    2.  Alternatively, configure filter criteria in the **Filters** tab.
    3.  Parameters for use with the filter expression can be configured in the Connector \> Parameters menu.
3.  List the Agiloft table fields that the query returns in the **Fields** section.

Available parameters

-**Filters** - \(Optional\) Can be used as alternative to the saved search. Specify a list of filter criteria for individual fields in order to limit the list of returned results.

Settings that can be configured in JSON requests

-**Fields** - \(Optional\) A list of fields that are returned by the operation. If not specified, all fields are returned.

- **Saved Search** - Specify a saved search that exists in the Agiloft KB for the selected table to limit the list of returned results.

Read more about saved searches as a powerful tool for configuring complex filter conditions at https://wiki.agiloft.com/display/HELP/Creating+Saved+Searches

## Create 

The Create Operation adds a new record to the specified table and populates it with the data provided in the operation. If no data is provided, then fields in the new record are either empty or contain default values depending on the configuration in the Agiloft KB’s setup.

The Create request returns the identifier of the newly created record.

Steps

1.  Configure the Create operation following the steps described in the “Get Operation” section.
2.  Edit the generated JSON Request Profile to add and configure the fields for which values are set by the Create operation.

Available parameters

-   None

Settings that can be configured in JSON requests

- **Fields** - Configure presets for individual fields when the new record is created.

If the Create operation is successful, the connector returns a JSON document with information about generated ID value of the created record.

## Update 

The Update operation changes the values in the fields specified in the operation for the specified table record in the Agiloft KB

Steps

1.  Configure the Update operation following the steps described in the “Get Operation” section.
2.  Edit the generated JSON Request Profile to add and configure the fields for which values are updated by the Create Operation.

Available parameters

- **Record ID** - The ID of the record that is to be retrieved.

Settings that can be configured in JSON requests

- **Fields** - Configure the content of each individual field that is to be updated in the specified record. Fields that are not included in this setting remain unchanged.

If the Update operation is successful, the connector returns a JSON document with information updated record.

## Delete 

The Delete operation removes the specified record from the specified table object in the Agiloft KB.

Steps

1.  Configure the Delete operation following the steps described above.

Available parameters

- **Record ID** - The ID of the record that is to be deleted.

Settings that can be configured in JSON requests

-   None

When successful, returns JSON document with field “success” equals true.

## Attachment operations 

These operations are used to add, retrieve or remove files attached in records. Available Operations:

-   Attach
-   AttachRetrieve
-   AttachRemove

Attachment fields in Agiloft tables can contain more than one file. A list of files and their IDs can be obtained with the Get or Query Operations. In attachment operations for reading or removing a file, the file ID must be specified in order to perform the operation on the correct file.

All three operations \(attach, attachRetrieve, attachRemove \) return the number of files available in the specified field record.

Available parameters

- **Record ID** - The ID of the record that is used with the selected attachment operation.

Settings that can be configured in JSON requests

- **filePosition** - \(attachRetrieve, attachRemove\) Identifies the file in the attachment field. The filePosition IDs for all files can be obtained with a Get Operation on the selected record.