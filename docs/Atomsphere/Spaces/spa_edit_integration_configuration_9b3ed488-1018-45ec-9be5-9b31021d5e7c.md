# Edit Integration Configurations

<head>
  <meta name="guidename" content="Spaces"/>
  <meta name="context" content="GUID-9b3ed488-1018-45ec-9be5-9b31021d5e7c"/>
</head>


You can edit the configurations of an integration that includes connections settings, field properties, and data mappings for an environment where it is installed.

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
8. Edit Data Maps.

    To map additional fields for the integration:

    a. From the Process drop-down list, select the process for which you want to map additional fields.

    A table displays each row representing a source field, its map status, and the actions you can take on it.

    b. In the search field in the data map table, type the name of the source field you want to map.

    c. In the corresponding **Action** column of the source field, click **Map**. 

    The Map Source Field dialog opens.

    d. Select a target field and click **Apply**.

    e. On the edit success screen, click **Done** to finish editing the integration.

    :::note

    Functions and user-defined functions are currently not supported in additional field mapping of an integration.

    :::

## Installing integration in a new environment

    For a multi-environment configuration, the Edit integration feature allows you to install the integration in any environment that was skipped during the initial installation.

    To install the integration in an environment:

1. Sign in to the Space User portal.

2. Navigate to the **Installed** page.

3. In the search bar, type the name of the integration you want to install, and then click **Edit**.

    On the **Edit Integration** page, the Environments table displays all the environments added to the integration, wth their attachment status, installation status, and the actions you can perform.

4.  On the **Action** column of the environments table, click **Install** and follow the steps mentioned in the [Installing multi installion](../Boomi_Labs/Spaces/Getting_started/User_Space/installing_multi_installation.md) topic to finish installing the integration in an environment. 