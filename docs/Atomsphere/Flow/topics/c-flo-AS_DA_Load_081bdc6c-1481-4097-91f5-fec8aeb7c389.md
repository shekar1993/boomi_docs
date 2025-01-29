# Loading data from Integration into Flow

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-081bdc6c-1481-4097-91f5-fec8aeb7c389"/>
</head>


This section of the flow uses a [Database Load map element](c-flo-ME_Load_d47f5e01-a760-4aa2-8342-e843dd3abc48.md) to GET data from Integration.

![Example flow](../Images/img-flo_Integration_DA_tut_flowget_ff967831-4596-4464-8583-2a411902426d.png)

1. The 'Input GET UUID' page map element presents the user with an input field to enter the UUID of the contact whose details should be retrieved and displayed. The data entered into the input field is linked to and stored in a 'TestUUID' numeric value.

    ![Input data](../Images/img-flo_Integration_DA_tut_flowgetin_ffb0b2ae-18f1-4f0a-a933-dd1f49362e1a.png)

2. When the user has entered a UUID and clicks the Get Contact outcome, the flow progresses to the 'GET Single Contact by ID' Database Load map element, where a Data Action has been set with a filter to load the 'Contact' object value with data from the database using the UUID value entered by the user (the 'TestUUID' numeric value).

    ![Loading data](../Images/img-flo_Integration_DA_tut_flowgetDA_69050ef0-34a2-47a5-a674-4ff73b182a84.png)

3.  This request is passed into Integration by the service, initiating the Get Process assigned to the Flow Service Data Action. In this example, the process retrieves the filtered data record from a database, for example:

    ![Get Process](../Images/img-flo_Integration_DA_GP_2a28f756-e37e-4d31-806d-e528333a5a60.png)

4.  Now that the matching database record has been loaded into the 'Contact' object value, the flow proceeds to the 'Show Single Contact from GET' page map element that displays the data that was loaded from Integration.

    ![Loading data](../Images/img-flo_Integration_DA_tut_flowgetweb_5400794b-cb6e-45e4-83bf-322c9783cae6.png)