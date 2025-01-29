# Off-cycle releases 

<head>
  <meta name="guidename" content="Release Notes"/>
  <meta name="context" content="GUID-1abd53fa-eed1-4bdd-a6e5-6f2238ae0380"/>
</head>


The following off-cycle release occurred subsequent to the September 2024 release:

|Date|Description|Key|Release note|Release version|
|----|-----------|---|------------|-----|
| September 27, 2024 | We improved Event Streams' capabilities by introducing a new REST API that enables seamless message production and enhances functionality for applications relying on HTTP-based interactions.<br />**Note**: The deployment of this feature may have resulted in a temporary metrics gap in your Event Streams dashboard and when accessing dashboard metrics data via APIs. |ES-115| [Event Streams](/docs/Atomsphere/Release%20Notes/Sep2024/Sep2024_Event_Streams.md) | N/A |
| September 30, 2024 | Due to a Jackson ClassCastException, the upload of connectors using the strict class loader mode will be blocked. In order to upload a connector, you need to set `strictClassLoading` to `false` or remove the `strictClassLoading` property altogether. | CON-9881 | [Connectivity development](./Sep2024_Connectivity_development.md) | 24.09.9 |
|September 30, 2024  |An unexpected error no longer occurs when you enter credentials to unlock the ability to clear model data or undeploy a model in the Boomi DataHub user interface.| PS-5473 | [Hub](/docs/Atomsphere/Release%20Notes/Sep2024/Sep2024_Hub.md) |24.09.07 |
|September 30, 2024  |We released the new HubGen agent and updates to Boomi Scribe that let you document comparisons between two versions.| N/A | [Boomi AI](/docs/Atomsphere/Release%20Notes/Sep2024/Sep2024_Boomi_AI.md) |N/A |
| October 5, 2024  | A warning message appears if the Process Log size exceeds 500MB.  | INT-13349 | [Integration](/docs/Atomsphere/Release%20Notes/Sep2024/Sep2024_Integration.md)  | N/A |

