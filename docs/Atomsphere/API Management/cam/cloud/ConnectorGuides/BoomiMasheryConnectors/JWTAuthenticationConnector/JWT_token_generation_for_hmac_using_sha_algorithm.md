---
sidebar_position: 6
---

# JWT Token Generation for HMAC using SHA Algorithm

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-62091359-473f-442d-8d83-ffc1dcefe585"/>
</head>

## Introduction

[JSON Web Tokens](HTTPS://TOOLS.IETF.ORG/HTML/RFC7519) (JWT) can be integrity protected with a [Hash-based Message Authentication Code](https://en.wikipedia.org/wiki/HMAC) (HMAC). The producer and consumer must posses a shared secret, negotiated through some out-of-band mechanism before the JWS-protected object is communicated (unless the producer secures the JWS object for itself). 

We are using [Nimbus JOSE+JWT](https://connect2id.com/products/nimbus-jose-jwt) and JJWT library which supports all standard JWS algorithms for HMAC protection (note the minimum [secret length requirement](HTTPS://TOOLS.IETF.ORG/HTML/RFC7518#SECTION-3.2)): 

- [HS256](HTTPS://STATIC.JAVADOC.IO/COM.NIMBUSDS/NIMBUS-JOSE-JWT/5.1/COM/NIMBUSDS/JOSE/JWSALGORITHM.HTML#HS256) - HMAC with SHA-256, requires 256+ bit secret 

- [HS384](HTTPS://STATIC.JAVADOC.IO/COM.NIMBUSDS/NIMBUS-JOSE-JWT/5.1/COM/NIMBUSDS/JOSE/JWSALGORITHM.HTML#HS384) - HMAC with SHA-384, requires 384+ bit secret 

- [HS512](HTTPS://STATIC.JAVADOC.IO/COM.NIMBUSDS/NIMBUS-JOSE-JWT/5.1/COM/NIMBUSDS/JOSE/JWSALGORITHM.HTML#HS512) - HMAC with SHA-512, requires 512+ bit secret 

The JWT includes a set of [claims](HTTPS://TOOLS.IETF.ORG/HTML/RFC7519#SECTION-4) or assertions, packaged in a JSON object. The claims, which treatment is application specific, must therefore be subsequently checked by your application code. 

## JSON Web Key Format for HMAC using SHA Algorithm

- JWKS for HMAC HS384 (Sample) 

```xml
{
"keys": [{
"kty": "oct",
"kid": "32502afd-077e-4c38-bb1c-9f7ee2069b0d",
"k": "AVQ-4XgHTI_KVV2h27nCBkTGb7NK3QEghlB1sYYoNlXsEzKTv8YAXWdBp6cH4yc",
"alg": "HS384"
}]
}
```

- HS256

```xml
{
"keys": [{
"kty": "oct",
"kid": "27a7cb2b-6f0f-4722-a735-a45eb95b28a7",
"k": "G37cfUp9nhwlxZDL2x0ecfKpzbhMT7zHYS786T-n0II",
"alg": "HS256"
}]
}
```

- HS512

```xml
{
"keys": [{
"kty": "oct",
"kid": "1a35af02-71fe-4240-b9ed-f90482e405bc",
"k": "_
A3GhQMmfixjef5G9bFNKu7XhY7i1Tf5gyuWHrFIVTBk4t9APCX8Foq1SJWgCspLy3MuLgrI7js0JS65M78dg",
"alg": "HS512"
}]
}
```

- Secret Keys (Sample) 

HS384

``javax.crypto.spec.SecretKeySpec@588163c``

HS256 

```javax.crypto.spec.SecretKeySpec@5883077```

HS512 

```javax.crypto.spec.SecretKeySpec@5880b31```