# Business Rules step

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-C98A119A-B961-40CC-BB5D-536F6734095A"/>
</head>


Use the *Business Rules* step to work with the profile structure of a document in order to check multiple business rules to determine if a document should be accepted or rejected.

![Business Rules icon](../Images/step-ic-business-rules-49x58_361e1910-1fe0-4b95-9db4-8020472e6f9b.jpg)

This step is similar to the *Cleanse* step, but it is content-driven rather than structural, meaning that you can perform advanced logic and validations against parent/child field data rather than analyze field lengths and data types. The *Business Rules* step also serves as a powerful alternative to the *Decision* step because it can store multiple rules and conditions. Unlike the *Decision* and *Route* steps, each business rule is executed for the number of repeating elements that are used as inputs to that rule.

In addition to performing nested AND/OR field comparisons, you can use the map function library to produce an advanced result set to include in your conditions. If a document fails to meet the condition\(s\), the step aggregates the rejections for the document and allows you to configure a custom error message with dynamic content by using your defined rule inputs.

Successful documents that meet the conditions are sent down the accepted path. Failed documents that do not meet the conditions are sent down the rejected path and contain the data that entered the step. The error message is stored as a document property that you can reference for your messaging. You can then add Exception or Notify steps to force errors at the process or document level.

## Execution of Business Rules

Business rules are executed in the order they are organized in the Rules list.

1.  All rule inputs are calculated.

    -  Fields are gathered.

    -   Functions are executed.

2.  Business rules are executed for each header and/or detail instance.

    -   Conditions are executed.

    -   Condition results are labeled as true or false.

3.  Error messages for false results are aggregated.

4.  The source document is first processed down the Accepted path, followed by the Rejected path.

5.  If the document is rejected, error message XML is attached as a *Business Rules Result Message* document property.