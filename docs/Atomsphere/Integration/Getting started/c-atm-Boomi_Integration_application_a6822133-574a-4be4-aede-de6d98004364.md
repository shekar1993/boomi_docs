# Boomi Integration service 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-a6822133-574a-4be4-aede-de6d98004364"/>
</head>


The Boomi Integration service simplifies your integration process by providing you the tools and connections needed to connect your apps, data, devices, and automate workflows quickly and easily across your distributed environment.

The Boomi Enterprise Platform supports real-time integration and scales to meet high-volume needs in mobile, batch \(ETL\), and EDI environments. Integration is the combining of software or hardware components or both into an overall system. There are two types of systems integration:

- B2B Integration — Integrating data or systems across two or more organizations.

- Application Integration — Integrating data or systems within a single organization.

Using the Boomi Enterprise Platform, you have access to an intuitive drag-and-drop interface, data mapping tools, recipes, and a library of connectors to accelerate your process to [build](c-atm-Build_page_0ff5baa9-222d-4c9a-b97a-982cef8b6d9d.md), [deploy](c-atm-Deploy_menu_10d40903-a721-4630-bcac-769d1b87a9dd.md), and [manage](c-atm-Manage_menu_652ad84f-efe8-47f0-adf4-8203cc7a3b68.md) your integrations.

A process represents a business process or transaction-level interface between two systems. Example, "Salesforce Account Synchronization to a legacy accounting system" or "Sales Orders from Company ABC to QuickBooks."

Processes contain a left-to-right series of steps connected together like a flow chart to illustrate the steps required to transform, route, and otherwise manipulate the data from source to destination. Processes use connectors to get and send data. Every process begins with the Start step \(containing the inbound connector\) on the left. A process can contain any number of execute and logic steps. A process typically ends with one or more outbound connectors on the right.

Profiles represent the structure and format of the source and destination data. The following types of profiles are available: Database, EDI, Flat File, XML and JSON. A process typically contains one or more maps along the way that transform the source profile into the destination profile.

When a process runs, the inbound connector in the Start step retrieves the data \(for example: performs an FTP GET, runs a database SELECT query, or invokes a web service call\) and passes the resulting data into the process as one or more documents. Documents move through the process steps sequentially, where each step performs a specific task on the data and then passes it onto the next step.
