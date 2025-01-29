# Restarting listeners 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-f4df8651-7e77-4d0a-a32f-af40bb67a79f"/>
</head>


You can restart all or selected listeners.

## Before you begin

You must have the Atom Management privilege to perform this task. If you have the Atom Management Read Access privilege, you cannot perform the task.

## Procedure


1.  Go to **Manage** \> **Atom Management**.

2.  Select the Atom, Molecule, or Atom Cloud from the list on the left.

3.  Select the **Listeners** panel.

    The deployed listeners to the selected Atom, Molecule, or Atom Cloud appear.

4. **Optional:** To filter the list, do one of the following:

    -   Click ![Filter](../Images/main-ic-filter-gray_b6006570-dfb3-4bfc-8e9a-cf62c21b223a.jpg) and select a preset filter — **Listening**, **Paused**, or **Errored**.
    -   In the **Filter listeners by name** field, type all or part of a listener name.
5. **Optional:**  To select specific listeners, select the check box for each listener that you want to restart.

    You can simultaneously toggle the check boxes for all listeners of a given connector type by selecting the check box for the connector type grouping — for example, Web Services Server.

6.  Click **Restart** above the list, and in the drop-down list select one of the following:

    -   **All Listeners**
    -   **Selected Listeners** \(if you selected listeners in step 5\)
    **Note:** As an alternative, you can click the ![Gear or Action](../Images/main-ic-gear-gray_54d864eb-b5de-4ee6-9b31-975dae0a5762.jpg) icon next to a listener and select **Restart**.

    A confirmation dialog opens.

7.  Click **OK**.

    A message appears informing you the listeners have been restarted. However, the list of listeners does not refresh automatically.

    **Note:** After updating extensions, all listeners restart.

    **Note:** If a listener is paused when you request the restart, that listener remains paused after restarting.

8. **Optional:** To refresh the list of listeners, click **![Refresh](../Images/main-bt-arrows-gray-curved-refresh_3793feaf-5057-4b6a-9bd8-c830f4292d40.jpg)**.