# Version 1.0

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-190f913e-26dc-4cd2-9016-61e2cf9f2402"/>
</head> 

## OpenProxy Specification

The key words “MUST”, “MUST NOT”, “REQUIRED”, “SHALL”, “SHALL NOT”, “SHOULD”, “SHOULD NOT”, “RECOMMENDED”, “NOT RECOMMENDED”, “MAY”, and “OPTIONAL” in this document are to be interpreted as described in [BCP 14](https://tools.ietf.org/html/bcp14) [[RFC2119]](https://spec.openapis.org/oas/v3.1.0#bib-RFC2119) [[RFC8174]](https://spec.openapis.org/oas/v3.1.0#bib-RFC8174) when, and only when, they appear in all capitals, as shown here.

## Definitions

### Media Types

Media type definitions are spread across several resources. The media type definitions SHOULD be in compliance with [[RFC6838]](https://spec.openapis.org/oas/v3.1.0#bib-RFC6838).

Some examples of possible media type definitions:


```
  text/plain; charset=utf-8
  application/json
  application/vnd.github+json
  application/vnd.github.v3+json
  application/vnd.github.v3.raw+json
  application/vnd.github.v3.text+json
  application/vnd.github.v3.html+json
  application/vnd.github.v3.full+json
  application/vnd.github.v3.diff
  application/vnd.github.v3.patch
```

## Specification

### Versions

The OpenProxy Specification is versioned using a major.minor.patch versioning scheme. The major.minor portion of the version string (for example 3.1) SHALL designate the OPS feature set. .patch versions address errors in, or provide clarifications to, this document, not the feature set. Tooling which supports OPS 1.0 SHOULD be compatible with all OPS 1.0.* versions. The patch version SHOULD NOT be considered by tooling, making no distinction between 1.1.0 and 1.1.1 for example.

Occasionally, non-backwards compatible changes may be made in minor versions of the OPS where impact is believed to be low relative to the benefit provided.

An OpenProxy document compatible with OPS 1.*.* contains a required versin field which designates the version of the OPS that it uses.

**Example**

```
version: 1.0
api:
  name: petstore
  version: 2.1
  displayName: Petstore                 # optional
  description: a simple petstore api    # optional
  type: REST
backend:
  url: https://internal.petstore.com
gateway:
  protocol: https
  path: /petstore
documentation:                          # optional
  url: https://somewhere.com/openapi
```
## Documentation

### Root

|Name|Type|Required|Description|
|---|---|---|---|
|version|String|yes|Version of Open Proxy Spec definition used by this file. Must be “1.0”.|
|api|Api|yes|basic information about this API|
|backend|Backend|yes|Info about the backend to which requests should be forwarded by the gateway|
|gateway|Gateway|yes|Info on how and where the API is accessible in the gateway|
|documentation|Documentation|no|Info on where to get documentation (OpenAPI file). Only required for external OpenAPI files, not if file is present in the same repository.|

### API

|Name|Type|Required|Description|
|---|---|---|---|
|name|String|yes|Technical name of this API.|
|version|String|yes|API version.|
|displayName|String|no|Human readable name for the API.|
|description|String|no|Human readable description of the API.|
|type|String|yes|API Type. Currently, this must be “REST”.|

### Backend

|Name|Type|Required|Description|
|---|---|---|---|
|url|String|yes|The url of the backend to which API requests will be forwarded.|

### Gateway

|Name|Type|Required|Description|
|---|---|---|---|
|protocol|String|yes|Protocol that has to be used when calling the API through the gateway. Must be “http” or “https”.|
|path|String|yes|Context path at which the API is located in the gateway. Will be appended to gateway base url. Must start with a `'/'`. Not supported by all gateways.|

### Documentation

|Name|Type|Required|Description|
|---|---|---|---|
|url|String|yes|External url of OpenAPI document for this API.| 
