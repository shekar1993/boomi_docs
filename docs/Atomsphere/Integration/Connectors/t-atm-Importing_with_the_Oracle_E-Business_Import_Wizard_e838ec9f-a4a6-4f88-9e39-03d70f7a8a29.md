# Importing with the Oracle E-Business Import Wizard 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-e838ec9f-a4a6-4f88-9e39-03d70f7a8a29"/>
</head>


By using the Oracle E-Business Import Wizard, you define the web service object you are integrating based on the action you specified.

## Procedure


1.  Create or open an Oracle E-Business Operation component.

2.  In the **Connector Action** field select either **Execute** or **Query**.

3.  Click the **Import** button.

    The **Oracle E-Business Import Wizard** opens. The first page of the wizard is used to select a PL/SQL procedure for the Execute action or a table for the Query action.

4.  Select an Atom from the list.

5.  Select an Oracle E-Business Connection component.

6.  If you are using the Execute action, select a module from the **Module** list. You can also select **Any Module**.

    This list represents all of the possible Oracle E-Business modules that exist. It is not restricted to the modules that are actually installed.

7.  **Optional:** If you use the  Execute action and want to limit the list of procedures, you can enter a procedure name or part of a procedure name in the **Name Filter** field. You can also search by package and procedure name.

    The search filter is case-sensitive and all names are in upper case. For example, in the HZ - Trading Community Architecture module, you could enter a Name Filter of `CUST_ACCOUNT` to list all the procedures containing *CUST\_ACCOUNT* in the procedure name. To add a package name to the search, you must send the Module field to **Any Module**. The search term syntax is `<PACKAGE_NAME>.<PROCEDURE_NAME>`. For example, `HR_EMPLOYEE_API.CREATE_EMPLOYEE` or `MO_GLOBAL.INIT`.

8.  If you use the Query action, select a database schema from the **Schema** list. You can also select **Any Schema**.

9. **Optional:** If you use the Query action and you want to limit the number of tables for a schema, enter an Oracle table or view in the **Name Filter** field.

10. Click **Next**.

    The Import Wizard displays a list of PL/SQL procedures or tables \(object types\).

11. Select an object type from the list to create the specified action and operation type for that object type.

    The PL/SQL object types are composed of two values: Package Name and Procedure Name. In some cases, there can be duplicate object types. They represent "overloaded" procedures where there is more than one procedure with that name in the package, but in which one or more of the parameters in these procedures is different. For example, a package may contain two `Get_CUSTOMER` procedures, one of which uses the Consumer Type customer record and the other uses the Organization Type customer record. You can find specific information about each of the overloaded procedures in the Oracle Integration Repository.

    It creates the request and response XML profiles.

12. Click **Next**.

13. Review the results and click **Finish**.

## Next steps

If you are using the Query action, you can select fields, add filters, and apply sorting.