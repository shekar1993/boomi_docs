# Building and publishing flows 

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-3dba9a15-316f-4134-9093-d4811ea7d14f"/>
</head>


Once you have created and set up a flow in your tenant, you can build the flow itself using the **flow canvas** drag-and-drop interface. Once you have built your flow, you can run and publish the flow to make it available to your users.

## The flow canvas 

Use the flow canvas visual drag-and-drop interface to build a flow, adding "map elements" to the canvas, that can then be configured, linked together and positioned to define the workflow of your flow.

To get started using the flow canvas, see [The flow canvas](c-flo-Flow_Canvas_f063ba9b-b7f4-4484-8242-d51d4fb40fa6.md) and [Using the flow canvas](c-flo-Flow_Canvas_Using_9563eda3-a577-46d0-a444-7cada7c9413d.md).

![The flow canvas](../Images/img-flo-Canvas-overview_4736e3de-2e77-4516-bc59-a7c72b9528a8.png)

## Map elements 

Map elements are used to define the workflow and behaviour of a flow, and can be thought of as the building blocks that make up a flow on the canvas. Each map element provides access to a different feature that can be added into a flow, such as showing a screen to a user, obtaining user input, updating and manipulating data, and so on. Connecting map elements with outcomes allows you to determine the path \(or paths\) that a flow will take.

To get started with adding map elements and joining them with outcomes, see [Map elements](c-flo-Map_Elements_94361918-d868-4422-9bd4-94da7c46cd0f.md) and [Outcomes](c-flo-Outcomes_4049ee93-d7e4-4bc0-ba33-88e523bf4d89.md).

You can add the following map elements to the flow canvas:

