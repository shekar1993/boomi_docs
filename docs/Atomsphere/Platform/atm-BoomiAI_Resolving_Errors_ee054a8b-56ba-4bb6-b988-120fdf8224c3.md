# Resolving Boomi GPT Errors 


<head>
  <meta name="guidename" content="Platform"/>
  <meta name="context" content="GUID-ee054a8b-56ba-4bb6-b988-120fdf8224c3"/>
</head>

Review the error and resolution to troubleshoot your issue. If your issue persists or you need assistance, contact Boomi Support.



|Error Message|Resolution|
|-------------|----------|
|"There are no available integrations between `<source connector name>` and `<target source connector name>`."|Currently, DesignGen does not support an integration design between the two sources you provided. Review [Boomi GPT Supported Connectors](/docs/Atomsphere/Platform/atm-BoomiAI_Connectors_9f8a52e4-5ef2-49ec-bb15-bba51d58fb59.md). Boomi is constantly learning. We encourage you to try your prompt again in the future as we add new supported connectors.|
|The `<connector name>` connector is not available. Please contact the administrator of your account.|The connector you specified in your prompt is not currently available on your Boomi account. This may be due to licensing or due to your subscription. You can contact your account representative to upgrade your subscription. Review [Connector licenses and classes](../Integration/Connectors/c-atm-Connectors_bb305b35-0f13-4937-a918-f85dbbe1b27b.md) and [License settings](c-atm-License_management_7f3b0031-d80a-49a4-a744-e8878108cd38.md) to learn more about connector classes and licenses.|
|"Apologies for the inconvenience. Unfortunately, your request can't be processed at the moment. Could you try sending it again?"|Click New Conversation to clear the history of previous chats then try your prompt again.|
|"This account does not have the Component API feature enabled to create processes and components. Please contact the administrator of your account or file a support ticket."|Your account must have the Create Component API enabled to use Boomi GPT. Contact Boomi Support.|
|"You do not have sufficient permissions to create a folder where processes and components are built. Please contact the administrator of your account or file a support ticket."|You must have Build Read Write Access in Integration to use DesignGen. This access is included in the Standard User role but may not be included in custom roles. Review [User roles and privileges](c-atm-User_roles_and_privileges_5a1c8a1a-4d58-4e7d-a6b6-b684a0c6d672.md) for assistance.|
|"Looks like this conversation is already complete. Try again by starting a new conversation."|You have selected a suggestion from Boomi DesignGen for an implemented integration design. Enter a new prompt or click New Conversation to clear the history of previous chats before trying again.|
|"Your request is in progress. Please wait for it to complete."|Boomi GPT can process one request at a time. Wait until Boomi DesignGen completes an integration design before entering a new prompt or selecting a different design prompt.|
|"Hi. I'd be happy to assist you with creating your integration documentation, but I'm currently unable to process your request. I can work on one integration at a time at the moment. To better assist you, could you please try submitting your request again? I'm still learning!"|Boomi GPT can process one documentation request at a time. Wait until Boomi GPT completes the documentation request before entering a new prompt.|
|"Hi. I'd love to assist with your questions, but I'm currently unable to process your request. Could you please try again? I am continuously learning to get better at answering your questions!"| Ask questions using as much detail as possible. Questions must be related to the Boomi Enterprise Platform. Review [Asking Questions](/docs/Atomsphere/Platform/atm-BoomiAI_Asking_Questions.md) to learn what types of questions you can ask.|

