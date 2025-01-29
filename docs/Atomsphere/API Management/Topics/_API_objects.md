
:::note

For ``DELETE`` operations, if your tools do not support sending ``HTTP DELETE`` requests, you can use an ``HTTP GET`` request with a query string of `?method=DELETE`.

For objects that require Atom Management access, you must have the Atom Management privilege to perform ``CREATE``, ``UPDATE``, ``EXECUTE``, and ``DELETE`` operations. If you have the Atom Management Read Access privilege, you can perform ``GET`` and ``QUERY`` operations only.

:::

The following table lists the exposed object types and the allowable operations for each. See the specific object topics to get detailed information about the properties of each one, how to make API calls for each supported operation, and whether the Atom Management privilege is required.

:::info

Integration-specific AtomSphere API and Partner REST APIs are also available from the OpenAPI 3.0 specification. Because OpenAPI 3.0 is language agnostic, it enables users to easily discover available Integration API and Partner API objects and actions, test requests and responses, and understand the API's functionality. For more information, see the topic [OpenAPI 3.0](https://developer.boomi.com/api/platformapi#section/Introduction/OpenAPI-3.0).

:::

| Object Type | GET | QUERY | CREATE | UPDATE | EXECUTE | DELETE |
| --- | --- | --- | --- | --- | --- | --- |
| [Account](https://developer.boomi.com/api/platformapi#tag/Account) | Supported     | Supported     | Supported     | Not supported | Not supported | Supported     |
| [AccountCloudAttachmentProperties](/docs/Atomsphere/Integration/AtomSphere%20API/int-Account_Cloud_attachment_properties_object_936f1091-9d5c-4069-9e02-6d70bdd0fee3.mdx) | Supported     | Not supported | Not supported | Supported     | Not supported | Not supported |
| [AccountCloudAttachmentQuota](/docs/Atomsphere/Integration/AtomSphere%20API/atm-Account_Cloud_Attachment_Quota_object_5a0d18f7-1474-4374-9160-7aa23d64442e.mdx) | Supported     | Not supported | Supported     | Supported     | Not supported | Supported     |
| [AccountGroup object](https://developer.boomi.com/api/platformapi#tag/AccountGroup) | Supported     | Supported     | Supported     | Supported     | Not supported | Not supported |
| [AccountGroupAccount object](https://developer.boomi.com/api/platformapi#tag/AccountGroupAccount) | Not supported | Supported     | Supported     | Not supported | Not supported | Supported     |
| [AccountGroupUserRole object](https://developer.boomi.com/api/platformapi#tag/AccountGroupUserRole) | Not supported | Supported     | Supported     | Not supported | Not supported | Supported     |
| [AccountSSOConfig object](https://developer.boomi.com/api/platformapi#tag/AccountSSOConfig) | Supported     | Not supported | Not supported | Supported     | Not supported | Supported     |
| [AccountUserFederation object](https://developer.boomi.com/api/platformapi#tag/AccountUserFederation) | Not supported | Supported     | Supported     | Supported     | Not supported | Supported     |
| [AccountUserRole object](https://developer.boomi.com/api/platformapi#tag/AccountUserRole) | Not supported | Supported     | Supported     | Not supported | Not supported | Supported     |
| [APIUsageCount object](https://developer.boomi.com/api/platformapi#tag/ApiUsageCount) | Not supported | Supported     | Not supported | Not supported | Not supported | Not supported |
| [AS2ConnectorRecord object](https://developer.boomi.com/api/platformapi#tag/AS2ConnectorRecord) | Not supported | Supported     | Not supported | Not supported | Not supported | Not supported |
| [Atom object](https://developer.boomi.com/api/platformapi#tag/Atom) | Supported     | Supported     | Supported     | Supported     | Not supported | Supported     |
| [AtomConnectionFieldExtensionSummary](https://developer.boomi.com/api/platformapi#tag/AtomConnectionFieldExtensionSummary) (Deprecated) | Not supported | Supported     | Not supported | Not supported | Not supported | Not supported |
| [AtomConnectorVersions object](https://developer.boomi.com/api/platformapi#tag/AtomConnectorVersions) | Supported     | Not supported | Not supported | Not supported | Not supported | Not supported |
| [AtomCounters object](https://developer.boomi.com/api/platformapi#tag/AtomCounters) | Supported     | Not supported | Not supported | Supported     | Not supported | Not supported |
| [AtomDiskSpace object](https://developer.boomi.com/api/platformapi#tag/AtomDiskSpace) | Supported     | Not supported | Not supported | Not supported | Not supported | Not supported |
| [AtomExtensions object](https://developer.boomi.com/docs/APIs/PlatformAPI/DeprecatedAPIs/Atom_Extensions_object)(Deprecated) | Supported     | Supported     | Not supported | Supported     | Not supported | Not supported |
| [AtomMapExtension object](https://developer.boomi.com/docs/APIs/PlatformAPI/DeprecatedAPIs/Atom_Map_Extension_object) (Deprecated) | Supported     | Not supported | Not supported | Supported     | Supported     | Not supported |
| [AtomMapExtensionsSummary object](https://developer.boomi.com/docs/APIs/PlatformAPI/DeprecatedAPIs/Atom_Map_Extensions_Summary_object) (Deprecated) | Not supported | Supported     | Not supported | Not supported | Not supported | Not supported |
| [AtomSecurityPolicies object](https://developer.boomi.com/api/platformapi#tag/AtomSecurityPolicies) | Supported     | Not supported | Not supported | Supported     | Not supported | Not supported |
| [AtomStartupProperties](https://developer.boomi.com/api/platformapi#tag/AtomStartupProperties) | Supported     | Not supported | Not supported | Not supported | Not supported | Not supported |
| [AuditLog object](https://developer.boomi.com/api/platformapi#tag/AuditLog) | Supported     | Supported     | Not supported | Not supported | Not supported | Not supported |
| [Cloud object](https://developer.boomi.com/api/platformapi#tag/Cloud) | Supported     | Supported     | Not supported | Not supported | Not supported | Not supported |
| [Component object](https://developer.boomi.com/api/platformapi#tag/Component) | Supported     | Not supported | Supported | Supported | Not supported | Not supported |
| [ComponentAtomAttachment object](https://developer.boomi.com/api/platformapi#tag/ComponentAtomAttachment) (Legacy deployment, Deprecated) | Not supported | Supported     | Supported     | Not supported | Not supported | Supported     |
| [ComponentEnvironmentAttachment object](https://developer.boomi.com/api/platformapi#tag/ComponentEnvironmentAttachment) (Legacy deployment, Deprecated) | Not supported | Supported     | Supported     | Not supported | Not supported | Supported     |
| [ComponentMetadata object](https://developer.boomi.com/api/platformapi#tag/ComponentMetadata) | Supported     | Supported     | Not supported | Not supported | Not supported | Not supported |
| [ComponentReference object](https://developer.boomi.com/api/platformapi#tag/ComponentReference) | Supported     | Supported     | Not supported | Not supported | Not supported | Not supported |
| [Connector object](https://developer.boomi.com/api/platformapi#tag/Connector) | Supported     | Supported     | Not supported | Not supported | Not supported | Not supported |
| [CustomTrackedField object](https://developer.boomi.com/api/platformapi#tag/CustomTrackedField) | Not supported | Supported     | Not supported | Not supported | Not supported | Not supported |
| [DeployedExpiredCertificate object](https://developer.boomi.com/api/platformapi#tag/DeployedExpiredCertificate) | Not supported | Supported     | Not supported | Not supported | Not supported | Not supported |
| [DeployedPackage object](https://developer.boomi.com/api/platformapi#tag/DeployedPackage) | Supported     | Supported     | Supported     | Not supported | Not supported | Supported     |
| [Deployment object](https://developer.boomi.com/api/platformapi#tag/Deployment) (Legacy deployment, Deprecated) | Supported     | Supported     | Supported     | Not supported | Not supported | Not supported |
| [DocumentCountAccount object](https://developer.boomi.com/api/platformapi#tag/DocumentCountAccount) | Not supported | Supported     | Not supported | Not supported | Not supported | Not supported |
| [DocumentCountAccountGroup object](https://developer.boomi.com/api/platformapi#tag/DocumentCountAccountGroup) | Not supported | Supported     | Not supported | Not supported | Not supported | Not supported |
| [EDICustomConnectorRecord object](https://developer.boomi.com/api/platformapi#tag/EdiCustomConnectorRecord) | Not supported | Supported     | Not supported | Not supported | Not supported | Not supported |
| [EDIFACTConnectorRecord object](https://developer.boomi.com/api/platformapi#tag/EDIFACTConnectorRecord) | Not supported | Supported     | Not supported | Not supported | Not supported | Not supported |
| [Environment object](https://developer.boomi.com/api/platformapi#tag/Environment) | Supported     | Supported     | Supported     | Supported     | Not supported | Supported     |
| [EnvironmentAtomAttachment object](https://developer.boomi.com/api/platformapi#tag/EnvironmentAtomAttachment) | Not supported | Supported     | Supported     | Not supported | Not supported | Supported     |
| [EnvironmentConnection](https://developer.boomi.com/api/platformapi#tag/EnvironmentConnectionFieldExtensionSummary) [FieldExtensionSummary](https://developer.boomi.com/api/platformapi#tag/EnvironmentConnectionFieldExtensionSummary) | Not supported | Supported     | Not supported | Not supported | Not supported | Not supported |
| [EnvironmentExtensions object](https://developer.boomi.com/api/platformapi#tag/EnvironmentExtensions) | Supported     | Supported     | Not supported | Supported     | Not supported | Not supported |
| [EnvironmentMapExtension object](/docs/Atomsphere/Integration/AtomSphere%20API/r-atm-Environment_Map_Extension_object_dfe25a7a-eb29-4a04-8937-46ac7d0118ba.mdx) | Supported     | Not supported | Not supported | Supported     | Supported     | Not supported |
| [EnvironmentMapExtensions](https://developer.boomi.com/api/platformapi#tag/EnvironmentMapExtensionExternalComponent)   [ExternalComponents](https://developer.boomi.com/api/platformapi#tag/EnvironmentMapExtensionExternalComponent)| Not supported | Supported     | Not supported | Not supported | Not supported | Not supported |
| [EnvironmentMapExtensionsSummary](https://developer.boomi.com/api/platformapi#tag/EnvironmentMapExtensionsSummary) | Not supported | Supported     | Not supported | Not supported | Not supported | Not supported |
| [EnvironmentMapExtension](https://developer.boomi.com/api/platformapi#tag/EnvironmentMapExtensionUserDefinedFunction) [UserDefinedFunction](https://developer.boomi.com/api/platformapi#tag/EnvironmentMapExtensionUserDefinedFunction)| Supported     | Supported     | Supported     | Supported     | Not supported | Supported     |
| [EnvironmentMapExtensionUser](https://developer.boomi.com/api/platformapi#tag/EnvironmentMapExtensionUserDefinedFunctionSummary) [DefinedFunctionSummary](https://developer.boomi.com/api/platformapi#tag/EnvironmentMapExtensionUserDefinedFunctionSummary)| Not supported | Supported     | Not supported | Not supported | Not supported | Not supported |
| [EnvironmentRole object](https://developer.boomi.com/api/platformapi#tag/EnvironmentRole) | Supported     | Supported     | Supported     | Not supported | Not supported | Supported     |
| [Event object](https://developer.boomi.com/api/platformapi#tag/Event) | Not supported | Supported     | Not supported | Not supported | Not supported | Not supported |
| [ExecutionConnector object](https://developer.boomi.com/api/platformapi#tag/ExecutionConnector) | Supported     | Not supported | Supported     | Not supported | Not supported | Not supported |
| [ExecutionCountAccount object](https://developer.boomi.com/api/platformapi#tag/ExecutionCountAccount) | Not supported | Supported     | Not supported | Not supported | Not supported | Not supported |
| [ExecutionCountAccountGroup object](https://developer.boomi.com/api/platformapi#tag/ExecutionCountAccountGroup) | Not supported | Supported     | Not supported | Not supported | Not supported | Not supported |
| [ExecutionRecord object](https://developer.boomi.com/api/platformapi#tag/ExecutionRecord) | Supported     | Supported     | Supported     | Supported     | Not supported | Not supported |
| [ExecutionRequest object](https://developer.boomi.com/api/platformapi#tag/ExecutionRequest) | Not supported | Not supported | Supported     | Not supported | Not supported | Not supported |
| [ExecutionSummaryRecord object](https://developer.boomi.com/api/platformapi#tag/ExecutionSummaryRecord) | Not supported | Supported     | Not supported | Not supported | Not supported | Not supported |
| [Folder object](https://developer.boomi.com/api/platformapi#tag/Folder) | Supported     | Supported     | Not supported | Not supported | Not supported | Not supported |
| [GenericConnectorRecord object](https://developer.boomi.com/api/platformapi#tag/GenericConnectorRecord) | Supported     | Supported     | Not supported | Not supported | Not supported | Not supported |
| [HL7ConnectorRecord object](https://developer.boomi.com/api/platformapi#tag/HL7ConnectorRecord) | Not supported | Supported     | Not supported | Not supported | Not supported | Not supported |
| [InstallerToken object](https://developer.boomi.com/api/platformapi#tag/InstallerToken) | Not supported | Not supported | Supported     | Not supported | Not supported | Not supported |
| [IntegrationPack object](https://developer.boomi.com/api/platformapi#tag/IntegrationPack) | Supported     | Supported     | Not supported | Not supported | Not supported | Not supported |
| [IntegrationPackAtomAttachment object](https://developer.boomi.com/api/platformapi#tag/IntegrationPackAtomAttachment) (Deprecated) | Not supported | Supported     | Supported     | Not supported | Not supported | Supported     |
| [IntegrationPackEnvironmentAttachment](https://developer.boomi.com/api/platformapi#tag/IntegrationPackEnvironmentAttachment) | Not supported | Supported     | Supported     | Not supported | Not supported | Supported     |
| [IntegrationPackInstance object](https://developer.boomi.com/api/platformapi#tag/IntegrationPackInstance) | Supported     | Supported     | Supported     | Not supported | Not supported | Supported     |
| [ListenerStatus object](https://developer.boomi.com/api/platformapi#tag/ListenerStatus) | Supported     | Supported     | Not supported | Not supported | Not supported | Not supported |
| [NodeOffboard object](https://developer.boomi.com/api/platformapi#tag/NodeOffboard) | Not supported | Not supported | Supported     | Not supported | Not supported | Not supported |
| [OrganizationComponent object](https://developer.boomi.com/api/platformapi#tag/OrganizationComponent) | Supported     | Supported     | Supported     | Supported     | Not supported | Supported     |
| [PackagedComponent object](https://developer.boomi.com/api/platformapi#tag/PackagedComponent) | Supported     | Supported     | Supported     | Not supported | Not supported | Not supported |
| [PackagedComponentManifest object](https://developer.boomi.com/api/platformapi#tag/PackagedComponentManifest) | Supported     | Not supported | Not supported | Not supported | Not supported | Not supported |
| [PersistedProcessProperties object](https://developer.boomi.com/api/platformapi#tag/PersistedProcessProperties) | Supported     | Not supported | Not supported | Supported     | Not supported | Not supported |
| [Process object](https://developer.boomi.com/api/platformapi#tag/Process) | Supported     | Supported     | Not supported | Not supported | Not supported | Not supported |
| [ProcessAtomAttachment object](https://developer.boomi.com/api/platformapi#tag/ProcessAtomAttachment) (Legacy deployment, Deprecated)| Not supported | Supported     | Supported     | Not supported | Not supported | Supported     |
| [ProcessEnvironmentAttachment](https://developer.boomi.com/api/platformapi#tag/ProcessEnvironmentAttachment) (Legacy deployment, Deprecated) | Not supported | Supported     | Supported     | Not supported | Not supported | Supported     |
| [ProcessSchedules object](https://developer.boomi.com/api/platformapi#tag/ProcessSchedules) | Supported     | Supported     | Not supported | Supported     | Not supported | Not supported |
| [ProcessScheduleStatus object](https://developer.boomi.com/api/platformapi#tag/ProcessScheduleStatus) | Supported     | Supported     | Not supported | Supported     | Not supported | Not supported |
| [Role object](https://developer.boomi.com/api/platformapi#tag/Role) | Supported     | Supported     | Supported     | Supported     | Not supported | Supported     |
| [RosettaNetConnectorRecord object](https://developer.boomi.com/api/platformapi#tag/RosettaNetConnectorRecord) | Not supported | Supported     | Not supported | Not supported | Not supported | Not supported |
| [RuntimeReleaseSchedule object](https://developer.boomi.com/api/platformapi#tag/RuntimeReleaseSchedule) | Supported     | Not supported | Supported     | Supported     | Not supported | Supported     |
| [SharedServerInformation object](https://developer.boomi.com/api/platformapi#tag/SharedServerInformation) | Supported     | Not supported | Not supported | Supported     | Not supported | Not supported |
|[SharedWebServer object](https://developer.boomi.com/api/platformapi#tag/SharedWebServer)| Supported| Not supported| Not supported|Supported|Not supported|Not supported|
| [ThroughputAccount object](https://developer.boomi.com/api/platformapi#tag/ThroughputAccount) | Not supported | Supported     | Not supported | Not supported | Not supported | Not supported |
| [ThroughputAccountGroup object](https://developer.boomi.com/api/platformapi#tag/ThroughputAccountGroup) | Not supported | Supported     | Not supported | Not supported | Not supported | Not supported |
| [TradacomsConnectorRecord object](https://developer.boomi.com/api/platformapi#tag/TradacomsConnectorRecord) | Not supported | Supported     | Not supported | Not supported | Not supported | Not supported |
| [TradingPartnerComponent object](https://developer.boomi.com/api/platformapi#tag/TradingPartnerComponent) | Supported     | Supported     | Supported     | Supported     | Not supported | Supported     |
| [TradingPartnerProcessingGroup object](https://developer.boomi.com/api/platformapi#tag/JavaUpgrade) | Supported     | Supported     | Supported     | Supported     | Not supported | Supported     |
| [X12ConnectorRecord object](https://developer.boomi.com/api/platformapi#tag/X12ConnectorRecord) | Not supported | Supported     | Not supported | Not supported | Not supported | Not supported |
