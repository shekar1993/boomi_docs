# Enabling connector property persistence in an Atom

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-076ff940-8950-4a46-97f1-8b66cef8ad43"/>
</head>

## Before you begin

You must have the Atom Management privilege to perform this task. If you have the Atom Management Read Access privilege, you cannot perform the task.

## About this task

The Connector Listener framework can call the SDK Persistence API to persist properties on the Atom shared file system. A `<process_id>-connector.properties` file will be created in the container's execution folder after a listener execution when a property is first set during an execution.

Prior to being able to set persisted properties, you must enable the Persisted Connector Cache option on the Atom. Perform the following task on the Atom:

## Procedure

1. Select **Manage** \> **Atom Management**.

2. Select the Atom, Molecule, or Cloud Molecule from the list on the left.

3. In Settings & Configuration, click **Properties**.

4. In the Properties panel, click the **Advanced** tab.

5. Select the **Enable Persisted Connector Cache** property \(`com.boomi.container.connector.persistence.enabled`\), click **![A small blue circle with a white plus sign in the center](../Images/main-ic-plus-sign-white-in-blue-circle-16_98f7af60-dd5f-4037-90cd-05cc9dfc5502.jpg) Add a Property**, and select its Property Value check box.

6. Optionally, you can filter out and only allow a specific set of connectors to use persistence on the Atom. Select the \(`com.boomi.container.connector.persistence.allowList`\) property, click **![A small blue circle with a white plus sign in the center](../Images/main-ic-plus-sign-white-in-blue-circle-16_98f7af60-dd5f-4037-90cd-05cc9dfc5502.jpg) Add a Property**, and enter a comma-separated allow list, for example `connectorType1, connectorType2`. If you want to allow all connectors to use persistence, skip this step. 

7. Click **Save**.

    Because changes to this property do not take effect until the Atom is restarted, you are prompted to restart. You have the option to restart now or restart later.
