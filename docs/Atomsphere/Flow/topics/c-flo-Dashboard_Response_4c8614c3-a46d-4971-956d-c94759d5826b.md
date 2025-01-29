# Service Log Response

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-4c8614c3-a46d-4971-956d-c94759d5826b"/>
</head>


The **Service Log Response** page provides detailed information on the service log event selected on the **Service Log** page.

## Opening the page

-   Click the **Response** link in the **Actions** column of the event that you wish to view information for on the [Connector Log](c-flo-Dashboard_Service_Log_878d14da-33a6-4728-8e5e-6dfe3364edee.md) page.


## Page Overview

![The Service Log Response page](../Images/img-flo-Dashboard_Insights_Service_Log_Response_7bff2b27-f51a-4f75-a2d9-05e43ecfd1ed.png)

The page is divided into two main sections, with information displayed depending on whether the API endpoint request was successful or failed.

-   **Response**: If the API endpoint request was successful, details and additional actions are displayed in this section. ![Step 1](../Images/img-flo-Step1_ed936f88-97de-4cc1-98ac-9f351a84a1bb.png)

    ![Response section](../Images/img-flo-Dashboard_Insights_Service_Log_Response_ok_f22217ad-0275-4f48-9fe7-98149b0b0264.png)

    -   **Occurred At**: The date and time when the event was logged.

    -   **Actions**: Click **Response** to open the **Response Content** form and view the JSON formatted metadata that was returned from the successful API endpoint request.

-   **Failure**: If the API endpoint request failed, details and additional actions are displayed in this section. ![Step 2](../Images/img-flo-Step2_c61b5577-5d61-4de6-9cfd-7eb5f4587ce0.png)

    ![Failure section](../Images/img-flo-Dashboard_Insights_Service_Log_Response_failure_8bbe52c4-bcbf-40c4-9a1f-3db34ecdf92a.png)

    -   **Occurred At**: The date and time when the event was logged.

    -   **Status Code**: The Rest API status code that was returned with the failure.

    -   **Message**: Displays the failure message from the metadata response; this should provide useful information about why the API endpoint request failed.

    -   **Actions**: Click **Failure** to open the **Failure Content** form and view the JSON formatted metadata that was returned from the failed API endpoint request.