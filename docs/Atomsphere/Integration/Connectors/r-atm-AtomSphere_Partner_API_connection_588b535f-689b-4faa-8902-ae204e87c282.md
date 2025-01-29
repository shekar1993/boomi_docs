# Boomi AtomSphere Partner API connection 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-588b535f-689b-4faa-8902-ae204e87c282"/>
</head>


The AtomSphere Partner API connection represents a single Integration user.

You can pair a single connection component with different AtomSphere Partner API operation components to perform a unique AtomSphere Partner API operation.

## **Connection** tab 

**WSDL URL**    
Location of the SOAP Partner API service’s WSDL. The URL is always https://api.boomi.com/partner/api/soap/v1/{accountID}?wsdl where accountID is your Account ID.

**Username**    
The email address of the user name logged into Integration.

**Password**    
The password used to log into Integration.

**API Token**     
The API Token used for authentication on public and partner API calls.

Generate API Tokens on your user account for use in the Boomi AtomSphere Partner API connection by navigating to the **Setup \> Boomi AtomSphere API Tokens** page.


:::note

The connector automatically handles the HTTPS certificate. You do not need to manually import a certificate component.

:::

## Test Connection

You can test your connection settings before you use or save the connection in a process. The Test Connection ensures that your specified settings are correct, valid, and accessible. If the test connection is successful, you can save the connection. Otherwise, review and correct any incorrect settings, then test again.


:::info Attention

You can only run the Test Connection against containers associated with your account (local Atoms, Molecules, and Atom Clouds).

:::