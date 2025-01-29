# Off-cycle releases 

<head>
  <meta name="guidename" content="Release Notes"/>
  <meta name="context" content="GUID-d41b9e74-088e-4531-b328-7fb5a34a068c"/>
</head>


The following off-cycle release occurred following the June 2024 Runtime release:

|Date|Description|Key|Release note|Release version|
|----|-----------|---|------------|-----|
| June 8, 2024 | This patch fixes the issue where the health check timeout could be automatically adjusted too short, leading to intermittent 502 responses.|  APIM-13878 | [API Management](./Jun2024_API_Management.md) | 24.06.03 |
|June 8, 2024| This patch improves the robustness of generating process reporting records from backed-up execution history artifacts| RUN-7029|[Runtime](./Jun2024_Atoms_Molecules.md)|24.06.03|

The following off-cycle release occurred following the June 2024 Platform release:

|Date|Description|Key|Release note|Release version|
|----|-----------|---|------------|-----|
| June 14, 2024 | This patch releases the new Boomi DataHub connector. The connector features new and familiar operations that align with the Master Data Hub Repository API operations. It makes building integrations for master data synchronization easier.|  HUB-3549 | [Hub](./Jun2024_Hub.md) | 1.0 |
| June 13, 2024 | The default version for Veeva operations was updated to v23.3.| CONC-7265 | [Connectors](Jun2024_Connectivity.md) | 4 |
| June 13, 2024 | A new optional field, **idParam**, under Delete Object Records in the Create/Upsert Vault operation.| CONC-6745 | [Connectors](Jun2024_Connectivity.md) | 4 |
| June 13, 2024 | The Create / Upsert Vault and Update Vault operations were updated to send JSON files to Veeva instead of CSV files.| CONC-6982 | [Connectors](Jun2024_Connectivity.md) | 4 |
| June 13, 2024 | The JSON to CSV file conversion for the Create / Upsert Vault and Update Vault operations was updated to handle comma separators correctly and prevent malformed CSV files from being sent to Veeva.| CONC-6980 | [Connectors](Jun2024_Connectivity.md) | 4 |
| June 13, 2024 | The **Version Filter Options** operation field was updated to be conditional to the Query Vault operation to prevent invalid Query Vault statements from being built.| CONC-6477 | [Connectors](Jun2024_Connectivity.md) | 4 |
| June 13, 2024 | A new object type for the Query Vault operation, **Get items at path list**. | CONC-5596 | [Connectors](Jun2024_Connectivity.md) | 4 |
| June 13, 2024 | The Query Vault operation was updated to support pagination, eliminating the prior limit of 1000 documents. | CONC-5597 | [Connectors](Jun2024_Connectivity.md) | 4 |
