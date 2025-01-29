import PartnerSupport from './_PartnerSupport.md'

# RutterKey Procore - Partner connector

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-81f12fcf-0d8a-4538-9af0-41bc61251d1a"/>
</head>

<PartnerSupport />

The RutterKey Procore - Partner Connector simplifies communication with Procore to create, read, update or delete data through Procores REST APIs. Using this connector, you can integrate Procore with other software applications and services wherever they reside. Utilizing the connector you can browse Procore API operations, setup filters and perform other common activities.

## Connector Configuration

To configure a connector to communicate with RutterKey Procore - Partner connector, set up two components:

- RutterKey Procore - Partner connection

- RutterKey Procore - Partner operation

  This design provides reusable components, which contain connection settings such as user name and password. After building your connection and operation, set up your connector within a process. When you configure your connector correctly within your process, Integration can map to and from virtually any system using the RutterKey Procore - Partner connector connector to send or retrieve data.

## Supported Environments

The connection supports connections to the Procore Production and Sandbox Environement.

## Prerequisites

To implement a connection to your Procore account from Integration and use the connector operations, do the following:

- Have the System API User configured in Procore
- Have an Atom Cloud
- Have knowledge of the Procore Object Model

## Tracked Properties

This connector has no pre-defiend properties. See the topic [Adding tracked fields to a connector operation](https://help.boomi.com/csh?topicname=t-atm-Adding_tracked_fields_to_a_connector_operation.html) to learn how to add a custom tracked field.