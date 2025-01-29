# Forked Execution Properties panel 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-cc36d7a8-1708-4e14-b0f8-79b40a08e196"/>
</head>


The Forked Execution Properties panel, which appears on the Atom Management page \(**Manage** \> **Atom Management**\), can be used to set properties that affect how forked executions run.

The properties that you see on this panel are stored in your \<installation\_directory\> in one or more of the following files:

-   /bin/procrunner.vmoptions

-   /bin/procworker.vmoptions

-   /bin/procbrowser.vmoptions


You can set a limited number of properties for configuring forked execution. Other properties that control the basic functionality of forked execution \(such as, file encoding and Java security compatibility\) are inherited from the Molecule or Atom Cloud and cannot be modified.

Properties that you set on the Forked Execution Properties panel do *not* affect any customized Molecule or Atom Cloud script files that you might have created previously \(such as procrunner.ps1, procworker.ps1, or procbrowser.ps1\). If you continue to use those customized scripts, you must update them manually.

## Basic tab 

Each of the following properties is stored in the appropriate vmoptions file—procrunner, procworker, or procbrowser.

| Display Name       | Property Description  |
| --- | --- |
| **Runner Heap Size**   | The amount of memory that is allocated to a JVM being used for forked execution. The default is 512 MB. <br /> `-Xmx`   |
| **Worker Heap Size**   | The amount of memory that is allocated to a JVM being used for Atom Workers, which use forked execution. The default is 512 MB. <br /> `-Xmx` |
| **Browser Heap Size**  | The amount of memory that is allocated to a JVM being used for those browsing connector operations that run in forked executions. The default is 512 MB. <br /> `-Xmx`  |


## Advanced tab 

The following properties are stored in all three vmoptions files—procrunner, procworker, and procbrowser.

| Property Name  | Property Value Default | Format       | Property Description   |
| ---- | --- | ---- | --- |
| **Client Default Connect Timeout**    | 120000   | Milliseconds | The amount of time that the Molecule or Atom Cloud should spend trying to establish an HTTP client connection. Increase this value if the HTTP endpoints are known to take longer than two minutes to return a response. <br /> `-Dsun.net.client.defaultConnectTimeout`                                             |
| **Client Default Read Timeout**       | 120000  | Milliseconds | The amount of time that the Molecule or Atom Cloud should spend attempting to read data from an established HTTP client connection. Increase this value if the HTTP endpoints are known to take longer than two minutes to return a response. <br /> `-Dsun.net.client.defaultReadTimeout`                              |
| **DNS Time to Live**   | 30   | Seconds  | The amount of time that successful DNS lookups should be cached. Decrease this value if you call external hosts that experience frequent IP address changes to their DNS hostname. Entering a value of -1 seconds enables continuous caching, and entering a value of 0 seconds disables caching. <br /> `-Dsun.net.inetaddr.ttl`  |
| **Heap Dump on Out of Memory Error**  | Off   | Check box    | Specifies whether the Molecule or Atom Cloud should automatically generate a heap dump when it encounters an Out Of Memory error. See the topic about [high-volume troubleshooting](r-atm-High_volume_troubleshooting_00efaebc-9e40-4e29-b288-f0636dd53106.md). This property should be used only as directed by the Support team. <br /> `-XX:+HeapDumpOnOutOfMemoryError` |
| **Java Library Path**  | Not set  | String       | Identifies one or more directories to be searched for native libraries. <br /> `-Djava.library.path`  |
| **Prefer IPv4Stack**   | Off   | Check box    | Specifies whether the Molecule or Atom Cloud should use IPv4 for networking. Has been tested with IPv4. Therefore, strongly recommends turning this property on. <br /> `-Djava.net.preferIPv4Stack`  |
| **Retry HTTP Post**   | Off   | Check box    | Specifies whether an unsuccessful HTTP POST request should be resent to the server automatically. <br /> `-Dsun.net.http.retryPost` |


## Custom tab 

The Custom tab can be used to set forked execution properties that you do not see on the Basic or Advanced tabs. The tab is used primarily for adding custom properties that Support might ask you to set.

Any custom properties that you set are stored in all three vmoptions files—procrunner, procworker, and procbrowser.

**![](../Images/main-ic-plus-sign-white-in-blue-circle-16_98f7af60-dd5f-4037-90cd-05cc9dfc5502.jpg) Add a Property**  
Adds a blank Property field to the table.

**Property**  
Used to enter a custom forked execution property. You must enter the complete property. For example, `-Djava.property` or `-Dcom.property`.