---
sidebar_position: 7
---

# JWT Token Generation for RSA using SHA Algorithm

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-df1bbb7c-b613-4c77-a8b6-8c6521939802"/>
</head>


## Sample JWT Header

```xml
{
"kid": "U5R8cHbGw445Qbq8zVO1PcCpXL8yG6IcovVa3laCoxM",
"alg": "RS512"
}
```

## Sample JSON Web Key Format for RSA Algorithm

JSON Web key will be included in the JSON response as described below: 

```xml
{  
"keys":[  
{  
"alg":"RS512",
"e":"AQAB",

"n":"xcTpDM/+cRb+uojL1YMnliUPFOFASYOQ+GxPiRSaeiUaOk+sms6EeklXfEa1SMmvyz8el2m26gcQaHrZk1j3GhH4A2gr2rjP+/2vFLq3NOT1wtMAtN7AbC1bcnPByYxr0tBBkY4vATBTrKPBOUxoaUieRmjTkjLQdah7MW0MYMV5dm6NdNXyi44wLsB/12qwUMOnzkKAC6jEExg2dMtfu3FD2vCUzW+5ibQ6gsDaz6LNn+tJDNHpeoKRfpUJBJUc+MAPefMv8/YLBVUoo7ZE0lGGgS+LvZYD/U5f8E7F4DFphX909DuJj7J9d6YTeLlewOvK63W2UgAks+wFFtGiUo61qlHDNCe9s16zmHr7Rbv2A47ZIicPkUH1kcbP/obwkEuK/PckPJMDPoI87gr6z/YdRxRIKCuWu/jKxD9xXt6Ee60O+CDUw4Fxw62uTZV8KQOeWVTeh9T2/LdkzTkhwk7jg2kb6Oe99R9bu2yH2v9g5WAnxZ3LMRn4DBlkgDg6cDES+URIqp7Nga+xIcNsNSsBfy2I9b39DHr0SOeTu1ITafbMxv6C6bDI2X5D9nvObkoPfiV3qyg6j9q1SHc3u6UB/z8EUg/T7B1dKqXT6DcoV++6UyUEti9TPiZS3SM7sZJhauvEP5D+XnW1RlkgPqpC9oydfwZ4gdeI90BKBzc=",
"kty":"RSA",
"use":"sig",
"kid":"U5R8cHbGw445Qbq8zVO1PcCpXL8yG6IcovVa3laCoxM"
}
]
}
```
