# Salesforce outbound messaging setup

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-5a3e4330-c3d8-4200-91e1-c9ea8b1fd62c"/>
</head>

Within Salesforce, use Workflow Rules to set up outbound messages to Integration.

Following are the high-level steps for outbound messaging setup in Salesforce. Consult the [Salesforce help documentation](http://www.salesforce.com/us/developer/docs/api/Content/sforce_api_om_outboundmessaging_setting_up.htm) for detailed reference information.

1.  Select **Setup** \> **Create** \> **Workflow & Approvals** \> **Workflow Rules**.

2.  Configure a workflow rule for triggering the outbound message.

    1.  Click **New Rule**.

    2.  Select the Object.

        ![New Workflow Rule panel.](../../Images/other-db-sfdc-workflow-rule-screen1_3f1afebf-7484-43dd-9b38-f81d9ab6c5fa.jpg)

    3.  Set the Rule Name and, optionally, the Description.

    4.  Select the Evaluation Criteria.

    5.  Select the Rule Criteria, which can be based on the modification of fields in Salesforce.

        ![Configure Workflow Rule panel.](../../Images/other-db-sfdc-workflow-rule-screen2_7effa148-7084-4924-b5ac-46295af17d57.jpg)

    6.  Select New Outbound Message as the Workflow Action.

        ![Specify Workflow Actions panel.](../../Images/other-db-sfdc-workflow-rule-screen3_15c4d2d9-a267-49fc-85fe-592cedb52eb3.jpg)

3.  Define the outbound message.

    1.  Set the Message Name.

    2.  Select the Fields to Send.

    3.  Set the Endpoint URL, which must include the `boomi_auth` URL parameter. For more information and examples, see the topic API security, linked below.

        ![Configure Outbound Message panel.](../../Images/other-db-sfdc-outbound-message_7726f8af-99ec-4360-b48a-1c400b1c09f7.jpg)

If the outbound message will have multiple triggering workflow rules, you can then configure the additional workflow rules and select the outbound message as the Workflow Action for each.
