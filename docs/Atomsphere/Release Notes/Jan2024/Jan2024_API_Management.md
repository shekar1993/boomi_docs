#  API Management

<head>
  <meta name="guidename" content="Release Notes"/>
  <meta name="context" content="GUID-600ad298-192e-44fe-9116-529aed1622cd"/>
</head>

:::note

In preparation for the Gateway upgrade coming in early 2024, you must upgrade any gateways still running Java 8 to Java 11 as soon as possible.  See [Gateway Upgrade](<../../API Management/Topics/api-Upgrading_an_API_Gateway_to_Java_11_bdcbc1ee-9505-489c-a600-86fdb7b10c2f.md>) for more information.

:::

<!-- API Management features and fixes are not included in the runtime release. -->

**We added these features:**

- Expanded the styling options for the Developer Portal. The following options are available in the **Theme** section:
  - **Navigation Background Color**
  - **Navigation Link Text Color** 
  - **Navigation Selected Item Color**
  - **Navigation Heading Color**
  (APIM-9874)

  To learn more about this feature, see [Configuring your Developer Portal](/docs/Atomsphere/API%20Management/Topics/api-Configuring_your_Developer_Portal_9e8dd158-a92c-439d-a89f-41b0cd3f05b3.md).

- Added the **Background Image** option for Developer Portal **Themes**. (APIM-11254)

  To learn more about this feature, see [Configuring your Developer Portal](<../../API Management/Topics/api-Configuring_your_Developer_Portal_9e8dd158-a92c-439d-a89f-41b0cd3f05b3.md>).

- You can select the title, version, and basepath (where applicable) fields when importing an OpenAPI specification into an API service component. (APIM-11287)

  To learn more about this feature, see [Generating API endpoints in an API Service Component](<../../API Management/Topics/api-Generating_API_endpoints_in_an_API_Service_component_from_an_external_file.md>).

- Increased the character limit for the JSON input payload validation policy on a gateway from 4,000 to 12,000 characters. (APIM-11295)

  To learn more about this feature, see [Creating a DeployedApiPolicyRule](<../../API Management/Topics/api-Creating_deployedapipolicyrule_3c534f30-dba9-4222-8916-ed876716f46a.md>).

- Added the ability to configure the expiration time for Developer Portal logins. (APIM-11293)

  To learn more about this feature, see [Container properties](<../../API Management/Topics/api-Container_properties_7db1ee5a-03b9-4d07-931b-4e863e7cc6de.md>).

**We fixed these issues:**

- Updated the `sendChangesToAuthSource` [operation](<../../API Management/Topics/api-Send_Changes_to_Authentication_Source_6065a23c-310d-423f-95f0-02ff8c3d47fa.md>) to send Authentication Source changes to the Gateway instead of the Authentication Broker. (APIM-10709)
-  Changed the directory structure for event files from different nodes. If you have multi-node Gateways, Molecules, or Clouds where multiple nodes share a working data local storage directory, then each node will have a folder in `<local_dir>/events/<node_id>`. (APIM-11800)
- For API proxies, the Developer Portal wasn't displaying basic authentication in **Available Authorizations** if the API had basic authentication configured. (APIM-11634)
- New events were not displaying in the API dashboard. (APIM-11538)
- Updated the warning messages on the **Deployed APIs** page to accommodate environments that have multiple authentication types. (APIM-11694)
- Fixed an issue that was causing a Gateway to throw a ``JOSE header typ (type) at+jwt not allowed`` error. Patch 24.01.5 should be applied if you receive any errors regarding the value of the ``JOSE header typ``. (APIM-12334)


:::note

In the September release, we began the gradual roll out of API Metrics and Dashboard across all accounts. If you want to stay ahead of the curve, [enable it today](/docs/Atomsphere/API%20Management/Topics/r-api-Dashboard_d7c56437-c100-436f-b3e4-bde7a80d11be.md).

Adequate disk space is essential, as metrics typically consume approximately 1 KB per request daily. We cycle and remove files when they become redundant. You can tailor the following metrics settings:

 - **Maximum File Size**: Initially set at 1 GB, customize this to fit your specific needs.

 - **Event Rollover Time**: With the default set at six hours for Gateways and Atoms, you have the flexibility to extend this to 24 hours or even reduce it based on your preferences.

  - **404 Error Capture**: This feature, off by default, lets you record 404 errors within metrics data when activated. For a more comprehensive understanding, see [API Metrics](/docs/Atomsphere/API%20Management/Topics/api-metrics_0e0f3adb-2fcb-4af5-bbd1-aee58d2e713f.md).

:::