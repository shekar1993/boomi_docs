# Writing to the process log with Groovy

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-33299442-176d-4c4e-b11e-23330cf0ff7e"/>
</head>

When using scripting within a map function or Data Process step, it can be very helpful to view the values of variables at run time to assist with development and debugging. You can do this by writing entries to the process log by using a Groovy script.

:::note

- This can only be done with Groovy scripting. Javascript will not work.
- This will write entries to the process level Log. You cannot write to the document level log.
- Alert notifications will not be sent for entries, regardless of log level (e.g. Warning or Errors).

:::

## Script example

| Category | Details |
| --- | --- |
| **Inputs** | customerNumber (Character) |
| **Outputs** | `<none>` |

```java
// Import the ExecutionUtil class
import com.boomi.execution.ExecutionUtil;

//Retrieve a handle to the logger
logger = ExecutionUtil.getBaseLogger();

//Log your message. You can also use the info(), warning(), severe() and fine() methods to create entries with different log levels.
logger.info("Processing customer: " + customerNumber); 
```

## Additional resources

- [Write to process logs using Groovy](https://community.boomi.com/s/article/write-to-process-logs-using-groovy)
- [Viewing a process log](../Integration%20management/t-atm-Viewing_a_process_log_cf926bcb-17b1-40e4-8a00-321accf98af4.md)
