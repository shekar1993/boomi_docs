# JMS (Legacy) connection 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-1a041744-30c0-4d63-8048-3b86aca9f20b"/>
</head>


The JMS (Legacy) connection contains all of the information that is needed to connect to a specific JMS provider. The connection supports generic JNDI connections, as well as connections to some common JMS providers.

The connector has been tested against the following common JMS providers:

-   Generic JNDI
-   ActiveMQ
-   Oracle AQ \(WebLogic\)
-   SonicMQ
-   Websphere MQ
-   Oracle AQ
-   Solace

Each provider has its own setup steps, as well as specific JMS (Legacy) connector setup steps.

## Authentication Options tab 

The following fields appear on the Connection tab for each JMS provider:

**Use Authentication?** -
Select to use authentication.

**User Name** - 
The user name with which to authenticate.

**Password** -
The password for authentication.

## Connection Pool tab 

Integration manages connection pools as follows:

-   A connection pool is identified by the connection component’s ID and its connection settings. This combination enables you to configure one component to communicate with different JMS queues. For example, you can define process extensions for connection settings so that one component can operate in separate connection pools.
-   When you change a connection’s primary settings \(for example, **User Name** or **Password**\) on the Connection tab, a new connection pool is created when the connection is redeployed. This allows existing pools used by deployed processes to continue to operate without interruption.
-   When you change a connection’s secondary settings \(for example, **Maximum Connections** or **Minimum Connections**\) on the Connection Pool tab, the existing connection pool is updated the first time the new version of the connection is requested.
-   Every 30 minutes, Integration monitors all connection pools used by the connector to reclaim unused connections and to restart extra connections needed to satisfy the **Minimum Connections** setting. When a connection pool has not been used in six hours and it has no active connections, it is considered a dead or surplus connection.

There are several ways you can change your pool settings:

-   To override the connection pool settings, change your connection settings and restart your Atom.
-   To make changes immediately, change your connection settings and redeploy your process.
-   To make changes without restarting your Atom, for example in extensions, make the changes. Then, leave the connection unused for 30 minutes in a process. The idle timeout generates a fresh connection pool the next time your process runs.


:::note

Most integrations do not require connection pooling. Consider pooling if you use low latency to speed up processes or if you execute a large number of statements during an integration.

:::

The following fields appear on the Connection Pool tab for each JMS provider:

**Connection Pooling** - 
Enables connection pooling and makes other fields active. Connection pooling may increase performance by using resources more efficiently.

**Maximum Connections** - 
The maximum number of connections allowed in the pool at any time. The default is -1, which indicates an unlimited number of connections. You receive an error if you attempt to exceed the maximum value indicated.

**Minimum Connections** - 
The minimum number of connections allowed in the pool at all times. The default is 0.

**Maximum Idle Time** - 
The length of time in seconds that a connection can remain open in an idle state.

**When Exhausted Action** - 
Indicates whether to wait for a connection or immediately fail when a connection pool becomes exhausted.

**Maximum Wait Time** - 
The length of time in seconds to wait for a connection from the pool.