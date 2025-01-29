# Off-cycle releases November 2024 Release Notes

<head>
  <meta name="guidename" content="Release Notes"/>
  <meta name="context" content="GUID-29815984-ba2c-4653-8f52-c6f55f6e1b47"/>
</head>

:::note

To provide a better and more robust experience for Boomi developers, the Platform API and Parnter API documentation is now accessible on [Developer Documentation](https://developer.boomi.com/docs/APIs/PlatformAPI/Platform_APIs_Overview).

:::

The following off-cycle release occurred between the November Runtime and November Platform 2024 release:

|Date|Description|Key|Release note|Release version|
|----|-----------|---|------------|-----|
|11/05/2024|We resolved an error where executions using JavaScript custom scripting with Custom Library components were unexpectedly failing after the November runtime release. You can now successfully run JavaScript custom scripting processes with Custom Library components.|RUN-8056|Runtime|24.11.4|

The following off-cycle release occurred subsequent to the November 2024 release:

|Date|Description|Key|Release note|Release version|
|----|-----------|---|------------|-----|
|11/08/2024|Addressed an issue where custom `java.library.path` settings were unintentionally overwritten due to the JRE directory naming improvements introduced in the November 2024 Runtime release (RUN-6441). To resolve the issue, we released patch version 24.11.5 that disables the JRE directory renaming feature. <br/><br/> If you took the Runtime release with these JRE directory renaming changes, you will face issues with `java.library.path` getting overwritten and java updates not working as expected. To resolve this, you will need to manually apply this patch  and follow the steps in [this article](https://community.boomi.com/s/article/How-to-fix-accessing-your-JRE-after-taking-the-November-2024-runtime-release) to restore your custom JVM settings. <br/><br/> For Runtimes that have not yet taken the November release, no action is needed.|RUN-8075|[Runtime](Nov2024_Atoms_Molecules.md)|24.11.5|
|11/18/2024|Released four new connectors: OP Database - Partner connector, OP Intelligence - Partner connector, OP WebSearch - Partner connector and OP Wikipedia - Partner connector.|TPP-18|[Connectivity](Nov2024_Connectivity.md)|See changelog for each connector.|
|12/5/2024|We resolved the unexpected disk usage issues caused by HUB-3834 in the November release by implementing patch 24.11.6 that removes HUB-3834. The patch applies to all Hub clouds. The improvements to quarantine messages for data quality steps, initially addressed by HUB-3834, will be rescheduled for a future release. |HUB-5140|[DataHub](Nov2024_Hub.md)|24.11.6|
|12/7/2024|Database V2 connector - The connector now supports **Transaction Processing** feature for **STOREDPROCEDURE** action. For more information, see this [Boomi User Community article](https://community.boomi.com/s/article/Getting-Started-with-Transaction-Processing-in-the-Database-v2). |CONC-7604  |[Connectivity](Nov2024_Connectivity.md)  |29|
