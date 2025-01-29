# Azure AD (Legacy) configuration values

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-4362ad7f-b2ad-43eb-b940-fed42f4fe90f"/>
</head>

:::warning

We no longer support the legacy connectors and recommend that you upgrade to the newer supported version of these connectors.

:::

The following configuration values can be defined during installation of the .

## configuration values

|Name|Type|Required or optional?|Description|
|----|----|---------------------|-----------|
|Username|String| |Specify the **User Principal Name** of the user account that will connect the to your AD implementation.This can be found in the **User Principal Name** field on the **User Profile** screen. <br />The user account must not have multi-factor authentication \(MFA\) enabled, to allow API communication.|
|Password|Password| |Specify the **Password** for the user account that you have specified in the **Username** configuration value.|
|Tenant|String| |This optional value can used to define whether a specific tenant should also be used as part of the authentication. This means that flow applications can then be configured as single-tenant or multi-tenant, and guest users allowed to authenticate using Azure AD.To apply tenant restrictions, this value should be set to either the **Tenant ID** or the **Primary domain** \(such as ‘yoursite.onmicrosoft.com’ for example\) of the AD tenant that you wish to restrict access to. <br />   If this configuration value is not provided, the flow will have normal multi-tenant access, with no AD tenant authorization restrictions applied. <br />   If this configuration value is provided, only the sepecified users and guest users belonging to the specified AD tenant will be authenticated and allowed to access the flow. <br />See [Using the to apply tenant authentication restrictions to a flow](flo-Azure_AD_Tenants_e9d1d535-babf-4434-811d-ff1da9f18112.md). The **Tenant ID** can be found in the **Tenant ID** field in your AD Portal, typically in a format such as '9e3ba0c7-8ea7-442f-ab2b-e74d1c51e46'. See [How to find your Azure Active Directory tenant ID](https://docs.microsoft.com/en-us/azure/active-directory/fundamentals/active-directory-how-to-find-tenant) in the documentation for more information.|