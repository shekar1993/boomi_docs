import TrackingDirection from './_TrackingDirection.md'
import ReturnErrRes from './_ReturnResponse.md'

# Slack operation 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-c66e168a-2607-4c9c-90a4-606f530b1d72"/>
</head>


The Slack operation defines how to interact with your Slack account.

The operation represents a specific action \(Query, Create, Update, etc.\) to be performed against a specific Slack record type or object type \(files, groups, channels, etc.\). Create a separate operation component for each action/object combination required for your integration.

The Slack operation supports the following actions:

-   Get — retrieves channels info, files info, groups info, users info, users presence

-   Query — searches channels history, channels list, files, files list, groups list, group history, users list, usergroups list, messages

-   Create — creates channels, chat messages, groups, child groups, usergroups

-   Delete — deletes chats and files

-   Update — updates chats and usergroups

-   Execute — writes to the following endpoints:

    -   Channels — archive, invite, join, kick, leave, mark, rename, setPurpose, setTopic, unarchive
    -   Files — revokePublicURL, sharedPublicURL, upload binary, upload text
    -   Groups — archive, close, invite, kick, leave, mark, open, rename, setPurpose, setTopic, unarchive
    -   Usergroups — disable and enable

## Options tab 

Click **Import Operation**, then use the Import wizard to select the object with which you want to integrate. The following table describes the fields for each action type:



**Connector Action** - 
 Displays the action you specified in the Import Wizard.

<TrackingDirection />

**Request Profile** \(Execute, Create, Delete, Update\)  
  The auto-generated request JSON profile.

**Response Profile** \(Query, Execute, Create, Get, Delete, Update\)  
  The auto-generated response JSON profile.

<ReturnErrRes />