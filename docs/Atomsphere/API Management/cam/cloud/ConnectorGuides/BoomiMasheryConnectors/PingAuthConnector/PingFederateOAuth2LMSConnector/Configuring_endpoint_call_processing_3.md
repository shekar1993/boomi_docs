---
sidebar_position: 4
---

# Configuring Endpoint Call Processing

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-f2d3840d-9ded-4a57-8ad1-dc9145e1cb6f"/>
</head>


On the Call Transformations page, specify the following information in these fields: 

- **Processing adapter:** com.mashery.proxy.customer.generic.pf-oauth-connector 

- **Perform Pre-processing:** Enabled 

- **Data to make available for pre-processing** (one per line) 

  |**Data** |**Example** |**Notes** |
  | ---- | --- | --- |
  |`enable_lms_pf_token_auth:<true/false>` |`enable_lms_pf_token_auth:true ` |<p>Optional; boolean values - true or false. </p><p>Default Value - false </p><p>:::note</p><p>This flag enables LMS support by fetching LMS access token from Ping Federate server.</p><p>::: </p>|
  |`lms_pf_base_url:<string>` |`lms_pf_base_url: https://cloudsso-test.cisco.com/as/token.oauth2` |<p>Mandatory; string value. </p><p>The Ping Federate server URL for fetching LMS access token. </p>|
  |`lms_pf_oauth_client:<string>`|`lms_pf_oauth_client:mLIrj1OhHA5qaYUckf6O59Nzpqx7S+<br>JkLuGu2EMGOyq2dHeGpaNFPsCKSHqR1H7` |<p>Mandatory; string value. </p><p>Base64 encoded `client_id:client_secret` for LMS Ping Federate server. </p>|

