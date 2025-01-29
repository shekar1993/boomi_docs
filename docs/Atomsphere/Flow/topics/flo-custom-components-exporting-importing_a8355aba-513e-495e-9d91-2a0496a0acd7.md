# Export and import custom components

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-a8355aba-513e-495e-9d91-2a0496a0acd7"/>
</head>


Reuse custom components by exporting and importing them across your tenants.

## Export a custom component

To export a custom component from :

1.  Open the **Components** page.
2.  Select the **Export** icon in the **Actions** column of the custom component.
3.  The custom component is exported as a `.component` JSON metadata file.

## Import a custom component

To import a custom component that was previously exported from :

1.  Open the **Components** page.
2.  Either:
    -   Drag and drop the `.component` file onto the **Import Component** field.

    -   Click the **Import Component** field, browse to the `.component` file, and click **Open**.

3.  If the component already exists in the tenant, the **Overwrite existing component?** dialog is displayed.
    -   Click **Confirm** to import the file into the tenant.

    -   Click **Cancel** to stop the import process and return to the **Components** page.

4.  The component is added to the tenant, and made available to use in the page builder.

    -   See [Use a custom component in a page](flo-custom-components-adding_9dbee400-f443-4c31-b7bd-94217473956d.md).