# Configuring a Linux Atom to use Hadoop native IO libraries 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-40c2124b-e46e-4095-985c-ad816d2514a9"/>
</head>


To use the Hadoop native IO libraries on Linux, configure a Linux Atom.

## Procedure

1.  Create a new folder under the Atom root directory and name it **userlib/hadoop/native**.

2.  Extract the contents of either the *hadoop-lib\_native-Linux64.tar.gz* or the *hadoop-lib\_native-Linux32.tar.gz* to the new folder.

3.  Set the library path in **bin/atom.vmoptions** to: **—Djava.library.path=/home/userid/Boomi\_AtomSphere/Atom\_xxx\_q/userlib/hadoop/native**

4.  Alternatively, you can set the environment variable to `export LD_LIBRARY_PATH=/home/userid/Boomi_AtomSphere/Atom/Atom_xxx_qa/**userlib/hadoop/native**`