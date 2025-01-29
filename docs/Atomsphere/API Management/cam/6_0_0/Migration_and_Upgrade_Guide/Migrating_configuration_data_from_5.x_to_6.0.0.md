---
sidebar_position: 4
---

# Migrating Configuration Data in the Untethered Mode

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-bfbb1fb6-5eb1-4366-80fd-0fd421a0392c"/>
</head>

Migrating the configuration data to Local Edition 6.0.0 is a two-step procedure. It is applicable when migrating the configuration data from the Local Edition versions 5.3.x, 5.4.x, 5.5.x, and 5.6.x. 

1. Exporting the configuration data to an SQL file.

2. Importing the SQL file to the Local Edition database.

## Exporting the Data to an SQL File

### Procedure

1. Log in to the migration-container container in the migration-pod.

   `kubectl exec -it migration-pod --namespace <namespace\_name for 5.x> -- /bin/bash`

1. To export the configuration data, run the following script:

   `migrate.py --export\_config`

## Importing the SQL File to the Local Edition 6.0.0 Database

### Procedure

1. Log in to the migration-container container in the migration-pod.

   `kubectl exec -it migration-pod --namespace <namespace\_name for 5.x> -- /bin/bash`

1. To import the configuration data to the Local Edition 6.0.0 database, run the following script:

   `migrate.py --import\_config`