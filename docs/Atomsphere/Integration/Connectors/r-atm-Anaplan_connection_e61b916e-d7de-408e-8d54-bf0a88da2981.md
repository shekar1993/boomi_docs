


# Anaplan connection 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-e61b916e-d7de-408e-8d54-bf0a88da2981"/>
</head>


The Anaplan connection represents and contains all of the information that is needed to connect and log into a single Anaplan account associated with your workspace.

If you have multiple accounts, you need a separate connection for each one. You can pair a single connection with different operations to perform a unique action against an Anaplan instance.

## Connection tab 

The Anaplan connector supports both basic authentication `(<username>:<encodedpassword>)` and client certificate authentication.

The following fields appear on the **Connection** tab.


**URL** - 
 The URL for the Anaplan API service endpoint, including the API major and minor version numbers.

 -   If you are using v1.3 of the Anaplan API, accept the default https://api.anaplan.com/1/3
 -   If you are using v2.0 of the Anaplan API, enter https://api.anaplan.com/2/0

**Authentication Type** - 
Select the supported authentication types for the connection, either **Basic** or **Client Certificate**.
 -   When you select **Basic**, enter a **Username**, **Password**, and **Workspace ID**.
    -   When you select **Client Certificate**, enter a **Workspace ID**, select a **Certificate**, and enter the **Private Key Alias**.

**Username** - 
The email address of your Anaplan account. For example, firstName.lastName@your-domain.com.

**Password** - 
 The password for your Anaplan account.

**Workspace ID** - 
 An Anaplan workspace stores all of the models belonging to your company or department, and has its own set of users that can contain any number of models. Specify the workspace ID for the operation. In Anaplan, you can find your workspace ID in a model by looking in the URL of each model and by choosing **Help** \> **About**.

**Certificate** - 
 Available when you select the Client Certificate authentication type. Identifies the certificate used to verify your identity when sending requests to the endpoint. Obtain a certificate from a valid Certificate Authority supported by Anaplan, and use the certificate to create a public and private key. Finally, import the certificate into Boomi Integration. After creating the key and importing the certificate, you can select the certificate in this field.

**Private Key Alias** - 
Available when you select the Client Certificate authentication type. Identifies the alias of the private key certificate that you add to the Anaplan Tenant Administrator. Verify that the alias you enter in this field matches the entry in the Anaplan Tenant Administrator.

**Authorization Token URL** -
The endpoint address (URL) of the server authorizing the client, for example, https://auth.anaplan.com/token/authenticate. This URL corresponds to the same region as the specified Anaplan API service endpoint URL. For more information, contact your Anaplan administrator.

## Tracked properties

This connector has no predefined tracked properties. See the topic [Adding tracked fields to a connector operation](../Process%20building/t-atm-Adding_tracked_fields_to_a_connector_operation_f71821dd-95ee-4ebd-bfc9-3333262f56f6.md) to learn how to add a custom tracked field.