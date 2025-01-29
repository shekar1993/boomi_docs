# Disabling metadata caching for connector operations 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-125e900b-1042-48d7-8699-848dc38f1789"/>
</head>


When you disable metadata caching for connector operations, no metadata is stored in the cache to avoid impact on the Atom's available memory.

## Before you begin

You must have the Atom Management privilege to set properties. If you have the Atom Management Read Access privilege, you can view existing settings, but you cannot change them.

## About this task

The metadata from the service is saved or refreshed in the connector cache when browsing the service \(**Import Wizard**\) and retrieving the metadata for Get and Query operations. The metadata is reused for each operation to produce faster response times. If the metadata is not already cached, or if the cache has expired, it is retrieved again from the service and cached. Cached metadata expires after 24 hours and is cleared when the Atom stops.

If caching the metadata impacts the Atom's available memory, you can disable the metacaching by setting the `com.boomi.connector.odata.disableMetadataCaching` container property to true. As a result, no metadata is stored or read from the cache.

## Procedure

1.  Go to **Manage** \> **Atom Management**.

2.  Do one of the following:

    -   If you are the owner of a local Atom, Molecule, or private Atom Cloud, select your Atom, Molecule, or Cloud from the list on the left.

    -   If you are an account owner, select your Atom from the list on the left.

3.  Do one of the following:

    -   Open the **Properties** panel.

    -   Open the **Account Properties** panel.

    
:::note

The properties that you see are those that were in effect when the Atom, Molecule, or private Atom Cloud started. Properties are displayed regardless of how they were set — through the Boomi Enterprise Platform UI or manually by editing the `<installation_directory>/conf/container.properties` file or the `<installation_directory>/bin/atom.vmoptions` file.

:::

4.  Click the **Custom** tab.

    Only owners of local Atoms, Molecules, and private Atom Clouds have access to this tab. If you own an Atom set up in a private Cloud, you cannot see the **Custom** tab.

    Some errors can be detected immediately. A red box appears around the property if there are errors. The error messages appear below the box.

    Properties initially appear in the order in which you added them. After you click Save, the properties are alphabetized by property name.

    ![Atom Properties](../Images/manage-ps-properties-custom-tab_c99ba52d-98d6-4314-b8bf-090a1b801855.jpg)

5.  To set the metadata caching container property on the **Custom** tab:

    a.  Click **![Plus](../Images/main-ic-plus-sign-white-in-blue-circle-16_98f7af60-dd5f-4037-90cd-05cc9dfc5502.jpg) Add a Property** in the **Container Properties** section.

    b.  Type `com.boomi.connector.odata.disableMetadataCaching` in the **Property Name** field.

    c.  Enter true in the **Property Value** field next to the property name.

6.  Click **Save**.

    Because changes to many of these properties do not take effect until the Atom, Molecule, or private Atom Cloud is restarted, you are prompted to restart. You have the option to restart now or restart later.

    Only Atom, Molecule, and Cloud owners can restart them. Accounts that have an Atom in a Cloud cannot restart the Cloud.

    If errors are still detected, a warning message appears containing the names of the tab\(s\) on which there are errors. You must correct the errors before the properties can be saved.