# Monitoring Molecule and Atom Cloud status 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-5174aa65-fb13-4499-8ee5-07dbb4c3a66f"/>
</head>


Molecule and Atom Cloud owners should periodically monitor the status of their nodes to ensure that they are online.

## About this task

Although node information is available in the Cluster Status panel in the Atom Management page \(**Manage** \> **Atom Management**\), to ensure you receive prompt notification of problems, Boomi recommends that you write or schedule a batch script, or configure a separate monitoring tool, to do the following:

## Procedure

1.  Maintain a list of the IP addresses of the expected nodes. If an IP address changes, update the list of expected IP addresses.

2.  For each IP address:

    1.  Ensure that an `<installation_directory>\bin\views\node.localhostid.dat` file exists for each expected node IP address. There are other files in this directory, so the specific file name should be used. The `localhostid` in the file name has non-ASCII characters replaced with underscores \(\_\). For example, the IP address `127.0.0.1` appears as `node.127_0_0_1.dat`.

        If a node’s `.dat` file is missing, the node is not running. Configure your script or monitoring tool to raise an alert.

    2.  Verify that the date modified timestamp for each `.dat` file has been updated in the last 10 minutes.

        If the date modified timestamp is more than 10 minutes old, the node is unresponsive. Configure your script or monitoring tool to raise an alert.

    3.  Read each file and look for the presence of a property called `problem`.

        If a `problem` property exists in the `.dat` file, the node has detected a problem with the cluster. Configure your script or monitoring tool to raise an alert. See the Cluster Problems topic for more information.

    If an `<installation_directory>\bin\views\node.localhostid.dat` file is found for each expected node, and the file is updated regularly, and the file does not contain any problem properties, the cluster is running as expected.