# Properties panel, Custom tab 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-5fa074ca-cada-4746-946d-42b20c67cf74"/>
</head>


The Properties panel Custom tab can be used to set properties that you do not see on the Basic or Advanced tabs.

The Custom tab is available only for a local Atom, Molecule, or private Atom Cloud. It is not available for account properties. The tab is used primarily for adding custom properties that Support might ask you to set.

:::caution

Boomi does not validate the properties that you set on the Custom tab. It is imperative that you understand the impact of the properties you set. It is possible for an incorrect property or property value to impact the availability and performance of the Atom, Molecule, or private Atom Cloud.

:::

![The Properties panel, Custom tab in the Boomi Enterprise Platform](../Images/manage-ps-properties-custom-tab_c99ba52d-98d6-4314-b8bf-090a1b801855.jpg)

## Container Properties

Container properties for an Atom, Molecule, or private Atom Cloud are stored in the `<installation_directory>/conf/container.properties` file.

|Name|Description|
|----|-----------|
|**Add a Property**|Adds a pair of blank Property Name and Property Value fields to the table.|
|**Property Name**|Used to enter a custom container property name. You must enter the complete property name. For example, `com.boomi.container.property`.|
|**Property Value**|Used to enter a custom container property value.|

## System Properties 

System properties for an Atom, Molecule, or private Atom Cloud are stored in the `<installation_directory>/bin/atom.vmoptions` file.

|Name|Description|
|----|-----------|
|**Add a Property**|Adds a blank Property field to the table.|
|**Property**|Used to enter a custom system property. You must enter the complete property. For example, `-Djava.property` or `-Dcom.property`.|