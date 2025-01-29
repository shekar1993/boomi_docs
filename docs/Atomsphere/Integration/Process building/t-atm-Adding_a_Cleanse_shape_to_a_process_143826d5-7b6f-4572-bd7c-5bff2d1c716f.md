# Adding a Cleanse step to a process

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-143826d5-7b6f-4572-bd7c-5bff2d1c716f"/>
</head>


Add a **Cleanse** step to a process to validate document field values and either repair or reject the document before further processing.

## Procedure

1.  Drag a **Cleanse** step onto the process canvas.

    The Cleanse step Settings dialog opens.

2.  Enter a custom label.

3.  Select a profile type.

4.  Select a profile.

    You should have already configured the profile with the necessary restrictions.

5.  If you do not want to configure any repair options, skip to the last step.

6.  Expand the profile tree on the left.

    Elements preceded by a ![icon](../Images/main-ic-triangle-bullet-gray-16_aae2827b-d13c-4f24-8bf0-fc8022bc004e.jpg) gray arrow icon do not have any restrictions defined in the profile.

    Elements with restrictions in the profile are preceded by a ![icon](../Images/main-ic-stop-sign-red-16_c6414f98-2ee4-4a8b-b3b7-1277dc653581.jpg) red stop icon and are set to "No repair - Reject document" by default.

7.  Click an element to display its cleansing details on the right.

8.  Click the drop-down arrow next to a cleansing detail.

9.  If you want to repair the value, select the appropriate repair option from the drop-down and enter a default value or pad character, as appropriate.

10. Repeat the previous step for each cleansing detail belonging to the selected element.

    If you selected a repair option and default value or pad character for all of the element's cleansing details, the element and the details have a ![icon](../Images/main-ic-check-marks-green-blue-16_4699853a-ac5a-49d2-8d9d-eb1be24c2155.jpg) green check mark icon next to them.

    If an element has multiple repair options but only some are set, the element has a ![icon](../Images/main-ic-triangle-warning-yellow-16_a265c92a-c628-4a9a-a310-8f3d568c9a25.jpg) yellow triangle icon next to it. The details have a green check mark or red stop icon next to them, as appropriate.

    If an element has one or more repair options but none are set, the element and the details have a ![icon](../Images/main-ic-stop-sign-red-16_c6414f98-2ee4-4a8b-b3b7-1277dc653581.jpg) red stop icon next to them.

11. Repeat steps 7-9 for each element that you want to repair.

12. Click **OK**.

13. Connect the **Clean** and **Rejected** paths to the rest of the process.