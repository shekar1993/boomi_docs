# Adding a node-specific container.properties file 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-87133ce8-ed21-463b-a7ed-01c3b81a5d0f"/>
</head>


To set a Molecule’s or Atom Cloud’s container properties differently on a per-node basis, create a separate `container.properties` file for the node and set its properties.

## About this task


The values in the node’s `container.properties` file override any values in the Molecule or Atom Cloud’s `container.properties` file that are relevant to that node. Properties that are set in the user interface always modify the Molecule or Atom Cloud’s `container.properties` file and never the node’s `container.properties` file.

## Procedure

1.  Use a text editor to create a `container.properties` file. Name the file to include the node’s localHostId, as follows:

    `container.<localHostId>.properties`

2.  Add to the `container.<localHostId>.properties` file *only the properties that you want to override*.

3.  Set the override values for the properties.

4.  Save the `container.<localHostId>.properties` file in the Molecule or Atom Cloud’s `<installation_directory>\conf` directory.

5.  Repeat steps 1–4 for each node that needs a separate file.

6.  Restart the nodes that have new `container.properties` files.

    Nodes that have a separate `container.properties` file use the properties that have been modified in their file. Nodes that do not have a separate file continue to use the properties in the Molecule or Atom Cloud’s `container.properties` file.