# Laserfiche - Partner connection 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-3c000c74-10cc-4093-8aca-22a579a2cc49"/>
</head>


The Laserfiche - Partner connection represents and contains all the information you need to connect to a Laserfiche repository. If you have multiple Laserfiche accounts, use a separate connection for each one. For Laserfiche Cloud accounts, if you have multiple repositories connected to an account, they can share the same connection and the specific repository will be selected in the operation. For Laserfiche self-hosted installations, you can only have one repository per connection.

## Connection tab 

**For Laserfiche Cloud**

The Laserfiche Cloud connection uses a Service Principal Key and a Base-64 Encoded Access Key.



**Service Principal Key**
:   Create the Service Principal Key by creating a Boomi-specific Service Principal user in your Laserfiche Account Administration. Grant this user the appropriate access rights in Laserfiche to act on behalf of the Laserfiche connector. Open the Boomi Service Principal user you created, and click **Create Service Principal Keys**.

:::info Important
 
Ensure you save this key as you will not be able to view this key again in Laserfiche.

:::

**Base-64 Encoded Access Key**
:   Create the Base-64 Encoded Access Key in the Laserfiche Developer Console. First, create a Boomi app by creating a service application and selecting the Service Principal user as the Service Account. Then, in the Boomi app you created, navigate to the Authentication tab, and click **Create key** next to Access Keys. Finally, download the key as a base-64 string and copy the key from there.

**For Laserfiche Self-Hosted Installations**



**Base URL**
:   The base URL for your Laserfiche API, for example, `https://ServerName/LFRepositoryAPI`

**Repository ID**
:   The name of your Laserfiche repository

**Username**
:   The username of an account that has the appropriate access rights to the Laserfiche repository to make changes on behalf of Boomi

**Password**
:   The password for the above account

## Test Connection

You can test your connection settings before you use or save the connection in a process. The Test Connection ensures that your specified settings are correct, valid, and accessible. If the test connection is successful, you can save the connection. Otherwise, review and correct any incorrect settings, then test again.

:::info Attention

You can only run the **Test Connection** against containers associated with your account (local Atoms, Molecules, and Atom Clouds).

:::