| Icon | Name | Description |
|------|------|-------------|
| ![Start map element icon](../Images/img-flo-Icon_ME_startv2_ebf441bd-6fbf-472c-92cb-28ba25340151.png) | [Start](c-flo-ME_Start_faf7525d-acdf-4125-968e-1de5227a1831.md) | The Start map element represents the beginning of your flow on the flow canvas. |
| ![Step map element icon](../Images/img-flo-Icon_ME_stepv2_802d1432-acb9-4df4-96da-65cd95d138a8.png) | [Step](c-flo-ME_Step_f2f3f25f-f6c8-4f34-9c44-6210cdef30a2.md) | Step map elements are used to present content to the users of a flow by allowing simple user interfaces to be created. A step map element can contain videos, images, tables, links, presentations, and code snippets. |
| ![Page map element icon](../Images/img-flo-Icon_ME_pagev2_a01c7bd7-9951-4299-8b5f-79935b11d372.png) | [Page](c-flo-ME_Page_539c415f-59d7-47d5-90ef-cb3a108b3010.md) | Page map elements are similar to step map elements in that they are used to present content to the users of a flow, however page map elements allow for more complex, interactive pages to be built. Page layout templates are used to define the actual structure and functionality of the page. |
| ![Modal map element icon](../Images/img-flo-Icon_ME_modal_2a5bae45-0a9f-4246-8bbc-68de9c414393.png) | [Modal](c-flo-ME_modal_17f92e0b-08e4-47f1-bf7f-19af4ddb7d33.md) | You can use modal map elements to open content in a modal-type browser window. |
| ![Wait map element icon](../Images/img-flo-ME_waiticon_01e37fdf-ad51-4467-948e-900cf97a5f45.png) | [Wait](flo-ME-Wait_24d8b1a1-2f6e-4a55-821a-26c6928b2432.md) | Wait map elements are used to pause the execution of a flow for a set amount of time. When a user running a flow reaches a wait map element, the flow is paused, and a screen/message displayed to the user for the duration that is set in the wait map element. Once this time period has elapsed, the flow continues running, progressing to the next map element in the flow. |
| ![Decision map element icon](../Images/img-flo-Icon_ME_decisionv2_35fe3671-487b-453c-98cd-e095e4e0c593.png) | [Decision](c-flo-ME_Decision_9ca6d47d-cb8f-40dd-8514-381dca308957.md) | Decision map elements allow conditional routing within a flow, for example where one incoming path gets split into two or more outgoing paths, based on pre-conditions. This is achieved using outcomes and business rules within a flow. |
| ![Operator map element icon](../Images/img-flo-Icon_ME_operatorv2_6aa90553-ce91-4478-869a-02134d2c8073.png) | [Operator](c-flo-ME_Operator_7d40c8c0-1da1-4acc-a659-18e534029ae6.md) | Operator map elements allow the state of a value to be changed, using standard operations (such as adding two values, emptying a value) or by using macro operations to perform more sophisticated operations (such as calculating a percentage, random number assignments, and so on). |
| ![Message map element icon](../Images/img-flo-Icon_ME_messagev2_5f65b3a9-9fc0-4ff2-b77d-384cc26048fe.png) | [Message](c-flo-ME_Message_342e9efb-0f11-4083-a2dc-195d52d1f939.md) | Message map elements allow the sending and receiving of requests to third-party messaging connectors. These can be used to configure both incoming and outgoing messages. |
| ![Load map element icon](../Images/img-flo-Icon_ME_loadv2_23fb2158-e82c-4413-8014-93f6f4cfd034.png) | [Database Load](c-flo-ME_Load_d47f5e01-a760-4aa2-8342-e843dd3abc48.md) | Database load map elements allow data to be loaded from an external data source into a flow, such as from a database. |
| ![Save map element icon](../Images/img-flo-Icon_ME_savev2_4311a9f3-2748-4561-a5f1-dd8d8d6d6f8a.png) | [Database Save](c-flo-ME_Save_bffa5a42-8d81-4dd9-9528-1eb26ae04d4c.md) | Database save map elements allow data to be saved to an external data source from a flow, such as to a database. |
| ![Delete map element icon](../Images/img-flo-Icon_ME_deletev2_c3bd6687-8690-4694-a87d-a00173f5a700.png) | [Database Delete](c-flo-ME_Delete_3488f656-867a-426f-911a-54b620716d0d.md) | Database delete map elements allow data to be deleted in an external data source from a flow, such as data in a database. |
| ![Swimlane map element icon](../Images/img-flo-Icon_ME_swimlanev2_4eff6617-6ade-4200-b818-c70c87dfcd60.png) | [Swimlane](c-flo-ME_Swimlane_872bacc3-8123-4bfa-9b87-8bc3ee9d8beb.md) | Swimlane elements are used to group and restrict access to elements in a flow application, for specific users and groups that require different authorization privileges. For example, you could create an "employee" swimlane and a "manager" swimlane for a flow application that approves expense submissions. |
| ![Group map element icon](../Images/img-flo-Icon_ME_groupv2_825a36fb-60b4-4fab-979c-b199805238aa.png) | [Group](flo-ME-Group_790eaab4-9dd6-4081-a199-9f2fe46a9302.md) | Group elements allow you to organize multiple elements on the flow canvas into a single group, which can then be moved and positioned as a single canvas element. |
| ![Subflow map element icon](../Images/img-flo-Icon_ME_subflowv2_7a83dd66-ab4e-4ceb-b299-c60998538a74.png) | [Subflow](c-flo-ME_Subflow_3ab11267-89f8-4b36-afe8-1be36e1c4cef.md) | Subflow map elements can be added to a flow to call another flow as a child subflow. See [Subflows](c-flo-Subflows_ca879fac-5941-44d3-87df-69b97ac5c034.md). |
| ![Return map element icon](../Images/img-flo-Icon_ME_returnv2_c1f48bc4-2ae7-4ee7-bd74-ed4857a5e1e3.png) | [Return](c-flo-ME_Return_d54ca14f-ff8b-43a6-af0b-db0174ad22df.md) | Return map elements are used in a subflow to indicate that the parent flow process should be rejoined from the subflow. See [Subflows](c-flo-Subflows_ca879fac-5941-44d3-87df-69b97ac5c034.md). |
| ![Note map element icon](../Images/img-flo-Icon_ME_notev2_5db1350f-bc73-463c-894b-24e38768bda7.png) | [Note](flo-ME-Note_aa993c3a-9c61-45a2-b392-c59aae58199d.md) | Note map elements allow you to add notes directly to the flow canvas, to provide information about the flow. |


