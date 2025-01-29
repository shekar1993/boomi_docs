---
sidebar_position: 1
---

# Editing integration  

This page lets you edit the configurations of multi-install integration packs, including Connections, Process properties, and data mappings for the installed environment.

:::note

There is no Edit option for a single installation because, by default, Single-install ipacks are not extensible and do not have any extensible properties.

:::

:::note

  A multi-install integration allows installations across multiple environments but restricts editing to one environment at a time to maintain data integrity and prevent conflicts.

:::

You can perform the following actions on the Edit integration page:

- Edit integration
- Install the integration in a new environment
- Uninstall the integration from a specific environment
- Uninstall the integration from all environments

To edit the configurations:

1. Login to User Space portal.
2. Navigate to the **Installed** page.

3. In the search bar, type the integration name you want to edit.
    The **environments** table displays all the environments added to the integration, their attachment status, installation status, and the actions you can perform.

4. On the **Action** column of the environments table, click **Edit**.

5. Select the appropriate process you want to edit from the **Select a Process** drop-down list.
    You can edit the configurations for Connections, Process properties, and Data Map extensions based on the integration pack configuration set by the Admin.

6. Edit Connection properties.
    Edit the required connection configurations and click **Continue** to go to the next page.

7. Edit Process properties.
    In a process, properties are name/value pairs that store information to assist with your integration.
    You can edit the following:
        * Enter new values for the process property fields.
        * Leave any of its fields blank to use the default value configured by the Admin while creating the process.
    Click **Continue** to go to the next tab.

8. Edit Data maps.

    To map additional fields for the integration:
    1. From the Process drop-down list, select the   process for which you want to map additional fields.
    A table displays each row representing a source field, its map status, and the actions you can take on it.

    2. In the search field in the data map table, type the name of the source field you want to map.

    3. In the corresponding **Action** column of the source field, click **Map**. 
    The Map Source Field dialog opens.

    4. Select a target field and click **Apply**.

    5. On the edit success screen, click **Done** to finish editing the integration.

    :::note

    Functions and user-defined functions are currently not supported in additional field mapping of an integration.

    :::
