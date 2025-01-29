# Disk (Legacy) connection 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-e01149d6-13ec-4c4d-9bb0-9dfba1cf155a"/>
</head>


The Disk (Legacy) connection represents a directory on the file system of the machine where the Atom is running. The directory can be local or on a network.

## Settings tab 



**Directory** - 
The directory to which the data is written or read.

-   The path can be local \(e.g. C:\\TEMP or /tmp/\), a UNC path \(e.g. \\\\server1\\share\), or an NFS path \(e.g. /home/Boomi\).

-   The path can be absolute \(full path from the operating system's root directory\) or relative to the Atom installation directory \(..\\Boomi Platform\\Atom — `<Atom_name>` by default\).

-   For Windows, you can use forward or back slashes interchangeably for directories \(for example, either C:\\Temp and C:/Temp\).