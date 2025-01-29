# Configuring Gmail with the Email connector

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-a4c10a39-e873-427f-9218-28894b3eb29d"/>
</head>


You can configure the Email connector to use a Google Gmail email account.

Replace this text with your content.

## Overview

Using to send emails from a Gmail account requires additional configuration of the Google/Gmail account set up with the Email connector. These additional steps should be performed for the Gmail account and email address that is specified in the **Username** configuration value. See [Email connector configuration values](/docs/Atomsphere/Flow/topics/flo-Email_connector_configuration_26b675d4-a880-4b1d-a9a1-3f7711e89d91.md).

You will need to:

1.  Enable Internet Message Access Protocol \(IMAP\) for your Gmail account
2.  Create a Google App password for the Email connector
3.  Configure the Email connector for Gmail

## Enable IMAP for your Gmail account

Enable IMAP on your Gmail account. For example:

1.  Sign in to your Gmail account.
2.  Click the **Settings** icon in the top right and click **See all settings**.
3.  Click the **Forwarding and POP/IMAP** tab.
4.  Select **Enable IMAP** In the **IMAP access** section.
5.  Click **Save changes**.

:::note

The [Check Gmail through other email platforms](https://support.google.com/mail/answer/7126229?hl=en&visit_id=637598837736674294-2991282240&rd=2) Google documentation provides full details and instructions on setting up IMAP in your Gmail account.

:::

## Create a Google app password for the Email connector

As the Email connector does not support using 2-Step Verification, a Google App password must be created to allow you to integrate your Gmail Account with . For example:

1.  Sign in to your Google account.
2.  Click the Google Account icon and select **Manage your Google Account**.
3.  Click **Security** in the left-hand menu.
4.  Click **App passwords** in the **Signing in to Google** section.
5.  Sign in to your Google account.
6.  Select 'Other \(Custom Name\)' from the **Select App** drop-down menu and enter a name for the app password \(such as 'Flow Email Connector' for example\).
7.  Click **Generate**.
8.  Copy the app password; this is needed for configuring the Email connector.

    ![App password](../Images/img-flo-Email_Apppw_520713c1-7911-4f7d-83c4-e949c33af56b.png)


## Configure the Email connector for Gmail

The Email connector can now be configured to use the Gmail account.

1.  Install the Email connector into your tenant, using the following values.
    -   **Host**: smtp.gmail.com

    -   **Port**: 587

    -   **Transport**: tls

    -   **Password**: The Google app password that was generated for the Email connector.

    -   **Username**: The Gmail account email address to use for sending emails with the connector.

2.  Save the Email connector and import it into any flows that you wish to send emails from.