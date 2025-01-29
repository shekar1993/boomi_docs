# Attaching an Atom to or detaching an Atom from an environment 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-C3068B33-9CD6-4B21-BEDA-47A39161FE93"/>
</head>


You can attach or detach Atoms using the **Manage** \> **Atom Management** page if you have the appropriate privileges.

## Before you begin

You must have the Atom Management, Environment Management, and Packaged Component Deployment privileges to perform this task. If you have the Atom Management Read Access privilege, you cannot perform the task.

:::info Important

When adding an Atom to an existing Environment, all encrypted values must be re-entered in the [Environment Extensions dialog](r-atm-Environment_Extensions_dialog_3ee06677-2936-432b-9f29-ce4706083fe5.md) after the Atom is added.

:::

## About this task

For accounts with Basic environment support, each environment in the account can have a single Atom attached. For accounts with Unlimited environment support, each environment can have an unlimited number of Atoms attached.

## Procedure

1.  Go to **Manage** \> **Atom Management**.

2.  To attach an Atom, do one of the following items:

    -   Click the Environment from the Environments list on the left.

        Under Configuration, click in the **Attachments** field and select an Atom from the list.

    -   In the Environments list on the left, click an unattached Atom.

        From **Attach to Environment**, select an Environment from the drop-down list.

    -   In the Environments list on the left, drag an Atom from the **Unattached Atoms** list to the Environment that you want to attach it to, and click **OK**.
    
3.  To detach an Atom, do one of the following items:

    -   Click the Environment from the Environments list on the left.

        Under Configuration, click the ![X](../Images/main-ic-gray-x-for-removing-attachments_e6947f3c-29c5-42c7-8445-8f7b39f701fc.jpg) next to the Atom name from the **Attachments** list and then click **OK**.

    -   In the Environments list on the left, click an attached Atom.

        From Atom Controls section of the Atom Information panel, click **Detach From Environment** and then click **OK**.