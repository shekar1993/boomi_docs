import TestConnection from './_TestCon.md'

# Microsoft Dynamics CRM connection 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-09f80e96-5377-4c70-a761-62e3292defee"/>
</head>


The Microsoft Dynamics CRM connection represents a single Microsoft Dynamics CRM organization including sign-in credentials.

If you have multiple organizations or sandbox instances, use a separate connection for each. You can pair a single connection with different Microsoft Dynamics CRM operations to perform a unique action against a Microsoft Dynamics CRM organization.

## Supported authentication and protocols 

This connector supports the following authentication and protocols:

-   Authentication for OCP-managed \(Online Commerce Platform\) accounts, the subscription and billing platform used by Microsoft Office 365.
-   Windows Live ID, the single sign-on web service.
-   Online federation authentication policies, but not Microsoft Active Directory Federation Services \(ADFS or AD FS\).

## Microsoft Dynamics CRM supported authentication models 

Microsoft Dynamics CRM supports three authentication models:

-   Windows Authentication.
-   Claims-based Authentication for internal access to an untrusted domain.
-   Claims-based Authentication for external access to an untrusted domain.

:::note

This connector does not support the communication protocols for Claims-based Authentication.

:::

This connector leverages Windows Authentication, which requires you to install the Atom on a computer in a trusted domain by the CRM host. Windows Authentication leverages SPNEGO and NTLM to authenticate with the CRM installation. You can determine the URLs for access by navigating to Developer Resources from Settings in the MS Dynamics CRM console.

Connection to an Internet Facing Deployment \(IFD\) requires using Claims-based Authentication. Claims-based Authentication leverages Kerberbos for internal access between untrusted domains and a sign-in protocol for external access to untrusted domains.

## Connection tab 
 
**Version** - 
  The version of Microsoft Dynamics CRM to which you connect:

 -   Online 2011 up to 2017 \(v8.2.2.0160\)
 -   On-Premise 2011/2013/2015 \(and for 2016\)
 -   Online 4.0
 -   On-Premise 4.0

**Server** - 
 The Microsoft Dynamics CRM Online host name. For on-premise versions that are SSL protected, the server name can be in a format like `https://crm.boomi.com:8090/`.

**Port**   
 For on-premise versions, the host port for the Microsoft Dynamics CRM Server. \(If you selected an online version, you can leave this blank.\)

**Organization Name**   
  The unique organization name differs depending on the version:

 -   For Online 4.0 version — after you sign in, you can find the organization name in **Settings \> Customization \> Download Web Service Description Files**.
 -   For Online 2011, 2013, and 2015 versions — if you log in as `https://uniquename.crm.dynamics.com`, then the organization name is uniquename.
 -   For On-Premise 2011, 2013, and 2015 versions — if you log in as `http://hostname/uniquename/`, then the organization name is the uniquename.

**User name** - 
  The user name differs depending on the version:

 -   For on-premise versions, enter the user name of the domain, such as domain\\user for signing into the Microsoft Dynamics CRM server.
 -   For online versions, enter the Microsoft account’s user name.

**Password** - 
 The password for signing into the Microsoft Dynamics CRM server. For online versions, enter the Microsoft account’s password.

<TestConnection />