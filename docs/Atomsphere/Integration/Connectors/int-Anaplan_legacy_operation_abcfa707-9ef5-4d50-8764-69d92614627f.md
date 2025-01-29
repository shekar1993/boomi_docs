# Anaplan \(legacy\) operation 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-abcfa707-9ef5-4d50-8764-69d92614627f"/>
</head>


The Anaplan \(legacy\) operation defines how to interact with your Anaplan account.

Because each operation is a specific action performed against a specific Anaplan object type, you must create a separate operation component for each action and object combination.

The Anaplan \(legacy\) operation supports the following actions:

-   Upsert — used for importing updates to existing data and inserting new data

-   Query — used for exporting data

-   Update — used for deleting data


## Options tab 

Select a connector action, then use the **Import Wizard** to select the object with which you want to integrate. The following table describes the default field definitions for each action type:

**Object** - Displays the object type that you selected in the **Import Wizard**.

**Export** \(Query only\) - Enter the action name.

**Action Id** \(Update only\) - Enter the name of your Anaplan delete action.

**Import** \(Upsert only\) - The batch size for grouping requests. The default is 200.

**Column Separator** \(Upsert only\) - Enter \\t for tab separators or , for comma separators.