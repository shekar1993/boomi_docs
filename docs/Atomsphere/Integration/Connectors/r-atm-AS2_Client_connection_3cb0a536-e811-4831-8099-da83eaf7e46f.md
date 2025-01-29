# AS2 Client connection

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-3cb0a536-e811-4831-8099-da83eaf7e46f"/>
</head>

The AS2 Client connection represents the AS2 destination for a given trading partner or application. The endpoint owner needs to provide the information for configuring the Connection and Operation components.

## Settings tab

- **URL** - The URL to send data to provided by the endpoint owner.

- **SSL Cert** - (Optional) If you are using AS2 via SSL, this is the endpoint owner’s public certificate for encrypting data. Select an existing certificate or create a new one and then import the certificate provided by the endpoint owner. For more information, see the linked Certificate components topic.

- **Client SSL Cert** - Used to select, edit, or create a private certificate component for SSL Client Authentication. Your private certificate is used to verify your identity when sending requests to the endpoint. To set up a client authentication, you must manually export your public certificate and provide it to the endpoint owner. For more information, see the linked Certificate components topic.

- **Authentication Type** - The type of authentication required by the endpoint owner.

  - None \(default\)
  - Basic — selecting this authentication type reveals required **User Name** and **Password** fields.

- **Verify Hostname** - If selected, the sender will verify the hostname.
