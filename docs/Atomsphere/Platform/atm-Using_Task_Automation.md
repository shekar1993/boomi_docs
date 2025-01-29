# Using Task Automation

<head>
  <meta name="guidename" content="Platform"/>
  <meta name="context" content="GUID-c4362d24-60bb-4ded-9d4c-0661952735d8"/>
</head>

You can use Task Automation for simple, recurring business processes that run on a schedule or trigger and can be easily monitored from a user-friendly dashboard.

To automate any task, you would need to set up a trigger and an action. Boomi Task Automation establishes reusable connections with applications for various Tasks. To access the application’s authentication API with basic authentication, connections must have the authentication privilege.

The majority of applications use the standard authentication method, which requires a **Username** or **User ID** and **Password**. Below are the type of authentication required for each application:

|Application|Authentication
|--------------|-------------|
|Gmail| **Email** and **Password**|
|Google Sheets| **Email** and **Password**|
|Google Docs| **Email** and **Password**|
|Google Calendar| **Email** and **Password** |
|Shopify| **Shop Name**, **API Token**, and **Access Key**|
|Jira |  **Email** and **Password** |
|Zendesk| **Email** and **Password** |
|Slack|**Email** and **Password** | 
|Twilio|**Account SID** and **Auth Token**|
|Mailchimp|**User Name** and **Password** |


## Working Example of Task Automation

The **Tasks** page is where you create a task, an automatic operation which can be executed across several applications. 

* You can create a task by selecting **New Task**.
* You have the option to search or filter the tasks that you have created.
* You can activate them by selecting the **ON** or **OFF** toggle button.

You can add multiple actions to a single task, but you can only have one trigger that initiates the process. For example, you might set up a task where, when a specific email arrives, it triggers two actions: sending a message to a Slack channel and sending a text message via Twilio to a designated recipient. Once you have configured these actions, you can save the task, and it will automatically execute the specified actions whenever the trigger event occurs.

In the following example, you will configure a trigger and an action and set up an automatic action in **Gmail** to notify a certain **Slack** channel when an email is received. 

Trigger: **An email is received**

Create a trigger that will be activated whenever a new email is received in your Gmail mailbox.

Action: **Slack Message**

Set up an action to send a message to a certain Slack channel once the trigger condition is satisfied.

1. Log in to your Boomi Task Automation account and select **+New Task** to begin a new Task.
2. Select **Gmail** as the Trigger App.
3. Choose **Slack** as the Action App.
4. Select the **An email is received -> Send Message** condition as automation.
5. Click **Authenticate**, connect your Gmail account, and choose the mailbox for which you want to be alerted to new emails.
6. (Optional) Set up filters to activate the workflow only for emails that meet specified criteria, such as the **Subject** or **From**.
7. For the Slack Action, click **Authenticate** and connect your Slack account.
8. Under **Channel** and **Message**, enter the name of the channel where you want to receive email notifications, as well as the Slack message content.
9. Click **Test Task** to ensure that the email content is appropriately sent to the specified Slack channel.
10. Click **Save Task** to activate and start the automation.

When the automation is active, it will automatically send a notification on receiving a new email to the specified Slack channel. You can customize the Slack message format and content according to your preferences.

The Tasks page also showcases key metrics including Total Tasks, Active Tasks, Task Activations, and Time Saved.

* **Total Tasks**: The number of tasks you have set up within the task automation tool.
* **Active Tasks**: The tasks that you have turned on and are currently operational.
* **Task Activations**: The number of times your tasks are triggered (Executions).
* **Time Saved**: The estimated time you save by automating a task, calculated based on the average time it would take to perform the task manually.

# Connections

In the **Connections** tab you can manage the connections you have set up. The page lists the applications that Task Automation has permission to access. You can view the **Permissions** and **Tasks** for the application that you have authorized. You can delete Connection(s) from this page. Deleting connections will terminate any tasks that are linked to them.

# Notifications

The **Notifications** tab displays all of the notifications related to your ongoing tasks and progress. If you encounter any issues that fail to work or require notification, this page displays them.

On this tab you can view and manage all incoming notifications and alerts. It aggregates various types of notifications, such as messages, reminders, and updates, providing a comprehensive overview of their recent interactions and activities within the application. 