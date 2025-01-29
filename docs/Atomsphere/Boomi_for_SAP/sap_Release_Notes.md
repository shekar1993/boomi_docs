# Boomi for SAP Release Notes 

<head>
  <meta name="guidename" content="Boomi for SAP"/>
  <meta name="context" content="GUID-2873e35f-5f4f-4080-9a9f-971568eea03a"/>
</head>

## Boomi for SAP v1.8 (January 2025)

### Major Enhancements

- **Description Field for Services**: A new description field has been added for services, including Tables, Function Modules (FM), and Data Wizard, allowing for better documentation and clarity in service configurations. (BSAP-33)

- **Rename Services**: Users can now rename Table services and Function Modules, enhancing flexibility in service management. (BSAP-5)

- **Copy a Service**: The functionality to copy Table services and Function Modules has been introduced. (BSAP-3)

- **FM Service Batching**: The FM service batching functionality will facilitate the sequencing of Function Modules (FMs). This approach enhances flexibility and efficiency when making calls to SAP. (BSAP-28)

To learn more, see the [FM Service Batching](./sap-fm_service_batching.md) topic. 

- **Boomi Event Streams Integration**: Boomi Event Streams has been added as one of the standard receiver types, providing more options for event-driven architectures. (BSAP-41)

To learn more, see the [Receiver Framework](./sap_Receiver_Framework.md#setting-up-the-event-streams-receiver) topic. 

### Minor Enhancements and Fixes

- The Function Module and Table Services now accepts lowercase and uppercase letters as well as spaces in names. (BSAP-9)

## Boomi for SAP v1.7.2 (November 2024)

### Minor Enhancements and Fixes

- Resolved an UI error that occurred while accessing table services with specific enterprise-structured tables. (BSAP-149)

- Resolved an error where you could not view tables created in other languages. (BSAP-204)

- A utility program feature is now available to ensure table service compatibility, preventing issues in accessing table services in the older version after the 1.7 update. (BSAP-149) 
   - To learn more, see the [Utility Program User Guide](../Boomi_for_SAP/sap-Utility_program.md) topic. 

- Resolved a bug that was causing malformed JSON in the table service response with unescaped characters in its external field value. (BSAP-214)

## Boomi for SAP v1.7.1 (September 2024)

### Minor Enhancements and Fixes 

- Resolved an error that occurred during Table Service Extraction in Multi Thread execution. (BSAP-143)
- Resolved an error that occurred during processing of Business Object Event with Payload. (BSAP-163)

## Boomi for SAP v1.7 (June 2024)

### Major Enhancements

**Ability to use Outer Joins**

- Inner and outer Joins are now supported in Boomi for SAP. The UI has been updated to support the use of outer joins and Aliases, in addition to a new SQL statement viewer, providing improved visibility to the Boomi for SAP heading. (BSAP-197)

**Table Service Wizard**

- Just as the Function Module wizard, you are can now search through the SAP standard structure tree of Tables for better visibility of the Functional grouping.

:::note 

We recommend you use smaller bundle sizes while creating table extraction jobs to get enhanced throughput.

:::

### Minor Enhancements and Fixes

**Backend and performance Enhancements to the Receiver Framework Connector**

**New operation: LISTEN**

- Allows the connector to browse websocket EDA subscriptions, build response profiles, and connect to corresponding websocket servers identified through browse. It also supports JSON and XML schemas.
- Once connected, the connector listens to any message sent to the subscription’s receiver and simply submits to downstream processes. If connection fails, one error is submitted and an indefinite retry loop is started.
- Please refer to installation and user guides for further details.

:::note
SAP will send events to the websocket server regardless of listening connectors. If no connector is listening, the event may be lost.
:::

## Boomi for SAP v1.6

### Major Enhancements

**Reciever Framework:**

- The Receiver Framework has been seamlessly integrated within the Boomi for SAP UI, allowing users to create custom receivers and offering a personalized touch to your data management.
- With the inclusion of a custom data formatter, you now have the flexibility to dictate the output format of your data, tailoring it to your specific preferences. This level of customization ensures that your data is sent precisely how you want it.
- To streamline your transition, we have incorporated a Migration Tool designed to effortlessly migrate your existing receivers from version 1.5.2 or older to the new framework. This tool simplifies the upgrade process, ensuring a smooth and efficient transition.
- Boomi for SAP v1.6 also lets you set timelines and parameters for your receivers. This feature enables automatic changes over time, providing a dynamic and responsive approach to data management.

### Minor Enhancements and Fixes

**Connector:** (Feb 2024)

   - We enhanced the operation of sending data to SAP through ABAP Proxies. You can now browse for ABAP proxies and use them to send data to SAP. 

      - The connector generates the request and response profile for the selected proxy and the SOAP multipart wrapping the XI message. 

      - Additionally, the connector can unwrap the XI message of the response from SAP when sending it to a synchronous proxy.

## Boomi for SAP 1.6.1 (Core)

### Minor Enhancements and Fixes

- Rebranded as Boomi for SAP.
- Enhanced performance for Event and payload. 
- Resolved bugs.
- Delivered as a transport: Added support for CDS view with parameters.

## aXis for SAP v1.5

### Major Enhancements

- The Event feature can now apply filters to events. 
- The event type payload was added for change pointers, allowing filtering for payloads.
- New functionality to edit Services, making it simpler to configure and manage services.

### Minor Enhancements and Fixes

- Various minor improvements and fixes to enhance the overall stability and functionality of aXis for SAP, as detailed below.

#### Patch Release

**aXis Core 1.5.1**

- Enhancements to improve event performance.
- The format for WSDL and XSD was improved. 
- Support for HTTP 2XX response codes was added. 
- Empty responses have been removed from Payload Events. 
- Extended names for IDOC were implemented to support 8+ characters for JSON.

**aXis Core 1.5.2**

- Adressed error impacting Business Object Events, Realtime, and Payloads being incorrect.

**aXis Core 1.5.3**


- A configuration option was added to return all tables, along with other information when you call the Function Module; eliminating the need for the client to make additional requests. 
- This option can be found in the t-code `/IXBX/ZBX010`. 

**Connector:**

- A new operation called PROXY_SEND was introduced in Sept. 2023, allowing the use of SAP ABAP Proxies. 
- The backend connection now includes new timeout settings, which will activate if the connection is slow or unresponsive. The default timeout duration is 30 seconds.

## Boomi aXis v1.4

### Major Enhancements

- **IDoc**: This feature lets you expose IDocs directly from the aXis UI. The aXis IDoc uses IDoc inbound and outbound functionality through aXis core and can send iDocs to SAP.

- **ABAP Proxy:** ABAP Proxy enables seamless exchange of middleware while maintaining the SAP Proxy framework pipeline. Additionally, it uses ABAP Proxy inbound and outbound functionality through aXis core. 

- **Hyper Automation:** Existing services can now be transported to other systems. 

- **Events**

   1. Event clean-up optimization. 
   2. When creating a subscription, you can now specify the bundle size.

   :::note
   The schema of the events subscription type has slightly changed to accommodate event bundling.
   :::

- You can now create a subscription without specifying a topic.
- View the name of the handler. 

**Table Service**

- “Join Tables” and “Single Tables” merged into “Table Service”.
- Table services can now be promoted from Local to Production. 
- Previewing data sets in the development client is now possible. 

**Table Service Extract** 

- “Initial Load” was rebranded as “Table Service Extract”. 
- Path is no longer required for Table Service Extract. 
- A topic was added to Table Service Extract. This lets the output paths be identical to the extracted data from events with the payload option.

**Function Module**

- Filtering now occurs after the function module call, allowing the use of parameters in the call and filtering out unwanted results. 
- A new RFC-enabled version of `/IXBX/ZBX_BUILD_WHERE` was created to replace the old function module. 

**BW Data Extractors**

- Activation and deactivation of BW extractors can now be done in the aXis UI.

### Minor Enhancements and Fixes

- When a prefix is entered in the Events topic with a trailing `/`, a warning will be displayed to ensure the user is aware of this. 
- Additional information can now be included in the Event JSON. 
- Improved usability via updates to the User Interface.

**Connector:**

- A new operation was added to send iDocs to SAP. 
- Added the option to trust specific server-side certificates, even if they are self-signed.
- Client-side certificate authentication can now be used. 
- You can now enable preemptive authentication as an option.
- You can now add static query parameters to requests. 
- Some errors were downgraded in severity from FAILURE to APPLICATION_ERROR, allowing processes to handle the errors instead of causing a complete failure.

#### Patch Release

**axis Core 1.4.1**

- Resolved the issue that occured with the business object payload subscription when mapping a composite key. 

- The function module with untyped parameters now specifies these parameters as strings to enable the use of the Function Modules. 

**Updates to UTF-8:** 

- Output from BW in non UTF-8 systems, Function modules, and Table services in non- UTF-8 systems are now converted to UTF-8. 

**Connector 1.4.1 (Anja):** 

- Corrected UTF-8 encoding of special characters.

## Boomi aXis v1.3

### Major Enhancements

- Subscription to data changes in SAP from the aXis UI via a wizard.
- Real-time event processing for your events.
- Batch processing with various setup possibilities.
- Removal of main events when all subscriptions for these have been successfully processed.
- Deletion of events/subscriptions in the Dispatch layer that should not be processed.
- The events send program can now run parallel for different message types and locking is done per message type.
- Three handlers are now available for Business Object events:
   1. ```_/IXBX/CL_EVENT_HANDLER```- For Batch processing
   2. ```_/IXBX/CL_EVENT_HANDLER_R``` - For Real-time processing without path
   3. ```_/IXBX/CL_EVENT_HANDLER_R_TOPIC``` - For Real-time processing with Topic path prefix

**Connector:** 
No changes to the connector for Core version 1.3.0.

### Minor Enhancements and Fixes

- The Function Module and Table Service search was improved to accept both, lower case and uppercase letters.
- Function modules with undefined parameters are now supported. The undefined parameters will be classifed as strings, since no type is defined in SAP.
- Fixed missing descriptions for tables.
- Fixed inclusion of descriptions for strict table search.

### Patch Release

**Core 1.3.1**

- Enabled unassigned BOR objects for EDA.

**Core 1.3.2**

- Handled no parameters for function modules, in addition to default values for non-provided parameters.
- More flexible handling of joins.

**Connector:** N/A

## Boomi aXis v1.2

### Major Enhancements

- The source code was down-ported to support 7.31 SP21 SAP_UI v2. 
- Reworked the Data Wizards to use the SAP BAPI (Business API), which provides access to stable function modules in a navigable tree. 
- The Data Wizard was relocated to the interactive canvas. 
- You can now view active services in non-development clients and systems. 
- Strict search functionality has been implemented for tables and function modules.
- Search descriptions are now available for all service creations. 
- Tables now display size approximation indicators. 
- The “condense” function has been removed from text data. 
- Additional information is now provided for Business Events and Change Pointers.
- Performance enhancements were made to the backend.
- Wait times for lack of resources during the initial load have been fixed. 
- References to table parameter structure types in the function module have been corrected. 

**Connector:** 
No changes have been made to the connector for Core version 1.2.0. 

## Boomi aXis v1.1

### Major Enhancements

- The Function Module Services feature allows citizen integrators to expose function modules from SAP through the aXis UI. This enables the functionality to be utilized in Boomi processes via aXis Connector.
- Updated the extended initial load to include a selection screen for the selected table service. This allows for data extraction filtering. Additionally, this functionality is now available in a function module, which triggers the processing.
- We have enhanced the table service, which allows for more complex filtering in the where clause and gives clients greater flexibility in combining multiple levels of AND/OR conditions. Note that this feature is incompatible with version 1.0.x of the backend.
- We enabled the deletion of aXis staging of BW extracts. 
- The Event Send feature lets you choose which message types to process, allowing for more targeted filtering. 
- You can now edit Table Service for both Single and Join, and a change log for Table Services is also available. 

**Max Count and Batch:**

- The data is read from SAP and returned in one document. If any data splitting is required, it must be done within the process itself.
- **Maxcount** is the maximum number of records retrieved from the backend. Setting it to 0 retrieves all records. 
- The **batch size** for the connector can be configured to return multiple documents until the maxcount is reached. By setting maxcount to a specific value and batch size to another value, the connector can return multiple documents, each containing a specified number of records. For example, if maxcount is set to 10000 and batch size is set to 1000, the connector will return 10 documents, each containing 1000 records. However, the batch size will be ignored if the user has implemented paging in the process by setting the ‘offset’ document property.

**Columns Selection for Connector:** When querying table services, use **FIELDS** to specify the desired columns. By default, it omits the FIELDS field and returns all columns. 

**Allow Follow Redirects:** The connector can now follow HTTP redirects from the backend. 

## Boomi aXis v1.0

The first official version of Boomi aXis for SAP.

### Major Enhancements

**Table Services**

- Table Services allow citizen integrators to easily expose tables and views from SAP using the aXis UI. This enables the data to be used in Boomi processes through the aXis Connector. 

**Table Join**

- With Table Join, citizen integrators can effortlessly join tables and expose them from SAP using the aXis UI. This allows the data to be utilized in Boomi processes through the aXis Connector. 

**Events**

- Boomi aXis for SAP can now act as an event sender, reacting to events within SAP. If a scenario requires reacting to create, update, or delete events, Boomi Accelerated Integration for SAP triggers an event, which is then sent to Boomi. Subsequently, Boomi consumes and reacts to this event. The events are sent to Boomi and captured through the Boomi Accelerated Integration for SAP listener.

**Initial Load + Extended:** 

- The Initial Load feature enables SAP users to trigger mass events from SAP. 
   - After developing a process using Boomi aXis for SAP events, the Initial Load feature is useful in replication scenarios to transfer all triggered data from SAP to the target system. 
- Initial Load is based on tables, while Initial Load Extended is based on table Services.

**Data Wizards**

- Data Wizards support citizen integrators by providing a stored collection of suggested tables to be exposed as services. When a user wants to expose a specific business object or domain through the aXis UI, they can choose from these collections. The tables included are based on experience, where the team has stored information on which tables are used for various data extractions, such as charts of accounts, purchase orders, HR personnel information, etc. 

**BW Data Extractor**

- The BW Data Extractor feature is built on the SAP side to send data to SAP BW systems or other data sources using pre-configured BW Data Extractors. Active BW Data Extractors can be viewed through the aXis UI and consumed through the aXis for SAP Connector.

**Authorization:** 

- To utilize the features in Boomi aXis for SAP, a set of transactions is built as part of the installation. Additionally, a recommendation and some pre-built roles are provided. 

**Monitoring**

- The monitoring feature allows SAP users to monitor events that are being sent out of SAP. 

### Patch Release

**Core 1.0.1**

- Corrected issue causing the connector to work only on cloud atoms. 

**Core 1.0.1**

- Bugfix for transports. 
- Adding functionality for deleting extracts in BW.

