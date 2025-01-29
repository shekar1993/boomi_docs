# Getting Started With Task Automation

<head>
  <meta name="guidename" content="Platform"/>
  <meta name="context" content="GUID-1a1c3675-5bfc-466e-bb76-453dcd8c9e84"/>
</head>

Familiarize yourself with the following terms before you get started with Task Automation. 

## Task

Tasks are automatic operations that can be executed across several applications. Each task consists of a trigger and one or more actions that are performed when the trigger event is detected. When tasks are initiated, they run in the background to look for trigger events and carry out their activities. When they are halted, they stop looking for trigger events. For example, adding new Salesforce accounts into Zendesk as new organizations or sending a Slack message when you get an email in your Gmail inbox.

## Trigger

Triggers identify the particular event to watch and cause the task's predetermined steps to be carried out. You can set up these events in applications like Gmail or JIRA to react to certain situations, such as receiving a new email or resolution of an existing issue. Trigger events differ between each application.

## Action

Every time the trigger event takes place, action(s) are carried out. Tasks are required to have at least one action. For example, when a record is created in the Salesforce trigger, an action can be set up to create a record in Google Sheets.

## Prerequisites

- You have valid login credentials for the [Boomi Enterprise Platform](https://platform.boomi.com/).
- You have access to the **Task Automation** application.

## Accessing Task Automation

There are two ways you can access the Task Automation application and get started:

- Log in directly to [Task Automation](https://taskautomation.boomi.com/) by using your Boomi Enterprise Platform username and password.
OR
- Log in to the [Boomi Enterprise Platform](https://platform.boomi.com/), then, under **Services**, select **Task Automation**.
