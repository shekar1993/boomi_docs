# B2B/EDI Management 

<head>
  <meta name="guidename" content="Release Notes"/>
  <meta name="context" content="GUID-d5696240-2082-4ba5-9963-e3abec191b3a"/>
</head>


**We added these features:**
- When a Trading Partner step or a Start step has multiple trading partners, you can choose how to handle trading partner errors with the **Error Handling Option** field:
  - **Stop Process on Error** (Default) -The process stops executing if one trading partner connection has an error.
  - **Continue Process on Error** - The process continues executing even if one of the trading partner connections has an error.

(B2B-2954)

  To learn more about this feature, see the topic [Start step dialog's Trading Partner option](/docs/Atomsphere/Integration/Process%20building/r-atm-Start_Shape_dialogs_Trading_Partner_option_0ddc68ec-862f-45e2-a20b-bb3398e73b4b.md).

- In the OFTP2 Client Operation, you must select the **Change Direction** checkbox in the Options tab to add a Decrypting Certificate, Acknowledgment Signing Certificate, and Signature Verification Certificate for the Send operation. (B2B-3598)

  To learn more about this feature, see the topic [OFTP2 Client operation](/docs/Atomsphere/Integration/Connectors/int-OFTP2_client_operation_a56473ee-12be-4346-9e19-03fb469c56fa.md).

- All process executions support OFTP2 document tracking across all matching documents. (B2B-3317)

- End-to-end acknowledgments are visible and tracked in the following:
  - OFTP2 Client connector and operation
  - OFTP2 Sever operation and operation
  - Inbound and outbound trading partner executions

(B2B-3532)

- You can Query the OFTP2 Connector Record object to receive the following additional fields:
  - objecttype
  - initiator_ssidcode
  - responder_ssidcode
  - sfidorig
  - sfidsec
  - sfidcomp
  - sfidciph
  - sfiddesc
  - sfidsign
  - sfidosiz
  - sfidenv

 (B2B-3533)

  To learn more about this feature, see the topic [OFTP2 Connector Record object](/docs/Atomsphere/Integration/Connectors/int-OFTP2_client_operation_a56473ee-12be-4346-9e19-03fb469c56fa.md).

**We fixed these issues:**

- Signed and unsigned NERPs now use the correct format to be accepted by OFTP2 certified stations. (B2B-3417)

- When an OFTP2 client connects to a remote OFTP2 server, it appropriately validates the server's ODETTE ID and password. (B2B-3426)

- The Name field on the TRADACOMS Control Information tab no longer sends a single space character if the value is left empty.

    :::note If you require a single space character for the Name field, you must input a space for the value rather than leaving it blank.
    
    :::

  (B2B-3506)

- The TRADACOMS connector writes all segments even if the MTR segment is missing. (B2B-3521)
- Component references are now set correctly when you use the Trading Partner Component API to update a trading partner. (B2B-3576)

- For outbound TRADACOMS messages, when you specify the Sender ID Qualifier connector property (Code) but do not specify the Sender ID connector property (Name) , the Receiver now receives the message successfully. (B2B-3545) 

- The Trading Partner filter on the Process Reporting page now works as expected when you select "Custom document standard" and either "from trading partner" or "to trading partner". (B2B-3515) 