# Replacing your Salesforce password with a password and security token 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-820257f1-fa52-453c-afb6-8075c9aabd84"/>
</head>


By replacing your Salesforce password with a combination of your password and a security token, you can access Salesforce in Boomi Integration.


## About this task

To access Salesforce in Boomi Integration, replace your current password with a combination of your password and a security token.

## Procedure

1.  Log into Salesforce via the browser to request your security token.

2.  In Salesforce, reset your security token for either your regular Salesforce account, or your Salesforce developer account.

    This triggers an email containing your security token.

3.  Select and copy the token from the email.

4.  In Integration, replace your Salesforce password with combination of the password and the security token. For example, if your password is "MyPassword" and your security token is "XXXXXX", you would enter "MyPasswordXXXXXX" in the Password field.