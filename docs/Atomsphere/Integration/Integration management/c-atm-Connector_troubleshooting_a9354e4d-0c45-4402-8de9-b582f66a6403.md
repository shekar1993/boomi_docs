# Connector troubleshooting 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-a9354e4d-0c45-4402-8de9-b582f66a6403"/>
</head>


Use trace logging to get additional information about connector errors.

You can get more information about an error than an error message supplies by setting logging level to FINEST on the Atom for trace logging and ContainerController JMX bean. Trace logging captures additional request and response message logging and is an alternative to installing Charles Proxy. Trace logging uses HTTP traffic logging for the following frameworks \(shown with an example of a connector that uses that framework\):

-   HttpURLConnection – used by the HTTP Client connector

-   JAX-WS \(Document/Literal\) – used by the Web Services SOAP Client connector \(SDK or Legacy\)

-   Axis 1.x \(RPC/encoded\) – used by the NetSuite OpenAir connector

-   HttpClient 4.x – used by the OData Client connector

-   HttpClient 3.x – used by the Aprimo connector

-   Restlet 1.x – used by the Twilio connector


If your custom connector uses one of these frameworks, you also receive detailed message logging.

Trace logging is available for the Mail connector. The trace logging level is *not* enabled for the FTP, SFTP, Microsoft SQL Server BCP, Database, and most server connectors.

## Connector trace logging 

To enable connector trace logging, go to **Manage \> Atom Management**, select a local Atom, Molecule, or private Atom Cloud , click **Properties** under Settings & Configuration, click **Advanced**, and set the Connector Trace Logging property \(available in the drop-down list\) to “true.” These debugging methods are available only on local Atoms, Molecules, and private Atom Clouds. You cannot use these debugging methods if your process runs on a Atom Cloud.

When you enable connector trace logging, debug and trace logging in the Atom are automatically enabled. You must restart the Atom for the properties to take effect. Detailed message logging then appears in the container log for all connectors that use the Atom and that use one of the previously mentioned frameworks. You can find the log file in the root of the Atom installation directory.

:::note

Boomi recommends that you enable Connector Trace Logging only while you debug the connector. Avoid leaving Connector Trace Logging enabled, as this may flood your account with logging messages.

:::

An alternative debugging method is using the ContainerController JMX bean to diagnose these errors. See the topic Configuring Java VisualVM for JMX management for more information.

## HTTP capture rules 

If you are using connector trace logging and if the connector that you are debugging uses the HttpURLConnection, you must also set up the HttpCapture rules configuration file, which details what should be logged and where. To set up the configuration file, create a file named http\_capture\_rules.txt, structure the file based on the HTTP capture rule guidelines and examples below, and save it in the Atom\_installation\_directory\\conf directory. As a result, detailed message logging appears. You can find the log file in the root of the Atom installation directory.

## HTTP capture rules guidelines 

Consider the following information when setting up the configuration file:

-   A rule is a regular expression and a file pattern separated by a comma.

-   Add one rule for each line.

-   Lines starting with a number sign \(\#\) are considered comments and are ignored.

-   The regular expression is applied to URLs. If the expression matches, the traffic for that URL is captured in the associated file.

-   If the file name contains a “%d”, then that sequence is replaced by a unique random number for each URL. This allows for multi-threaded captures of URLs matching the same pattern.

-   Rules are checked in sequence in the same order as in the file until a match is found or until the end of the list is reached.


## HTTP capture rules examples 

These are some examples of HTTP capture rules:

- `www\.sun\.com , sun%d.log`
- `yahoo\.com\/.*asf , yahoo.log`
- `www\.facebook\.com, facebook%d.log`
- `www\.wikipedia\.org, wikipedia%d.log`
