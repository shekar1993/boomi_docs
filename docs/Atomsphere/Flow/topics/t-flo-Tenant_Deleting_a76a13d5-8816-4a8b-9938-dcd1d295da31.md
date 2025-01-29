# Deleting a tenant

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-a76a13d5-8816-4a8b-9938-dcd1d295da31"/>
</head>


You can delete tenants and subtenants using the **API** tool.

:::caution

Deleting a tenant is permanent and cannot be undone. You can only delete a tenant that does not contain any flows. If your tenant contains flows, you will need to delete the flows first, before you can delete the tenant.

:::

1.  Ensure that you are in the correct tenant.
2.  Open the **API** tool.
3.  Enter `api/admin/1/tenant` into the API **Address** field and click **Delete**.
4.  A message will confirm the deletion. An email is sent to the email address associated with the tenant, containing a link that must be clicked to confirm the tenant deletion.
5.  Once you have clicked the confirmation link, the tenant is permanently deleted from Boomi Flow.