# EDI profile’s Data Elements tab, loop details

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-70c6d9c0-a301-4b37-bbbc-5a01353a77ba"/>
</head>


When you select a child loop in the tree, you can view or edit the child loop's details.

**Name**   
**Description**

**Name**   
Editable name of the loop, which also appears in the tree. A best practice is to default the name to the primary segment that makes up the loop.

**Position**   
Number that indicates the loop’s location in relation to its parent. If you move the loop to a different location its position number changes.

**Loop ID**   
The loop ID used when interpreting this segment as it appears in an inbound document or to identify the desired structure to create when generating the document. Various EDI standards may specify default IDs for certain loops.

**Loop Repeat**   
Identifies the maximum number of times the loop can occur within a single transaction.

**Looping Option**    
Used when writing EDI loops or segments.

-   Unique— only unique instances of a loop or segment are written. If two \(or more\) loops are identical, then only the first instance is written.

-   Occurrence — all repeated instances are written.