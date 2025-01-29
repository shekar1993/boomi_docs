---
sidebar_position: 2
---

# Using Local Edition Crypto Utility

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-152e210c-c64b-4fa6-9da3-7f58b71c448b"/>
</head>

You can use the `apim_crypto` utility to optionally encrypt the sensitive information.

1. Start toolkit pod if not running. 

   ```$ kubectl run -it --image=<image registry uri>/[image repository]/apim-le-toolkit:<image tag>```

   For example:

   ```$ kubectl run -it --image=gcr.io/apimrepo/apim-le-toolkit:v6.0.0```

1. Run the `apim_crypto` utility from within the toolkit pod.

```
apim_crypto help
I have no name!@toolkit:/$ apim_crypto -h
Usage: apim_crypto --text <TEXT> --secret <SALT> --nonce <NONCE>

Options:
-t, --text <TEXT> Text that is to be encrypted, Ouput is a base64 value
-s, --secret <SALT> 16 UTF-8 character secret key to use during encryption
-n, --nonce <NONCE> 16 UTF-8 character addition field to be used for identifying sender
-h, --help Print help

apim_crypto to encrypt text
I have no name!@toolkit:/$ apim_crypto -s 'sixteencharsecrt' -n 'sixteencharnonce' -t
'texttoencrypt'

NGE4Y2Q3MzcwNjAxNGI0N2M4MmI2YjY4NTQzYmE3YzI4YzU2NTkxZTMyOGQzZjJkYj
U0Yzk4NTg1ODYyMzEzODMwMzMzMjMwMzIzNDMxMzMzNTM1MzEzNzY1LUBAQA==

```

The output is a Base64 encoded value that can be used in a YAML file to create a K8s secret

## Things to consider when using `apim_crypto`

1. The secret and nonce must have only UTF-8 characters.

2. Secret and Nonce must be exactly 16 characters long.

3. Use same secret and nonce when encrypting information within same secret.
