# Rerunning documents in Process Reporting 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-bc807a70-0433-4770-9f91-779e573fb816"/>
</head>


You can rerun documents directly from the Process Reporting page without re-executing the process.

This is useful when troubleshooting or reprocessing data that no longer exists in the source system. For example, a process gets and deletes files from a trading partner's FTP site, so those files no longer exist after the first execution. You can reprocess one of those files directly from the Process Reporting page without having your trading partner recreate the file.

The following documents can be rerun:

-   Successful or failed documents from the Start step. This includes documents from a process that failed because the Atom stopped running. You can rerun all documents, all documents with errors, all successful documents, or only the documents that you select.

-   Successful or failed documents in a Trading Partner connection. You can rerun all documents, all documents with errors, all successful documents, or only the documents that you select.


Here are considerations and limitations about rerunning documents:

-   Test mode executions do not produce documents that can be rerun.
-   You can rerun documents in test mode. When selecting one or more inbound documents, this feature launches a pop-up that sends the documents through the latest process version on the Build page so you can troubleshoot inbound documents from beginning-to-end through each step. Be sure to enable pop-ups for `platform.boomi.com`.

-   You can rerun a document from a subprocess but ensure that the subprocess has been deployed.

-   You can rerun documents only in subprocesses with a Start step that is a connector.

-   You cannot rerun the document from a subprocess if the subprocess is only deployed as part of the primary process.

-   You cannot rerun documents in subprocesses with passed data.