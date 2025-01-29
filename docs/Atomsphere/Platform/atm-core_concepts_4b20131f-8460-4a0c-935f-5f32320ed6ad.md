# Core terms and concepts 

<head>
  <meta name="guidename" content="Platform"/>
  <meta name="context" content="GUID-4b20131f-8460-4a0c-935f-5f32320ed6ad"/>
</head>


Here are some important terms and concepts to understand when working on the Boomi Enterprise Platform

**Account**  
Workspace used to perform actions provided by the Platform. Each Platform account has at least one associated user, and you can share your account between multiple users.

**Account ID**  
Unique identifier for your Platform account that you can not change.

**API**  
Stands for Application Programming Interface. It is a software library or protocol that facilitates interaction between different software or services

**Assets**  
Resources that can be used in a Flow web application, such as images, presentation, spreadsheets, text files, stylesheets, or code snippets. See [Assets](/docs/Atomsphere/Flow/topics/c-flo-Assets_7d21c82d-c700-437d-bdaa-ae4b0716726b.md).

**Atom**  
Lightweight, dynamic runtime engine that contains process configuration information for Boomi Integration processes. You can download and install Atoms to a machine behind your firewall. The installation allows access to local resources such as on-premise applications or databases; or deployment to the Boomi data center to integrate web-accessible applications or data sources. You typically deploy multiple integration processes to a single Atom. See [Atoms](../Integration/Getting%20started/c-atm-Atoms_aa350919-15e5-4ec5-a11a-ee308fddd087.md).

**Atom Clouds**  
Atom Clouds are multi-tenant, meaning that one instance of the Platform serves multiple customers simultaneously. They consist of one or more cloud Molecules installed on multiple machines. The cloud Molecules on the machines are grouped together to form the Atom Cloud. You can deploy your cloud-based integration processes to a Atom Cloud or set up your own local Atom Cloud. In the Americas, Europe, and Asia-Pacific, manages and operates Atom Clouds and Test Atom Clouds. See [Atom Clouds](../Integration/Getting%20started/c-atm-Atom_Clouds_b835095b-048e-4871-a42d-b2186707e314.md).

**Atom Installer**  
An atom installation program. We presently provide installers for Windows, Linux, and Docker.

**Atom Queue**  
Publish, subscribe, and point-to-point message queuing is supported by this component.

**Atom Worker**  
In a Boomi Atom Cloud or private atom cloud, an atom worker is a reserved resource dedicated to performing low latency process executions. In an Atom Cloud, an atom worker can also provide near-real-time performance. Atom workers run for 24 hours by default. You can change the length of time after which Atom workers shut down. Atom workers are only available for Atom Clouds, not for Molecules or Atoms with a single tenant. To allow Atom workers on a private Atom Cloud, a Cloud owner must make a one-time update on the Atom Cloud.

**AtomSphere API**  
API used to access Boomi Enterprise Platform objects directly. It is used to pull metrics or to configure components on the Platform. With an AtomSphere API, you can find out how many times a process was executed, canceled, or how many times a component was executed or deployed..

**Platform User**  
An individual's login required to access the Boomi Enterprise Platform. Users are assigned to an account and receive specific permissions that enable them to access various features across the platform.

**Busines-to-Business \(B2B\)**  
Type of e-commerce in which products, services, or information are exchanged between businesses rather than between businesses and consumers (B2C).

**Bindings**  
Aligning a value used in Flow with a record type from an external system. See [Type Bindings](/docs/Atomsphere/Flow/topics/c-flo-Types_Bindings_d7c6499e-7796-491f-bdcf-0c41f65bce9e.md).

**Boomi Assure**  
A tool that allows customers to submit test data for regression testing against a new upcoming version. Thanks to crowd-sourced regression testing, you can be confident that platform modifications will not break established integration procedures.

**Boomi Hub Clouds**  
Atom Clouds managed by Boomi, in which individual Boomi DataHub repositories are hosted. Integration Hub listener processes must be deployed to the Hub Cloud that hosts the hosting repository of the master data domain with which the process interacts. Boomi maintains [regional Hub clouds worldwide](r-boo-Hostnames_and_IP_addresses_for_Atom_Clouds__0d150522-9457-4c37-b5a9-a8ad664490bd.md).

