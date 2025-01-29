# Integration

<head>
  <meta name="guidename" content="Release Notes"/>
  <meta name="context" content="GUID-5b790200-3771-4099-be60-97fd705a812d"/>
</head>

**We added these features:**

- Added a new field `deleted` to the Cloud object API to get the status of both active and deleted Atoms. You can now retrieve the status of Atoms using the GET operation, where the `deleted` field is false for active Atoms and is true for deleted Atoms. (INT-9316)

  To learn more about this feature, refer to [Cloud object](https://developer.boomi.com/api/platformapi#tag/Cloud).

- Improved loading time for environment extensions when there are a large number of overridable connections, operations, or process properties. (INT-12243, INT-12289)

  To learn more about this feature, refer to [Environment Extensions dialog](../../Integration/Integration%20management/r-atm-Environment_Extensions_dialog_3ee06677-2936-432b-9f29-ce4706083fe5.md).

**We fixed these issues:**

- To update and retrieve the cross-reference table extension values for an environment, we made the following improvements:

  - Updating the extension values of the Cross Reference Table by making API calls no longer adds extra columns to the Cross Reference Table extension in the GET response.

  - After updating the extension values of specific columns with the API, the GET response returns only the same number of columns defined in the Cross Reference Table component.

  - If the Cross Reference Table extension has any number of columns with blank values, the GET response will have an empty string for the columns that do not contain values when retrieving the extension values.

  - The number of columns in UI will be the same in the audit logs and the Get response after updating the values.

    (INT-3559)

   :::note 
   
   Subsequent to the June 2024 Runtime release, this fix for the June platform release is postponed and will be rescheduled.

    :::
- When copying a component, the component dependents successfully get copied to the destination folder in the same account, another account, or sub-account.

  For example, you can copy a connector with its multiple dependents, like operation and connection, to another folder. (INT-11250)

- Added the ability to successfully generate an XML profile by importing the XSD files with dependent schemas, including all profile elements. (INT-10493)

  :::note 
   
   Subsequent to the June 2024 Runtime release, release of this fix is postponed and will be rescheduled.

   :::

- The **Allow dynamic connection properties** checkbox has been removed from the Connector Call and Parameter Value dialogs. The Dynamic Connection properties are not yet supported for connector calls in map functions and parameter values. This functionality will be available in a future release (INT-11378)

- You can now filter based on Component type in the Deployment dialog. (INT-12308)
