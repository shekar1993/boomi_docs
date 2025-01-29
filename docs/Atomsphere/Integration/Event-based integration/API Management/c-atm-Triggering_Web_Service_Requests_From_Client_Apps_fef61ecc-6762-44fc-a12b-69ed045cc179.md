# Web service requests from client applications 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-fef61ecc-6762-44fc-a12b-69ed045cc179"/>
</head>


An application that supports outbound messaging allows you to specify that changes to fields within that application triggers messages containing field values. These messages invoke external web services.

As such outbound messaging is the foundation for real-time, event-driven integration between applications and data sources.

Outbound messaging works as follows:

-   A message containing application data is originated by the client application based on certain work flow rules. The message must conform to a specific WSDL defined by the application.

-   The message is sent to a third-party web service.

-   The web service acknowledges receipt of the message, if required by the application, by returning basic acknowledgment XML to the application.


The steps for triggering external web service requests from an application vary from one application to the next. Refer to the topic linked below for information about triggering web service requests from Salesforce. For other applications refer to their respective documentation.