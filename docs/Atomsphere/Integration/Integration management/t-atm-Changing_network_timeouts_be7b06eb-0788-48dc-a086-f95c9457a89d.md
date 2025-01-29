# Changing network timeouts

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-be7b06eb-0788-48dc-a086-f95c9457a89d"/>
</head>

As the owner of an Atom, Molecule, or private Atom Cloud, you can adjust the network timeout settings for connectors that use the HTTP transport by using the **Properties** panel.

:::note

You must have the Atom Management privilege to perform this task. If you have the Atom Management Read Access privilege, you cannot perform the task.

:::

The network timeout properties used by these connectors are:

-   **Client Default Connect Timeout** \(`-Dsun.net.client.defaultConnectTimeout`\) sets the timeout period to establish an HTTP client connection.
-   **Client Default Read Timeout** \(`-Dsun.net.client.defaultReadTimeout`\) sets the timeout period for an individual attempt to read data from an established HTTP client connection.

The default value for each property is 120000 milliseconds. Increase this setting if the HTTP endpoints are known to take longer than two minutes to return a response.

:::note

These properties do not affect the timeout period for the REST Client connector.

:::

1. Go to **Manage** \> **Atom Management**.

2. Select the Atom, Molecule, or private Atom Cloud from the list.

3. In Settings & Configuration, click **Properties**.

   The Atom Properties or Molecule Properties panel opens.

4. Click the **Advanced** tab.

5. To change the timeout period for establishing an HTTP client connection, select the **Client Default Connect Timeout** property, click **![](../Images/main-ic-plus-sign-white-in-blue-circle-16_98f7af60-dd5f-4037-90cd-05cc9dfc5502.jpg) Add a Property**, and type a value in the Property Value field.

6. To change the timeout period for reading data from an HTTP client connection, select the **Client Default Read Timeout** property, click **![](../Images/main-ic-plus-sign-white-in-blue-circle-16_98f7af60-dd5f-4037-90cd-05cc9dfc5502.jpg) Add a Property**, and type a value in the Property Value field.

7. Click **Save**.

   Because changes to this property do not take effect until the Molecule or Atom Cloud is restarted, you are prompted to restart. You have the option to restart now or restart later.
