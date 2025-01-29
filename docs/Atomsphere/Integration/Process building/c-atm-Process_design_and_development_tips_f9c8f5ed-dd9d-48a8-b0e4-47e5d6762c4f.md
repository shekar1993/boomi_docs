# Process design and development tips

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-f9c8f5ed-dd9d-48a8-b0e4-47e5d6762c4f"/>
</head>


In this topic are tips and suggestions about process design and development, data migration and improving performance.

## Design and development

When designing a process, ask yourself these initial questions:

-   What does the source data look like and what does the destination data need to look like in terms of fields, format, structure and delimiters?

-   What mapping, transformations, lookups, etc. need to be performed to get the data from source to destination?


Make sure the source and destination data profiles are configured to what the data *should* look like with respect to data types, value formats \(e.g., dates\), delimiters, etc. Use map functions to transform the values. When mapping a date field to another date field, configure the source and destination profile elements with the respective date masks and let the mapping engine reformat the values implicitly, rather than using a date format map function.

Think sequentially!

Start simple and iterate. Create a very simple process that moves data from source to destination to make sure the connections, filters and basic mapping are correct. Then begin introducing validations, routing, advanced mapping/functions, custom error handling, logging, etc.

Start with the end points. When building a new process from scratch, begin by configuring the end points: the source connection/operation in the Start step and the destination connection/operation in a Connector step. The operation configuration \(for most connectors\) will automatically generate the Profile components that you will use in the Map steps, Decision steps or other steps.

Know what the document data looks like before and after every step. You can use Test mode to review the source data at every step in the process.

Use Decision and/or Route steps to address common business validation scenarios or ones that require a different workflow. Do not try to replicate all the business logic that occurs in the destination application.

Try to avoid passing no documents from one step to the next step. When documents move from step to step, tracking information is passed along with them. In most cases, a step expects to receive at least one document and tracking information from the previous step. If a step doesn’t receive documents or tracking information, an exception error may be generated.

Try to create common, reusable components, especially for things like map functions. Create user-defined map functions for all but the simplest mapping transformations to easily reuse and reconfigure the function.

Use dynamic document properties to easily track arbitrary values for a given document without having to stage data somewhere or include it in the document's actual data. \(Often this is a precluded by the connector's profile.\)

Consider where potential points of failure are and how you will capture and handle errors.

Ask yourself, "How often does a process *really* need to run?" Few integrations actually need to be truly real-time, event-based or need to run every minute. Try to schedule processes every 15-30 minutes, hourly or daily. This will make development, testing and, more importantly, monitoring easier.

Extract records incrementally. Avoid extracting all records every time.

-   Most systems capture the last modified date per record. Use connector operation filters to select only records that have been modified since the last time the process ran. \(The preferred method is to query by the process's last successful run date or use your own persisted process property to capture the last modified date from the records themselves.\) See the Process Property Components topic linked below for more information.

-   Another approach is to extract records based on some status or flag field and then update that field to another value after the records have been processed successfully. This can be a good option if your application allows custom or user-defined fields because it is easy for end users to revert the status to reprocess a record.


Limit the amount of records. Do not select all 100,000 records from your database the first time that you run the process. During initial testing, mock up small test files or use filters to restrict the number of records being processed \(e.g., select specific records by ID or name\). As you get more comfortable with the process, then introduce larger data sets.

## Data migration

Here are some tips to follow when you are migrating data.

-   Export or import data to intermediate CSV files. This will enable you to easily massage, sort and "de-dupe" records as necessary and it will facilitate reprocessing.

-   Begin by importing a small set of records to verify your process, mapping, validations, etc. Slowly increase the number of records.

-   Give consideration to how invalid records and errors will be reported. Use connector operation response handling to help identify which records failed. Consider appending warnings to an arbitrary local log file.

-   Use the *Notify* step to write custom log messages to a local log file to get processing results in real time. This is preferable to waiting for results to be reported on the *Manage menu's Process Reporting page* at the completion of the process.


## Improving performance

Here are some suggestions to follow to improve performance:

-   Understand how using cached values in Map Function components and Decision steps can improve performance.

-   Stagger process schedules to maintain performance levels. Many of our users schedule their processes to start at the top of the hour. If possible, make your processes start at other times.

-   Set the Allow Simultaneous Executions check box in the Process Options dialog to allow or prevent repeated executions of the process within a certain time interval.

-   Limit the number of connections and connector calls.

    -   Look for opportunities to batch queries and requests. Note that many application connections batch requests automatically for you "behind the scenes".

    -   If you need to route documents based on multiple values from a lookup, do one lookup in a map function and capture the results in dynamic document properties rather than doing the same connector call in multiple Decision and/or Route steps. See the Document Properties topic linked below for more information.

    -   Use *Cross Reference Table components* for small, static sets of translation values rather than making connector calls.

-   Use the *Process Call* step to call sub-processes. If you clear its “Wait for process to complete” check box, it will allow you to run more different tasks at the same time.

-   You can use the *Flow Control* step to run more of the same tasks at the same time. However, the Run Each Document Individually \(“For Each”\) option within the Flow Control step slows down any process, including processes whose mode is set to General rather than to Low Latency. *Use this option sparingly.*

-   Consider using the *Combine* and *Split Documents* processing steps in the Data Process step to group common data sets. This is better than sending these documents individually into logic steps that perform lookups or connector calls.

-   Note that setting the *Last Successful Run Date* parameter value in the Start step in a *new* process will extract all records from the source application because the deployed process has never before been executed.

-   If appropriate, consider extracting all the records from the destination application and storing them locally \(e.g., in a database table\) to perform quicker lookups. This is often helpful when integrating or migrating very large sets of data to/from an online application, because remote web service calls are much more time consuming than local database calls.


See the troubleshooting topic linked below to review answers to common questions about memory inefficiencies in the Atom.