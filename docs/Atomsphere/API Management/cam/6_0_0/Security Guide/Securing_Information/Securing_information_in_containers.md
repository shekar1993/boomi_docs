---
sidebar_position: 1
---

# Securing Information in Containers

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-efcf4b83-fb37-48be-b6f8-71fde3762578"/>
</head>

## Masked access logs

Local Edition traffic access logs log some information such as package keys can be deemed as sensitive data based on the organization's policies . To prevent unauthorized access to this information, the values of package keys, passwords and secrets are masked when logged. You can change the settings for masking. See `<extract location>/deploy/values.yaml`.

## Local Edition Secrets

Local Edition requires sensitive information to be injected as secrets. All secrets are mounted to the containers inside the pod. When mounted as secrets, K8s places them in `/var/run/secrets/**/*` inside the container unless over-ridden by volume mount spec. Every secret is mounted to it's own path, that is, no two secrets are present in same folder. The default permissions for these secrets are:

1. Owned by root (K8s restriction)

2. File permission is `rw-r-r`. This permission is required because the container processes are run by a non-root user.

:::note

When creating secrets using YAMLs, entries must be encoded in base64. 

:::

Information in secrets can be optionally encrypted using Authenticated Encryption with Associated Data (AEAD) implemented in Local Edition `apim_crypto` utility. Refer to [Using Local Edition Crypto Utility](../Security%20Guidelines/Using_apim_crypto_utility.md) section. Crypto Utility. When encrypting multiple entries within same secret, use same secret and nonce for encrypting such information. When creating secrets using a YAML file, all entries except metadata should be encoded in Base64 (Refer to sample secret YAMLs in `<extract location>/samples/**/*`)

## apim-db-secret

- Secret encapsulating database user name and password

- Entries:
  - `.apimdbuser`: Database user. This entry is mandatory for encryption. 

    The DML user name reqiured to interact with the masherysolar database

  - `.apimdbpasswd`: Database password. This entry is optional for an encryption. 

    If using encrypted, also provide entries for AEAD secret and nonce.

  - `.aeadsecret`: Secret used for encrypting password. This entry is mandatory for encryption. 

    Provided and used only if database password is encrypted.

  - `.aeadnonce`: Nonce used for encrypting password. This entry is mandatory for encryption. 

    Provided and used only if database password is encrypted.

## db-ssl-secret

- Secret encapsulating TLS secrets for SSL certificate keystore and key password.

- Entries:

  - `.db-client-keystore-password`: The Java key store password that is used by the Java MySQL client to connect to the db using TLS. This entry is optional for an encryption. 

    If using encrypted, also provide entries for AEAD secret and nonce.

  - `.db-client-key-password`: The client key password used by the java MySQL client to connect to the db using TLS. This entry is optional for an encryption. If using encrypted, also provide entries for AEAD secret and nonce
  
  - `.aeadsecret`: Secret used for encrypting keystore and key password. This entry is mandatory for encryption. 

    Provided and used only if SSL key and keystore password are encrypted.

  - `.aeadnonce`: Nonce used for encrypting keystore and keypassword. This entry is mandatory for encryption. 

    Provided and used only if SSL key and keystore password are encrypted.

## SSL certs and keys

Secrets encapsulating the CA certs, client keys that are quired for TLS communications. 

For more information, see "Securing Connections to an External MySQL 8 compliant database" in *Boomi Cloud API Management - Local Edition Installation*.

## configui-secrets

- Secrets encapsulating the V3 api key and secret created during customizing seed data.

- Entries:

  - `.mlc_apikey`: V3 API key generated at time of seed data customization. This entry is optional for an encryption. If encrypting, provide AEAD secret and nonce as well in the secret.
  
  - `.mlc_apisecret`: V3 API secret generated at time of seed data customization. This entry is optional for an encryption. If encrypting, provide AEAD secret and nonce as well in the secret.
  
  - `.mlc_aeadsecret`: AEAD Secret. This entry is optional for an encryption. Provided and used only if `.mlc_apikey` and `.mlc_apisecret` are encrypted. 
  
  - `.mlc_aeadnonce`: AEAD Nonce. This entry is optional for an encryption. Provided and used only if `.mlc_apikey` and `.mlc_apisecret` are encrypted.

## configui-usersecrets

- Default Admin user password and secret. This should not be changed by user.

- Entries: 
  - `.mlc_password`: This entry is optional for an encryption.
  
  - `.mlc_server_secret`: This entry is optional for an encryption.

## tml-cm-crt.pem

Certificate for enabling HTTPS for config UI (see Pre-install checklist | TLS Certs for HTTPS | Configui)

## tml-cm-key.pk8

Client key for HTTPS cert for ConfigUI (see Pre-install checklist | TLS Certs for HTTPS | Configui )

## platformapi-keystore-secret

- HTTPs cert in Java keystore format.

- Entries:
  
  - `tml-cm.jks`: Java keystore holding certificate and client key. This entry is mandatory for encryption. 
  
  - `.ssl.password`: keystore password. This entry is optional for an encryption. If encrypting, provide AEAD secret and nonce as well in the secret.
  
  - `.ssl_aeadsecret`: AEAD secret. Provided and used only if .ssl.password is encrypted.
  
  - `.ssl_aeadnonce`: AEAD nonce. Provided and used only if .ssl.password is encrypted.

## trafficmanager-keystore-secret

- HTTPs cert in Java key store format.

- Entries:
  
  - `trafficmanager.jks`: Java keystore holding certificate and client key.
  
  - .`ssl.password`: Keystore password. This entry is optional for an encryption.
  
  - `.ssl.keypassword`: Key password. This entry is optional for an encryption.
  
  - `.ssl_aeadsecret`: AEAD secret.
  
  - `.ssl_aeadnonce`: AEAD Nonce.

## trafficmanager-truststore-secret

- HTTPS certificate for enabling mTLS on the trafficmanager. Required only if enabling mTLS.

- Entries:
  
  - `.trustStorePassword`: Java trust store password. This entry is optional for an encryption.
  
  - `.ts_aeadsecret`: AEAD secret.
  
  - `.ts_aeadnonce`: AEAD Nonce.

## oauth-authenticator-secret

- Entries:
  
  - `.publickeyname`: OAuth API key
  
  - `.publickeyvalue`: OAuth API value
  
  - `.oapiusername`: OAuth API user name
  
  - `.oapipassword`: OAuth API password. This entry is optional for an encryption. The password used to authenticate OAuth API requests with Basic Authentication. 

    The password is a SHA-256 hash of the password. For example, if the value of the password is "changeme", `.oapipassword` can be "057ba03d6c44104863dc7361fe4578965d1887360f90a0895882e58a6248fc86"

  - `.aeadsecret`: AEAD secret. The AEAD secret for encrypting .oapiusername,oapipassword ,publickeyname and .publickeyvalue.
  
  - `.aeadnonce`: AEAD nonce. The AEAD nonce for encrypting .oapiusername, oapipassword, publickeyname and .publickeyvalue.

## api-debug-header-secret

- Secret for debug header for traffic calls. Debug header is used to send different headers with debug information in a traffic call.

- Entries:
  
  - `.apiDebugKey`: Debug header API key. This entry is optional for an encryption. 

    The key to enable the debug header.

  - `.apiDebugSecret`: Debug header API secret. This entry is optional for an encryption. 

    The secret to enable the debug header.

  - `.aeadsecret`: AEAD secret. The AEAD secret for encrypting` .apiDebugKey` and `.apiDebugSecret`.
  
  - `.aeadnonce`: AEAD nonce. The AEAD nonce for encrypting `.apiDebugKey` and `.apiDebugSecret`.
