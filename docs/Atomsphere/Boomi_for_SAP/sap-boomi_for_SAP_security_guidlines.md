# Boomi for SAP Security Guidelines

<head>
  <meta name="guidename" content="Boomi for SAP"/>
  <meta name="context" content="GUID-01334f4f-147a-41b3-8663-884881c5b6a3"/>
</head>

**Authorization and Security**

Boomi for SAP is built on ABAP. It follows SAP’s established mechanisms for handling authorization and security, ensuring your SAP system remains secure.

**Authentication Engine**

For REST services, Boomi for SAP utilizes ICM as the authentication engine. ICM strengthens the security of your REST services by leveraging their capabilities.

**Role Compatibility**

Boomi for SAP does not introduce new roles overruling your existing PCFG roles. Our designers created this new system to be compatible with your existing role configurations, minimizing the need for extensive modifications.

**Dedicated Roles**

Boomi for SAP provides dedicated roles that grant access to transactions specifically designed for Boomi for SAP. Boomi for SAP's dedicated roles simplifies role management and ensures users have the correct permissions for *Boomi for SAP*-related tasks.

**Base Path**

Access to all REST JSON services and UI components in Boomi for SAP must run from the `/ZBX/` base path. His process standardizes the location of services and components, allowing better management and accessibility.

By following these guidelines, you can ensure a secure and streamlined experience with Boomi for SAP.

## Authorizations

Development for Boomi for SAP only runs from the UI in a development client. For non-development clients, services created can be displayed only.

This means that if your development system has multiple clients, such as a development client and a data client, you should access the development UI in the development client. However, for data extracts utilizing table services, access should be in the data client (Runtime role), where only the services are displayed in the UI.

### Transactions and Roles

During the installation of Boomi for SAP, the installer provides a set of transactions. If you use the transaction code directly, you must type `/n` before the transaction code, for example, `/n/IXBX/START_UI`.

If you choose to use the roles in the Boomi for SAP Add-On installation, you must create a transport(s) via T-code PFCG for the roles in client 000, then pull the transport to the other clients in your development system. Additionally, You must import the transport(s) into your landscape's system(s).

**Runtime role**

Background user - system user (called from the target system, For example, Boomi)

**Workflow user**

To send events from SAP, the WF-Batch user has to be created and active. Furthermore, you need to configure the RFC Destination.

**Roles delivered with the Boomi for SAP installation**:

| Role | T-Codes | Description |
| ---- | ------- | ----------- |
| /IXBX/AXIS_ALL and /IXBX/BOOMI_FOR_SAP_ALL Include all roles |  |  |
| /IXBX/UI | UI |  |
|  | /IXBX/ZBX001 | Open UI |
|  | SM59 | RFC Destinations Display |
| /IXBX/FUNCTION MODULE | Function Module |  |
|  | /IXBX/ZBX010 | Function module settings |
| /IXBX/TABLE_SERVICE_EXTRACT | Table Service Extract |  |
|  | /IXBX/ZBX008 | Table service extract |
| IXBX/EVENT | Event |  |
|  | /IXBX/ZBX003 | List events |
|  | /IXBX/ZBX004 | Send events |
|  | /IXBX/ZBX011 | Event subscriptions |
|  | /IXBX/ZBX012 | Clean up obsolete EDA events |
|  | /IXBX/ZBX013 | Remove from the Dispatch layer |
|  | /IXBX/ZBX018 | Event subscriptions - Advanced |
|  | SWETYPV | Display/Maint. Event Type Linkages |
|  | BD52 | Active. change pointer per chng.doc.it |


| Role | T-Codes | Description |
| ---- | ------- | ----------- |
| IXBX/BW | BW Data Extractor |  |
|  | /IXBX/ZBX006 | Activation BW extract |
|  | /IXBX/ZBX007 | Send BW extraction events |
|  | /IXBX/ZBX009 | BW extraction delete |
|  | RSA2 | Extractor Checker |
| IXBX/IDOC | IDOC |  |
|  | /IXBX/ZBX016 | Alternative IDoc partner |
|  | /IXBX/ZBX017 | Alternative IDoc port RFC |
|  | /IXBX/IDOC | IDoc Authorization Object |
| IXBX/TABLE_SERVICE_RFC | Table Service RFC |  |
|  | /IXBX/ZBX014 | Allow RFC table service test |
|  | /IXBX/ZBX015 | Table Service test RFC dest |
|  | /IXBX/RFC | RFC Authorisation Object |
| IXBX/HYPER AUTOMATION | Hyper Automation |  |
|  | /IXBX/ZBX002 | Hyper Automation |
| /IXBX/RECEIVER | Receiver |  |
|  | /IXBX/ZBX005 | Custom data conversion filter |
|  | /IXBX/ZBX019 | Data Conv&RecType Mapping |
| IXBX/RECEIVER_MIGRATION | Receiver Migration |  |
|  | /IXBX/ZBX020 | Receiver Migration Tool |
|  | /IXBX/MIGR | Migration Authorisation Object |


**Transactions overview**

| Description | Numerical | Non-Numerical |
| ----------- | --------- | ------------- |
| Start Web UI | /IXBX/ZBX001 | /IXBX/START_UI |
| Hyper Automation | /IXBX/ZBX002 | /IXBX/HYPER_AUTO |
| List Events | /IXBX/ZBX003 | /IXBX/EVENT_LIST |
| Send Events | /IXBX/ZBX004 | /IXBX/EVENT_SEND |
| Maintain custom data conversion filter | /IXBX/ZBX005 | /IXBX/DATA_CONV |
| Active BW extractor| /IXBX/ZBX006 | /IXBX/BW_ACTIVATE |
| Send BW extraction events | /IXBX/ZBX007 | /IXBX/BW_EVENT_SEND |
| Table Service Extract | /IXBX/ZBX008 | /IXBX/EVENT_INILOADX |
| Delete BW extraction | /IXBX/ZBX009 | /IXBX/BW_EXTRACT_DEL |
| Function Modules Settings | /IXBX/ZBX010 | /IXBX/FM_SETTINGS |
| Process EDA subscriptions | /IXBX/ZBX011 | /IXBX/PROCESS_EVENTS |
| Clean up obsolete EDA events | /IXBX/ZBX012 | /IXBX/CLEAN_UP_EVENT |
| Remove from the Dispatch layer | /IXBX/ZBX013 | /IXBX/CLEAN_DISPATCH |
| Allow RFC table service test | /IXBX/ZBX014 | /IXBX/ALLOW_TS_RFC |
| Table service test RFC dest | /IXBX/ZBX015 | /IXBX/TS_TEST_RFC |
| Alternative IDoc partner | /IXBX/ZBX016 | /IXBX/IDOC_ALT_PARTN |
| Alternative IDoc port RFC | /IXBX/ZBX017 | /IXBX/IDOC_ALT_RFC |
| Event Process Advanced | /IXBX/ZBX018 | /IXBX/EVENT_PROC_ADV |
| Data Conversion and Receiver Type Mapping | /IXBX/ZBX019 | /IXBX/DCONV_RECV_MAP |
| Receiver Migration (1.5.2 → 1.6.0) | /IXBX/ZBX020 | /IXBX/MIGRATION_TOOL |


