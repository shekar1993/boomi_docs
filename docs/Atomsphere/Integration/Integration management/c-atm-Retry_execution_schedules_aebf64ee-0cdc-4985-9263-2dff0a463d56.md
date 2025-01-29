# Retry execution schedules 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-aebf64ee-0cdc-4985-9263-2dff0a463d56"/>
</head>


You can add a retry schedule to a process, which automatically reruns any documents that failed during a process execution.

:::caution

Failed documents rerun regardless of whether an execution is scheduled or started manually.

:::

If you set up a schedule, you do not need to manually review and rerun the failed documents on Atom Management's Deployed Processes panel.

Retry schedules are added the same way that you add a process execution schedule. There is an additional option for setting the maximum number of retries that will be attempted.

This icon ![Calendar](../Images/main-ic-calendar-green-arrow-26x22_45218fbf-c61d-4ece-ae53-867aecbdf997.jpg) appears on retried process executions on the Process Reporting page.

When a process execution is retried, it checks for failed executions and failed documents associated with these executions. For every failed execution that is found, a new execution \(retry execution\) is created containing all of the failed documents.

If all of the documents complete successfully after the process execution is retried, then no more retries are executed. However, if failed documents remain, then these documents continue to be retried until they are successful or until the maximum number of retries has been reached for the process execution.

For retried executions, the ![Calendar](../Images/main-ic-calendar-green-arrow-26x22_45218fbf-c61d-4ece-ae53-867aecbdf997.jpg) icon links to the original process execution. If there are multiple failed executions for a process, there is a separate retry execution for each original execution rather than a single retry execution containing all of the failed documents for all executions. Separate retry executions allow tracking back to the original execution. If a retry execution is successful, the retry does not change the original execution to a green status; it stays red.

After being deployed, the retry execution attempts to rerun all failed documents, even those from *past executions*.

-   If your process is deployed to an Atom, you can prevent the execution from retrying all documents by deleting the files in the ../\<atom\_installation\_directory\>/execution/error directory then restarting the Atom.

-   If your process is deployed to a Atom Cloud and you want to prevent the execution from retrying all documents, contact Support for assistance.