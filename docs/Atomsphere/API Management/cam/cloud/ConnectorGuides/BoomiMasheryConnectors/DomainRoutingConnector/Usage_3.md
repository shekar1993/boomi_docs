---
sidebar_position: 2
---

# Usage

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-2001b6a5-c433-4d3c-9e95-6e3914195e03"/>
</head>

- Create public endpoint address that matches with incoming request URL path, for example: `https://api.acme.com/{id}/v1/` or `https://api.acme.com/v2/{url}`.

- Configure pre-inputs endpoint domain pattern that will be used to transform target endpoint domain using value in the incoming request URL path, for example: www.{id}.com/v1/ or {url}/v2/.

Sample example

|**Public Endpoint Address Pattern** |**Incoming Request URL** |**Pre-input Configured Endpoint Address Pattern** |**Transformed Target Endpoint Address** |
| ----- | --- | --- | --- |
|`https://api.acme.com/{id}/v1/`|`https://api.acme.com/telemundo/v1/`|`www.{id}.com/v1/|www.telemundo.com/v1/`|
|`https://api.acme.com/tve/{id}`|`https://api.acme.com/tve/oxygen`|serial-{id}.apps.acme.com|serial-oxygen.apps.acme.com|
|stage-api.acme.com/tve/{id}|stage-api.acme.com/tve/sprout|stage-serial-{id}.apps.acme.com|stage-serial-sprout.apps.acme.com|
|uat-api.acme.com/tve/{id}|uat-api.acme.com/tve/acmeverso|uat-serial-{id}.apps.acme.com|uat-serial-acmeverso.apps.acme.com|
|uat-api.acme.com/tve/{url}|uat-api.acme.com/tve/petstore.swagger.io |`https://{url}/tve/v2/`|petstore.swagger.io/tve/v2/ |

