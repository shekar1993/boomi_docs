# Message step

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-F555B67D-97AC-49FD-BBDF-46C468813802"/>
</head>

The Message step generates a free-flow text message from a dynamic or static set of input parameters. Documents that are sent to a Message step are transformed, and the documents that come out have the format of the message.

![Message icon](../Images/step-ic-message-32_f9ed9fef-3df3-499c-91fd-aeb0198f07b4.jpg)

Some possible uses for messages are to:

- Create highly customized alerts

- Send confirmation messages

- Produce a new document to send through the process

Custom messages can be a mix of static and dynamic content. Dynamic content is populated using parameters, which can represent values such as data from a document field, the current system date/time, a static value, the results of a database query or a number of other values. You can use multiple parameters when creating a message. The placeholder number corresponds to the order of the parameters defined at the bottom of the screen.

A Message step needs to be followed by a step that will do something with the contents of the message. For example, if the Message step contains information that needs to be delivered to recipients via email, you could add a Mail Connector step after the Message step.

## Message step dialog

- **Display Name** - User-defined name to describe the step. If one is not entered, “Message” appears on the step.

- **Combine documents into a single message** - If a document has been split in the process, check this box to combine the multiple resulting messages into a single message before further processing. It is good practice to use this option when sending email alerts to reduce the number of emails sent \(and received\).

- **Message** - The free-flow text message that will be generated. To specify variables, use the following syntax to create a placeholder, starting at 1: `{<parameter_number>}` — for example, `{1}`.

  In messages the single quote (') is a special character. The following points regarding single quotes apply *only* to the message text that you enter. Single quotes are *not* stripped if they are coming in as part of the data.

  - A single quote by itself is stripped from the message. For example, the message text today's date is rendered as `todays date`.
  - Two consecutive single quotes are rendered as a single quote. For example, the message text today''s date is rendered as `today's date`.
  - An open single quote without a closing single quote escapes the rest of the message. For example, if the variable \{1\} is the time using a Date Mask of hh, and the variable \{2\} is the date, an example of the rendering of the message text \{1\} o'clock \{2\} would be `12 oclock {2}`.
  - JSON content in messages must be escaped by wrapping it with single quotes, thereby distinguishing it from a variable.

  The Date Mask in a variable of type Date and Time cannot have an open single quote without a closing single quote.

  - If the Date Mask contains a single quote before some text and a single quote after the text, the single quotes are treated as escape characters. They cause the text between the single quotes to appear in the message. Consider a Date and Time variable using a Date Mask of yyyy.MM.dd G 'at' HH:mm:ss z. An example of the rendering of the variable is `2012.12.18 AD at 15:08:56 PDT` (with the word `at` appearing in the message).
  - You can use a combination of single quotes and two consecutive single quotes to get the results you need. Consider a Date and Time variable using a Date Mask of hh 'o''clock' a, zzzz. An example of the rendering of the variable is `1 o'clock PM, Pacific Daylight Time`.

- **Variables** - Provide one or more values to insert into placeholders defined in the message text. Refer to [Parameter Values](./c-atm-Parameter_Values_23a1eb13-d83b-423e-adf1-d78db4a1fbbd.md) for more information.

  :::note

  There is a 5 MB character limit restriction if you want to pass Parameter data as a variable.

  :::
  