**Boomi Suggest**  
An optional feature in Integration that advises which fields should be mapped in a data map. Suggest uses a complicated collection of algorithms to determine the amount of confidence in a suggestion's potential accuracy. It makes use of anonymized metadata from the Boomi community and saves you time by suggesting a mapping. You can choose to accept all or some of the ideas. You can also ignore the recommendations and make your own mappings.

**Business Rules**  
AAllows you to define different outcomes or actions based on whether the conditions specified in the rule have been met. These are typically applied in a Flow to determine which path a flow should take if there are multiple outcomes available, but can also be implemented on a user interface, data, or validation. See  [Business rules](/docs/Atomsphere/Flow/topics/c-flo-Canvas_Business_Rules_e8860ab5-4260-449c-b72d-137d9902baec.md).

**Channel**  
A channel is an access point an integration process can check for a batch of update requests targeting a particular source, needed by golden record updates. There are two types of channels:

- Channel on which requests to the source are propagated as entities with all fields. This type is called FULL.

- Channel on which requests to the source are propagated as entities containing only updated fields. This type is called DIFF.

**Collection**  

Collections are used to represent one-to-many relationships, such as a person and their nicknames or phone numbers, within the context of a single model. In a model a collection is represented by a repeatable field or field group. In a golden record a collection is a set of instances of the same repeatable field or field group.

**Component**  
Reusable configuration objects that appear in the Component Explorer and are used in processes. Components include:

- APIs
- Certificates
- Connections
- Connector operations
- Cross reference tables
- Document caches
- Maps and map functions
- Processes, process properties, and process routes profiles
- Queues
- Trading partners

You can create components once and then reference them by process steps across multiple processes. When you modify a component, those changes appear wherever you reference the component. So if that database moves to a different machine, you can update the single Database Connection component once, and the new settings go into effect everywhere it is applied. See [Working with Components](../Integration/Process%20building/c-atm-Components_introduction_69a449d7-8255-4fd5-a044-217a813c7435.md).

**Connector**  
Allows data to flow into and out of processes. Connectors are standard-class connections that allow specific software applications to communicate with one another like, Netsuite, Salesforce, SAP, or Amazon. You can connect and perform data operations quickly and efficiently since connectors are designed for particular program APIs. Connectors abstract the technical details of communicating with various applications, data sources, and communication protocols.

There are two components: a connection and an operation.

The connection represents the "endpoint" and contains the physical connection details, such as an FTP or database host, a web services URL, or sign-in credentials. A connection is one endpoint to a database, application, or API for use in an integration process created within the platform.

The operation represents a specific action to perform against that connection, such as a database SELECT query, an FTP PUT or a specific web service call.

You can think of the connection as the "where" and the operation as the "how." For example, when extracting customer records from Salesforce, the connection represents your Salesforce organization account user name and password and the operation represents the "query customer" action.

**Connector SDK**  
A free software development kit from Boomi, which helps Java developers write custom connectors for use within the platform. The Boomi SOAP Framework, a library of third-party libraries and custom code included in the Connector SDK package, makes it simple to integrate with SOAP web services. The Connector SDK also supports REST web services.

**Connector step**  
Contains all the information needed to connect to a data source or application within your Boomi processes. Connectors enable you to send and receive data from one-third party to another, such as Salesforce to NetSuite.

**Container logs**  
At Boomi, these contain information related to the operation of the atom, molecule, or cloud runtime. The log is intended for runtime owners to monitor and troubleshoot their runtimes. The Platform UI or the local runtime directory can both access the logs.

**Data process step**  
Provides numerous options for manipulating document data within a process, from splitting and combining documents to zipping and unzipping data.

**Database connector**  
Boomi's database connector allows connection to any database supporting a JDBC driver. The step has all the data required to connect to a single database instance. The database connector is made up of two different parts. The first is the Connection (or the Where) which contains the database type, location, and user login. The second is the Operation component (Which is the How) and consists of a Read or Write statement or stored procedure call and record-grouping definition.

