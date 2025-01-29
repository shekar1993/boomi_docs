# Importing a JSON document into a JSON profile

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-bf82f1e7-a79d-42a6-870e-0d50f74ba0d6"/>
</head>


Quickly populate a JSON profile by importing a JSON document.

## About this task

When importing JSON documents into a JSON profile, there are some considerations to keep in mind:

-   When importing a JSON file to generate an JSON profile, the profile can have a maximum of 5,000 nodes. This limitation applies only to imported JSON profiles. However, users can manually add additional nodes beyond this limit as needed after the initial profile generation.
-   The resultant profile has a 10-depth nested limit.
-   The description value, if populated in the JSON document, must be 4,000 characters or less. Otherwise, the imported JSON profile does display the full text after 4,000 characters.

## Procedure

1.  On the **Build** page in the Component Explorer, navigate to and open the JSON profile.

2.  On the tab named for your JSON profile, do one of the following

    -   Click the **Import** button.
    -   Click the **Import a Profile** button.
    The JSON Import Wizard opens.

3.  Next to the **Build JSON Profile from** field, select **JSON File**.

4.  Click **Choose a file**, locate and select the file that you wish to import, then click **Open**.

    You can import JSON data that uses a version 3 or version 4 schema.

    :::note

    If you are importing a new JSON file onto an existing JSON profile component that is currently used in other components, the overwrite may adversely cause mapping errors between the new profile and the original profile's existing configurations within other components. If you choose to proceed, you can manually reconfigure all mappings to use the new profile.

    :::

5.  Click **Next** on the import wizard.

    :::note

    Uploaded or imported files pass through a virus scanner first. If the scan detects a virus, you receive an error message, and the scan rejects the file. If an error persists, contact Boomi Support.

    :::

    The profile is loaded and the root element name is displayed.

6.  Click **Finish** and review the JSON profile's elements.

7.  Manually modify the JSON profile as needed.

8.  Click **Save**.

## Next steps

If you re-import a profile to incorporate updates, the updated profile might affect the connections in any map where it is used. See the Profile components topic for more information.