# Connector operation's Archiving tab 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-061fbf70-1034-4bf3-b795-e952f9338dbe"/>
</head>


You can automatically archive the documents that pass through an operation for auditing or troubleshooting purposes. When enabled, documents are archived to the specified local directory on the machine where the Atom is running. Archived files are named: `<date_time><document_index><Operation_name>_unique_number.dat`.

The following fields appears on an operation's **Archiving** tab:




**Enable Archiving** - 
 If selected, archives documents passing through an operation.

**Directory** - 
Used to specify the directory for archived documents. This directory is on the machine where the Atom is running.

**Note:** Processed document archiving at the Atom level is an optional feature that is an alternative to archiving at the connector operation level.