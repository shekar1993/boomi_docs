# Processed document archiving 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-1e1fedc4-b844-4dde-988a-875b4980cce9"/>
</head>


Processed documents for both connections and trading partners can be archived on a local Atom or Molecule or a private Atom Cloud. Processed document archiving is useful for auditing transactions or for viewing series of documents end-to-end, such as purchase order flows, that extend over multiple months.

On an Atom for which processed document archiving is enabled, archiving occurs according to the Atom’s purge schedule. When the scheduled purging of processed documents, execution logs, and temporary data occurs, processed documents are archived in a designated archive directory.

The archive directory is designated by the Atom Cloud owner or local Atom owner. The destination directory for archiving for an Atom attached to an Atom Cloud is actually a sub-directory of the Atom Cloud’s archive directory. For example, if Atom Cloud C’s archive directory is /C and Atom A is attached to Atom Cloud C, Atom A’s archives are written to /C/A.

The archive directory is managed by the Atom owner. The data in the archive directory is not purged. If the archive directory is changed, it is the responsibility of the Atom owner to manually copy previously archived documents from the old archive directory to the new one.

:::note

An extra-cost, companion option called Extended Process Reporting Archive is available for local Atoms and Molecules and private Atom Clouds whereby document metadata is stored for an additional 18 months. **This option is not available for the public Boomi Atom Cloud.**If this option is enabled, document metadata continues to be accessible during the extended storage period in **Executions**, **Documents**, and **Trading Partner** lists in the Process Reporting page \(**Manage** \> **Process Reporting**\). Archived documents are linked from those lists to enable easy retrieval. To have this option enabled for your account, contact your representative. For more information, see the Boomiverse article [Document Archiving Options](https://community.boomi.com/s/article/Document-Archiving-Options).

:::

## Configuring archiving for an Atom attached to a private Atom Cloud 

Assuming the archiving feature is enabled for both an Atom Cloud owner’s account and the account of the owner of an attached Atom, in order for archiving to occur on that Atom, the following configuration tasks must be performed:

1.  The Atom Cloud owner must designate the Atom Cloud’s archive directory by setting the property **Processed Document Archive Directory** on the **Advanced** tab of the Cloud Properties panel in **Manage** \> **Atom Management**.

2.  The Atom Cloud owner must enable archiving for the Atom Cloud by turning on the property **Archive Processed Documents** on the **Advanced** tab in the Cloud Properties panel in **Manage** \> **Atom Management**.

3.  The Atom Cloud owner must allow archiving to be enabled on the Atom by setting the property **Enable Processed Document Archiving** for the Atom on the **Attachment Quotas** tab in **Manage** \> **Cloud Management**.

4.  The Atom owner must enable archiving by turning on the property **Archive Processed Documents** on the **Advanced** tab of the Account Properties panel in **Manage** \> **Atom Management**.


When the Atom Cloud is restarted, if the designated archive directory does not already exist, it is automatically created.

Linked topics describe these tasks in detail.

## Configuring archiving for a local Atom or Molecule 

Assuming the archiving feature is enabled for the account of the owner of a local Atom or Molecule, in order for archiving to occur on that Atom or Molecule, the owner must set two properties on the **Advanced** tab of the Atom Properties panel or Molecule Properties panel in **Manage** \> **Atom Management**:

1.  Designate the archive directory by setting **Processed Document Archive Directory**.

2.  Enable archiving by turning on **Archive Processed Documents**.


When the Atom or Molecule is restarted, if the designated archive directory does not already exist, it is automatically created.