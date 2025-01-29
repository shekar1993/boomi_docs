# JMS v2 connection: Generic JNDI 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-63dd3a54-4634-417b-832d-33a35c98e938"/>
</head>


By enabling Generic JNDI, the JMS v2 connector can connect to the Generic JNDI provider.

To enable Generic JNDI, upload the provider's JAR files into your account library \(**Setup \> Account Libraries**\), add those files to a Custom Library component, and deploy the component to the appropriate Atom, Molecule, Atom Cloud, or environment.

Upload the JAR files into your Integration account library (**Settings > Account Information** and **Setup > Account Libraries**). For more information, see the topics [Creating a Custom Library component](../../Integration/Process%20building/t-atm-Creating_a_Custom_Library_Component_8fce64fb-4b85-4977-9876-e0d616526228.md), and [Custom library deployment considerations](../../Integration/Process%20building/c-atm-Custom_library_deployment_considerations_7fccfe31-e438-4fa6-bab0-7f395eef5fe3.md) to deploy the appropriate Atom, Molecule, Atom Cloud, or environment. Uploaded or imported files first pass through a virus scanner. The upload or import results in an error if it detects a virus, and then rejects the file. If an error persists, contact Boomi Support.

:::note

Uploaded or imported files pass through a virus scanner first. If the scan detects a virus, you receive an error message, and the scan rejects the file. If an error persists, contact Boomi Support.

:::

## Communication Options tab 



**JMS Server Type** - 
Select Generic JNDI, then provide all the information to connect to a JMS provider via JNDI.

**Connection Factory JNDI Lookup** - 
JNDI name of the connection factory.

**Initial Context Factory** - 
A text field where users can input their JNDI initial context factory object into.

**Provider URL** - 
A text field where users can input the URL to point to your Generic JNDI server to.

**JMS Properties** - 
Any additional properties that need to be set on the initial context