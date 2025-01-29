# Decision step

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-622D5243-D439-4E88-9BEC-418F98396157"/>
</head>


The Decision step routes documents based on a true/false comparison of two values. Those values can be anything from field values in the current document \(profile elements\), static values, results of a database, an application query, and more.

![Decision icon](../Images/step-ic-decision-32_03940835-1c11-44a3-b489-1bff4958f987.jpg)

The Decision step's logic is executed *once* for each document that reaches the step. This means that if a document contains multiple records \(for example, a batch file\) or the Decision step's logic needs to be applied to a "detail" level field \(for example, item codes on each order line\), you must split the document before the Decision step.

At execution time, "True" documents are processed to completion before the "false" documents are processed. This is important to understand if processing on the False path depends on something processed on the True path. For example, in a sales order synchronization process, first you may want to check whether the customer already exists and if it does not, create a new customer before inserting the sales order.

Here are some common uses of the Decision step.

-   Checking for the existence of a record in the destination system to determine whether to create or update it.

-   Database — The first value is the result of a SQL statement \(often a simple `SELECT COUNT(1) FROM SOME_TABLE WHERE ID=?`\), the comparison is "Equal to", and the second value is a static value of '1'.

-   Application — The first value is a profile element from a connector call response profile, the comparison is "Not equal to", and the second value is a static value of ' '.

-   Checking for the existence of value in a given profile element.

-   The first value is a profile element, the comparison is "Not equal to", and the second value is a static value of ' '.

:::note

Null values from a profile element or connector call are treated as empty strings \(' '\) for comparison. To compare against a null value in the inbound data, the Second Value field’s Static Value setting in the Decision step should be left empty.

:::

## Decision dialog

**Name**   
**Description**

**Display Name**   
User-defined name to describe the Decision step. It might be helpful to phrase the name as a question that the decision will answer, such as "Does Order Exist?" If you do not specify a display name, the step will not have a label.

**First Value**   
Used to select from the Parameter Values dialog the first value to be compared.

**Comparison**   
Used to select one of the following comparison operators: Equal To, Not Equal To, Greater Than, Greater Than or Equal To, Less Than, Less Than or Equal To, Matches [Java Regular Expression](https://docs.oracle.com/javase/8/docs/api/java/util/regex/Pattern.html), Matches Wildcards.

Use Matches Wildcards to match a value on a single line input. To match a value in a multi-line input, use Matches Regular Expression. Wildcards and regular expressions are valid only in the Second Value field of a comparison; if entered in the First Value field, they are ignored.

An asterisk (*) is used with Matches Wildcards as a wildcard to match one or more occurrences of any character. A question mark (?) is used to match a single occurrence of any character.

**Second Value**   
Used to select from the Parameter Values dialog the second value to be compared.