# MLLP Client operation

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-3c8c501c-fed9-494e-8de5-98f2f4d2e854"/>
</head>

The MLLP Client operation contains the outbound MLLP setting for communicating with a specific trading partner. Your trading partner should provide the information to configure the operation.

The operation supports only the Send action.

## Options tab

- **Wait for Response?** - If selected, the connector waits for the listening MLLP server to synchronously respond with acknowledgment messages.

  - **Step Output** - Determines which documents are forwarded to the next step in the process. You can choose to allow the input document to continue or to use the synchronous acknowledgment document when the **Wait for Response** option is selected.

- **Log Messages?** - If selected (the default), messages are logged in the outbound `work/MLLP` folder of the Atom.
