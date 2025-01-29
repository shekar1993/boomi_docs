# Licensing settings

<head>
  <meta name="guidename" content="Platform"/>
  <meta name="context" content="GUID-3CB3272C-4B33-4354-9F26-A53282626FC6"/>
</head>

The **Licensing** tab on the Settings page contains information about your account's connections and Cloud and API usage.

:::note

Before working with connection licenses, you should be familiar with process components, connector components, and basic process deployment.

:::

Integration tracks connection components in two different ways:

- How many connections your account has purchased
- How many connections your account is using in processes that are deployed to Atoms

*Deployed* connections refer to the connection components that are built into deployed processes. Connections are managed at the Atom level and double for each process-to-Atom deployment. For example, if you deploy a process with two unique connections and that process is deployed to two different Atoms, then the amount of deployed connections equals four.

:::info

 All connectors, regardless of who builds them \( or a partner\) count towards your connection licenses when deployed to Atoms.

:::

You are not limited by the number of operation components that you are pairing along with these connections. For example, you can integrate with multiple Salesforce objects as long as you are using the same Salesforce connection component throughout. Review topics about the specific connection(s) that you are using.

It is important to track the connections that you are building into your processes because there are potential count restrictions when deploying that could prevent you from launching or updating your process for use in a production setup.

You can have separate production and test environments with separate production and test connection licenses provided you:

- Are using a edition that includes environments,
- Have test connections enabled in your account, and
- Have test connection licenses.

You can actively test any of the connectors in our library as long as you use Test mode.

:::note

There are certain connectors that do not affect your license count. You can deploy the following connectors an unlimited number of times across different Atoms and environments:

- AS2 Shared Server connector
- AtomSphere API connector
- AtomSphere Partner API connector
- Boomi Atom Queue connector
- Boomi for SAP connector
- Boomi DataHub connector
- Boomi Master Data Hub connector (legacy) 
- Boomi Master Data Hub Listener connector
- Event Streams connector
- Flow Services Server connector
- MLLP Server connector
- Web Services Server connector

:::
