# Single sign-on for Boomi DataHub

<head>
  <meta name="guidename" content="DataHub"/>
  <meta name="context" content="GUID-4ec62e5c-c71e-4380-9afb-78bf49a32878"/>
</head>

The Boomi Enterprise Platform supports single sign-on for Integration, Boomi DataHub, and Boomi API Management. The platform stores a single imported identity provider certificate per account for which single sign-on is enabled. If you initiate single sign-on in the identity provider, you are redirected to Integration by default. 

Your identify provider administrator can configure your single sign-on to instead redirect you to Boomi DataHub by setting the relay link (the setting name varies among identity providers) to #mdm_repository. For general information about single sign-on, refer the [ Single sign-on with SAML authentication](/docs/Atomsphere/Platform/c-atm-Single_sign-on_with_SAML_authentication_71c031d5-5912-4255-bb8e-61a129afabc1.md).