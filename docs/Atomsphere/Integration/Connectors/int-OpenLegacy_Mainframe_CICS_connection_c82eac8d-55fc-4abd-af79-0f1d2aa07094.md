# OpenLegacy Mainframe CICS - Partner connection \(Tech Preview\)

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-c82eac8d-55fc-4abd-af79-0f1d2aa07094"/>
</head>


The OpenLegacy Mainframe CICS - Partner connector's \(Tech Preview\) connection represents a single instance and contains the connection settings for the OpenLegacy Hub, including the connection URL, Hub API Key, and optionally the OpenLegacy Hub Profile.

## Connection tab



Hub Backend Url
:   The connection string to establish a connection to the OpenLegacy Hub multi-tenant environment \([https://api.ol-hub.com](https://api.ol-hub.com)\) or your private hosted/on-premise OpenLegacy Hub instance.

Hub API Key
:   Each OpenLegacy Hub environment requires a unique API Key for secure connectivity. Before extending AtomSphere to core systems via the OpenLegacy Hub, first Register an OpenLegacy Hub Account and generate a unique API Key.

Profile
:   Optional. The OpenLegacy Hub allows you to create multiple connection profiles, such as for development or production environments.

**Important:** Make sure to have uploaded the OpenLegacy connector -specific 3rd party dependencies Java Archive \(JAR\) file to your Account Libraries and the packaged component is deployed to your runtime environment. Contact OpenLegacy Support at support@openlegacy.com to request the dependencies file.