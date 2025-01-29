---
sidebar_position: 2
---

# Usage

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-bea8c3ce-ee0c-44fb-b1bb-fb6585dcb29a"/>
</head>

## Functional Behavior

The following matrix describes functional behavior when policies are configured as `((Policy1 || Policy2) && Policy3)`. This example policy is for reference to illustrate the functional behavior. 

|**#** |**Policy Structure** |**Policy 1 Matched** |**Policy 2 Matched** |**Policy 3 Matched** |**Final Action** |
| --- | --- | --- | --- | --- | --- |
|1 |`((Policy1 || Policy2) && Policy3)` |No |No |No |DENY |
|2 |`((Policy1 || Policy2) && Policy3)` |Yes |No |No |DENY |
|3 |`((Policy1 || Policy2) && Policy3)` |Yes |Yes |No |DENY |
|4 |`((Policy1 || Policy2) && Policy3)` |No |Yes |No |DENY |
|5 |`((Policy1 || Policy2) && Policy3)` |No |No |Yes |DENY |
|6 |`((Policy1 || Policy2) && Policy3)` |Yes |Yes |Yes |ALLOW |
|7 |`((Policy1 || Policy2) && Policy3)` |Yes |No |Yes |ALLOW |
|8 |`((Policy1 || Policy2) && Policy3)` |No |Yes |Yes |ALLOW |
|9 |`((Policy1 || Policy2) && Policy3)` |Yes |Yes |N/A |ALLOW |
|10 |`((Policy1 || Policy2) && Policy3)` |Yes |No |N/A |ALLOW |
|11 |`((Policy1 || Policy2) && Policy3)` |No |Yes |N/A |ALLOW |
|12 |`((Policy1 || Policy2) && Policy3)` |No |No |N/A |DENY |
|13 |`((Policy1 || Policy2) && Policy3)` |No |N/A |N/A |DENY |
|14 |`((Policy1 || Policy2) && Policy3)` |Yes |N/A |N/A |ALLOW |

## Various Scenarios

**Standalone Match Policy** 

- Processing Adapter: `com.mashery.proxy.customer.generic.api-policy-connector` 

- Perform Pre-processing: Yes 

- Data to make available for pre-processing: 

  Policy Structure Example: 

  Policies:

  ```
  [

  [{

  "Name": "Match",

  "Operation": "ContainsAny",

  "Context": "Request",

  "ArgumentLocation": "${request.remoteAddr}",

  "MatchExpression": ["12.34.567.89", "12.34.567.90"]

  }, {

  "Name": "Match",

  "Operation": "ContainsAny",

  "Context": "Request",

  "Effect" : "Allow",

  "ArgumentLocation": "${request.headers.get('X-Forwarded-For')}",

  "MatchExpression": ["12.34.567.89", "12.34.567.90"]

  }],

  [{

  "Name": "Match",

  "Operation": "ContainsAll",

  "Context": "Response",

  "Effect":"Deny",

  "ArgumentLocation": "${request.headers.get('API\_Key')}",

  "MatchExpression": ["z5sq9cg2r8b4nxds52xqrqf3"]

  }]

  ]
  ```

**Match Policy With Payload Processing**

**JsonPath Example:**

- Processing Adapter: `com.mashery.proxy.customer.generic.api-policy-connector` 
- Perform Pre-processing: Yes 
- Data to make available for pre-processing: 

  Policy Structure Example: 

  Policies:

  ```
  [

  [{

  "Name": "Match",

  "Operation": "JsonPath",

  "Context": "Request",

  "ArgumentLocation": "${request.payload}",

  "MatchExpression": ["$.SearchRequest.api\_key"]

  }]

  ]
  ```

  Sample Json Request: 

  ```
  {

  "SearchRequest": {

  "api\_key": "testkey",

  "search\_url": "http://www.google.com"

  }

  }

- Data to make available for post-processing: 

  Policy Structure Example: 

  Policies:

  ```
  [

  [{

  "Name": "Match",

  "Operation": "JsonPath",

  "Context": "Response",

  "ArgumentLocation": "${response.payload}",

  "MatchExpression": ["$..book[0].title"]

  }]

  ]
  ```

  Sample Json Response: 

  ```
  {

  "store": {

  "book": [

  {

  "category": "reference",

  "author": "Nigel Rees",

  "title": "Sayings of the Century",

  "price": 8.95

  },

  {

  "category": "fiction",
  "author": "Evelyn Waugh",

  "title": "Sword of Honour",

  "price": 12.99,

  "apikey":"7wgtjgfwfrsttejgcmm3s6rq",

  }

  ],
 
  "bicycle": {

  "color": "red",

  "price": 19.95

  }

  },

  "expensive": 10

  } 


