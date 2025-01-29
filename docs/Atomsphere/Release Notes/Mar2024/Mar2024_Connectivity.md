# Connectivity 

<head>
  <meta name="guidename" content="Release Notes"/>
  <meta name="context" content="GUID-5e6558ca-53bd-48dd-9cdf-89b0732d73d9"/>
</head>

**Deferred**: Subsequent to the March 2024 Runtime release, features and fixes for the March platform release are postponed and will be rescheduled.

## Eyer - Partner connector
**We are releasing this new connector:**
- The new Eyer - Partner connector supports integration between Boomi and Eyer (AI-powered observability platform). (CON-8948) 

This connector will be released with the Platform release on 3/9/2024.

## Hypatos.ai - Partner connector:
**We added these features:**
- Audience authorization parameter is no longer required to be passed as an Access Token Parameter when creating an OAuth2.0 connection. (CON-8947)

The following connector operations were added:
* `companiesGetById` - retrieve the details of a Hypatos Studio company.
* `companiesList` - list the companies configured in Hypatos Studio.
* `projectsGetById` - retrieve the details of a particular project in Hypatos Studio.
* `schemasGetByProjectId` - retrieve the configured schema of a particular project in Hypatos Studio.
* `projectsCreate` – create a project under a particular Hypatos Studio company. (CON-8947)

These features are included in the Runtime release.

## Google Ad Manager connector

**We added this feature:**

- The connector is upgraded to support the API versions v202308 and v202311. (CONC-5090)
- The Google Ad Manager API version v202305 has been deprecated.  (CONC-5136) 

This feature is not available in the Runtime release. It will be released with the Platform release.


## JMS V2 connector

**We added these features:**

- The GET, SEND, and LISTEN operations now support IBM Websphere MQ. (CONC-5692, CONC-5693, CONC-6276)

- You can now test your connection with an IBM Websphere server type. (CONC-5694)
 
These features are not included in the Runtime release.

## Mind-Mercatis AWS – Partner Connector

**We are releasing this new connector:**

- The new Mind-Mercatis AWS – Partner Connector supports integration between Boomi and multiple AWS services. (CON-8826) 

This connector will be released with the Platform release on 3/9/2024.

## MQTT (Tech Preview) connector

**We added this new connector:**

- The new MQTT (Tech Preview) connector is built with additional enhancements along with retaining the same functional parity as the legacy MQTT connector. The legacy MQTT connector is no longer actively maintained except for critical fixes. Boomi encourages you to migrate to the new MQTT connector for continued support and innovation. (CONC-2949)

This connector is available in the Runtime release.


## Netsuite connector

**We deprecated these versions:**

- Versions 2016.1 and 2016.2 have been deprecated and removed from the connection settings. (CONC-5526)

This change is not available in the Runtime release. It will be released with the Platform release.

## Oracle E-Business (EBS) V2 connector

**We fixed these issues:**

- Enhanced the connector to use the Oracle REST Service call to generate the profile. (CONC-3472)

- You can now use the Atom container properties to determine how large a payload to process, thus allowing for input file sizes greater than 1 MB. (CONC-2483)

These fixes are available in the Runtime release.

## Platform API and Partner API connector

**We added this feature:**

- Added **recordedDate** field for the Query filter to the Boomi AtomSphere API connector and Partner API connector. You can now query an execution record's end date and time from the Boomi Enterprise Platform. (INT-10247)

This feature is not available in the Runtime release.

## Salesforce Platform Events connector

**We added this feature:**

- Upgraded the CometD library from version 3.1.2 to 5.0.0 for security improvements. (CON-8788)

This feature is available in the Runtime release.

## Solace PubSub + - Partner connector

**We added these features:**
- A new tracked property, **ReplyToAsString**. This property displays the decoded format of the **replyTo** tracked property to improve readability. (CON-8946)

- Enhancements to the logging functionality of our listener. Now, upon startup, the listener logs its configuration, which will significantly aid our support team during debugging processes. (CON-8946)

These features are included in the Runtime release.
