# Salesforce REST (Tech Preview) changelog

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-746ad3fe-f032-4dcd-a8a4-8aeeb4ffbe48"/>
</head>

## Changelog

**2024-08 (Version 8, Current)**

- Necessary runtime packages are now packaged with the connector.

**2024-06 (Version 6)**

- The Salesforce REST connector is now in General Availability (GA).

- A new overridable operation field, **External ID Value**, indicates the object to update in the Upsert operation when the Operation API is configured as REST API. If left blank, a new object will be created. This field is ignored when batch count is set greater than 1.

- A new grant type when you authenticate using OAuth 2.0, **Client Credentials**.

- A new option in the Operation API dropdown box for the Create, Delete, Update, and Upsert operations, **Composite API**.

- The operations names for the connector were updated to use Title Case. Although these changes will not affect process executions, if you want to update your process in the build canvas, you will need to re-select the action and operation component in the connector step before deploying.

**2024-04 (Version 4)**

- The Create, Delete, Update, and Upsert operations will throw an Application error when operations using the Composite API fail.

- The `@Type` attribute is now automatically injected into the records node when executing a Composite API request (API REST, batch size > 1) for the Create, Update, and Upsert operations.