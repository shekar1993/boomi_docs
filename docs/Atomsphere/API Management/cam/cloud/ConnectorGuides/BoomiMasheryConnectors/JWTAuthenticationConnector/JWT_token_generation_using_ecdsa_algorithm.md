---
sidebar_position: 8
---

# JWT Token Generation Using ECDSA Algorithm
<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-b2410f3a-3de3-4b57-a1d6-616a6138e116"/>
</head>

## Introduction

Elliptic curve based [JSON Web Signatures](HTTPS://TOOLS.IETF.ORG/HTML/RFC7515) (JWS) provide integrity, authenticity and non-reputation to [JSON Web Tokens](HTTPS://TOOLS.IETF.ORG/HTML/RFC7519) (JWT). 

The EC keys should be of sufficient length to match the required level of security. Note that while EC signatures are shorter than an RSA signature of equivalent strength, they may take more CPU time to verify. 

We are Using Nimbus JOSE+JWT and JJWT library which supports all standard EC digital signature algorithms: 

- [ES256](HTTPS://STATIC.JAVADOC.IO/COM.NIMBUSDS/NIMBUS-JOSE-JWT/6.0/COM/NIMBUSDS/JOSE/JWSALGORITHM.HTML#ES256) - EC P-256 DSA with SHA-256 

- [ES384](HTTPS://STATIC.JAVADOC.IO/COM.NIMBUSDS/NIMBUS-JOSE-JWT/6.0/COM/NIMBUSDS/JOSE/JWSALGORITHM.HTML#ES384) - EC P-384 DSA with SHA-384 

- [ES512](HTTPS://STATIC.JAVADOC.IO/COM.NIMBUSDS/NIMBUS-JOSE-JWT/6.0/COM/NIMBUSDS/JOSE/JWSALGORITHM.HTML#ES512) - EC P-521 DSA with SHA-512 

The example uses the key ID ("kid") parameter of the JWS header to indicate the signing key and simplify key roll-over. The exact method by which the recipient establishes the public EC key candidate(s) to check the signature must be specified by the application's security protocol. 

The JWT includes a set of [claims](HTTPS://TOOLS.IETF.ORG/HTML/RFC7519#SECTION-4) or assertions, packaged in a JSON object. The claims, which treatment is application specific, must therefore be subsequently checked by your application code. 

## JSON Web Key Format for ECDSA Algorithm

- JWKS for ECDSA ES384 (Sample) 

```
{
"keys": [
{
"kty": "EC",
"d": "w3pw3qD59SNcXvsp6aIg6qRkWWBZd--jZ1lYnlr_3DSFJT1zYAtJL_M62a051-OW",
"crv": "P-384",
"x": "0H9XpQcS5NWaxkgTdnNaWSgMp_NFYTYGCPMYsasHvyN1CRa9Tj1deD_ORA75I_
5K",
"y": "x_xCR-W5rd6nwtUgDrGWClfpUrtNZmEHaasgL2skMVOCUxG9ABjN9-vOrV0N226U"
}
]
}
```

- ES256

```xml
{
"keys": [{
"kty": "EC",
"d": "l8JrXagEZUbRd908vDnTjKPdYPrr3V8ZQ8EtzieUxt8",
"crv": "P-256",
"x": "6PzW5LsKpsgbq568WqKmQ6bthPknDBZG7SinCv-Ic44",
"y": "Ac3ZZAhAr8z0Bl_6C2pNh7Vg6Tc3OfeYsdIefBTClH8"
}]
}
```

- ES512

```xml
{
"keys": [{
"kty": "EC",
"d": "AV_MObVspsAewu0Ur8aWpjdOMOkP5Es-DSGly5HRSLg7vPnWOhmLNQIOAYIRMtT3wZWGeDjZQb6PkFkUhSachR3",
"crv": "P-521",
"x":
"AJOrCxwYoUJMVueAE1S3JQP4GRm7euFHGwUWWmdBHHTXuWo9H8mo3ypRQfRlL4
ans2UmrnrX2d6fLa45oiIspPDH",
"y": "AV9BpqlOej4-MnkeRjJwAhhr7_UESJbiwe8fXOwptxQRkpxmlYO--
HwAkS3Q2rZ6Ad5kvxcDnvvXOUvzDHYv4Rjf"
}]
}
```

- Public and Private Keys (Sample) 

  - ES384

  ```xml
  -----BEGIN PUBLIC KEY-----
  MHYwEAYHKoZIzj0CAQYFK4EEACIDYgAE0H9XpQcS5NWaxkgTdnNaWSgMp/NFYTYG
  CPMYsasHvyN1CRa9Tj1deD/ORA75I/5Kx/xCR+W5rd6nwtUgDrGWClfpUrtNZmEH
  aasgL2skMVOCUxG9ABjN9+vOrV0N226U
  -----END PUBLIC KEY-----
  -----BEGIN EC PRIVATE KEY-----
  MDUCAQEEMMN6cN6g+fUjXF77KemiIOqkZFlgWXfvo2dZWJ5a/9w0hSU9c2ALSS/z
  OtmtOdfjlg==
  -----END EC PRIVATE KEY——
  ```

  - ES384

  ```xml
  -----BEGIN PUBLIC KEY-----
  MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAE6PzW5LsKpsgbq568WqKmQ6bthPkn
  DBZG7SinCv+Ic44BzdlkCECvzPQGX/oLak2HtWDpNzc595ix0h58FMKUfw==
  -----END PUBLIC KEY-----

  -----BEGIN EC PRIVATE KEY-----
  MCUCAQEEIJfCa12oBGVG0XfdPLw504yj3WD6691fGUPBLc4nlMbf
  -----END EC PRIVATE KEY-----
  ```

  - ES512

  ```xml
  -----BEGIN PUBLIC KEY-----
  MIGbMBAGByqGSM49AgEGBSuBBAAjA4GGAAQAk6sLHBihQkxW54ATVLclA/gZGbt6
  4UcbBRZaZ0EcdNe5aj0fyajfKlFB9GUvhqezZSauetfZ3p8trjmiIiyk8McBX0Gm
  qU56Pj4yeR5GMnACGGvv9QRIluLB7x9c7Cm3FBGSnGaVg774fACRLdDatnoB3mS/
  FwOe+9c5S/MMdi/hGN8=
  -----END PUBLIC KEY-----

  -----BEGIN EC PRIVATE KEY-----
  MEcCAQEEQgFfzDm1bKbAHsLtFK/GlqY3TjDpD+RLPg0hpcuR0Ui4O7z51joZizUC
  DgGCETPrU98GVhng42UG+j5BZFIUmnIUdw==
  -----END EC PRIVATE KEY——
  ```
