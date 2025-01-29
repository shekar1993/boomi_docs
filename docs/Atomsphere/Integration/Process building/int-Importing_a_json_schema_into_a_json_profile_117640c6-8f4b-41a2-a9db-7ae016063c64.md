# Importing a JSON schema into a JSON profile

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-117640c6-8f4b-41a2-a9db-7ae016063c64"/>
</head>


Quickly populate a JSON profile by importing a JSON schema file from your local drive.


## About this task

As an Platform user, you can import JSON schemas containing single or multiple objects and choose which objects are used to build the final JSON profile. Using the import wizard, you can reimport the same or a different object from which to build your JSON profile. During import of the JSON schema, data type details are populated in the Element Details tab of the resulting JSON profile.

:::note

When importing a JSON schema to generate an JSON profile, the profile can have a maximum of 5,000 nodes. This limitation applies only to imported JSON profiles. However, users can manually add additional nodes beyond this limit as needed after the initial profile is generated.

:::

:::note

Uploaded or imported files pass through a virus scanner first. If the scan detects a virus, you receive an error message, and the scan rejects the file. If an error persists, contact Boomi Support.

:::

Use the following steps to populate a JSON profile component using a schema file:

## Procedure

1.  From the **Build** page in the application, do one of the following:

    -   To open an existing JSON profile component, navigate to and open the JSON profile in the Component Explorer.
    -   To create a new profile, click the **Create New** button and select **JSON Profile** from the list.
2.  Once your JSON profile is created or opened, do one of the following:

    -   Click the **Import** button.
    -   Click the **Import a Profile** button.
    The JSON Import Wizard opens.

3.  From the **Build JSON Profile from** field, select JSON Schema from the list of options.

4.  Click **Choose a file**, locate and select the JSON schema file that you wish to import, and then click **Open**.

    You can import JSON data that uses version 3 or version 4 of the [JSON Schema Specification](https://json-schema.org/specification-links.html).

    :::note

    If you are importing a new JSON file onto an existing JSON profile component that is currently used in other components, the overwrite may adversely cause mapping errors between the new profile and the original profile's existing configurations within other components. If you choose to proceed, you can manually reconfigure all mappings to use the new profile.

    :::

5.  Click **Next** on the import wizard.

    The profile is loaded and the root element name is displayed. If the root object does not have a title, the schema's file name is used as the object name.
 
6. **Optional:** If the file you attempted to upload is missing any schemas that the Import Wizard expects, you are prompted to locate and upload the missing schemas. In this case, you can either:

    -   Turn on the **Ignore Missing Schemas?** option to proceed with building the profile without these items. Click **Next**.
    -   Or click **Choose a File** to locate the required schemas, then click **Open**. Click **Next**.
7.  Select an object from which to build your JSON profile, and then click **Next**.

    Only root-level objects are available for selection. The JSON Import Wizard does not support the following schema keywords: additionalItems, additionalProperties, patternProperties, dependencies, disallow, extends, allOf, anyOf, definitions, not, one of.

8.  Click **Finish**.

## Results


Your new JSON profile is successfully imported from the selected schema file and the JSON profile's Element Details tab is populated according to the specifications of your imported schema. To learn about how translates JSON schema to automatically generate a JSON profile, see the topic [JSON schemas in Integration](int-JSON_schemas_5ee2b652-c4bf-428d-832d-13b9fdf45828.md).