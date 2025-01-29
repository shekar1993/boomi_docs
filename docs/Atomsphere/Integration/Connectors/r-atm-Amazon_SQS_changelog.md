# Amazon SQS changelog 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-0db1f8ac-24ce-4507-8020-a6c6de598a09"/>
</head>


## Changelog

**2025-01 (Version 25.01.0, Current)**

- The Amazon SQS Connector now supports successful connections to SQS using the **IAM Roles Anywhere** option in a Windows environment.

**2024-08 (Version 24.08.0)**

- The connector now successfully connects to S3 using **IAM Roles Anywhere** option field with and without providing a `SessionName`.

**2024-07 (Version 24.07.0)**

- Necessary runtime packages are now packaged with the connector.

**2024-04 (Version 24.04.1)**

- The Queue Name can now be imported dynamically across all operations, allowing you to import queues that you may not have a connection to browse.

**2023-09 (Version 23.09.2)**

- Now supporting [IAM AWS Roles Anywhere](https://docs.aws.amazon.com/rolesanywhere/latest/userguide/introduction.html).