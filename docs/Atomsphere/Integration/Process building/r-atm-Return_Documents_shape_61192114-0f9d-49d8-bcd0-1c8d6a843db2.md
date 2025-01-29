# Return Documents step

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-AE43B7DF-52DF-4A48-8DEF-191B7D74EE4A"/>
</head>


The Return Documents step is placed at the end of a document path and returns the documents to the calling source point.

![Return Documents icon](../Images/step-ic-return-documents-32_6949f302-14ab-4b3f-9129-f784a1a42f02.jpg)

The calling source point is one of the following:

-   The parent process

-   A web service client application


When you create a Return Documents step you should give it a custom label. The label is a user-defined name that should, in most cases, identify the document type\(s\) that reach the step during a process execution. It is also important when it is used with a Process Call or Process Route step. If a custom label is not entered, Return Documents appears on the step.

## Returning documents to the parent process

Depending on your integration scenario, you might want to organize your integration across multiple processes, where each process performs a specific task. This approach also helps to control process design space and limit the number of steps per execution. You can have a primary process that triggers one or more subordinate processes via the Process Call or Process Route step. It can also be referred to as a parent-child process relationship.

When using the Return Documents step in a child process, any documents that reach the step are batched and returned to the parent process that called the child process. After a Process Call step, the documents proceed down a new branch. This new branch extends from the associated Process Call step for each new Return Documents step that is added to the child process. The Return Documents label is important in this case so you can route your documents accordingly, as the labels will be visible along each branch extending from the parent process.

For Process Route steps, you can associate Return Document steps with the Return Paths that you define in the Process Route component. For this reason, it is especially important to give the Return Document steps unique and meaningful labels.

:::note

The Start step has different actions that affect how the Return Documents step and child processes affect the process flow and logging on the Manage menu. Ensure that you are using the proper Start step action along with the parent Process Call or Process Route step to return the necessary responses.

:::

## Returning documents to a web service client application

When the Services Enablement feature is enabled in your account, you can build a Web Services Server listen operation into your process to accept requests in real-time from client applications. There are cases for web developers where a synchronous response is desired when invoking a web service process. The Return Documents step is the only step that can be used to batch all documents that reach it during the process execution and return the response data to the web server client to end the conversation.

:::note

Only one Return Documents step should be used per process to return a response to the client. Consider building other web service processes to return unique responses for each object/action that you would like to integrate. Review the Web service processes topic to learn how this step is used to send synchronous responses to an external calling application via the Atom's embedded web server.

:::