**XPath Example:**

- Processing Adapter: `com.mashery.proxy.customer.generic.api-policy-connector` 
- Perform Pre-processing: Yes 
- Data to make available for pre-processing: 

  Policy Structure Example: 

  Policies:

  ```json
  [
    [{
      "Name": "Match",
      "Operation": "XPath",
      "Context": "Request",
      "ArgumentLocation": "${request.payload}",
      "MatchExpression": ["/employees/employee[@id=1]/firstName/text()"]
    }]
  ]


Sample XML Request: 
```
  <?xml version="1.0" encoding="UTF-8" standalone="yes"?>

  <employees>

  `    `<employee id="1">

  `        `<firstName>Lokesh</firstName>

  `        `<lastName>Gupta</lastName>

  `        `<department>

  `            `<id>101</id>

  `            `<name>IT</name>

  `        `</department>

  `    `</employee>

  `    `<employee id="2">

  `        `<firstName>Brian</firstName>

  `        `<lastName>Schultz</lastName>

  `        `<department>

  `            `<id>102</id>

  `            `<name>HR</name>

  `        `</department>

  `    `</employee>

  </employees>
  ```
  

- Data to make available for post-processing: 

  Policy Structure Example: 

  Policies:

  ```json
  [
    [{
      "Name": "Match",
      "Operation": "XPath",
      "Context": "Response",
      "ArgumentLocation": "${response.payload}",
      "MatchExpression": ["/employees/employee[@id=2]/firstName/text()"]
    }]
  ]
  ```

  Sample XML Response: 

  ```xml
  <?xml version="1.0" encoding="UTF-8" standalone="yes"?>
  <employees>
    <employee id="1">
      <firstName>Lokesh</firstName>
      <lastName>Gupta</lastName>
      <department>
      <id>101</id>
      <name>IT</name>
      </department>
    </employee>
      <employee id="2">
      <firstName>Brian</firstName>
      <lastName>Schultz</lastName>
      <department>
      <id>102</id>
      <name>HR</name>
      </department>
    </employee>
  </employees>
  ```


  For more details about XPath and JSONPath expression syntax, refer to the [JSONPath and XPath User Guide](../../JSONPathandXPathUserGuide/Overview.md). 

**Chaining Match Policy with OAuth2JWT for JWT Context**

- Processing Adapter: com.mashery.proxy.customer.generic.oauth2-jwt-authenticator 

- Perform Pre-processing: Yes 

- Data to make available for pre-processing: 

:::note

  - OAuth2JWT Connector natively supports chaining feature. 

  - OAuth2JWT specific input data must be provided. This example only shows how to use match policy of Request context along with JWTToken context.

::: 

Policy Structure Example: 

processors:com.mashery.proxy.customer.generic.api-policy-connector 

com.mashery.proxy.customer.generic.api-policy-connector.

```json
Policies:[
  [
    {
      "Name": "Match",
      "Operation": "ContainsAny",
      "Context": "Request",
      "ArgumentLocation": "${request.remoteAddr}",
      "MatchExpression": ["12.34.567.89", "12.34.567.90"]
    },
    {
      "Name": "Match",
      "Operation": "ContainsAny",
      "Context": "Request",
      "ArgumentLocation": "${request.headers.get('X-Forwarded-For')}",
      "MatchExpression": ["12.34.567.89", "12.34.567.90]
    }
  ],
]
Policies:[
  [
    {
      "Name": "Match",
      "Operation": "ContainsAny",
      "Context": "JWTToken",
      "ArgumentLocation": "${jwtPayload.nonStandardClaims['roles']}",
      "MatchExpression": ["Admin", "Writer"]
    }
  ]
]
```

**Standard Chaining of Match Policy with other Connector and Processors**

- Processing Adapter: Mashery\_Proxy\_Processor\_Chain 
- Perform Pre-processing: Yes 
- Data to make available for pre-processing: 

  Policy Structure Example: 

  processors:com.mashery.proxy.customer.generic.api-policy-connector, com.mashery.proxy.core.add-headers-processor

  com.mashery.proxy.customer.generic.api-policy-connector.Policies:

  ```
  [

  [{

  "Name": "Match",

  "Operation": "ContainsAny",

  "Context": "Request",

  "ArgumentLocation": "${request.remoteAddr}",

  "MatchExpression": ["12.34.567.89", "12.34.567.90"]

  }, {

  "Name": "Match",

  "Operation": "ContainsAny",

  "Context": "Request",

  "ArgumentLocation": "${request.headers.get('X-Forwarded-For')}",

  "MatchExpression": ["12.34.567.89", "12.34.567.90]

  }],

  ]
  ```

  com.mashery.proxy.core.add-headers-processor.testKey:testValue
