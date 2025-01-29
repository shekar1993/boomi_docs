import OperationEnd from './_operationEnd.md'

# Mail operation 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-7e0596ae-4974-4270-9834-8a96eedd683a"/>
</head>

The Mail operation defines what you want to do with the connection, such as retrieve and send email.

The operation supports the following types of actions:

-   Get — Used to retrieve messages from a POP mail server.

-   Send — Used to send messages to an SMTP mail server.


## Options tab, Get action 
When configuring a Get action, the following fields appear on the Options tab:




**From Address** - 
Leave blank if Integration should take all files from all Senders in the inbox. Enter the address if there is a particular sender from whom Integration should take emails.

**Disposition** - 
Set Disposition to:

-   Attachment — if the data to be processed is contained in an attachment to the email message.
-   Inline — if the data to be processed is contained in the body of the email message.


**Delete From POP Server** - 
Select to delete the email message after it has been read to prevent the same message from being read in twice.

## Options tab, Send action 

When configuring a Send action, the following fields appear on the Options tab:


:::note

There is no limit to the number of email addresses that you can add in the **To** field. However, as a best practice, create an email group outside of Integration for the large number of users and email addresses. Then, enter the address of the email group in the **To** field. When you use an email group, you can update the list of recipients when appropriate without having to update and redeploy the processes.

:::



**From** - 
The email address from which Integration sends email messages. If you use the Mail connector to send an attachment and leave the From field blank, you receive a message saying that the From address is missing.

**To** - 
The email address\(es\) to which Integration sends email messages. Separate multiple addresses with a semicolon. If you use the Mail connector to send an attachment and leave the To field blank, you receive a message saying that the To address is missing.

**Subject** - 
The value in the Subject field of the email messages that are sent.

**Disposition** - 
Set Disposition to:

-   Attachment — if the document data should be sent as an attachment. If you use this option, you can use the Mail \> Body document property in a Set Properties step to create the body of the email message.
-   Inline — if the document data should be sent in the body of the email message.


**Attachment Content Type / Content Type** - 
If the disposition is set to Attachment, use this field to specify the file format for the attachment. If the disposition is set to Inline, use this field to specify the file format for the body of the email message.

Two-part identifiers for file formats on the Internet:

-   text/plain

-   text/HTML

-   text/XML

-   application/binary

-   application/EDIFACT

-   application/EDI-X12

-   application/XML


For more information, see [content type definitions](http://en.wikipedia.org/wiki/Internet_media_type).

**Body Content Type** - 
\(Available if Disposition is set to Attachment\) Used to specify the file format for the body of the email message. Use the **Mail** \> **Body** document property in a Set Properties step to create the body of the email message.

-   text/plain
-   text/HTML
-   text/XML


<OperationEnd />