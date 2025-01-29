---
sidebar_position: 4
---
# Creating Secrets

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-1fe86ffd-bcf2-482c-88ff-9897707b052c"/>
</head>

Samples for Local Edition secrets are available in `<extract location>/samples/` folder for different components.

All sensitive information required for Local Edition to work are externalized as Kubernetes secrets. The secrets must be created in same namespace where Local Edition is deployed and secured using the service account created in previous steps. 

:::note

When creating secrets using YAMLs, entries must be encoded in base64. 

:::

Sensitive information includes but not limited to:

- Usernames that are needed to contact external services such as a database or log destination 

- Any sensitive information is optionally encrypted using the `apim_crypto` utility.

- Identity certificates 

- Identity keys such as client keys for TLS communication 

- API Key

- Platform API Token

- The default password for the admin user on ConfigUI

- Other

## Encrypting sensitive information (Optional)

You can use the `apim_crypto` from within the toolkit container to encrypt sensitive information. The utility uses Authenticated Encryption with Associated Data (AEAD) encryption. AEAD uses a user provided 16 character secret and a 16 character nonce to encrypt text. The secret and nonce must be in UTF-8 format only.

Encrypt all sensitive information in one secret using same AEAD secret and nonce. Refer security guide for detailed instructions on using `apim_crypto` utility.

```
I have no name!@toolkit:/$ apim_crypto -s <16 character secret> -n <16 character nonce> -t <text to encrypt>

```

### Database access secret

Local Edition can access the database with or without TLS support. For detailed steps on using Encrypted connections with MySQL, see [Securing Connections to an External MySQL 8 compliant database](../Installation/Securing_connections_to_external_MySQL_8_compliant_databases.md).

## Without encryption

Create a YAML file, for example, apim-dbcreds-secret.yaml. You can create a copy from `<extract location>/samples/database/db-secrets-sample.yaml`.

1. Base 64 encoded db user

   ```
   $ echo -n '<db username>' | base64

   Example
   $ echo -n 'masheryonprem' | base64
   bWFzaGVyeW9ucHJlbQo=

   ```

   Copy and replace the result value to `.apimdbuser` key.

2. Base 64 encoded db password

   ```
   $ echo -n '<db password>' | base64

   Example
   $ echo -n 'changeme' |base64
   Y2hhbmdlbWU=

   ```

   Copy and replace the result value to `.apimdbpasswd` key.

The resultant YAML file looks similar to the following: 

```
apiVersion: v1
kind: Secret
metadata:
name: apim-db-secret
data:
# $ echo masheryonprem | base64
.apimdbuser: bWFzaGVyeW9ucHJlbQo=
# $ echo <password_text> | base64
.apimdbpasswd: Y2hhbmdlbWU=

```

## With Encryption (optional)

1. Encrypt database password using `apim_crypto`

   ```
   # Run the toolkit pod if it is not running
   kubectl run --image=<registry/[repository]/apim-le-toolkit:<tag> toolkit
   Command: apim_crypto -s '<16 char secret to use>' -n '<16 char AEAD nonce to use while
   encrypting>' -t '<text that needs to be encrypted>'
   Example
   I have no name!@toolkit:/$ apim_crypto -s 'abcdefghijklmnop' -n '1234567890123456' -t
   'masheryonprempassword'
   YWQ0NTA5NzUxMjNlYzA1YjFjNWYxZWU1ZjdkOGZhMzE3YjcyYjA1M2ViY2M4YTVhMzg
   wOGMxZDAxM2QxMDYzMDUxYmE4YTg5NjU2MjMxMzQzMDMzMzIzMDMyMzQzMTMz
   MzMzMTM0MzI2NS1AQEA=
   $
   ```

   The output is a base64 value and can be used in the YAML file needed to create the secret. Copy and replace the result value in .apimdbpasswd key.

2. Create a yaml file, for example, apim-dbcreds-secret.yaml. You can create a copy from `samples/database/db-secrets-with-encryption-sample.yaml`.
   
   a. base64 encode username

   ```
   $ echo -n '<db username>' | base64Example
   $ echo -n 'masheryonprem' | base64
   bWFzaGVyeW9ucHJlbQo=
   ```

      Copy and replace the result value to .apimdbuser key.

   b. Copy and replace the result value from encryption to .apimdbpasswd key.
   
   c. base64 encode the AEAD secret and provide as value for key .aeadsecret

      ```
      $ echo -n "abcdefghijklmnop" |base64
      YWJjZGVmZ2hpamtsbW5vcA==
      ```

   d. base64 encode nonce and provide as value for key .aeadnonce

      ```
      $ echo -n "1234567890123456" |base64
      MTIzNDU2Nzg5MDEyMzQ1Ng==
      ```

