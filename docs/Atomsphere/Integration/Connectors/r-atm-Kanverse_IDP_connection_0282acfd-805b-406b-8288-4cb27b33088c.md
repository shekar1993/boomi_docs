# Kanverse IDP - Partner connection 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-0282acfd-805b-406b-8288-4cb27b33088c"/>
</head>


The Kanverse IDP – Partner connection represents and contains all of the information that is needed to connect your account to the Boomi Enterprise Platform. If you have multiple Kanverse accounts, use a separate connection for each and configure the token accordingly. You can pair a single connection with different Kanverse IDP operations to perform a unique action against a Kanverse account.

## Connection tab

The Kanverse IDP – Partner connection has the following fields that are required for configuration.

 


**URL**      
The base URL of Kanverse with which you want to connect.

**Authentication Type**   
There are two types of authentication to choose from in the drop-down list. The connector configuration dialog changes based on your selection. **Basic** authentication requires a Username and Password. **API Key** authentication requires an API Key to be entered.

**Username**   
\(Basic authentication only\) - The username of the user that has access to Kanverse.

**Password**   
\(Basic authentication only\) - The password of the user that has access to Kanverse.

**API Key**   
\(API Key authentication only\) - The API Key that connects to Kanverse.

**Subscriber Id**   
This is a mandatory field. Enter your Kanverse subscription Id. This field cannot be blank.

## Test Connection

You can test your connection settings before you use or save the connection in a process. The Test Connection ensures that your specified settings are correct, valid, and accessible. If the test connection is successful, you can save the connection. Otherwise, review and correct any incorrect settings, then test again.

:::info Attention

You can only run the **Test Connection** against containers associated with your account (local Atoms, Molecules, and Atom Clouds).

:::