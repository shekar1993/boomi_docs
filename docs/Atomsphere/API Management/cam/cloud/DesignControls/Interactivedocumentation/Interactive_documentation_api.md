---
sidebar_position: 6
---

# Interactive Documentation API

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-a02a3aa1-6cd7-4d4e-b07b-3a0c0d50fec6"/>
</head>

Interactive Documentation API call: 

```xml
curl -X POST \
https://api.mashery.com/v3/rest/iodocs/services \
-H 'Authorization: Bearer <token>' \
-H 'Content-Type: application/json' \
-d '{"serviceId":"<serviceID>","definition":
{<output from transform api>}
,"defaultApi":false}'
```

For more information, see [IO Docs Definition](https://developer.mashery.com/docs/read/IO_Docs). 
