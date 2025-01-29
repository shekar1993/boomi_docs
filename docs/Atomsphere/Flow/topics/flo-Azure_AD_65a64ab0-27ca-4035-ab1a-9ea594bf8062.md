# 

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-65a64ab0-27ca-4035-ab1a-9ea594bf8062"/>
</head>

:::warning

We no longer support the legacy connectors and recommend that you upgrade to the newer supported version of these connectors.

:::

The allows you to integrate your flows with Active Directory \(AD\).

## Overview

This connector allows Flow to communicate with your Microsoft Azure AD identity and access management (IAM) implementation, and the users, groups and tenants you have configured.

This allows you to apply authentication restrictions to your flows, giving you control over which specific user, group, and tenant combinations in Microsoft Azure AD are able to sign in and access your flow applications.

For example, you may require that only certain Azure AD users belonging to a specific tenant should be able to access and run a flow.

-   Before you can install the , a Administrator must first approve the client application. This will grant the the required AD access and permissions.

    -   [Approving the application](flo-Azure_AD_Granting_Permissions_3541e186-6459-4b7d-90b1-0a866d40e47d.md)

-   After this has been performed, the connector can be installed.

    -   [Installing the application](flo-Azure_AD_Service_Installation_19e99baf-ca51-461f-81c9-9bef2de0e46a.md)

    -   [Configuration values](flo-Azure_AD_Service_Configuration_Values_4362ad7f-b2ad-43eb-b940-fed42f4fe90f.md)

-   Once installed, the connector can then be used to apply authentication restrictions to your flows.

    -   [Using the for flow authentication](flo-Azure_AD_Using_the_Service_a09f0b92-1f51-4bc4-90ae-259db1ce4bbf.md)


## Connector URL


The Azure AD (Legacy) connector endpoint url is:



-   https://services.manywho.com/api/azure/1

## Features

The Azure AD (Legacy) connector forms part of the following features within Flow:



-   **Identity:** This feature allows you to use an existing user directory as an identity system within .


## Known limitations

-   Restrictions using this are typically applied with the 'Create restrictions for specific users and groups of users' flow **Access** option. If you select the 'Any user that can login with the selected identity connector can run this flow' flow **Access** option, unless you are using the **Tenant** configuration value to restrict access to a specific tenant, this will allow anybody with a user account to sign into and run the flow, i.e. not just users within your implementation.

-   The user account set up to connect to the must not have multi-factor authentication \(MFA\) enabled, to allow API communication.

-   There is a limit of 999 users and groups returned by the .