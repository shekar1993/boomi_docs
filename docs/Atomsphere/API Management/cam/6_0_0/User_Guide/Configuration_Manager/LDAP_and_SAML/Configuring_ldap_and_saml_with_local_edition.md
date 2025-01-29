---
sidebar_position: 3
---

# Configuring LDAP and SAML with Local Edition

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-b7b689b4-5e05-4a47-bf43-b35131c043a4"/>
</head>

## Configuring LDAP with Local Edition

1. Open Configuration Manager. 

2. Navigate to **Members**. 

3. Create a username LDAP

4. Add the appropriate role to the LDAP user by navigating to the **Portal Access Group** tab. The LDAP-Authenticated users inherit the roles and permissions of this LDAP user.

5. Navigate to **Home > Cluster Settings > Authentication** and under **LDAP settings**, add the following inputs:

   - **LDAP Enabled:** Checked (Enabled)

   - **LDAP Login Button Text:** LDAP Login(or any other text you want on the LDAP Login button)

   - **LDAP URL:** URL of the LDAP Server. This server should be accessible from the Local Edition Cluster. For example, 

      ```LDAP URL: ldap://34.67.34.161:1234```

   - **Bind Username:** The username to connect to the LDAP server. For example,

      ```Bind Username: uid=john,ou=People,dc=nodomain```

   - **Bind Password:** The password to connect to the LDAP server. For example: 

      ```Bind Password: johnldap```

   - **Search Filter:** Filter to search for the user during authentication. Standard LDAP filter syntax is supported. For example, 

      ```Search Filter: (&(objectclass=inetOrgPerson)(uid=%s))```

   - Base DN: The Base DN is the starting point that an LDAP Server uses when searching for users authentication within the directory.

      ```Base DN: dc=example-domain,dc=com```

   - **Start TLS:** Select the checkbox to enable this field.

   - **Skip Verify:** Select the checkbox to skip verification of the certificate.

1. Click **Save and Test LDAP**. 

   On successful configuration the test status must be:

   ```
   LDAP test start....
   Connecting to LDAP server
   Connected to LDAP server
   Switching to TLS
   Successfully connected with TLS
   Binding to authentication user
   Successful user bind
   Success
   ```

## Login with LDAP User

The following section provides details to log in with an LDAP user.

1. Navigate to the Login page, `https://<ip_of_cm_service>/admin`

2. Provide the LDAP username and password and click **Sign In**.

On successful authentication, you should be signed-in in the Configuration Manager.

## Configuring SAML with

1. Generate SAML certificate and key on SAML Server. Transfer this key and certificate on to a local machine. 

   ```
   openssl req -x509 -newkey rsa:2048 -keyout myservice.key -out myservice.cert -days 365 -nodes -subj "/CN=myservice.example.com 
   ```

1. Open the configuration manager and navigate to Members. 

  `https://<ip_of_cm_service>/admin`

3. Create a user as SAML and in the **Portal Access Group** tab, input the *Administrator* role to the SAML user. 

4. Click **Home > Cluster Settings > Authentication > SAML settings** and input the following:

   - SAML Enabled: Checked

   - SAML Login Button Text: SAML Login. This can be any other text you want on the SAML Login Button. 

   - Metadata URL: `http://<saml_server_ip>:8000/metadata`. This is the IP of the VM or instance where the SAML server is running.

   - Root URL: `https://<cm_svc_ip>`. Here, `cm_svc_ip` is the IP of cm service that is used to open the configuration manager. 

   - Force Authentication: Checked

   - SAML Certificate: Browse and select the certificate generated in step 1. 

   - SAML Key: Browse and select the key generated in step 1. 

5. Click **Save**. 

   On successful configuration the test status must be: 

   ```
   SAML test start....
   Loading certificate
   Successfully loaded certificate
   Parsing certificate
   Successfully parsed certificate
   Parsing metadata url
   Successfully parsed metadata url
   Parsing root url
   Successfully parsed root url
   Creating SAML service
   Successfully created SAML service
   ```

## What to do next

On successful configuration, download the `metadata.xml` file by clicking the metadata link below the test status box. 

Load the metadata file to the SAML server. 

```
curl -v -T metadata.xml http://<saml\_server\_ip>:8000/services/test
```

```
curl -v -T /Users/<user_name>/Downloads/metadata.xml http://xx.xx.xx.xxx:8000/services/test
* Trying xx.xx.xx.xxx...
* TCP_NODELAY set
* Connected to xx.xx.xx.xxx (xx.xx.xx.xxx) port 8000 (#0)
> PUT /services/test HTTP/1.1
> Host: xx.xx.xx.xxx:8000
> User-Agent: curl/7.54.0
> Accept: */*
> Content-Length: 3795
> Expect: 100-continue
>
< HTTP/1.1 100 Continue
* We are completely uploaded and fine
< HTTP/1.1 204 No Content
< Date: Thu, 10 Dec 2020 23:49:21 GMT
<
* Connection #0 to host xx.xx.xx.xxx left intact
```
