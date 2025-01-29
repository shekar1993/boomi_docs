# Automatic Database Recovery 

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-14f86adb-7fb4-41d9-9099-b62758328aa1"/>
</head>


A Gateway has the ability to detect database corruption during the Gateway’s restart and to subsequently perform automatic database recovery.

This feature is enabled by default in the `com.boomi.container.apigateway.enableDatabaseRecovery` [container property](/docs/Atomsphere/API%20Management/Topics/api-Container_properties_7db1ee5a-03b9-4d07-931b-4e863e7cc6de.md).

If database corruption is detected, the Gateway performs the following tasks:

1.  The old database file is renamed to **gravitee.mv.db.YYYY-MM-DD.hh-mm-ss.backup**.

2.  A new empty database is created with the name **gravitee.mv.db**.

3.  The new database is initialized and is configured to match the current schema configuration \( approximately 15-30 seconds\).

4.  A DATABASE\_RECOVERY message is sent to the Platform in 60 seconds to initiate a full database recovery for the Gateway and Developer Portal.

5.  The Platform starts sending messages in chunks to repopulate the data for the Gateway and Developer Portal database.

6.  After a few minutes, the Gateway is restored to full operational state.
