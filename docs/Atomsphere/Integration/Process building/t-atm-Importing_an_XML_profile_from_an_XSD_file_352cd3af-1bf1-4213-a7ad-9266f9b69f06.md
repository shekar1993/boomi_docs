# Importing an XML profile from an XSD file

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-352cd3af-1bf1-4213-a7ad-9266f9b69f06"/>
</head>


The steps for importing an XML profile vary depending on the source file or schema.

## About this task

:::caution

When importing a XSD file to generate an XML profile, the profile can have a maximum of 5,000 nodes, 3,300 anonymous or defined complex types, and 10 levels of recurrence. These limitations apply only when importing XML profiles from XSD files. However, users can manually add additional nodes, types, and levels beyond these limits as needed after the initial profile generation.

:::

To import from an XSD file:

## Procedure

1. On the **Build** page, click **New**.

2. From the Component types dialog, select *XML Profile* from the first list.

3. Enter a name for your profile.

4. On the tab named for your XML profile, click the **Import** button.

5. In the Build XML Profile From field, select **XML Schema** (XSD file).

6. Click **Browse**, locate and select the file, then click **Open**.

7. Click **Next**.

    :::note

    Uploaded or imported files pass through a virus scanner first. If the scan detects a virus, you receive an error message, and the scan rejects the file. If an error persists, contact Boomi Support.

    :::

8. Do one of the following:

   - To import an XML schema that does *not* reference other schema files, click **Next** and go to to step 11.

   - To import an XML schema that references other schema files, follow the steps below.

9. The XML Import Wizard provides a list of missing schemas. To omit importing them, click **Ignore Missing Schemas** and then go to step 11.

10. To import a referenced schema, click **Browse**, locate and select the schema, and click **Open**.

    This is a recursive step, so if the missing schemas in turn reference other schemas repeat this step until all dependent schemas are imported.

    The referenced schema appears in the list.

    :::note

    Only use absolute paths when importing an XML schema that references other XML schemas — for example, `schemaLocation="ABC.xsd"`. Relative paths cannot be parsed.

    :::

11. Repeat the previous step for each referenced schema, then click **Next**.

12. Choose the root element to use for this XML profile and click **Next**.

    The profile is loaded and the root element name is displayed.

13. Click **Finish** and review the XML profile's elements.

14. Click **Save**.

## Next steps

If you need to re-import a profile to incorporate updates, the updated profile might affect the connections in any map where it is used. See [Profile components](./c-atm-Profile_components_e9b3ea44-7b4a-4d1e-8185-e09e429275f6.md) for more information.