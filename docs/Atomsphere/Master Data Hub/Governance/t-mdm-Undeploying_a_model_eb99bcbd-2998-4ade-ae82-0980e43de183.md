# Undeploying a model 

<head>
  <meta name="guidename" content="DataHub"/>
  <meta name="context" content="GUID-eb99bcbd-2998-4ade-ae82-0980e43de183"/>
</head>

Administrators can remove a model from a repository. Undeploying a model also removes all records and data in the repository associated with the model, including staging areas, staging data, golden records, and attached source settings. The data is permanently deleted.

## Before you begin

Administrators can delete a deployed model from a single repository. In this scenario, other repositories with the same deployed model are not affected. For example, if you have a contact model deployed to a development, test, and production repository and you delete the model in the development repository, records in other repositories are not deleted.

:::caution

When you undeploy a model, the model, staging areas, staging data, and any associated golden records are deleted and cannot be restored.

:::

:::note

You cannot undeploy a model while accessing the Boomi Enterprise Platform using single sign-on.

:::

Administrators can alternatively Clear Model Data, which removes data from the domain and resets attached sources to a pre-initial load state. Clearing model data deletes records without removing the model from the domain.

You must have the following privileges to undeploy a model:

- MDM - View Repositories
- MDM - Model Removal

## Procedure

1. Navigate to the repository where the model resides.
2. Select the model you want to undeploy.
3. Click the lock icon. The lock icon is visible only to administrators and users having roles that include the MDM - View Repositories and MDM - Model Removal privileges. If you are accessing the using single sign-on, your Identity Provider password cannot be used in the Validate Password dialog and you cannot enable the Clear Model Data and Undeploy this Model buttons.
4. Enter your administrator password. 
5. Click **OK**.
6. Click **Undeploy this Model**.
7. A warning message displays. Click **OK** to confirm that you want to remove the model and delete all associated records.

The domain and attached sources are removed and domain data, staged data and staging areas are deleted. The model itself — its fields, match rules and data quality steps — is not affected and can be redeployed

:::note

The undeploy operation will fail and an error message will be displayed if you attempt to undeploy a model that contains one or more required reference fields specifying other models without first undeploying those models.

:::
