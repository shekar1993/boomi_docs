# Stopping an Atom worker 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-1491e113-41fe-407a-ad35-c1a33fbd099b"/>
</head>


Cloud owners can stop an Atom worker during its scheduled run time.

## Procedure

1.  Select **Manage** \> **Atom Management**.

2.  Select an active Atom Cloud from the list on the left.

3.  In the Runtime list, click **Atom Workers**.

4.  In the Atom Workers panel, locate the Atom worker in the Name column, click ![Gear or Action](../Images/main-ic-gear-blue-and-arrow-black-16_188e61d7-2204-48ad-b085-15fa4a70615d.jpg) and select ![Stop Atom Worker](../Images/main-ic-x-red-stylized-16_5cfc1d0e-0ef7-44cc-bacf-4b4116afca79.jpg) **Stop Atom Worker**.

    A confirmation dialog opens.

5.  Click **OK**.

    When the Atom worker stops, it no longer appears in the Active view and does appear in Inactive. An entry is added to the Cloud’s audit log.

    **Note:** If you attempt to stop an Atom worker that has been recently active because it appears to be “hanging,” then the Atom worker is not stopped. If the Atom worker has not been active recently, the Atom worker is already terminated. The Atom worker is removed from the Active view and appears in the Inactive view with an aborted status.