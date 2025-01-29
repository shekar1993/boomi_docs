#  API Management November 2024 Release Notes

<head>
  <meta name="guidename" content="Release Notes"/>
  <meta name="context" content="GUID-d295c9ff-5493-4f31-a431-adadb6d45f86"/>
</head>

**We added these features:**

- You can now configure Mutual TLS with Client Certificate Authentication for a Gateway or on specific deployed APIs. With this added level of security, the client and server validate each other using public and private keys for authentication. You can also pass the client certificate as a header value. Existing Platform certificate management tooling is leveraged with this feature to simplify configuration. (APIM-10105)

  To learn more about this feature, see [Client Certificate Authentication](/docs/Atomsphere/API%20Management/Topics/api-client_cert_auth.md).

- Added the following enhancements to roles and privileges to allow you to assign granular access within API Management:
  - Added the `API Manager - APIs and Applications` role. This role is intended for users that manage API deployments, and gives read and write access to APIs and Applications. (APIM-14781)
  -  Added the `API Management - Gateway` privilege. This gives a user access to the Gateways section in API Management and the ability to configure Gateways. (APIM-14765)

  To learn more about this feature, see [API Management Roles and Privileges](/docs/Atomsphere/API%20Management/Topics/api_apim_roles_and_privileges.md).

- Added the following container properties to allow configuration of TLS ciphers and protocols in a Developer Portal. (APIM-14721)
  - `com.boomi.container.apigateway.devportal.includedCipherSuites`
  - `com.boomi.container.apigateway.devportal.includedProtocols`
  - `com.boomi.container.apigateway.devportal.excludedCipherSuites`
  - `com.boomi.container.apigateway.devportal.excludedProtocols`

  To learn more about this feature, see [Container properties](/docs/Atomsphere/API%20Management/Topics/api-Container_properties_7db1ee5a-03b9-4d07-931b-4e863e7cc6de.md).

- API Metrics is now enabled for all accounts with any API Management tier, allowing you to use platform APIs for querying captured metrics. Additionally, API Publish and API Management customers have access to the API Dashboard for a graphical view of the health and performance of their APIs. (APIM-14834)

  To learn more about this feature, see [API Metrics](/docs/Atomsphere/API%20Management/Topics/api-metrics_0e0f3adb-2fcb-4af5-bbd1-aee58d2e713f.md).

**We fixed these issues:**

- The API components screen was allowing users to save before the page fully loaded, causing API endpoints to get lost. (APIM-14113)
- In June 2024, there was an issue that caused the Gateway to fail parsing query parameters from a URL that contained certain characters. As a workaround to this issue, users may have manually changed these parameters, but it will cause an issue  with  the November release. This is because the November release contains an update to the `http-client` library in the WSS connector that caused query parameters with quotes `”`  in the values to be removed. If you made changes as a workaround to the June 2024 issue, they should be reverted. (APIM-14539)
- Fixed a defect where the original authorization header for an API Proxy component was passing to the target endpoint even though the endpoint authentication was set to `None`. (APIM-11512)

:::note

Users who depend on the previous behavior should set the authentication type on the endpoint to `Pass-Through`. With this setting, the original authorization header is passed to the target endpoint. 

:::