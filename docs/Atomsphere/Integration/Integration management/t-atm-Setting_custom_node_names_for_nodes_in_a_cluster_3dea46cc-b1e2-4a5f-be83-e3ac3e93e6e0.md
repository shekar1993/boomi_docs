# Setting custom node names for the nodes in a cluster 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-3dea46cc-b1e2-4a5f-be83-e3ac3e93e6e0"/>
</head>


You can change the default node name, which is based on the IP address of the machine on which the node is running.

When setting a custom node name, you can simplify the management of nodes in a cluster by setting the name to something other than the IP address. If you are running multiple nodes on the same machine, you *must* set a unique node name for each node in the Molecule or Atom Cloud explicitly.

:::caution

Running multiple nodes on the same machine is *not* recommended for a production installation, and it will *not* work with forked execution enabled.

:::

Boomi supports an environment variable that enables you to define a unique, persistent name for each node in a cluster.

:::note

For nodes that were installed by using Docker, you do not need to set the environment variable. The Docker installation script sets the environment variable automatically based on the node name string rather than the Docker container IP address.

:::

## Procedure

1.  In a system initialization script or from the command line, use the ATOM\_LOCALHOSTID environment variable to specify a node name.

    For example, on Linux you specify the following:

    `export ATOM_LOCALHOSTID="node_name"`

2.  Use the `<atom\_installation\_directory\>/bin/atom` script to start the node, or restart the node if it is currently running.