The resultant yaml file looks as follows:

```
apiVersion: v1
kind: Secret
metadata:
name: apim-db-secret
data:
# $ echo masheryonprem | base64
.apimdbuser: bWFzaGVyeW9ucHJlbQo=
# see using apim_crypto utility in security guide and install guide.
.apimdbpasswd:
YWQ0NTA5NzUxMjNlYzA1YjFjNWYxZWU1ZjdkOGZhMzE3YjcyYjA1M2ViY2M4YTVhMzgwOGM
xZDAxM2QxMDYzMDUxYmE4YTg5NjU2MjMxMzQzMDMzMzIzMDMyMzQzMTMzMzMzMTM0M
zI2NS1AQEA=
# $ echo -n "abcdefghijklmnop" |base64
.aeadsecret: YWJjZGVmZ2hpamtsbW5vcA==
# $ echo -n "1234567890123456" |base64
.aeadnonce: MTIzNDU2Nzg5MDEyMzQ1Ng==
```

## TLS Certs for HTTPS (Optional) 

This step is required if you want to enable HTTPS for Configui, PlatformAPI and Trafficmanager services. These services can also be exposed as plain HTTP URIs as well. 

## Config-UI

This is optional and only required if HTTPS is enabled for configui. HTTPs support for Configui requires a certificate (preferably signed by CA or intermediate-CA) and a key securing the certificate.

1. Create key

   ```

   $ cd <extract\_location>
   $ mkdir -p certs/configui
   $ cd certs/configui
   $ openssl genrsa -out tml-cm-key.pk8 2048
   $ cat tml-cm-key.pk8
   -----BEGIN PRIVATE KEY-----
   							rkLq1Ah5mJiZ8iHK62ylqoJqGzjQKAoUa0FCtM4W/9jYetFucFaS0JmLjw9+MujB
   	...........................TRUNCATE OUTPUT..................................
   efGsNi4iRQdNrJkQqh1o8F9a
   -----END PRIVATE KEY-----
   $	

   ```				

2. Create cert 

   ```
   $ openssl req -new -x509 -sha256 -key tml-cm-key.pk8 -out tml-cm-crt.pem -days 360 -subj
   "/C=CN/ST=GD/L=SZ/O=Acme, Inc./CN=*.example.com"
   $ cat tml-cm-crt.pem
   -----BEGIN CERTIFICATE-----
   MIID0zCCArugAwIBAgIEY5kWuDANBgkqhkiG9w0BAQsFADB3MQswCQYDVQQGEwJV
   .............................TRUNCTAED OUTPUT.......................
   TrvRgjZ3xRLIGViUK7eG+wjxi5aGUUs=
   -----END CERTIFICATE-----
   ```

3. Sign the certificate. Contact your systems administrator for signing certificates.

4. Create Kubectl secret for TLS key.

   ```$ kubectl create secret generic configui-key-secret --from-file=tml-cm-key.pk8```

5. Create Kubectl secret for TLS cert

   ```kubectl create secret generic configui-certificate-secret --from-file=tml-cm-crt.pem```

## Platform API

TLS certs and keys are required if HTTPS is enabled for Platform API service. HTTPs support for PlatformAPI requires a certificate (preferably signed by CA or intermediate-CA) and a key securing the certificate.

1. Navigate to the extracted folder. Create a folder certs if it does not exist.

```
cd <extracted tar localtion>
mkdir -p certs/platformapi
cd certs/platformapi
```
                        
2. Create or copy the file `tml-cm.jks`.

3. Create the file `.ssl.password`.

   Add the password in the file such as `changename`.

4. Create K8s secret YAML file. This step creates the YAML files with entries encoded in base64.

   ```
   kubectl create secret generic platformapi-keystore-secret --from-file=tml-cm.jks --from-file=.ssl.password -o yaml --dry-run=client > platformapi-keystore-secret.yaml	
   ```				

