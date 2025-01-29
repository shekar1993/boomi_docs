import TestConnection from './_TestCon.md'

# Innotas – Partner connection 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-635aff4e-760e-40a6-8122-e39b1e9a8c20"/>
</head>


The Innotas – Partner connection represents a single Innotas account including login information.

If you use multiple accounts, you need a separate connection for each. You can pair the connection with different Innotas operations to perform a unique action against an Innotas account.

## Connection tab 

**WSDL URL**: URL to the Innotas web services. For production, this should always be: `https://api1.innotas.com/services/MainService?wsdl`

**User**: The Innotas API user name, which you obtain from your Innotas representative. This is not your regular Innotas user name that you use to sign in to the front end.

**Password**: Password for the user.

:::note

The connector automatically handles the HTTPS certificate. You do not need to manually import a certificate component.

:::

<TestConnection />