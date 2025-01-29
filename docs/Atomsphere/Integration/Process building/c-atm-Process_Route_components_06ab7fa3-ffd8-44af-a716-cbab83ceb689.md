# Process Route components

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-5D92BFFD-67D4-4914-9FA9-20C39310CC69"/>
</head>


Process routes enable you to execute another process from within a process dynamically, based on a reference that is set at run time. The reference can be resolved based on some value, such as a document property, data profile, or extension value. You can define multiple conditions and values in the Process Route step allowing for many different execution paths. The Process Route component manages those execution paths.

:::note

Dynamic process routing and the Process Route component are part of the Advanced Workflow and are available only in the Professional and Enterprise Editions of Integration. For more information, contact your account representative.

:::

The subprocesses that a process route calls are *not* statically defined at build time. The subprocesses and the process route itself can all be changed and deployed independently of the parent process. You can even build a new subprocess, update the process route to call that subprocess, and deploy the new subprocess and the Process Route component without ever touching the parent process.

Processes that contain Process Route components:

-   Cannot be published to the process library

-   Cannot be made available to managed accounts as part of an integration pack

-   Cannot be deployed as a unit via the API \(the parent process and any subprocesses that the process route calls must be deployed independently\)


You can create Process route components in the same way that you create other types of components: from the **Build** page’s **Create New** button, **Start** tab, or **Component Explorer**; or from any process step that contains an icon for creating a new component ![+](../Images/main-ic-plus-sign-white-in-green-circle-16_4dc8c5f3-e893-4aef-ade2-0b7afe9476c1.jpg). You can deploy Process Route components on the **Deployments** page.

:::note

For Legacy deployment, go to the **Deploy** page and select **Process Routes** from the components list.

:::