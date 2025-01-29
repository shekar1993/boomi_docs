# Properties panel 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-2E5DDAD3-E8A9-4A8C-9F28-D72F054D63DB"/>
</head>


If your account owns a local Atom, Molecule, or private Atom Cloud, you can add and set its properties on the tabs in the Properties panel.

:::note

You must have the Atom Management privilege to perform actions on the Properties panel. If you have the Atom Management Read Access privilege, you can view existing properties, but you cannot add, change, or delete any properties.

:::

The Properties panel appears on the Atom Management page \(**Manage** \> **Atom Management**\).

![](../Images/img-int-atom%20properties-basic%20tab.png)

The Properties panel includes the following tabs:

-   [Basic tab](r-atm-Properties_panel_Basic_tab_8eb9b9cf-e371-44ba-897f-4232ce22f122.md)

-   [Advanced tab](r-atm-Properties_panel_Advanced_tab_c39737e8-1b16-4fdd-b414-152694364c14.md)

-   [Custom tab](r-atm-Properties_panel_Custom_tab_5fa074ca-cada-4746-946d-42b20c67cf74.md)

If runtime is online, on clicking the Refresh button, you can see the updated properties of Atom, Molecule, or Atom Cloud. 

The properties that you see on this panel are stored in either the \<installation\_directory\>/conf/container.properties file or the \<installation\_directory\>/bin/atom.vmoptions file for the Atom, Molecule, or Atom Cloud \(except where noted\). Although you can use a text editor to edit the properties in these files, it is easier and it is recommended that you edit the properties in the Properties panel instead. Properties are displayed on this panel regardless of how they were set — through the UI or manually by editing one of the files.

:::note

Only certain properties are displayed if the Atom, Molecule, or private Atom Cloud is offline.

:::

Many properties require you to restart the local Atom, Molecule, or private Atom Cloud after you set or change the property. When you click **Save**, you are prompted to restart. You have the option to restart immediately or restart later. Only Atom, Molecule, and Atom Cloud owners can restart them. Accounts that have an Atom in an Atom Cloud cannot restart the Cloud.

When you open the Properties panel, the properties that you see are those that were in effect when the Atom, Molecule, or private Atom Cloud started. If you modify the properties after the Atom, Molecule, or private Atom Cloud was started, those changes will not take effect until you restart the Atom, Molecule, or private Atom Cloud.