# Connectivity development

<head>
  <meta name="guidename" content="Release Notes"/>
  <meta name="context" content="GUID-054f0b74-6ce8-4415-b67d-e3919c4938e1"/>
</head>

## Connector SDK

**We added these features:**

- To enable connector developers to have contextual process understanding while executing on an OperationRequest, we have introduced access to the Top Level Execution ID and the Top Level Process ID in all operations through new `getTopLevelExecutionId` and `getTopLevelProcessId` methods. To learn more, see this [javadoc](https://boomisdkjavadoc.s3.amazonaws.com/javadoc/2.18.2/com/boomi/connector/api/OperationRequest.html). (CON-9056)


- You can utilize an exception to upload large connectors. (CON-9020)


**We fixed these issues:**

- Validations for the `supportsBrowse` descriptor setting now allow custom operations to be considered as unique operations even if they share the same base type and now check for uniqueness of `customTypeLabel` and `customTypeId`. (CON-3860)

