# JMS connection: Solace 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-a2d69e6f-f28f-40a8-971e-9a8a1f7dc672"/>
</head>


By enabling Solace, the JMS connector can connect to the Solace provider.

:::caution

At this time, Solace support in the JMS connector has only been tested for compatibility with the cloud version of Solace and not a local version. Persistent messaging is currently not supported. If persistent messaging is required, use the generic JNDI connection.

:::

To enable Solace, upload the following JAR files into your account library (**Setup > Account Libraries**), add those files to a Custom Library component, and deploy the component to the appropriate Atom, Molecule, Atom Cloud, or environment. The Solace connection for the JMS connector was tested against Solace JAR version 10.5.0, and is backwards compatible.

-   `geronimo-jms_1.1_spec-1.1.1.jar`
-   `org.apache.servicemix.bundles.jzlib-1.0.7_2.jar`
-   `org.osgi.annotation-6.0.0.jar`
-   `sol-common-10.5.0.jar`
-   `sol-jcsmp-10.5.0.jar`
-   `sol-jms-10.5.0.jar`

Upload the JAR files into your Integration account library (**Settings > Account Information** and **Setup > Account Libraries**). For more information, see the topics [Creating a Custom Library component](../../Integration/Process%20building/t-atm-Creating_a_Custom_Library_Component_8fce64fb-4b85-4977-9876-e0d616526228.md), and [Custom library deployment considerations](../../Integration/Process%20building/c-atm-Custom_library_deployment_considerations_7fccfe31-e438-4fa6-bab0-7f395eef5fe3.md) to deploy the appropriate Atom, Molecule, Atom Cloud, or environment. Uploaded or imported files first pass through a virus scanner. The upload or import results in an error if it detects a virus, and then rejects the file. If an error persists, contact Boomi Support.

:::note

Uploaded or imported files pass through a virus scanner first. If the scan detects a virus, you receive an error message, and the scan rejects the file. If an error persists, contact Boomi Support.

:::

## Authentication Options 

Authenticating the JMS Solace connection using user name and password credentials is optional depending how you want to build your connection. Connecting to a local Solace instance does not require you to configure the User Name and Password fields, but is needed to connect to a Cloud account.

To view your User Name and Password on the [Solace Portal](https://console.solace.cloud/services/8v6yiwx7m5), navigate to **Connect** on the dashboard and expand the Solace Messaging protocol.

**Use Authentication?** - 
Select to use authentication when using the Solace connection.

**User Name** - 
The user name with which to authenticate against the Solace server.

**Password** - 
The password with which to authenticate against the Solace server.

## Communication Options tab 

**JMS Server Type** - 
Select **Solace** to see default settings specific to Solace.

**Host URI** - 
Enter the host name or IP address of the Solace database server. To view your Host URI on the [Solace Portal](https://console.solace.cloud/services/8v6yiwx7m5), navigate to **Connect** on the dashboard and expand the Solace Messaging protocol.

**Message VPN** - 
Enter the Message VPN \(Virtual Private Network\) associated with the Solace account. To view your Message VPN on the [Solace Portal](https://console.solace.cloud/services/8v6yiwx7m5), navigate to **Connect** on the dashboard and expand the Solace Messaging protocol.

The Message VPN allows for multiple applications, like Boomi, to share a single Solace message broker while still remaining independent and separated.

**Dynamic Durable Property** - 
This option specifies whether queues or topic endpoints \(which are used to support durable subscription names\), are to be created on the message broker.

If **selected**, sets the Dynamic Durables property to `true`, which results in the following:

-   For topic endpoints, creates a new durable topic subscription in Solace, if it does not already exist, according to what is specified in the Destination field of the Listen operation (for example, `topic:<topic_name>`). Setting this option also requires you to select the **Durable?** option and provide the subscription name within the **Durable Subscription Name** field.
-   For queues, creates a new queue in Solace according to what it is specified in the Destination field of the Listen operation (for example, `queue:<queue_name>`) if it does not already exist.

If **cleared** \(default\), disable the Dynamic Durables property on the connection.