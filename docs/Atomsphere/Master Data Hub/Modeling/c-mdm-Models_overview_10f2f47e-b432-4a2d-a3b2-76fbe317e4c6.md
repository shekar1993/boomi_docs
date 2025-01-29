# Managing Models 

<head>
  <meta name="guidename" content="DataHub"/>
  <meta name="context" content="GUID-10f2f47e-b432-4a2d-a3b2-76fbe317e4c6"/>
</head>


The models in your Boomi DataHub account are listed in the Models page. To open the Models page, click Models in the Boomi DataHub menu.

The Models page lets you create or modify a model.

Boomi DataHub lets you publish multiple versions of a model, but only one version can be deployed at any given time. A version number is automatically assigned to each successive published version of a model.

When you create a model, or a new version of an existing model, you have the option to save it as a draft or publish it. You can save it as a draft and publish it later.

While a draft version of a previously published model exists, the most recently published version remains viewable but it cannot be modified. You can remove a draft version at any time.

You can make copies of individual models. The destination account for a copy can either be your account or any other account to which you have access.

You can configure model fields so that field values with sensitive data are masked. You must have one of the following user permissions to view masked data:

- **MDM - Privileged Data Steward** role
- **MDM - Administrator** role
- **MDM - Reveal Masked Data** privilege
- **MDM - Data Steward** role (or **MDM - Stewardship** privilege) and the **Reveal Masked Data** Hub entitlement (available with the Advanced Security feature)


### Sharing Models

If you are an administrator of a Boomi partner account and you want to share models with customer accounts in account groups for their use as templates, use the Account Groups tab in the Settings page in the Integration service. When as a user of a customer account you create a model as a copy of a shared model, the source for the copy is that model’s most recently published version.