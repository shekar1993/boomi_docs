# Upgrading clustered Atoms to JGroups 3 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-031158d9-8f85-4bfd-8549-da602ac7d7dc"/>
</head>

To upgrade your Molecules and private Atom Clouds from JGroups2 to JGroups 3, set the **JGroups Clustered Library Version** property on the **Properties** panel.

## Before you begin

You must have the Atom Management privilege to perform this task. If you have the Atom Management Read Access privilege, you cannot perform the task.

## About this task

Boomi recommends upgrading your Molecules and private Atom Clouds to JGroups 3 because JGroups 3 provides better stability for clustered Atoms (Atoms that are used in Molecules and Clouds).  
**Note:** JGroups 3 is the default for new clustered Atoms that are being installed on the Java 8 Molecule or Atom Cloud installer.

## Procedure

1.  Go to **Manage** \> **Atom Management**.

2.  Select the Molecule node or Cloud Molecule from the list.

3.  In Settings & Configuration, click **Properties**.

    The Molecule Properties panel opens.

4.  Click the **Advanced** tab.

5.  Select the **JGroups Clustered Library Version** property \(`-Dcom.boomi.container.clusterLibVersion`\) and click **![](../Images/main-ic-plus-sign-white-in-blue-circle-16_98f7af60-dd5f-4037-90cd-05cc9dfc5502.jpg) Add a Property**.

6.  In the Property Value field, type 3.

7.  Click **Save**.

    Because changes to this property do not take effect until the Molecule or Atom Cloud is restarted, you are prompted to restart. You have the option to restart now or restart later.

## Next steps

After the Molecule or Atom Cloud restarts, verify that this message shows up in its container logs:

```
INFO [com.boomi.container.cloudlet.cluster.ClusterManager <init>] Loading ClusterManager JGroups3ClusterManager
```

Note the number 3 in: “JGroups3ClusterManager”. If the number 3 is not there, the Molecule node or Cloud Molecule was not upgraded.