**Decision step**  
Routes documents based on a True/False comparison of two values. Those values can be anything from field values in the current document (profile elements), static values, results of a database, or an application query.

**Data quality step**  
Is a component of a model. Ordinary data quality steps are specifications for validating and optionally enriching incoming source entity data using third party services. Integration process call data quality steps are specifications for validating and/or enriching incoming source entity data by means of executing Integration processes. Business rule data quality steps specify custom business rules for validating incoming source entity data.

**Decision map element**  
Allows conditional routing within a flow, for example where one incoming path gets split into two or more outgoing paths, based on pre-conditions. This is achieved using outcomes and business rules within a flow. See [decision map elements](/docs/Atomsphere/Flow/topics/c-flo-ME_Decision_9ca6d47d-cb8f-40dd-8514-381dca308957.md).

**Document**  
Set of data that goes through a process and is the main unit that powers a process flow's execution. A document can be a single record or multiple records. The raw document types supported are; XML, JSON, flat file, database, and EDI. Boomi Documents are presented in one of four forms; records for flat files and database record sets, transactions for XML or EDI, file instances for non-structural communication (for example, an email attachment), and an empty document (used to trigger subsequent steps in a process)

**Document caching**  
Allows you to add documents to a memory cache to retrieve later during the execution of a process or subprocess.

**Dynamic document properties**  
Properties a process developer can define and use to hold additional information about a document for a short time. They are arbitrary name/value pairs that follow the document from start to finish, including map transformations and outbound connector calls.

**Domain**  
This is either the data tracking a particular “noun” of a company’s business — for example, contacts, employees, partners, vendors, etc. — or a master source of reference data — for example, geographical location names and abbreviations. Both types of domains are master data domains, but the term “reference data domain” is commonly used to distinguish the second type. A domain’s configuration includes the version of the underlying model with which the domain shares its name, attached sources, and their channel configurations.

:::note 

In the context of the Boomi DataHub REST APIs, a domain’s configuration and properties and the underlying model are collectively referred to as a universe.

:::

**Electronic Data Interchange \(EDI\)**  
The computer-to-computer exchange of business documents in a standard electronic format between business partners. Boomi EDI makes it easy to set up and exchange documents with your trading partners and manage trading partner relationships including rapidly updating your transaction processes to meet the evolving needs of your business - without the burden of installing and maintaining software. An EDI profile describes a delimited or positional file that meets ASC X12, HL7, EDIFACT, TRADACOMS, or user-defined standards.
  
**EDI standards**  
Describes the formats, character sets, and data elements used in the exchange of business documents and forms. The standards also give the rule for the structure of the document. Boomi supports EDI standards X12, EDIFACT, HL7, RosettaNet and Tradacoms, as well as trading partner communication requirements, including AS2, disk, FTP, SFTP, HTTP and HTTPS. We also provide a library of EDI document types that you can easily map to transfer data to or from your back-end systems.

**Entity**  
The XML representation of data for a single object of a given type, such as a contact, employee, partner or vendor, as the data is propagated to or from a repository. Entities are propagated in batches.

**Environment**  
Type of workspace that users create for testing or production purposes. A testing environment is a work-in-progress workspace where developers can build, configure, and test their processes and operations before making it available to their end users. A production environment is where processes and operations are made available to end users. You can attach runtimes (Atoms, Molecules, and Clouds) to your environments to support various stages of your software development life cycle and restrict user access. See [Environment management](../Integration/Integration%20management/c-atm-Environment_management_1ec94aeb-ffaf-4cec-a3b0-483c2af3967c.md).

**Event-based integration**  
A specified event triggers an event-based integration. The majority of the time, event-based integration processes are not executed on a timetable. Once started, an event-based process "listens" for the occurrence of a particular event. The event's occurrence initiates processing. Event-based integrations are preferred when processing is required in response to irregularly occurring external events.

