# Flow Control step example: Parallel Processing option

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-22e12870-d2f4-485d-b5ee-7a385377f94b"/>
</head>


In this topic is an example of a Flow Control step that uses the Parallel Processing option.

![Process using the Flow Control step with the Parallel Processing option](../Images/process-dg-flow-control-parallel-processing_d633b570-e53c-43de-8994-e17971fa1190.jpg)

-   Start step \(Query\) — Retrieves 9 documents

-   Parallel Processing Type is Threads and Number of Threads is 2:

    -   Flow Control step

        -   Creates group 1 with documents 1-5

        -   Creates group 2 with documents 6-9

    -   Group 1 \(concurrently with Group 2\)

        -   Map step — Maps documents 1-5

        -   Connector \(Send\) — Sends documents 1-5

    -   Group 2 \(concurrently with Group 1\)

        -   Map step — Maps documents 6-9

        -   Connector \(Send\) — Sends documents 6-9