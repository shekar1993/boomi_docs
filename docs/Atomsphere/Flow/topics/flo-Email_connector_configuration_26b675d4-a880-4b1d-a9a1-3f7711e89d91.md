# Email connector configuration values

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-26b675d4-a880-4b1d-a9a1-3f7711e89d91"/>
</head>


The following configuration values can be defined during installation of the Email connector.

## Configuration values

The configuration values define how the connector connects to your email account and provider.

| Name      | Type   | Required or optional? | Description                                                                                                                                                                                                                                                |
|:----------|:-------|:----------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Port      | Number | Required              | The port that your email service provider mail server uses to communicate with the connector.<br />1. 587 is typically set as the default SMTP port if its transport encryption is specified, to ensure that email is submitted securely and follows standard email security guidelines.<br />2. 465 is typically set as the default SMTP port if ss/transport encryption is specified, to ensure that email is submitted securely and follows standard email security guidelines. |
| Host      | String | Required              | The SMTP server name of your email service provider.<br />- For example, the hostname for a Gmail account is typically `smtp.gmail.com`, and for a Microsoft Exchange/Office 365 account is typically `smtp.office365.com`.                                         |
| Transport | String | Required              | The security protocol to use for securing email transmissions with the connector. The following values are supported:<br />1. `plain`: Transmissions will be sent in plain text; no encryption is applied.<br />2. `tls`: Transmissions will use Transport Layer Security (TLS) protocol encryption to ensure that email is submitted securely and follows standard email security guidelines.<br />3. `ssl`: Transmissions will use Secure Sockets Layer (SSL) protocol encryption to ensure that email is submitted securely and follows standard email security guidelines. |
| Password  | String | Optional              | The password for the account if your email service provider SMTP server requires username/password authentication.<br /> If you are using a Gmail account, this will need to be a Google app password. See [Configuring Gmail with the Email connector](/docs/Atomsphere/Flow/topics/flo-Email_connector_Gmail_a4c10a39-e873-427f-9218-28894b3eb29d.md).                                                                      |
| Username  | String | Optional              | The username (typically an email address) if your email service provider SMTP server requires username/password authentication.<br /> For example, `username@example.com`.                                                                                      |
