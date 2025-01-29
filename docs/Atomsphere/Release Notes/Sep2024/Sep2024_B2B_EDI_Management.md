# B2B/EDI Management

<head>
  <meta name="guidename" content="Release Notes"/>
  <meta name="context" content="GUID-8dfd82e9-f744-4b97-8d63-d187cbfe7e01"/>
</head>

**We added these features:**

- You can assign a routing key to MLLP server ports and corresponding MLLP listen operations, allowing you to route incoming MLLP messages to a specific process based on the routing key rather than identifiers in the HL7 or X12 EDI message. (B2B-4084)

  To learn more about this feature, refer to [MLLP Server Settings panel](../../Integration/Integration%20management/r-atm-MLLP_Server_Settings_panel_e60ac7aa-e6ce-45e9-9b5f-7701bb443cc8.md) and [MLLP Server operation](../../Integration/Connectors/r-atm-MLLP_Server_operation_6c1c66b8-3303-47dc-bed0-0289c9251193.md).

- Updated the MLLP Server Settings panel to include paging, sorting, and filtering, giving you more flexibility in how you view and manage ports. (B2B-4249, B2B-4278, B2B-4279, B2B-4346)

  To learn more about this feature, refer to [MLLP Server Settings panel](../../Integration/Integration%20management/r-atm-MLLP_Server_Settings_panel_e60ac7aa-e6ce-45e9-9b5f-7701bb443cc8.md).

- Improved error handling for the MLLP Server connector, including standards-based acknowledgments for failed routes and certificates, and string acknowledgments for non-standard data. (B2B-4222)

  To learn more about this feature, refer to [MLLP Server operation](../../Integration/Connectors/r-atm-MLLP_Server_operation_6c1c66b8-3303-47dc-bed0-0289c9251193.md).

**We fixed these issues:**

- An error no longer displays when you use an MLLP Client connector on an Atom without also configuring an MLLP Server connector. (B2B-4376)

- When the `com.boomi.container.useExtendedEDIParsing` property is set to true, but enhanced composites are disabled on an EDI profile, special characters are escaped with backslashes. (B2B-4389)

- When you rerun an EDI document, only the selected document is processed. (B2B-4396)
