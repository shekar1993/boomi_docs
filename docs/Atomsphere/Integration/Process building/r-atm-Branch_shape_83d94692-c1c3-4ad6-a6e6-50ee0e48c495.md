# Branch step

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-B4111E0E-D8C2-42EA-A71E-1E0C34AA298C"/>
</head>

The Branch step is used when you have several actions that you want to execute in sequence. Each branch consists of a separate path that is executed in sequential order. A branch's path is executed to completion before executing the next branch.

![Branch icon](../Images/step-ic-branch-32_9bdc8405-5189-42cb-b3fb-53c0205847d0.jpg)

When you configure a Branch step the Branch Properties dialog opens. It contains the following controls:

- **Display Name** - User-defined name to describe the step. If you do not specify a label, “Branch” appears on the step.

- **Number of Branches** - When you add a Branch step you select how many branches you need. Each Branch step can have up to 25 paths. You can add or remove branches from a Branch step that is already in a process. If you remove branches that are connected to steps, the branches are removed from the process but the steps are not removed.

  If an invalid number is entered into this field, the value defaults to 2 when you click **OK**.

:::tip

The order of the branch paths is indicated by a number next to the path on the canvas. You cannot change the number of the path, but you can click and drag the paths to move them on the canvas. This is especially useful if you are adding a Branch step to the middle of an existing process.

:::
