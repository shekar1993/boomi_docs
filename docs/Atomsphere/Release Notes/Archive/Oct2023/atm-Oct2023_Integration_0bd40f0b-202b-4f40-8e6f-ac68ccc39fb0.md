#  Integration

<head>
  <meta name="guidename" content="Release Notes"/>
  <meta name="context" content="GUID-0bd40f0b-202b-4f40-8e6f-ac68ccc39fb0"/>
</head>


**We fixed these issues:**

- The Process Property existing values no longer get overridden when adding new ones using the Get Process Property function inside a map. (INT-3952)

- Text fields on the Browse Integration Packs dialog box are no longer cut off. (INT-9516)

- Corrected the defect caused by a connector rollback version, which prevented you from selecting the RabbitMQ connector in the Start step Low Latency and Bridge modes. (INT-9865)

- Configuration values are now set up correctly when dragging a component from the Component Explorer onto the canvas, except for Trading Partner. Same occurs, inconsistently, in Connectors and Operations. These will be corrected in a future release. (INT-8040)

- Environment Extensions are no longer erased by partial updates in deployed and undeployed processes to the same environments. (INT-8135)

  :::info Important

  Following the October 2023 Platform Release, this fix was reverted and will be released in a future release. (INT-10259)

  :::

