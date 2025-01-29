---
sidebar_position: 3
---

# Configuring Endpoint Call Processing

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-cb4dfd83-82a0-4390-8c4a-76c0f9c7823f"/>
</head>

On the Call Transformations page, specify the following information in these fields: 

- Processing Adapter: `com.mashery.proxy.customer.generic.api-policy-connector`

## JSONPath Configuration

- **Perform Pre-Processing:** Enabled 

- **Data to make available for pre-processing** (one per line): Pre-Input Data as shown in the following table. 

  |**Data** |**Example** |**Notes** |
  | ------ | ---- | ----- |
  |`Policies: [[Policy 1, Policy2], [Policy 3]]` | `Policies: [ [{ "Name": "Match", "Operation": "JsonPath", "ArgumentLocation": "${request.payload}", "Context": "Request", "MatchExpression": ["$.SearchRequest.api\_key"] }] ]` |Mandatory |

- **Perform Post-Processing:** Enabled 

- **Data to make available for post-processing** (one per line): Post-Input Data as shown in the following table. 

  |**Data** |**Example** |**Notes** |
  | ------ | ---- | ----- |
  |`Policies: [[Policy 1, Policy2], [Policy 3]]` | `Policies: [{ "Name": "Match", "Operation": "JsonPath", "ArgumentLocation": "${response.payload}", "Context ": "Response ", "MatchExpression ": ["$..book[0].title "] }]` |Mandatory |

## XPath Configuration

- **Perform Pre-Processing:** Enabled 

- **Data to make available for pre-processing** (one per line): Pre-Input Data as shown in the following table. 

  |**Data** |**Example** |**Notes** |
  | ------ | ---- | ----- |
  |`Policies: [[Policy 1, Policy2], [Policy 3]]` |`Policies: [ [{ "Name": "Match", "Operation": "XPath", "Context": "Request", "ArgumentLocation": "${request.payload}", "MatchExpression": ["/employees/employee[@id=1]/firstName/text()"] }] ]` |Mandatory |

- **Perform Post-Processing:** Enabled 

- **Data to make available for post-processing** (one per line): Post-Input Data as shown in the following table. 

  |**Data** |**Example** |**Notes** |
  | ------ | ---- | ----- |
  |`Policies: [[Policy 1, Policy2], [Policy 3]]`|`Policies: [ [{ "Name": "Match", "Operation": "XPath", "Context": "Response", "ArgumentLocation": "${response.payload}", "MatchExpression": ["/employees/employee[@id=2]/firstName/text()"] }] ]` |Mandatory |

