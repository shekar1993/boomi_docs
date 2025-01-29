import PartnerSupport from './_PartnerSupport.md'

# Thru MFT – Partner connector

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-050bf4b3-333e-401a-aa2a-e6e92e449623"/>
</head>

<PartnerSupport />

The Thru MFT (Managed File Transfer) - Partner Connector provides out-of-the-box file exchange for your Boomi processes in conjunction with Thru’s MFT service. By connecting a Boomi process to Thru’s cloud-native MFT service, you can take your file transfer to a new level with unparalleled monitoring and control across all lines of business.


:::info Important

The documentation for this connector is provided by a Boomi partner. This documentation was last updated in July 2024.

:::

Easily design, build, and integrate high volume file transfers into any process with Thru MFT:

-   Instantly scalable, cloud-native file exchange platform where you pay for what you need.
-   Reliable file exchange between partners and processes with audits, alerts and replay.
-   Partner self-management with onboarding, subscriptions, reusable endpoints, and support.
-   A centralized system of record to mitigate risks.
-   Real-time, end-to-end processing dashboards to monitor and control all file transfers.
-   Separation of data processing in processes from file transfers.
-   Unified connector for file pickup, drop off and exception handling.

Thru's MFT - Partner connector for Boomi enables a Boomi process to call the Thru for data channel operations. Thru's MFT connector is an operation-based connector, meaning you need to configure a specific operation for the connector to perform within a Boomi process.

Thru is a cloud based Managed File Transfer as a Service (MFTaaS) that enables enterprises and their partners to share files based on a postal service model. Both Enterprise and Partner organizations simply “Pickup” and or “Dropoff” files in Thru via a self-managed file exchange portal.
Internal teams, business units or systems can also use Thru flows to interact with one another’s end points with the ability to subscribe to file exchange “Flows”.

This powerful combination of industry leading file exchange and integration platform solutions, enables enterprises to “drag and drop” complex file exchange processes into an enterprise business ecosystem with ease.


Thru MFT is built on three primary components:

-   Organizations – File exchange process participants.
-   Endpoints – File exchange source and target locations.
-   Flows – File exchange workflow process.

Once granted access by the Enterprise, Organizations self-manage their users and reusable Endpoints. Endpoints are used to subscribe to the Flows \(file exchange processes\) that the Enterprise has exposed to the Organization.

To configure the connector to communicate with Thru MFT, set up three components:

- **Object** - GET (Pickup the file from Thru), CREATE (File Dropped off)
- **Connection** -  API URL, SiteURL, SiteKey to be used to create a THRU connection.
- **Operation** - This component defines the type of operation that can be performed on the THRU connector. Also, Flow Secret Field is located on the operation or can left blank and defined on a Set Properties step.

This approach allows reusable connections settings and operations.
After building the connection and operation setup and test your THRU connector within a process and then deploy the process in a package when ready. When the process is defined properly, Boomi Integration can map to and from virtually any system using the Thru MFT- Partner connector to communicate with Thru MFT.

## Supported editions

The connector supports the following Thru MFT API version:

[https://www.thruinc.com/integration-api/](https://www.thruinc.com/integration-api/)

## Prerequisites

To use the connector and implement a connection to your Thru portal from Boomi Integration, do the following:

-   Have a Thru MFT account with the necessary Flow Endpoint credentials. See the [Thru MFT documentation](https://guides.thruinc.com/taftug/connection) guide to learn more.
-   Ensure the Thru MFT portal is accessible to Boomi Integration.

## Supported objects

The following objects are supported by one or more of the Thru MFT - Partner connector operations:

-   FLOW\_PICKUP \(Binary output\) 
-   FILE\_METADATA \(JSON output\)
-   DROP\_OFF \(Binary Input\)

## Tracked properties

This connector has the following tracked properties that you can set or reference in various step parameters:



**FileName** - The name of the file from Flow\_Pickup.

**FileCode** - The FileCode from Flow\_Pickup.

See the topic [Adding tracked fields to a connector operation](../Process%20building/t-atm-Adding_tracked_fields_to_a_connector_operation_f71821dd-95ee-4ebd-bfc9-3333262f56f6.md) to learn how to add a custom tracked field.