# Flow

<head>
  <meta name="guidename" content="Release Notes"/>
  <meta name="context" content="GUID-833eba4d-faa6-4f05-935a-622643dc2f2f"/>
</head>

**We added these feature:**

- **Debugger Panel**
  - Dive into real-time execution insights on your flow canvas, with the ability to observe call stacks, state values, assertions, and root faults.
  - When you run your Flow in debug or debug step-through mode, you will see there's a debugger panel in your design time canvas. (FLOW-2952)

:::note

You will need to interact with the Flow in the runtime tab to view call stack items in the debugger panel in your design time tab.

:::

- We've included a button in the quick dashboard that allows you to view all launches and access more advanced filtering and sorting options. (FLOW-7383)

- We have made the following ehnacements to OpenAPI schema configuartions:
  - Improved the save/cancel experience to configure the Open API schema wizard.
  - Added support for OneOf request/responses.
  - Handle creation of schema caches when the schema URL changes. (FLOW-7384)

- We've added a comment box to the MCR publish screen which is visible while deploying a flow. (FLOW-7402)

- You will be navigated to the anomaly detection dashboard from the Developer Dashboard Summary screen on clicking **view all** on the Summary table. (FLOW-7407)

- The *All* option has been removed from the datetime filter dropdown on the Audit log page. (FLOW-7414)


**We fixed this issue:**

- Fixed an issue affecting designtime and runtime, allowing you to reposition the navigation bar so that it displays on the left.

:::note

This feature only works in the default runtime, which is mentioned in the Navigation editor.

:::
