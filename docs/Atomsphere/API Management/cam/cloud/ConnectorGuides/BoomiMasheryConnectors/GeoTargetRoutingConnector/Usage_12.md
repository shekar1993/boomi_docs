---
sidebar_position: 2
---

# Usage

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-7933dc1b-113a-4498-9987-84afbcb01bb1"/>
</head>

Explanation

1. The following pre-input configuration states the name of header to fetch from incoming request which holds region code meta data. 

   **regioncodeheader**:`<HTTP header name that holds the API request region code>` 

   e.g. `regioncodeheader:HTTP-REQUEST-REGION-KEY` 

1. The following pre-input configuration holds the details of region code and hostname association. Region code will be matched with the header value of the header specified for 'regioncodeheader' pre input. 

   **regioncodevalue**:`{<Code1>:<URI1>, <Code2>:<URI2> ......}` 

   e.g. `regioncodevalue:{"SG": "https://api-sg.acme.com/api/v1","CN": "https://api-sg.acme.com/api/v1", "NL": "https://api-emea.acme.com/api/v1"`. 

   If the incoming header in the request `'HTTP-REQUEST-REGION-KEY'` has the value 'SG', the configuration will be routed to 'SG', the configured host `'api-sg.gta.com/api/v1'`. 

1. The following pre-input configuration holds the default target URI which is used for target routing in case when 'regioncodeheader' is not present in the request or coming with an empty value. 

   **targetdefaulturi**:`<Contains the default target URI>` 

   e.g. targetdefaulturi: https://uki.acme-travel.com/api/v1 

**Sample Example**

https://api.acme.com/aladdapi 

**API Inbound Region Code Header**

HTTP-REQUEST-REGION-KEY : CN 

**Data to make available for pre-processing (Normal flow)**

- regioncodeheader:`HTTP-REQUEST-REGION-KEY` 

- regioncodevalue:`{"SG": "https://api-sg.acme.com/api/v1","CN": "https://api-sg.acme.com/api/v1", "NL": "https://api-emea.acme.com/api/v1"}` 

- targetdefaulturi:`https://uki.acme-travel.com/api/v1` 

**Sample curl call without region code header**: `curl -i -v -H 'Host:localapi.localproxy.mashery.com' 'http://localhost:8080/aladdapi?api\_key=key'`. 

In this case API request is sent to the URI `"https://uki.acme-travel.com/api/v1"`. 

**Sample curl call with region code header**: `curl -i -v -H 'Host:localapi.localproxy.mashery.com' 'http://localhost:8080/aladdapi?api\_key=key' -H 'HTTP-REQUEST-REGION-KEY:CN'`. 

In this case API request is sent to the URI `"https://api-sg.acme.com/api/v1"`. 

## FAQs

**Does this Connector support conditional routing?**

Yes, The Connector supports conditional routing of the API request based on meta data provided in the HTTP header. 

**Does this Connector support conditional routing only for geo routing?**

No, The Connector supports conditional routing of the API request based on any meta data provided in the HTTP header. It is powerful feature agnostic to type of meta data. 

**Does this Connector support header enrichment based on API Management model's attribute?**

Yes, The Connector supports header enrichment with value from API Management supported model's attributes. Currently it supports package\_keys, packages, keys and plans model attributes. 

**Does this Connector support header enrichment with static value as well?**

Yes, The Connector supports header enrichment with a static value which can be configured. 
