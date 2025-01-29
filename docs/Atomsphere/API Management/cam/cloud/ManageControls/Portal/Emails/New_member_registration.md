---
sidebar_position: 2
---

# New Member Registration

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-2367b312-9497-48f2-9c53-e38b78a12683"/>
</head>

The following table describes the fields that are used to set email notification when a new member is registered. 

|**Field** |**Description** |
| -------- | -------- |
|From Email|<p>The "From:" address that the Traffic Manager uses to send the email notifications. </p><p>If the "From:" address belongs to the client's domain, API Management must register the email address with www.authsmtp.com so that these emails are not blocked by SPAM filters. </p><p>After an address is registered, the client receives an email from www.authsmtp.com asking them to authorize API Management's use of the email address. After the email address is authorized, it can be used by the Traffic Manager. If the client wants to change the "From:" address, the client must notify API Management of the change so that API Management can register this new email address with www.authsmtp.com. </p><p>The email address change process can be initiated by clicking the **Click here to update** link. </p>|
|From Name|The name for the email set in the From Email field. |
|Bcc Email|<p>Lists all email addresses that are to be copied in the BCC when the Traffic Manager sends email notification. </p><p>:::note</p><p>Use commas to separate multiple email addresses. For example, John@demo3.com, Jacob@demo3.com, Anne@demo3.com.</p><p>::: </p>|
|Subject|The subject line text of the email. |
|Body|The email body text. |

