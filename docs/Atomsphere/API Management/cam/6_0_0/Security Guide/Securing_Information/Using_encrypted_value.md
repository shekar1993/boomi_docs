---
sidebar_position: 3
---

# Using Encrypted Value

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-e5b34adf-d8a7-4bb5-9123-8bdcda026f22"/>
</head>

1. Create a YAML file for the secret.

2. Provide the encrypted text (it is already encoded in Base64).

3. Provide the AEAD secret in base 64 format.

4. Provide the AEAD nonce in base64 format.

5. Apply the YAML file using Kubectl as follows:

   ```$ kubectl apply -f <path to secret YAML file>```

6. Delete secret's YAML file.
