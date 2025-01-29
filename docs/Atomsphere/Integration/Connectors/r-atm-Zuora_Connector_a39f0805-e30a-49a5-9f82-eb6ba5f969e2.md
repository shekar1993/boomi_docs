import TrackedProperties from './_TrackedProperties.md'

# Zuora connector 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-aab90f93-648e-41d4-b5b7-cb1e0419cf20"/>
</head>


Use the Zuora connector to connect to Zuora’s Z-Commerce Platform to access your Z-Billing and Z-Payments data.

As a Zuora user, you can use the Integration Zuora connector to integrate any on-premise applications and legacy systems, and to integrate Zuora with other On Demand or SaaS-based applications such as Salesforce, NetSuite, etc.

:::info Important

When developing new processes, use the Zuora REST connector, which is an update to this Zuora legacy connector. All legacy SOAP calls are available in REST.

:::

## Connector configuration 

To configure a connector to communicate with Zuora, set up these components:

-   Zuora connection

-   Zuora operation


This design provides reusable components, which contain connection settings \(such as web service site, user name, password\) and operation settings \(such as object, action, data definitions\). After building your connection and operation, set up your connector within a process. When you have properly defined the Zuora connector within your process, Integration can map to and from virtually any system using the connector to retrieve data from or send data to the Zuora application.

The linked Zuora API documentation contains valuable information about common scenarios, such as Customer Account creation, Payment creation, and Subscription creation.

## Supported editions 

The Zuora connector supports v.39, v.59, and v.69 of the WSDL. New objects and operations are available in version 69.

In WSDL 68 and earlier versions, the Zuora SOAP API treated many date fields as dateTime fields. In WSDL 69 and later versions, Zuora treats those fields only as date fields and no longer accepts dateTime values.

:::note

Before downloading and using WSDL 69 or later, Zuora cautions that you should check if your SOAP integration passes or receives dateTime values to or from any of these fields.

:::

The WSDL is common across all Zuora instances or tenants and does not contain custom fields configured in your specific tenant. However, you can extract and populate custom fields. See the Zuora operation and Zuora operation’s inbound actions topics for more information.

## Prerequisites 

The Zuora connector requires the following:

-   Your API-enabled Zuora tenant. Contact your Zuora representative for information.

-   A Zuora user name with password, configured with the API Access permission.


<TrackedProperties />