# Configuring a Windows Atom to use Hadoop native IO libraries 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-ff8c6690-fe66-4ce5-a194-d173a19f3d04"/>
</head>


To use the Hadoop native IO libraries on Windows,, configure a Windows Atom. .

## Procedure


1.  Create a new folder under the Atom root folder and name it userlib/hadoop/bin.

2.  Extract the contents of the hadoop-bin-Win32.zip or hadoop-bin-Win64.zip to the new folder.

3.  Set the library path in bin/atom.vmoptions to: -Dhadoop.home.dir=atom\_installation\_directory/userlib/hadoop -Djava.library.path=atom\_installation\_directory/userlib/hadoop/bin.