# Send email

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-7fe5ed12-bfea-4090-bab5-0b1657331a6c"/>
</head>

:::warning

This connector is now in Deprecated status. It is no longer available for new users and is not actively maintained. We will provide a minimum six-month notice before its retirement. We recommend upgrading to the newer supported version of this connector.

:::

The *Send email* message action provides additional functionality to the Send email \(simple\) message action when sending an email from a flow.

## Overview

This message action allows the to generate and send an email from a flow.

You can configure the following values for the email:

-   An object *contact* value containing the email address to send the email from.

-   A list *contact* value containing multiple email addresses to send the email to.

-   A list *contact* value containing multiple email addresses to carbon copy \(CC\) the email to.

-   A list *contact* value containing multiple email addresses to blind carbon copy \(BCC\) the email to.

-   The body of the email, using standard HTML formatting in a content value.

-   The body of the email, using text in a string value, as an alternative for email applications that do not render HTML content.

-   A list *$File* value containing a list of file attachments that have been previously uploaded to the Email .


## Input values

This message action requires configuration of the following Input values:

|Name|Type|Required or optional?|Description|
|----|----|---------------------|-----------|
|Attachments|List`<File>`|Optional |A list File value containing a list of file attachments that have been previously uploaded to the Email .|
|Body|String| Optional |A text version of the email body, provided as an alternative for email applications that do not render HTML content.|
|From|Object`<Contact>`|Required |The contact object containing the email address that the email should be sent from. This value is inserted into the **From** field of the generated email. The object **Email** property must be populated with the email address **Username** configuration value used to send the email.|
|HTML Body|Content|Optional |The HTML formatted body content of the email. The content of this value is inserted into the body of the generated email.|
|To|List`<Contact>`|Required |The list of contact objects containing the email addresses that the email should be sent to. These values are inserted into the **To** field of the generated email.**Note:** The object **Email** property must be populated with a valid email address for any contact objects in the list that the email should be sent to.|
|To|(BCC)|List`<Contact>`|Optional |The list of contact objects containing the email addresses that a blind carbon copy of the email should also be sent to. These values are inserted into the **BCC** field of the generated email. The object **Email** property must be populated with a valid email address for any contact objects in the list that the email should be blind carbon copied to.|
|To|(CC)|List`<Contact>`|Optional |The list of contact objects containing the email addresses that a carbon copy of the email should also be sent to. These values are inserted into the **CC** field of the generated email. The object **Email** property must be populated with a valid email address for any contact objects in the list that the email should be carbon copied to.|