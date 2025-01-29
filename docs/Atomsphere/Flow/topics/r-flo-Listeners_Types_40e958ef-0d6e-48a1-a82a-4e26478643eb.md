# Supported listener types 

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-40e958ef-0d6e-48a1-a82a-4e26478643eb"/>
</head>


Listeners are typically used with the Salesforce and Box. This topic outlines the level of support for the types of listener triggers.

**Note:** Refer to the official documentation for individual third-party connectors to obtain the latest information about available actions/triggers and their current status.

## Box listener types 

|Trigger/action|Status - File|Status - Folder|
|:-------------|:------------|:--------------|
|FILE.UPLOADED|Not supported in Box.|Not supported in Boomi Flow.|
|FILE.PREVIEWED|Supported in Box but not tested in Boomi Flow.|Supported in Box but not tested in Boomi Flow.|
|FILE.DOWNLOADED|Supported and tested with Box and Boomi Flow.|Supported in Box but not tested in Boomi Flow.|
|FILE.TRASHED|Supported in Box but not tested in Boomi Flow.|Supported in Box but not tested in Boomi Flow.|
|FILE.DELETED|Supported in Box but not tested in Boomi Flow.|Supported in Box but not tested in Boomi Flow.|
|FILE.RESTORED|Supported in Box but not tested in Boomi Flow.|Supported in Box but not tested in Boomi Flow.|
|FILE.COPIED|Supported in Box but not tested in Boomi Flow.|Supported in Box but not tested in Boomi Flow.|
|FILE.MOVED|Supported in Box but not tested in Boomi Flow.|Supported in Box but not tested in Boomi Flow.|
|FILE.LOCKED|Supported in Box but not tested in Boomi Flow.|Supported in Box but not tested in Boomi Flow.|
|FILE.UNLOCKED|Supported in Box but not tested in Boomi Flow.|Supported in Box but not tested in Boomi Flow.|
|COMMENT.CREATED|Supported in Box but not tested in Boomi Flow.|Supported in Box but not tested in Boomi Flow.|
|COMMENT.UPDATED|Supported in Box but not tested in Boomi Flow.|Supported in Box but not tested in Boomi Flow.|
|COMMENT.DELETED|Supported in Box but not tested in Boomi Flow.|Supported in Box but not tested in Boomi Flow.|
|TASK\_ASSIGNMENT.CREATED|Supported and tested with Box and Boomi Flow.|Supported and tested with Box and Boomi Flow.|
|TASK\_ASSIGNMENT.UPDATED|Supported and tested with Box and Boomi Flow.|Supported and tested with Box and Boomi Flow.|
|METADATA\_INSTANCE.CREATED|Supported in Box but not tested in Boomi Flow.|Supported in Box but not tested in Boomi Flow.|
|METADATA\_INSTANCE.UPDATED|Supported in Box but not tested in Boomi Flow.|Supported in Box but not tested in Boomi Flow.|
|METADATA\_INSTANCE.DELETED|Supported in Box but not tested in Boomi Flow.|Supported in Box but not tested in Boomi Flow.|
|FOLDER.CREATED|Not supported in Box.|Supported in Box but not tested in Boomi Flow.|
|FOLDER.DOWNLOADED|Not supported in Box.|Supported in Box but not tested in Boomi Flow.|
|FOLDER.RESTORED|Not supported in Box.|Supported in Box but not tested in Boomi Flow.|
|FOLDER.DELETED|Not supported in Box.|Supported in Box but not tested in Boomi Flow.|
|FOLDER.COPIED|Not supported in Box.|Supported in Box but not tested in Boomi Flow.|
|FOLDER.MOVED|Not supported in Box.|Supported in Box but not tested in Boomi Flow.|
|WEBHOOK.DELETED|Not supported in Box.|Not supported in Box.|

## Salesforce listener types 

|Trigger/action|Status|
|:-------------|:-----|
|CREATE|Supported and tested with Salesforce and Boomi Flow.|
|UPDATE|Supported and tested with Salesforce and Boomi Flow.|