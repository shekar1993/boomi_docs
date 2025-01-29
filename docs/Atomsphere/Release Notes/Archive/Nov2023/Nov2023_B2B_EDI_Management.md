# B2B/EDI Management 

<head>
  <meta name="guidename" content="Release Notes"/>
  <meta name="context" content="GUID-390a088d-19f1-4240-8b60-30a302c6a0e2"/>
</head>

**We added these features:**

- You can get the following fields as document properties and tracked fields in MLLP messages: Network Sender Address and Network Receiver Address. (B2B-3335)

  For more information about this feature, see the topic [Document properties](../../Integration/Process%20building/c-atm-Document_Properties_8d6971ff-fcda-49ff-8c3d-e6a5c716c329.md).

- You can get `Acceptackstatus` and `Acceptackreport` as document properties for an HL7 trading partner with an MLLP connector. These properties are available in the Boomi Enterprise Platform for the following:
  - Route step
  - Decision step
  - Notify step
  - Process Reporting tracked fields (B2B-3376)

  For more information about this feature, see the topic [Document properties](../../Integration/Process%20building/c-atm-Document_Properties_8d6971ff-fcda-49ff-8c3d-e6a5c716c329.md).

- The following tracked fields for MLLP Server and MLLP Client connectors are available as standard connector document properties for any step that uses them:
  - Application Sender ID
  - Application Receiver ID
  - Facility Sender ID
  - Facility Receiver ID
  - Network Sender Address
  - Network Receiver Address
  - (MLLP Client) Host
  - (MLLP Client) Port (B2B-3616)

  For more information about this feature, see the topic [Standard document properties](../../Integration/Process%20building/c-atm-Standard_connectors_document_properties_b1a34b9f-b9cf-4eac-ba88-767c6376b70e.md).
