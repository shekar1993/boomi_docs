# Dynamic Process Connection properties

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-9067300c-3df3-40ba-97b3-5a6a03a3a6dc"/>
</head>


Process properties are name/value pairs that you can use to store arbitrary information on a per document level to assist with your integration. One type of process property, a **Dynamic Process Connection property**, is one that you create to override Connection and extension values at runtime. The Dynamic Process Connection properties are available only for Connector steps in a process. They are not supported for connector calls made in map functions or parameter values within other process steps.

:::info Important

Due to the wider implications of how this feature impacts connector licensing, this feature is currently provisioned only for select accounts. Please contact your Platform account representative for information about how to enable this feature for your account.

:::

Typically, you modify Connection values while configuring a Connector step on the process canvas or when using extensions during deployment. However, the new Dynamic Process Connection properties surpass extensible properties by allowing for Connection properties to be dynamically configured *at runtime*. These properties can support use cases like integrating data from the same location \(such as a database or file server\) using different sets of credentials or by dynamically routing API requests to a specific back end from a list of back end URLs.

## Setting dynamic process connections

To override Connection values set in your process or at the extension level, you need to configure both the Set Properties and Connector steps in your process design, as described below. For detailed steps about how to set dynamic Connections, see the topic [Creating Dynamic Connections](int-Creating_dynamic_process_connections_59f6fbfa-231b-4596-8fd2-c21f0a4809df.md).

To leverage Dynamic Process Connection properties, you must:

1.  First enable the **Allow dynamic connector properties** option on the [Connector step's General tab](r-atm-Connector_Action_dialog_General_tab_dc3bf2d8-e154-444e-8a8f-a0d07f489bfb.md) of the Connection you wish to override. If this option is not enabled, only the design-level and extension-level connection values are used at runtime even if the requirements are fulfilled as outlined in the next step.

    :::note
    
    If the same Connection component is used multiple times within a process, the **Allow dynamic Connection properties** option needs to be enabled on each of the Connector steps. If this is not set, the same Connections are executed with varying values at different points in the process.

    :::

2.  Next, set a list of Dynamic Process Connection properties via the [Set Properties steps](r-atm-Set_Properties_shape_d99aaa70-ed9a-4792-b641-b94aea1254b9.md). By defining property parameters, you dynamically set the values of Connection fields. For example, you can set and use dynamic process connector properties to apply different credentials to a Connection's configuration in order to make an API call as a specific user.

    To override a Connection value or extension properly, the Set Properties step must be positioned before any affected Connectors in your design process.