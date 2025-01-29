# Trading Partners

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-93a114b8-4f6b-488c-80ed-0e18f5ed4034"/>
</head>

Integration manages B2B requirements through Trading Partners, a way to conduct direct EDI or point-to-point e-business transactions by designating a host partner and a remote partner who connect through an agreed-upon communication protocol.

When you create a pair of Trading Partner components in Integration, you configure the host partner as “My Company” and the remote partner or VAN as your trading partner.

:::warning

After you have created a Trading Partner component, you cannot change the partner type nor the standard.

:::

In a Trading Partner component, you specify:

- The document standard, which includes the document types and file options that meet the specifications defined by your company and trading partners. Boomi supports ASC X12, HL7, ROSETTANET, UN/EDIFACT EDI, TRADACOMS, and ODETTE.

- A communication method used to send and receive trading partner document data. Boomi supports the following communication methods:

  - AS2 — Provides digitally-signed electronic receipts through MDNs \(Message Disposition Notifications\).
  - Disk — Identifies the connection directory to get and send files.
  - FTP — Relies on SSL/TLS encryption, however SSL version 3.0 is disabled in supported browsers.
  - HTTP — Enables an exchange of data with HTTP-enabled servers.
  - SFTP — Relies on the SSH protocol for secure remote logins.
  - MLLP — Provides a minimalist transport protocol. When security is an issue, additional technologies are often layered on top.
  - OFTP2 - Uses encryption methods and ditgital certificates to securely transmit sensitive information.

## Multiple document standards

When you use Trading Partner components in a process, you can specify “My Company” trading partners with different document standards. Then you can run one process for “Partners that I trade with” trading partners that have different standards.

When there are multiple “My Company” trading partners in a process, you designate one trading partner to provide default communication settings. To use the same process across company divisions, you can specify multiple “My Company” trading partners per standard.

## Document archiving

Archiving “raw” documents that pass through a Trading Partner is preferred for many business purposes, including auditing, analytics, and secondary processing,

You can configure a Trading Partner component to enable automatic archiving of documents to a directory on the machine upon which the Atom is running.

- For inbound interchanges, archiving occurs before any data processing and EDI processing occurs.

- For outbound interchanges, archiving occurs after EDI processing and any data processing occurs.

:::note

Data processing refers to the additional steps that occur between the communications step (for example, FTP) and processing EDI documents. EDI processing applies to all steps performed on an EDI document, including parsing the document, duplicate checking, document validation, and so on.

:::

If you want the flexibility to maintain archives anywhere, you can enable custom archiving logic.

- If you enable archiving in a Trading Partner Start step, archiving inbound documents happens after any data processing but before EDI processing occurs. Archiving occurs through processing defined in the step’s Archive path. Before archiving, the Trading partner document properties update the document metadata to facilitate setting the destination directory and file name. For example, archived X12 documents include the entire ISA/IEA interchange and the interchange-level metadata.

- If you enable archiving in a Trading Partner step, archiving outbound documents happens after EDI processing but before any data processing. Archiving happens using processing defined in the step’s Archive path. When sending the documents to the Archive path, they already contain interchange-level metadata.
