# Environment Properties panel 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-aac1d6f2-55ca-4838-bfe3-b300cfaaae19"/>
</head>


The Environment Properties panel appears when you select an environment on the Atom Management page \(**Manage** \> **Atom Management**\).

:::note

You must have the Atom Management and Environment Management privileges to perform actions on the Environment Properties panel. If you have the Atom Management Read Access privilege, you can view existing properties, but you cannot change them.

:::

**Name**  
User-defined name for the environment. "Development", "Test", and "Production" are commonly used.

:::caution

Name is restricted to 80 characters. There are no restrictions to the type of characters allowed.

:::

**Environment ID**  
Number that the system assigns to the environment.

**Classification**  
\(For accounts with Unlimited environment support\) Used to indicate the type of environment. The choices are Production or Test. The environment classification determines which type of license is used when a process is deployed to the environment. If you want to use test environments, you must have test connection licensing enabled.

The classification can be set only when you add an environment. You cannot change it later. Environments added prior to the January 2014 release have their classification set to Production.

:::note

For accounts with Basic environment support, all environments are classified as production environments.

:::

**Roles with Access**  
Used to specify the roles that have access to this environment.

**Attachments**  
Displays any Atoms that are part of this environment.

**Environment Extensions**  
Opens the Extensions dialog, where you can set Environment-level extension values.

**View Integration Packs**  
Opens the Integrations Packs dialog, which is used to monitor the release status of attached integration packs and apply pending updates.

This link is only visible if there are integration packs attached and available in the environment.

**Atoms & Connectors**  
This field is only visible if there are updates available for the atoms and connectors in the environment.

If visible, clicking **Apply Pending Updates** updates your atoms and connectors.

**Delete Environment**  
Initiates a request to delete the environment.

In the confirmation dialog:

-   Clicking **OK** executes the request.

-   Clicking **Cancel** cancels the request.


It is not possible to delete an environment that has attached Atoms or integration packs. The check for attached Atoms occurs first — the confirmation dialog appears only if there are no attached Atoms. The check for attached integration packs occurs after **OK** is clicked in the confirmation dialog.


## Related information

- [Environment management](c-atm-Environment_management_1ec94aeb-ffaf-4cec-a3b0-483c2af3967c.md)