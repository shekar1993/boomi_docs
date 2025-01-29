# Business Rules Error Message window

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-24320144-34c2-4777-84ff-e64fa7c517d1"/>
</head>


The Error Message window allows you to create a custom message that can use the dynamic inputs from the Inputs list along with hard-coded message data. When you insert values from the list, they create a numerical syntax that binds to the numbered field in the lower value window.

Ensure that the number preceding the value name \(Example: 1. Company\) matches with the numerical syntax in the Error Message window \(Example: \{1\}\). The length of business rule error messages is limited to 10000 characters per document.

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

The error message is generated for each business rule failure when the conditions are not met. If the document contains repeating detail fields, the *Business Rules* step iterates through each detail and reports a unique error message. After all rules are executed, the failures are aggregated and reported in an XML format.

Here is a sample error message in XML:

```xml
<business_rule_failures>
<business_rule_failure rule="Rule Name 1">Error Message 1</business_rule_failure>
<business_rule_failure rule="Rule Name 2">Error Message 2</business_rule_failure>
</business_rule_failures>
```

In order to reference the error message for the rejected document, you must use a document property parameter lookup \(**Document Property** \> **Meta Information** \> **Base** \> **Business Rules Result Message**\). You can commonly add this parameter value to a Message or Notify step to report the failure to end users. Although this is similar to the result messaging for *Try/Catch* and *Cleanse*, the *Business Rules* step is different in that it has the ability to aggregate multiple error messages per document.