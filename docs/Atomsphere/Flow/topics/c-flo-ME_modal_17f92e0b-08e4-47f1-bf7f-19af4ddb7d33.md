# Modal map elements 

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-17f92e0b-08e4-47f1-bf7f-19af4ddb7d33"/>
</head>

You can use modal map elements to open content in a modal-type browser window.

## Overview 

Modal windows allow you to display content in a dialog box/popup window that is layered on top of the main flow page. The main page is still shown greyed out behind the modal window, but the flow user must interact with the modal window before they can progress through the flow.

For example, you could use a modal window to present a simple sign-up form to an email newsletter.

-   The map element **Title** is shown as the title at the top of the modal window.

-   To add a **Close** "X" button to the top-right of the modal window, add and configure an outcome as a **Back** type from the **What kind of action is this?** drop-down menu.


## Adding an outcome 

Outcomes can be added to a modal map element.

-   [Adding Outcomes to a map element](c-flo-Config_Outcomes_d524e869-12d3-4f1f-b671-84872998773f.md)


## Adding message actions 
Message actions can be added to a modal map element.

-   [Adding Message Actions to a map element](c-flo-Config_Message_Outcomes_81616add-ed70-45c7-a844-3e98f14844e2.md)


## Adding listeners to a map element 

Listeners can be added to a modal map element.

-   [Adding Listeners to a map element](c-flo-Config_Listeners_0ce8b82b-2175-4fb6-a047-427ac65d482b.md)


## Adding a navigation override 
Navigation overrides can be added to a modal map element.

-   [Configuring Navigation Override on a map element](c-flo-Config_Nav_Override_69de98e7-e100-4957-a865-2a2d76ffdb90.md)


## Adding a wait 
Set a period of time for the modal to ‘wait’ before the flow automatically continues along a specific outcome, if no action is taken on the modal during this period such as selecting another outcome.

For example, you could set up an approval process so that a modal proceeds automatically along an outcome if no approval action is taken in the configured wait time, such as escalating to an alternative approver.

To add a wait to a modal:

1.  Select **Add Wait** in the **Waits** section.

2.  Define the wait settings:

    **Wait Type**: Select the wait behaviour. To learn more about the different **Wait Type** settings, see [Wait map elements](flo-ME-Wait_24d8b1a1-2f6e-4a55-821a-26c6928b2432.md).

    **Outcome**: Select the outcome to proceed along once the wait is complete.

3.  Select **Add**.

4.  The wait is added to the modal.

    The wait starts when the modal is opened in a flow, and will refresh and proceed along the selected outcome unless a different outcome is triggered first. The wait will start every time that the flow modal is opened, in case the flow reuses the same modal map element later in the flow.


## Adding feedback to a map element 

Feedback can be added to a modal map element.

-   [Adding Feedback to a map element](c-flo-Config_Feedback_1240ae6b-af20-4eee-b5b4-5e172926c4a4.md)


## Adding comments to a map element 

Comments can be added to a modal map element.

-   [Adding Comments to a map element](c-flo-Config_Comments_647ce9d6-5c9e-4e27-aa29-1a69732957a5.md)