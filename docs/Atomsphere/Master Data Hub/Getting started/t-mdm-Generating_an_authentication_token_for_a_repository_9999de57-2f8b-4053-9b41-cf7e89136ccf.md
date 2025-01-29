# Generating an authentication token for a repository 

<head>
  <meta name="guidename" content="DataHub"/>
  <meta name="context" content="GUID-9999de57-2f8b-4053-9b41-cf7e89136ccf"/>
</head>


Each repository has a unique authentication token used for requests to the Repository API. Boomi DataHub automatically creates an authentication token for a repository when you create the repository. You have the option to generate a new token on the **Configure** tab.

## Before you begin

All integrations between a source system and a repository submit requests to the Repository API. With Basic authentication, you must authenticate with the repository authentication token. Each repository has a unique authentication token. Boomi DataHub automatically creates an authentication token for a repository when you create the repository.

You can obtain the current username and authentication token from the repository in Boomi DataHub. You also have the option to generate a new token in the **Configure** tab.

You must have the following privileges:

- **MDM - View Repositories**
- **MDM - Repository Management**


## Procedure

1.  In the **Repositories** page, click the repository name.

2.  Select the **Configure** tab, and click **Generate New**.

    :::caution

    A confirmation dialog appears warning that generating a new authentication token will nullify the old authentication token and may break any existing integration processes that depend on it (including [ Integration](/docs/Atomsphere/Integration/Getting%20started/c-atm-Integration_and_iPaaS_257fcf2c-7e93-48d0-be67-bd53fb444930.md) processes utilizing the [ Boomi DataHub connector](/docs/Atomsphere/Integration/Connectors/r-atm-MDM_connector_ff690a6f-288d-44b3-96fb-e81afb046703.md)\).

    :::

3.  Click **OK** in the confirmation dialog to confirm the request.

    You return to the Configure tab. The **My Authentication Token** field updates to show the new authentication token for your account.


## Next steps

After the new authentication token appears, you can click **![icon](../Images/Common/main-ic-two-documents_832db596-4895-4b34-943f-079de49b9525.jpg) Copy to Clipboard** to copy the token to the system clipboard and then paste the token where needed in your integration tool development environment — for example, a Boomi DataHub connection component for connecting to the repository from a Integration process.