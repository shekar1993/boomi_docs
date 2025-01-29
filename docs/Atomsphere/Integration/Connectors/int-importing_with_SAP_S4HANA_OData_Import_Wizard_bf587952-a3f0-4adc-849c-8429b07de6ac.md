# Importing with the SAP S/4HANA OData \(Tech Preview\) Import Wizard

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-bf587952-a3f0-4adc-849c-8429b07de6ac"/>
</head>


Use the SAP S/4HANA OData Import Wizard to select the required the OData API to integrate and generate the request and/or response profile.

In the SAP S/4HANA OData \(Tech Preview\) connector, open the **Import Wizard** to select the object \(specific business entity/objects\) to integrate. The wizard uses the connector browser and imports the request and response profiles for the selected action.

1.  In the SAP S/4HANA OData \(Tech Preview\) connector - **General** tab, select the **Connection** and **Action**. The supported actions are:

    1.  CREATE

    2.  GET

    3.  QUERY

    4.  UPDATE/PATCH/MERGE

    5.  DELETE

2.  In the **Operation** field, click the **+ Add** icon to configure the operation component.

3.  Click the **Import** button.

4.  Select the required **Atom\*** and **Connection\***.

5.  Specify the OData API in the **SAP S/4HANA Service Catalog** field or **Custom SAP S/4 OData API** field as required.

    If the API is not listed in the Service Catalog drop down but available in the SAP API Business Hub, then you can type the API in the **Custom SAP S/4 OData API** field.

6.  Optional: Based on the Action \(CREATE, GET, QUERY\) selected in step 1, the options will vary. Complete one of the following step as required.

    1.  CREATE — Specify the preference for child object creation.

    2.  GET — Specify the maximum entity relationship level for including the child objects in the profile, in case of deep entity retrieval.

    3.  QUERY — Select the maximum entity relationship level for including the child objects in profile, during deep query operation. You can use the **Include recursive navigations** setting to control the inclusion of recursive navigations that loops back to parent object types.

7.  \(Optional\): In the **Filter** field, enter the filter text with wildcard characters \(\* or ?\) to reduce the number of returned objects.

8.  Click the **Next** button.

9.  Select the object type and click the **Next** button.

10. Review the Object Type selected, the request and/or response profiles created, and click the **Finish** button. Once the profile import and the connector operation setup is complete, the imported JSON profiles will be populated in the **Options** tab. For more information about the Import Wizard options, see the [SAP S/4HANA OData connector - operation](int-SAP_S4HANA_OData_operation_ed5c16d9-4551-424a-ae93-1e7efc8062bf.md#section_jqk_gtr_zrb.mdx)


After successful import action, configure the settings on the **Options** tab.