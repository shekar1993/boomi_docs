# Listener processes

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-c9265e90-6015-4ad3-9b69-5a1decdbc428"/>
</head>


Use Listener processes to monitor incoming requests to an endpoint.

In a listener process, the Start step either has a connector with the Listen action or is configured with the Trading Partner option. When a listener process is deployed, the Start step monitors incoming requests to the endpoint. Each incoming request is routed to the remainder of the process along with any posted document.

-   If a connector with the Listen action is configured in the Start step, the endpoint is defined by the step’s connector operation and the Atom’s shared server settings.

-   If the Start step is configured with the Trading Partner option, the endpoint is defined by the step configuration and the trading partner components specified in the step configuration.


The following connectors support the Listen action:

-   AS2 Shared Server

-   Atom Queue

-   Boomi Master Data Hub

-   Flow Services Server

-   JMS

-   MLLP Server

-   OFTP2 Server

-   Salesforce Platform Events

-   SAP

-   Web Services Server

For the Web Services Server connector, you can optionally define endpoints in API Service components in accounts for which the API Management feature is enabled.


The **Listeners** panel in the Atom Management page \(**Manage** \> **Atom Management**\) lists listener processes that are deployed to individual Atoms, Molecules, and Atom Clouds. For each listener, the panel shows the state: Listening, Paused, or Errored. You can pause, resume, or restart all or selected listeners for a selected Atom, Molecule, or Atom Cloud. In addition, there are links to process components and to process execution reporting.

:::note

If you change a process’ Start step connector action from Listen to Get, when you subsequently deploy that process to an Atom, any instances of the process deployed as listeners on that Atom are stopped. Conversely, if you change a process’ Start step connector action from Get to Listen, when you subsequently deploy that process to an Atom, existing schedules for the process on that Atom are stopped.

:::

:::note

Test mode does not support real-time triggering and, therefore, cannot be used with listener processes.

:::