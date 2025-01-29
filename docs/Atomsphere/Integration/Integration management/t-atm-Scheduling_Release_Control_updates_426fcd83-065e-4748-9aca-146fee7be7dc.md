# Scheduling Runtime Release updates 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-426fcd83-065e-4748-9aca-146fee7be7dc"/>
</head>


You can schedule when Runtime Release updates are applied on the **Runtime Release Scheduling** panel.

## Before you begin

You must have the Atom Management privilege to perform this task. If you have the Atom Management Read Access privilege, you cannot perform the task.

## About this task

If you are setting this schedule while a Runtime Release update is available, be careful to select a week, day, and time that falls before the proceeding Platform Release, which typically occurs on the second Saturday of each month. If you select a time that has already passed, your schedule will not be applied until the next Runtime Release. You can check the Atom & Connector Versions panel to see if pending updates are listed.

## Procedure

1.  Go to **Manage** \> **Atom Management**.

2.  Select the Atom, Molecule, or Atom Cloud, and click **Runtime Release Scheduling**.

    The Runtime Release Scheduling panel is displayed.

3.  Select a schedule type: **First Week** or **Last Week**.

    Runtime Release typically occurs at least two weeks immediately preceding a full release. The *first week* of Runtime Release begins on the day that updates are made available \(for example, the Saturday that comes 14 days before the release\). The *last week* of Runtime Release begins on the Saturday seven days before the release.

    :::note

    The exact day on which Runtime Release begins can vary from release to release.

    :::

4.  Select a day of the week, an hour, and a time zone.

    As you make your selections, they appear in a message that explains when Runtime Release updates will be applied to the Atom, Molecule, or Atom Cloud.

5.  Click **Save**.