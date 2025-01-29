# Atom & Connector Versions panel 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-2BDE9010-B2AC-4974-B318-5E5406C29A76"/>
</head>


This panel is used to view the selected Atom \(or Molecule or Cloud\) and each connector that uses the Atom, the versions of each, and to see whether newer versions are available.

The Atom & Connector Versions panel appears on the Atom Management page \(**Manage** \> **Atom Management**\). The panel includes connectors and custom connectors developed by partners.

:::note

For a connector to appear on this tab, the connector must be used in a process that has been deployed to the selected Atom. The process must have been run at least once.

:::

If a newer version is available before the release, you can choose to update to the latest version. Connectors are built and tested with specific Atom versions, so you may need to apply the latest Atom version, too. If you applied pending versions, you can roll back the updates and return to the currently released version.

:::info

You must have the Atom Management privilege to apply or roll back updates. If you have the Atom Management Read Access privilege, you can view information about the updates but you cannot perform any actions.

:::

**Name**  
**Description**

**Type**  
The name of the Atom or connector.

**Last Updated Date**  
The date and time at which the Atom or connector was most recently updated.

**Version**  
The version number of the Atom or connector that you are currently using. If you ever need to contact Technical Support because you are experiencing problems with an Atom or connector, they may ask you for the version number.

**Pending Version**  
 The latest available Atom or connector version that you can apply to your Atom or connector. Pending versions of connectors can appear during the period or as an early access release. Pending versions of public custom connectors appear here until their public release date \(if the developers make them available\).

:::note

If the pending versions are part of the release and you did not choose to update early, then you are automatically updated to the release version upon release.

:::

**Rollback Version**  
The currently released version number of the Atom or connector. If you applied a pending version of an Atom or connector during the or as an early access release, you can remove the updates and go back to the currently released version.

**Select Pending Versions**  
If you are authorized to update the Atom or its connectors and a pending version is available, the **Select Pending Versions** button appears in the panel. Use the button to selectively update the Atom and its connectors to their latest available versions \(this include's the Atom's public custom connectors\).

**Select Rollback Versions**  
If you are authorized to remove updates from an Atom or its connectors, and a rollback version is available for a pending version you applied, then the **Select Rollback Versions** button appears in the panel. Use the button to selectively remove updates applied to an Atom and its connectors that were applied during the or as an early access \(this include's the Atom's public custom connectors\).