# Enabling processed document archiving for a private Atom Cloud 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-654577b2-4aa2-4841-9fbf-afd895cae19e"/>
</head>


As the owner of a private Atom Cloud, you can enable processed document archiving for your Atom Cloud. Doing so is a prerequisite for allowing individual tenants to enable processed document archiving — see the linked topic.

## Procedure

1.  Create the directory on the Atom Cloud into which to archive processed documents.

    :::note

    If you skip this step, the directory you designate in step 7 is automatically created when you restart the Atom Cloud \(step 12\).

    :::

2.  In Atom Management \(**Manage** \> **Atom Management**\), select the Atom Cloud.

3.  Click **Properties**.

    The Cloud Properties panel appears.

4.  Select the **Advanced** tab.

5.  In the properties list, select Processed Document Archive Directory.

6.  Click **Add Property**.

7.  In the properties table, set the value for the property **Processed Document Archive Directory**.

    If you already created the directory \(step 1\), set its path as the value.

8.  In the properties list, select Archive Processed Documents.

9.  Click **Add Property**.

10. In the properties table, turn on **Archive Processed Documents**.

11. Click **Save**.

12. Restart the Atom Cloud.

    :::note

    You can restart the Atom Cloud at your convenience. However, property changes are not applied until the Atom Cloud restarts.

    :::