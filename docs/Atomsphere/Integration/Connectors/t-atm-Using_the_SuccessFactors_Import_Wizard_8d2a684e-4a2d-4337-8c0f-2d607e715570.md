# Importing with the SuccessFactors Import Wizard

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-8d2a684e-4a2d-4337-8c0f-2d607e715570"/>
</head>


Using the **SuccessFactors Import Wizard**, you define the web service object you are integrating based on the specified action.
## About this task

The only way to create a new SuccessFactors – Partner operation is to import one from a SuccessFactors instance using the**SuccessFactors Import Wizard**. For example, each instance might have a unique set of entities, forms, and object types, each with custom fields. The goal of an import operation is to select an object definition from the instance and generate the input and output XML profiles for the object definition and the respective action and operation type. For more information on object types and allowed operations for an object, refer to the SFAPI Data Dictionary on the SuccessFactors Admin Tools web page for the specific instance.

## Procedure

1.  Create or open a SuccessFactors – Partner operation component.

2.  In the **Connector Action** field select either **Query** or a Write action \(**Create, Update, Upsert or Delete**\).

3.  Click the **Import** button.

    The **SuccessFactors Import Wizard** opens. On the wizard's first page, you can specify from which SuccessFactors instance object definitions to import.

4.  Select an Atom from the list.

    Importing is an active operation that must run on an Atom. For security purposes, the Import operation is disabled on Atom Clouds. You must use a standalone Atom or a Development Cloud if one is available for your account. If necessary, install a standalone Atom on a local computer for use when importing.

5.  Select a SuccessFactors – Partner connection component.

    The connection specifies the SuccessFactors instance from which to import object definitions. It is important to consider the instance the import is performing against because each can have a different set of forms, object types, and custom fields.

6.  Set the **Filter Entities by Module**.

    Choosing from this list filters the object definitions of the selected BizX module.

    1.  To see all object types, select **All**.

    2.  You can also select a specific BizX module from the list: **Employee Central**, **Goal Management**, **Performance Management**, **Platform**, or **Recruiting**.

7.  Set the **Filter Entities by Name**.

    Alternatively, you can perform a wildcard search for object types by specifying a search pattern in this field. Text in this field overrides any  **Filter Entities by Module** list selection. For example, selecting *erp* returns only PerPerson, PerPersonal, PerPhone, UserPhoto, and UserPhotoSource. If you leave this field blank, it returns the objects specified by the **Filter Entities by Module**.

8.  Click **Next**.

    The **Import Wizard** displays a list of object types for the Company ID specified in the selected connection component.

9.  Select an object type from the list to create the specified action and operation type for that object type.

    It creates the request and response XML profiles. It uses Field IDs as elements in the XML profile. Field labels, if they exist, are indicated in the **Comment** field displayed when clicking on a specific field ID element. For saved report object types, those with the `AdhocReport\_` prefix, the **Comment** field contains the descriptive name of the saved report.

10. Click **Next**.

11. Review the results and click **Finish**.

    An error appears for the selected object type if there is no support for the desired operation and action type. For more information, refer to the SFAPI Data Dictionary on the **SuccessFactors Admin Tools** page for the specified instance.