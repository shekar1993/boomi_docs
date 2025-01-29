# Boomi for SAP connector

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-d3188761-2073-49f6-81e3-a4062cec171e"/>
</head>


The Boomi for SAP connector allows you to connect to Boomi for SAP core functionality via OpenAPIs. This connector retrieves the OpenAPI definition and generates an easy to use interface for you to seamlessly configure the operations available as part of Boomi for SAP.

:::note Important 

The documentation for this connector is provided by a partner.

:::

Boomi for SAP is a solution comprised of the following components:


-   Boomi for SAP connector
-   Boomi for SAP core functionality which is an add-on application which resides in your SAP system

As part of the Boomi for SAP core functionality, the Boomi for SAP is UI allows a data citizen to easily design, build, and integrate services between SAP and the Boomi Enterprise Platform without in-depth knowledge of SAP data model, which decreases the overall development time and resource requirement, overall on-going maintenance cost and to leverage your current SAP digital core investment. By leveraging Boomi for SAP, you can leverage Boomi as your overall data management needs, which SAP is one of critical sources of your overall data and IT landscape.

Once Boomi for SAP is installed and set up, as non-ABAP SAP resource, you can set up SAP data to be exposed as services and easily configure the Boomi for SAP connector to filter, sort the data requests which are processed within your SAP system.

## Features

In this release, Boomi for SAP supports the following features:



-   Table Services — Query SAP Tables, Views, and Joined Views/Tables
-   BW Extractors — Get and Delete SAP BW Data
-   Function Module Services — Create, Read, Update, and Delete SAP data objects, trigger jobs, and much more.
-   IDocs — Send IDocs to SAP
-   Listen - Listen to and receive events based on SAP event subscriptions

The following features can be utilized with the Boomi Web Server:


-   Events — Receive Change Pointers, Business, Initialization, and Custom Events in Boomi
-   Table Service Batch Extracts — Receive batched, multi-threaded extracts of Table Services in Boomi
-   IDoc — Receive IDocs from SAP

## Prerequisites

To use the connector and implement a connection, have the following:

-  SAP UserID and Password
-  SAP Application Server hostname including Port of SAP instance which has Boomi for SAP installed.
-  Boomi for SAP Core installed and configured on the SAP instance

## Supported editions

-   Any SAP solution on SAP NetWeaver ABAP 7.31 SP21 or above.

## Tracked properties

This connector has no predefined tracked properties. See the topic [Adding tracked fields to a connector operation](../Process%20building/t-atm-Adding_tracked_fields_to_a_connector_operation_f71821dd-95ee-4ebd-bfc9-3333262f56f6.md) to learn how to add a custom tracked field.

