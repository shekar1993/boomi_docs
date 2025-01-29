# Installing the Azure AD (Legacy) connector



<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-19e99baf-ca51-461f-81c9-9bef2de0e46a"/>
</head>

:::warning

We no longer support the legacy connectors and recommend that you upgrade to the newer supported version of these connectors.

:::

To use the Azure AD (Legacy) connector you will first need to install the connector into your Flow tenant.

## Before you begin

-   Ensure that you have approved the connector application, so that the has been granted the access and permissions it requires to communicate effectively with your AD implementation.

    -   [Approving the Azure AD (Legacy) connector application](flo-Azure_AD_Granting_Permissions_3541e186-6459-4b7d-90b1-0a866d40e47d.md)

-   Ensure that you have created and identified the AD user account whose credentials you will use for configuring the connection. This does not have to be an Administrator level user account; a standard level user should have the required permissions for the connection, depending on your implementation. The **User Principal Name** and **Password** credentials are required as part of the installation process.

-   If you are going to use AD Tenant restrictions as part of your authentication restrictions, ensure that the relevant tenant has been created and configured in before you begin, as the **Tenant ID** or **Primary domain** credentials will be required during the installation process.


## Installing the Azure AD (Legacy) connector

1.  Select **Connectors** from the main left-hand menu.
2.  Click **New**.
3.  Select "Azure AD" from the **Connector Type** menu.
4.  Enter a name for the in the **Name** field.
5.  Click **Retrieve Connector Configuration Data**.
6.  Specify the required configuration values. See [ Azure AD (Legacy) connector configuration values](flo-Azure_AD_Service_Configuration_Values_4362ad7f-b2ad-43eb-b940-fed42f4fe90f.md) for details on the required values.
7.  Click **Install**.
8.  Click **Save Connector**.
9.  The is now installed, allowing you to authenticate your flows using your AD implementation.

    See [ Using the Azure AD (Legacy) connector for flow authentication](flo-Azure_AD_Using_the_Service_a09f0b92-1f51-4bc4-90ae-259db1ce4bbf.md) for a worked example of how you can use the to apply flow authentication restrictions.