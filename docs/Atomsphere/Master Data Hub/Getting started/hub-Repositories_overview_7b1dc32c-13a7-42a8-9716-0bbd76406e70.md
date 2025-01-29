# Repositories overview 

<head>
  <meta name="guidename" content="DataHub"/>
  <meta name="context" content="GUID-7b1dc32c-13a7-42a8-9716-0bbd76406e70"/>
</head>

When you first open Boomi DataHub, you land on the Repositories page, where you [create repositories](/docs/Atomsphere/Master%20Data%20Hub/Getting%20started/t-mdm-Creating_a_repository_a495f9fb-2748-492b-a726-fb678645e7cd.md). Repositories are virtual containers that hold your master data, model, and source settings. The data in a repository is hosted in the Boomi Hub Cloud. By default, you can have up to three repositories. 

After you create repositories, sources, and models, you can deploy a model to a repository. Deploying a model allows Boomi DataHub to receive data from source systems and create golden records based on the data structure of the model. A repository can contain multiple deployed models. Read [Deployment](/docs/Atomsphere/Master%20Data%20Hub/Deployment/c-mdm-Deployment_0c9a9774-5e0a-404a-961f-aed993a6cf74.md) to learn more.

Boomi recommends that you create the following three repositories to minimize the risk of errors to live master data:

- Development repository - use this repository to establish and update deployed models and source settings with a small amount of data. It allows developers to safely experiment with new models and updates.

- Test repository - use this repository with a larger amount of data to test connections and ensure data flows correctly between golden records and sources.

- Production repository - use this repository to contain the actual, live master data that is accessed by data users for business decisions. 

Source systems integrate with the repository through API requests. All API requests must authenticate via Basic authentication or JSON Web Token (JWT) authentication. From Boomi DataHub’s Repositories page, you can [view the username and authentication token needed to construct those API requests](/docs/Atomsphere/Master%20Data%20Hub/Getting%20started/t-mdm-Viewing_the_username_and_authentication_token_84011460-6ee7-4e96-81a2-0469f2b9cc21.md) for a repository.

## Security

You can configure IP filtering and CORS settings for Hub Clouds to apply advanced security to your repositories and golden record data. 

### IP filtering

To set IP filtering:

1. Navigate to **Integration** > **Manage** and select the Hub cloud.
2. Select **Shared Web Server**.
3. In the **API Type** drop-down, select **Intermediate** or **Advanced**.
4. Select **User Management**.
5. Select the **Use IP Filtering** check box.

### CORS configurations

To set CORS configurations:

1. Navigate to **Integration** > **Manage** and select the Hub cloud.
2. Select **Shared Web Server**.
3. In the **API Type** drop-down, select **Advanced**.
4. Select **CORS Configuration**. 



#### Next steps: Read [Creating a repository](/docs/Atomsphere/Master%20Data%20Hub/Getting%20started/t-mdm-Creating_a_repository_a495f9fb-2748-492b-a726-fb678645e7cd.md)