**Event-driven architecture \(EDA\)**  
EDA can be defined by an event that is triggered in one system and creates a corresponding response event or transaction in another system. An EDA is a design pattern that allows interested systems to interact by propagating, analyzing, and persisting events. EDAs complement not replace SOAs. (While SOA is better suited to request/response exchanges, EDAs allows long-running asynchronous processes).

**Event-driven connectors**  
These provide connectivity to event-based systems using application and technology connectors. Event-driven connectors respond to user actions, such as mouse clicks and messages from another application or program, and define the data, security model, integration path, and control flow of such events. They are used to detect real-world business events triggered by such systems as the Internet of Things (IoT) devices, mobile applications, ecosystems, and social and business networks. Event-driven connectors offer dynamic solutions and integration options for queuing, message brokers, event meshes, real-time streaming, analytics, and asynchronous APIs. Boomi provides connectivity to multiple EDA technologies, such as Kafka, SQS, Solace, and RabbitMQ.

**Execution**  
The result of running a process. When viewing the previous process runs in the Manage menu, you can view the data passed into and out of the process, detailed logs, and error messages. In production environments, you schedule processes to run at regular intervals, but you can also run them manually on an as needed basis. See [Process execution](../Integration/Integration%20management/c-atm-Process_execution_0a389d3f-a5bd-4fdc-8ee2-2c1ab31cb6e1.md).

**Flow**  
Flows are built in the Flow app and allow you to deliver applications to your users using a drag-and-drop, low-code development environment. A flow is the JSON metadata definition of your web application’s features and user interfaces. This metadata is turned into a usable application at runtime using an HTML/JavaScript ‘player'. See [Flows](/docs/Atomsphere/Flow/topics/c-flo-Flows_Overview_263d2c58-b3b9-463b-92c3-b828eb3362ea.md).

**Golden record**  
A mode applicable to a contributing source of a domain. When you enable Initial Load mode for the source you then execute an integration process to load data from that source into the domain. As long as Initial Load mode is enabled for the source, source record update requests are not propagated on the source’s channel. Update requests necessitated by newly loaded data from that source, on the other hand, are immediately propagated on the channels of previously loaded sources.

**Initial load**  
A mode applicable to a contributing source of a domain. When you enable Initial Load mode for the source you then execute an integration process to load data from that source into the domain. As long as Initial Load mode is enabled for the source, source record update requests are not propagated on the source’s channel. Update requests necessitated by newly loaded data from that source, on the other hand, are immediately propagated on the channels of previously loaded sources.

**Integration packs**  
Pre-defined integration solutions are provided as integration packs. An integration pack is a collection of one or more packaged processes or API Service components that are ready for users of managed accounts to install. An integration pack can contain packages tagged as shared. Up to 100 shareable packages can be found in an integration pack.

**Integration Service**  
Boomi's most popular service. It's a drag-and-drop UI with data mapping tools and a large library of connectors, coupled with support for various integration patterns, that allows you to build any integration quickly. You can use the platform to connect on-premise and cloud applications and other data sources and devices. See [Getting started with Integration](../Integration/Getting%20started/c-atm-Integration_and_iPaaS_257fcf2c-7e93-48d0-be67-bd53fb444930.md).

**Integration platform as a Service \(iPaaS\)**  
Boomi introduced the industry’s first iPaaS in 2008. iPaaS delivers a cloud service for application, data, process, and service-oriented architecture (SOA) integration scenarios. It is a multi-tenant platform that supports cloud-to-cloud, cloud-to-on-premises, on-premises-to-on-premises and B2B integration. It supports real-time integration and scales to meet the high-volume demands of mobile, extract, transform and load (ETL) and electronic data interchange (EDI) environments.

**Join URI**  
Allows you to share the running instance of a flow with multiple users. Each flow is able to automatically generate a link, which allows someone to invite collaborators or rejoin the specific flow at a later date. This is a system value called the $JoinUri. After starting a flow the URL in the address bar will change to a Join URI. See [System state values](/docs/Atomsphere/Flow/topics/r-flo-Values_System_State_Values_0e184acc-ec85-4922-b06b-07a5d6966fa0.md)

