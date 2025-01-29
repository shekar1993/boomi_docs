# Process and document log viewing 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-b4a3524e-7797-4406-b1fe-1f2ff0b2bfc6"/>
</head>


Viewing logs and understanding the information contained in them is an important part of building, testing, and monitoring processes.

Logs can help you research where a process failed and why. Boomi Resolve also shows a list of possible solutions to some errors. However, for some errors you will need to refer to your system documentation for more information and for a suggested resolution. It is outside the scope of the Boomi Enterprise Platform to provide documentation for all types of errors from every application.

Execution events are logged in two places: at the process level and at the individual document level. Process logs record the overall execution for all documents processed, whereas document logs record the execution of a single document. Both types of logs contain a chronological account of what happened during a given execution, including the order in which steps were executed and their outcome, as well as any error messages.

Errors can be logged to either type of log or both, depending on the nature of the error. When you see errors, it is a best practice to consult the process log first to try to identify where the error occurred. Then, look at the document logs for failed documents for more information.

In addition to viewing the process and document logs, you have access to other types of reports about executed processes. You can:

-   View the deployed version of the process in another web page.

-   View the components in the process.

-   View the sequence in which the process steps were executed and the time it took to execute each step.

-   View or download extended information about the process, such as the IDs of the process, Atom, etc.

-   Cancel the process if it has not yet completed.

:::note

Although logs are viewed centrally from the Manage menu, the actual log information is stored locally with the Atom. Consequently, the Atom must be online for you to view logs. Document and process logs can be downloaded and viewed by selecting on the Actions \(gear\) icon for a single process in Process Reporting, and selecting "View Extended Information" from the list of options.

:::