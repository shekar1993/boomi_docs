# Changing an Atom’s data directory structure 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-c2bf1253-9482-4c03-9f97-8cf4e4176e3c"/>
</head>


To change the directory structure in which process data is stored, use the Atom Data Directory Level property \(`com.boomi.container.dataDirNestLevel`\).

## Before you begin

You must have the Atom Management privilege to perform this task. If you have the Atom Management Read Access privilege, you cannot perform the task.

## About this task

In the default setup, this property is set to 0, which causes all data to be stored in the \<atom\_installation\_directory\>/data/\<creation\_date\> directory.

## Procedure

1.  In the **Manage** menu, select **Atom Management**.

2.  Select the Atom, Molecule, or Cloud Molecule from the list on the left.

3.  In Settings & Configuration, click **Properties**.

4.  Click the **Advanced** tab.

5.  Click in the box next to **Add Property** to open the Property list.

6.  Select the **Atom Data Directory Level** property, click **Add Property**, and add a number from 0–4 in the **Property Value** field.

7.  Click **Save**.

    Because changes to this property do not take effect until the Atom, Molecule, or Atom Cloud is restarted, you are prompted to restart. You have the option to restart now or restart later.