# OpenLegacy Mainframe CICS - Partner connector \(Tech Preview\)

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-6a41f1d7-55ec-4d03-bbbb-311be0b920d9"/>
</head>


The OpenLegacy Mainframe CICS - Partner connector \(Tech Preview\) is a key part of the Integration process that makes it easy to integrate Mainframe CICS systems.

The OpenLegacy Mainframe CICS - Partner connector \(Tech Preview\) integrates to Mainframe CICS systems via the OpenLegacy Hub, an all-in-one platform for managing and integrating legacy assets into third-party technology platforms.

**Important:** The OpenLegacy Mainframe CICS - Partner connector \(Tech Preview\) is only supported On-premise and on Private Atom/Molecule.

## Connector configuration

The integration between and legacy assets using the OpenLegacy Hub is a 2-step process:

1.  Automatic generation of legacy assets into the OpenLegacy HUB repository.
2.  Using the connector as a plugin to the OpenLegacy Hub for seamless integration of the assets housed in the OpenLegacy Hub repository.

To configure the OpenLegacy Mainframe CICS - Partner connector \(Tech Preview\) to communicate with the OpenLegacy Hub tenant, set up the following components:

-   OpenLegacy Hub connection —The UI provides the ability to define connection properties such as the OpenLegacy Hub URL, the OpenLegacy Hub API Key, and the OpenLegacy Hub Profile.
-   OpenLegacy Hub operation — The connector step operation is back-end specific. The Import Wizard will guide you through the process of importing a specific Project and Object Type from the OpenLegacy Hub repository specific to your desired operation.

After building and validating your connection and operation, set up your connector within a process. When you have properly configured your connector within your process, can map to and from virtually any system using the OpenLegacy Mainframe CICS - Partner connector \(Tech Preview\) to query, create, update and/or delete data as supported by the back-end operation.

## Prerequisites

Before building and configuring a process to connect to Mainframe CICS using the OpenLegacy Mainframe CICS - Partner connector \(Tech Preview\), you must first address the following:

-   **Connect to your organization’s mainframe**— Because of the CICS topology, OpenLegacy requires IBM’s CTG Adapter \(if present\) or the OpenLegacy’s CICS Adapter to be installed on the CICS server. The OpenLegacy’s CICS Adapter adapter is a CICS program that receives the OpenLegacy connector program activation requests and returns the results. The OpenLegacy’s CICS Adapter requires the following to be confirmed:

    -   CICS Transaction Server V4.1 and above
    -   TCPIP enabled on the CICS Region
    **Attention:** Contact OpenLegacy Support at support@openlegacy.com to request the Adapter download and for help installing and configuring the OpenLegacy CICS Adapter.

-   **Register an OpenLegacy Hub Account and Generate a Hub API Key** — Before extending Boomi’s AtomSphere to core systems via the OpenLegacy Hub, first Register an OpenLegacy Hub Account \(https://app.ol-hub.com/auth/sign-up\) and generate a unique API Key. Save the generated API Key in a safe place. The API key is required to configure your Boomi OpenLegacy connector to your private OpenLegacy Hub instance.
-   Upload the OpenLegacy connector-specific third-party dependencies Java Archive \(JAR\) file to your Account Libraries and deploy the packaged component to your runtime environment. Contact OpenLegacy Support at support@openlegacy.com to request the dependencies file.

    **Tip:** The Boomi Account Library settings documentation is available [here](https://help.boomi.com/bundle/integration/page/r-atm-Account_Library_Management.html). Documentation on deploying Packaged Components is available [here](https://help.boomi.com/bundle/integration/page/int-Packaged_components_page.html).


## Troubleshooting

If you experience difficulties, try the following:

1.  Validate connectivity to the OpenLegacy Hub \(OpenLegacy Hub URL, API Key\).
    -   If the OpenLegacy Hub URL isn’t defined correctly, you will get the following error: “Original hostname: 'api.yyyyyy.ol-hub.com' failed to resolve” .
    -   An incorrect API Key will result in an “Unauthorized” error.
2.  Validate connectivity to the OpenLegacy Hub Project and the listing of available Object Types as part of the import wizard drop-down.
    -   An incorrect project name \(usually due to typos\) will return the following error: “Could not pull the requested project because the project was not found”.
3.  If the OpenLegacy Hub Project Module requires parameters, check the flow to ensure proper parameters are provided.
4.  Test OpenLegacy’s Mainframe CICS assets via the OpenLegacy CLI. Contact OpenLegacy Support at support@openlegacy.com if an error persists.

## Supported editions

The OpenLegacy Mainframe CICS - Partner connector \(Tech Preview\) works with CICS Transaction Server V4.1 and above.