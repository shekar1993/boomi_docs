# Creating a Boomi DataHub connection 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-db91834c-d939-42d5-99ad-e04d17cb740e"/>
</head>


You can create a connection for a single Boomi DataHub repository using your credentials and Boomi Enterprise Platform permissions. If you have multiple repositories, create a separate connection for each repository.

You can use the same connection to perform different operations in the repository.  

## Authentication

You can authenticate to the repository using the My Hub Authentication Token, which provides administrator privileges. The Boomi DataHub connector does not support JSON Web Token (JWT) authentication.

## Connecting to a repository

1. In the Integration build canvas > Connector menu, select **Boomi Data Hub (Tech Preview)**.
2. Click the plus icon next to **Connection**.
3. Select the Boomi Hub **Cloud Name** that hosts the repository you want to connect to. Boomi maintains regional Hub Clouds worldwide. To find the name of your cloud:
   1. Navigate to **Integration** > **Manage** > **Atom Management** and select the repository name in the list of Atom Clouds.
   2. Look at the **Host Name** for the cloud hosting the repository.

   If you are using a custom cloud:
   1. Navigate to **Integration** > **Manage** > **Atom Management** and select the repository name from the list of Atom Clouds.
   2. Select **Shared Web Server** to view the **Base URL for API Request**.
   3. Enter the URL in the **Custom Cloud** field in the following format, appending /mdm to the path: `https://cloud address[:port]/mdm/`
4. Enter your Hub username as it appears on the Repository page. To find your username, navigate to **Boomi DataHub** > **Repositories** > select the repository > select the **Configure** tab.
5. In the **Configure** tab, copy the **My Hub Authentication Token**.
6. In the Connection page of the Hub connector, select **Click to Set** and paste it into the **Token** field. 
7. Click **Apply**. 
8. Click **Save and Close**.

:::note

The connector automatically handles the HTTPS certificate. Therefore, you do not need to import a certificate component manually.

:::