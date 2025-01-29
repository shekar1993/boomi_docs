# Adding a dynamic process connector property

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-23baef07-0396-4446-bc5d-2349e10bbe31"/>
</head>


You can set a property value in the beginning of the process and then retrieve it later in a different part of the process. A dynamic process connector property is a single "on-the-fly" property that you create.

## Procedure

1.  Open a process and add a Set Properties step.

2.  Click the **Add Property** icon.

    The Choose Property dialog opens.

3.  Select **Dynamic Process Connector Property** from the Property Type list.

    The Connection and Field selection fields appear.

4.  Select an existing connection from the Connection field.

    The parameter value that you define for this property applies to the connection you select. If you do not see your desired connection component listed in the Connection field, you will need to exit and re-save your process.

5. **Optional:**  Select the field type that you wish to apply the dynamic process connector property.

    The Field list only supplies the fields that are found within the specific connection that you selected in **step 4**. The parameter value that you define for the dynamic process connector property overrides the value within the field that you select within this step.

6.  Click **OK**.

7.  Click **OK** to save the step.

8.  Click **Save** to save the process.


To learn about the parameter types you can set for your dynamic process connector property, visit [Parameter value types](r-atm-Parameter_Value_Types_2eaec44b-9772-4d67-9458-eceb191c1760.md).