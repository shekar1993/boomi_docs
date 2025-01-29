# Atom data directory structure 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-69a64ba7-502e-4c5f-b662-7bdfc36471f9"/>
</head>


You can designate subdirectories to store Atom data files.


In the default setup, process data is stored in the \<atom\_installation\_directory\>/data/\<creation\_date\> directory. A process stops if the number of data files to be stored exceeds the file system limit for files in a single directory.

If this type of stoppage happens, set a container property that causes data to be stored in various subdirectories under the \<creation\_date\> directory. You can set the Atom Data Directory Level property \(`com.boomi.container.dataDirNestLevel`\) to a value from 0 to 4. The default is 0, which causes all data to be stored in the root directory. When the value is set to a number greater than 0, data directories for a given execution data are nested using subdirectories whose names are derived from the data storage IDs in data filenames.

For example, a data file named 11223344.dat has a data storage ID of `11223344`. If this file was created on January 8, 2017, it is stored in one of the following directories, depending on the Atom Data Directory Level value \(subdirectories are created automatically where necessary\):

-   0 — \(the default\) data/2017.01.08

-   1 — data/2017.01.08/11

-   2 — data/2017.01.08/11/22

-   3 — data/2017.01.08/11/22/33

-   4 — data/2017.01.08/11/22/33/44


Boomi recommends not decreasing the Atom Data Directory Level after it has been set because that prevents processes from locating stored data files.



**Note:** Data storage IDs shorter than eight digits are right-padded with zeros for the purpose of creating a subdirectory structure. For example, with the Atom Data Directory Level property set to 4, a data file named 11.dat would be stored in data/\<creation\_date\>/11/00/00/00.

The Boomi Test Atom Cloud’s Atom Data Directory Level property is set to 2.