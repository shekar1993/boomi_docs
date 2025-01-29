# Process Summary Report gadget 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-6b311fc0-f221-41c3-af71-5f59cfb56fdd"/>
</head>


The Process Summary Report gadget on the Real-time Dashboard page shows a summary record for the executions of each low latency process that occurred in the selected time and/or date range.

The icon to the left of a process row shows the most severe status that occurred during the processes’ multiple executions. For example, if a process executed 10 times and resulted in 8 successful completions, 1 completion with warning and 1 completion with errors, then the row has a red \(error\) icon next to it.

-   ![Green circle](../Images/main-ic-circle-green-20x22_0a620eac-494b-4d65-9f1f-6b372abe7acd.jpg) A green circle indicates that all executions of the process completed successfully.

-   ![Yellow warning triangle](../Images/main-ic-triangle-warning-yellow-16_a265c92a-c628-4a9a-a310-8f3d568c9a25.jpg) A yellow triangle indicates that at least one of the executions of the process completed with warnings. All of the other executions either completed successfully or with warnings.

-   ![Red circle with white dash](../Images/main-ic-bar-white-on-red-circle-20_bb816599-0e68-436e-a92a-dafa82affda4.jpg) A red icon with a white bar indicates that at least one of the executions of the process completed with errors. All of the other executions either completed successfully with warnings or with errors.


Click a process name to expand the row for detailed information for each status. Click the process name again to collapse the row.

The Process Summary Report gadget displays the following details about the low latency processes that occurred in the time and/or date range that you selected.

**Name**  
**Description**

**Process Name**  
 Name of the low latency process.

**Average Response \(ms\)**
The sum of total response times divided by number of times the low latency process executed. This provides the average time in milliseconds \(ms\) for the low latency process to complete.

**Standard Deviation**  
The standard deviation in milliseconds \(ms\) of the process executions for the selected time period.

**Number of Executions**  
The number of times the low latency process executed.

**Average Inbound Size \(bytes\)**  
The sum of total inbound document sizes divided by number of times the low latency process executed provides the average size of the low latency processes’ inbound documents.

The letter following the size indicates whether it is shown in bytes \(b\), kilobytes \(k\), or megabytes \(M\).

**Average Inbound Count**  
 The number of inbound documents divided by the number of times the low latency process executed provides the average number of inbound documents.

**Average Outbound Size \(bytes\)**  
The sum of total outbound document sizes divided by number of times the low latency process was executed provides the average size of the low latency processes’ outbound documents.

The letter following the size indicates whether it is shown in bytes \(b\), kilobytes \(k\), or megabytes \(M\).

**Average Outbound Count**  
The number of outbound documents divided by the number of times the low latency process was executed provides the average number of outbound documents.

**Average Returned Size \(bytes\)**  
The sum of total document sizes returned by a Return Documents step divided by number of times the low latency process was executed provides the average size of the documents returned by the low latency process.

The letter following the size indicates whether it is shown in bytes \(b\), kilobytes \(k\), or megabytes \(M\).

See the Return Documents step topic for more information.

**Average Returned Count**  
The number of documents returned by a Return Documents step divided by number of times the low latency process was executed provides the average number of documents returned by the low latency process.