# Release Notes for December 2024 

<head>
  <meta name="guidename" content="Release Notes"/>
  <meta name="context" content="GUID-f1d70331-a541-44a3-9d9a-cdf526e28da5"/>
</head>

## Boomi Enterprise Platform Release Cadence Change

The Boomi Enterprise Platform release cadence will change starting in January 2025. Boomi is making this change to streamline planning, ensure compliance, and continue to provide a predictable change schedule. 

Our new release schedule will include functional releases in alternating months, as outlined below. The monthly maintenance window for releases will continue to be limited to 4 hours.

:::note

We've transitioned our Boomi Enterprise Platform API documentation from help docs to a new Swagger-like format on Boomi's [Developer Documentation](https://developer.boomi.com/) website. This modern, interactive experience offers detailed specifications, examples, and enhanced navigation to simplify integrations.

With clearer guidance and better usability, this new format accelerates development, reduces onboarding time, and drives faster product adoption across teams. Check it out now!

:::

### 2025 Release Schedule:

|Platform Releases|
|------|
|January, March, May, July, September, November|

Critical bug fixes, essential infrastructure updates, several independently operating services, and connectors will remain outside this cadence to ensure flexibility. The expected impact of such updates is a group of service restarts expected to last just a few minutes.

## Spaces 12/13
**We fixed these issues:**

* Fixed the issue with the search functionality not working on the "Mappers Installation" and "Run or Schedule a Process" pages, ensuring it performs as expected. (SPACES-753)

* Addressed the issue with the New Scheduler by now enabling the start time Minute drop-down for the Hour and Day Schedule Types. (SPACES-787) 

* Resolved the issue where values entered for pre-installed environments persisted in the edit flow for different environments, ensuring they do not carry over to uninstalled environments.  (SPACES-786)

* Fixed installation failures for non-OAuth connectors, allowing all processes with different connectors to install successfully without issues. (SPACES-786)

* Fixed an issue where the password field value “[Hidden]” was removed from all connectors in the edit flow. This caused the field to lose its pre-existing value during edits. The password field now retains its value “[Hidden]” as expected if it had a pre-existing entry. (SPACES-786)

* Updated UI elements, including the save and cancel buttons, to improve user experience with the new design specifications. (SPACES-885)

## DataHub 12/09

**We added this feature:**

* We’ve improved performance of the Fetch Channel Updates operation. This feature was originally scheduled for the November release. (HUB-4796)


## Bundles 12/06

**We added these features:**

* The drop-down menu for populating the Flow asset in the Add Asset dialog now features a friendlier design, making it easier to view the listed values. (UNI-2912)

* The current custom drop-down in the "Add Asset to Bundle" dialog now uses a typehead drop-down for easier navigation through Integration and Flow assets. (UNI-3501)


**We fixed these issues:**

* We resolved errors that occur when adding a sharing target. The fix ensures that the application loads correctly when you share a bundle. (UNI-4431)

* We fixed the issue with the sharing target banner for private bundles. After you delete a sharing target, the banner disappears without requiring a page refresh. (UNI-4492)

* The search functionality on the Sharing tab of the Bundle Details page and in the Viewed and Installed tables that was not working now works as expected. (UNI-4520), (UNI-4497)

* Resolved an issue with pagination on the "Viewed" and "Installed" tabs, where changing the "Items per Page" setting (20 and 50) was not functioning correctly, ensuring that the item count updates as expected. (UNI-4626)

* Addressed an issue where the "Select Boomi Integration Folder" and "Select Flow Tenant" dropdowns were not displaying folder and tenant names, ensuring that you can now see and select the appropriate options. (UNI-4636)

## Connectivity 

**We are releasing this new connector:**
* The FHIR Client connector is now in General Availability (GA). (B2B-3902)

To learn more, see the [FHIR Client connector](../../Integration/Connectors/int-FHIR_Client_connector.md) topic.

## Partner Submissions 12/06

**We added these features:**

* Submissions now have a new AI Agent submission workflow. (UNI-4589, UNI-4590, UNI-4591, UNI-4592, UNI-4593, UNI-4595, UNI-4596, UNI-4597, UNI-4598, UNI-4599, UNI-4676, UNI-4595, UNI-4596), (UNI-4603)

* The submissions view in the UI now shows 12 recipe layouts by default, and you have the option to change the display to show 24, 36, or more. (UNI-4425)

* We have made the error messages displayed on the Submission UI error banner more user-friendly and understandable. (UNI-4555)

* You are now notified with a warning toast and message when a Bundle is added in Private mode or is not shared with the admin. (UNI-4584)

* The issue of Asset Type category tags being overridden when you add new tags to a submission is now resolved, ensuring that assigned tags remain unchanged. (UNI-4649)

* We added ‘Asset Type’ to 'New', 'In Progress', 'Pending', and 'Published' views to quickly see what type of asset is being submitted. (UNI-4650)

* Added submission asset type to the Submission Details page to easily view what type of asset is being submitted. (UNI-4678)

<!-- These release notes identify the new features and bug fixes in the Boomi Enterprise Platform in October 2023. Features and fixes that are in the Runtime release are indicated. Links to additional information will appear here on the date of the Platform release.

Subject to the terms and conditions of our existing contract with your firm, and liability provisions and limits therein, we confirm that Boomi has successfully passed all applicable test cases associated with the updates identified in this product release.

[Boomi Enterprise Platform](/docs/Atomsphere/Release%20Notes/Mar2024/Mar2024_Platform.md)

[Boomi AI](/docs/Atomsphere/Release%20Notes/Jun2024/Jun2024_Boomi_AI.md)

[Atoms, Molecules, and Atom Clouds](/docs/Atomsphere/Release%20Notes/Mar2024/Mar2024_Atoms_Molecules.md)

[Integration](/docs/Atomsphere/Release%20Notes/Mar2024/Mar2024_Integration.md)

[Platform API and Partner API](/docs/Atomsphere/Release%20Notes/Mar2024/Mar2024_AtomSphere_API.md)

[Connectivity](/docs/Atomsphere/Release%20Notes/Mar2024/Mar2024_Connectivity.md)

[Connectivity development](/docs/Atomsphere/Release%20Notes/Mar2024/Mar2024_Connectivity_development.md)

[Boomi DataHub](/docs/Atomsphere/Release%20Notes/Mar2024/Mar2024_Hub.md)

[B2B/EDI Management](/docs/Atomsphere/Release%20Notes/Mar2024/Mar2024_B2B_EDI_Management.md)

[API Management](/docs/Atomsphere/Release%20Notes/Mar2024/Mar2024_API_Management.md)

[Flow](/docs/Atomsphere/Release%20Notes/Mar2024/Mar2024_Flow.md)

[Data Catalog and Preparation](/docs/Atomsphere/Release%20Notes/Mar2024/Mar2024_DCP.md)

[Event Streams](/docs/Atomsphere/Release%20Notes/Mar2024/Mar2024_Event_Streams.md)

[Boomi Labs](/docs/Atomsphere/Release%20Notes/Mar2024/Mar2024_Boomi_Labs.md) -->