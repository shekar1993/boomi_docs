# Importing an XML profile from an XML file

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-af99c960-cd42-4e3a-a2c8-bc1b16246aa7"/>
</head>


The steps for importing an XML profile vary depending on the source file or schema.

To import from an XML file:

1. On the **Build** page, click **New**.

2. From the Component types dialog, select **XML Profile**.

3. Enter a name for your profile.

4. On the tab named for your XML profile, click the **Import** button.

5. In the Build XML Profile From field, select **XML File**.

6. Click **Browse**, locate and select the file, and then click **Open**.

7. Click **Next**.

    :::note

    Uploaded or imported files pass through a virus scanner first. If the scan detects a virus, you receive an error message, and the scan rejects the file. If an error persists, contact Boomi Support.

    :::

    The profile is loaded and the root element name is displayed.

8. Click **Finish** and review the XML profile's elements.

9. Click **Save** to save and continue working or click **Save and Close** to save and close your project.

## Next steps

You likely need to manually modify the XML profile by setting the minimum and maximum occurs, removing repeated elements and/or groups of elements, and setting data types and formatting.

:::note

If you need to re-import a profile to incorporate updates, the updated profile might affect the connections in any map where it is used. See [Profile components](./c-atm-Profile_components_e9b3ea44-7b4a-4d1e-8185-e09e429275f6.md) for more information.

:::