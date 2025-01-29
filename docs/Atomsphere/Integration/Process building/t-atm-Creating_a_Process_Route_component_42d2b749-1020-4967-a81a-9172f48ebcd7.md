# Creating a Process Route component

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-42d2b749-1020-4967-a81a-9172f48ebcd7"/>
</head>


You can create Process route components in the same way that you create other types of components: from the **Build** page’s **Create New** button, or **Component Explorer**; or from any process step that contains an icon for creating a new component.

## Procedure

1.  On the **Build** page, do one of the following:

    -   Click **Create New** and select **Process Route** from the list.

    -   In the Component Explorer, click the blue arrow icon next to the desired folder, select **New Component**, select **Process Route**, type a name, and click **Create**.

    The Process Route component configuration dialog opens.

2.  Type a name for the Process Route component, if you have not already.

    The maximum length for a component name is 255 characters.

3.  On the **General** tab:

    1.  Select or clear the **Passthrough** check box to identify the type of subprocess being called.

        If the you select the check box, the documents pass through to a subprocess for further processing. 

    2.  Click **Add a Return Path** to add one or more unique return paths.

        The **Path Name** field populates with a default path name \(Untitled Path\). If you specify your own path name, validation of the name occurs as you type.

        The order in which you define return paths in this component does not affect the order in which they run. The Process Route step that calls the process route controls the return path run sequence.

        If you define a return path and you expect the subprocess being called to return data, you must also:

        -   Use the **Return Path Mapping** section of the **Process Routing** tab to map the return path to a Return Documents step in the subprocess being called.

        -   Ensure the subprocess being called is configured to return data.

        If you do not define any return paths, subprocesses called by this component are not expected to return data.

        Whether or not you define any return paths, the process route establishes a Default path. If a document does not match any of the specified route keys, it routes down the default path. You can decide what the next step in the default path \(such as a Notify step\), or leave it undefined. The Default path is always run last.

4.  On the**Process Routing** tab, click **Keys** ![icon](../Images/main-ic-plus-sign-white-in-gray-circle-16_00e24f81-d327-49fe-9310-9f999a92cb52.jpg) to define one or more unique route keys used at run time as the basis for determining which subprocess to call.

    The **Route Key** field populates with a default key name \(Untitled Key\). If you specify your own key name, validation of the name occurs as you type.

    Ensure that the keys you specify correspond to the route parameters you defined in a Process Route step. Each key must be unique within the Process Route component.

5.  Click **Save and Close**.