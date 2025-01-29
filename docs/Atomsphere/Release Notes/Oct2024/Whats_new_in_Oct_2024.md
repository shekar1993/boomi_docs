# Release Notes for October 2024

<head>
  <meta name="guidename" content="Release Notes"/>
  <meta name="context" content="GUID-8e31f2b4-c607-4875-b422-9347cdf47c46"/>
</head>

## Spaces, 10/25


**We added these features:**

* Enhanced the Spaces functionality to support multiple processes, connections (with or without OAuth), and environments, allowing you to install the integration pack with customized configurations. (SPACES-828, SPACES-829)

* Ensured that the client secret does not persist when generating an access token or upon refreshing a page during the edit or installation of the multi-connector integration pack. (SPACES-873)

* Standardized the status and information messages for the Encrypt Client Secret and Reset Client Secret buttons across all OAuth connections. (SPACES-919)

* Achieved uniform behavior for the refresh and edit flow for empty properties for access token parameters and authorization parameters. (SPACES-920)


**We fixed these issues:**


* The system now generates access tokens for the QuickBooks Online connector, even when you include multiple OAuth connections within a single process in the same environment. (SPACES-815)

* Resolved the issue where the system did not persist access token parameters, authorization parameters, and the status of the Generate Token button across multiple QuickBooks Online processes. (SPACES-863, SPACES-820
SPACES-821)

* Ensured that when you provide inputs to only one QuickBooks Online connection while keeping other connections empty, the system now retains the values solely for the first configured connection and does not persist these values to other processes. (SPACES-822, SPACES-823)




## Boomi Discover, 10/11

**We added these features:**

- The Boomi [Discover](https://discover.boomi.com) homepage now features a **Get started with Boomi AI** banner that showcases six Boomi AI Agents. You can navigate directly to the details of these offerings with a single click. (CJ-2957, CJ-2958)

- Each Boomi AI Agent solution page gives you the following information:

  - Whether or not it is preinstalled. This is indicated next to the agent's title. (CJ-2960) 

  - How or where to use the agent. This is shown in the Available Via section. Available methods are Boomi GPT, API calls, integration canvas, and so on.  (CJ-3084)

  - How the agent works. This is demonstrated through a video in the How it Works section. (CJ-2961,  CJ-3083)

- Sorting functionality has been implemented to display Boomi AI Agents at the top, followed by other AI Agent solutions. (CJ-3082)

To learn more about the Discover product, read [Boomi Discover](../../Platform/atm-Boomi_Discover.md).


## Spaces, 10/4

**We added these features:**

* The Connection Configuration table has been enhanced to improve usability and responsiveness. It now includes validations for the Access Token Parameters and Authorization Parameters. Additionally, error messages have been integrated to provide clearer guidance while filling out these fields. (SPACES-811)

* The Persist OAuth Connector Details and Get OAuth Connector Details APIs  have been modified to expand functionality with multiple Quickbooks Online connectors for generating Access Token separately. These enhancements now allow the APIs to work with the combination of multiple QuickBooks Online with other connections, multiple processes, and multiple environments enabling broader integration capabilities and improved connectivity. (SPACES-861)

* The system now displays updated instructional messages for client secret actions during the configuration process. You will receive clearer guidance to assist them effectively in entering and resetting client secrets. (SPACES-832)

* The scheduler has been enhanced to significantly improve the user experience. The system now displays the Minute, Hour, and Day range from 00 instead of 01. (SPACES-834)

## Submissions, 10/4

**We added these features:**

* Partners can now create a submission on the Recipe & Bundle Details page without the need to select a bundle. (UNI-4406)

* Implemented a validation to ensure that the bundle used in a recipe is shared with the admin account boomi_submissions-CD66FR so that the admin has access to review the bundle submitted by the partner. (UNI-4382)
 
* Implemented a success/error handler for the Save action in the submission flow. Partners will now be notified if their in-progress data was saved successfully or not. (UNI-4418)

* Partners now have the ability to exit their submission during the Action Needed fixing process, allowing them to return to the Submission dashboard later. An Exit option is available in the submissions workflow, and upon clicking it, you receive a confirmation dialogue box to validate their action. (UNI-4428, UNI-4489, UNI-4521, UNI-4539)

* Partners can now add names to their recipes when creating a new submission through the Create New Submission dialog box. After entering the name, when you click the Start Submission button, you are  redirected to the topics page displaying all enabled topics if the submission is successfully created. (UNI-4454, UNI-4480)

* Introduced a Save button within the submission flow for Partners, allowing you to save the progress and return later without losing any data. (UNI-4470, UNI-4471)

* Updated the submission UI to feature an error message banner that now appears prominently at the top, above the masthead. (UNI-4479)

* During submission, partners will now see the message “Bundle Not Shared with Boomi admin” if the selected bundle for that particular recipe is not shared with the Boomi admin. (UNI-4517)

## Maintenance Window

:::info Deferred

The Boomi Enterprise Platform infrastructure maintenance window, previously scheduled for October 12, 2024, has been deferred to a future date. We will communicate an update in advance of the rescheduled maintenance window once a new date is available.

:::

Saturday, October 12, 2024, from 07:00 - 11:00 UTC

### Impact during Platform outage

#### Boomi Enterprise Platform impact

- All activities performed through the Boomi Web Interface and Platform Public APIs will not be available.

- Runtime executions will continue to operate normally except interactions with the impacted services listed below. Executions that leverage these services may produce unexpected results. The Boomi team recommends suspending such executions throughout the maintenance window. The services affected are:

  - Boomi Platform OAuth, which provides capabilities to connectors that are configured to use Authorization Code or Resource Owner Credentials grant types
  - Boomi Platform Public APIs

- Process Reporting Data will be delayed during the maintenance window and may need some time to catch up following the restoration of services.

- Email alerts will be delayed during the maintenance window and may need some time to catch up following the restoration of services.

- The Platform may become out of sync with off-boarded node status for multi-node runtimes.

#### API Management impact

- The embedded developer portal may be unavailable or may produce inconsistent results.
- Discovery on the APIIDA control plane may be unavailable.
- Rebuilding the gateway database may not be feasible during the maintenance window.
- Data displayed on the API Management dashboard will be delayed during the maintenance window, and some time will be needed to catch up following the restoration of services.

#### Bundles, Spaces, Discover, Tech Partner Portal impact

- All activities performed through the Boomi Web Interface and Platform Public APIs, including new trial registrations and user logins, will not be available.

- However, [discover.boomi.com](https://discover.boomi.com/) (unauthenticated) might still be functional.