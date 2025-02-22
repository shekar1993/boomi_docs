# Exception step

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-8F1B4096-FDC6-46EA-98B3-8B22F046D635"/>
</head>


The Exception step provides the ability to terminate the data flow down a path and define custom error messages to be reported on the Manage menu's Process Reporting page. Exception steps are often used when document data fails to meet certain conditions of a Route or Decision step and should not be processed further.

![Exception icon](../Images/step-ic-exception-32_dd4033dd-9933-4885-bac0-d33044a353fd.jpg)

Custom error messages can be a mix of static and dynamic content. Dynamic content is populated using parameters, which can represent values such as data from a document field, the current system date/time, a static value, the results of a database query, or a number of other values. You can use multiple parameters when creating a message. The placeholder number corresponds to the order of the parameters defined at the bottom of the dialog.

## Exception dialog

**Name**   
**Description**

**Display Name**   
User-defined name to describe the step. If one is not entered, “Exception” appears on the step.

**Title**   
The title of the exception that appears as the subject of the alert message and the initial log message in the process log.

**On Failure Behaviour**   
-   **Continue executing other documents:** If selected \(recommended for most situations\), only the single document that reached the Exception step is marked as failed. Other documents continue to process normally.
-   **Stop executing the entire process and mark all documents as failed:** If selected, the entire process halts immediately and the process and all documents are marked as failed.

**Message**   
The free-flow text message that is generated by the Exception step and used as the alert message and log details. To specify variables, use the following syntax to create a placeholder, starting at 1: `{<parameter number>}`.

:::note

In messages the single quote (') is a special character. The following points regarding single quotes apply *only* to the message text that you enter. Single quotes are *not* stripped if they are coming in as part of the data.

- A single quote by itself is stripped from the message. For example, the message text today's date is rendered as `todays date`.
- Two consecutive single quotes are rendered as a single quote. For example, the message text today''s date is rendered as `today's date`.
- An open single quote without a closing single quote escapes the rest of the message. For example, if the variable {1} is the time using a Date Mask of hh, and the variable {2} is the date, an example of the rendering of the message text {1} o'clock {2} would be `12 oclock {2}`.
- JSON content in messages must be escaped by wrapping it with single quotes, thereby distinguishing it from a variable.

The Date Mask in a variable of type Date and Time cannot have an open single quote without a closing single quote.

- If the Date Mask contains a single quote before some text and a single quote after the text, the single quotes are treated as escape characters. They cause the text between the single quotes to appear in the message. Consider a Date and Time variable using a Date Mask of yyyy.MM.dd G 'at' HH:mm:ss z. An example of the rendering of the variable is `2012.12.18 AD at 15:08:56 PDT` (with the word `at` appearing in the message).
- You can use a combination of single quotes and two consecutive single quotes to get the results you need. Consider a Date and Time variable using a Date Mask of hh 'o''clock' a, zzzz. An example of the rendering of the variable is `1 o'clock PM, Pacific Daylight Time`.

:::

**Variables**   
Used to provide one or more values to insert into placeholders defined in the message text. See the Parameter Values topic for more information.
