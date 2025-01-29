# Platform API and Partner API

<head>
  <meta name="guidename" content="Release Notes"/>
  <meta name="context" content="GUID-b6db7ff4-aaf9-4f72-b24d-b92257256e11"/>
</head>

Platform API and Partner API features and fixes are not in the runtime release. 

**We added these features:**

- We have enhanced the Component APIs to create and update all the integration components with the required configuration values. (INT-6221)

  To learn more about this feature, see topic: [Component object](https://developer.boomi.com/api/platformapi#tag/Component)

- The Component validation engine now lets you validate component XML to ensure syntactic and semantic correctness. This enables you to create and update components via API or import scripts, also making sure version merge results are valid. (INT-6222)

  To learn more about this feature, see topic: [Component object](https://developer.boomi.com/api/platformapi#tag/Component)

- Enhanced the Event object by adding the following fields under `eventType user.notification`:
  - `topLevelProcessId`
  - `processId`
  - `processName` <br/>
  (INT-9475)

  :::note

  This feature was removed after the January platform release. It will be released in a future release.

  :::

- You can use the Worker object to get information about or stop a specified Atom Worker with the Get and Update operations. (RUN-5947, RUN-6082)

  To learn more about this feature, see the topic [Worker object](../../Integration/AtomSphere%20API/int-Worker_object.md).

**We fixed this issue:**

- The **daysOfMonth** field, under ProcessSchedules API now accepts the values, ranges of values, and both values and ranges separated by comma. (INT-1635)