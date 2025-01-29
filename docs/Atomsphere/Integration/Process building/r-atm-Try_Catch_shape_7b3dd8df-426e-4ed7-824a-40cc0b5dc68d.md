# Try/Catch step

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-E38783AF-EA8B-4421-BF62-A7E0FEEECB1C"/>
</head>


The Try/Catch step captures process-level errors or document-level errors for one or more documents that failed during execution. The Try/Catch step must be placed *before* the main processing steps in your process. The Try/Catch step sends documents down the Try path to be processed. Documents that fail are caught and are sent down the Catch path.

![Try/Catch icon](../Images/step-ic-catch-errors-32_2fdb7307-674a-446f-89d2-4cc99459997f.jpg)

The Try/Catch step allows you to design advanced logging and processing for failed documents because these original documents and properties are sent down the Catch path. You can also capture the exception logged within the original path and include it in your messaging via a parameter reference to a document property (Metadata \> Try/Catch Message). The goal of the Try/Catch step is to prevent process-level failures in the event that a document fails so that you can act upon it later in your process flow.

The Try/Catch step has an optional setting, **Failure Trigger**, that you can use to catch process errors as well as document errors.

:::note

The Try and Catch paths are executed in separate execution threads. For any failed documents, the Try path is always executed first followed by the Catch path.

:::

## Try/Catch dialog

**Name**   
**Description**

**Display Name**   
User-defined name to describe the step. If one is not entered, “Try/Catch” appears on the step.

**Retry Count**   
Numeric value \(from 0 to 5\) that defines the *maximum number of times* a failed document will be retried through the main series of steps AFTER the Try/Catch step.

The Retry Count option pauses between retries.

-   0 = The document will not be retried. Use this setting if you want to catch the error and deal with it in some other way. For example, archive the inbound document, send an email alert, etc.

-   1 = The first retry occurs immediately following the first document failure.

-   2 = If the document fails a second time, the system waits 10 seconds before retrying.

-   3 = If the document fails a third time, the system waits 30 seconds before retrying.

-   4 = If the document fails a fourth time, the system waits 60 seconds before retrying.

-   5 = If the document fails a fifth time, the system waits 120 seconds before retrying a final time.

:::note

The Try/Catch step does not execute auto-retries while in Test Mode.

:::

**Failure Trigger**   
Used to specify the types of errors that the Try/Catch step catches:

-   Document Errors \(the default\)

-   All Errors – Document and process errors


The following errors are captured, no matter how the **Failure Trigger** field is set:

-   Connectors that log errors for specific documents when errors occur \(e.g., if an update operation fails because the document has an invalid ID\)

-   An Exception step that has the Stop Single Document check box turned on

-   A Map step, if it does not produce any output, generates a validation error or generates a connector error.


The following errors are *not* captured if the **Failure Trigger** field is set to Document Errors. If you want to capture these errors you must set the **Failure Trigger** field to All Errors.

-   NullPointerExceptions and similar process-level errors

-   An Exception step that has the Stop Single Document check box turned off

-   Connectors that cause a full exception error to be thrown back to the process instead of capturing the error internally and logging it per document.


:::note

-   If there is one Try/Catch step in a process and its **Failure Trigger** is set to Document Errors, then it catches only document-level errors. This is the default behavior.

-   If there is one Try/Catch step in a process and its **Failure Trigger** to All Errors, then it catches process and document-level errors.

-   If a process contains one Try/Catch step followed *immediately* by a second Try/Catch step \(for example, Some step \> Try/Catch step \#1 \> Try/Catch step \#2 \> Some Other step\), it works differently. The outer Try/Catch step \(Try/Catch step \#1\) catches document and process errors, regardless of how its **Failure Trigger** is set. The inner Try/Catch step \(Try/Catch step \#2\) catches errors as indicated by its **Failure Trigger** setting.

-   As of the August 2015 release, if a process contains two Try/Catch steps that have other steps between them \(for example, Some step \> Try/Catch step \#1 \> Some Other step \> Try/Catch step \#2 \> Some Other step\), then each Try/Catch step catches errors as indicated by its **Failure Trigger** setting. This is the corrected behavior. If your process works differently as of the August 2015 release and if you want to revert to the pre-August behavior, change the outer Try/Catch step’s \(Try/Catch step \#1’s\) **Failure Trigger** to All Errors.

:::