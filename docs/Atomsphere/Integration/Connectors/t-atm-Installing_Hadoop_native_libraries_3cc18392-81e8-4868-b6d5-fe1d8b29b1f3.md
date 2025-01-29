# Installing and configuring the standalone Hadoop package 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-3cc18392-81e8-4868-b6d5-fe1d8b29b1f3"/>
</head>

To help verify and troubleshoot the Hadoop configuration and functionality on the computer that runs the Atom, install and configure the standalone Hadoop package. This step is optional.

## Procedure

1.  Download the Hadoop v.2.2.0 distribution from the developer archive.

2.  Extract the contents of the hadoop-2.2.0.tar.gz file to a local folder.

3.  Configure the Atom to use the Hadoop native IO libraries. Follow the configuration instructions links in **Related Tasks**.

4.  Use one of the following commands to set the `JAVA_HOME` environment \(Windows\), or export the `Java_HOME` environment \(Linux\):

    -   Windows: set JAVA\_HOME=C:/Boomi\_AtomSphere/Atom/Atom\_name/jre
    -   Linux: export JAVA\_HOME=~/home/username/Bomi\_AtomSphere/Atom/Atom\_name/jre
5.  Point a variable to the JRE. You can reuse a private JRE if you deploy it with the Atom.

6.  Run Hadoop sample commands.