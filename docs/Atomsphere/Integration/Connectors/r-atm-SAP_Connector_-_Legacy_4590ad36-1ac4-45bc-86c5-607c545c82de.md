# SAP connector – legacy 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-4590ad36-1ac4-45bc-86c5-607c545c82de"/>
</head>


The SAP – legacy connector enables you to connect to your SAP application and get or send data using BAPI functions IDocs.

**Note:** The SAP – legacy connector is no longer available for use by customers who have not previously used it. If you are using this connector, you can continue to do so. However, you are encouraged to take advantage of the new functionality provided by the SAP connector.

You can browse the list of available BAPIs and IDocs defined in your SAP instance and auto-generate the request and response profiles to use in processes and maps.

The connector operates in a request/response manner and does not support listening for outbound messages from SAP. The connector uses the SAP Java Connector \(SAPJCo\) technology and RFC framework.

classifies the SAP connector as an Enterprise class connector.

## Connector configuration 

To configure a connector to communicate with SAP, set up two components:

-   SAP connection – legacy

-   SAP operation – legacy


This design provides reusable components, which contain connection settings \(such as URL, User, Password\) and operation settings \(such as Object, Action, data definitions\). After building your connection and operation, set up your connector within a process. When the SAP connector is defined properly within your process, can map to and from virtually any system using the connector to retrieve data from or send data to the SAP application.

## Supported editions 

The following editions are supported:

-   SAP R/3 4.6B and higher

-   MySAP


## Prerequisites 

To implement a connection to your SAP account from , complete the following:

-   Obtain and copy several library files specific to your SAP installation. Refer to your SAP documentation or contact your SAP administrator for information on locating the `sapjco.zip` file. You may need to download it from SAP's website at [http://service.sap.com/connectors](http://service.sap.com/connectors). You must have an SAPNet account to access the SAP JCo. If you do not already have one, contact your local SAP Basis administrator.

    -   Click **SAP JCo Connector** then **Tools & Services**. This file contains three libraries: `sapjco.jar`, `sapjcorfc.dll` and `librfc32.dll`.

    -   Copy the `sapjco.jar` file to the `..\<atom_installation_directory>\lib` directory.

    -   Copy the two DLL files to a location on the machine's PATH environment variable. For Windows, this is `C:\WINDOWS\system32`.

-   Deploy an Atom to the machine that has access to the SAP server.

-   Make sure that the RFC, BAPI, or IDoc required for the integration already exist.

-   Configure with an SAP user name with sufficient permissions to perform the tasks necessary for the integration \(able to invoke RFCs and BAPIs, manipulate specific business objects, etc.\).


## Additional Resources 

[BAPI Creation Step by Step Guide](https://wiki.scn.sap.com/wiki/display/ABAP/A+step+by+step+guide+for+beginners+on+user+defined+BAPI+creation).