# The Boomi Atom Clouds

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-6c3bfab5-2fdc-4fde-a7cb-5f0c591a9f08"/>
</head>


Boomi maintains and runs Atom Clouds and Test Atom Clouds in the Americas, Europe, and the Asia-Pacific region.

Boomi Atom Clouds appear in multiple places in Integration:

- On the Deployments page (**Deploy** > **Deployments**), where you can deploy processes and components to environments that reside on those Clouds.

- On the Process Reporting page (**Manage** > **Process Reporting**) under the list of Atoms.

- On the Atom Management page (**Manage** > **Atom Management**) under the list of Atoms.

- On the Cloud Usage tab of the Licensing page (**Settings** > **Account Information and Setup** > **Licensing**).

## Deploying processes and components to the Atom Clouds

You can deploy your production processes and components to any of the Boomi Atom Clouds to which your account has access. If environments and test connectors are enabled in your account and if you have test connection licenses, you can also deploy your cloud-based test processes to a Boomi Test Atom Cloud.

Boomi limits the total number of *simultaneous* process executions that an account can run on one of our Atom Clouds to ensure that no one account accidentally monopolizes an Atom Cloud and blocks other accounts’ access to them. To improve performance for all customers, some additional limits have been placed on the Boomi Test Atom Clouds.


