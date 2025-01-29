# Off-cycle releases 

<head>
  <meta name="guidename" content="Release Notes"/>
  <meta name="context" content="GUID-6d81465c-d6bf-43f6-8471-090282e999d8"/>
</head>


The following off-cycle release occurred after the November Platform 2023 release:

|Date|Description|Key|Release Note|Release version|
|----|-----------|---|----|----|
|December 2, 2023|The HTTP Patch Client connector no longer fails to render extended fields in the Environment Extensions User Interface for sub-accounts when deployed via Integration packs. No change was made to the Environment Extensions API  as this issue did not affect it and it continues to function as expected.| INT-10082 |[Boomi Enterprise Platform](/docs/Atomsphere/Release%20Notes/Nov2023/Nov2023_Platform.md)|23.11.11|
|December 15, 2023|Errored singleton listeners will now be able to auto-recover after triggering a restart from environment extensions if the correct connection information is given. This fix is included in version 23.11.4 of the Boomi runtime, so errored singleton listeners can successfully restart in cases when auto recovery is possible.| CON-8702 |[Connectivity](https://help.boomi.com/docs/Atomsphere/Release%20Notes/Nov2023/Nov2023_Connectivity)|23.11.4|
|December 15, 2023|Listeners using batch submissions will not intermittently fail to close document data streams for data streams that were previously closed. The execution will no longer error out with `com.boomi.store.DataStoreException: Unable to close segment` in process reporting.| CON-8701 |[Connectivity](https://help.boomi.com/docs/Atomsphere/Release%20Notes/Nov2023/Nov2023_Connectivity)|23.11.4|
|December 22, 2023|A security vulnerability was reported in [CVE-2023-46604](https://www.cve.org/CVERecord?id=CVE-2023-46604) that impacts the version of ActiveMQ that Boomi Runtime uses. Runtime release 23.11.5 is available immediately (this replaces 23.11.4 that was released on Dec. 15th) and contains an updated version of the ActiveMQ that addresses the CVE-2023-46604 issue.<br/><br/> **You should apply this update to your Runtimes as soon as possible**. If you do not apply it manually, it will be applied automatically on December 27, 2023 between 3am and 7am EST.  Your runtimes will restart with this update. To manually update your runtime, see [Applying pending Atom and connector updates](https://help.boomi.com/docs/Atomsphere/Integration/Integration%20management/t-atm-Applying_pending_Atom_and_connector_updates_420c313b-ae24-42e8-8a4c-b6b957d7ce67).<br/><br/>A new patch 23.11.6 ( with no additional changes)  will be applied automatically on December 27, 2023 between 3am and 7am EST.  **All runtimes will restart with this update during this window**.<br/><br/>For customers using Boomi’s public clouds, the presence of compensating controls we have in place mitigates the risk to Boomi’s public clouds. These clouds will be updated with this patch on December 27, 2023 between 3am and 7am EST.|RUN-6231|[Atoms Molecules and Atoms Clouds](/docs/Atomsphere/Release%20Notes/Nov2023/Nov2023_Atoms_Molecules_Clouds.md)|23.11.5|


<!--The following off-cycle release occurred subsequent to the October 2023 release:

|Date|Description|Key|Release note|
|----|-----------|---|------------|
|  |  |  | | -->