## Shared Elements, Navigation, and Properties 

Additional options are available on the top-right of the canvas.

| Icon | Name | Description |
|------|------|-------------|
| ![Dependencies](../Images/img-flo-Icon_Element_Shared_3b3d330f-e2cf-447f-827f-1d5364c11564.png) | [Dependencies](c-flo-Shared_Elements_85425302-deb7-4f96-aedd-be797a3224e5.md) | Shared elements are 'global' tenant elements that can be shared and re-used across multiple flows within a tenant. |
| ![Navigation icon](../Images/img-flo-Icon_Element_Navigation_3ba19019-61e0-4efd-9f1a-c2eed1ac9a43.png) | [Navigation](c-flo-Navigation_871ceb19-15cf-4fe6-bc34-7e07acbf5878.md) | You can add a navigation element to a flow to allow non-sequential navigation within a flow, allowing flow control to pass from one element to another without waiting for a previous element to be executed. |
| ![Properties icon](../Images/img-flo-Icon_Element_Properties_ce560367-fd5e-4455-9e97-65e20cba34b7.png) | [Flow Properties](c-flo-Flow_Properties_b74d944d-9fec-43da-9ae3-fe0a5a370d00.md) | View and edit the properties for a flow directly from the flow canvas. |

## Flow History

| Icon | Description |
|------| -------------|
| ![Flow History](../Images/img-flo-flo-hist.png) | Flow History allows you to view and compare previous releases of a Flow.  |

- Click **Compare Releases** button to compare two versions by selecting them.
![](../Images/img-flo-hist-compare.png) 
- Click **Run** button to launch the versions.
- Click **View Changes** to see a list of additions, deletions, and modifications that have occurred since the preceding version in the list.
![](../Images/img-flo-hist-view.png)



## Running and publishing flows 

Once you have configured your flow on the canvas, you can run or publish the flow to make it available to your users.

-   Running a flow allows you to generate and view the flow, without making it the default version of a flow.

-   Publishing a flow allows you to generate a flow in the same way as runnign a flow, except that the published flow "snapshot" is then set as the default version of the flow.


To get started with running and publishing your flows, see [Running a flow](c-flo-Running_flows_5b0b848d-2528-4a14-b186-e393812b4664.md) and [Publishing a flow](c-flo-Publishing_Flows_ace67655-6267-49a1-a1dd-2eb29ac6c585.md).

| Icon | Name | Description |
|------|------|-------------|
| ![Run icon](../Images/img-flo-Icon_Element_Run_39fb2444-cfa0-4b1d-bab9-d8efdee4510d.png) | [Running a flow](c-flo-Running_flows_5b0b848d-2528-4a14-b186-e393812b4664.md) | Running a flow will build and execute a flow, but will not make it the default version of the flow. A snapshot is taken of the current version of the flow, and a URL is generated for this version of the flow, allowing you to access the flow in a browser as a web application. This URL can then be used to share the flow with other users. |
| ![Publish icon](../Images/img-flo-Icon_Element_Publish_5daa03f7-a292-4781-8059-874363c78af3.png) | [Publishing a flow](c-flo-Publishing_Flows_ace67655-6267-49a1-a1dd-2eb29ac6c585.md) | Publishing a flow will build and execute a flow, and make it the default version of the flow for your users. A snapshot is taken of the current version of the flow, with this version becoming the default version of the flow. The default URL for the flow is generated for this version of the flow, allowing you to access the flow in a browser as a web application, and share the flow with other users. |