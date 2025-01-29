# Retrying a previous test in test mode

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-22a67dfc-fce3-4ba3-b950-0695fcc4ede2"/>
</head>


Retrying a previous test is a faster alternative than rerunning a test from scratch.

## About this task

When developing new processes, Test mode is an important debugging tool. If you are continually making updates to a process, you can choose to retry previous tests. This prevents you from having to rerun the test from scratch and continually access the source system to bring documents into the process flow. This is helpful, for example, when your connector operation is set to get and delete inbound documents so you do not need to continually reset the data in your source system.

## Procedure

1.  Assuming that you have run a previous test and the process is still open in test mode, click the drop-down arrow next to the process name and select **Retry Previous Test**.

2.  Select the desired test execution from the first list box.

3.  Click the arrow next to **Documents** to display the documents available to be retried.

4.  Turn on the check boxes next to the documents to be retried.

5.  Click the arrow next to **Test Extensions** and update the test extension values as needed.

6.  Click **Run Test**.

    :::note

    Previous test documents are accessible only when the process is open. Closing the process erases the queue of test executions and you need to rerun and get documents from your source connector.

    :::