**Listener**  
A process that runs on a server computer. It receives incoming client connection requests and manages the traffic of these requests to the server. An HTTP listener, also known as a network listener, is a listen socket that has an Internet Protocol (IP) address, a port number, a server name, and a default virtual server. Each virtual server provides connections between the server and clients through one or more listeners.

**Low latency**  
A setting you can toggle on or off. It helps increase execution speeds and is recommended for web server and event-based processes. It allows the process to execute mainly in memory, where transformations and other steps can execute quickly.


**Map**  
Allows transformation of data from one format to another — or specifically, from one profile to another. You can map fields or elements by dragging and dropping a source element to a destination element. You can use map functions to perform simple or complex field-level manipulations when you map values. See [Map components](../Integration/Process%20building/c-atm-Map_components_87f669d6-4999-445f-9f29-ed24e79c92dd.md).

**Map elements**  
Added to the flow canvas to define the workflow and behavior of a flow. Map elements can be thought of as the 'building blocks' that make up a flow on the canvas; each map element provides access to a different feature that can be added into a flow, such as showing a screen to a user, obtaining user input, updating and manipulating data, and so on. Connecting map elements with outcomes allows you to determine the path (or paths) that a flow will take. See [Map elements](/docs/Atomsphere/Flow/topics/c-flo-Map_Elements_94361918-d868-4422-9bd4-94da7c46cd0f.md).

**Master data**  
Is an organization’s official data of record, consisting of data directly associated with the “nouns” relevant to the organization and, optionally, reference data that serve as valid metadata values for the nouns.

**Match rule**  
Specifies fields, sources, data quality steps, match rules, tags, and the golden record title format applicable to a domain. In order for domain data to be maintained, a model must be first published and then deployed to a repository. Upon deployment of a model, the newly created domain’s sources must be loaded. When a model is deployed with embedded sources, those sources are automatically attached to the domain. Whereas, when a model is deployed without embedded sources, sources must first be attached to the domain and then configured before loading can occur.

**Model**  
Specifies fields, sources, data quality steps, match rules, tags, and the golden record title format applicable to a domain. In order for domain data to be maintained, a model must be first published and then deployed to a repository. Upon deployment of a model, the newly created domain’s sources must be loaded. When a model is deployed with embedded sources, those sources are automatically attached to the domain. Whereas, when a model is deployed without embedded sources, sources must first be attached to the domain and then configured before loading can occur.

:::note

In the context of the Boomi DataHub REST APIs, a domain’s configuration and properties and the underlying model are collectively referred to as a universe.

:::

**Molecule**  
A single-tenant, multi-node runtime engine that supersedes the capabilities of the Atom, and allows for multiple Atom processes to run concurrently. Molecules are two or more nodes — a grouping referred to as a cluster — that provides greater power to run more complex processes. They can be deployed across multiple physical servers to enhance load balancing and ensure high availability. See [Molecule](../Integration/Getting%20started/c-atm-Molecules_e9469404-7628-4aa7-a63b-7ae57fb13a3e.md).

**Molecule node**  
An individual JVM that runs the Atom code base in the Molecule's shared installation directory. It comprises the head node of the cluster and its subordinate child node(s). The head node orchestrates the cluster, delegates the workload of your process across the child nodes, and communicates with the platform. Child nodes take direction from the head node, usually in the form of handling process runs. Multiple nodes within a Molecule are called a cluster.

**Package components**  
Represents the versioned "snapshot" for a single deployable component, such as process or API service. Before executing a process, it must be packaged and deployed to an environment.

**Player**  
Allows you to define and generate a user interface for your flows. Once you have built a flow, a 'player' is then used to provide a user interface for the flow to your end users. Flow uses an API-first architecture, and players serve as a way of running and rendering these flow API's into a user interface. The platform API's define the user interface elements for a player, and the player in turn generates the interface using this platform definition. See [Players](/docs/Atomsphere/Flow/topics/c-flow-Players_931f82a8-0725-4dc3-b965-f606330dc5a6.md).

