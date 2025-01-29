# A worked example of using Integration Data Actions with Flow

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-f8255f8b-0e12-4a79-bf6d-307c56639e1d"/>
</head>

This topic provides an example of how Integration Flow Service Data Actions can be used to retrieve and work with data in Flow.

In this example, a flow is built in the flow canvas that allows users to save, query, load, and delete data to and from a simple database in Integration.

## Integration setup

Integration is set up as follows:

- A PostgreSQL [database](../../Integration/Connectors/r-atm-Database_connector_c4bd0269-5f4b-42d6-b4cf-08ddada63a94.md) table is set up to act as the target data system for the processes to interact with.

- A [Flow Service component](c-flo-AS_Flow_Services_Component_f757eeb1-028b-4fac-b866-1f518817a8a9.md) is set up, and a [Flow Service Data Action](c-flo-FSS_Data_Actions_76d3fc99-d10d-46a1-b1b9-d19571bec6b6.md) added to it.

- The JSON **Profile** for the Data Action consists of a single level 'Contact' Object.

- Processes are created and assigned for each of the different types of request, using a Flow Services Server listener process Start step. The Flow Service Operations are set as a 'Data Action' **Service Type**, with the relevant **Data Action Operation** selected \(Load, Save, Delete\).

- All elements are deployed to a Cloud Atom.

## Flow setup

Flow is set up as follows:

- A [Boomi Integration Service connector ](c-flo-Services_Boomi_Flow_Integration_7c2deca1-a3f3-4397-b9ba-ef58f27308b8.md) is installed and configured to connect to the Flow Service component in Integration.

- A 'Contact' type is automatically created from the Integration profile once the service is installed. This type and it's properties/binding are associated with values to allow data to be passed to and from Flow.
  
- A main 'Contact' Object value is created to store and work with data of this type.

A flow is built in the flow canvas to allow users to save, query, load, and delete data to and from the database:

![Example flow](../Images/img-flo_Integration_DA_tut_flow_76aabd19-4d08-40ba-a1d4-ca3327a688f1.png)

The flow is laid out in four main sections:

- [Saving data into Integration from Flow](c-flo-AS_DA_Saving_63da707b-f521-4644-81db-1c8c39a7911f.md) ![Step 1](../Images/img-flo-Step1_ed936f88-97de-4cc1-98ac-9f351a84a1bb.png)

- [Querying data from Integration in Flown](c-flo-AS_DA_Querying_e8edb564-4458-4db5-b313-75daee3084cd.md) ![Step 2](../Images/img-flo-Step2_c61b5577-5d61-4de6-9cfd-7eb5f4587ce0.png)

- [Loading data from Integration into Flow](c-flo-AS_DA_Load_081bdc6c-1481-4097-91f5-fec8aeb7c389.md) ![Step 3](../Images/img-flo-Step3_80c92964-4950-401a-b366-9af635fc20e7.png)

- [Deleting data from Integration using Flow ](c-flo-AS_DA_Delete_d3baf6e2-e355-4fff-a323-0582815c481f.md) ![Step 4](../Images/img-flo-Step4_a9fc9306-20bb-4f06-b6c7-616c9df561cb.png)

When the flow is run in a web browser, the user is presented with the landing page:

![Example flow](../Images/img-flo_Integration_DA_tut_flowweb_df8bcd87-b48a-49ff-a5fb-fe5297eafde3.png)
