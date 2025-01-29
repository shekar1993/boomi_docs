# Platform API and Partner API

<head>
  <meta name="guidename" content="Release Notes"/>
  <meta name="context" content="GUID-9b4827d4-d73b-4cd4-8d60-10c629cd22cc"/>
</head>

**We added these features:**

- You can now use the Worker object to Query the updated status for a specified Atom worker. (RUN-5946)

  To learn more about this feature, see the topic [Worker object](../../Integration/AtomSphere%20API/int-Worker_object.md).

- You can use the Component Diff object to compare two different versions of Boomi Integration components, such as processes and maps. The Component Diff object supports the GET operation. (INT-8100)

  To learn more about this feature, see the topic [Component Diff object](https://developer.boomi.com/api/platformapi#tag/ComponentDiffRequest).

**We fixed this issue:**

- Process Schedules API now returns 400 error code if a listener process is attempted to be scheduled. (RUN-652)