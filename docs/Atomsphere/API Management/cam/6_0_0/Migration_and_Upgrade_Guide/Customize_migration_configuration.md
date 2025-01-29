---
sidebar_position: 2
---

# Customize Migration Configuration

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-c656aa94-7dd9-412b-b55d-7c77d860381f"/>
</head>

You must modify the values from mysql-secret.yaml and migration.yaml.

## Customize mysql-secret.yaml

|**Key**|**Value**|**Description**|
| --------- | -------- | ------- |
|namespace|default|Update the value to the namespace value that is used by the Local Edition versions 5.3.x, 5.4.x, 5.5.x, and 5.6.x.|
|username\_apim5|masheryonprem|Do not change this value.|
|password\_apim5|Y2hhbmdlbWU=|<p>The MySQL password used by the Local Edition versions 5.3.x, 5.4.x, 5.5.x, and 5.6.x. </p><p>It is encoded as a base64 value.</p>|
|username\_apim6|masheryonprem|It is the user name that you created for deploying Local Edition 6.0.0 runtime.|
|password\_apim6|Y2hhbmdlbWU=|The MySQL password used by Local Edition 6.0.0. It is encoded as a base64 value.|

## Customize migration.yaml

|Key|Value|Description|
| -------- | ------ | ------ |
|namespace|default|<p>Update the value to the namespace value that is used by the Local Edition versions 5.3.x, 5.4.x, 5.5.x, and 5.6.x. </p><p>- For PersistentVolumeClaim "migration-pvc" </p><p>- Pod "migration-pod" </p><p>- MYSQL\_HOST\_APIM5 </p><p>- CASSANDRA\_HOST</p>|
|image|us.gcr.io/mashery-cloud-operations/migration:5x-6.0|Update the container registry and repository used by the Local Edition versions 5.3.x, 5.4.x, 5.5.x, and 5.6.x.|
|APIM5\_RELEASE\_VERSION|5\.6.2| |
|APIM5\_MODE|untethered| |
|APIM6\_RELEASE\_VERSION|6\.0.0| |
|APIM6\_MODE|untethered| |
|MYSQL\_HOST\_APIM6| |Update to your MySQL service host.|
|MYSQL\_PORT\_APIM6|3306|Update to your MySQL service port.|
|MYSQL\_DATABASE\_APIM6|masherysolar|Update to your MySQL database.|
|MYSQL\_SERVICE\_SSL\_MODE|trust|<p>For your MySQL service host:</p><p>- disable: Do not use SSL/TLS. No key or certificate is required. </p><p>- trust: Only use SSL/TLS for encryption, do not perform certificate or hostname verification. No key or certificate is required. </p><p>- verify-ca: Use SSL/TLS for encryption and perform certificate verification. Do not perform the hostname verification. CA certificate is needed. </p><p>- verify-full: Use SSL/TLS for encryption, certificate verification, and hostname verification. </p><p>&emsp;A CA certificate is required.</p>|
|MYSQL\_SERVICE\_MUTUAL\_TLS|disable|For your MySQL service host.|
|storage|10Gi|For PersistentVolumeClaim "migration-pvc". The default value is good when you have less than 1 million tokens.|