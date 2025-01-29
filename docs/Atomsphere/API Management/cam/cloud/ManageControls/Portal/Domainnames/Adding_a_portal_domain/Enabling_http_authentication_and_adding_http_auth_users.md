---
sidebar_position: 2
---

# Enabling HTTP Authentication and adding HTTP Auth Users

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-2d273854-bf15-4286-85a2-c51d318fcafb"/>
</head>

When the HTTP authentication method for a domain is enabled, you must provide a valid username and password while accessing the domain. 

## Procedure

To enable HTTP Authentication and add HTTP Auth Users:

1. On the **Domain Names** page, click **Add Domain**. 

   The **Add Portal Domain Name** page is displayed. 

2. Select the **Enable HTTP Authentication** check box. 

   The fields associated with HTTP authentication are displayed. 

3. Enter the authentication realm value. 

4. Enter the message to be displayed when access to the domain is denied. 

5. Click **Save**. 

   The **Manage HTTP Auth Users** page is displayed. 

   :::note
   
   You can add users who can access the domain by creating sets of user names and passwords. The user must use these credentials to be able to access the domain.

   ::: 

6. Enter the user name and password. 

7. Click **Add User**. The newly added user is displayed on the **Manage HTTP Auth Users** page. 

8. Click **Done**. 

   The **Domain Names** page is displayed. The **HTTP Auth** column displays a Tick mark (![](../../../../Images/tick_mark.jpg)) and the **HTTP Users** link is displayed on the **Domain Names** page.

   :::note
   
   To add, modify, or remove the HTTP Auth users, click **HTTP Users**. 

   ::::
