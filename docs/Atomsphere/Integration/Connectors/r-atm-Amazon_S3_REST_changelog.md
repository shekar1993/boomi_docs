# Amazon S3 REST changelog

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-bdf3025f-4d70-4d32-a267-7935f3bc5df6"/>
</head>


## Changelog

**2024-08 (Version 24.08.0, Current)**

- The connector now successfully connects to S3 using **IAM Roles Anywhere** option field with and without providing a `SessionName`.

**2024-04 (Version 24.04.0)**

- Necessary runtime packages are now packaged with the connector.

**2023-10**

The ```commons-io:commons-io``` library was updated to address a security vulnerability.

**2023-09**

- Now supporting [IAM AWS Roles Anywhere](https://docs.aws.amazon.com/rolesanywhere/latest/userguide/introduction.html)