5. Optionally encrypt ssl password in generated yaml.

   a. Encrypt password

   ```
   $ apim_crypto -s <secret> -n <nonce> -t 'text to encrypt'
   Example$ apim_crypto -s 'abcd1234efgh5678' -n '1234abcd5678efgh' -t
   'certpass'MTlkYzk4ZTNkYzQ0YTFlMmIzMzA1Y2I0ZDAxZDMxZDQ2MTJjMDM3NjZ
   mNGE1NDA2NjIzMTM0MzAzMzMyMzAzMjM0MzEzODMxMzYzNDM1NjUtQEBA
   ```

   b. Base 64 encoded secret and nonce.

      ```
      $ echo -n 'abcd1234efgh5678' | base64
      									YWJjZDEyMzRlZmdoNTY3OA==$ echo -n '1234abcd5678efgh' | base64
      MTIzNGFiY2Q1Njc4ZWZnaA==
      ```

   c. Edit the generated secret file platformapi-keystore-secret.yaml. Ensure that attribute names are not changed. 

      - replace `.ssl\_password` with the encrypted value from `Encrypt_password`.

      - Provide secret and nonce using base64 values from `Base_64_encoded_secret_and_nonce`.(#base_64_encoded_secret_and_nonce.)
      
      ```

         apiVersion: v1
         kind: Secret
         metadata:
         name: platformapi-keystore-secret
         data:
         tml-cm.jks: /u3+7QAAAAIAAAABAAAAAQAHZGVmeM1ejC08KAaAfpU/R//7VK7DmgEW5GZ
         .....................TRUNCATED OUTPUT.................................
         /CavGiVvVHpQqslogY0P0QXVuvfqAy+UJJOcOYp96rr5sZDNv33KBmX8JZhLqDaL1I3CaZc3JeN 
           .ssl.password: MTlkYzk4ZTNkYzQ0YTFlMmIzMzA1Y2I0ZDAxZDMxZDQ2MTJjMDM3NjZmNGE1NDA2NjIzMTM0MzAzMzMyMzAzMjM0MzEzODMxMzYzNDM1NjUtQEBA
           .ssl\_aeadsecret: YWJjZDEyMzRlZmdoNTY3OA==
           .ssl\_aeadnonce: MTIzNGFiY2Q1Njc4ZWZnaA==
      ```

6. Create K8s secret 

   ```$ kubectl apply -f platformapi-keystore-secret.yaml```

## Traffic Manager

TLS keystore and key are required if HTTPS is enabled for the Traffic Manager service. HTTPs support for Trafficmanager requires a certificate (preferably signed by CA or intermediate-CA) and a key securing the certificate

Truststore for Traffic Manager has the CA certificates: used by Traffic Manager to communicate with clients in mutual TLS. Clients must present certificates issued by trusted CA(s) when communicating with the Traffic Manager in mutual TLS.

1. Navigate to the extracted folder. Create a folder if it does not exist.

   ```
   cd <extracted tar localtion>
   mkdir -p certs/trafficmanager
   cd certs/trafficmanager
   ```

2. Create or copy `trafficmanager.jks`.

3. Create or copy `.ssl.password`.

4. Create or copy `.ssl.keypassword`.

   Add the password in the file such as `changename`.

5. Create K8s secret YAML file. This step creates the YAML files with entries encoded in base64

   ```
   kubectl create secret generic trafficmanager-keystore-secret --from-file=trafficmanager.jks --from-file=.ssl.password --from-file=.ssl.keypassword -o yaml --dry-run=client > trafficmanager-keystore-secret.yaml
   ```

   Use a dry run because you need the output for the next step. it will not create any resources in the cluster.

   Optionally encrypt keystore password and password. 

   a. Encrypt ssl password

   ```
   $ apim_crypto -s <secret> -n <nonce> -t 'text to encrypt'
   Example$ apim_crypto -s 'abcd1234efgh5678' -n '1234abcd5678efgh' -t 'certpass'
   MjE5YzE2NjIzNDRjM2IzOTQ5ZDMyNGE1NmU2NTU1ZjRkOTY2MWI4Mjc3ZGNiYz
   c2NjIzMTM0MzAzMzMyMzAzMjM0MzEzOTMxMzUzNDMxNjUtQEBA
   ```	

   b. Encrypt key password using the same secret and nonce.

   ```
   $ apim_crypto -s <secret> -n <nonce> -t 'text to encrypt'
   Example$ apim_crypto -s 'abcd1234efgh5678' -n '1234abcd5678efgh' -t 'certpass'
   NzU2MzM0ZTIxYjU5ZjA2YmQxNzI4NzhlZDcyZDBjNmI1ZGVhYTViZTZhYWIzY2M4
   NjIzMTM0MzAzMzMyMzAzMjM0MzEzOTMxMzYzMDMwNjUtQEBA
   ```

   c. Base 64 encoded secret and nonce

   ```
   $ echo -n 'abcd1234efgh5678' | base64
   YWJjZDEyMzRlZmdoNTY3OA==$ echo -n '1234abcd5678efgh' | base64
   MTIzNGFiY2Q1Njc4ZWZnaA==
   ```

   d. Edit the generated secret file trafficmanager-keystore-secret.yaml.
      
      - Replace .ssl.password with the encrypted value from `Encrypt_ssl_password_traffic_manager`
      
      - Replace .ssl.keypassword with the encrypted value from `Encrypt_key_password_using_the_same_secret_and_nonce_traffic_manager`.
      
      - Provide secret and nonce using base64 values from `Base_64_encoded_secret_and_nonce_traffic_manager`

      ```
      # Copyright © 2018-2024. Cloud Software Group, Inc. All Rights Reserved.
      Confidential and Proprietary.
      apiVersion: v1
      kind: Secret
      metadata:
      name: trafficmanager-keystore-secret
      data:
      trafficmanager.jks: /u3+7QAAAAIAAAABAAAAAQAH
      .........Truncted ouput.....................
      .ssl.password:
      MjE5YzE2NjIzNDRjM2IzOTQ5ZDMyNGE1NmU2NTU1ZjRkOTY2MWI4Mjc3Z
      GNiYzc2NjIzMTM0MzAzMzMyMzAzMjM0MzEzOTMxMzUzNDMxNjUtQEBA
      .ssl.keypassword:
      NzU2MzM0ZTIxYjU5ZjA2YmQxNzI4NzhlZDcyZDBjNmI1ZGVhYTViZTZhYWI
      zY2M4NjIzMTM0MzAzMzMyMzAzMjM0MzEzOTMxMzYzMDMwNjUtQEBA
      .ssl_aeadsecret: YWJjZDEyMzRlZmdoNTY3OA==
      .ssl_aeadnonce: MTIzNGFiY2Q1Njc4ZWZnaA==
      ```

6. Create K8s secret

   ```$ kubectl apply -f trafficmanager-keystore-secret.yaml```

7. Steps to create a Secret for trust store

   Navigate to the extracted folder, and create a new folder if it does not exists.

   ```
   cd <extracted tar localtion>
   mkdir -p certs/trafficmanager
   cd certs/trafficmanager
   ```

8. Create or copy the file with .trustStorePassword name.

9. Run the following command: 

   ```
   kubectl create secret generic trafficmanager-truststore-secret --from-file=trafficmanager-trust.jks --from-file=.trustStorePassword -o yaml --dry-run=client > trafficmanager-truststore-secret.yaml
   ```

   Use dry run because you need the output for the next step. It does not create any resources in the cluster.

10. Optionally, encrypt trust store password.
   
   a. Encrypt trust store password

   ```
  $ apim_crypto -s 'abcd1234efgh5678' -n '1234abcd5678efgh' -t 'certpass'
   OWIzMDNmOTNhNDMwYzk4YTFhMGUyZTM4MWNjOTJlMGRhNzEyOTg1ZTYwM
   mM1NTJlNjIzMTM0MzAzMzMyMzAzMjM0MzEzOTMyMzAzNDMzNjUtQEBA
   ```

	b. Base 64 encoded secret and nonce

   ```
   $ echo -n 'abcd1234efgh5678' | base64
   YWJjZDEyMzRlZmdoNTY3OA==
   $ echo -n '1234abcd5678efgh' | base64
   MTIzNGFiY2Q1Njc4ZWZnaA==
   ```

   c.  Edit generated trust store secret yaml file

      - replace `.ssl.password` with the encrypted value from `Encrypt_trust_store_password`
      
      - replace `.ssl.keypassword` with the encrypted value.

      - Provide secret and nonce using base64 values from `Base_64_encoded_secret_and_nonce_truststore`

      ```
      apiVersion: v1
      kind: Secret
      metadata:
      name: trafficmanager-truststore-secret
      data:
      trafficmanager-trust.jks: /u3+7QAAAAIAAAABAAAAAgAEcm9vd
      ..................TRUNCATED OUTPUT.......................
      RWWCDelna14NkUaJvcu/pyBmbQXmdu0niqV3DHcjkfWP2MuctRKaXK
      .trustStorePassword:
      OWIzMDNmOTNhNDMwYzk4YTFhMGUyZTM4MWNjOTJlMGRhNzEyOTg1Z
      TYwMmM1NTJlNjIzMTM0MzAzMzMyMzAzMjM0MzEzOTMyMzAzNDMzNjUt
      QEBA
      .ts_aeadsecret: YWJjZDEyMzRlZmdoNTY3OA==.ts_aeadnonce:
      MTIzNGFiY2Q1Njc4ZWZnaA==
      ```

11. Create Kubernetes secret: 

   ```$ kubectl apply -f trafficmanager-keystore-secret.yaml``

12. Create OAuth secret: 

   ```$ kubectl apply -f oauth-authenticator-secrets-sample.yaml```

## Additional ConfigUI Secrets

V3 API secret. These values are availble in the customised json properties from step 1 in preparing the db. The json attributes are `your_api_key_for_v3_api` and `your_secret_for_v3_api`

Sample secret files are available in `sample/configui/configui-secrets-with-encryption.yaml` and `samples/configui/configui-secrets.yaml`.

### Creating configui secret using encryption

1. Encrypt apikey

   ```
   $ mkdir -p <extract location/certs/configui
   $ cd <extract location>/certs/configui
   $ apim_crypto -s 'abcd1234efgh5678' -n '1234abcd5678efgh' -t '<value of your_api_key_
   for_v3_api from customised papi json>'
   ```

2. Encrypt api secret

   ```
   $ apim_crypto -s 'abcd1234efgh5678' -n '1234abcd5678efgh' -t '<value of your_secret_for_
   v3_api from customised papi json>'
   ```                 

3. Base 64 encoded secret and nonce

   ```
   $ echo -n 'abcd1234efgh5678' | base64
   YWJjZDEyMzRlZmdoNTY3OA==
   $ echo -n '1234abcd5678efgh' | base64
   MTIzNGFiY2Q1Njc4ZWZnaA==
   ```
                    
4. Create YAML file for creating k8s secret

   Do not change the secret name and the attribute names

   ```xml
   apiVersion: v1
   kind: Secret
   metadata:
   name: configui-secrets
   data:
   .mlc_apikey: <output of step 1>
   .mlc_apisecret: <output of step 2>
   .mlc_aeadsecret: YWJjZDEyMzRlZmdoNTY3OA==
   .mlc_aeadnonce: MTIzNGFiY2Q1Njc4ZWZnaA==
   ```

5. Create k8s secret

   ```
   $ kubectl apply -f configui-secrets-with-encryption.yaml

   ```
### Creating configui secret without encryption

1. Base 64 encoded api key and api secret

   ```xml
   $ echo -n '<value of your_api_key_for_v3_api from customised papi json>' | base64
   Sample ouput : YWJjZDEyMzRlZmdoNTY3OA==
   $ echo -n '<value of your_secret_for_v3_api from customised papi json>' | base64
   Sample output : MTIzNGFiY2Q1Njc4ZWZnaA==z
   ```

2. Create a YAML file for creating k8s secret

3. Do not change the secret name and the attribute names

   ```
   apiVersion: v1
   kind: Secret
   metadata:
   name: configui-secrets
   data:
   .mlc_apikey: <output from step 1>
   .mlc_apisecret: <output from step 2>
   ```

4. Create Kubernetes secret.

   ```
   $ kubectl apply -f configui-secrets.yaml
   ```

### Creating Configui user Secret

This secret must not be modified. 

1. Create k8s secret.

   ```
   $ kubectl apply -f samples/configui/configui-secrets.yaml
   $ kubectl apply -f samples/configui/configui-usersecrets.yaml
   ```

2. Optional. Use the encrypted version 

   ```
   $ kubectl apply -f samples/configui/configui-secrets-with-encryption.yaml
   ```

### Creating General Secret

This secret must not be modified. 

Create k8s secret.

```
$ kubectl apply -f samples/general/api-debug-header-secrets-sample.yaml
```
