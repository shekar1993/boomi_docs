# Editing a Cloud Molecule’s properties 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-f39216d0-a725-4efd-b976-d6f19d99bd10"/>
</head>


View, set, and edit the properties of Cloud Molecules that you attached to the Atom Cloud in the **Cloud Management** page.

## Procedure

1. Click the **Manage** menu and select **Cloud Management**.

2. On the **Clouds** tab select the Atom Cloud.

3. Click the **Attachment Quotas** tab.

4. Click the Cloud Molecule.

    The Cloud Molecule’s property values appear in the right pane.

5. Edit the Cloud Molecule’s property values as needed.

    For example, if you are adding an Atom worker you change the **Atom Workers** property from **0** to **1**.

    Note that the Cloud owner must also enable Atom workers. See the topic linked below.

6. If you make a mistake and want to see the previously saved values, click **Reload**.

7. Click **Save**.

    Boomi saves the Cloud Molecule’s property values. Therefore, if you did not set these for the Atoms installed in this Cloud Molecule by the various accounts, the Atoms would inherit the property values.

8. If you changed any of the following property values, you must restart the Cloud Molecule.

    - **Default HTTP Workload**
    - **HTTP Request Rate**
    - **Atom Worker Maximum Execution Time**
    - **Atom Worker Maximum General Execution Time**
    - **Atom Worker Maximum Queued Executions**
    - **Atom Worker Maximum Running Executions**
    - **Atom Worker Queued Execution Timeout**


## Next steps

If you need to edit a property that you do not see on this tab, you must use a text editor to edit it in the Cloud Molecule’s `<molecule_install_dir>\conf\container.properties` file.