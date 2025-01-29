# Adding an authentication source to an API 

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-FA8FB725-08B8-4A84-903F-C984ED68E92B"/>
</head>


Add an authentication source on the **Configure APIs and Applications** \> **Deployed APIs** page.

## Before you begin

1.  In Integration, [deploy an API Service or Proxy component.](/docs/Atomsphere/Integration/Deployment/t-atm-Creating_and_deploying_packages_from_PackageManager_a61138d5-8224-42df-9f93-45f4ac96813d.md)
2.  [Add an Authentication Source.](/docs/Atomsphere/API%20Management/Topics/t-api-Adding_an_Authentication_Source_8502fa1e-a21d-4078-88f6-f03a6a7ddc0e.md)

## Procedure

1.  On the Deployed APIs page, navigate to the Deployed API that you want to specify an authentication source for.

    For APIs that are deployed to an environment that contains an API Gateway, the Authentication column has default text that reads **API Key Controlled** meaning that the API inherits its authentication from the API Key defined in the Application's subscriptions for that API Gateway on the **Configure APIs and Applications** \> **Applications** page. Each subscription can have its own plan associated with it, allowing specific users to be given specific API Keys for customized access.

    For APIs that are deployed to an environment that does not contain an API Gateway, the Authentication column has default text that reads **Atom Controlled** meaning that the API inherits its authentication based on the security set on the Atom within Integration.

4.  Click on the text in the Authentication column.

    The Authentication Information page opens.

5.  Specify **Authentication Provider** as the **Authentication Type**.

6.  In the **Authentication Source** field, specify the source from the drop-down list.

7.  **Optional:** Expand the **Restrictions by Role** section, click **Add a Restriction**, and select the appropriate internal role from the list. Then, click **Finish**.

    To access a deployed API that has restricted roles, a user needs one of their roles to match the restricted role set in the **Restrictions by Role** section.

8.  Click **Save**.

    :::note
    
    If the authentication source is JWT, a notification displays with the redirect URI to add to your IDP for API execution using JWT in the Developer Portal.

    :::