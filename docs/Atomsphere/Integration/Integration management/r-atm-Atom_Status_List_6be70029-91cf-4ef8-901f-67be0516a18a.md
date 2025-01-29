# Atom status list 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-6be70029-91cf-4ef8-901f-67be0516a18a"/>
</head>


You can view runtime information, settings and configuration, and deployment information for Atoms, Molecules, and Atom Cloud (Cloud Molecule and Cloud Attachment) in Atom Management.

On the left side of the Atom Management page is a list of the Atoms, Molecules, and Atom Clouds to which your account has access. Clicking an Atom, Molecule, or Atom Cloud in the list displays information about it on the right side of the page.

Atoms, Molecules, and Atom Clouds are listed alphabetically by type. If your account uses environments, each Atom, Molecule, or Atom Cloud appears below the environment to which it is attached. Unattached Atoms, Molecules, and Atom Clouds appear in the Unattached Atoms list.

![Atom status](../Images/manage-pg-atom-status-list_86bf9502-472b-4557-8a1b-70a52c5aa2e4.jpg)

In order to execute processes and view execution logs, the Atom, Molecule, or Atom Cloud must be online. Atoms, Molecules, and Atom Clouds attempt to report their status back to the platform every five seconds. If the attempt fails \(because the platform cannot be reached, for example\), they retry at increasing intervals of 10 seconds, 30 seconds, 1 minute, 2 minutes, and 5 minutes. After the 5-minute retry interval is reached, retry attempts continue indefinitely at random intervals.

Atom, Molecule, and Atom Cloud status is displayed here as one of the following status indicators:

**Icon**  
**Type of Resource**

![Blue Circle](../Images/main-ic-dot-blue-12_947211c8-281d-4c03-95eb-3e7951d56f3e.jpg)  
The local Atom or Molecule is online and is communicating with the platform.

![Blue Circle with Orange Warning](../Images/main-ic-dot-blue-error_0949d2fe-4c2c-47e9-884e-9db91617d3b5.jpg)  
The local Atom or Molecule is new or the platform is unable to determine the status. Or, one or mode nodes in the Molecule are restarting or reported a problem.

![Gray Spinner](../Images/main-ic-dot-spinner-gray_f8c746f5-a14b-4cb8-951a-ce8fb228b2c0.jpg)  
The local Atom is stopping or restarting.

![Red Spinner](../Images/main-ic-dot-spinner-red_e702aa68-bef3-4c75-bb9c-4e75cd8b320c.jpg)  
The local Atom is stopping or restarting, but it has not responded within five minutes \(if the Force Restart value is not set on the Properties panel\) or within one minute over the Force Restart value \(if the Force Restart value is set on the Properties panel\).

![Red Circle with Exclamation](../Images/main-ic-dot-exclamation-red_b382e57c-f062-4a7b-982f-e23faf5f2876.jpg)  
 The local Atom stopped communicating with the platform and may have terminated unexpectedly.

![Gray Circle](../Images/main-ic-dot-gray-12_44f63a1e-aae0-4810-86e9-99fd1258c0ab.jpg)  
The local Atom or Molecule is not running.

![Gray Circle with Orange Warning](../Images/main-ic-dot-gray-error_411f9662-09f6-453a-a05e-5354c9e71791.jpg)  
The local Atom or Molecule is not running, but it did not shut down cleanly.

![Blue Cloud](../Images/main-ic-cloud-blue_89a071d9-c371-491f-a812-3b66008fee5e.jpg)  
The Cloud Molecule or Cloud Attachment is running and communicating with the platform.

![Blue Cloud with Orange Warning](../Images/main-ic-cloud-blue-warning_93963493-ea6c-4f76-bf59-f0b5c7e01086.jpg)  
 One or more nodes in the Cloud Molecule or Cloud Attachment are reporting clustering issues.

![Gray Cloud](../Images/main-ic-cloud-gray_d9482e64-8961-46a4-be56-ed645095b923.jpg)  
The Cloud Molecule or Cloud Attachment is not running.

![Gray Cloud with Orange Warning](../Images/main-ic-cloud-gray-error_2e946136-fd9d-4c30-9c3f-b55858f19b44.jpg)  
The Cloud Molecule or Cloud Attachment is not running, but it did not shut down cleanly.

## Filter Atoms by type and status 

The Atom Management page allows for filtering and searching. You can filter by Type \(Atom, Molecule, or Cloud\) or Status \(Online, Offline, or Cluster Issues\). Once you have a filter applied, a search returns only items that meet the filter criteria in the search results.

To add a filter, click ![Filter](../Images/main-ic-filter-gray_b6006570-dfb3-4bfc-8e9a-cf62c21b223a.jpg) and select the Type or Status that you want to filter on.

If the icon is colored ![Filter with check mark](../Images/main-ic-filter-checked_d64331c4-cbcd-420b-962d-9c7b33c254fc.jpg), one or more filters is applied. Click the icon to remove or change the filter.

## Show or hide the Atom status list 

The Atom Management page allows you to hide the Atom status list. To hide the list, click **\<** between the Atom status list and the Atom Management panel. While the list is hidden, the ![](../Images/main-ic-tree-with-leaves_0ac9fe9d-224b-4705-bb41-0cd4636fe349.jpg)**Show Environments and Atoms** icon is visible in the vertical bar to the left of the Atom Management panel.

To reveal the list of Environments and the Atoms, Molecules, and Clouds, either:

-   Click ![](../Images/main-ic-tree-with-leaves_0ac9fe9d-224b-4705-bb41-0cd4636fe349.jpg)**Show Environments and Atoms**.
-   Click **\>** immediately to the right of the bar in which ![](../Images/main-ic-tree-with-leaves_0ac9fe9d-224b-4705-bb41-0cd4636fe349.jpg)**Show Environments and Atoms** is visible.