# Process route deployment considerations

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-7efb5172-ceaa-470f-a845-55babc4d3d8d"/>
</head>


Process Route components and the subprocesses that they call are not dependent components of the parent process that calls them. The parent process, the Process Route component, and all of the subprocesses must be deployed independently. This independent deployment can be both a benefit and a challenge.

Independent deployment enables you to create a new subprocess or modify an existing subprocess without having to redeploy the parent process or any other subprocesses. Narrowing the deployment process to just the Process Route component and the affected subprocess can have a positive impact on time to production. Change management procedures typically require testing anything that is modified. Limiting the modifications to a subprocess, or even the Process Route component and a new subprocess, can significantly reduce the amount of testing that is required.

However, independent deployment also means that you must remember to deploy the Process Route component and any affected subprocesses each time they are updated. Deploying the parent process *does not* deploy the process route and its subprocesses. And because there is no dependency between the parent process and the subprocesses, it is possible to have different versions of the same component being used in different processes. Any changes that you make to common components must be backwards compatible. Be sure to coordinate the deployments of the parent process, the Process Route component, the subprocesses, and any dependent components.

## Common deployment scenarios 

-   If you need to modify a subprocess that is called by a process route, you need to redeploy only that subprocess. You do not need to modify or redeploy the parent process or the Process Route component. However, any changes that you make to the subprocess must be compatible with the overall design of the parent process.

-   If you need to add a new route and subprocess to the process route, you need to

    -   create and deploy the new subprocess

    -   update and redeploy the Process Route component

    You do not need to modify or redeploy the parent process.

-   If you want to change common logic in the parent process \(such as error handling\), you need to modify and redeploy only the parent process. You do not need to modify or redeploy the subprocesses or the Process Route component. However, any changes that you make to the parent process must be compatible with the design of the subprocesses.