**Private Atom Cloud**  
A multi-tenant, multi-molecule runtime engine. A private atom cloud consists of one or more cloud molecules installed on multiple machines, and then grouped together to form an atom cloud. Multiple accounts can use a private atom cloud.

**Process**  
The central component in Integration that represents a single type of data to integrate between two or more systems. Comprises a series of steps (represented in the user interface by steps) that specifies the business logic and transformation requirements. Process steps transform, route, and manipulate data to attain the desired end result. Every process begins with a Start step that gets data from some source and usually ends with one or more connectors to send the data to the destination(s). See [Process building](../Integration/Process%20building/c-atm-Process_building_b422a00a-b17b-4ea8-ae01-d04adaf97e16.md).

**Process logs**  
Runtime generates process logs, which include detailed information about the processes. Once the process is complete, the process logs are available. In-process reporting allows you to see a process log. For process logs, you can also include user notifications.

**Process property**  
Name-value pairs used to hold specific data to aid in the integration process. When testing or troubleshooting a process and its documents, you may want to change the properties of the process or set a property to a particular value. There are two types of process properties: process property components and dynamic process properties.

**Profile**  
Defines the structure or layout of the data to be processed. For example, use profiles when reading from or writing to a given format. Several types of profiles are available:

- Database — When used for reading, the database profile represents the fields in the resulting set(s) of SELECT statements. When used for writing, the profile represents the values used in an UPDATE, INSERT or DELETE statement. Database profiles can also contain elements used as parameters in dynamic statements.

- EDI — profiles represent the structure of the various EDI documents sent through processes, including all the segments, data elements, looping and other configuration information. It allows you to configure repeating data sets (loops). You can also organize segments in Header, Detail and Summary loop sections.

- Flat File — common, simple formats that typically contain one record per line, like a comma separated value (CSV) file. Each record contains a number of fields or elements that are either delimited or data positioned (fixed width). Flat file profiles can represent simple structures with a single record type (such as a CSV file) to moderately complex structures with multiple record types to accommodate parent-child relationships or other repeating record types within the same file, such as header and detail records.

- XML — a common hierarchical format characterized by the use of tags that describe data elements. XML profiles are used by web services and the majority of Integration service connectors.

