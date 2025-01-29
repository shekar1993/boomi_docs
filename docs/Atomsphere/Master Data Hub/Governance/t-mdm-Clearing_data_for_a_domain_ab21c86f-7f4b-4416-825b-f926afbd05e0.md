# Clearing data for a domain 

<head>
  <meta name="guidename" content="DataHub"/>
  <meta name="context" content="GUID-ab21c86f-7f4b-4416-825b-f926afbd05e0"/>
</head>

Administrators can clear model data to remove invalid golden records from a repository.

## Before you begin

Clearing model data is useful in scenarios where you want to keep the attached model and source configurations in the repository but permanently remove all records in the domain. When you clear model data, you have the option to return source configurations in the model to a pre-initial load state.

Clearing model data only affects data within the selected repository.

:::caution

Clearing model data deletes all records in the repository associated with the model. Deleted data cannot be restored.

:::

:::note

It is not possible to clear a domain’s data while you are accessing the Boomi Enterprise Platform using single sign-on.

:::

You must have the following privileges to clear model data:

- **MDM - View Repositories**
- **MDM - Model Removal**

## Procedure

1. Navigate to the repository **Summary** tab.
2. Click the lock icon. The lock icon is visible only to administrators and users having roles that include the MDM - View Repositories and MDM - Model Removal privileges. If you are accessing the using single sign-on, your Identity Provider password cannot be used in the Validate Password dialog and you cannot enable the Clear Model Data and Undeploy this Model buttons.
3. Enter your administrator password.
4. Click **OK**.
5. Click **Clear Model Data**.
6. **Optional**: select **Also reset sources to Created (pre-Initial Load) state** to reset the domain’s attached sources to pre-Initial Load state and delete the sources’ staging areas.
7. Click **OK**.
    The data for the domain, including staged data, is deleted. The version of the domain’s underlying model is unchanged. The domain’s sources remain attached and their configuration is unchanged.
