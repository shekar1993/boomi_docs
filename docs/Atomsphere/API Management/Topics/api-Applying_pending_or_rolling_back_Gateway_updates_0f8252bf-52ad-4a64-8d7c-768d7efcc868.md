# Applying pending or rolling back Gateway updates 

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-0f8252bf-52ad-4a64-8d7c-768d7efcc868"/>
</head>


Applying pending updates for Runtime Release or rolling back to the previously released version is done on the Gateway Version tab of the API Gateway.

## About this task

After the Runtime Release period and until the start of the platform release, you can manually apply pending API Gateway updates at any time. The Runtime Release allows you to select a time within that window that is convenient for you to apply pending features and fixes. The pending updates are applied per API Gateway. If you apply the pending updates during the Runtime Release window and then change your mind, you can remove the updates and roll back to the currently released version.


## Procedure

-   To apply the pending Gateway updates:

    1.  Go to **Configure Server** and click the **Gateways** tab.

    2.  Click on a Gateway Name from the list.

        The Gateway settings page opens.

    3.  Click the **Gateway Version** panel under **Deployment**.

        If a newer version of the Gateway is available, the version number appear in the **Pending Version** column. If you are authorized to apply the updates, you see the **Apply Pending Updates** button at the bottom of the list.

    4.  Click **Apply Pending Updates**.

        A confirmation dialog opens.

    5.  Click **OK**.

        A dialog containing information about the update process opens.

    6.  Click **OK**.

        Your Gateway will be updated shortly. The amount of time that it takes varies based on the activity on the Gateway. The table is updated with the latest version numbers and last update date. The pending version numbers and **Apply Pending Updates** button disappear.

-   To remove the updates and go back to the currently released version if you applied a pending version of the Gateway during the Runtime Release period:

    1.  Go to **Configure Server** \> **Authentication** and click the **Gateways** tab.

    2.  Click on a Gateway Name from the list.

        The Gateway settings page opens.

    3.  Click the **Gateway Version** panel.

        If you have applied a Runtime Release update and you are using a more recent version than the currently released version, version numbers appear in the **Roll Back Updates** column. If you are authorized to remove updates, you see the **Roll Back Updates** button at the bottom of the list.

    4.  Click **Roll Back Updates**.

        A confirmation dialog opens.

    5.  Click **OK**.

        A dialog containing information about the rollback process opens.

    6.  Click **OK**.

        After the updates are applied and the page is refreshed, the API Gateway that was rolled back will display a version that matches the previously available version. The **Select Rollback Versions** button will not be available when any or all rollbacks are applied, regardless of when the Gateway takes the updates.
        