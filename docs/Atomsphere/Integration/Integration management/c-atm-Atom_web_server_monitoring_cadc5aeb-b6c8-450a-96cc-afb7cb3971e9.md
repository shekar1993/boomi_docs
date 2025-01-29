# Atom web server monitoring

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-cadc5aeb-b6c8-450a-96cc-afb7cb3971e9"/>
</head>

You can monitor the general health and availability of an Atom and its web server by periodically checking the Atom status endpoint:

`http://<host>:<port>/_admin/status`

:::note

This endpoint is available only when the web server is started. You can start the web server by deploying an API. Alternatively, you can set the following container property to force the web server to start automatically: `com.boomi.container.plugin.force.start.shared_http_server=true`.

:::

This status endpoint enables you to verify that an Atom's web server is active and ready to accept incoming web service requests. The endpoint returns an HTTP status code of 200 OK if the Atom is running and all known listeners have started. Failure to connect with the endpoint or a status code other than 200 means that the Atom is not ready to accept new requests. Knowing the status of an Atom's web server can also help you balance the workload between nodes in a Molecule or Atom Cloud more effectively.

:::caution

The Atom status endpoint is not authenticated.

:::

## Status monitoring

For basic status monitoring, you can use the endpoint to verify that an Atom's web server is active and accepting incoming requests, and that the Atom itself is operational.

## Load balancing

To improve workload balancing and availability in a Molecule or Atom Cloud, you can use the status endpoint together with a property that delays Atom shutdown. Load balancers periodically check the status of each web server, but there is an inherent delay between when an Atom indicates it can no longer accept work and when the load balancer recognizes this status. During this time, the load balancer could continue sending requests to an Atom that is not able to handle them.

:::note

When monitoring the nodes in a Molecule or Atom Cloud, call the status endpoint for individual Atoms from within the load balancer configuration. The status endpoint is intended for use by the load balancer itself — do not use an external web service to call the status endpoint from outside the load balancer.

:::

Atoms have the ability to enforce a delay between the time the status endpoint reports the Atom is not ready and the time that the Atom actually begins shutting down \(during which the Atom can still handle incoming requests\). The Atom Pending Shutdown Delay property \(`com.boomi.container.pendingShutdownWarnTime`\) controls this delay. By default, there is no delay — the Atom Pending Shutdown Delay default value is 0 milliseconds. If you specify a delay value greater than 0, the Atom continues to run during that time, but the status endpoint returns an HTTP status code of 503 Service Unavailable. This status lets the load balancer know that the Atom is not ready to accept new requests and that it should redirect requests to other nodes.

To make best use of this delay, set the Atom Pending Shutdown Delay property to a value greater than the time it takes for your load balancer to recognize that an Atom is no longer available. For example, if you configure your load balancer to check the status endpoint every 5 seconds and remove an Atom after two failed checks, set the Atom Pending Shutdown Delay property to a value greater than 10 seconds. With this configuration, the load balancer can balance the workload with no gaps in availability to web service clients.