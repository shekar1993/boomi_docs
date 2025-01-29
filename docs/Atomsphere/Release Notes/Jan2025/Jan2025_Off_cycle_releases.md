# Off-cycle releases Release Notes

<head>
  <meta name="guidename" content="Release Notes"/>
  <meta name="context" content="GUID-89167c73-900a-4e70-8aee-6d609e49d49c"/>
</head>


The following off-cycle releases occurred between the January Runtime and January Platform 2025 release:

|Date|Description|Key|Release note|Release version|
|----|-----------|---|------------|-----|
|January 25, 2025|Resolved an issue in Environment Extensions where accounts with the Secrets Management feature enabled erased existing secrets (such as passwords) defined in the connection tab on consecutive update requests. The Boomi Secrets Management feature was introduced in the November platform release.|PS-6558|[Platform](../Nov2024/Nov2024_Platform.md)|25.01.3|
|January 17, 2025|The January runtime release contained a change for the IP Filtering policy that caused some API calls to fail. This release reverts that change to the IP filtering policy. The 25.01.3 release also contains the changes in the 25.01.1 and 25.01.2 releases. <li>If you took the January Runtime release, you have the option to update to the 25.01.3 version or remain on the 25.01.0 version that was released as part of the January Runtime. </li> <li> If you didn't apply the January Runtime 25.01.0 version, you will automatically receive the 25.01.3 version as part of the January Platform release. </li>|APIM-16513|n/a|25.01.3|
|January 17, 2025  |  When fetching channel updates, Hub no longer sends end-dated collection items in the update request. This issue was caused by HUB-4796, a feature released on December 9, 2024 to improve the performance of the Fetch Channel Updates operation. Patch 25.01.2 resolves the end-dated collection item issue by removing the performance improvements, which will be rescheduled in a future release. The patch 25.01.2 is relevant to public Boomi Hub clouds only.  | HUB-5400, HUB-5399  | [DataHub](Jan2025_Hub.md)| 25.01.2 |
|January 9, 2025|We resolved an error where, if the parent object of a JSON array is not mapped while its child instance identifiers are mapped, the parent object does not generate a "NULL" output.|INT-14246|Runtime|25.01.1|
<!-- The following off-cycle release occurred subsequent to the October 2023 release:

|Date|Description|Key|Release note|Release version|
|----|-----------|---|------------|-----|
|  |    |  | |  | -->
