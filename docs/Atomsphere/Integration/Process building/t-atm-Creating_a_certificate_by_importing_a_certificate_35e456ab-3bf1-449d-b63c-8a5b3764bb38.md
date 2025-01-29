# Creating a certificate by importing a certificate

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-35e456ab-3bf1-449d-b63c-8a5b3764bb38"/>
</head>

To create a certificate by importing an existing certificate, use the Create Component dialog and either the Import Certificate Wizard or the Import PGP Certificate Wizard.

## Procedure

1. On the Build page, click **New**.

2. From the Component types dialog, select *PGP Certificate* or *X.509 Certificate* from the first list.

3. Type a name for the certificate.

    The maximum length is 255 characters.

4. (Optional) If you do not want the certificate to be stored in the default folder, click the **Folder** button and select the desired folder.

5. Click **Generate**.

    The Generate Private Key Wizard opens.

6. If you prefer to import a certificate, lick **Import**.

    The Import Certificate Wizard or Import PGP Certificate Wizard opens.

7. Click **Browse** and locate the private or public certificate file that you want to import.

    For a private X.509 certificate, you can import a chain of certificates. Those files have a file extension of .pfx or .p12. For a public X.509 certificate, you can manually concatenate a collection of certificates and import the .cer file.

    :::note
    
    Private X.509 certificates that you want to import must have an alias defined.

    :::

8. (Optional) Enter a pass phrase or password, if required.

9. Click **Finish**.

    :::note

    Imported certificates are first passed through a virus scanner. The import results in an error if a virus is detected, and the certificate is rejected. If an error persists, contact Boomi Support.

    :::

    The certificate details are displayed on the tab.

10. Click **Save** or **Save and Close**.