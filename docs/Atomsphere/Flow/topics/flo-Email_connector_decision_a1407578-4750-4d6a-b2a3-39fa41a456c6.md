# Send email with Decision Request

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-a1407578-4750-4d6a-b2a3-39fa41a456c6"/>
</head>


The Send email with Decision Request message action allows you to send an email containing clickable links that allows a recipient to progress further in a flow.

## Overview

This message action allows you to provide email recipients with clickable links for choosing how and whether to progress further through a flow. For example, if an approval email is generated in a flow, the email recipient can choose to either approve or deny the request by clicking on the appropriate link in the email.

-   A clickable link is automatically generated and inserted at the bottom of the email body for each outcome connected from the message map element.

-   When the email recipient clicks on a link in the email, they are redirected to that outcome path in the flow.


For a worked example of a simple email approval application using this type of message action, see [Sending an email with a decision request](/docs/Atomsphere/Flow/topics/flo-Email_Service_email_decision_d52111d1-9a81-4f38-9625-6af47dc44096.md).

You can configure the following values for the email:

-   An object contact value containing the email address to send the email from.

-   A list contact value containing multiple email addresses to send the email to.

-   The body of the email, using standard HTML formatting in a content value.

-   The body of the email, using text in a string value, as an alternative for email applications that do not render HTML content.

-   A list $File value containing a list of file attachments that have been previously uploaded to the Email connector.


## Input values

This message action requires configuration of the following Input values:

| Name        | Type              | Required or optional? | Description                                                                                                                                                                                                                                                                                                              |
|-------------|-------------------|-----------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| HTML Body   | Content           | Optional              | The HTML formatted body content of the email. The content of this value is inserted into the body of the generated email.                                                                                                                                                                                                |
| Attachments | List`<File>`      | Optional              | A list File value containing a list of file attachments that have been previously uploaded to the Email connector.                                                                                                                                                                                                       |
| To          | List`<Contact>`   | Required              | The list of contact objects containing the email addresses that the email should be sent to. These values are inserted into the To field of the generated email.<br />The object Email property must be populated with a valid email address for any contact objects in the list that the email should be sent to. |
| From        | Object`<Contact>` | Required              | The contact object containing the email address that the email should be sent from. This value is inserted into the From field of the generated email. <br />  The object Email property must be populated with the email address Username configuration value used to send the email.                               |
| Body        | String            | Optional              | A text version of the email body, provided as an alternative for email applications that do not render HTML content.                                                                                                                                                                                                     |
| Subject     | String            | Optional              | The subject of the email. This value is inserted into the Subject field of the generated email.                                                                                                                                                                                                                          |
