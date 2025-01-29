---
sidebar_position: 1
---

# Migrating to Boomi Cloud API Management – Local Edition 6.0.0 in the Untethered Mode

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-36494751-92da-43e4-a808-a1dbafe0903e"/>
</head>

The API Managememt - Local Edition migration package provides you with the ability to migrate:

- Configuration data such as endpoints, packages, plans, and so on.

- Tokens

- Seed data - The default data set required such as endpoints, packages, plans a cluster.

The following sections specify the steps required to migrate to Local Edition 6.0.0 in untethered mode. 

:::caution

The migration is supported for the untethered mode only and from the Local Edition versions 5.3.x, 5.4.x, 5.5.x, and 5.6.x.

:::

## Before you begin

- Take a backup of your existing database that you use for Local Edition 6.0.0. You can restore the database from this backup in case of any adverse situation. 

- Get the migration package.

- To extract the migration package, run the following command:

   ```
   tar xvf migrate\_5x\_to\_6.tar.gz
   ```

## Procedure

1. Customize Migration Configuration.

2. Customize CA Certificate, Client Key, and Client Certificate.

3. Update the container registry and repository values in the `docker_push_migration.sh`.

4. To build the migration container images, run the following command in the extracted package folder:

   `./docker_build_migration.sh`

5. Log in to the container registry.

6. To push the migration container images in the extracted package folder, run the following command:

   `./docker_push_migration.sh`
   
7. To deploy the migration pod in the extracted package folder, run the following command:

   `./deploy_migration.sh`

   The migration-pod with the migration-container is deployed in the cluster of the Local Edition 6.0.0 versions 5.3.x, 5.4.x, 5.5.x, and 5.6.x. 

   It has access to tml-sql pod and tml-nosql pod in the cluster of the Local Edition versions 5.3.x, 5.4.x, 5.5.x, and 5.6.x. 

   It has access to the mounted data volume and the MySQL service that is used by the Local Edition 6.0.0 cluster.
   
8. Complete the following tasks: 
   
   a. [Migrating Configuration Data in the Untethered Mode](./Migrating_local_configuration_data_from_5.x_to_6.0.0.md).
   
   b. [Migrating Tokens in the Untethered Mode](./Migrating_tokens_from_5.x_to_6.0.0.md).
   
   c. [Migrating CMS](./Migrating_cms_from_5.x_to_6.0.0.md).

## What to do next
   
1. Do a full reload of the memory cache in Local Edition 6.0.0.

   `kubectl create job --from=cronjob/loader-job-full manual-full-apimload-job`

2. Undeploy the migration pod in the cluster of the Local Edition versions 5.3.x, 5.4.x, 5.5.x, and 5.6.x. 

   In the extracted migration package folder, run the following command:

   `./undeploy_migration.sh`

   The migration pod, persistent volume, configuration maps, and secrets are removed from the clusters of the Local Edition versions 5.3.x, 5.4.x, 5.5.x, and 5.6.x.