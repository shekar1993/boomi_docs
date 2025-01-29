---
sidebar_position: 1
---

# Security Features

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-916c18c2-1434-4166-9977-e094cbf3bbaf"/>
</head>

Boomi Cloud API Management - Local Edition provides many security features. Some of the features are listed as follows:

- Google Distroless (shell-less, no pkg manager) images and rootless containers.

- Debug or Ephemeral containers.

- No privilege escalation.

- Any user, any group permissions.

- File system inside a container is locked.

- Only public ports are exposed outside of the cluster.

- All sensitive information is externalized as user created secrets.

- Sensitive information logged by application are masked.

- No secret information is provided in values or edited into templates.

- Secrets are not injected as environment variables.

- Optionally encrypt sensitive information in secrets.
