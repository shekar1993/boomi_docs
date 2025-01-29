# Importing a flow

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-d6a6d656-0e4b-4e59-b830-cbec14557491"/>
</head>


The **Import** tool allows you to import previously exported flows into your current tenant.

## Before you begin

-   You will need either a flow shared package file or a shared package token to import. These are generated using the **Export** tool. See [Exporting a flow](c-flo-Export_a_Flow_68fc8c07-7e2a-4011-98f5-d3d40c295277.md).

-   When a flow is imported into a tenant, any used in the flow will also be imported. Best practice recommends updating these once you have imported the flow, so that the types are also updated. This ensures that the can be used in other flows in the tenant. If you do not update the , any types not included in the imported flow will not be recognised by the . See [Editing a service](t-flo-Services_Editing_a_Service_571922e4-9c92-463b-bb4a-80ff42580abc.md).


## Importing a flow shared package file

If you have a shared package file \(.package\):

1.  On the **Home** tab, select **Import/Export** from the main menu.
2.  On the **Import/Export** page, either:
    -   Drag and drop the .package file onto the **Import Package** field.

    -   Click the **Import Package** field, browse to the file and click **Open**.

3.  The **Confirm Import** dialog is displayed informing you of which tenant you are importing the flow into.
    -   Click **Confirm** to import the file into the tenant.

    -   Click **Cancel** to stop the import process and return to the **Import/Export** page.

4.  A message is displayed to inform you that the 'Flow imported successfully'. As noted in best practice above, it is recommended that you update any used in the imported flow.

## Importing a flow shared package token

If you have a shared package token:

1.  On the **Home** tab, select **Import/Export** from the main menu.
2.  On the **Import/Export** page, enter/paste the shared package token into the **Import Shared Package Token** field.
3.  Click **Import**.
4.  The **Confirm Import** dialog is displayed informing you of which tenant you are importing the flow into.
    -   Click **Confirm** to import the file into the tenant.

    -   Click **Cancel** to stop the import process and return to the **Import/Export** page.

5.  A message is displayed to inform you that the 'Flow imported successfully'. As noted in best practice above, it is recommended that you update any used in the imported flow.