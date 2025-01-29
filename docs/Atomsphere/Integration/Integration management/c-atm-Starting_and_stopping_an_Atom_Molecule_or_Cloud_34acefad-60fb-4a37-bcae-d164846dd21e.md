# Starting and stopping an Atom, Molecule, or Atom Cloud 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-34acefad-60fb-4a37-bcae-d164846dd21e"/>
</head>


Safeguards and best practices are provided to help you safely start and stop Atoms, Molecules, and Atom Clouds.

You need to be on the machine where the Atom, Molecule node, or Atom Cloud's Cloud Molecule is installed to start or stop it.

As a safeguard to prevent execution conflicts, only one instance of a given Atom, Molecule node, or Cloud Molecule is allowed to run on the same machine at one time. This means that if an Atom, Molecule node, or Cloud Molecule is currently running as a service, you cannot also start it as a desktop application and vice versa. Similarly, you cannot start two desktop instances. However, you can have two different Atoms running on the same machine at the same time. For parallel processing and failover capabilities, see information about Molecules.

When you manually stop an Atom, Molecule node, or Cloud Molecule, it waits for currently running processes to complete before it actually stops. The node does not start any more processes while it waits to stop. On the Properties panel, you can specify the number of minutes that the Boomi Enterprise Platform will wait before it forces a restart.

You can cause a Molecule or Atom Cloud to be restarted in one of two ways:

-   Select the **Restart Atom** option on the Atom Information panel \(**Manage** \> **Atom Management**\).
-   Use a Java monitoring tool for JMX management, such as Java VisualVM, to issue a JMX command.


When you restart a Molecule or Atom Cloud, a rolling restart of all nodes is performed. Running processes are allowed to complete before the node they are running on is restarted. You can modify the rolling restart behavior by setting properties on the Properties panel.

## Atom, Molecule node, or Cloud Molecule running on Windows 

When you install an Atom, Molecule node, or Cloud Molecule, it automatically starts as a Windows service. This is the preferred method for running because it does not require a Windows user to be logged onto the machine at all times.

When connecting to some client applications, such as QuickBooks, the Atom, Molecule node, or Cloud Molecule must run as a desktop application under a given Windows user rather than run as a Windows service. Running as a desktop application requires the user to be logged into Windows at all times for the Atom, Molecule node, or Cloud Molecule to run.

## Atom, Molecule node, or Cloud Molecule running on Linux 

After you install an Atom, Molecule node, or Cloud Molecule on a Linux machine, configure it to run as a daemon thread. Doing this prevents the server from shutting down the Atom, Molecule node, or Cloud Molecule when the user logs off the machine.