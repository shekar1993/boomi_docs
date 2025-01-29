# Adding an internal authentication source to an API 

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-4e459107-471b-4f66-81fd-1e03ab148b73"/>
</head>


When an API component is deployed to an environment without an API Gateway, it defaults to Atom controlled authentication on the **Configure APIs and Applications** \> **Deployed APIs** page. Configuring the authentication allows the API to be restricted by internal role.

## Before you begin

1.  Create an internal role. This feature is no longer available to new accounts
2.  In Integration, [associate the internal role with a web service API user.](/docs/Atomsphere/API%20Management/Topics/t-atm-Associating_web_service_API_users_with_API_roles_e7005f50-2264-4e3f-8327-2116b5c79d59.md)

## Procedure

1.  On the Deployed APIs page, navigate to the Deployed API that you want to specify an internal authentication source for.

    :::info 
    
    Only APIs that are deployed to an environment that does not contains an API Gateway can have internal authentication specified. These deployed APIs have default text that reads **Atom Controlled** in the Authentication column meaning that the API inherits its authentication based on the security set on the Atom within  Integration.

    :::

2.  Click on the text in the Authentication column.

    The Authentication Information page opens.

3.  **Optional:** Expand the **Restrictions by Role** section and click **Add a Restriction**.

4.  **Optional:** In the Restrict API Access dialog, select the appropriate internal role from the list and click **Finish**.

5.  Click **Save**.