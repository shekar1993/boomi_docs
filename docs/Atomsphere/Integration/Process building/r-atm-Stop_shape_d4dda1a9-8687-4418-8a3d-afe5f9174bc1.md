# Stop step

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-85A6B7A6-9AE2-431F-9848-8443E59F6361"/>
</head>


The Stop step provides the ability to terminate the data flow in a process path. The Stop step represents a successful conclusion and therefore does not generate an error message.

![Stop icon](../Images/step-ic-stop-32_e5cd4b14-386d-4a33-ac46-c0b688e97488.jpg)

If your process requires the path to end with an error, use an Exception step instead.

This step can be used to simply signify the end of a processing path or to stop further processing of a document. For example, if a document fails to meet the conditions defined in a Route or Decision step, you may want to halt further processing of the document.

When you configure a Stop step, the Stop Properties dialog opens. It contains the following controls.

**Name**   
**Description**

**Display Name**   
User-defined name to describe the step. If one is entered, it appears in addition to the label determined by how you set the following check box.

**Continue processing other execution paths** 
Determines whether the document\(s\) should continue to be executed elsewhere in the process, typically down another branch path.

-   If selected, the step displays "End and continue" in the process. The document\(s\) continue through the process.

-   If cleared, the step displays "End and return" in the process. The process stops when one document reaches this step. You should clear this check box only if you want to halt processing of the document\(s\).