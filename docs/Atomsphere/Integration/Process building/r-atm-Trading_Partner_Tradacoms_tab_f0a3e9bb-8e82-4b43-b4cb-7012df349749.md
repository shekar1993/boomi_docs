# Trading Partner TRADACOMS Standard tab 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-f0a3e9bb-8e82-4b43-b4cb-7012df349749"/>
</head>


The Tradacoms Standard tab is where you set delimiters \(Basic Tradacoms Options\) and control information.

## Basic Tradacoms Options 

Delimiters are flags that you define to separate specific elements, terminators, and composites.

**Name**   
**Description**

**Element Delimiter**  
 Sets the delimiter between data elements in segments in outbound messages:

 -   Plus \(+\) Delimited
 -   Star Delimited

 -   Comma Delimited

 -   Tab Delimited

 -   Tick Mark \(\`\) Delimited

 -   Bar Delimited \(\|\)

 -   Colon \(:\) Delimited

  -   Byte Character —  Sets the delimiter to the formatted byte character typed in the adjacent field. For example, 0XFF. The format should be parsable by the method described in  Oracle’s documentation.

-   Other Character — Sets the delimiter to the character typed in the adjacent field.


**Segment Terminator**  
 Sets the end character for segments in outbound messages:

-   Single Quote \(‘\)
 -   New Line \(No End Character\)

 -   Tilde \(~\)

 -   Byte Character —  Sets the delimiter to the formatted byte character typed in the adjacent field. For example, 0XFF. The format should be parsable by the method described in Oracle’s documentation.

 -   Other Character — Sets the delimiter to the character typed in the adjacent field.


**Composite Delimiter**  
Sets the delimiter between composites within segments in outbound messages:

 -   Colon \(:\) Delimited
 -   Plus \(+\) Delimited

 -   Star Delimited

 -   Comma Delimited

 -   Tab Delimited

 -   Tick Mark \(\`\) Delimited

 -   Bar Delimited \(\|\)

 -   Byte Character —  Sets the delimiter to the formatted byte character typed in the adjacent field. For example, 0XFF. The format should be parsable by the method described in Oracle’s documentation.

 -   Other Character — Sets the delimiter to the character typed in the adjacent field.


**Include Reconciliation Message**   
 \(Available only for This is a partner I Trade with\) If selected, a message is included at the end of all interchanges sent by this trading partner to acknowledge the receipt and processing of this envelope.

## Tradacoms Control Information 

Add control information to your document envelope headers and trailers. Enter either code or name or both but do not leave both fields blank.

## Additional resources 

[Oracle’s documentation](https://docs.oracle.com/javase/7/docs/api/java/lang/Integer.html#decode(java.lang.String))