# EDI profile auto-generate options

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-3cc27f43-b280-47f8-99fe-025aae16f79f"/>
</head>


A segment in an EDI profile can specify additional criteria to uniquely determine the segment when the segment ID and context are insufficient to read data.

The additional criteria includes a child data element and a string value for the element. The value for the data element defined in the additional criteria is used automatically when writing data.

EDI data element's Auto-Generate Option field has three choices: Hierarchical Level 1, Hierarchical Level 2, and Hierarchical Level-Summary. You can use these options to write some EDI profile types. The combination of the additional segment criteria and these auto-generated options enables reading and writing HL segments in 856 transaction sets.

:::note

These EDI profile settings are common in the X12 856 transaction type but may not be a requirement of your EDI integration.

:::

## Hierarchical level segments

EDI profiles can contain segments that have the same segment ID but reference different segments. These are not just multiple repeating loops of the same segment but segments from different structural contexts. Thus, determining a segment based on the segment ID alone can be problematic.

For example, HL segments in an 856 profile designate the start of different hierarchical levels \(loops\) in the profile. The value of the HL03 data element indicates a specific HL segment. An S in the HL03 defines the HL shipment loop, O is the order loop, etc. Additional optional segment criteria in the segment configuration allow you to specify the data element and the corresponding value.

Another unique property of HL segments are values for the HL01 and HL02 data elements. HL01 defines a counter for all HL segments in the data that starts at 1 for the first HL and increments by 1 for each subsequent HL independent of the looping context. HL02 for an HL segment references the HL01 value for its parent HL and defines the hierarchical structure. Auto-generate actions automatically populate these counter and reference values when writing an EDI profile. Hierarchical Level 1 is defined on the HL01 data element for all of the HL segments in the profile. When the EDI data is written, counter increments for each HL segment are written. Hierarchical Level 2 writes the HL02 to reference the appropriate parent HL.

The Hierarchical Level-Summary is the total number of HL segments in an EDI document. For an 856 transaction type, set this value in the CTT01 data element.