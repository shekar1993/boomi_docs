# Flow Control step example: Run Each Document Individually option

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-5a1b8e96-d153-4cb3-b925-67d70eb25390"/>
</head>


In this topic is an example of a Flow Control step that uses the Run Each Document Individually option.

![Process using the Flow Control step with the Run Each Document Individually option](../Images/process-dg-flow-control-run-each-individually_4d2c6daf-99e5-452a-8756-653b43023785.jpg)

-   Start step \(Query\) — Retrieves 9 documents

-   Run Each Document Individually is selected:

-   Flow Control step — Passes through document 1

-   Map step — Maps document 1

-   Connector \(Send\) — Sends document 1

-   Flow Control step — Passes through document 2

-   Map step — Maps document 2

-   Connector \(Send\) — Sends document 2

-   And so on. Documents 3–9 are passed, mapped and sent individually through the process.

:::note

If the Run Each Document Individually option and Parallel Processing option are both enabled in the same Flow Control step, the Run Each Document Individually handling occurs within the context of parallel processing. The Run Each Document Individually option slows down any process, including processes set to General mode rather than to Low Latency. Use this option sparingly.

:::