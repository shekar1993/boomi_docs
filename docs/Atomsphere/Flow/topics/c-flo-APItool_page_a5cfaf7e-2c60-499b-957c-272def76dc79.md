# API tool page

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-a5cfaf7e-2c60-499b-957c-272def76dc79"/>
</head>


The **API tool** page allows you to make API requests to Boomi Flow endpoints from within the tooling.

## Opening the page

-   Select **API** from the left-hand menu.


## Page overview

The **API tool** page allows you to make API requests to Boomi Flow API endpoints from within the tooling. See [Making API requests using the API tool](c-flo-APItool_using_8a620c2a-753f-4eb9-9457-d67931336d2f.md).

![API tool page](../Images/img-flo-API_steps_e99eef39-66f2-46c4-9624-542a76a26da2.png)

-   The **API Address** field allows you to enter or select any of the Boomi Flow endpoints. ![Step 1](../Images/img-flo-Step1_ed936f88-97de-4cc1-98ac-9f351a84a1bb.png)

    -   Click on the field and a drop-down list of API endpoints is displayed; scroll and select from the list to populate the field with that endpoint.

    -   Begin typing a valid API endpoint into the field and it will automatically pre-fill and filter the field with all matching endpoints. For example, entering '/api/admin' will display all API endpoints matching your entry.

        ![API Address field](../Images/img-flo-API_field_82bd56e4-68fd-4b26-8894-0c26bf7a0fc0.png)

    -   A full list and description of the API endpoints can be found in the Boomi Flow developer [API reference documentation](https://manywho.github.io/docs-api/).

-   Once you have entered/selected an endpoint, you can make API requests to the endpoint using the **GET**, **POST**, **PUT** and **DELETE** buttons. ![Step 2](../Images/img-flo-Step2_c61b5577-5d61-4de6-9cfd-7eb5f4587ce0.png)

    -   **GET**: An HTTP GET request that retrieves data from the API.

    -   **POST**: An HTTP POST request that adds data via the API.

    -   **PUT**: An HTTP PUT request that replaces data via the API.

    -   **DELETE**: An HTTP PUT request that deletes data from the API.

-   Once you have executed a request, the JSON data response is shown in the **Response** pane. ![Step 3](../Images/img-flo-Step3_80c92964-4950-401a-b366-9af635fc20e7.png)

-   You can create API requests directly in the **Request** pane. ![Step 4](../Images/img-flo-Step4_a9fc9306-20bb-4f06-b6c7-616c9df561cb.png)

    For example, you can copy and paste the JSON data response from the **Response** pane into the **Request** pane and modify it. The API request can then be executed using the relevant **POST**, **PUT** or **DELETE** button.