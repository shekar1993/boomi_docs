import OperationEnd from './_operationEnd.md'

# Disk (Legacy) operation 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-33e171bb-3e12-4c97-b47d-4bab7bfff6c8"/>
</head>

The Disk (Legacy) operation defines how to read files from or write files to a given directory.

The Disk (Legacy) operation supports two types of actions:

-   Get — Used to read files.

-   Send — Used to write files.


## Options tab, Get action 

When you configure a Get action, the following fields appear on the Options tab:



**File Filter** - 
Reads only files with a file name that matches the file filter. The file filter is used based on the selected matching properties.

**File Matching Type** - 
You can filter for matching files using the following methods:

-   Wildcards uses the simple file filters \* and ? characters to determine if a file should be read. The \* represents multiple characters. The ? represents a single character. For example, to read all files that end with the extension .txt enter \*.txt.
-   Regular Expressions are a more powerful matching option than wildcards and can include complex regular expressions.

-   Exact Match speeds up filter processing and is faster than the wildcard option when you have a large number of files to search.


All of the file matching types are case-sensitive, however, you can build case-insensitive regular expressions. See the syntax for help on how to build regular expressions.

**Max Files to Read** - 
Sets the maximum number of files to read at one time. The default value of "0" gets all matching files in the directory.

**Delete files after reading?** - 
If selected, deletes files after reading them into the process. If deletion is unsuccessful due to insufficient access rights, a warning message is logged.

Boomi recommends selecting this check box when executing in production mode to prevent data from being processed twice and clearing this check box when testing.

**Fail if unable to delete files?** - 
If selected, if an attempt to delete files after reading them into the process is unsuccessful due to insufficient access rights, the process fails with an error.

## Options tab, Send action 

When you configure a Send action, the following fields appear on the Options tab:



**Create Directory if it doesn't exist?** - 
Integration will create the directory specified in the new disk connection if it does not exist, rather than aborting.

**File Naming Options** - 
Create, overwrite, append, or abort file names:

-   Create unique file name if file exists — If the file name exists, attach an incremental number to the file until finding a file name that does not exist. For example, if `output.txt` is being written but already exists, then `output1.txt` is attempted, then `output2.txt`, and so on until a file name is found that does not exist.
 -   Overwrite if file exists — If the file exists, overwrite the file.

-   Append if file exists — If the file exists, append to the end of the file.

-   Abort if file exists — If the file exists, throw an error \(causing the process to fail\).


<OperationEnd />