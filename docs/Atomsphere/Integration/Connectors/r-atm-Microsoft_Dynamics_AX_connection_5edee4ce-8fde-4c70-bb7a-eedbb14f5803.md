# Microsoft Dynamics AX connection 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-5edee4ce-8fde-4c70-bb7a-eedbb14f5803"/>
</head>


The Microsoft Dynamics AX connection contains details about the location of the Application Integration Framework \(AIF\) web services.

An Internet Information Services \(IIS\) server hosts the services as part of the Microsoft Dynamics AX AIF installation process. Each service has a URL which is similar to this: http://localhost/MicrosoftDynamicsAXAif50/salesorderservice.svc.

It removes the service name \(salesorderservice.svc in this example\) from the connection URL and than adds it to the operation. This enables sharing one connection for multiple operations.

## **Connection** tab 



**WSDL URL** - 
 Application Integration Framework \(AIF\)

Fully qualified base URL of the web services that listen on the IIS server. The URL does not include the service name, for example: http://localhost/MicrosoftDynamicsAXAif50.

**User** - 
  The Windows domain user with access to IIS-hosted web services at the previously mentioned URL.

**Password** - 
 Password for the user

The web services authentication process is as follows:

1.  The connector sends a request to the IIS that hosts the AIF services. IIS retrieves the user credentials depending on the authentication mechanism specified in the service configuration \(for example, NTLM\). IIS then tries to map the security credentials onto a valid domain user. By default, Microsoft Dynamics AX configures WCF to use the `basicHttpBinding` binding with message security, so the message SOAP header contains the user credentials. Finally, IIS authenticates the user as valid in Active Directory.

2.  Then, it passes the request to AIF that performs further authentication by verifying that the user:

    1.  Is a valid Microsoft Dynamics AX user

    2.  Has access to the service through the appropriate security key

3.  After AIF determines that the user has access to the service, it processes the message. At run time, standard AIF security ensures that the user has access to the data exposed by the service.


For NTLM authentication, the machine where you installed the Atom needs to access the exposed IIS services. By default the Atom service signs in as *Local System Account*. If the Local System Account does not have access, change the service to sign in as an account with access to the shared directory. Make the access change in Windows in the Atom service’s **Properties** dialog on the **Log On** tab.

In Microsoft Dynamics AX 2009, the WCF services for the AIF documents are secured by security keys. The Microsoft Dynamics AX administrator must explicitly grant users and groups permissions to the appropriate security key for users to access the service.