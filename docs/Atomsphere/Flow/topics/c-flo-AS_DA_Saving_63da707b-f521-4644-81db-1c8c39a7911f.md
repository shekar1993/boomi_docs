# Saving data into Integration from Flow

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-63da707b-f521-4644-81db-1c8c39a7911f"/>
</head>


This section of the flow uses a [Database Save map element](c-flo-ME_Save_bffa5a42-8d81-4dd9-9528-1eb26ae04d4c.md) to save data into Integration.

![Example flow](../Images/img-flo_Integration_DA_tut_flowsave_8596a0f0-70ac-48de-a539-bc97b70f35bb.png)

1.  The 'Create Single Contact' page map element presents the user with a series of input fields for entering details of a new contact. The data entered into each input field is linked to and stored in the relevant property of the main 'Contact' object value.

    ![Input data](../Images/img-flo_Integration_DA_tut_flowsavein_94d3c511-046d-474b-a1d0-96763e87f16f.png)

2.  When the user clicks the **Save** outcome, the flow progresses to the 'SAVE Single Contact' Database Save map element, where a Data Action has been set up to save the passed/stored 'Contact' object value data of the 'Contact' type.

    ![Saving data](../Images/img-flo_Integration_DA_tut_flowsaveval_6c67eff7-8509-44bd-b975-ec8bcd0b0b2e.png)

3.  This request is passed into Integration by the service, initiating the **Save Process** assigned to the Flow Service Data Action. In this example, the process saves the data into a database, for example:

    ![Save Process](../Images/img-flo_Integration_DA_SP_00243e5b-a1c6-40a6-a271-410dfd190d44.png)