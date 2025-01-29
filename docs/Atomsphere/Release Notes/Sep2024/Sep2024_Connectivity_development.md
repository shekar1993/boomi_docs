# Connectivity development 

<head>
  <meta name="guidename" content="Release Notes"/>
  <meta name="context" content="GUID-4f226c1f-9cc9-4697-a24c-627081308a64"/>
</head>


## Connector SDK

**We released the following:**

- Amazon IAM Roles Anywhere Authentication is now available. (CON-9669)

- The `auth` ID referenced in the AWS IAM Roles Anywhere connection fields was corrected to say `authenticationType`. (CON-9762)

- Due to a Jackson ClassCastException, the upload of connectors using the strict class loader mode will be blocked. In order to upload a connector, you need to set `strictClassLoading` to `false` or remove the `strictClassLoading` property altogether. (CON-9881)

