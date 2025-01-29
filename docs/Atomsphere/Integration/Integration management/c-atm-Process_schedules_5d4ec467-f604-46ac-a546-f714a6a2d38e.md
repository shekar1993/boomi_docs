# Process schedules

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-5d4ec467-f604-46ac-a546-f714a6a2d38e"/>
</head>

After building and deploying a process, you can schedule it to run automatically.

:::note

Listener processes cannot be scheduled because they are set to listen for documents in real-time.

:::

Process execution schedules are standardized schedules that control when a process should run. You can add multiple schedules to a process for different execution requirements.

A process must be deployed to an Atom, Molecule, or Atom Cloud to run on a schedule. A schedule starts as soon as you deploy the process and add the schedule. If you deploy the same process to multiple Atoms, Molecules, or Atom Clouds, you must add a separate schedule for the process on each one of them.

When setting your process execution schedule, set the schedule to run at minute intervals that are divisible by 60 — either 1, 2, 3, 4, 5, 6, 10, 12, 15, 20, or 30. This practice guarantees your process executes at consistent intervals from the top of the hour. If you wish to use an interval that is *not* divisible by 60, use the Advanced scheduling option in the Scheduling dialog.

It is important to understand that the local system time of the Atom, Molecule, or Atom Cloud determines when the process schedule is executed. The schedule executes according to the system time *of the machine on which the Atom, Molecule, or Atom Cloud is installed*, not of the machine from which you set the schedule through Atom Management. If the Atom, Molecule, or Atom Cloud is installed in one time zone and the machine from which you set schedules is in a different one, you need to be aware of that difference in time zones. It is even possible for a schedule to be interpreted as falling on a different date than you intended, if the difference between the two times spans midnight. For help with converting between different time zones, use a tool such as [World Time Buddy](https://www.worldtimebuddy.com/).

You can add and edit process schedules in Atom Management if you have the Scheduling and Atom Management privileges. To schedule using environments, you need the Environment Management privilege. After you add, edit, or delete a process schedule you do *not* have to redeploy the process for the scheduling changes to take effect.

You can also set a retry schedule, which automatically reruns any documents that failed during the scheduled process execution.

After you set a process schedule, the calendar icon ![Calendar](../Images/main-ic-calendar-16_734e3562-27c0-4754-89e2-cbfcd2960959.jpg) appears next to scheduled process executions on the Process Reporting page.

## Additional resources

- [Adding a schedule to a process](./t-atm-Adding_a_schedule_to_a_process_543bebca-e162-4c1f-aea1-920b964031ab.md)
- [Editing a process' schedule](./t-atm-Editing_a_process_schedule_9bbb6086-8ac4-46c7-9d9d-1706b5302d9c.md)
