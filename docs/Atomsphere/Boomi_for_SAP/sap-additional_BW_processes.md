# Additional BW Processes

<head>
  <meta name="guidename" content="Boomi for SAP"/>
  <meta name="context" content="GUID-b97fe72a-939d-4254-a48b-b04f5b0ab7fe"/>
</head>

If you already have a process in your Boomi account that receives BW extractions, you can modify it by adding a process route after the Start step.

The process route should be set to route based on the datasource on the SAP ZBX_BW_EVENT profile. From there, you can copy the remaining steps of the original process and save them into a new process. Then, add two keys to the process route. The first key should have the name of the datasource from the original process and route it to the copied process. In contrast, the second key should have the name of your new datasource and route it to a new process as described in the "Configure BW Extractor Process" section.

:::note
You should only have one BW LISTENER process per runtime.
:::

