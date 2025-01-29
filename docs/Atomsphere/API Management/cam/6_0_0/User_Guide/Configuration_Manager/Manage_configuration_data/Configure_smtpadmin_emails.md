---
sidebar_position: 12
---

# Configure SMTP/Admin Emails

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-0f011b8f-b869-4dfe-bd2e-bc25b3d11657"/>
</head>

This section provides the information for the SMTP configuration with Local Edition. The configuration options are available in the Helm charts.

## SMTP setup on ML Cluster

### Procedure

1. Get the IP and port and other required information for the SMTP server. 

2. Update the following property values in the `values.yaml` of Helm charts: 

   |Property|Value|
   | :- | :- |
   |smtp.host|SMTP host server IP address|
   |smtp.port|Port on the SMTP server listening|
   |smtp.user|SMTP username|
   |smtp.password|SMTP password|

3. Test the SMTP service by making a curl call from the CM node: if the SMTP server is correctly configured then there should be mails in the SMTP server. 

```
curl -X POST \
http://localhost:4080/tml-mail/api/v1/mail/json \
-H 'Content-Type: application/json' \
-H 'Postman-Token: 89088130-7ddb-433e-a005-7a907e0855ff' \
-H 'cache-control: no-cache' \
-d '{ "sender":"ankitjaisender@boomi.com", "ccRecipients":["cc@boomi.com"],"bccRecipients":
["bcc@boomi.com"],"recipients":["to@boomi.com"], "subject":"test subject", "body":"testing out
mails service" }'
```
