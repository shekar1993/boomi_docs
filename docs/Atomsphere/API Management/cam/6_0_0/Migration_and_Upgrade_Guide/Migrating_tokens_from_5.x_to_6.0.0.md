---
sidebar_position: 5
---

# Migrating Tokens in the Untethered Mode

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-6c899cbf-019f-44d4-9b1d-7f57fbaca19e"/>
</head>

Migrating tokens to Local Edition 6.0.0 is a two-step procedure. It is applicable when migrating tokens from the Local Edition versions 5.3.x, 5.4.x, 5.5.x, and 5.6.x. 

1. Exporting tokens.

2. Importing tokens to Local Edition 6.0.0.

## Exporting tokens

### Procedure

1. Log in to the migration-container container in the migration-pod.

   `kubectl exec -it migration-pod --namespace <namespace\_name for 5.x> -- /bin/bash`

2. To export the tokens, run the following script:

   `migrate.py --export\_tokens`

## Importing the SQL File to the Local Edition 6.0.0 Database

### Procedure

1. Log in to the migration-container container in the migration-pod.

   `kubectl exec -it migration-pod --namespace <namespace\_name for 5.x> -- /bin/bash`

2. To import the tokens to the Local Edition 6.0.0 database, run the following script:

   `migrate.py --import\_tokens`

