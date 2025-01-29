# Shared web server traffic control 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-dd92205c-a59e-4b8a-a355-b781efa8a879"/>
</head>


An Atom Cloud owner can set multiple properties per Cloud Molecule or attached Atom to control shared web server traffic on the **Attachment Quotas** tab on the **Cloud Management** page.

The following properties can be set by the Atom Cloud owner per Cloud Molecule or attached Atom to control shared web server traffic:

-   maximum number of requests per second

-   maximum input size for requests

-   maximum number of concurrent executions


For an Atom Cloud on which Atom workers are enabled, the owner can additionally set the following properties per Cloud Molecule or attached Atom:

-   maximum number of concurrent executions per Atom worker

-   maximum process execution time

-   maximum number of extra queued processes when the maximum number of processes is running

-   maximum time that a queued job can wait to be executed


These properties are set on the **Attachment Quotas** tab in the Cloud Management page \(**Manage** \> **Cloud Management**\).