---
sidebar_position: 4
---

# Configuring Endpoint Call Processing

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-b8654243-f821-4c8c-9df8-2c1234ecd7d4"/>
</head>

On the Call Transformations page, specify the following information in these fields: 

- **Processing Adapter:** com.mashery.proxy.customer.generic.pf-oauth-connector

- **Perform Pre-Processing:** Enabled 

- **Data to be made available for pre-processing** (one per line): 

  |**Data** |**Example** |**Notes** |
  | ---- | --- | --- |
  |pf\_base\_url:``<string>``|`pf_base_url:http://pf-server-url.com`|Mandatory; string value. The Ping Federate server URL for fetching Auth2.0 access token. |
  |pf\_oauth\_client:``<string>`` |pf\_oauth\_client:YWo4NzJDbGllbnQ6YWo4NzJTZWNyZXQ=|Mandatory; string value.Base64 encoded client\_id:client\_secret for PF server. |
  |pf\_oauth\_user:``<string>`` |pf\_oauth\_user: TWo345345GhlbnQ6YWo4NzJXYAcPWNA= |Optional; string value.Base64 encoded'username' and 'password' for password grant. |
  |pf\_fetchtoken\_retries:``<int>`` |pf\_fetchtoken\_retries: 2 |Optional; attempts to connect to pf server in case of error response, defaults to 3 |

