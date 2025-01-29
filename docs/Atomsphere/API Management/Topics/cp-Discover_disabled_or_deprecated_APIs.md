# Discover disabled or deprecated APIs

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-a09a09b8-3a15-4787-b336-54f1b9b558cc"/>
</head>

By default, the API Control Plane agent will not include disabled or deprecated APIs during API discovery. As these APIs cannot be used for new subscriptions, we assume that most users have no use for them in API Control Plane. However, it is possible to manually add configuration parameters to the agent, to include these APIs.

You can add the following environment variables, to include disabled or deprecated APIs:

- `gateway.includeDisabledApis=true`

- `gateway.includeDeprecatedApis=true`

If your agent is configured via a config file, you may instead add these lines to the config file, as needed:

```
includeDisabledApis: true
includeDeprecatedApis: true

```