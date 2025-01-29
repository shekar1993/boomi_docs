# Process canvas

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-7092acce-da3a-4bf1-9130-ac2b74eebd22"/>
</head>


Processes contain a series of steps, represented by steps, that determine how data is run within the system. Each step performs a certain action on the data. You create a process by dragging steps from the steps palette onto the process canvas, configuring the steps, and connecting them in a specific order to control how the data flows through the process.

The steps palette is divided into three groups: Execute, Logic, and Connect. You can search for steps across these groups by typing all or part of a step name in the search box at the top of the palette. The results appear in a search results tab that temporarily overlays the Execute, Logic, and Connect tabs.

Each time you place a step on the canvas, a dialog appears in which you can configure the step. The controls in the dialog vary, depending on the type of step you are using. You might need to choose a component, set parameters, set properties, or change other settings particular to the step.

After you close the configuration dialog, the step appears on the canvas. If the step is missing a required configuration, an icon ![!](../Images/main-ic-triangle-warning-yellow-16_a265c92a-c628-4a9a-a310-8f3d568c9a25.jpg) and the word “Configure” appear below the step. You can reopen the configuration dialog at any time to change the settings.

:::note

To add an annotation to the process canvas, click the **Add Note** link above the process canvas. You can type a note, save it, then drag and drop it to the desired location on the process canvas. To edit or delete the note, pause on its icon.

:::

While setting up a process you can also connect, disconnect, arrange, copy, paste, move, and remove steps.

Processes can contain a maximum of 250 steps and notes. If a process contains 100 steps and notes, each time that you open the process, drag and drop a new step onto the process canvas, add a note to the process, or paste steps into the process, you receive a warning that you are approaching the limit.

When a process contains 250 steps and notes, you cannot add any more steps or notes to it. If pasting a number of copied steps or notes into the process would cause you to exceed the limit, you receive a warning and you are not able to paste the steps or notes into the process.

## Arranging steps
As you build a process on the process canvas, to keep the process as easy to understand and maintain as possible, you can manually move its steps by dragging and dropping them. Manually moving steps can be inefficient, though, because of the way they are connected. In many cases the preferred alternative to manually moving steps is one-click, automatic arrangement. When automatic arrangement is complete, the steps, branches, and routes on the process canvas are neatly aligned.

Before you request automatic arrangement, you should save your process. That way if you are dissatisfied with the new arrangement, you can easily revert the process to the last saved revision.

:::note

When steps are automatically arranged, notes and unconnected steps are moved to the lower left of the process canvas.

:::

## Copying and pasting steps

Process steps can be copied and pasted within the same process or into a different process. You can copy one step at a time or you can select multiple steps to copy and paste. When you copy one or more process steps, the following rules apply:

-   Copies the step’s configuration, set in its **Properties** dialog.

-   If a step references components, it copies the *references* to the components but does not copy the components themselves. Therefore, if the original step and the copied step reference the same component and if someone edits the component, it affects the original step, the copied step, and any other process steps that use that component.

-   When you copy and paste a step, the copied step’s configuration \(but not the referenced component\) is independent from the original step. It looks the same as the original step and it has the same configuration, but if you change the copied step’s configuration, the original step’s configuration does not change.

-   If you copy multiple steps connected by lines and arrows, it maintains the connecting lines between the copied steps. However, if there are connecting lines to other steps you did not copy, those connecting lines remain, but they do not connect to the uncopied steps.

-   If you copy multiple steps and there is a note within the selection set, it also copies the note.

-   You cannot copy Start steps individually. In addition, if you copy multiple steps, including a Start step, you cannot paste the Start step because a process can have one Start step only.

-   You can paste the step\(s\) that you copy until you close the browser window, switch out of to another browser page, or until you select another step\(s\) to copy.


## Adding components to create steps

You can add components, such as Trading Partners, Maps, or Connections, to your process by clicking on the plus sign that appears when you hover over the arrow at the end of a step ![Plus sign icon](../Images/img-int-plus-sign-in-shape_b46cfaa2-ffb5-468d-9dd0-37198fd3e440.jpg). When you click it, the list of available steps appear from which you can quickly search by name and then select one. Additionally, you are also provided with intelligent recommendations on the next steps you can add to your process, based on the context of previous steps used. The new step is added and automatically connected to the previous step. After adding the new step and it connects to the previous one, a green arrow ![Green arrow icon](../Images/img-build-process-green-arrow_f6a156ab-2ad3-42cf-bd50-d7452b657c98.jpg) shows the successful connection.

You can also still drag components, from the *Component Explorer* onto the process canvas with the component settings preselected in the related step. Then, you can configure them further and connect them to a process.

Additionally, you can drag items from the *Component Explorer* into any field in a step that allows that type of component as an input. For example, you can drag a Map component into the **Map** field on the Map step.

## Configuring steps

You can edit process steps either when you first add them to a process or later. Upon first dragging a step to the process canvas, the configuration dialog opens by default.

A single click on a step opens its configuration dialog. While working within the configuration dialog, pressing the **Esc** key closes the dialog without saving your changes.

## Step labels

Most steps have a default label that appears below its icon on the process canvas. The default label describes the step type. Some examples are the *Set Properties*, *Message*, and *Branch* steps. Other steps have a default label that changes based on how you configure the step. For example, when you add a *Connector* step you have to select the type of connector that you want to use. After selecting a connector, its name appears as the Connector step label on the process canvas. A few steps do not have a default label. Some examples are the *Map* and *Decision* steps.

All steps have an optional Label field. You can type a name in this field to make it easier for you to identify the step on the process canvas. Custom labels are especially useful when you have multiple steps of the same type within the same process. The custom label can contain special characters and there is no limit to its length.

User-defined step labels appear in several places:

-   On the process canvas below the step’s icon — The custom label that you add takes the place of the default or configured label on the step and it appears on the steps that do not have a label by default. For example, if you add a custom label to the Stop or Program Command step, the label appears in addition to the configured label.

-   On the **Build** page when testing a process — The custom label appears on the process canvas in Test mode and, when you select the step, in the logs in the Test Results window.

-   On the **Process Reporting** page — The custom label appears in the **View Process State** dialog and in the **Show Log** dialog.