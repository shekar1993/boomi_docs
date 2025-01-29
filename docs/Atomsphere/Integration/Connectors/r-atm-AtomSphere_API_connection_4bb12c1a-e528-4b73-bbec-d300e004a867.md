# Boomi AtomSphere API connection

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-4bb12c1a-e528-4b73-bbec-d300e004a867"/>
</head>


The Boomi AtomSphere API connection represents a single user. You can pair a single connection component with different Boomi AtomSphere API operation components to perform a unique Boomi AtomSphere API operation.

## Connection tab 

**WSDL URL**    
Location of the SOAP API service’s WSDL. This should always be https://api.boomi.com/api/soap/v1/{accountID}?wsdl where accountID is your Account ID.

**Authentication Type**
The type of authentication to use, either `Password` or `API Token`. Set the appropriate value below. Ignore the other type of authentication prompt.

**Username**    
The email address of the user who logged into Boomi Integration.

**Password** - 
The password used to log into Boomi Integration.

**API Token** - 
The API Token used for authentication on public and partner API calls.

Generate API Tokens on your user account for use in the AtomSphere API connection by navigating to the **Settings** \> **User Information** \> **AtomSphere API Tokens** page.



:::note

The connector automatically handles the HTTPS certificate. You do not need to manually import a certificate component.

:::

## Test Connection

You can test your connection settings before you use or save the connection in a process. The Test Connection ensures that your specified settings are correct, valid, and accessible. If the test connection is successful, you can save the connection. Otherwise, review and correct any incorrect settings, then test again.


:::info Attention

You can only run the Test Connection against containers associated with your account (local Atoms, Molecules, and Atom Clouds).

:::