# Email connector

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-f96ce3fa-c713-41fe-932e-85844f496b87"/>
</head>


The Email connector allows you to connect to an email provider and send emails directly from a flow.

## Overview

You can use the Email connector to integrate email functionality into your flows. For example:

-   Send simple emails, triggered at defined points within a flow.

-   Send emails that require a decision from an email recipient before the flow can continue progressing along the chosen outcome path, such as with a flow approval process.


## Installing the Email connector

1.  Select **Connectors** from the main left-hand menu.
2.  Click **New Connector** to open the **New Connector** page.
3.  Select the "Email" connector from the **Connector Type** drop-down menu.
4.  Enter a name for the connector in the **Name** field, such as "Email Connector" for example. The Email connector URL is shown in the **Url** field.
5.  Click **Retrieve Connector Configuration Data** to open the **Configure Connector** page.
6.  Click **Install**.
7.  On the **Edit Connector** page, click **Save Connector**.
8.  The Email connector is now installed, and can be imported as a shared element into your tenant\(s\).

## Configuring the Email connector

The configuration values will depend on your chosen email provider. For example, to send emails from a Gmail account you will need to configure the connector to use a different SMTP server name than if you are sending emails from a Microsoft Exchange/Office 365 account.

-   [Email connector configuration values](/docs/Atomsphere/Flow/topics/flo-Email_connector_configuration_26b675d4-a880-4b1d-a9a1-3f7711e89d91.md)

-   [Configuring Gmail with the Email connector](/docs/Atomsphere/Flow/topics/flo-Email_connector_Gmail_a4c10a39-e873-427f-9218-28894b3eb29d.md)

-   [Configuring Microsoft Exchange with the Email connector](/docs/Atomsphere/Flow/topics/flo-Email_connector_Exchange_9080314b-92e3-4354-9049-47775ac0e444.md)


## Using message actions and send types

Once you have installed, configured, and imported the connector into your flow, use a message map element and message actions to send emails from your flow.

There are several different types of message action available for the connector:

-   [Email connector message actions and send types](/docs/Atomsphere/Flow/topics/flo-Email_connector_message_actions_2d7bd33d-4759-4390-bb71-d11aed6b76fc.md)

    -   [Send email \(simple\)](/docs/Atomsphere/Flow/topics/flo-Email_connector_send_email_simple_16564ade-7bb3-4286-a7ba-25b967aa0ce0.md)

    -   [Send email](/docs/Atomsphere/Flow/topics/flo-Email_connector_send_email_990e6944-706b-4864-be2e-ad9205b453c0.md)

    -   [Send email with Decision Request](/docs/Atomsphere/Flow/topics/flo-Email_connector_decision_a1407578-4750-4d6a-b2a3-39fa41a456c6.md)


## Worked examples

To get started using the connector, the following worked examples are provided:

-   [Sending a simple email](/docs/Atomsphere/Flow/topics/flo-Email_Service_Using_b8686a9c-0899-4b72-9343-399511e3273b.md)

-   [Sending an email with a decision request](/docs/Atomsphere/Flow/topics/flo-Email_Service_email_decision_d52111d1-9a81-4f38-9625-6af47dc44096.md)

-   [Sending email attachments using the Email connector](/docs/Atomsphere/Flow/topics/flo-Email_Service_Attachments_cfd0438a-8a35-40d8-9c0b-c91a06c4c36b.md)


## Connector URL

The Email connector endpoint URL is:

-   flow://email

## Features

The Email connector forms part of the following features within :

-   **Files:** This feature allows you to expose files stored in an external repository from within your flows. This also allows users to upload and manage files through flows.

-   **Messages:** This feature provides the ability to interact with the connector using [ Message map elements](/docs/Atomsphere/Flow/topics/c-flo-ME_Message_342e9efb-0f11-4083-a2dc-195d52d1f939.md).


## Known limitations

-   Although the connector can be integrated with a [ File Upload component](/docs/Atomsphere/Flow/topics/flo-pages-components-fileupload_edb868aa-5a66-4cbf-9019-42e1df0ed027.md) to allow a user to upload and send a file as an email attachment, the file attachment is a temporary resource in the connector. The connector is not designed for permanent file storage.

    To store files that are attached to emails sent with this connector, use a dedicated file storage connector such as the Amazon S3 connector. See [Sending email attachments using the Email connector](/docs/Atomsphere/Flow/topics/flo-Email_Service_Attachments_cfd0438a-8a35-40d8-9c0b-c91a06c4c36b.md).