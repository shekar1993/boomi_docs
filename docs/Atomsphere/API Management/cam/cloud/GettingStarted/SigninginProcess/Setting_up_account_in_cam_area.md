---
sidebar_position: 1
---

# Setting up an Account in Boomi Cloud API Management Area

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-4680ed1c-6319-4912-bed1-b5731fa7cd07"/>
</head>

## Before you begin

### Procedure

To use Boomi Cloud API Management, you must complete the following steps before signing in to the API Control Center:

- Contact the [Boomi - Support Center](https://community.boomi.com/s/support) to register your account in the Boomi Cloud API Management area. 

- Perform the following steps before getting started with the API Control Center:

    - Point public domain to Boomi Cloud APIM Area: 
    
      - `api.mydomain.com` CNAME `mydomain.api.mashery.com`
    
    - Use `api.mydomain.com` to configure your public endpoints.

    - Share Load Balancer Front End Certificate for HTTPs/Secured traffic via the support case.

    - For IP Whitelisting, use all CICD blocks. For more information, see [https://support.mashery.com/docs/read/proxy_information/security_options](https://support.mashery.com/docs/read/proxy_information/security_options)

    - Provide an email address to send notifications for Application and Package Key registration. 
    
      :::note 
    
      For whitelisting the email address, open a case with the Support team.

      :::
    - For requesting Mashery API Key for CICD | OAuth API | Reporting API:
        - Register Administrator via secure.mashery.com
        - Request API Key from that Admin account

    - For whitelisting Domains, contact the [Boomi - Support Center](https://community.boomi.com/s/support) team. You must submit the root domain to the support team, so that all subdomains can be used, e.g. `mashery.com` vs `api.mashery.com`, `test.api.mashery.com`, etc.

    After successful registration, an area is created for the user in Boomi Cloud API Management. The user receives an email with Application registration details, a Member username, and a link to sign in to the API Control Center.

    :::info

    Each Boomi Cloud API Management user can manage APIs specific to only their designated area and cannot manage APIs of other areas.

    :::


:::note

- If you are a Boomi Cloud API Management user, log into the Boomi Cloud API Management API Control Center using the Boomi Okta SSO login. To learn more, see the the [Signing-in process for Boomi Cloud API Management Users](../../GettingStarted/SigninginProcess/Signing_in_process_for_cloud_api_management_users.md).

- If you are a Boomi Enterprise Platform user, log into the Boomi Enterprise Platform API Control Center using the Boomi IDP or customer IDP-enabled login. To learn more, see the [Signing-in process for Boomi Enterprise Platform Users](../../GettingStarted/SigninginProcess/Signing-in_process_for_platform_users.md).

:::

