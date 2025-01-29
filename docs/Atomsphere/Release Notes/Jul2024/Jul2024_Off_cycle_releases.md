# Off-cycle releases 

<head>
  <meta name="guidename" content="Release Notes"/>
  <meta name="context" content="GUID-87ba2e25-4df7-471b-b486-b1a0d9ca3fcc"/>
</head>


The following off-cycle release occurred after the July 2024 Runtime release:

|Date|Description|Key|Release note|Release version|
|----|-----------|---|------------|-----|
|July 5, 2024  |  This patch fixes an issue that was causing APIs to return 401 errors if JWT authentication was being used.  | APIM-14421 | [API Management](../Jul2024/Jul2024_API_Management.md)|  24.07.03|

The following off-cycle release occurred after the July 2024 Platform release:

|Date|Description|Key|Release note|Release version|
|----|-----------|---|------------|-----|
|July 15, 2024  |  This patch fixes these issues: <ul><li>Date/time fields now maintain the correct timezone settings, reflecting the timezone of the Boomi Hub Cloud hosting the deployed model. This fix resolves the issue of incorrect timezone updates observed in the US-East-1 Hub cloud when Hub processed record updates to other fields.</li><li>During the Fetch Channel Updates operation, Master Data Hub no longer incorrectly displays the error message  “Must have a valid entity ID for non-CREATE operation” when fetching record updates.</li></ul>  |HUB-4557, HUB-4558| [Master Data Hub](../Jul2024/Jul2024_Hub.md)|  24.07.05|
|July 20, 2024  |  This patch adds this feature: <ul><li>Error messages to address generating documentation for complex processes and processes with loops or cycles.</li></ul><br/>This patch fixes this issue: <ul><li>Errors when component names contain curly braces.</li></ul>  |BI-5814, BI-5887| [Boomi AI](../Jul2024/Jul2024_Boomi_AI.md)|  N/A|

