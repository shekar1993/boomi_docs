# Configuring a Boomi Enterprise Platform user in the identity provider

<head>
  <meta name="guidename" content="Platform"/>
  <meta name="context" content="GUID-d87b6657-b4f8-45bd-822f-2222e09916db"/>
</head>

Configure a Boomi Enterprise Platform user in OpenAM.

## About this task

Although OpenAM is the identity provider in this task, every identity provider is different.

## Procedure

1. Log into the identity provider \(OpenAM\) as an administrator.

2. Locate the user's configuration.

3. Enter the user's **Federation ID**. This is the Federation ID setting that you added in the Add/Maintain User Roles dialog in **Settings** \> **Account Information and Setup** on the **User Management** tab.

    In the example illustrating the addition of the as a service provider to OpenAM, the user’s email address was designated as the federation ID.

4. Enter the user's **Default Relay State URL**. This is the platform URL to which the user is to be redirected upon single sign-on from the identity provider.

    - To specify redirection to the service, enter `https://platform.boomi.com/AtomSphere.html#build;accountId=<accountID>`, where accountID is the ID of the platform account.

    - To specify redirection to the service, enter `https://platform.boomi.com/MdmSphere.html#mdm_repositories;accountId=<accountID>`, where accountID is the ID of the platform account.

    - To specify redirection to the service, enter `https://platform.boomi.com/ApiSphere.html#api_dashboard;accountId=<accountID>`, where accountID is the ID of the platform account.

5. Save the user's information.
