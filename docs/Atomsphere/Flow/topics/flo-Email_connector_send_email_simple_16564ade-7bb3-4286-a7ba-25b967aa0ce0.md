# Send email \(simple\)

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-16564ade-7bb3-4286-a7ba-25b967aa0ce0"/>
</head>


The Send email \(simple\) message action provides basic functionality for sending an email from a flow.

## Overview

This message action allows the Email connector to send a simple email from a flow.

You can configure the following values for the email:

-   A single email address string value to send the email from.

-   An email addresses string value to send the email to.

-   A subject string value for the email subject.

-   The body of the email, using standard HTML formatting in a content value.


## Input values

This message action requires configuration of the following Input values:

| Name    | Type    | Required or optional? | Description                                                                                                                                                                                                                      |
|:--------|:--------|:----------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Body    | Content | Optional              | The HTML formatted body content of the email. The content of this value is inserted into the body of the generated email.                                                                                                         |
| From    | String  | Required              | The email address that the email should be sent from. This value is inserted into the From field of the generated email.<br />For example, 'sender@example.com'.                                                                    |
| Subject | String  | Optional              | The subject of the email. This value is inserted into the Subject field of the generated email.                                                                                                                                   |
| To      | String  | Required              | The email address(es) that the email should be sent to. This value is inserted into the To field of the generated email.<br />For example, 'recipient@example.com'.<br />Multiple email addresses can be added, but must be separated with a semi-colon character. For example, 'recipientA@example.com;recipientB@example.com'.|
