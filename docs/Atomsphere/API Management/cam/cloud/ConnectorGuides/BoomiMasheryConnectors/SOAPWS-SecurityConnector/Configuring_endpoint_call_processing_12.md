---
sidebar_position: 4
---

# Configuring Endpoint Call Processing

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-2b9df19b-4c61-48c1-9459-38492f1d2359"/>
</head>

On the **Call Transformations page**, specify the following information in these fields: 

- **Processing Adapter**: com.mashery.proxy.customer.generic.soap-security-connector. 

- **Perform Pre-Processing**: Enabled 

- **Perform Post-Processing**: Enabled 

- **Data to make available for pre-processing**: Pre-Input Data as shown in the following table. 

|**Data** |**Example** |**Notes** |
| ---- | ----- | ----- |
|enable\_timestamp : ``<flag>`` |enable\_timestamp:true |Optional Field |
|timestamp\_ttl : ``<set time stamp expiry time>`` |timestamp\_ttl:300 |Optional Field |
|enable\_signature : ``<flag>`` |enable\_signature:true |Optional Field |
|signature\_algorithm : ``<algorithm>`` |signature\_algorithm : SHA1withRSA |Optional Field |
|enable\_encyption : ``<flag>`` |enable\_encyption:true |Optional Field |
|key\_transport\_method : ``<key\_transport\_method>`` |key\_transport\_method : RSA15 |Optional Field |
|encryption\_algorithm : ``<encryption\_method>`` |content\_encryption\_method : aes128-cbc |Optional Field |
|override\_custom\_error\_message : ``<flag>`` |override\_custom\_error\_message : true |<p>Optional Field. Default is false. </p><p>When true, Control Center configured error messages take precedence. </p>|

- **Data to make available for post-processing**: Post-Input Data as shown in the following table. 

|**Data** |**Example** |**Notes** |
| ---- | ----- | ----- |
|validate\_signature : ``<flag>`` |validate\_signature : true |Optional Field |
|enable\_decryption : ``<flag>`` |enable\_decryption : true |Optional Field |
|override\_custom\_error\_message : ``<flag>`` |override\_custom\_error\_message : true |<p>Optional Field. Default is false </p><p>When true, Control Center configured error messages take precedence. </p>|

