
# Salesforce Apex connector 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-654f8dd3-8afd-49ff-be96-31d074c9b263"/>
</head>


The Salesforce Apex connector enables you to integrate your Salesforce data by dynamically referencing compiled Salesforce Apex WSDL documents.

## Connector configuration 


To configure a connector to communicate using Salesforce Apex, set up two components:

-   Salesforce Apex connection
-   Salesforce Apex operation

This approach creates reusable components containing connection settings. You create a Salesforce Apex connection that uses a WSDL file. After building your connection and operation, set up a connector within a process. When properly defining the process, Integration can map to and from virtually any system using the Salesforce Apex connector to retrieve or send data.

## Prerequisites 

To implement a connection to your Salesforce Apex WSDL file from Integration, you need the following:

-   A Salesforce account with sign in and password.

-   Create a Salesforce Apex class and save its generated WSDL document file on a local drive.

-   An Atom deployed in either a hosted environment or on a local machine.


Boomi recommends configuring and testing your process using a local Atom that allows access to the locally–saved WSDL file before deploying the process to a Cloud.

## Tracked properties 

This connector does not have tracked properties.