# Using a process property’s Unix time 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-960494ed-b8cd-49fd-b3e6-dc7b583384f7"/>
</head>


Use the process property’s Unix timestamp in a readable date and time format to compare or convert times in the Edit Process Properties dialog.

## Procedure

1.  Locate the process's properties file, which is in the `<atom_installation_directory>\execution` directory.

    The file name is named `<the_process_GUID>.properties`.

2.  Open the `.properties` file with a text editor such as Notepad.

    The `com.boomi.execution.lastrun` and `com.boomi.execution.lastsuccessfulrun` dates and times are shown in Unix time \(a long number like 1328628601328\).

3.  To convert a Unix time to a readable format, enter it in an online tool such as [http://www.epochconverter.com](http://www.epochconverter.com).

4.  Compare the date and time to your entry in the Edit Process Properties dialog.