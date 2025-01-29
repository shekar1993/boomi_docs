import PartnerSupport from './_PartnerSupport.md'

# Agiloft CLM - Partner connector 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-b8ebad38-c52b-49b5-8bd4-16d06b72b6f0"/>
</head>

<PartnerSupport />

The Agiloft CLM - Partner connector makes it easy to connect other applications with Agiloft on the Boomi Enterprise Platform and to automate a wide range of tasks from simple data export to complex inter-application workflows.

The Agiloft CLM - Partner connector implements a real time interface to the connected Agiloft KB. Any changes to table structures in the Agiloft KB are immediately also available in the Agiloft CLM - Partner connector on the Boomi Enterprise Platform. Visibility of and access to data in the Agiloft KB with the connector is policed by the permissions attached to the Agiloft credentials that are configured in the connector. The permission settings for these credentials can be configured in the Agiloft KB.

The Agiloft CLM - Partner connector integrates with Agiloft using REST API calls with the JSON request/response format over an HTTPS connection.

## Connector configuration 

If multiple Agiloft users are needed to implement workflows on the Boomi Enterprise Platform, then one connector must be configured for each user. The configuration of a new connector consists of two components:

-   Agiloft connection
-   Agiloft operations

The Agiloft connection organizes access to the Agiloft KB and the operations define methods for exchanging data with the Agiloft KB. When the connection and available operations are configured for the connector it can be used in a process.

## Supported versions 

The connector supports the Agiloft 2019-01 release and later.

## Prerequisites 

The following prerequisites are needed in order to implement a connection with an Agiloft KB from Integration:

-   Knowledge Base name, domain URL, login credentials to access the Agiloft KB.
-   The Login credentials must have permissions to use the Agiloft API and the correct access permissions in Agiloft to perform all operations the process in implements.
-   Review the Agiloft REST API documentation, located at https://wiki.agiloft.com/display/HELP/SOAP+and+REST+API+Web+Services

## Supported objects 

Objects in the Agiloft KB are referred to as tables. Each table contains one or more records, each record contains one or more fields. Data is stored in fields. The connector may have limited access to table objects in Agiloft depending on the permissions settings for the Agiloft account used with the connector.

A list of all available objects can be browsed in the **Import Wizard**.