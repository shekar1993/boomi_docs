# JMS v2 connection: SonicMQ 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-be86d689-c6d7-4fb1-aadf-df9847954297"/>
</head>


By enabling SonicMQ, the JMS v2 connector can connect to the SonicMQ provider.

To enable SonicMQ messaging, upload the following JAR files into your account library \(**Setup \> Account Libraries**\), add those files to a Custom Library component, and deploy the component to the appropriate Atom, Molecule, Atom Cloud, or environment.

-   `sonic_XA.jar`

-   `sonic_Crypto.jar`

-   `sonic_Client.jar`

-   `sonic_ASPI.jar`

-   `mfcontext.jar`

Upload the JAR files into your Integration account library (**Settings > Account Information** and **Setup > Account Libraries**). For more information, see the topics [Creating a Custom Library component](../../Integration/Process%20building/t-atm-Creating_a_Custom_Library_Component_8fce64fb-4b85-4977-9876-e0d616526228.md), and [Custom library deployment considerations](../../Integration/Process%20building/c-atm-Custom_library_deployment_considerations_7fccfe31-e438-4fa6-bab0-7f395eef5fe3.md) to deploy the appropriate Atom, Molecule, Atom Cloud, or environment. Uploaded or imported files first pass through a virus scanner. The upload or import results in an error if it detects a virus, and then rejects the file. If an error persists, contact Boomi Support.

:::note

Uploaded or imported files pass through a virus scanner first. If the scan detects a virus, you receive an error message, and the scan rejects the file. If an error persists, contact Boomi Support.

:::

## Communication Options tab 

**JMS Server Type** - 
Select SonicMQ to see some default settings specific to SonicMQ.

**Connection Factory JNDI Lookup** - 
Set to the name of the connection factory you created earlier.

**Initial Context Factory** - 
A text field where users can input their JNDI initial context factory object into.

**Provider URL** - 
A text field where users can input the URL to point to your SonicMQ Classic server to.

**JMS Properties** - 
\(Optional\) Used to add JMS property names and values.