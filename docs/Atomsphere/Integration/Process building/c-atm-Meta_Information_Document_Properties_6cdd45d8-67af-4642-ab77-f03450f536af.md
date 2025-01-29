# Meta information document properties

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-6cdd45d8-67af-4642-ab77-f03450f536af"/>
</head>


Some process steps set document properties with the results of their execution.

These properties are found under the "Base" category, are read-only, and are populated after the document has successfully passed through the step.

|Property|Description|
|--------|-----------|
|Application Status Code|Set by an outbound connector step. Contains the status code returned from the underlying application. Eliminates the need to reference a "response" profile to retrieve the status code for determining success/failure and logging. This is most relevant when the Send operation is configured to "Return Application Error Responses". Often this value will simply be blank if the call was successful.|
|Application Status Message|Set by an outbound connector step. Contains the status message returned from the underlying application. Eliminates the need to reference a "response" profile to retrieve the status message for logging. This is most relevant when the Send operation is configured to "Return Application Error Responses".|
|Business Rules Result Message|Error message set by the Business Rules step.||Cleanse Result Message|Validation message set by the Cleanse step. Useful in constructing alerts or messages for end users.|
|Listener Batch Index|The alphabetic, numeric, or alphanumeric value that corresponds to the index a connector provides when a listener batch is created. Useful when analyizing payloads submitted while using listener batching.|
|Listener Batch Payload Sequence|The order in which a payload is added to a listener batch. Useful when analyizing payloads submitted while using listener batching and determining the order in which payloads are added to an individual batch.|
|Size|The size of the document that was processed, in bytes, which can help with process design and planning.|
|Try/Catch Message|Document-level errors for one or more documents that fail during an execution and that are captured by the Try/Catch step.|