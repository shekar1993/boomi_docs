import TrackedProperties from './_TrackedProperties.md'

# Salesforce Analytics connector 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-ae7bda9a-7b85-4492-957a-55a637ba5be6"/>
</head>


The Salesforce Analytics connector simplifies uploading CSV \(comma-separated value\) files into an Analytics Cloud dataset. The connector automatically compresses data for faster uploads.

## Connector configuration 

To configure a connector to communicate with Salesforce Analytics, set up these components:

-   Salesforce Analytics connection

-   Salesforce Analytics operation

This design provides reusable components, which contain connection settings \(such as URL, User, Password\) and operation settings \(such as Dataset Name, App Id, Object Name, CSV profile, and Operation Type\). When the Salesforce Analytics connector is configured properly within your process, Integration can map virtually any system to send data to the Salesforce Analytics Cloud.

## Supported editions 

The following editions are supported:

-   Salesforce Editions: Professional, Enterprise, Unlimited, and Developer \(Contact Manager and Group editions are *not* supported\)
-   Sales Cloud, Service Cloud, Custom Cloud, and Force.com applications


## Prerequisites 

To implement a connection to your Salesforce account from Integration:

-   Have both your Salesforce login and password to access the web service.

-   Confirm that your Salesforce account has privileges to connect to the Salesforce API. Your Salesforce representative can confirm this for you by providing you with a Sender ID and password specific to the integration API.

-   Use the [Salesforce API Guide](http://www.salesforce.com/us/developer/docs/object_reference/index.htm) for Salesforce object and field reference details.

-   Replace your current password in Salesforce Analytics Connector connection settings with a combination of your password and a security token. This is needed due to a change in Salesforce security.


To see CSV and JSON examples, external data limits, and details about metadata file formats, objects, and fields, see the Salesforce [Analytics Cloud External Data Format Reference](https://developer.salesforce.com/docs/atlas.en-us.bi_dev_guide_ext_data_format.meta/bi_dev_guide_ext_data_format/) guide. For reference information about the external data API, including data API limits, see the Salesforce [Analytics Cloud External Data API Developer's Guide](https://resources.docs.salesforce.com/sfdc/pdf/bi_dev_guide_ext_data.pdf).


<TrackedProperties />