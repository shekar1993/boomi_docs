# Adding a custom scripting step with an inline script

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-019d4e9a-c7c3-4bf4-895f-5b479adcd053"/>
</head>


To add a custom scripting step with an inline script to a Data Process step, select the **Process Type** Custom Scripting and the **Script Source** Use Inline Script.

## Procedure

1.  Add a Data Process step to your process or edit an existing Data Process step.

    The Data Process step dialog opens.

2.  Click the ![+](../Images/main-ic-plus-sign-white-in-green-circle-16_4dc8c5f3-e893-4aef-ade2-0b7afe9476c1.jpg) **Add Step** icon.

3.  In the **Process Type** list, select Custom Scripting.

4.  For **Script Source**, select Use Inline Script.

5.  In the **Language** list, select JavaScript or a specific version of Groovy.

    A default code block for the selected language is displayed in the edit window.

    ![](../Images/build-ps-data-process-properties-inline-script.jpg)

6.  Click **Edit** to launch the script editor.

    The Edit Script dialog opens. The edit window is similar to a full-function source code editor with features including line numbers, indentation, and syntax highlighting. For JavaScript scripts, the editor also supports syntax validation.

    You can customize the code editor by clicking **![](../Images/main-ic-gear-black-16_cdde83e4-a176-436a-86ca-1fe4937e3085.jpg) Actions**.

    :::note

    If you prefer to type your script in a plain text box, click ![](../Images/main-bt-code-editor-toggle_2cfccfca-e517-4cba-915a-ec80d8167198.jpg) to toggle between the Code Editor and the Plain Text Editor.

    :::

7.  Edit the script as necessary and click **OK** when you are finished.

8.  To save the inline script as a Scripting component for reuse in other processes, do the following:

    1.  Click **Create a Component**.

        The Create a Scripting Component dialog opens.

    2.  Type a name for the Scripting component and select a folder in which to store it.

    3.  If you want to use the new component as the source for this custom scripting step, select **Replace Inline Script**.

    4.  Click **Create**.

        The script source changes to **Use Scripting Component**, and the name of the new component appears in the **Process Script** field.

9.  When you are finished, click **OK** to save the Data Process step.