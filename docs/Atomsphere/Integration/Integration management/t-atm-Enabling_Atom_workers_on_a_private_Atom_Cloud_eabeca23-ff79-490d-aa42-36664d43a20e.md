# Enabling Atom workers on a private Atom Cloud 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-eabeca23-ff79-490d-aa42-36664d43a20e"/>
</head>


A Cloud owner must make a one-time change on the Atom Cloud to enable Atom workers on a private Atom Cloud.

## Before you begin

You must have the Atom Management privilege to perform this task. If you have the Atom Management Read Access privilege, you cannot perform the task.

## Procedure

1.  In the **Manage** menu, select **Atom Management**.

2.  Select the Cloud from the list on the left.

3.  In Settings & Configuration, click **Properties**.

4.  Click the **Advanced** tab.

5.  From the Properties drop-down list, select the **Atom Workers Enabled** property, then click **Add Property**.

6.  Select the check box in the **Property Value** field.

7.  Click **Save**.

    You are prompted to restart the Atom Cloud so that changes to this property take effect. You have the option to restart now or restart later.

## Results

Atom workers are enabled for the Atom Cloud and for accounts that have set up Atoms in this Atom Cloud.

## Next steps

After this property has been changed and the Atom Cloud has been restarted, the Cloud owner must specify the number of Atom workers that are allocated to the Atom Cloud. Set the Atom Workers Enabled property in Cloud Management and specify per Cloud Molecule. Cloud owners can also allocate Atom workers to Atoms that have accounts attached to this Cloud. The Cloud owner can specify other properties related to Atom workers. For instructions, see the related tasks about editing Cloud Molecule and Atom properties.