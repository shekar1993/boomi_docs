# Rolling back an Atom, Molecule, or Atom Cloud to use its previous version of Java 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-b168acd7-3fad-4487-b1d7-38bebd833301"/>
</head>


You can roll back an Atom, Molecule, or Atom Cloud to the previous version of Java in the Boomi Enterprise Platform.


## About this task

If you upgraded an Atom, Molecule, or Atom Cloud to the latest Java version and want to roll it back to the previous version, you can use the . You can also use the AtomSphere API to roll back the Java version. For more information about this topic, see [Roll back Java operation](https://developer.boomi.com/api/platformapi#tag/JavaRollback). The **Roll back** option is not available if:

-   The Atom, Molecule, or Atom Cloud is offline

-   The container is not upgraded to the latest Java version

-   There is no jre_a (previously named jre_backup) folder in the installation directory

## Procedure

1.  In the user interface, navigate to **Manage** \> **Atom Management**.

2.  Select the Atom, Molecule, or Atom Cloud that you want to roll back and click **Java Information**.

3.  The **Java Information** panel displays information related to the Java provider, including the current Java version and when the Atom, Molecule, or Atom Cloud was last updated. Click **Roll back** to roll back the Java version. A confirmation dialog opens, showing the current Java version and to which version of Java the Atom, Molecule, or Atom Cloud would roll back.

4.  Click **Roll back** to confirm that you want to roll back the Java version. The confirmation dialog closes and a pop-up displays in the bottom right corner of the screen, indicating that the roll back will begin shortly.