- [JSON](http://www.json.org/) \(JavaScript Object Notation\) — a text-based data interchange format that is easy for humans to read and write and for machines to parse and generate. Used to transmit structured data over a network connection. It is similar to XML, and you can use it as an alternative to XML.

    See [Profile components](../Integration/Process%20building/c-atm-Profile_components_e9b3ea44-7b4a-4d1e-8185-e09e429275f6.md).

**Quarantine**  
As a noun, it is maintained by a repository for each hosted domain as a “holding pen” for incoming source entities that cannot be incorporated into the domain. The Boomi DataHub service provides a data steward with tools for resolving quarantine entries. Quarantine, as a verb, refers to the action taken by a repository while processing a batch of incoming source entities to put an entity in the quarantine.

**Record**  
Contains data for a single object of a given type, such as a contact, employee, partner or vendor. Master records are called golden records.

**Reference data**  
Static data, such as geographical locations, calendar elements, and stock ticker symbols, that serve as valid metadata values for the “nouns” of a business. A reference data domain is a special type of master data domain.

**Repository**  
A virtual container for master data storage that hosts an individual Boomi account’s master data domains — for example, Contact, Employee, Partner, Vendor. A repository accepts data updates from sources, matches entities from the different sources to one another and propagates source record update requests specifying create, update and delete operations. An individual repository is hosted in a Boomi Hub Cloud.

:::note

New Boomi DataHub accounts are limited to three repositories. Contact your Boomi account representative if you are interested in licensing additional repositories.

:::

**Runtime**  
An executable installed on a server computer. An Atom or a Gateway are runtime programs that can be installed on a Windows or Linux Server.

**Runtime data**  
Anything that is used specifically at runtime, such as states, invoker logs, user tokens, and so on.

**Step**  
The steps linked together to form the business logic for a process. Steps can perform tasks such as document splitting and data transformation, or logic tasks like decision and routing. Each step has its own configuration settings. Steps often reference components such as profiles, connections, operations, and maps. See [Process steps](../Integration/Process%20building/r-atm-Process_shapes_79b3f010-5269-46cf-95d1-db2387afe0f4.md).

**Step execution**  
Refers to how documents move through the process steps in Boomi. Documents move as a group from step to step. Before moving to the next step, each document runs on a specific step sequentially and generally independently. A step executes only if at least one document reaches it. For example, if a Start step does not return any documents (e.g., nothing matches the query), no further steps are taken. Instead of initializing a connection or map step for each document that must flow into it, the step logic is loaded into memory once for the whole collection of documents.

**Source**  
An entity representing a system, such as Salesforce or NetSuite, that contributes to master data and/or accepts updates of master data. A data warehouse is an example of a non-contributing source. Sources can be optionally added to a master data model. When a model is deployed with embedded sources, those sources are automatically attached to the newly created domain.

**Start step**  
The main step that begins a process flow. This step is automatically added to each new process and cannot be deleted. Connectors, Trading Partners, Data Passthrough, and No Data are the four types of Start steps.

**Subflows**  
Flows can be called by other flows as 'subflows', allowing you to re-use flows across multiple workflows. See [Subflows](/docs/Atomsphere/Flow/topics/c-flo-Subflows_ca879fac-5941-44d3-87df-69b97ac5c034.md).

**Subtenant**  
A new tenant created under the same tenant account. Subtenants can be used to structure and organize your flows, for example by using different subtenants for different divisions of your company, or for separating deployment environments into Development, Staging, and Production. See[Tenants](/docs/Atomsphere/Flow/topics/c-flo-Tenants_770f70ef-b441-4f1b-b565-2f87430e28f2.md).

**Swimlane**  
Used to group and restrict access to elements in a flow application for specific users and groups requiring different authorization privileges. For example, you could create an 'employee' swimlane and a 'manager' swimlane for a flow application that approves expense submissions. See[Swimlane elements](/docs/Atomsphere/Flow/topics/c-flo-ME_Swimlane_872bacc3-8123-4bfa-9b87-8bc3ee9d8beb.md).

**System flow**  
A workflow that is automatically implemented by a software system, without the need for human intervention. For example, when you register a new tenant with Flow, the registration process (provisioning a tenant, sending you a confirmation email, etc.) is handled by a system flow.

**Tag**  
A component of a model that specifies a rule for categorizing golden records based on their data — for example, records in an accounts domain whose Type field value is “Customer”. Tags can currently be used only to conditionally limit the delivery of source record update requests specifying create operations to individual sources.

**Tenant**  
A user of a software application that serves multiple other users as well. Each tenant’s information is invisible to other tenants. When you create a Flow account, you are assigned a tenant where all your flows, values, connector integrations and content are stored. See [Tenants](/docs/Atomsphere/Flow/topics/c-flo-Tenants_770f70ef-b441-4f1b-b565-2f87430e28f2.md).

**Trading partner component**  
Represents a unique, standard-specific set of identification information about your company or a company with which you trade electronic data.

**Try/Catch shap**  
Captures process-level errors or document-level errors for one or more documents that fail during an execution. The Try/Catch step sends documents down the ‘Try’ path to be processed. Failed documents are caught and sent down the ‘Catch’ path.

**Types**  
Used to define a 'profile' and structure for data used in Flow, allowing for efficient data organization and scalability when working with complex values. A type uses 'Properties' to build and define the structure of the data that it is associated with. See [Types](/docs/Atomsphere/Flow/topics/c-flo-Types_d429840a-ffa4-47c5-8131-5411965e422c.md).

**Webhooks**  
HTTP POST callback request that occurs when something specific happens. You can use webhooks to trigger an event in Flow when something changes in a third-party connector integration you use (or vice versa). For example, when a file is uploaded in Box, you can use webhooks to trigger a text message being sent out from the Flow app.message being sent out from the Flow app.
