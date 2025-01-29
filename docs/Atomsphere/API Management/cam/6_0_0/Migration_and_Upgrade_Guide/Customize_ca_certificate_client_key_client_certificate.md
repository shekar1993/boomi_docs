---
sidebar_position: 3
---

# Customize CA Certificate, Client Key, and Client Certificate

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-85aa943d-5f88-4901-b929-a7ec7cde259b"/>
</head>

The CA certificate, client key, and client certificate are used in TLS or mutual TLS(mTLS) connection to the MySQL service of Local Edition 6.0.0. Samples are included in the migration package. Replace the samples when a TLS or mTLS connection to the MySQL service of Local Edition 6.0.0 is required.

|**File Name**|**Contents**|**Description**|
| --------- | ------- | ------ |
|`mysql-service-ca.pem`|The CA certificate, which is used to sign a MySQL server certificate.|Required for TLS connection to a MySQL service.|
|`mysql-service-client-key.pem`|Client key|Required for mTLS connection to a MySQL service.|
|`mysql-service-client-cert.pem`|Client certificate|Required for mTLS connection to a MySQL service.|