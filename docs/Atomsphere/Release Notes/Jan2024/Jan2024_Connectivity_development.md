# Connectivity development 

<head>
  <meta name="guidename" content="Release Notes"/>
  <meta name="context" content="GUID-bf149fdf-f69d-4f6f-8c0a-3c0c0a1a3ea9"/>
</head>

## Connector SDK
**We released the following:**

- Version 2.16.1 of the SDK. For more information, see the [SDK changelog](https://developer.boomi.com/docs/Changelog/Changelog_connector_sdk).

**We added these features:**
- Connector developers with the required privileges can now upload a new icon for private, public, and hidden connectors. Developers must have **DEVELOPER** and **API** privileges for private connectors in their own accounts. For all other connectors, developers need the **CONNECTOR_REVIEW**, **DEVELOPER**, and **API** privileges. The icon file cannot not be larger than 100KB. (CON-8680)

- Connector developers can now retrieve the .svg icon file for a connector. Developers must have DEVELOPER privileges for private connectors in their own accounts. (CON-6485)

- Connector developers can now delete the .svg icon file for a connector. Developers must have DEVELOPER privileges for private connectors in their own accounts. (CON-8349)


**We fixed this issue:**
- Resolved an error where the OpenAPI connector wasn’t able to browse V3 specs on public clouds with high security policies (CON-8705). 

