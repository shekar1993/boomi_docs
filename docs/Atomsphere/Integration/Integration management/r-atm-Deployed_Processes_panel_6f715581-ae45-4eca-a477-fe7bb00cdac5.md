# Deployed Processes panel 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-A22CD8A3-FE07-48C6-88A8-1F3068D4D40E"/>
</head>


The Deployed Processes panel lists all deployed processes, including integration pack processes, for the selected Atom, Molecule, or Atom Cloud.

Access this panel on the Atom Management page \(**Manage** \> **Atom Management**\).

:::note

You must have the Atom Management privilege to modify schedules and properties for deployed processes. If you have the Atom Management Read Access privilege, you can view information about process schedules and properties but you cannot perform any actions.

:::


![Deployed Processes panel](../Images/manage-ps-deployed-processes_1bdac558-8846-496b-ac5d-6aea22335301.jpg)

From within this panel:

**Name**  
**Description**

**Schedules**  
Stops or resumes all of the scheduled processes on the selected Atom, Molecule, or Atom Cloud.

**Filter Processes**  
To search for a deployed process by name, type all or part of its name in the Filter Processes field. Click this ![Clear filter](../Images/main-ic-x-white-in-gray-circle-16_0abafeee-d5e7-4888-9bfb-475b11b6d00f.jpg) icon to clear the field.

**![Options](../Images/main-ic-arrow-blue-down-16=GUID-CA79043B-869E-4C8B-A46E-5D4D4FA1DBEE=1=en-us=Low_ee257e3c-4362-486e-b1f1-4d613b679c4c.jpg)**  
Clicking the blue arrow next to a process displays these menu selections:

-   **![Execute Process](../Images/main-ic-arrow-green-right-16_59729110-d6d2-4fbe-b89c-80a251e18bea.jpg) Execute Process** — Executes the selected process. This selection is not available for listener processes.

-   **![Stop Schedules](../Images/main-ic-clock-red-box_1d35d9e7-6c11-4c51-a24a-aeba59880cb2.jpg) Stop Schedules** — Stops the scheduled process. A ![Stopped Schedules](../Images/main-ic-gear-gray-box-red_22f28ca5-5e34-4401-b639-570475e878b2.jpg) red square appears next to the process whose schedule has been stopped. This selection is not available for listener processes.

-   **![Resume Schedules](../Images/main-ic-clock-green-triangle_81088c2e-70cb-4f80-9daf-69f97c5a7b9c.jpg) Resume Schedules** — Restarts the scheduled process. A ![Resumed Schedules](../Images/main-ic-gear-gray-arrow-green-right_7cfb869f-418b-40f4-b8f3-4363e24dd5a8.jpg) green arrow appears next to the process whose schedule has been started. This selection is not available for listener processes.

-   **![Edit Schedules](../Images/main-ic-document-pencil-green_6e088023-a564-479a-a854-937b89c72d05.jpg) Edit Schedules** — Opens the Scheduling dialog, in which you can add a schedule to a process or edit its schedule. This selection is not available for listener processes.

-   **![Edit Process Properties](../Images/main-ic-document-pencil-green_6e088023-a564-479a-a854-937b89c72d05.jpg) Edit Process Properties** — Opens the Edit Process Properties dialog, in which you can edit the process’ properties.

:::note

Integration pack processes are listed on this tab in a separate folder. Within that folder there is a sub-folder for each integration pack to which this Atom, Molecule, or Atom Cloud is attached. Expand a sub-folder to see the list of that integration pack’s component processes.

:::