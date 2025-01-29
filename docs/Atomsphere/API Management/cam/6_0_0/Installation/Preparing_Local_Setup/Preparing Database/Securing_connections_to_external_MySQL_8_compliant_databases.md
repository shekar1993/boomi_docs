---
sidebar_position: 2
---

# Securing Connections to an External MySQL 8 compliant database

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-3d9aeb43-bbe4-4652-ad16-7624ed3145b5"/>
</head>

## Prerequisite

Prepare CA Certificate, Client Key, and Client Certificate.

Each DB vendor provides a guide to secure connections including how and where to get a CA certificate, client key, and client certificate. 

See the following references, which are subject to change by the vendors. 

- [Google Cloud SQL for MySQL](https://cloud.google.com/sql/docs/mysql/authorize-ssl)

- [Azure Database for MySQL Flexible Server](https://learn.microsoft.com/en-us/azure/mysql/flexible-server/how-to-connect-tls-ssl)

- [MySQL 8.0](https://dev.mysql.com/doc/refman/8.0/en/using-encrypted-connections.html)

- [AWS Aurora for MySQL](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/UsingWithRDS.SSL.html)

This document uses the following files. 

|Type|File Name|
| :- | :- |
|CA certificate|db-ca.pem|
|Client key|db-client-key.pem|
|Client certificate|db-client-cert.pem|
|Client keystore|db-client-keystore.jks|

If you are using different file names, the reference instructions for creating Kubernetes secret and config map must be updated. 

## Prepare Client Keystore

This section for creating a client keystore is for reference. 

1. Based on client key and client certificate, generate client keystore in PKCS#12 format

   **Inputs** 

   ```
   client key: client-key.pem

   client certificate: client-cert.pem

   passout: password protecting the keystore
   ```

   **Output** 

   Client keystore in PKCS#12 format: client-keystore.p12

   ``` 
   openssl pkcs12 \
   -export \
   -in "client-cert.pem" \
   -inkey "client-key.pem" \
   -out "client-keystore.p12" \
   -name "mariadbclient" \
   -passout pass:changeme
   ```

2. Convert the client keystore from PKCS#12 format to JKS format 

   **Inputs**

   ```
   srckeystore: client-keystore.p12

   srcstoretype: PKCS12

   srcstorepass: changeme

   deststorepass: changeme

   destkeypass: changeme 
   ```

   **Output**

   ```
   keytool \
   -importkeystore \
   -deststorepass changeme \
   -destkeypass changeme \
   -destkeystore "client-keystore.jks" \
   -srckeystore client-keystore.p12 \
   -srcstoretype PKCS12 \
   -srcstorepass changeme \
   -alias "mariadbclient"
   ```

## Understanding ssl-mode for Securing database connection

Here is the list of SSL modes that the driver uses and what is required for each mode.

- disable: Do not use SSL/TLS (default) 

- trust: only use TLS for encryption. Do not perform certificate or hostname verification. This mode is not safe for production applications. 

- verify-ca: use TLS for encryption and perform certificate verification, but do not perform hostname verification. 

- verify-full: use TLS for encryption, certificate verification, and hostname verification. 

When SSL mode is "disable" or "trust", no key or certificate is required by the MySQL client. 

When SSL mode is "verify-ca" or "verify-full", a CA certificate is required by the MySQL client. 

In case you are using mutualTls mode, it has the following options:

- disable: MySQL Client communicates with MySQL server in a secure or insecure way.

- enable: MySQL Client communicates with MySQL server in a secure way, CA certificate, client key, client keystore and client certificate are required. 

Refer to your database server's documentation on how to make it mandatory to use X509 certs for clients. 

The following table shows the settings required for each mode.

| |disable|trust|<p>verify-ca</p><p>db\_mutual\_tls: disable</p>|<p>verify-ca</p><p>db\_mutual\_tls: enable</p>|<p>verify-full</p><p>db\_mutual\_tls: disable</p>|<p>verify-full</p><p>db\_mutual\_tls: enable</p>|
| :- | :- | :- | :- | :- | :- | :- |
|`db_ca_configmap`|![](../../../Images/error.png)|![](../../../Images/error.png)|![](../../../Images/needed.png)|![](../../../Images/needed.png)|![](../../../Images/needed.png)|![](../../../Images/needed.png)|
|`db_ssl_secret`|![](../../../Images/error.png)|![](../../../Images/error.png)|![](../../../Images/error.png)|![](../../../Images/needed.png)|![](../../../Images/error.png)|![](../../../Images/needed.png)|
|`db_client_cert_configmap`|![](../../../Images/error.png)|![](../../../Images/error.png)|![](../../../Images/error.png)|![](../../../Images/needed.png)|![](../../../Images/error.png)|![](../../../Images/needed.png)|
|`db_client_key_secret`|![](../../../Images/error.png)|![](../../../Images/error.png)|![](../../../Images/error.png)|![](../../../Images/needed.png)|![](../../../Images/error.png)|![](../../../Images/needed.png)|
|`db_client_keystore_secret`|![](../../../Images/error.png)|![](../../../Images/error.png)|![](../../../Images/error.png)|![](../../../Images/needed.png)|![](../../../Images/error.png)|![](../../../Images/needed.png)|

The following table shows the valid combinations of db\_ssl\_modes and db\_mutual\_tls.

| |db\_mutual\_tls: disable|db\_mutual\_tls: enable|
| :- | :- | :- |
|disable|![](../../../Images/needed.png)|![](../../../Images/error.png)|
|trust|![](../../../Images/needed.png)|![](../../../Images/error.png)|
|verify-ca|![](../../../Images/needed.png)|![](../../../Images/needed.png)|
|verify-full|![](../../../Images/needed.png)|![](../../../Images/needed.png)|

### **Step 1: Replace Samples** 

The samples are present in the samples/database folder. 

```
db-ca.pem
db-client-cert.pem
db-client-key.pem
db-client-keystore.jks
```

:::note

It is highly recommended to replace these with your own ones.

:::

If a client keystore is needed, also update the `db-ssl-secrets.yaml` file. 

- the passwords protecting the client keystore; 

- password protecting the client key in the client keystore    

  ```
  apiVersion: v1
   kind: Secret
   metadata:
   name: db-ssl-secret
   namespace: default
   stringData:
   # echo -n changeme | base64
   db-client-keystore-password: Y2hhbmdlbWU=
   # echo -n changeme | base64
   db-client-key-password: Y2hhbmdlbWU=
  ```

### **Step 2: Create Kubernetes ConfigMap / Secret**

Depending on the choice of ssl-mode, the following configMaps and secrets must be created. Here are the reference instructions for Kubernetes (update namespace as needed) The configMap and secret names are used in the file `deploy/values.yaml`. 

1. Create configMap for CA certificate 

   ```
   kubectl create configmap db-ca-configmap --from-file=KEY\_IN\_CONFIGMAP=PATH\_TO\_CA\_CERTIFICATE --namespace default
   ```

   KEY\_IN\_CONFIGMAP must be "db-ca.pem". 

   Example: CA certificate file "db-ca.pem", configMap name "db-ca-configmap" 

   ```
   kubectl create configmap db-ca-configmap --from-file=db-ca.pem --namespace default
   ```

   Example 2: CA certificate file "gcp-ca.pem", configMap name "gcp-ca-configmap" 

   ```
   kubectl create configmap gcp-ca-configmap --from-file=db-ca.pem=gcp/server-ca.pem --namespace default
   ```

2. Create configMap for client certificate 

   ```
   kubectl create configmap db-client-cert-configmap --from-file=KEY\_IN\_CONFIGMAP=PATH\_TO\_CLIENT\_CERTIFICATE --namespace default
   ```

   KEY\_IN\_CONFIGMAP must be "db-client-cert.pem". 

   Example: client certificate file "db-client-cert.pem", configMap name "db-client-cert-configmap" 

   ```
   kubectl create configmap db-client-cert-configmap --from-file=db-client-cert.pem --namespace default
   ```				

   Example: client certificate file "client-cert.pem", configMap name "gcp-client-cert-configmap" 

   kubectl create configmap gcp-client-cert-configmap --from-file=db-client-cert.pem=gcp/client-cert.pem --namespace default

3. Create secret for client key 

   ```
   kubectl create secret generic db-client-key-secret --from-file=KEY\_IN\_SECRET=PATH\_TO\_CLIENT\_KEY --namespace default
   ```				

   KEY\_IN\_SECRET must be "db-client-key.pem". 

   Example: client key file "db-client-key.pem", secret name "db-client-key-secret" 

   ```
   kubectl create secret generic db-client-key-secret --from-file=db-client-key.pem --namespace default
   ```				

   Example: client key file "client-key.pem", secret name "gcp-client-key-secret"

   ```
   kubectl create secret generic gcp-client-key-secret --from-file=db-client-key.pem=gcp/client-key.pem --namespace default
   ```				

4. Create secret for client keystore 

   ```
   kubectl create secret generic db-client-keystore-secret --from-file=KEY\_IN\_SECRET=PATH\_TO\_CLIENT\_KEYSTORE --namespace default
   ```		

   "KEY\_IN\_SECRET" must be "db-client-keystore.jks". 

   Example: client keystore file "db-client-keystore.jks", secret name "db-client-keystore-secret" 

   ```
   kubectl create secret generic db-client-keystore-secret --from-file=db-client-keystore.jks --namespace default
   ```

   Example: client keystore file "client-keystore.jks", secret name"gcp-client-keystore-secret 

   ```
   kubectl create secret generic gcp-client-keystore-secret --from-file=db-client-keystore.jks=gcp/client-keystore.jks --namespace default
   ```

5. Create secret for SSL secret

   ```
   kubectl apply -f db-ssl-secrets.yaml --namespace default
   ```

### **Step 3: Update Values** 

Update the following entries in `deploy/values.yaml`. 

Default entries related TLS connection 

Make the choice of sslMode and fill up other TLS settings as needed. 

```
# sslMode value: disable, trust, verify-ca, verify-full
# disable: Do not use SSL/TLS; no key or certificate is required.
# trust: Only use SSL/TLS for encryption, do not perform certificate or hostname verification; no key
or certificate is required.
# verify-ca: Use SSL/TLS for encryption and perform certificates verification, but do not perform
hostname verification; CA certificate is needed.
# verify-full: Use SSL/TLS for encryption, certificate verification, and hostname verification; CA
certificate is required.
sslMode: 'disable'
# mutualTls value: disable, enable
# disable: MySQL Client communicates with MySQL server in secure or insecure way
# enable: MySQL Client communicates with MySQL server in secure way, CA certificate, client key,
client keystore and client certificate are required.
mutualTls: 'disable'
# caConfigmap: the name of configMap holding CA certificate
# null: when CA certificate is not in use
# caConfigmap: when CA certificate is in use, update the value with the name of configMap holding
CA certificate
caConfigmap: 'null'
# sslSecret: the name of secret holding SSL secret
# null: when no client key or client keystore is in use
# sslSecret: when client key or client keystore is in use, update the value with the name of secret
holding SSL secret
sslSecret: 'null'
# clientCertConfigmap: the name of configMap holding the client certificate
# null: when client certificate is not in use
# clientCertConfigmap: when client certificate is in use, update the value with the name of
configMap holding the client certificate
clientCertConfigmap: 'null'
# clientKeySecret: the name of secret holding the client key
# null: when client key is not in use
# clientKeySecret: when client key is in use, update the value with the name of secret holding the
client key
clientKeySecret: 'null'
# clientKeystoreSecret: the name of secret holding the client keystore
# null: when client keystore is not in use
# clientKeystoreSecret: when client keystore is in use, update the value with the name of secret
holding the client keystore
clientKeystoreSecret: 'null'
```

**Example: db_ssl_mode: trust and db_mutual_tls: disable**

Set `db_ssl_mode` to trust. Nothing else is needed for TLS.

```
# sslMode value: disable, trust, verify-ca, verify-full
# disable: Do not use SSL/TLS; no key or certificate is required.
# trust: Only use SSL/TLS for encryption, do not perform certificate or hostname verification; no key
or certificate is required.
# verify-ca: Use SSL/TLS for encryption and perform certificates verification, but do not perform
hostname verification; CA certificate is needed.
# verify-full: Use SSL/TLS for encryption, certificate verification, and hostname verification; CA
certificate is required.
sslMode: 'trust'
# mutualTls value: disable, enable
# disable: MySQL Client communicates with MySQL server in secure or insecure way
# enable: MySQL Client communicates with MySQL server in secure way, CA certificate, client key,
client keystore and client certificate are required.
mutualTls: 'disable'
# caConfigmap: the name of configMap holding CA certificate
# null: when CA certificate is not in use
# caConfigmap: when CA certificate is in use, update the value with the name of configMap holding
CA certificate
caConfigmap: 'null'
# sslSecret: the name of secret holding SSL secret
# null: when no client key or client keystore is in use
# sslSecret: when client key or client keystore is in use, update the value with the name of secret
holding SSL secret
sslSecret: 'null'
# clientCertConfigmap: the name of configMap holding the client certificate
# null: when client certificate is not in use
# clientCertConfigmap: when client certificate is in use, update the value with the name of
configMap holding the client certificate
clientCertConfigmap: 'null'
# clientKeySecret: the name of secret holding the client key
# null: when client key is not in use
# clientKeySecret: when client key is in use, update the value with the name of secret holding the
client key
clientKeySecret: 'null'
# clientKeystoreSecret: the name of secret holding the client keystore
# null: when client keystore is not in use
# clientKeystoreSecret: when client keystore is in use, update the value with the name of secret
holding the client keystore
clientKeystoreSecret: 'null'
```
**Example: db_ssl_mode: verify-full and db_mutual_tls: enable**

Set `db_ssl_mode` to verify-full and mutualTls to enable. All settings of TLS must be updated.

```
# sslMode value: disable, trust, verify-ca, verify-full
# disable: Do not use SSL/TLS; no key or certificate is required.
# trust: Only use SSL/TLS for encryption, do not perform certificate or hostname verification; no key
or certificate is required.
# verify-ca: Use SSL/TLS for encryption and perform certificates verification, but do not perform
hostname verification; CA certificate is needed.
# verify-full: Use SSL/TLS for encryption, certificate verification, and hostname verification; CA
certificate is required.
sslMode: 'verify-full'
# mutualTls value: disable, enable
# disable: MySQL Client communicates with MySQL server in secure or insecure way
# enable: MySQL Client communicates with MySQL server in secure way, CA certificate, client key,
client keystore and client certificate are required.
mutualTls: 'enable'
# caConfigmap: the name of configMap holding CA certificate
# null: when CA certificate is not in use
# caConfigmap: when CA certificate is in use, update the value with the name of configMap holding
CA certificate
caConfigmap: 'db-ca-configmap'
# sslSecret: the name of secret holding SSL secret
# null: when no client key or client keystore is in use
# sslSecret: when client key or client keystore is in use, update the value with the name of secret
holding SSL secret
sslSecret: 'db-ssl-secret'
# clientCertConfigmap: the name of configMap holding the client certificate
# null: when client certificate is not in use
# clientCertConfigmap: when client certificate is in use, update the value with the name of
configMap holding the client certificate
clientCertConfigmap: 'db-client-cert-configmap'

# clientKeySecret: the name of secret holding the client key
# null: when client key is not in use
# clientKeySecret: when client key is in use, update the value with the name of secret holding the client key
clientKeySecret: 'db-client-key-secret'
# clientKeystoreSecret: the name of secret holding the client keystore
# null: when client keystore is not in use
# clientKeystoreSecret: when client keystore is in use, update the value with the name of secret
holding the client keystore
clientKeystoreSecret: 'db-client-keystore-secret'
```

