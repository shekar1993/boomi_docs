import PartnerSupport from './_PartnerSupport.md'

# Lumesse TalentLink – Partner connector 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-ce3727ec-c827-4750-afec-9005e22a1a0b"/>
</head>

<PartnerSupport />

The Lumesse TalentLink – Partner connector enables users to integrate with Lumesse TalentLink.

:::note Important 

As of the February 2021 release, the Lumesse TalentLink – Partner connector is no longer available for use by customers who have not previously used it. If you utilized this connector prior to the date, you can continue to do so.

:::

The Lumesse TalentLink – Partner connector supports importing profile definitions. When you create a Lumesse TalentLink connection, enter certain configuration settings provided by Lumesse professional services, such as Company Name, User, Password and API Keys to the relevant bundles that you use. The connector uses the Bundle:ServiceName and host to build the WSDL URL \(using the \[Host\]/\[BundleName\]/SOAP/\[ServiceName\]?WSDL pattern\) to fetch the WSDL and present the available operations. You can then select the operation to call, and the connector builds the request and response profiles based on the XSDs provided by the WSDL.

:::note 

The documentation for this connector is provided by a partner. The documentation was last updated in August 2013.

:::

## Connector configuration 

To configure a connector to communicate with Lumesse TalentLink, set up two components:

-   Lumesse TalentLink – Partner connection

-   Lumesse TalentLink – Partner operation


Create one Lumesse TalentLink – Partner connection component to use with all bundles, with one or more Lumesse TalentLink operations, for each type of interaction required by your integration scenario.

This design provides reusable components, which contain connection settings \(such as user name and password\) and operation settings \(such as Object, Action, data definitions\). After building your connection and operation, set up your connector within a process. When you properly define the Lumesse TalentLink within your process, can map to and from virtually any system using the connector to retrieve data from Lumesse TalentLink.

## Supported editions 

Boomi supports the following services \(WSDLs\). For more information, contact your Lumesse account manager.

-   `https://api.lumessetalentlink.com/HRIS/ESB/Candidate?wsdl`

-   `https://api.lumessetalentlink.com/HRIS/ESB/Position?wsdl`

-   `https://api.lumessetalentlink.com/HRIS/ESB/Queue?wsdl`

-   `https://api.lumessetalentlink.com/HRIS/ESB/Document?wsdl`

-   `https://api.lumessetalentlink.com/HRIS/ESB/LOV?wsdl`

-   `https://api.lumessetalentlink.com/HRIS/ESB/LovHierarchy?wsdl`

-   `https://api.lumessetalentlink.com/HRIS/ESB/ConfigurableFields?wsdl`

-   `https://api.lumessetalentlink.com/UserAdmin/ESB/User?wsdl`

-   `https://api.lumessetalentlink.com/UserAdmin/ESB/Role?wsdl`

-   `https://api.lumessetalentlink.com/UserAdmin/ESB/Organization?wsdl`

## Tracked properties

This connector has no predefined tracked properties. See the topic [Adding tracked fields to a connector operation](../Process%20building/t-atm-Adding_tracked_fields_to_a_connector_operation_f71821dd-95ee-4ebd-bfc9-3333262f56f6.md) to learn how to add a custom tracked field.