You can check the status of the Atom Clouds and Test Atom Clouds, and the at any time by going to [status.boomi.com](http://status.boomi.com).

:::note

There is no limit to the number of processes that can be deployed to these Atom Clouds; however, cloud usage limits for an account do apply.

:::

You should not deploy to these Atom Clouds any processes with connectors that need access to local resources (such as disk or database). However, you can use the Disk connector to read and write from the account's work and temp directories. You also can create directories within these two directories.

Each account that uses a Boomi Atom Cloud is allocated a subset of nodes on which it can execute processes. There is no static assignment of nodes — the subset changes if the nodes in the Atom Cloud change. The account’s allocated subset of nodes is determined based on the nodes that are currently running in the Atom Cloud. This approach lets Boomi add capacity to the Atom Clouds more easily.

:::note

If you use retry execution schedules on an Atom Cloud and you have failed documents that you do not want to rerun, contact Boomi Support for help with clearing out those documents.

:::

## Configuration of the Boomi Atom Clouds

All Boomi Atom Clouds and Test Atom Clouds are currently running on Java 11. All Boomi Atom Clouds and Test Atom Clouds are configured to use the Etc/UTC time zone, except where noted in [Hostnames and IP addresses for the Atom Clouds and Hub Clouds](../../Platform/c-boo-Hostnames_and_IP_Addresses_for_Connecting_b6a0acea-1c2f-4c22-92b2-6aa3f410cffd.md).

The following table compares the Atom Clouds:

| Feature | Atom Clouds (Americas) | Atom Clouds (Europe and Asia-Pacific) | Test Atom Clouds\* | Public Option 1 | Public Option 2 |
| --- | --- | --- | --- | --- | --- |
| Classification | Production | Production (provisioned upon request) | Test | Test & Production | Test & Production |
| Free data volume / month | 1 GB | 1 GB | 1 GB | 15 GB | 30 GB |
| Disk storage | 200 GB | 200 GB | 200 GB | 250 GB | 300 GB |
| Cloud status information | Status.boomi.com | Status.boomi.com | Status.boomi.com | Status.boomi.com | Status.boomi.com|
| Maximum availability of execution history (process logs and document data)\*\* | 14 days | 14 days | Purged daily | 14 days | 14 days |
| Default character encoding | UTF-8 | UTF-8 | UTF-8 | UTF-8 | UTF-8 |
| Adjusts for Daylight Saving Time\*\*\* | Varies\*\*\*\* | No | Varies | Varies | Varies |
| Force restart after X minutes | 2 | 2 | 1 | 5 | 5 |
| Available database drivers | <ul><li>Microsoft JDBC Driver 4.0 for SQL Server (sqljdbc4.jar)</li><li>PostgreSQL JDBC driver 8.4 Build 703 (postgresql-8.4-703.jdbc4.jar)</li><li>MySQL Connector/J 5.1.30 \(mysql-connector-java-5.1.30-bin.jar)</li></ul> |<ul><li>Microsoft JDBC Driver 4.0 for SQL Server (sqljdbc4.jar)</li><li>PostgreSQL JDBC driver 8.4 Build 703 (postgresql-8.4-703.jdbc4.jar)</li><li>MySQL Connector/J 5.1.30 (mysql-connector-java-5.1.30-bin.jar)</li></ul> | <ul><li>Microsoft JDBC Driver 4.0 for SQL Server (sqljdbc4.jar)</li><li>PostgreSQL JDBC driver 8.4 Build 703 (postgresql-8.4-703.jdbc4.jar)</li><li>MySQL Connector/J 5.1.30 (mysql-connector-java-5.1.30-bin.jar)</li></ul> | <ul><li>Microsoft JDBC Driver 4.0 for SQL Server (sqljdbc4.jar)</li><li>PostgreSQL JDBC driver 8.4 Build 703 (postgresql-8.4-703.jdbc4.jar)</li><li>MySQL Connector/J 5.1.30 (mysql-connector-java-5.1.30-bin.jar)</li></ul> | <ul><li>Microsoft JDBC Driver 4.0 for SQL Server (sqljdbc4.jar)</li><li>PostgreSQL JDBC driver 8.4 Build 703 (postgresql-8.4-703.jdbc4.jar)</li><li>MySQL Connector/J 5.1.30 (mysql-connector-java-5.1.30-bin.jar)</li></ul> |
| **Process Execution Settings** |
| Cloud Molecule maximum memory | 512 MB | 512 MB | 512 MB | 512 MB | 512 MB |
| Maximum simultaneous process executions per account | 50 | 50 | 20 | 50 | 100 |
| Maximum process execution time | 24 hours | 24 hours | 24 hours | 24 hours | 24 hours |
| Maximum Flow Control parallel processing units | 10 | 10 | 10 | 10 | 10 |
| **Test Mode Settings** |
| Maximum Aggregate Document Size | 10 MB | 10 MB | 10 MB | 10 MB | 10 MB |
| Maximum Document Count | 100 | 100 | 100 | 100 | 100 |
| **Web Services Publishing Settings** |
| Default HTTP Workload is Low_Latency_Debug | Yes | Yes | Yes | Yes | Yes |
| HTTP Request Rate Limit (per node in the Atom Cloud) | 5 | 5 | 5 | 10 | 20 |
| Maximum Web Service Request Input Size (Low Latency mode) | 5 MB | 5 MB | 5 MB | 5 MB | 5 MB |
| Authentication Type | BASIC | BASIC | BASIC | BASIC<br />Boomi Gateway | BASIC<br />Boomi Gateway |
| **Atom Worker Settings** |
| Provisioned Atom Workers | 0-2\*\*\*\*\* | 0-2\*\*\*\*\* | 0-2\*\*\*\*\* | 10 | 25 |
| Maximum Running Executions | 20 | 20 | 20 | 20 | 20 |
| Maximum Execution Time (Low Latency mode) | 30 seconds | 30 seconds | 30 seconds | 30 seconds | 30 seconds |
| Maximum General Execution Time (General mode) | 10 minutes | 10 minutes | 10 minutes | 10 minutes | 10 minutes |
| Maximum Queued Executions | 20 | 20 | 20 | 20 | 20 |
| Queued Execution Timeout | 10 seconds | 10 seconds | 10 seconds | 10 seconds | 10 seconds |
| **[Shared Queue Server](../Event-based%20integration/c-atm-Shared_queue_server_8064eceb-9398-4272-8799-833abd7762f4.md) Settings** |
| Disk Usage (per node for persistent Atom message queue storage) | 10 GB | 10 GB | 10 GB | 10 GB | 10 GB |
| Atom Queue Message rate (per node in the Atom cloud) | 7,000 per minute | 7,000 per minute | 7,000 per minute | 7,000 per minute | 7,000 per minute |

- \* Test connection licenses are required to use a Test Atom Cloud. Boomi assigns all test connection licenses.

- \*\* Individual accounts can adjust the number of days following process execution that purging of process logs and document data occurs (**Purge History After X Days**) or set **Purge Data Immediately**. However, individual accounts cannot schedule purging to occur less frequently than the maximum number of days of availability of process logs and document data specified for the Atom Cloud by Boomi.

- \*\*\* If you live in a time zone that does not change for Daylight Saving Time, your scheduled processes run one hour earlier during Daylight Saving Time.

- \*\*\*\* Only Atom Clouds (Americas) configured for ET adjust for Daylight Saving Time.

- \*\*\*\*\* Provisioned upon request depending on Integration license; Max 2.

Contact your representative if you have any questions about your connections or cloud usage, if you are interested in licensing test connections, or to get access to a specific Atom Cloud or Test Atom Cloud in your region.

See the [Licensing topic](../../Platform/c-atm-License_management_7f3b0031-d80a-49a4-a744-e8878108cd38.md) to learn how to view your connections and cloud usage and to see the formula to calculate Atom Cloud volume.
