---
sidebar_position: 2
---

# Generating Package Key Secrets when High Security Secret Management (HSSM) is Enabled

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-5c1682f8-145b-4d28-9253-a0b216866e41"/>
</head>

High Security Secret Management (HSSM) is only available for Boomi Cloud™ API Management - Local Edition 4.0 and above. 

When HSSM is enabled on the area, the Administrator will need to keep a note of the package key secret generated for the developers, as the secret will be shown only once on the screen. After that, if the Administrator accesses the screen again, the secret is no longer shown in the **Update Secret** field.

If the developer forgets or loses the secret, then a new secret will have to generated. For secret regeneration, the Administrator can create a new secret in the field and provide the secret to the developer.

Or, the Administrator can email a link to the developer for secret regeneration using the **Or click here to have developer regenerate secret on portal** link, through which the developer can regenerate the secret for the specific package key of the specific endpoint on the Portal.

The developer will need to save the secret the first time, as the secret won't be shown again.
