# B2B/EDI Management 

<head>
  <meta name="guidename" content="Release Notes"/>
  <meta name="context" content="GUID-5729a457-5cde-4dd9-b0f6-04accd1efc76"/>
</head>

**We added these features:**

- EDI data elements can now repeat. You can toggle the **Repeating** field in the Advanced section of the data element or composite root data element configuration panel or the **Repeat Delimiter** field in the EDI profile's Options tab. (B2B-2981, B2B-3585, B2B-3586, B2B-3592, B2B-3591)

  To learn more about this feature, see the topic [Edi profile's Options tab](../../Integration/Process%20building/r-atm-EDI_Profiles_Options_tab_6261e4ab-3523-482c-807e-89c033f8fc19.md).

- You can use the **Enhanced Composites** option in HL7 EDI profiles, which provides the following features:

  - Data elements, composite data elements, and sub-composite data elements can repeat
  - Composite roots are displayed along with child composites when composites are expanded
  - HL7 templates can be imported with Enhanced Composites enabled (B2B-2981)

  :::info Important

  Using Hl7 profiles with Enhanced Composites enabled in trading partner connectors requires full implementation, which you can request from Boomi. Full implementation will be available by default in a future release.

  :::

  To learn more about this feature, see the topic [Using enhanced composites](../../Integration/Process%20building/int-Using_enhanced_composites.md).

- You can import HL7 segments that use profiles where enhanced composites are enabled. The imported segments contain Composite Root data elements that are not expanded by default. (B2B-3578)

  To learn more about this feature, see the topic [Using enhanced composites](../../Integration/Process%20building/int-Using_enhanced_composites.md).

- Updated older RosettaNet versions to include supplemental standard specifications around data limitations. (B2B-2429)

- The EDIFACT Connector Record object and ODETTE Connector Record object include the following fields in query responses:

  - `release`
  - `version`
  - `controllingAgency` (B2B-3625, B2B-3626)

  To learn more about this feature, see the topics [EDIFACT Connector Record object](https://developer.boomi.com/api/platformapi#tag/EDIFACTConnectorRecord) and [ODETTE Connector Record object](https://developer.boomi.com/api/platformapi#tag/ODETTEConnectorRecord).

- When you filter by a TRADACOMS trading partner in Process Reporting, both Name and Code values are returned for inbound and outbound TRADACOMS documents. (B2B-3895)

  To learn more about this feature, see the topic [Trading Partner results table](../../Integration/Integration%20management/r-atm-Trading_partner_results_table_b4361064-788c-4056-83e2-a055f62f9902.md).

- The following HL7 fields are available to get as document properties:

  - `repetitionseperator` - Repetition Separator
  - `escapecharacter` - Escape Character
  - `outboundackstatus` - Outbound Validation Status
  - `outboundackreport` - Outbound Validation Report (B2B-3377)

  :::note

  `outboundackstatus` and `outboundackreport` are available only after the Trading Partner step runs in the Errors path.

  :::

- Improved validation of HTTP headers in AS2 connectors, AS2 Server connectors, and Shared Server connectors. (B2B-2997)

**We fixed these issues:**

- The ODETTE Connector Record object is now available as a Query import option for the AtomSphere API connector. (B2B-3322)

- For EDI profiles that have Enhanced Composites enabled, when you expand a composite root element, the profile tree no longer collapses. (B2B-3571)

- When you create or edit an existing HL7 version 2.1 profile, PID segments no longer show the Expand Composite option if the standards database does not have details on the composite element's children. (B2B-3612)

- You can now successfully re-run Trading Partner documents by using the Rerun Document operation. (B2B-3632)

- Trading Partner extensions settings are no longer cleared in the extensions dialog when more than one processing group is used in a process. (B2B-3587)

- TRADACOMS trading partners display as expected when you filter by To Trading Parter and From Trading Partner in Process Reporting. (B2B-3861)

- OFTP2 and MLLP outbound connections from Boomi to Boomi no longer fail when Client SSL options are enabled. (B2B-3900)
