import TestConnection from './_TestCon.md'

# SugarCRM REST connection 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-e7e7fc3d-4a3c-4345-b4c7-edcd6f0eaa41"/>
</head>


The SugarCRM connection contains the information for a single installation and the services to which that installation has access, including login credentials.

If you use multiple installations, you need a separate connection component for each.

Because of a change made by SugarCRM to their certificates, you may receive a message when attempting to connect that the certificate path cannot be found. Your connection may not work when running an Atom on an older Java version \(earlier than JRE 1.8.0\_91\). If this happens, you need to upgrade your Atom.

## Connection tab 

The connector uses OAuth 2.0 Resource Owner Password Credentials Grant flow type for username and password authentication.


  

**Base URL** - 
  Enter the URL that identifies where the module is available and its version, for example `https://dellboomiisvpr.sugarondemand.com/rest/v10/`.

**Client Id** - 
 The client ID obtained from SugarCRM \(Admin \> OAuth Keys\).

**Client Secret** - 
  The client secret obtained from SugarCRM.

**Username** - 
 Enter the user name required to authenticate and log into SugarCRM.

**Password** - 
 Enter the password for your SugarCRM account.

 <TestConnection />