# Flow Control step and fiber executions

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-b03b9567-f7b2-4f43-9c34-b96904744287"/>
</head>


Fibers are the string of steps in the process flow that follow a Flow Control step with Parallel Processing options defined. For example, setting Number of Threads to the number two, spawns two fiber executions.

When a process execution reaches a Flow Control step with Number of Threads or Processes set to a number greater than one, the current \(controlling\) process execution essentially pauses. The current collection of documents are divided according to the desired number of threads and a "fiber" execution is started for each thread. The Flow Control step then waits for each of the fiber executions to complete and handles the results. The controlling process never executes the steps that follow the Flow Control step in the process because they were all executed by the fiber executions.

Fiber executions are very similar to "inline" process executions \(see Process Call\), except that the "child" processes start mid-process — at the Flow Control step from which the fiber execution was launched.