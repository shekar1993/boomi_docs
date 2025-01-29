import TestConnection from './_TestCon.md'

# Magento connection 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-4a579ae9-67e4-477f-865a-8aae368b5eb5"/>
</head>


The Magento connection contains the information for a single installation and the services to which that installation has access including sign-in credentials.

## Connection tab 

If you use multiple installations, you need a separate connection component for each.

Token-based authentication

The connector uses token-based authentication by taking the **Username**, **Password**, and **User Type** provided in the connection, sending a request to the Magento server to retrieve a token, and uses the token to authenticate each operation request in your Magento store.

:::note

Boomi does not support the Integration token type.

:::

**Store Base URL** - 
 Enter the base URL assigned to your storefront, for example `http://www.yourdomain.com` and `https://www.yourdomain.com`.

:::note

Based on your Magento instances, you may find that you need to use `https` for one instance, and `http` for another.

:::

**Username**    
 Enter the administrator or customer user name for authentication. The user name you provide is used with the password to request an access token from Magento to establish a connection with your Magento store.

**Password** - 
 Enter the Magento password for authentication. It uses the password with the user name to request an access token from Magento to establish a connection with your Magento store.

**User Type** - 
 Select either **Administrator** or **Customer**. It does not support **Guest**.

<TestConnection />