


# Anaplan \(legacy\) connector 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-923cbe1f-4a2d-453f-b24b-d8ac421412d0"/>
</head>


The Anaplan \(legacy\) connector enables you to import and export Anaplan’s business modeling and planning platform data to many On Demand or SaaS-based applications.

:::info Important

The Anaplan \(legacy\) connector is no longer available for customers who did not previously use it. If you are using this connector, you can continue to do so. However, we encourage you to take advantage of the functionality provided by the Anaplan connector.

:::

## Connector configuration 

Configuring a connector to communicate with Anaplan requires the setup of two components:

-   Anaplan connection
-   Anaplan operation

This design provides reusable components that contain connection settings \(URL, User, Password\) and operation settings \(Object, Action, data definitions\). After building your connection and operation, set up your connector within a process. When you configure the Anaplan \(legacy\) connector properly within your process, can map to and from virtually any system using the connector to retrieve data from or send data to the Anaplan application.

## Prerequisites 

To implement a connection to your Anaplan account from , you should have:

-   An Atom deployed on a local machine.
-   An Anaplan username, password, workspace ID, and model ID.
-   An Anaplan model that has lists, modules, or users and a correctly-configured Import action.
-   Knowledge of the Anaplan hierarchical and data dependency structure in the Anaplan model.
-   A single document in CSV format that uses comma or tab delimiters.

If you do not have a CSV file and need to create one, use the Anaplan Export feature’s **Tabular Multiple Column** layout.

For more information, see the readme.zip file \(Anaplan Connector: How To Publish\) that Anaplan distributes to customers.

## Tracked properties

This connector has no predefined tracked properties. See the topic [Adding tracked fields to a connector operation](../Process%20building/t-atm-Adding_tracked_fields_to_a_connector_operation_f71821dd-95ee-4ebd-bfc9-3333262f56f6.md) to learn how to add a custom tracked field.