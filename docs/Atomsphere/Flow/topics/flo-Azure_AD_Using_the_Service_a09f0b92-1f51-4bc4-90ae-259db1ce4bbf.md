# Using the Azure AD (Legacy) connector for flow authentication


<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-a09f0b92-1f51-4bc4-90ae-259db1ce4bbf"/>
</head>

:::warning

We no longer support the legacy connectors and recommend that you upgrade to the newer supported version of these connectors.

:::

This worked example shows how the Azure AD (Legacy) connector can be used to apply authentication restrictions to a flow.


## Before you begin

Before using this worked example, ensure that you are familiar with the following concepts and procedures:

-   Installing and working with the Azure AD (Legacy) connector. See [Installing the Azure AD (Legacy) connector](flo-Azure_AD_Service_Installation_19e99baf-ca51-461f-81c9-9bef2de0e46a.md).

-   Creating new flows. See [Creating a new flow](c-flo-Flows_Creating_a_new_flow_6745110f-738e-4a54-bf5e-c565e4c412a9.md).

-   Setting up flows using map elements on the flow canvas, and running/publishing flows. See [ Building and publishing flows](c-flo-Building_and_Publishing_Flows_3dba9a15-316f-4134-9093-d4811ea7d14f.md).


This worked example also assumes that you have an understanding of and familiarity with using Microsoft Azure technology, particularly with regard to setting up and administering Microsoft Azure Active Directory (AD) users, groups and tenants.



## About this worked example

The Azure AD (Legacy) connector allows you to restrict access to a flow to only the Microsoft Azure AD users, groups, and tenants that you require.

For example, you can apply simple user restrictions so that only certain Microsoft Azure AD users can access and run a flow, or apply higher level tenant restrictions so that only users belonging to a specific Microsoft Azure AD tenant can access and run a flow.

This worked example covers the following example scenarios:

-   [Using the Azure AD (Legacy) connector to apply user authentication restrictions to a flow](flo-Azure_AD_Users_90e9122c-5985-48c7-ac83-11e00ac9c21b.md)

-   [Using the Azure AD (Legacy) connector to apply group authentication restrictions to a flow](flo-Azure_AD_Groups_6a941c3e-8370-46df-ad8c-f62a18d4af7e.md)

-   [Using the Azure AD (Legacy) connector to apply tenant authentication restrictions to a flow](flo-Azure_AD_Tenants_e9d1d535-babf-4434-811d-ff1da9f18112.md)