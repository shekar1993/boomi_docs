# Boomi Master Data Hub Listener operation

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-9319c751-5cc8-45e6-bbff-f3ea2f7d2378"/>
</head>

The Boomi Master Data Hub Listener operation receives a batch of source entities contributed to a domain hosted on a Hub repository Atom.

In addition, the operation receives batch metadata as the following dynamic process properties:

-   mdm\_source\_id — ID of the batch's contributing service.
-   mdm\_account\_id — ID of the account under which the batch was contributed.
-   mdm\_repository\_id — system ID of the repository on which the target domain is hosted.
-   mdm\_universe\_id — system ID of the domain.

For each entity in a batch, the operation receives the source entity ID as the dynamic document property mdm\_source\_entity\_id. If an entity is an update to an existing golden record, the operation receives the golden record’s ID as the dynamic document property mdm\_record\_id. It populates each root entity element’s id attribute with the **Batch Entity ID**, accessible from the batch detail view on the **Inbound Activity** page \(**Reporting** \> **Inbound Activity**\). If an entity is an update to an existing golden record, it populates the root entity element’s grid attribute with the golden record’s ID.

You must configure a listener process **Start** step to run this operation.

## **Options** tab 

The operation does not have any configuration options.

## Tracking tab

See the topic [Connector operation’s Tracking tab](../Process%20building/r-atm-Connector_operations_Tracking_tab_8a03f547-738a-448c-bb0f-594bad806cfe.md) for more information.

## Caching tab

See the topic [Connector operation’s Caching tab](../Process%20building/r-atm-Connector_operations_Caching_tab_f46b49d6-25bc-4337-ade1-9c67817b8d74.md) for more information.