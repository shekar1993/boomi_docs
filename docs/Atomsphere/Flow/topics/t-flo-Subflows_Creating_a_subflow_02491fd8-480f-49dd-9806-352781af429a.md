# Adding and using subflows 

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-02491fd8-480f-49dd-9806-352781af429a"/>
</head>


You can add subflows using the **Subflow** and **Return** map elements.

## Step 1: Add and publish the subflow 

1.  Open or create the flow that you want to use as a subflow.
2.  On the flow canvas, insert and link a **Return** map element ![Return](../Images/img-flo-Icon_Element_Return_d512dae6-2126-4d30-bd7b-99fd3af6e08e.png) at the point that you wish the subflow to rejoin the parent flow.
3.  Run/publish the subflow so that it becomes available for selection as a subflow.

## Step 2: Add and configure the parent flow 

1.  Open or create the parent flow that you want to link to the subflow.
2.  On the flow canvas, insert a **Subflow** map element ![Subflow](../Images/img-flo-Icon_Element_Subflow_34380867-6e9d-4ff7-8e4f-a5a66b16d727.png) at the point that you wish the subflow to rejoin the parent flow.

    -   **Name**: Enter a name for the **Subflow** map element.

    -   **Subflow Type**: Select how you wish to link to the subflow:

        -   **Predefined**: Select the subflow from the **Select a flow to run as a subflow** list of published subflows. For example, select the subflow created in step 1.

        -   **Value**: Select/create a string value that has the **A default applied to this Value** value set to the Flow ID of the published flow that you want to use as a subflow. Note that only public values, and matching values used in both the parent flow and subflow are automatically passed with this option. Specific Input/Output values cannot be selected.

    -   **Auto match all value arguments**: If you are passing values between the parent flow and the subflow, select this checkbox to automatically add and pass values that are present in both flows.

    -   **Input Values**: Select any values that you want to pass into the subflow.

    -   **Output Values**: Select any values that you want to return into the parent flow.

    -   **Input Output Values**: Select any values that you want to both pass and return between the parent flow and the subflow. See [Passing values using subflows](c-flo-Subflows_passing-values_8a94d936-7c7c-4e50-8706-6652dcf1e0c9.md).

    -   **Public**: Any values defined as 'Public' access type that are automatically passed between a parent flow and subflow are displayed here.
3.  Click **Save** to save the parent flow.
4.  Link the **Subflow** map element on the flow canvas as required.
5.  Run or publish the flow as required. See [Publishing and subflows](c-flo-Subflows_Technical_Overview_d549a097-2903-411d-b514-a7ee38731a69.md#section_dtz_qpb_cjb).