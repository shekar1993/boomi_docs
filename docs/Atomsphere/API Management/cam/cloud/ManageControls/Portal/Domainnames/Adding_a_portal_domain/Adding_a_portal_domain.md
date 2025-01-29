---
sidebar_position: 1
---

# Adding a Portal Domain

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-0ddc0b20-2f39-4b70-a63e-eabc855a6a8a"/>
</head>

Multiple domains can be added and defined on the **Domain Names** page. The page also allows you to enable and set HTTP Authentication, IP restrictions, and reCAPTCHA for the Portal. 

## Procedure

**To add a portal domain:**

1. On the **Domain Names** page, click **Add Domain**. 

   The **Add Portal Domain Name** page is displayed. 

2. Fill the required details in the Domain Name form. 

   |**Field** |**Description** |
   | -------- | --------- |
   |Domain Name|The name of the domain. |
   |Enable HTTP Authentication|<p>Enables HTTP authentication for the Portal. It allows you to add the following authentication information: </p><p>- **HTTP Authentication Realm:** The Realm value that appears in the logon dialog box when authentication is enabled. This value is only for information and not used for authentication. </p><p>- H**TTP Authentication Access Denied Message:** The message displayed when HTTP Authentication for a request fails. </p><p>For more information, refer to [Enabling HTTP Authentication and adding HTTP Auth Users](./Enabling_http_authentication_and_adding_http_auth_users.md). </p>|
   |Enable Remote IP Address Restriction|<p>Enables Remote IP Address Restriction settings. The Remote IPs can be sorted based on whether or not they have access to the Portal. The following are the categories using which you can allow or block Remote IP addresses: </p><p>- **Remote IP Whitelist:** Enter the IP addresses that can access the Portal remotely. </p><p>- **Remote IP Blacklist:** Enter the IP addresses that are blocked from accessing the Portal. </p><p>- **Remote IP Access Denied Message:** Enter the message that you want to get displayed when access to the Portal is denied. </p>|
   |Enable G2O (Ghost to Origin) Cache Lockdown|G2O is for those customers who are using a CDN like Akamai to cache Portal pages. This is an advanced feature offered by API Management and it requires additional implementation configuration, by API Management Support staff, in order for a customer to utilize. For more information, please contact by API Management Support.|
   |Enable reCAPTCHA|<p>Enables the reCAPTCHA feature for authentication. To enter the reCAPTCHA values, you must be registered with reCAPTCHA. You receive a public key and private key when you sign up for reCAPTCHA. </p><p>- **reCAPTCHA Key:** The Public key is received when you register for reCAPTCHA. </p><p>- **reCAPTCHA Secret:** The Private key is received when you register for reCAPTCHA.</p><p>reCAPTCHA image is displayed on the registration page. Users are required to complete their registration through reCAPTCHA.</p>|

3. Click **Save**. 

   :::note
   
   You can modify or delete the domain names using the links provided on the **Domain Names** page. 

   :::
