# Atoms 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-aa350919-15e5-4ec5-a11a-ee308fddd087"/>
</head>


The Boomi Atom is a lightweight, dynamic runtime engine. After you deploy integration processes to your Atom, it contains all the components required to run your processes from end to end, including connectors, transformation rules, decision handling, and processing logic.

![Definition: n. A unit of matter, the smallest unit of an element, having all the characteristics of that element and consisting of a dense, central, positively charged nucleus surrounded by a system of electrons. Regarded as a source of nuclear energy. What’s inside: One or more complete integration processes, All components needed to run from end-to-end, Connectors, map, logic, error handling, and so on., and A micro-sized business rules engine. Atoms are small, powerful, self-contained, autonomous, intelligent, robust, highly scalable, and built with Patent-awarded technology.](../Images/other-dg-boomi-atom-definition_def1e010-4046-447f-b42a-d4455b140ed6.jpg)

## Local Atom versus Atom in the Cloud 

You can install one locally to a computer in your network, or you can install one in the cloud. The option you choose depends upon your specific integration scenario.

- Local — If your integration scenario includes connecting to resources or applications behind your firewall, such as a database, file system directory, or other on-premise applications, you must install the Atom locally. Also, you must install the Atom on a computer with access to all the required resources. This information is how the on-premise SaaS integration problem is solved!

- In the Cloud — Suppose your integration scenario includes only connecting to resources or applications accessible through the internet, such as web applications and FTP sites. In that case, you can choose to use an Atom in an Atom Cloud. This hosted option provides a "zero-footprint" integration solution without installing software or hardware because all computing occurs in the Boomi data center.

## Atoms and environments

If you enable test connections in your account, you can attach your Atoms to a test or production environment depending on its classification. If you move a local Atom from one type of environment to another, the production and test connection licenses are recalculated. For more information, see the topic [Test Connection Licensing](../../Platform/c-atm-Test_connection_licensing_04708d54-8ea3-453f-8dac-3e2e6b72330b.md#GUID-834CA0B9-D8B4-4378-968A-7D0D87B7DDF9).
