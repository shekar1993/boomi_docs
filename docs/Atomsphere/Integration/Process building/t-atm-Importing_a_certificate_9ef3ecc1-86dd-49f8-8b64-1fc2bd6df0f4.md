# Importing a certificate

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-9ef3ecc1-86dd-49f8-8b64-1fc2bd6df0f4"/>
</head>


## Procedure

1.  On the **Build** page, open an existing private or public certificate.

2.  Click **Import**.

    The Import Certificate Wizard or Import PGP Certificate Wizard opens.

3.  Click **Browse** and locate the private or public certificate file that you want to import.

    For a private X.509 certificate, you can import a chain of certificates. Those files have a file extension of .pfx or .p12. For a public X.509 certificate, you can manually concatenate a collection of certificates and import the .cer file.

    :::note
    
    Private X.509 certificates that you want to import must have an alias defined.

    :::

4.  Enter a pass phrase or password, if required.

5.  Click **Finish**.

    The certificate details are displayed on the tab.

6.  Click **Save**.