# Installing the Email (Deprecated) connector

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-ee9d2159-e4e3-4508-b86c-8d70fcfc5a07"/>
</head>

:::warning

This connector is now in Deprecated status. It is no longer available for new users and is not actively maintained. We will provide a minimum six-month notice before its retirement. We recommend upgrading to the newer supported version of this connector.

:::

To use the connector, you will first need to install the into your tenant.

Ensure you have the required details for the email account and provider that you will use for configuring the .

For example, a basic installation of the requires:

-   The SMTP server name of your email service provider.

-   The security protocol to use for securing email transmissions with the .

-   The port that your email service provider mail server uses to communicate with the .


The configuration values for the will depend on your email provider. For example, to send emails from a Gmail account you will need to configure the with a different SMTP server name than if you are sending emails from a Microsoft Exchange/Office 365 account.

-   [configuration values](flo-Email_Service_Configuration_109ed362-cb5b-4580-9cc8-d44504ff6cf7.md)

    -   [Configuring Gmail with the Email connector](flo-Email_Service_Gmail_a3fe1ab9-0cf7-4699-91cd-71d9d54b61bf.md)

    -   [Configuring Microsoft Exchange with the Email connector](flo-Email_Service_Exchange_b0548ca1-51c0-408c-9a27-580bd0547acb.md)


1.  Select **** from the main left-hand menu.

2.  Click **New**.

3.  Select "Email \(Legacy\)" from the **Connector Type** menu.

4.  Enter a name for the in the **Name** field.

5.  Click **Retrieve Connector Configuration Data**.

6.  Enter the required configuration values. See [configuration values](flo-Email_Service_Configuration_109ed362-cb5b-4580-9cc8-d44504ff6cf7.md) for details on the values required for this .

7.  Click **Install**.

8.  Click **Save Connector**.


Once the is installed, it can be imported and integrated into a flow.

-   Import the as a shared element, see [Shared Elements](c-flo-Shared_Elements_85425302-deb7-4f96-aedd-be797a3224e5.md).

-   Get started using a message map element with the , see [message actions and send types](flo-Email_Service_Send_Types_401a4206-f7f9-4c66-aef0-d9090b9ac2ed.md).

-   Learn how the can be used to send a simple email from a flow, see [Sending a simple email](flo-Email_Service_Using_b8686a9c-0899-4b72-9343-399511e3273b.md).

-   Learn how the can be used as part of an email approval application, see [Sending an email with a decision request](flo-Email_Service_email_decision_d52111d1-9a81-4f38-9625-6af47dc44096.md).

-   Learn how the can be used with a file upload component to upload files and then include them as attachments in an email, see [Sending email attachments using the Email connector](flo-Email_Service_Attachments_cfd0438a-8a35-40d8-9c0b-c91a06c4c36b.md).