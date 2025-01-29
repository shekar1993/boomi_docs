# Shared web server 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-f9f50738-1a26-4aba-8f3a-f09fef752777"/>
</head>


You can configure your Atoms, Molecules, and Clouds to listen for requests from clients in real time through an embedded web server. You can configure the shared web server at the account and account user level to control network and security settings.

## Load balancing 

Scheduled and manual processes are load balanced by the cluster. In a Molecule or in a private Atom Cloud, listener processes are not balanced on their own. If you use a Molecule or a private Atom Cloud with a web server, have an HTTP load balancer in front of the nodes. The load balancer distributes process executions received via the shared web server across the Molecule nodes or Cloud Molecules. If one node goes down, the process executions are passed to another node.

However, if an Atom worker is enabled for an account, process executions go directly to the Atom worker, therefore load balancing is used to distribute the web server’s load. If an account does not have an Atom worker, its web service requests are load-balanced across the cluster.

After you install a load balancer, configure client applications to send requests to an endpoint, which would be the load balancer. The load balancer virtualizes and abstracts the Atom endpoints from the client application. To have a more friendly DNS URL endpoint, obtain one from an DNS provider and configure it within your network.

:::note

If you use one of the  Atom Clouds, they automatically do load balancing for you.

:::

## Security 

For information about the Atom Cloud and web services and on-premise Atoms and web services, see the Services enablement and building web service processes topics.