# Properties panel, Basic tab 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-8eb9b9cf-e371-44ba-897f-4232ce22f122"/>
</head>


The Properties panel Basic tab is used to set properties that are essential to any Atom, Molecule, or private Atom Cloud.

| Display Name | Property Description |
| --- | --- |
| **Atom Name** | The name that was assigned to the Atom, Molecule, or Atom Cloud when it was installed, or the local host name if no name was specified. <br /><br />`com.boomi.container.name` |
| **Host Name** | The name or IP address of the machine where the Atom, Molecule, or Atom Cloud is installed. <br /><br /> `com.boomi.container.hostName`<br /><br />**Note:** This property is not stored in the container.properties file. |
| **Purge Data Immediately** | If selected, processed documents and temporary data are purged immediately after a process execution ends. This setting does not affect when logs are purged. If this setting is off, the process option takes precedence.<br /><br />`com.boomi.container.purgeImmediately` |
| **Purge History After X Days** | The number of days following a process execution that the purging of logs, processed documents, and temporary data occurs. <br /><br />`com.boomi.container.purgeDays` |
| **Force Restart After X Minutes** | The number of minutes that the will wait for processes to finish before it forces the Atom, Molecule, or Atom Cloud to restart. <br /><br />`com.boomi.container.forceRestart`<br /><br />On the Properties panel's Custom tab, you can set the property `com.boomi.container.forceRestart.cancelQueueExecutions` to `TRUE` to cancel Atom queue listener executions that run longer than the value set in this property. |
| **Heap Size** | The amount of memory that is allocated to applications running in the JVM. The default is 512 MB. You should increase this value if you are processing large data sets, have a high frequency of process executions, or both.<br /><br />For 64-bit operating systems, you can increase the value up to 80% of the available RAM (assuming that no other applications are running on the same server). For 32-bit operating systems, you can increase the value up to 80% of the available RAM to a maximum of 2GB.<br /><br />`-Xmx` |
| **File Encoding** | The default character set that the Atom uses to transform bytes to characters (and characters to bytes) if no explicit character set is provided. <br /><br />`-Dfile.encoding` See [Java 8](https://docs.oracle.com/javase/8/docs/technotes/guides/intl/encoding.doc.html) and [Java 11](https://docs.oracle.com/en/java/javase/11/intl/supported-encodings.html) for a list of encoding options.|
| **Temporary Directory** | The location of the temporary directory for system-level temporary files. <br /><br />`-Djava.io.tmpdir` |
| **Use Local Storage for Runtime Assets** | Runtime assets and temporary execution artifacts are automatically stored in the local cluster nodes instead of the shared file system. Files are stored in the *Working Data Local Storage Directory* specified below. It is highly recommended that you enable this for Molecules and Atom Clouds.|
| **Working Data Local Storage Directory** | Sets the directory path on the local cluster nodes to store runtime assets and temporary execution artifacts. Refer to the topic about [working data storage](c-atm-Molecule_and_Atom_Cloud_working_data_storage_b18ef1af-1e37-4a33-8712-d600f4e7b29d.md). It is highly recommended that you set this for Molecules and Atom Clouds.|