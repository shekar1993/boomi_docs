# B2B/EDI Management January 2025 Release Notes

<head>
  <meta name="guidename" content="Release Notes"/>
  <meta name="context" content="GUID-332380c4-75ed-472e-94aa-8f1b55202118"/>
</head>

**We added these features:**

- When you configure users for an MLLP Server Operation routing by route key, each user must have a different SSL certificate. (B2B-4715)

  To learn more about this feature, refer to [MLLP Server Operation](../../Integration/Connectors/r-atm-MLLP_Server_operation_6c1c66b8-3303-47dc-bed0-0289c9251193.md).

- You can use the JMX client with the MLLP Server to:

  - List certificates in the trust store
  - Export the trust store to a file on disk (B2B-4607)

  To learn more about this feature, refer to [MLLP Server Settings panel](../../Integration/Integration%20management/r-atm-MLLP_Server_Settings_panel_e60ac7aa-e6ce-45e9-9b5f-7701bb443cc8.md).

- You can download MLLP Artifacts from the Log Files panel for multi-tenant runtimes in Atom Management. (B2B-4785)

  To learn more about this feature, refer to [Log Files panel](../../Integration/Integration%20management/r-atm-Log_Files_panel_39d2ee11-6a63-4598-80da-b0f2553a206c.md).

**We fixed these issues:**

- The MLLP Client connector completes with an error instead of timing out when there is an SSL handshake failure. The error message includes details about the SSL failure. (B2B-4622)

- Added support for HL7 escape sequences starting with `\C`, `\M`, and `\`. (B2B-4490)

- When you rerun a document, it is routed through the correct trading partner in a processing group or the Trading Partner step. (B2B-4417)

- When you rerun a document for a multiple standard Trading Partner Start step configuration, the rerun document properly displays in the rerun execution in Process Reporting. (B2B-4398)

- When you first run an MLLP Listen operation on a new Atom, it no longer fails if there are no configured trading partner processes. (B2B-4302)

- The MLLLP Client now correctly times out according to the **Send Timeout** value that is configured in the MLLP Send settings for SSL configurations. (B2B-4174)

- When an MLLP listener is undeployed, all certificates for all certificate components are removed. (B2B-4628)

- Updated help text in the MLLP Server Connector for the **Log Message?** checkbox to refer to the correct directory to which the MLLP Server connector writes messages. (B2B-4677)

- Sub-accounts no longer see the SSL certificate column on the MLLP Server Settings panel for a port that has been assigned to them by a parent account. (B2B-4637)
