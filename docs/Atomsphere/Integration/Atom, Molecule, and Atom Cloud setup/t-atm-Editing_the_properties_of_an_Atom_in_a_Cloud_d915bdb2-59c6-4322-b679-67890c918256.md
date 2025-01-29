# Editing the properties of an Atom in a Cloud Molecule 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-d915bdb2-59c6-4322-b679-67890c918256"/>
</head>


View, set, and edit the properties of Atoms that you attached to the Cloud Molecule in the **Cloud Management** page.

## Procedure

1. Click the **Manage** menu and select **Cloud Management**.

2. On the **Clouds** tab, select the Atom Cloud.

3. Click the **Attachment Quotas** tab.

4. Click the Atom for which you want to edit properties.

    The Atom’s property values appear in the right pane. If you did not set these values at the Cloud Molecule level, then the default values appear. If you set any of these values at the Cloud Molecule level, then the Cloud Molecule’s values appear. If you set any of these values at the Atom level, then the Atom’s values appear.

5. Edit the Atom’s property values as needed.

    For example, if you are adding an Atom worker to the account’s Atom, change the **Atom Workers** property from **0** to **1**.

    Note that the Cloud owner must also enable Atom workers. See the topic linked below.

6. (Optional) If you make a mistake and want to see the previously saved values, click **Reload**.

7. Click **Save**.

    The Integration saves the property values in a file named after the account ID in the `<molecule_install_dir>\conf\limits` directory.

8. If you changed any of the following property values, you must restart the Atom.

    - **Default HTTP Workload**
    - **HTTP Request Rate**
    - **Atom Worker Maximum Execution Time**
    - **Atom Worker Maximum General Execution Time**
    - **Atom Worker Maximum Queued Executions**
    - **Atom Worker Maximum Running Executions**
    - **Atom Worker Queued Execution Timeout**

## Next steps

If you need to edit a property that you do not see on this tab, you must use a text editor to edit it in the Atom’s `<molecule_install_dir>\conf\limits\<account_id>` file.