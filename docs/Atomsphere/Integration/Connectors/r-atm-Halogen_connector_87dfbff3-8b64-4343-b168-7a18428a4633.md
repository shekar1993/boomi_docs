# Saba TalentSpace connector 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-75651453-9eeb-4db7-9c13-1d764285d93b"/>
</head>


Use the Saba TalentSpace connector to move data into and out of Saba TalentSpace and to integrate any on-premise applications and legacy systems.

For example, you can integrate Saba TalentSpace with other On Demand or Saas-based applications, such as Salesforce or Netsuite. The Saba TalentSpace connector connects directly to Saba TalentSpace and browses the interfaces in real time. Integrating with Saba TalentSpace consists of SOAP web service calls over an HTTPS connection. The technical details of this connection, such as request, error handling, and HTTPS connection, are abstracted to simplify the implementation.

## Connector configuration 

To configure a connector to communicate with Saba TalentSpace, set up two components:

-   Saba TalentSpace connection
-   Saba TalentSpace operation


This approach creates reusable components that contain connection settings \(such as URL, User, Password\) and operation settings \(such as Object, Action, data definitions\). After building your connection and operation, set up your connector within a process. When you properly define the Saba TalentSpace connector within a process, Integration can map to and from virtually any system using the connector to retrieve data from or send data to Saba TalentSpace.

## Supported editions 

This connector supports Saba TalentSpace version 11 and above.

## Tracked properties 

This connector has no tracked properties.