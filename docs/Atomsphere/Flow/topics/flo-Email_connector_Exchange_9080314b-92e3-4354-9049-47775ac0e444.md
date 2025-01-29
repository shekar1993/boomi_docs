# Configuring Microsoft Exchange with the Email connector

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-9080314b-92e3-4354-9049-47775ac0e444"/>
</head>


You can configure the connector to use a Microsoft Exchange or Office 365 email account.

## Overview

Using to send emails from a Microsoft Exchange or Office 365 email account requires the following additional configuration.

1.  Enable Internet Message Access Protocol \(IMAP\) for your Microsoft Exchange/Office 365 email account
2.  Configure the Email connector for Microsoft Exchange/Office 365

## Enable IMAP for your Microsoft Exchange email account

The Email connector typically requires IMAP functionality for sending emails, and this feature may need to be enabled in the Microsoft Exchange/Office 365 setup for your Organization. You may be able to configure this setting directly from Microsoft Outlook or Outlook on the web.

## Configure the Email connector for Microsoft Exchange/Office 365

The Email connector can now be configured to use the Exchange email account.

1.  Install the Email connector into your tenant, using the following values.
    -   **Host**: smtp.office365.com

    -   **Port**: 587

    -   **Transport**: tls

    -   **Password**: The password for your email account.

    -   **Username**: The Exchange email address to use for sending emails with the connector.

2.  Save the Email connector and import it into any flows that you wish to send emails from.