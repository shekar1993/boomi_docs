# API actions 

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-c31cd55c-294d-4825-875d-fcc77bc7e35a"/>
</head>


In addition to object-based operations, the AtomSphere API supports action-based operations that do not fall into the object/verb hierarchy.

Boomi supports the following action-based operations:

:::info 

To import these operations, you must select the EXECUTE connector action in the AtomSphere API and Partner API connectors. The Upgrade Java operation is not available for importing.

:::

:::info

Integration-specific AtomSphere API and Partner REST APIs are also available from the OpenAPI 3.0 specification. Because OpenAPI 3.0 is language agnostic, it enables users to easily discover available Integration API and Partner API objects and actions, test requests and responses, and understand the API's functionality. For more information, see the topic OpenAPI 3.0.

:::

-   [Add Plans to Deployments](/docs/Atomsphere/API%20Management/Topics/api-Add_Plans_to_Deployments_7534b244-5df5-4cf5-b535-46cb6b174871.md)

-   [Remove Plans from Deployments](/docs/Atomsphere/API%20Management/Topics/api-Remove_Plans_from_Deployments_cb31e38f-be7d-403c-926a-4f4d6c23c62c.md)

-   [Send Changes to Authentication Source](/docs/Atomsphere/API%20Management/Topics/api-Send_Changes_to_Authentication_Source_6065a23c-310d-423f-95f0-02ff8c3d47fa.md)

- [Cancel execution](https://developer.boomi.com/api/platformpartnerapi#tag/Cancel-execution-operation) — cancel a process run that is currently running on a particular Atom.

- [Change listener status](https://developer.boomi.com/api/platformapi#tag/Change-listener-status) — pause, resume, or restart listeners

- [Clear queue messages](https://developer.boomi.com/api/platformapi#tag/ClearQueue) — clear all messages for a given Atom queue.

- [Connector document](https://developer.boomi.com/api/platformapi#tag/ConnectorDocument) — retrieve a list of connector document data for a given process run.

- [Deploy component](https://developer.boomi.com/docs/APIs/PlatformAPI/DeprecatedAPIs/Deploy_component_operation_Legacy_deployment) — (Legacy deployment, Deprecated) copy a component deployment from one environment to another.

- [Deploy process](https://developer.boomi.com/docs/APIs/PlatformAPI/DeprecatedAPIs/Deploy_process_operation_Legacy_deployment) — (Legacy deployment, Deprecated) copy a process deployment from one environment to another.

- [Download AS2 artifacts log](https://developer.boomi.com/api/platformapi#tag/AtomAS2Artifacts) — asynchronously download the AS2 artifacts log for a particular Atom for a particular date.

- [Download Atom log](https://developer.boomi.com/api/platformapi#tag/AtomLog) — asynchronously download the Atom log for a particular Atom for a particular date.

- [Download Atom worker log](https://developer.boomi.com/api/platformapi#tag/AtomWorkerLog) — asynchronously download logs for a particular Atom worker.

- [Download execution artifacts](https://developer.boomi.com/api/platformapi#tag/ExecutionArtifacts) — asynchronously download run artifacts for a particular process.

- [Download process log](https://developer.boomi.com/api/platformapi#tag/ProcessLog) — asynchronously download log(s) for a particular process run.

- [Download shared web server log](/docs/Atomsphere/Integration/AtomSphere%20API/atm-Download_shared_web_server_log_operation.mdx) — asynchronously download the shared web server logs for a particular Atom for a particular date.

- [Execute process](https://developer.boomi.com/api/platformapi#tag/ExecuteProcess) — asynchronously run a process on a particular Atom.

- [Get assignable roles](https://developer.boomi.com/api/platformapi#tag/Get-assignable-roles) — retrieve the list of roles assignable under an Platform account.

- [List queues](https://developer.boomi.com/api/platformapi#tag/ListQueues) — retrieve the list of queues associated with a given account.

- [Move queue request](https://developer.boomi.com/api/platformapi#tag/MoveQueueRequest) — move messages from one Atom queue to another.

- [Provision partner customer account](https://developer.boomi.com/docs/APIs/PlatformAPI/MissingInOpenAPI/Provision_partner_customer_account_operation) — provision a partner customer account with specified features as a subordinate account of the partner account.

- [Purge Atom data](https://developer.boomi.com/api/platformapi#tag/AtomPurge) — initiate the purge process for Atom data, like browse components and logs.

- [Rerun document](https://developer.boomi.com/api/platformapi#tag/RerunDocument) — rerun one or more documents.

- [Roll back Java](https://developer.boomi.com/api/platformapi#tag/JavaRollback) — roll back a runtime or API Management container to use its previous version of Java.

- [Upgrade Java](https://developer.boomi.com/api/platformapi#tag/JavaUpgrade) — upgrade a given container (Atom, Molecule, Atom Cloud, Authentication Broker, or API Gateway, or ) to Boomi's latest supported version of Java.