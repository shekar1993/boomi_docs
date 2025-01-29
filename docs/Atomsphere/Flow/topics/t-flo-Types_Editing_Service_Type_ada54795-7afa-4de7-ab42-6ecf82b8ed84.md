# Editing Types

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-ada54795-7afa-4de7-ab42-6ecf82b8ed84"/>
</head>


Types installed during a installation can only be edited via the API.

When a is installed in a tenant, all types associated with the are also installed. Unlike custom types that you can create and edit via the Boomi Flow interface, these types can only be edited via the API.

1.  Open the **API** tool.
2.  Enter `/api/draw/1/element/type` in the **Address** field.
3.  Click **GET**.
4.  The **Response** pane is populated with all the types in the tenant.
5.  Copy the JSON of the type you want to update from the **Response** pane, and paste this into the **Request** pane.
6.  In the **Request** pane, add the parameter overrideService=true to the JSON.
7.  Click **POST**.

:::caution

If you subsequently update the , any changes that you have made to the type will be overwritten.

:::