# Methods for executing a process

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-25766e7d-5991-4bc5-895f-6c2c2a3378cb"/>
</head>


There are several ways that you can cause a process to execute.

-   Set a schedule — This is the most common method use to execute a process. Schedules can be set in as little as one-minute intervals to kick off the Start step. A process retrieves zero documents if a schedule is enabled on a Start step using a web server connector because the process is set to listen for documents in real-time.

-   Process Call step in a parent process — The child process executes for each document that is forwarded to the Process Call step if the Connector or No Data option is selected. Review the Passthrough option to learn how this option affects the processing. A parent and child process fails if a process call in the parent is set to call a child enabled with web server listening.

-   Process Route step in a parent process — The child process executes based on a reference that is set at run time.

-   Execute Process API — Any of the Start step options can be used for this method, with the exception of trading partners or connectors that require web server listening.

-   Web Server Listening — The methods above does not work if a connector option or trading partner option is defined with one of the following connectors.

    -   AS2 Server Connector - Legacy

    -   Web Services Server Connector